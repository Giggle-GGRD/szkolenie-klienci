require("dotenv").config();
const express = require("express");
const fetch   = require("node-fetch");
const path    = require("path");

const app  = express();
const PORT = process.env.PORT || 3333;
const KEY  = process.env.ANTHROPIC_KEY;
const OPENAI_KEY = process.env.OPENAI_KEY;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Glosy dostepne w gpt-4o-mini-tts
const VOICES_MALE   = ["ash", "ballad", "echo", "onyx"];
const VOICES_FEMALE = ["coral", "nova", "sage", "shimmer"];
const ALL_VOICES    = [...VOICES_MALE, ...VOICES_FEMALE];

// Wykryj emocje z tekstu i buduj instrukcje dla TTS
function buildVoiceInstructions(text, voice) {
  const t = text.toLowerCase();
  const isMale = VOICES_MALE.includes(voice);
  const genderNote = isMale
    ? "You are a male customer speaking Polish."
    : "You are a female customer speaking Polish.";

  // Wykryj dominujacy nastroj
  let emotion = "neutral but slightly impatient";
  if (/\b(skandal|nieakceptowaln|natychmiast|absolutnie|nie do przyjecia|oszustwo|nic nie robicie|kpina|idioci|bezczel|skandalicz)/.test(t)) {
    emotion = "very angry and outraged, raising voice, sharp tone";
  } else if (/\b(zl[ey]|wkurzon|denerwuj|irytuj|oburzony|pretensje|zarzut|groz|nie ma mowy|niedopuszczaln)/.test(t)) {
    emotion = "angry and frustrated, tense voice, irritated";
  } else if (/\b(ale jak|dlaczego|nie rozumiem|co to znaczy|jak to mozliwe|to niemozliwe|nie wierze)/.test(t)) {
    emotion = "confused and upset, disbelieving tone";
  } else if (/\b(placz|rozpacz|nie wiem co|pomoz|prosze|blagram|desperacj)/.test(t)) {
    emotion = "distressed and emotional, voice breaking slightly";
  } else if (/\b(doskonale|rozumiem|oczywiscie|tak|dobrze|zgadzam|chcialem|chcialabym)/.test(t)) {
    emotion = "calm but firm, assertive customer";
  } else if (/\b(nie zaplacic|sadzie|prawniku|mediach|gazecie|opinia|recenzj|internet)/.test(t)) {
    emotion = "threatening and cold, controlled anger";
  }

  return `${genderNote} Speak naturally with realistic human prosody, breathing, and micro-pauses — like a real person, not a robot. Emotion: ${emotion}. Speak Polish with authentic Polish accent and intonation. Vary your pace — slow down on key complaints, speed up when agitated. Do NOT sound like a text-to-speech system.`;
}

// TTS endpoint - OpenAI gpt-4o-mini-tts (naturalne ludzkie glosy)
app.post("/api/tts", async (req, res) => {
  try {
    if (!OPENAI_KEY) {
      return res.status(503).json({ error: "OPENAI_KEY not configured" });
    }
    const { text, voice, speed = 1.0 } = req.body;

    // Losuj glos M lub K jesli nie podano
    const selectedVoice = voice && ALL_VOICES.includes(voice)
      ? voice
      : ALL_VOICES[Math.floor(Math.random() * ALL_VOICES.length)];

    const instructions = buildVoiceInstructions(text, selectedVoice);

    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        input: text,
        voice: selectedVoice,
        instructions: instructions,
        speed: Math.min(4.0, Math.max(0.25, speed)),
        response_format: "mp3"
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("TTS error:", errText);
      return res.status(response.status).json({ error: errText });
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("X-Voice-Used", selectedVoice);
    response.body.pipe(res);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint info o dostepnych glosach
app.get("/api/tts/voices", (req, res) => {
  res.json({
    model: "gpt-4o-mini-tts",
    voices: {
      male:   VOICES_MALE,
      female: VOICES_FEMALE,
      all:    ALL_VOICES
    }
  });
});

app.listen(PORT, () => {
  console.log("Serwer dziala na http://localhost:" + PORT);
});
