// =============================================================================
// DANE APLIKACJI SZKOLENIOWEJ - 15 BRANŻ, 44 STANOWISKA, 880 SCENARIUSZY
// =============================================================================
const APP_DATA = {

  "Biuro rachunkowe": {
    emoji: "📊",
    stanowiska: {
      "Księgowa/Księgowy": {
        emoji: "👩‍💼",
        scenariusze: [
          "Klient dostał mandat z US i obwinia biuro o błąd w deklaracji",
          "Błąd w JPK — urząd wszczął kontrolę",
          "Błędnie naliczony VAT przez kilka miesięcy",
          "Klient odkrył błąd w PIT rocznym po złożeniu",
          "Opóźniona deklaracja CIT — kara za zwłokę",
          "Błędnie naliczone wynagrodzenie pracownika klienta",
          "Klient żąda korekty rozliczeń za ostatnie 2 lata",
          "Klient nie rozumie pozycji na rozliczeniu i oskarża o ukryte opłaty",
          "Zmiana formy opodatkowania — klient twierdzi że go nie poinformowano",
          "Klient żąda natychmiastowej optymalizacji podatkowej",
          "Nieodebrany zwrot VAT — klient pyta gdzie są pieniądze",
          "Klient dostał wezwanie z ZUS — niezapłacone składki",
          "Błąd w zgłoszeniu pracownika do ZUS",
          "Klient chce złożyć korektę której nie można już złożyć",
          "Sprzeczne informacje — klient mówi że poprzednia księgowa mówiła inaczej",
          "Klient żąda zaświadczenia którego biuro nie może wystawić",
          "Problem z rejestracją do VAT — urząd odmówił",
          "Klient prowadzi szarą strefę i oczekuje że biuro to ogarnie",
          "Klient twierdzi że inaczej się umawiał z poprzednią księgową",
          "Klient żąda pilnej odpowiedzi w niedzielę wieczór"
        ]
      },
      "Asystent biura": {
        emoji: "🗂️",
        scenariusze: [
          "Klient dzwoni z pretensjami że nikt nie odbiera telefonów",
          "Klient nie może się dodzwonić do swojej księgowej od 3 dni",
          "Klient twierdzi że wysłał dokumenty a biuro je zgubiło",
          "Klient żąda spotkania tego samego dnia",
          "Klient pyta o status sprawy a asystent nie ma dostępu do akt",
          "Klient jest agresywny bo faktura od biura jest wyższa niż oczekiwał",
          "Klient żąda natychmiastowego połączenia z szefem",
          "Klient grozi że napisze negatywną opinię w Google",
          "Klient pyta o szczegóły umowy których asystent nie zna",
          "Klient dostał ponaglenie z US i wpada bez zapowiedzi",
          "Klient twierdzi że biuro nie odpowiada na maile od tygodnia",
          "Klient żąda zwrotu nadpłaty za usługi",
          "Klient mówi że zapłacił a w systemie brak wpłaty",
          "Klient chce zmienić pakiet usług na tańszy natychmiast",
          "Klient wpada z gotówką i chce rozliczyć się od ręki",
          "Klient nie rozumie regulaminu i kłóci się z asystentem",
          "Klient prosi o wystawienie dokumentu którego biuro nie wystawia",
          "Klient pyta dlaczego ceny wzrosły bez wcześniejszej informacji",
          "Klient chce rozwiązać umowę od zaraz bez okresu wypowiedzenia",
          "Klient wykłóca się o termin — twierdzi że umawiał się inaczej"
        ]
      },
      "Obsługa klienta": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni z pytaniem którego obsługa nie umie odpowiedzieć",
          "Klient jest zły bo czekał 20 minut na połączenie",
          "Klient wykłóca się o termin wysłania dokumentów",
          "Klient nie rozumie faktury i podejrzewa błąd",
          "Klient pyta o ofertę i porównuje ją z konkurencją przez telefon",
          "Klient chce anulować zlecenie które już jest w realizacji",
          "Klient żąda rozmowy z kimś kompetentnym",
          "Klient pyta o gwarancje których obsługa nie może udzielić",
          "Klient dzwoni po raz piąty w tej samej sprawie",
          "Klient twierdzi że mu obiecano coś czego nie ma w umowie",
          "Klient prosi o wycenę i jest oburzony ceną",
          "Klient pyta dlaczego sprawa trwa tak długo",
          "Klient chce zmienić opiekuna i nie przyjmuje odmowy",
          "Klient nie zgadza się z regulaminem i chce wyjątku",
          "Klient dzwoni z zarzutem że biuro nie przesłało ważnego pisma",
          "Klient pyta o sprawę która jest poza kompetencją obsługi",
          "Klient żąda potwierdzenia że nikt nie ma dostępu do jego danych",
          "Klient jest emocjonalny — ma problemy finansowe i płacze",
          "Klient grozi że to idzie do mediów",
          "Klient kończy rozmowę słowami i tak zmieniam biuro"
        ]
      }
    }
  },

  "Kancelaria prawna": {
    emoji: "⚖️",
    stanowiska: {
      "Prawnik/Adwokat": {
        emoji: "⚖️",
        scenariusze: [
          "Klient przegrał sprawę i obwinia prawnika o błąd",
          "Klient nie rozumie faktury — pyta za co zapłacił",
          "Klient żąda gwarancji wygranej w sprawie",
          "Klient chce żeby prawnik załatwił sprawę po cichu",
          "Klient pyta dlaczego sprawa ciągnie się już rok",
          "Klient dostał niekorzystny wyrok i żąda natychmiastowej apelacji",
          "Klient chce zrezygnować z usług w połowie sprawy",
          "Klient porównuje kancelarię z tańszą konkurencją",
          "Klient pyta o poufność — boi się wycieku informacji",
          "Klient żąda pisemnej gwarancji określonego rezultatu",
          "Klient chce żeby prawnik działał niezgodnie z prawem",
          "Klient twierdzi że inny prawnik powiedział mu coś innego",
          "Klient zarzuca prawnikowi brak zaangażowania w sprawę",
          "Klient jest w silnym stresie emocjonalnym — sprawa rozwodowa",
          "Klient nie rozumie języka prawniczego i jest sfrustrowany",
          "Klient żąda natychmiastowego działania w weekend",
          "Klient odkrył że prawnik reprezentował stronę przeciwną w innej sprawie",
          "Klient chce obniżki honorarium po zakończeniu sprawy",
          "Klient pyta dlaczego musi płacić mimo że przegrał",
          "Klient żąda zwrotu zaliczki po rezygnacji ze sprawy"
        ]
      },
      "Aplikant/Asystent prawny": {
        emoji: "📋",
        scenariusze: [
          "Klient pyta o status sprawy a aplikant nie ma pełnych informacji",
          "Klient jest zły że rozmawia z kimś niedoświadczonym",
          "Klient żąda połączenia z prawnikiem który jest na rozprawie",
          "Klient prosi o poradę prawną której aplikant nie może udzielić",
          "Klient twierdzi że przesłał dokumenty których nie ma w aktach",
          "Klient jest zdenerwowany — termin sądowy za 2 dni",
          "Klient pyta o szczegóły umowy z kancelarią",
          "Klient nie chce rozmawiać z aplikantem — żąda prawdziwego prawnika",
          "Klient jest niecierpliwy — sprawa miała być skończona tydzień temu",
          "Klient pyta o koszty których aplikant nie zna",
          "Klient wpada bez zapowiedzi z pilnymi dokumentami",
          "Klient prosi o wyjaśnienie wyroku który właśnie otrzymał",
          "Klient jest emocjonalny — dostał pozew rozwodowy",
          "Klient żąda kopii wszystkich dokumentów na już",
          "Klient pyta czy kancelaria wygrała podobne sprawy",
          "Klient chce umówić spotkanie ale grafik jest pełny",
          "Klient podważa kompetencje aplikanta przez cały czas rozmowy",
          "Klient twierdzi że aplikant źle go poinformował tydzień temu",
          "Klient pyta o opłaty sądowe i jest oburzony ich wysokością",
          "Klient grozi skargą do palestry"
        ]
      },
      "Sekretarka": {
        emoji: "📁",
        scenariusze: [
          "Klient wpada bez umówionego terminu i żąda przyjęcia",
          "Klient jest zły bo czeka na oddzwonienie od 3 dni",
          "Klient pyta o ceny i jest oburzony pierwszą wyceną",
          "Klient chce umówić spotkanie dzisiaj bo sprawa pilna",
          "Klient twierdzi że sekretarka go źle poinformowała",
          "Klient jest agresywny bo nie może się dodzwonić do prawnika",
          "Klient żąda informacji objętych tajemnicą zawodową",
          "Klient prosi o poradę prawną przez telefon",
          "Klient jest wzburzony — właśnie dostał nakaz komornika",
          "Klient nie chce czekać i kłóci się o kolejność przyjęć",
          "Klient pyta o kwalifikacje prawników w kancelarii",
          "Klient żąda potwierdzenia wysłania pisma do sądu",
          "Klient prosi o wyjaśnienie faktury której sekretarka nie może omówić",
          "Klient grozi że pójdzie do konkurencji",
          "Klient nie może znaleźć kancelarii i jest zdenerwowany gdy dzwoni",
          "Klient chce anulować spotkanie w ostatniej chwili i ma pretensje o opłatę",
          "Klient pyta dlaczego prawnik nie odpisuje na maile",
          "Klient jest w płaczu — sprawa dotyczy dzieci",
          "Klient pyta o możliwość płatności ratalnej",
          "Klient żąda natychmiastowego wglądu do akt swojej sprawy"
        ]
      },
      "Obsługa telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni z pytaniem o cennik usług prawnych i jest oburzony stawkami godzinowymi",
          "Klient dzwoni że sprawa miała być zakończona miesiąc temu i żąda wyjaśnień",
          "Klient twierdzi że nikt z kancelarii nie oddzwonił przez tydzień",
          "Klient dzwoni żądając pilnego połączenia z prawnikiem który jest na sali sądowej",
          "Klient jest zdenerwowany bo dostał pismo z sądu i nie rozumie co ma zrobić",
          "Klient pyta przez telefon o szanse wygranej w sprawie i żąda jednoznacznej odpowiedzi",
          "Klient dzwoni że chce zmienić kancelarię i pyta jak odzyskać dokumenty",
          "Klient twierdzi że przez telefon obiecano mu niższą stawkę niż na fakturze",
          "Klient dzwoni z pretensjami że kancelaria przegrała sprawę i co teraz",
          "Klient jest emocjonalny — właśnie dostał pozew o alimenty i dzwoni w panice",
          "Klient pyta o termin kolejnej rozprawy i jest zły że nikt go wcześniej nie poinformował",
          "Klient dzwoni żeby anulować umowę z kancelarią w połowie sprawy",
          "Klient pyta o możliwość reprezentacji w sprawie karnej przez telefon",
          "Klient twierdzi że prawnik ujawnił szczegóły jego sprawy osobom trzecim",
          "Klient dzwoni z pytaniem o koszty apelacji i jest oburzony kwotą",
          "Klient pyta dlaczego kancelaria nie odpowiada na jego maile od tygodnia",
          "Klient jest starszy i zdezorientowany — nie rozumie co mu powiedziano na ostatnim spotkaniu",
          "Klient dzwoni żeby umówić pilne spotkanie bo ma termin sądowy za 3 dni",
          "Klient twierdzi że poprzedni prawnik w kancelarii prowadził sprawę lepiej",
          "Klient pyta czy może nagrywać rozmowy z prawnikiem dla własnego bezpieczeństwa"
        ]
      }
    }
  },

  "Gabinet stomatologiczny": {
    emoji: "🦷",
    stanowiska: {
      "Lekarz stomatolog": {
        emoji: "🦷",
        scenariusze: [
          "Klient ma ból po zabiegu i twierdzi że leczenie było złe",
          "Klient niezadowolony z efektu estetycznego wybielania",
          "Klient żąda ponowienia zabiegu za darmo bo wypadła plomba",
          "Klient twierdzi że ząb boli bardziej niż przed leczeniem",
          "Klient odczuwa ból podczas zabiegu i jest przerażony",
          "Klient jest bardzo nerwowy i odmawia otwarcia ust",
          "Klient pyta dlaczego kosztuje tyle gdy to tylko 10 minut pracy",
          "Klient żąda znieczulenia którego lekarz nie może zastosować",
          "Klient twierdzi że inny dentysta powiedział mu coś innego",
          "Klient nie zgadza się z planem leczenia i podważa kompetencje",
          "Klient żąda gwarancji że implanty wytrzymają 20 lat",
          "Klient jest uczulony i boi się że lekarz tego nie uwzględnił",
          "Klient wrócił z pretensją — korona odpadła po 2 miesiącach",
          "Klient nie chce wykonać zdjęcia RTG bo to promieniowanie",
          "Klient żąda pełnej dokumentacji medycznej natychmiast",
          "Klient jest rodzicem — pretensje o leczenie dziecka",
          "Klient twierdzi że lekarz usunął zły ząb",
          "Klient żąda recepty na antybiotyk bez badania",
          "Klient jest agresywny z bólu w trakcie wizyty",
          "Klient porównuje wycenę leczenia z gabinetem za granicą"
        ]
      },
      "Asystentka stomatologiczna": {
        emoji: "💉",
        scenariusze: [
          "Klient jest przerażony — pierwszy raz u dentysty od 10 lat",
          "Klient pyta o szczegóły zabiegu których asystentka nie może omówić",
          "Klient skarży się na ból i chce natychmiastowej pomocy lekarza",
          "Klient jest niezadowolony z czasu oczekiwania na fotelu",
          "Klient pyta o ceny w trakcie trwania zabiegu",
          "Klient twierdzi że asystentka go nie słuchała podczas zabiegu",
          "Klient żąda żeby asystentka powiedziała prawdę o planie leczenia",
          "Klient jest uczulony i pyta o skład materiałów użytych w zabiegu",
          "Klient ma pretensje że musiał czekać 30 minut na fotelu",
          "Klient jest starszy i zdezorientowany — potrzebuje dużo uwagi",
          "Klient narzeka na higienę gabinetu",
          "Klient twierdzi że sprzęt wygląda staro i jest przestraszony",
          "Klient skarży się na ból szczęki po wizycie",
          "Klient nie chce aby asystentka była przy zabiegu",
          "Klient wprost pyta asystentkę czy zabieg będzie bolał",
          "Klient jest dzieckiem które płacze i nie chce współpracować",
          "Klient prosi asystentkę o kontakt poza gabinetem",
          "Klient twierdzi że poprzednia asystentka była milsza",
          "Klient pyta asystentkę o zalecenia których nie zna w szczegółach",
          "Klient zemdlał — stresowa sytuacja dla asystentki"
        ]
      },
      "Rejestracja/Recepcja": {
        emoji: "📅",
        scenariusze: [
          "Klient wpada bez terminu i żąda przyjęcia — silny ból zęba",
          "Klient jest zły bo czekał 3 tygodnie na wizytę",
          "Klient odwołuje wizytę w ostatniej chwili i kłóci się o opłatę",
          "Klient pyta o ceny i jest oburzony kosztami protetyki",
          "Klient twierdzi że rejestracja obiecała inny termin",
          "Klient żąda konkretnego lekarza który jest niedostępny",
          "Klient jest zdezorientowany — dostał dwa różne terminy",
          "Klient pyta czy gabinet działa w sobotę — kłótnia o godziny",
          "Klient żąda faktury VAT zamiast paragonu",
          "Klient pyta o refundację NFZ — gabinet nie ma umowy z NFZ",
          "Klient twierdzi że nie dostał SMS przypomnienia o wizycie",
          "Klient przyszedł na złą godzinę i żąda że zostanie przyjęty",
          "Klient nie zapłacił za poprzednią wizytę i chce nowy termin",
          "Klient jest spóźniony i kłóci się że musi poczekać na kolejnego",
          "Klient żąda zniżki dla stałego klienta",
          "Klient pyta o opinie o lekarzach w gabinecie",
          "Klient chce zmienić lekarza w ostatniej chwili",
          "Klient jest zdenerwowany fakturą — inne kwoty niż oczekiwał",
          "Klient żąda natychmiastowego wglądu do karty leczenia",
          "Klient grozi skargą do Izby Lekarskiej jeśli nie dostanie terminu dziś"
        ]
      },
      "Rejestracja telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni z silnym bólem zęba i żąda przyjęcia tego samego dnia",
          "Klient pyta o ceny implantów przez telefon i jest oburzony pierwszą kwotą",
          "Klient odwołuje wizytę na godzinę przed i kłóci się o zwrot kaucji",
          "Klient twierdzi że przez telefon obiecano mu inny termin niż ma w systemie",
          "Klient dzwoni żądając konkretnego lekarza który nie przyjmuje nowych pacjentów",
          "Klient pyta o refundację NFZ i jest zły że gabinet nie ma kontraktu",
          "Klient dzwoni po wizycie i twierdzi że ząb boli mocniej niż przed leczeniem",
          "Klient jest zdenerwowany bo czeka na wyniki RTG od tygodnia",
          "Klient pyta o procedurę leczenia kanałowego i ile to potrwa",
          "Klient dzwoni że wypadła plomba i żąda przyjęcia natychmiastowego",
          "Klient twierdzi że nikt nie oddzwonił po zostawieniu wiadomości w sekretarce",
          "Klient pyta dlaczego ceny wzrosły od ostatniej wizyty",
          "Klient dzwoni żeby umówić całą rodzinę na jeden dzień i jest zły na brak terminów",
          "Klient pyta przez telefon czy może przyjść bez wcześniejszej rejestracji",
          "Klient jest rodzicem dziecka z bólem zęba i żąda przyjęcia poza kolejką",
          "Klient twierdzi że SMS z przypomnieniem o wizycie nie dotarł i domaga się przeprosin",
          "Klient pyta o godziny otwarcia i jest zły że gabinet nie pracuje w soboty",
          "Klient żąda przesłania wyników RTG mailem i jest zły że to niemożliwe",
          "Klient twierdzi że poprzednia rejestratorka była milsza i bardziej pomocna",
          "Klient grozi zmianą gabinetu jeśli nie dostanie terminu w ciągu 3 dni"
        ]
      }
    }
  },

  "Gabinet lekarski / klinika": {
    emoji: "🏥",
    stanowiska: {
      "Lekarz": {
        emoji: "🩺",
        scenariusze: [
          "Klient nie zgadza się z diagnozą i powołuje się na internet",
          "Klient żąda konkretnego leku którego lekarz nie chce przepisać",
          "Klient twierdzi że leczenie nie pomogło i żąda wyjaśnień",
          "Klient jest agresywny podczas badania — stres i ból",
          "Klient żąda skierowania na badania których lekarz nie zleca",
          "Klient pyta dlaczego musi czekać skoro zapłacił za prywatną wizytę",
          "Klient twierdzi że lekarz go nie słucha i skraca wizytę",
          "Klient chce zwolnienia lekarskiego bez podstaw medycznych",
          "Klient nie chce stosować się do zaleceń i kłóci się",
          "Klient porównuje diagnozę z opinią lekarza z YouTube",
          "Klient żąda zaświadczenia na potrzeby sądu natychmiast",
          "Klient jest starszy i zdezorientowany — frustracja z niezrozumienia",
          "Klient pyta o skutki uboczne leku i oskarża o ukrywanie prawdy",
          "Klient twierdzi że leczenie poprzedniego lekarza było błędne",
          "Klient jest rodzicem — żąda natychmiastowego przyjęcia chorego dziecka",
          "Klient żąda wyników badań których lekarz nie może jeszcze podać",
          "Klient żąda recepty na silne leki przeciwbólowe bez wskazań",
          "Klient z chorobą przewlekłą kwestionuje zmianę leczenia",
          "Klient jest emocjonalny — właśnie dostał poważną diagnozę",
          "Klient pyta czy lekarz jest wystarczająco doświadczony"
        ]
      },
      "Pielęgniarka": {
        emoji: "💊",
        scenariusze: [
          "Klient boi się igły i odmawia pobrania krwi",
          "Klient twierdzi że pielęgniarka zrobiła mu siniaka przy wkłuciu",
          "Klient jest niecierpliwy — pyta kiedy zostanie przyjęty przez lekarza",
          "Klient pyta pielęgniarkę o diagnozę której nie może omówić",
          "Klient żąda żeby pielęgniarka przyspieszyła przyjęcie przez lekarza",
          "Klient skarży się na ból po zastrzyku — oskarża o błąd",
          "Klient jest starszy i zdezorientowany — nie rozumie procedur",
          "Klient nie chce się rozebrać do badania i kłóci się",
          "Klient żąda wyników badań przed lekarzem",
          "Klient pyta o szczegóły leków których pielęgniarka nie może omawiać",
          "Klient twierdzi że czeka zbyt długo mimo umówionej wizyty",
          "Klient jest rodzicem i jest nadopiekuńczy podczas badania dziecka",
          "Klient pyta czy może dostać konkretny lek bez lekarza",
          "Klient narzeka na warunki w poczekalni",
          "Klient jest agresywny bo boi się zabiegu",
          "Klient twierdzi że poprzednia pielęgniarka robiła to inaczej",
          "Klient płacze — właśnie usłyszał złą diagnozę",
          "Klient żąda żeby pielęgniarka powiedziała mu prawdę o jego stanie",
          "Klient zemdlał po pobraniu krwi — stresowa sytuacja",
          "Klient jest rodzicem dziecka z gorączką — żąda przyjęcia poza kolejką"
        ]
      },
      "Rejestracja/Recepcja (klinika)": {
        emoji: "🗓️",
        scenariusze: [
          "Klient żąda wizyty tego samego dnia — to pilne",
          "Klient jest oburzony ceną wizyty prywatnej",
          "Klient pyta dlaczego NFZ nie refunduje danego badania",
          "Klient twierdzi że rejestracja pomyliła termin wizyty",
          "Klient odwołuje wizytę w ostatniej chwili — kłótnia o opłatę",
          "Klient chce konkretnego lekarza który jest niedostępny miesiącami",
          "Klient jest zdezorientowany co do dokumentów potrzebnych na wizytę",
          "Klient jest emocjonalny — rejestruje chorego bliskiego",
          "Klient pyta o wyniki badań przez telefon",
          "Klient twierdzi że nikt nie oddzwonił zgodnie z obietnicą",
          "Klient jest zły na czas oczekiwania w poczekalni",
          "Klient żąda kopii dokumentacji medycznej natychmiast",
          "Klient chce zarejestrować się bez podania danych osobowych",
          "Klient twierdzi że zapłacił i nie ma tego w systemie",
          "Klient chce fakturę wystawioną na firmę — problemy formalne",
          "Klient jest spóźniony i żąda że zostanie przyjęty bez kolejki",
          "Klient grozi skargą do Rzecznika Praw Pacjenta",
          "Klient pyta o opinie o lekarzach w klinice",
          "Klient nie rozumie dlaczego ta sama wizyta kosztuje różnie u różnych lekarzy",
          "Klient żąda żeby recepcja znalazła mu termin w ciągu tygodnia bo wyjeżdża"
        ]
      },
      "Manager kliniki": {
        emoji: "📊",
        scenariusze: [
          "Klient grozi skargą do Rzecznika Praw Pacjenta",
          "Klient żąda odszkodowania za błąd medyczny",
          "Klient twierdzi że naruszono jego dane medyczne — RODO",
          "Klient jest znany publicznie i grozi mediami",
          "Klient żąda usunięcia lekarza od jego leczenia",
          "Klient chce negocjować abonament medyczny dla firmy",
          "Klient VIP żąda stałej dostępności wybranego lekarza",
          "Klient jest niezadowolony z całości obsługi i wylicza błędy",
          "Klient pyta o procedurę skargową kliniki",
          "Klient oskarża klinikę o złą diagnozę",
          "Klient żąda bezpłatnej wizyty jako rekompensaty",
          "Klient pyta o kwalifikacje lekarzy w klinice",
          "Klient chce transferu dokumentacji do innej placówki",
          "Klient porównuje klinikę z zagranicą i rozważa leczenie tam",
          "Klient twierdzi że był traktowany gorzej niż inni pacjenci",
          "Klient pyta o politykę prywatności i co się dzieje z jego danymi",
          "Klient grozi że to trafi do mediów",
          "Klient żąda natychmiastowego audytu jego leczenia",
          "Klient chce podpisać specjalną klauzulę poufności z kliniką",
          "Klient twierdzi że manager obiecał mu coś czego nie ma w regulaminie"
        ]
      },
      "Rejestracja telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni żądając wizyty tego samego dnia bo to pilne",
          "Klient jest oburzony ceną wizyty prywatnej i porównuje z NFZ",
          "Klient twierdzi że nikt nie oddzwonił po zostawieniu wiadomości",
          "Klient odwołuje wizytę w ostatniej chwili i kłóci się o opłatę rezerwacyjną",
          "Klient pyta o wyniki badań przez telefon i jest zły że nie może ich otrzymać",
          "Klient chce konkretnego specjalisty który ma termin za 3 miesiące",
          "Klient jest emocjonalny — rejestruje chorego bliskiego i płacze",
          "Klient pyta dlaczego NFZ nie refunduje zleconego badania",
          "Klient twierdzi że rejestracja podała mu błędny termin wizyty",
          "Klient żąda kopii dokumentacji medycznej przesłanej mailem natychmiast",
          "Klient jest zły na długi czas oczekiwania w kolejce telefonicznej",
          "Klient pyta o możliwość teleporady zamiast wizyty osobistej",
          "Klient twierdzi że wyniki badań zostały wysłane na błędny adres",
          "Klient jest spóźniony na wizytę i pyta przez telefon czy jeszcze go przyjmą",
          "Klient chce umówić kilku specjalistów na jeden dzień i jest zły na brak koordynacji",
          "Klient grozi skargą do NFZ jeśli nie dostanie terminu szybciej",
          "Klient pyta o ceny pakietów abonamentowych i negocjuje przez telefon",
          "Klient twierdzi że lekarz nie zadzwonił z wynikami jak obiecał",
          "Klient jest starszy i zdezorientowany — prosi o pomoc w interpretacji skierowania",
          "Klient żąda potwierdzenia wizyty SMS-em bo wcześniej zapomnieli go poinformować"
        ]
      }
    }
  },

  "Salon kosmetyczny / SPA": {
    emoji: "💄",
    stanowiska: {
      "Kosmetyczka/Kosmetolog": {
        emoji: "💄",
        scenariusze: [
          "Klientka niezadowolona z efektu zabiegu na twarz",
          "Klientka twierdzi że skóra pogorszyła się po zabiegu",
          "Klientka ma reakcję alergiczną po kosmetyku użytym w zabiegu",
          "Klientka żąda powtórzenia zabiegu za darmo bo nic nie widać",
          "Klientka porównuje efekty z influencerką na Instagramie",
          "Klientka jest niezadowolona z woskowania — zaczerwienienie",
          "Klientka pyta o gwarancję efektu botoksu lub wypełniacza",
          "Klientka twierdzi że kosmetyczka ją poparzyła laserem",
          "Klientka chce zabiegu którego kosmetyczka nie rekomenduje dla jej skóry",
          "Klientka jest w ciąży i kłóci się o dopuszczalność zabiegu",
          "Klientka żąda użycia konkretnego produktu który przyniosła",
          "Klientka narzeka że zabieg trwał za krótko jak na tę cenę",
          "Klientka porównuje cenę z innym salonem który robi taniej",
          "Klientka jest bardzo wrażliwa na ból i oskarża o brutalność",
          "Klientka pyta o skład użytych preparatów i podważa ich jakość",
          "Klientka żąda zabiegu medycznego który jest poza zakresem salonu",
          "Klientka jest niezadowolona z masażu — za słaby lub za mocny",
          "Klientka przyszła z nierealnym oczekiwaniem efektu jak z Photoshopa",
          "Klientka płacze — problemy ze skórą bardzo ją dotykają emocjonalnie",
          "Klientka twierdzi że wyniki były inne na poprzedniej wizycie"
        ]
      },
      "Stylistka paznokci": {
        emoji: "💅",
        scenariusze: [
          "Klientka twierdzi że lakier hybrydowy odpadł po 3 dniach",
          "Klientka niezadowolona z kształtu paznokci — inne niż chciała",
          "Klientka oskarża stylistkę o zniszczenie paznokci naturalnych",
          "Klientka żąda poprawki za darmo bo kolor jej nie pasuje",
          "Klientka przyniosła zdjęcie z Instagrama i żąda identycznego efektu",
          "Klientka jest uczulona na żel i twierdzi że nie była ostrzeżona",
          "Klientka twierdzi że cena jest inna niż jej powiedziano przez telefon",
          "Klientka spóźniła się 30 minut i żąda pełnego czasu na zabieg",
          "Klientka żąda techniki której stylistka nie wykonuje",
          "Klientka porównuje ceny z salonikami w galeriach handlowych",
          "Klientka twierdzi że poprzednia stylistka robiła lepiej",
          "Klientka jest bardzo wymagająca — poprawia każdy szczegół przez całą wizytę",
          "Klientka żąda użycia jej własnego lakieru który przyniosła",
          "Klientka pyta dlaczego te same usługi są droższe niż rok temu",
          "Klientka jest niezadowolona z usunięcia starych paznokci — ból",
          "Klientka chce zmienić wzór w połowie zabiegu",
          "Klientka twierdzi że zapłaciła już przy poprzedniej wizycie",
          "Klientka z długimi paznokciami żąda niemożliwego wzoru",
          "Klientka jest niezadowolona z czasu realizacji — za długo",
          "Klientka jest niezadowolona że musiała czekać na poprzednią klientkę"
        ]
      },
      "Recepcja (salon)": {
        emoji: "📞",
        scenariusze: [
          "Klientka wpada bez terminu i żąda przyjęcia od razu",
          "Klientka odwołuje wizytę na 30 minut przed i kłóci się o kaucję",
          "Klientka pyta o ceny i jest oburzona ich wysokością",
          "Klientka żąda konkretnej stylistki która jest niedostępna",
          "Klientka twierdzi że umawiała się na inną godzinę",
          "Klientka pyta o promocje których już nie ma",
          "Klientka żąda że zostanie obsłużona przed osobą z terminem",
          "Klientka jest zła bo musi poczekać 15 minut na poprzednią klientkę",
          "Klientka nie rozumie cennika i kłóci się o każdą pozycję",
          "Klientka żąda pełnego zwrotu za niesatysfakcjonujący zabieg",
          "Klientka chce zapłacić voucherem po terminie ważności",
          "Klientka jest zła że nie dostała SMS potwierdzającego wizytę",
          "Klientka pyta dlaczego salon nie przyjmuje gotówki",
          "Klientka chce wystawić fakturę na firmę za zabieg prywatny",
          "Klientka grozi złą opinią w Google",
          "Klientka pyta czy jej dane są bezpieczne",
          "Klientka chce umówić wizytę dla grupy przyjaciółek i negocjuje cenę",
          "Klientka pyta o program lojalnościowy którego szczegółów recepcja nie zna",
          "Klientka żąda dyskrecji w sprawie odwiedzin salonu",
          "Klientka jest pierwszą wizytą — oczekuje oprowadzenia i jest wybredna"
        ]
      }
    }
  },

  "Firma budowlana / remonty": {
    emoji: "🏗️",
    stanowiska: {
      "Handlowiec/Doradca": {
        emoji: "🤝",
        scenariusze: [
          "Klient pyta o cenę i porównuje z trzema innymi ofertami na bieżąco",
          "Klient żąda pisemnej gwarancji terminu zakończenia remontu",
          "Klient chce wpisać kary umowne za każdy dzień opóźnienia",
          "Klient jest po złym doświadczeniu z poprzednią ekipą — nieufny",
          "Klient żąda materiałów premium w cenie standardowej",
          "Klient pyta o referencje i podważa każdą podaną odpowiedź",
          "Klient chce zacząć roboty na słowo bez podpisania umowy",
          "Klient zmienia zakres prac po każdym spotkaniu i pyta dlaczego drożej",
          "Klient porównuje wycenę z kosztorysem znalezionym w internecie",
          "Klient pyta dlaczego materiały muszą być płatne z góry",
          "Klient chce rabatu bo płaci gotówką bez faktury",
          "Klient żąda niemożliwego terminu — remont całego mieszkania w 2 tygodnie",
          "Klient pyta o możliwość płatności ratalnej bez odsetek",
          "Klient chce żeby ekipa pracowała w weekendy bez dopłat",
          "Klient zmienia projekt w połowie wyceny i pyta czemu drożej",
          "Klient twierdzi że sąsiad zrobił to samo za połowę ceny",
          "Klient po wycenie znika na miesiąc i wraca żądając tej samej ceny",
          "Klient pyta czy firma ubezpiecza jego mienie w trakcie remontu",
          "Klient jest zdecydowany ale targuje się o każdą pozycję kosztorysu",
          "Klient żąda żeby handlowiec był obecny na budowie codziennie"
        ]
      },
      "Kierownik budowy": {
        emoji: "👷",
        scenariusze: [
          "Klient wpada na budowę bez zapowiedzi i kwestionuje każdy detal",
          "Klient twierdzi że użyto innych materiałów niż w umowie",
          "Klient żąda natychmiastowego wstrzymania prac bo zmienił zdanie",
          "Klient jest oburzony że ekipa zrobiła przerwę obiadową",
          "Klient twierdzi że prace idą za wolno i grozi zerwaniem umowy",
          "Klient kwestionuje jakość wykonania ściany i podłogi i sufitu",
          "Klient żąda poprawek których nie ma w projekcie",
          "Klient twierdzi że ekipa zniszczyła jego rzeczy podczas remontu",
          "Klient odmawia zapłaty kolejnej transzy bo nie widzi postępu",
          "Klient twierdzi że ekipa zaśmieciła klatkę schodową",
          "Klient sprowadza znajomego fachowca który kwestionuje roboty",
          "Klient żąda żeby kierownik był na budowie od 7 do 18 każdego dnia",
          "Klient odkrył usterkę i żąda natychmiastowej naprawy",
          "Klient żąda zmiany technologii wykonania w połowie robót",
          "Klient ma zastrzeżenia do koloru ściany który sam wybrał",
          "Klient żąda protokołu odbioru ale kwestionuje każdy punkt",
          "Klient fotografuje każdy etap i wysyła zdjęcia z pretensjami",
          "Klient żąda dodatkowych prac bez aneksu do umowy",
          "Klient twierdzi że słyszał że ekipa odwleka celowo żeby więcej zarobić",
          "Klient odkrył że sąsiedzi mają ten sam remont tańszy"
        ]
      },
      "Majster/Brygadzista": {
        emoji: "🔨",
        scenariusze: [
          "Klient stoi nad ekipą i komentuje każdy ruch",
          "Klient żąda żeby roboty szły szybciej bez względu na jakość",
          "Klient twierdzi że majster jest niekompetentny bo inaczej się robi",
          "Klient pyta dlaczego jest tylu ludzi i czy wszyscy są potrzebni",
          "Klient żąda pracy w nocy żeby nadrobić zaległości",
          "Klient sprzecza się o technologię wykonania której nie rozumie",
          "Klient twierdzi że poprzednia ekipa robiła to inaczej i lepiej",
          "Klient odkrył pęknięcie którego nie ma w protokole usterek",
          "Klient fotografuje robotników podczas przerwy i grozi że pokaże szefowi",
          "Klient kwestionuje kwalifikacje jednego z robotników",
          "Klient twierdzi że ekipa ukradła jego narzędzie lub materiał",
          "Klient żąda dodatkowych prac skoro już tu jesteście",
          "Klient sprzecza się o sposób prowadzenia instalacji elektrycznej",
          "Klient odkrył usterkę po zakończeniu prac i blokuje odbiór",
          "Klient jest sąsiadem i skarży się na hałas i kurz",
          "Klient twierdzi że ekipa zalała mu sufit przez zaniedbanie",
          "Klient żąda żeby majster podpisał oświadczenie którego nie może podpisać",
          "Klient pyta dlaczego roboty stoją — ekipa czeka na materiały",
          "Klient żąda żeby majster osobiście wykonał konkretny element",
          "Klient twierdzi że sprzęt używany przez ekipę jest zły i przestarzały"
        ]
      },
      "Obsługa telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni i pyta o wycenę remontu — oczekuje dokładnej kwoty przez telefon",
          "Klient dzwoni że ekipa nie przybyła o umówionej godzinie i żąda wyjaśnień",
          "Klient dzwoni z pretensjami że nikt nie oddzwonił przez 3 dni",
          "Klient pyta o referencje i żąda numerów do poprzednich klientów",
          "Klient dzwoni i grozi zerwaniem umowy jeśli roboty nie ruszą jutro",
          "Klient pyta o status realizacji i twierdzi że nikt go na bieżąco nie informuje",
          "Klient dzwoni że sąsiedzi skarżą się na hałas i brud ekipy",
          "Klient dzwoni z pretensjami o fakturę — inne kwoty niż ustalono w umowie",
          "Klient pyta czy firma posiada ubezpieczenie OC i żąda kopii polisy",
          "Klient dzwoni po 18:00 z pilną sprawą i jest zły że nikt nie odbiera",
          "Klient żąda rozmowy z kierownikiem budowy — nie chce rozmawiać z biurem",
          "Klient twierdzi że przez telefon obiecano mu inną cenę niż w kosztorysie",
          "Klient dzwoni żeby zmienić zakres robót i jest oburzony że to kosztuje więcej",
          "Klient pyta o płatność ratalną i jest niezadowolony z warunków",
          "Klient dzwoni że ekipa pozostawiła gruz na klatce schodowej",
          "Klient jest zły że nie dostał faktury VAT tydzień po zakończeniu prac",
          "Klient pyta o gwarancję na wykonane prace i żąda potwierdzenia pisemnego",
          "Klient dzwoni sprawdzić czy ekipa pojawi się jutro mimo złej pogody",
          "Klient prosi o pilny kontakt od szefa bo ma nagłą zmianę w projekcie",
          "Klient dzwoni że znalazł tańszą ekipę i pyta czy firma może wyrównać cenę"
        ]
      }
    }
  },

  "Sklep internetowy / e-commerce": {
    emoji: "🛒",
    stanowiska: {
      "Obsługa klienta/BOK": {
        emoji: "💬",
        scenariusze: [
          "Klient twierdzi że paczka nie dotarła a tracking pokazuje doręczenie",
          "Klient żąda natychmiastowego zwrotu pieniędzy bez odesłania towaru",
          "Klient dostał inny produkt niż zamawiał i jest wściekły",
          "Klient twierdzi że produkt jest uszkodzony ale nie ma zdjęcia",
          "Klient grozi chargebackem jeśli nie dostanie zwrotu w ciągu godziny",
          "Klient pyta dlaczego dostawa trwa 5 dni skoro w innych sklepach 24h",
          "Klient twierdzi że na stronie była inna cena niż na fakturze",
          "Klient żąda odszkodowania bo produkt nie dotarł na urodziny",
          "Klient zwraca produkt po 30 dniach gdy termin zwrotu to 14 dni",
          "Klient twierdzi że obsługa kłamała przy poprzednim kontakcie",
          "Klient kupił zły rozmiar i żąda darmowej wymiany z dostawą",
          "Klient nie chce odesłać towaru bo nie ma czasu na pakowanie",
          "Klient pyta dlaczego produkt jest tańszy na Allegro niż w sklepie",
          "Klient jest zły że kupon rabatowy nie zadziałał po złożeniu zamówienia",
          "Klient twierdzi że opis produktu na stronie jest nieprawdziwy",
          "Klient dostał paczkę uszkodzoną przez kuriera i obwinia sklep",
          "Klient żąda darmowej wysyłki poniżej progu bo to niesprawiedliwe",
          "Klient grozi wystawieniem 1 gwiazdki na każdym portalu",
          "Klient żąda faktury korygującej i kłóci się o każdy szczegół",
          "Klient twierdzi że poprzednia obsługa obiecała mu rabat na kolejne zamówienie"
        ]
      },
      "Logistyk/Magazynier": {
        emoji: "📦",
        scenariusze: [
          "Klient dzwoni bezpośrednio do magazynu z pretensjami o paczkę",
          "Klient twierdzi że zamówił 3 sztuki a dostał 2",
          "Klient pyta dlaczego jego zamówienie jest wstrzymane w magazynie",
          "Klient żąda żeby paczka wyszła dziś mimo że zamówił po cutoff",
          "Klient twierdzi że wysłano mu zły kolor lub wariant produktu",
          "Klient żąda pilnego zamówienia którego nie ma na stanie",
          "Klient jest hurtownikiem — reklamuje całą paletę towaru",
          "Klient twierdzi że opakowanie było złe i produkt się uszkodził",
          "Klient żąda przyjęcia zwrotu bez numeru RMA",
          "Klient pyta dlaczego zamówienie złożone 2 godziny temu jeszcze nie wyszło",
          "Klient twierdzi że magazyn pomylił adresy dostawy",
          "Klient żąda priorytetowego potraktowania jego zamówienia",
          "Klient twierdzi że poprzednie zamówienie było zapakowane lepiej",
          "Klient pyta o możliwość odbioru osobistego z magazynu",
          "Klient jest sfrustrowany że tracking nie jest aktualizowany",
          "Klient żąda że paczka ma dotrzeć do konkretnej godziny",
          "Klient twierdzi że produkt śmierdzi z opakowania",
          "Klient chce zmienić adres dostawy gdy paczka jest już w trasie",
          "Klient żąda żeby logistyk osobiście sprawdził zawartość jego paczki",
          "Klient twierdzi że brakuje jednej sztuki w paczce zbiorczej"
        ]
      },
      "Handlowiec B2B": {
        emoji: "🛒",
        scenariusze: [
          "Klient chce kupić i pyta o minimalny próg zamówienia hurtowego",
          "Klient chce kupić i negocjuje cenę jednostkową przy dużym wolumenie",
          "Klient chce kupić ale pyta o próbki przed złożeniem dużego zamówienia",
          "Klient chce kupić i pyta o możliwość ekskluzywności w swoim regionie",
          "Klient chce kupić i pyta o czas realizacji zamówienia 500 sztuk",
          "Klient hurtowy negocjuje cenę jednostkową poniżej progu opłacalności",
          "Klient żąda 90-dniowego terminu płatności bez żadnych zabezpieczeń",
          "Klient porównuje ofertę z chińskim dostawcą z Alibaby",
          "Klient twierdzi że poprzedni handlowiec obiecał mu inne warunki",
          "Klient po podpisaniu umowy żąda rabatów retroaktywnie",
          "Klient zalega z płatnościami i negocjuje kolejne zamówienie",
          "Klient twierdzi że produkt nie sprzedaje się i chce zwrócić całą partię",
          "Klient pyta dlaczego cena wzrosła od ostatniego zamówienia",
          "Klient chce rozwiązać umowę dystrybucyjną przed terminem",
          "Klient nie przyjął dostawy i twierdzi że nie zamawiał",
          "Klient twierdzi że produkt ma wadę seryjną i grozi zwrotem całej partii",
          "Klient pyta o możliwość konsygnacji całego asortymentu",
          "Klient żąda dedykowanego handlowca dostępnego 7 dni w tygodniu",
          "Klient po 2 latach współpracy nagle oznajmia że przechodzi do konkurencji",
          "Klient twierdzi że konkurencja ma ten sam produkt taniej i żąda wyrównania ceny"
        ]
      },
      "Infolinia / Obsługa telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni że paczka nie dotarła mimo że tracking pokazuje doręczenie",
          "Klient żąda natychmiastowego zwrotu pieniędzy przez telefon bez odesłania towaru",
          "Klient dzwoni że dostał inny produkt niż zamawiał i żąda rozwiązania w 24h",
          "Klient twierdzi że produkt jest uszkodzony i pyta czy musi robić zdjęcia",
          "Klient grozi chargebackem jeśli nie dostanie odpowiedzi w ciągu godziny",
          "Klient dzwoni że kupon rabatowy nie zadziałał po złożeniu zamówienia",
          "Klient pyta dlaczego dostawa trwa 5 dni skoro sklep reklamuje 24h",
          "Klient jest zły że musi odesłać produkt na własny koszt",
          "Klient twierdzi że przez telefon obiecano mu darmową wysyłkę zwrotną",
          "Klient dzwoni że dostał paczkę uszkodzoną przez kuriera i pyta co teraz",
          "Klient chce zmienić adres dostawy po złożeniu zamówienia",
          "Klient pyta dlaczego produkt jest tańszy na Allegro niż w oficjalnym sklepie",
          "Klient dzwoni po raz trzeci w tej samej sprawie i jest coraz bardziej agresywny",
          "Klient żąda odszkodowania bo produkt nie dotarł na urodziny syna",
          "Klient pyta o status reklamacji złożonej 2 tygodnie temu i nie ma odpowiedzi",
          "Klient twierdzi że opis produktu na stronie był inny niż to co dostał",
          "Klient jest zły że program lojalnościowy nie naliczył punktów za ostatnie zamówienie",
          "Klient żąda faktury korygującej i kłóci się o każdy szczegół przez telefon",
          "Klient grozi wystawieniem negatywnych opinii na wszystkich portalach",
          "Klient pyta dlaczego zwrot trwa 14 dni skoro sam przelew zajmuje 1 dzień"
        ]
      }
    }
  },

  "Restauracja / gastronomia": {
    emoji: "🍽️",
    stanowiska: {
      "Kelner": {
        emoji: "🍽️",
        scenariusze: [
          "Klient twierdzi że czekał na jedzenie 45 minut i żąda rabatu",
          "Klient twierdzi że danie jest zimne i nie chce podgrzania — tylko wymiany",
          "Klient znalazł coś w jedzeniu i jest oburzony",
          "Klient twierdzi że kelner przyniósł złe zamówienie",
          "Klient żąda dania którego nie ma w menu bo był tu tydzień temu i było",
          "Klient jest alergikiem i po posiłku twierdzi że nie uwzględniono alergii",
          "Klient żąda rachunku od 30 minut i jest coraz bardziej zdenerwowany",
          "Klient pyta dlaczego ta sama potrawa jest mniejsza niż poprzednio",
          "Klient jest w grupie i żąda osobnych rachunków na 8 osób z podziałem",
          "Klient jest pijany i żąda kolejnego alkoholu",
          "Klient jest z dziećmi które biegają — kelner zwrócił uwagę i klient się oburza",
          "Klient żąda modyfikacji dania której kuchnia nie może zrobić",
          "Klient twierdzi że kelner był nieuprzejmy — spojrzał krzywo",
          "Klient nie chce płacić za danie które nie smakowało po zjedzeniu połowy",
          "Klient pyta dlaczego nie ma stolika chociaż rezerwował przez telefon",
          "Klient twierdzi że ceny w menu są inne niż na stronie internetowej",
          "Klient rozsypał jedzenie i obwinia kelnera że podstawił niedbale",
          "Klient żąda darmowego deseru bo to urodziny bez wcześniejszej rezerwacji",
          "Klient żąda że będzie go obsługiwać konkretny kelner który jest zajęty",
          "Klient żąda żeby kelner polecił mu co zjeść i kłóci się z rekomendacją"
        ]
      },
      "Manager sali": {
        emoji: "👔",
        scenariusze: [
          "Klient żąda stolika dla 10 osób bez rezerwacji w sobotni wieczór",
          "Klient twierdzi że kelner był wobec niego arogancki",
          "Klient żąda zwrotu za cały posiłek bo jedno danie nie smakowało",
          "Klient ma rezerwację ale stolik jest zajęty przez spóźnionego gościa",
          "Klient grozi złą opinią na TripAdvisor jeśli nie dostanie rabatu",
          "Klient twierdzi że w jedzeniu był owad",
          "Klient żąda specjalnego menu dla dziecka którego restauracja nie ma",
          "Klient organizuje przyjęcie i zmienia liczbę gości na 2h przed",
          "Klient jest wege i twierdzi że danie wege zawierało mięso",
          "Klient żąda cichego stolika ale wszystkie są zajęte",
          "Klient twierdzi że obsługa dyskryminowała go ze względu na wygląd",
          "Klient żąda faktury VAT na firmę ale zapłacił kartą prywatną",
          "Klient wstał od stołu i chce odejść nie płacąc bo za długo czekał",
          "Klient chce żeby muzyka była ciszej — reszta gości woli głośniej",
          "Klient twierdzi że atmosfera jest nie taka jak na zdjęciach w internecie",
          "Klient na imprezie firmowej przekroczył budżet i nie chce dopłacić",
          "Klient jest celebrytą i żąda traktowania VIP bez wcześniejszej informacji",
          "Klient twierdzi że restauracja naliczyła opłatę za serwis bez informowania",
          "Klient żąda rozmowy z szefem kuchni osobiście przy stole",
          "Klient zmienił rezerwację trzy razy i teraz żąda najlepszego stolika"
        ]
      },
      "Szef kuchni": {
        emoji: "👨‍🍳",
        scenariusze: [
          "Klient twierdzi że danie było niezgodne z opisem w menu",
          "Klient żąda zmiany receptury bo jest uczulony na czosnek",
          "Klient twierdzi że to samo danie było smaczniejsze w poprzedniej wizycie",
          "Klient jest krytykiem kulinarnym i komentuje każdy aspekt dania",
          "Klient żąda dania które nie jest w menu ale proste do zrobienia",
          "Klient twierdzi że mięso było niedopieczone i grozi sanepidem",
          "Klient pyta o skład każdego składnika i kwestionuje jakość produktów",
          "Klient twierdzi że porcja jest za mała jak na tę cenę",
          "Klient porównuje danie z tym samym w restauracji we Włoszech",
          "Klient jest szefem kuchni amatorskim i poucza o technikach gotowania",
          "Klient twierdzi że miał zatrucie pokarmowe po wizycie",
          "Klient żąda przepisu na danie które mu smakowało",
          "Klient chce żeby szef kuchni dostosował danie na jego sposób",
          "Klient twierdzi że danie było przetrzymane i nieświeże",
          "Klient porównuje restaurację z programem kulinarnym w TV",
          "Klient twierdzi że alergeny nie były oznaczone w menu",
          "Klient fotografuje danie i pyta czy tak ma wyglądać",
          "Klient żąda żeby szef kuchni wyszedł i osobiście wyjaśnił skład",
          "Klient twierdzi że kelner przekazał złe preferencje smakowe do kuchni",
          "Klient żąda diety ketogenicznej ale nic w menu nie pasuje"
        ]
      },
      "Rezerwacje i zamówienia (telefon)": {
        emoji: "📞",
        scenariusze: [
          "Klient rezerwuje stolik dla 10 osób i co chwilę zmienia liczbę gości",
          "Klient dzwoni i pyta o danie którego nie ma w menu bo jadł je u znajomych",
          "Klient odwołuje rezerwację na 30 minut przed i kłóci się o zwrot kaucji",
          "Klient zamawia catering na imprezę firmową i negocjuje każdy szczegół ceny",
          "Klient pyta o menu wegetariańskie i jest niezadowolony z dostępnych opcji",
          "Klient twierdzi że umawiał się na stolik przy oknie i jest zły że nie ma miejsca",
          "Klient dzwoni z reklamacją po wczorajszej wizycie — twierdzi że go rozbolał żołądek",
          "Klient pyta o możliwość dowozu i jest zły na czas oczekiwania na dostawę",
          "Klient żąda specjalnego menu urodzinowego dla dziecka którego restauracja nie oferuje",
          "Klient twierdzi że na stronie internetowej jest inna cena niż przy zamawianiu telefonicznie",
          "Klient pyta o wolne stoliki na sobotni wieczór i jest zły że nie ma miejsc",
          "Klient organizuje urodziny i żąda personalizowanego tortu którego nie robicie",
          "Klient dzwoni w trakcie szczytu serwisu i żąda że kelner podejdzie do telefonu",
          "Klient jest alergikiem i przez 20 minut przepytuje obsługę o każdy składnik dania",
          "Klient pyta czy może przyjść z własnym alkoholem na przyjęcie prywatne",
          "Klient chce zarezerwować salę na wesele i oczekuje pełnej wyceny przez telefon",
          "Klient grozi złą opinią za poprzednią wizytę i żąda vouchera kompensacyjnego",
          "Klient pyta o promocje i zniżki których restauracja nie oferuje telefonicznie",
          "Klient zamówił dowóz godzinę temu i dzwoni ze złością że jedzenie nie dotarło",
          "Klient żąda faktury VAT na firmę za zamówienie telefoniczne — okazuje się skomplikowane"
        ]
      }
    }
  },

  "Warsztat samochodowy": {
    emoji: "🔧",
    stanowiska: {
      "Mechanik": {
        emoji: "🔧",
        scenariusze: [
          "Klient twierdzi że po naprawie skrzyni biegów auto jeździ gorzej",
          "Klient stoi nad mechanikiem i komentuje każdą czynność",
          "Klient twierdzi że mechanik uszkodził inne elementy podczas naprawy",
          "Klient pyta dlaczego naprawa trwa dłużej niż obiecano",
          "Klient twierdzi że użyto tańszych części niż w umowie",
          "Klient żąda żeby mechanik naprawił dodatkową usterkę skoro już jest w środku",
          "Klient kwestionuje konieczność wymiany części którą mechanik wskazał",
          "Klient przyniósł własne części i pyta dlaczego warsztat nie chce ich montować",
          "Klient twierdzi że silnik stuka tak samo jak przed naprawą",
          "Klient pyta czy mechanik na pewno wie co robi bo to drogie auto",
          "Klient twierdzi że warsztat nie naprawił usterki tylko ją ukrył",
          "Klient chce żeby mechanik sprawdził jeszcze 5 rzeczy bez dodatkowej opłaty",
          "Klient odkrył zarysowanie na karoserii którego wcześniej nie było",
          "Klient twierdzi że poziom oleju jest niższy niż powinien po wymianie",
          "Klient żąda żeby mechanik pokazał mu stare wymienione części",
          "Klient nie rozumie technicznego wyjaśnienia i kłóci się",
          "Klient twierdzi że w YouTube mówią że to naprawa na 5 minut",
          "Klient pyta dlaczego roboczogodzina kosztuje tyle ile u lekarza",
          "Klient twierdzi że auto wróciło brudniejsze niż było oddane",
          "Klient twierdzi że zapach w aucie jest inny niż przed oddaniem"
        ]
      },
      "Doradca serwisowy": {
        emoji: "🗒️",
        scenariusze: [
          "Klient jest oburzony wyceną naprawy — tyle co nowy samochód",
          "Klient odmawia naprawy koniecznej i żąda tylko tymczasowego łatania",
          "Klient twierdzi że doradca wymyśla usterki żeby zarobić",
          "Klient negocjuje wycenę i targuje się o każdą pozycję",
          "Klient jest zdenerwowany bo auto stoi w warsztacie już 3 dni",
          "Klient twierdzi że podczas przeglądu pominięto ważną usterkę",
          "Klient żąda samochodu zastępczego którego warsztat nie ma",
          "Klient pyta dlaczego diagnostyka komputerowa kosztuje",
          "Klient twierdzi że poprzedni doradca powiedział mu coś innego",
          "Klient dostał ubezpieczeniowy kosztorys i żąda dokładnie tej kwoty",
          "Klient chce zabrać auto w połowie naprawy bo znalazł taniej",
          "Klient żąda szczegółowego rozliczenia każdej roboczogodziny",
          "Klient pyta dlaczego oryginalne części są droższe niż zamienniki",
          "Klient twierdzi że usterka wróciła tydzień po naprawie",
          "Klient żąda naprawy w jeden dzień gdy potrzeba tygodnia",
          "Klient jest po wypadku — zdenerwowany i emocjonalny",
          "Klient pyta dlaczego nie dostał SMS że auto gotowe",
          "Klient twierdzi że doradca nie wyjaśnił mu co zostanie zrobione",
          "Klient żąda gwarancji że po naprawie auto nie będzie miało już żadnych usterek",
          "Klient przyszedł tylko na wymianę opon a doradca znalazł 3 poważne usterki"
        ]
      },
      "Recepcja (warsztat)": {
        emoji: "📋",
        scenariusze: [
          "Klient wpada bez umówionego terminu i żąda przyjęcia od razu",
          "Klient twierdzi że umawiał się na wcześniejszą godzinę",
          "Klient pyta o status auta a recepcja nie ma dostępu do systemu",
          "Klient jest zły że czeka na oddzwonienie z wyceną od 4 godzin",
          "Klient żąda odbioru auta po godzinach pracy warsztatu",
          "Klient pyta o ceny robocizny i jest oburzony",
          "Klient twierdzi że recepcja poinformowała go błędnie o terminie gotowości",
          "Klient chce rozliczyć się bez faktury",
          "Klient jest ubezpieczony — pyta dlaczego musi cokolwiek dopłacać",
          "Klient twierdzi że w aucie brakuje rzeczy osobistych po odebraniu",
          "Klient jest w złym nastroju po kolizji i wyładowuje frustrację na recepcji",
          "Klient pyta dlaczego auto nie jest gotowe skoro miało być dziś",
          "Klient żąda że zabierze auto mimo że naprawa nie jest skończona",
          "Klient twierdzi że zapłacił ale nie ma potwierdzenia w systemie",
          "Klient pyta o gwarancję na naprawę i kwestionuje jej warunki",
          "Klient chce reklamować naprawę która była rok temu",
          "Klient jest starszy — nie rozumie wyjaśnień i jest zdezorientowany",
          "Klient żąda żeby ktoś odwiózł go do domu bo zostawia auto",
          "Klient jest agresywny — przyjechał po kolizji i jest w szoku",
          "Klient twierdzi że warsztat zarysował auto na parkingu serwisu"
        ]
      },
      "Obsługa telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni że auto nie odpala i żąda holowania oraz przyjęcia do serwisu dzisiaj",
          "Klient pyta o orientacyjny koszt naprawy skrzyni biegów i jest oburzony kwotą",
          "Klient dzwoni że czeka na oddzwonienie z wyceną od 5 godzin",
          "Klient twierdzi że przez telefon obiecano mu termin na jutro a w systemie jest za tydzień",
          "Klient dzwoni po odbiór auta i pyta czy może zapłacić kartą — jest zły że tylko gotówka",
          "Klient pyta o status naprawy i jest zły że nikt go nie informuje na bieżąco",
          "Klient dzwoni że usterka wróciła 3 dni po naprawie i żąda bezpłatnej poprawki",
          "Klient twierdzi że faktura jest wyższa niż ustalona wycena przez telefon",
          "Klient dzwoni żeby przełożyć termin przeglądu i jest zły że najbliższy to za 3 tygodnie",
          "Klient pyta czy może zostawić auto po godzinach i jest zły że nie ma takiej opcji",
          "Klient dzwoni że kontrolka po naprawie znów się świeci i żąda natychmiastowego przyjazdu",
          "Klient pyta przez telefon ile potrwa wymiana opon i jest zły na podany czas",
          "Klient twierdzi że warsztat nie poinformował go o dodatkowych kosztach w trakcie naprawy",
          "Klient dzwoni że ubezpieczyciel nie chce zapłacić i pyta co może zrobić warsztat",
          "Klient jest agresywny bo właśnie miał stłuczkę i szuka warsztatu na teraz",
          "Klient pyta o samochód zastępczy i jest zły że warsztat go nie zapewnia",
          "Klient dzwoni żeby anulować rezerwację w ostatniej chwili i pyta o ewentualną opłatę",
          "Klient twierdzi że po wymianie oleju poziom jest za niski i domaga się przyjazdu mechanika",
          "Klient pyta dlaczego diagnostyka komputerowa jest płatna skoro nic nie naprawiają",
          "Klient dzwoni że auto wydaje dziwny dźwięk i żąda że mechanik opisze mu co to przez telefon"
        ]
      }
    }
  },

  "Agencja nieruchomości": {
    emoji: "🏠",
    stanowiska: {
      "Pośrednik/Agent": {
        emoji: "🏠",
        scenariusze: [
          "Klient twierdzi że agent ukrył wady nieruchomości przed sprzedażą",
          "Klient żąda zwrotu prowizji bo sam znalazł kupca",
          "Klient jest oburzony wysokością prowizji agencji",
          "Klient twierdzi że agent nie negocjował ceny w jego imieniu",
          "Klient porównuje agencję z platformami bez prowizji — Otodom OLX",
          "Klient zmienia zdanie po trzecim oglądaniu i żąda kolejnych 10 opcji",
          "Klient twierdzi że mieszkanie na zdjęciach wygląda lepiej niż w realu",
          "Klient pyta dlaczego agent nie odpowiedział na maila przez 2 dni",
          "Klient żąda żeby agent był dostępny w każdy weekend",
          "Klient twierdzi że agent faworyzuje sprzedającego bo to jego klient",
          "Klient jest po rozwodzie — emocjonalny szuka mieszkania w stresie",
          "Klient żąda gwarancji że cena nieruchomości wzrośnie",
          "Klient twierdzi że inna agencja oferuje tę samą nieruchomość taniej",
          "Klient jest sprzedającym — niezadowolony z braku kupca po 3 miesiącach",
          "Klient żąda żeby agent obniżył własną prowizję bo rynek jest trudny",
          "Klient twierdzi że agent nie znał odpowiedzi na podstawowe pytania prawne",
          "Klient po podpisaniu umowy znalazł lepszą nieruchomość i chce się wycofać",
          "Klient pyta dlaczego musi płacić prowizję skoro agent nic nie zrobił",
          "Klient twierdzi że agent umówił oglądanie bez jego zgody",
          "Klient twierdzi że agencja ujawniła jego budżet sprzedającemu"
        ]
      },
      "Doradca kredytowy": {
        emoji: "💰",
        scenariusze: [
          "Klient dostał odmowę kredytu i obwinia doradcę",
          "Klient jest oburzony że RRSO jest wyższe niż myślał",
          "Klient twierdzi że doradca nie poinformował go o wszystkich kosztach",
          "Klient chce kredytu na 120% wartości nieruchomości",
          "Klient ma złą historię BIK i nie rozumie dlaczego bank odmawia",
          "Klient porównuje ofertę z reklamą w TV gdzie było taniej",
          "Klient żąda gwarancji że za 5 lat raty nie wzrosną",
          "Klient twierdzi że podpisał umowę bez rozumienia warunków i chce wycofania",
          "Klient pyta dlaczego doradca bierze prowizję od banku a nie od niego",
          "Klient jest tuż przed emeryturą i bank nie chce dać kredytu na 30 lat",
          "Klient jest samozatrudniony — bank kwestionuje jego dochody",
          "Klient żąda wyboru banku który doradca mu odradza",
          "Klient twierdzi że inny doradca załatwił to samo taniej",
          "Klient zmienił pracę w trakcie procesu kredytowego i jest zły na konsekwencje",
          "Klient żąda żeby doradca coś zrobił z odmowną decyzją banku",
          "Klient twierdzi że doradca działał na jego niekorzyść",
          "Klient po 6 miesiącach chce zmienić bank i zaczyna od pretensji",
          "Klient pyta o ubezpieczenie kredytu i twierdzi że jest zbędne",
          "Klient żąda natychmiastowej decyzji kredytowej tego samego dnia",
          "Klient jest obcokrajowcem — pyta dlaczego procedura jest trudniejsza"
        ]
      },
      "Asystent biura (nieruchomości)": {
        emoji: "🗂️",
        scenariusze: [
          "Klient wpada bez umówionego terminu i żąda spotkania z agentem",
          "Klient dzwoni po raz czwarty bo agent nie oddzwania",
          "Klient pyta o szczegóły oferty których asystent nie zna",
          "Klient jest zły że musi rozmawiać z asystentem a nie agentem",
          "Klient chce umówić 5 oglądań na jeden dzień — nierealne",
          "Klient twierdzi że asystent wysłał mu błędną ofertę mailem",
          "Klient żąda wszystkich dokumentów nieruchomości natychmiast",
          "Klient jest emocjonalny — właśnie rozpadł mu się zakup w innej agencji",
          "Klient pyta o warunki umowy z agencją których asystent nie może negocjować",
          "Klient twierdzi że nikt nie odpisał na jego formularz ze strony od tygodnia",
          "Klient żąda że nie będzie podpisywał żadnych umów z agencją",
          "Klient pyta czy konkretna nieruchomość jest warta swojej ceny",
          "Klient twierdzi że widział tę samą ofertę taniej na innym portalu",
          "Klient jest zdezorientowany procedurami i staje się agresywny",
          "Klient pyta o bezpieczeństwo transakcji i boi się oszustwa",
          "Klient twierdzi że agencja ujawniła jego dane kontaktowe sprzedającemu",
          "Klient chce zrezygnować z poszukiwań i żąda zwrotu opłaty rezerwacyjnej",
          "Klient pyta dlaczego ta sama nieruchomość jest w dwóch agencjach w różnych cenach",
          "Klient żąda pilnie tłumaczenia dokumentów na inny język",
          "Klient jest zdezorientowany stanem prawnym nieruchomości i atakuje asystenta"
        ]
      },
      "Obsługa telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni żeby umówić oglądanie i jest zły że agent ma termin dopiero za tydzień",
          "Klient pyta o cenę mieszkania i jest oburzony wysokością prowizji agencji",
          "Klient twierdzi że przez telefon agent opisał mieszkanie inaczej niż wygląda w rzeczywistości",
          "Klient dzwoni że oferta którą oglądał zniknęła ze strony i żąda wyjaśnień",
          "Klient jest sprzedającym i pyta dlaczego jego mieszkanie nie ma oglądań od miesiąca",
          "Klient dzwoni po oglądaniu i żąda natychmiastowej decyzji o cenie bo ma inne oferty",
          "Klient twierdzi że nikt nie oddzwonił po zostawieniu zapytania przez portal",
          "Klient pyta o stan prawny nieruchomości i jest zdezorientowany odpowiedzią",
          "Klient jest emocjonalny — właśnie odmówiono mu kredytu i szuka tańszej opcji",
          "Klient pyta przez telefon czy agencja może obniżyć prowizję jeśli sam znalazł kupca",
          "Klient twierdzi że agent pokazał jego ofertę bez zgody na obniżoną cenę",
          "Klient dzwoni żeby zrezygnować z umowy z agencją przed upływem terminu",
          "Klient pyta o możliwość oglądania mieszkania w weekend o konkretnej godzinie",
          "Klient jest zły że agencja nie aktualizuje ofert na portalach na bieżąco",
          "Klient pyta dlaczego ta sama nieruchomość jest tańsza w innej agencji",
          "Klient dzwoni że sprzedający wycofał się z transakcji i co teraz z zaliczką",
          "Klient pyta o możliwość negocjacji ceny przez telefon bez oglądania",
          "Klient twierdzi że agent nie poinformował go o wadach prawnych nieruchomości",
          "Klient dzwoni że chce kupić mieszkanie za gotówkę i żąda specjalnych warunków",
          "Klient pyta o rynek najmu i jest zły że ceny wynajmu są tak wysokie"
        ]
      }
    }
  },

  "Firma transportowa / spedycja": {
    emoji: "🚛",
    stanowiska: {
      "Dyspozytor": {
        emoji: "🚛",
        scenariusze: [
          "Klient dzwoni że kierowca nie dotarł o umówionej godzinie",
          "Klient żąda natychmiastowej dostawy której nie ma w harmonogramie",
          "Klient twierdzi że towar dotarł uszkodzony i obwinia firmę",
          "Klient pyta gdzie jest jego przesyłka — ostatnia aktualizacja była 2 dni temu",
          "Klient żąda dostawy w konkretnym przedziale godzinowym niemożliwym do spełnienia",
          "Klient twierdzi że zamówił inny rodzaj transportu niż przyjechał",
          "Klient jest importerem — towar utknął na granicy i oskarża firmę",
          "Klient żąda żeby kierowca wrócił bo zostawił towar w złym miejscu",
          "Klient twierdzi że brakuje palet w dostawie",
          "Klient nie może przyjąć dostawy w ustalonym terminie i oczekuje elastyczności",
          "Klient pyta dlaczego koszt transportu wzrósł od ostatniego zlecenia",
          "Klient żąda ekspresowej dostawy w cenie standardowej",
          "Klient twierdzi że kierowca zachowywał się niekulturalnie",
          "Klient żąda informacji na żywo gdzie jest jego ładunek co godzinę",
          "Klient odmawia zapłaty za kurs bo kierowca się spóźnił",
          "Klient twierdzi że firma nie dostarczyła towaru w terminie umownym — kara",
          "Klient ma pilne zlecenie na jutro rano i dzwoni o 22:00",
          "Klient żąda transportu towaru niebezpiecznego bez odpowiednich dokumentów",
          "Klient twierdzi że towar był źle zabezpieczony i się przemieścił",
          "Klient pyta dlaczego firma nie może przewieźć jego towaru ubezpieczonego za pełną wartość"
        ]
      },
      "Kierowca": {
        emoji: "🚚",
        scenariusze: [
          "Klient nie chce przyjąć towaru bo uważa że jest uszkodzony",
          "Klient twierdzi że kierowca zawiózł towar pod zły adres",
          "Klient żąda żeby kierowca wniósł ciężki towar na 4 piętro bez windy",
          "Klient jest na miejscu dostawy i kłóci się o godzinę — spóźnienie 15 minut",
          "Klient żąda żeby kierowca poczekał godzinę podczas rozładunku",
          "Klient twierdzi że kierowca uszkodził bramę podczas manewrowania",
          "Klient jest ochroniarzem na magazynie — utrudnia przyjęcie towaru biurokratycznie",
          "Klient odmawia podpisania dokumentu odbioru bez szczegółowych oględzin",
          "Klient twierdzi że paczka była otwierana po drodze",
          "Klient jest rozhisteryzowany bo czekał na dostawę cały dzień",
          "Klient żąda żeby kierowca zabrał stary sprzęt w zamian bez zlecenia",
          "Klient pyta kierowcę o cenę transportu i kłóci się z odpowiedzią",
          "Klient twierdzi że kierowca był arogancki przy poprzedniej dostawie",
          "Klient nie ma nikogo do odbioru i żąda żeby kierowca zostawił towar bez podpisu",
          "Klient żąda faktury której kierowca nie ma przy sobie",
          "Klient twierdzi że zamówił inny pojazd — za mały lub za duży",
          "Klient jest zagraniczny — bariera językowa i frustracja",
          "Klient żąda żeby kierowca pomógł mu rozłożyć towar w magazynie",
          "Klient twierdzi że brakuje jednej sztuki towaru przy rozładunku",
          "Klient chce zapłacić gotówką gdy ustalona była płatność przelewem"
        ]
      },
      "Obsługa klienta/BOK (transport)": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni że przesyłka zaginęła i żąda natychmiastowego odszkodowania",
          "Klient pyta o status dostawy a system nie jest zaktualizowany",
          "Klient twierdzi że nikt nie poinformował go o opóźnieniu",
          "Klient żąda zwrotu za usługę bo towar dotarł za późno",
          "Klient pyta dlaczego ceny za transport wzrosły o 30%",
          "Klient twierdzi że firma wysłała towar innym przewoźnikiem bez zgody",
          "Klient chce złożyć reklamację i jest oburzony procedurą — za długa",
          "Klient twierdzi że obsługa w poprzednim kontakcie podała błędne informacje",
          "Klient żąda odszkodowania za towar zniszczony podczas transportu",
          "Klient pyta dlaczego ubezpieczenie nie pokrywa pełnej wartości towaru",
          "Klient nie rozumie faktury — pozycje są inne niż oczekiwał",
          "Klient żąda pilnego śledzenia przesyłki w czasie rzeczywistym",
          "Klient twierdzi że firma zgubiła jego dokumenty celne",
          "Klient jest hurtownikiem i grozi zmianą firmy transportowej",
          "Klient pyta o możliwość stałej umowy i negocjuje ceny agresywnie",
          "Klient twierdzi że kierowca zostawił towar u sąsiada bez zgody",
          "Klient jest zły że czas dostawy był trzy razy dłuższy niż obiecano",
          "Klient żąda priorytetowej obsługi bo jest stałym klientem",
          "Klient pyta o procedurę zwrotu towaru do nadawcy i jest oburzony kosztem",
          "Klient twierdzi że firma stosuje nieuczciwe klauzule w umowie"
        ]
      }
    }
  },

  "Sklep detaliczny": {
    emoji: "🏪",
    stanowiska: {
      "Sprzedawca": {
        emoji: "🛍️",
        scenariusze: [
          "Klient chce kupić i pyta o różnicę między dwoma produktami — oczekuje eksperckiej opinii",
          "Klient chce kupić i pyta czy produkt jest dostępny w innym kolorze lub rozmiarze",
          "Klient chce kupić i pyta o możliwość rezerwacji produktu",
          "Klient chce kupić produkt na prezent i prosi o pomoc w wyborze",
          "Klient chce kupić i pyta o gwarancję oraz serwis pogwarancyjny",
          "Klient twierdzi że cena na półce jest inna niż przy kasie",
          "Klient żąda rabatu bo produkt ma drobną wadę ekspozycyjną",
          "Klient twierdzi że sprzedawca polecił mu zły produkt przy poprzedniej wizycie",
          "Klient chce zwrócić produkt bez paragonu bo to prezent",
          "Klient porównuje cenę ze sklepem internetowym na telefonie i żąda wyrównania",
          "Klient żąda produktu który jest na wystawie a nie do sprzedaży",
          "Klient twierdzi że sprzedawca był nieuprzejmy i nie chciał pomóc",
          "Klient żąda żeby sprzedawca sprawdził czy produkt jest na stanie w magazynie",
          "Klient twierdzi że produkt który kupił tydzień temu jest teraz o 20% tańszy",
          "Klient jest starszy i zdezorientowany — potrzebuje bardzo dużo uwagi",
          "Klient żąda montażu lub instalacji produktu w sklepie",
          "Klient jest agresywny bo nie może znaleźć produktu który widział w reklamie",
          "Klient pyta o produkt który sklep nie ma i jest zły na brak alternatywy",
          "Klient reklamuje produkt kupiony 3 miesiące temu — normalne zużycie",
          "Klient żąda żeby sprzedawca opakował produkt na prezent perfekcyjnie"
        ]
      },
      "Kasjer": {
        emoji: "🧾",
        scenariusze: [
          "Klient twierdzi że przy kasie cena jest inna niż na półce",
          "Klient żąda paragonu zamiast faktury lub odwrotnie — problemy formalne",
          "Klient twierdzi że dał większy banknot niż dostał reszty",
          "Klient jest zły bo kolejka przy kasie jest za długa",
          "Klient żąda żeby kasjer przepuścił go bez kolejki bo ma jedno małe zakupy",
          "Klient twierdzi że kupon promocyjny powinien działać na ten produkt",
          "Klient płaci kartą która odrzuca — jest zdenerwowany i obwinia terminal",
          "Klient żąda rozbicia paragonu na kilka — jeden na firmę jeden prywatny",
          "Klient odkrył przy kasie że zapomniał portfela i jest zły",
          "Klient żąda żeby kasjer poczekał aż wróci po zapomniany produkt",
          "Klient twierdzi że program lojalnościowy nie doliczył punktów",
          "Klient jest zły że musi pakować sam bo nie ma obsługi pakowania",
          "Klient pyta kasjera czy cena produktu jest uczciwa i oczekuje potwierdzenia",
          "Klient żąda anulowania transakcji po wydaniu paragonu",
          "Klient twierdzi że promocja obejmowała ten produkt a system jej nie naliczył",
          "Klient jest niecierpliwy i komentuje tempo pracy kasjera",
          "Klient żąda zwrotu na gotówkę mimo że płacił kartą",
          "Klient twierdzi że kasjer był arogancki i nieuprzejmy",
          "Klient prosi o kredyt lub odłożenie towaru bez żadnej wpłaty",
          "Klient żąda żeby kasjer sprawdził cenę każdego produktu osobno"
        ]
      },
      "Kierownik sklepu": {
        emoji: "🏪",
        scenariusze: [
          "Klient twierdzi że sprzedawca był rasistowski lub dyskryminujący",
          "Klient żąda zwrotu towaru po terminie powołując się na wyjątkowe okoliczności",
          "Klient grozi złą opinią w Google jeśli nie dostanie rabatu",
          "Klient twierdzi że sklep stosuje nieuczciwe praktyki cenowe",
          "Klient żąda wymiany produktu bez paragonu i bez możliwości weryfikacji",
          "Klient oskarża sklep o sprzedaż wadliwego towaru celowo",
          "Klient twierdzi że produkt był droższy w tym sklepie niż w sąsiednim",
          "Klient jest agresywny — żąda żeby kierownik zwolnił konkretnego pracownika",
          "Klient twierdzi że towar był przeterminowany — żywność lub kosmetyki",
          "Klient żąda odszkodowania za alergen w produkcie który kupił",
          "Klient grozi UOKiK i Inspekcją Handlową jednocześnie",
          "Klient twierdzi że kamera w sklepie narusza jego prywatność",
          "Klient jest dziennikarzem i robi research o nieuczciwych sklepach",
          "Klient żąda bezpłatnej dostawy do domu bo produkt jest ciężki",
          "Klient twierdzi że obsługa go obserwowała jak potencjalnego złodzieja",
          "Klient pyta dlaczego ceny w sklepie są wyższe niż w internecie",
          "Klient twierdzi że przy poprzedniej wizycie był lepiej obsłużony",
          "Klient żąda rozmowy telefonicznej z centralą sklepu w tej chwili",
          "Klient twierdzi że sklep naruszył jego dane z karty lojalnościowej",
          "Klient żąda specjalnych warunków zakupu bo jest stałym klientem od lat"
        ]
      },
      "Obsługa telefoniczna / Infolinia": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni i pyta czy dany produkt jest dostępny w sklepie stacjonarnym",
          "Klient pyta o cenę produktu i jest oburzony że jest wyższa niż w sklepie internetowym",
          "Klient dzwoni z reklamacją produktu zakupionego tydzień temu i żąda natychmiastowego zwrotu",
          "Klient pyta o możliwość telefonicznej rezerwacji produktu i jest zły że to niemożliwe",
          "Klient twierdzi że przez telefon obiecano mu promocję która już nie obowiązuje",
          "Klient pyta o godziny otwarcia i denerwuje się że różnią się od tych na Google",
          "Klient dzwoni sprawdzić status zamówionego produktu którego nie ma na stanie",
          "Klient pyta o procedurę zwrotu przez kuriera i jest zły na jej skomplikowanie",
          "Klient żąda rozmowy z kierownikiem bo sprzedawca był jego zdaniem nieuprzejmy",
          "Klient pyta o dostępność konkretnego rozmiaru lub koloru produktu",
          "Klient twierdzi że produkt który kupił wczoraj jest już wadliwy i żąda wymiany dziś",
          "Klient dzwoni z pytaniem o montaż lub instalację zakupionego sprzętu",
          "Klient pyta o paragon elektroniczny i ma problem z jego pobraniem z systemu",
          "Klient jest zły że dostał SMS o gotowości zamówienia a produktu nie ma na miejscu",
          "Klient pyta o możliwość wystawienia faktury VAT na firmę i żąda korekty",
          "Klient dzwoni żeby zamówić produkt z dostawą do domu i targuje się o cenę wysyłki",
          "Klient pyta o gwarancję rozszerzoną i negocjuje jej cenę przez telefon",
          "Klient twierdzi że opis produktu na stronie jest inny niż towar który dostał",
          "Klient dzwoni po zamknięciu sklepu i jest zły że nikt nie odbiera",
          "Klient pyta o program lojalnościowy i jest niezadowolony że punkty przepadły"
        ]
      }
    }
  },

  "Agencja marketingowa / IT": {
    emoji: "💻",
    stanowiska: {
      "Account Manager": {
        emoji: "📱",
        scenariusze: [
          "Klient twierdzi że kampania nie przyniosła żadnych efektów i żąda zwrotu",
          "Klient porównuje agencję z freelancerem który robi taniej",
          "Klient zmienia brief po każdym spotkaniu i pyta dlaczego termin się przesuwa",
          "Klient żąda gwarancji konkretnych wyników z kampanii Google Ads",
          "Klient twierdzi że account nie reaguje na maile szybko",
          "Klient żąda cotygodniowych raportów w formacie którego agencja nie używa",
          "Klient chce rozwiązać umowę bo konkurencja zaproponowała niższą cenę",
          "Klient twierdzi że poprzedni account manager obiecał mu coś innego",
          "Klient nie rozumie faktury — pozycje są dla niego niejasne",
          "Klient żąda bezpłatnej dodatkowej usługi skoro agencja już obsługuje jego konto",
          "Klient twierdzi że wyniki w raporcie są fałszowane",
          "Klient żąda pilnej kampanii na jutro — brief dostarcza dziś",
          "Klient jest niezadowolony z projektu graficznego i podważa kompetencje agencji",
          "Klient porównuje koszt agencji z agencją z Ukrainy — 5x taniej",
          "Klient twierdzi że agencja przejęła jego bazę danych klientów",
          "Klient żąda natychmiastowych zmian na stronie podczas trwania kampanii",
          "Klient po roku współpracy nagle oczekuje dużego rabatu lub odejdzie",
          "Klient twierdzi że SEO nie działa bo jego strona jest na drugiej stronie Google",
          "Klient żąda pełnego dostępu do konta Google Ads i Facebook w celu audytu",
          "Klient twierdzi że agencja działa też dla jego konkurenta — konflikt interesów"
        ]
      },
      "Grafik/Developer": {
        emoji: "💻",
        scenariusze: [
          "Klient twierdzi że projekt graficzny jest zupełnie niezgodny z jego wizją",
          "Klient żąda nieograniczonej liczby poprawek bez dodatkowej opłaty",
          "Klient twierdzi że kolory na ekranie różnią się od wydruku",
          "Klient dostarcza materiały w złym formacie i jest zły że trzeba czekać",
          "Klient twierdzi że strona nie działa na jego konkretnym telefonie",
          "Klient porównuje projekt z pracą z Canvy którą zrobił sam",
          "Klient żąda żeby developer zalogował się do jego serwera i naprawił błąd o 23:00",
          "Klient zmienia koncepcję po zatwierdzeniu projektu i oczekuje braku dopłaty",
          "Klient twierdzi że logo jest zbyt podobne do konkurencji",
          "Klient pyta dlaczego strona internetowa ładuje się 2 sekundy a nie 1 sekundę",
          "Klient żąda dodania funkcjonalności której nie było w briefie",
          "Klient twierdzi że zdjęcia użyte w projekcie naruszają prawa autorskie",
          "Klient jest niezadowolony z typografii i podaje sugestie sprzeczne ze sobą",
          "Klient żąda natychmiastowej poprawki błędu na stronie podczas weekendu",
          "Klient twierdzi że poprzedni projekt który zatwierdził już mu nie pasuje",
          "Klient pyta dlaczego roboczogodzina developera tyle kosztuje",
          "Klient żąda żeby developer nauczył go jak obsługiwać CMS w 30 minut",
          "Klient twierdzi że sklep internetowy traci klientów przez błąd w kodzie",
          "Klient chce żeby developer dostarczył kody źródłowe bez dodatkowej umowy",
          "Klient twierdzi że design jest nieaktualny i nie pasuje do trendów 2025"
        ]
      },
      "Project Manager": {
        emoji: "📋",
        scenariusze: [
          "Klient twierdzi że projekt jest opóźniony przez zaniedbanie agencji",
          "Klient żąda wdrożenia projektu szybciej niż pozwala zakres prac",
          "Klient twierdzi że PM nie informuje go o postępach wystarczająco często",
          "Klient angażuje się zbyt mocno i blokuje pracę zespołu swoimi uwagami",
          "Klient zmienia priorytety co tydzień i jest zły że projekt się nie zamyka",
          "Klient twierdzi że zakres projektu był inny niż w umowie",
          "Klient żąda karą umowną za każdy dzień opóźnienia",
          "Klient twierdzi że PM zatwierdził etap bez jego wiedzy",
          "Klient żąda żeby PM był dostępny na Slacku od 7 do 22",
          "Klient nie akceptuje sprint review i ciągle otwiera zamknięte zadania",
          "Klient twierdzi że budżet projektu jest przekraczany bez jego zgody",
          "Klient żąda zmian w projekcie zatwierdzonym 2 tygodnie temu bez dopłaty",
          "Klient twierdzi że agencja zatrudniła nieodpowiednią osobę do jego projektu",
          "Klient chce wdrożyć projekt przed datą umowną bez możliwości skrócenia",
          "Klient twierdzi że dokumentacja projektu jest niekompletna",
          "Klient żąda żeby PM przejął obowiązki które należą do klienta",
          "Klient twierdzi że decyzje były podejmowane bez jego konsultacji",
          "Klient jest niezadowolony z metodyki — chce przejść z Agile na waterfall w połowie",
          "Klient żąda szczegółowego raportu czasu pracy każdego członka zespołu",
          "Klient twierdzi że poprzedni PM zostawił projekt w chaosie i nowy musi to naprawić za darmo"
        ]
      },
      "Wsparcie klienta (telefon)": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni że kampania reklamowa przestała działać i żąda natychmiastowej reakcji",
          "Klient pyta o wyniki kampanii i jest oburzony że obsługa nie może podać ich od razu",
          "Klient dzwoni że na jego stronie jest błąd i żąda naprawy w ciągu godziny",
          "Klient twierdzi że przez telefon obiecano mu inne wyniki KPI niż osiągnięto",
          "Klient dzwoni w niedzielę wieczór z pilną sprawą dotyczącą kampanii",
          "Klient pyta o wycenę nowego projektu i jest oburzony pierwszą przybliżoną kwotą",
          "Klient twierdzi że nie dostaje cotygodniowych raportów które miał otrzymywać",
          "Klient dzwoni sprawdzić czy agencja zrealizowała jego ostatnią prośbę mailową",
          "Klient jest zły że musi rozmawiać z inną osobą niż jego stały account manager",
          "Klient pyta o możliwość pilnego spotkania bo przełożony żąda od niego wyników",
          "Klient twierdzi że agencja używa jego materiałów graficznych bez zgody",
          "Klient dzwoni że widział reklamę u konkurencji i pyta czy agencja ich obsługuje",
          "Klient pyta o przedłużenie umowy i negocjuje warunki agresywnie przez telefon",
          "Klient twierdzi że faktura jest wyższa niż oczekiwał i odmawia zapłaty",
          "Klient dzwoni że dostał negatywny komentarz w sieci i żąda natychmiastowego działania",
          "Klient pyta o dostęp do kont reklamowych i jest zły że agencja go nie przyznaje",
          "Klient twierdzi że strona wypadła z wyników Google i obwinia agencję za SEO",
          "Klient dzwoni sprawdzić status projektu który miał być gotowy wczoraj",
          "Klient pyta o wstrzymanie kampanii na czas urlopu bez naliczania opłat",
          "Klient twierdzi że konkurencja ma lepsze wyniki i poważnie rozważa zmianę agencji"
        ]
      }
    }
  },

  "Salon fryzjerski": {
    emoji: "✂️",
    stanowiska: {
      "Fryzjer/Stylista": {
        emoji: "✂️",
        scenariusze: [
          "Klientka twierdzi że fryzjer obciął za dużo — zupełnie nie to co prosiła",
          "Klientka jest niezadowolona z układu fryzury — inne niż na zdjęciu",
          "Klientka twierdzi że włosy są suche i zniszczone po zabiegu prostowania",
          "Klientka żąda bezpłatnej poprawki bo fryzura jej się nie podoba po wyjściu",
          "Klientka przyniosła zdjęcie celebrytki i żąda identycznej fryzury",
          "Klientka twierdzi że cena jest inna niż jej powiedziano przez telefon",
          "Klientka jest w połowie zabiegu i zmienia zdanie — chce coś innego",
          "Klientka twierdzi że fryzjer ją nie słuchał i robił co chciał",
          "Klientka żąda użycia jej własnych produktów które przyniosła",
          "Klientka porównuje cenę z salonem u której robi siostra",
          "Klientka twierdzi że poprzedni fryzjer robił to samo taniej i lepiej",
          "Klientka jest bardzo wymagająca i poprawia każdy szczegół",
          "Klientka pyta dlaczego ceny wzrosły od ostatniej wizyty",
          "Klientka twierdzi że fryzura trzyma się tylko jeden dzień",
          "Klientka żąda żeby fryzjer natychmiast poprawił fryzurę bez czekania",
          "Klientka twierdzi że włosy zaczęły wypadać po zabiegu",
          "Klientka jest niezadowolona z mycia głowy — za zimna woda",
          "Klientka jest dzieckiem — płacze i nie chce strzyżenia",
          "Klientka z bardzo zniszczonymi włosami żąda niemożliwego efektu",
          "Klientka twierdzi że fryzjer spędził na niej za mało czasu jak na tę cenę"
        ]
      },
      "Kolorystka": {
        emoji: "🎨",
        scenariusze: [
          "Klientka twierdzi że kolor jest zupełnie inny niż chciała",
          "Klientka ma reakcję alergiczną na farbę i obwinia salon",
          "Klientka twierdzi że kolor wyblakł po tygodniu",
          "Klientka żąda ponownego koloryzowania za darmo bo efekt jej nie pasuje",
          "Klientka przyniosła zdjęcie z Instagrama i żąda identycznego odcienia",
          "Klientka nie zrobiła testu uczuleniowego i żąda koloryzacji natychmiast",
          "Klientka twierdzi że włosy były po zabiegu suche i zniszczone",
          "Klientka żąda efektu balayage za cenę zwykłego farbowania",
          "Klientka porównuje cenę z farbą z drogerii którą może zrobić sama",
          "Klientka twierdzi że poprzednia kolorystka robiła to samo inaczej i lepiej",
          "Klientka chce rozjaśnienia o 5 tonów w jeden zabieg na zniszczonych włosach",
          "Klientka twierdzi że kolor na końcówkach różni się od nasady",
          "Klientka jest w ciąży i kłóci się o dopuszczalność farbowania",
          "Klientka żąda natychmiastowej korekty koloru bez czekania na termin",
          "Klientka jest niezadowolona z czasu zabiegu — czekała za długo pod folią",
          "Klientka twierdzi że salon używa złej jakości farb",
          "Klientka żąda żeby kolorystka pokazała jej certyfikaty i szkolenia",
          "Klientka chce fioletowych włosów a pracodawca jej zabrania — konflikt",
          "Klientka twierdzi że kolor po wyjściu wygląda inaczej niż w salonie",
          "Klientka żąda użycia konkretnej marki farby której salon nie ma"
        ]
      },
      "Recepcja (salon fryzjerski)": {
        emoji: "📅",
        scenariusze: [
          "Klientka wpada bez terminu i żąda przyjęcia od razu",
          "Klientka odwołuje wizytę na 1 godzinę przed i kłóci się o opłatę",
          "Klientka żąda konkretnej fryzjerki która jest niedostępna przez 3 tygodnie",
          "Klientka twierdzi że umawiała się na inną godzinę lub inną usługę",
          "Klientka pyta o ceny i jest oburzona kwotą za koloryzację",
          "Klientka żąda że zostanie przyjęta przed osobą z terminem bo ma mało czasu",
          "Klientka jest zła bo musi czekać 20 minut na poprzednią klientkę",
          "Klientka twierdzi że recepcja obiecała jej inną fryzjerkę przez telefon",
          "Klientka żąda zwrotu za niesatysfakcjonującą usługę",
          "Klientka chce zapłacić voucherem po terminie ważności",
          "Klientka pyta o promocje których już nie ma",
          "Klientka jest zła że nie dostała SMS potwierdzenia wizyty",
          "Klientka żąda kompleksowej obsługi — strzyżenie farbowanie stylizacja — a ma czas tylko na godzinę",
          "Klientka pyta dlaczego ten sam salon jest tańszy w centrum niż na osiedlu",
          "Klientka grozi złą opinią w Google za czas oczekiwania",
          "Klientka żąda rabatu dla stałej klientki której nie ma w systemie",
          "Klientka jest zdezorientowana cennikiem — pyta o każdą pozycję",
          "Klientka chce umówić całą grupę koleżanek na jeden dzień — logistyczny koszmar",
          "Klientka żąda żeby recepcja przypilnowała że fryzjerka wykona dokładnie to co chce",
          "Klientka twierdzi że salon jest droższy niż rok temu i żąda wyjaśnienia"
        ]
      },
      "Umawianie wizyt (telefon)": {
        emoji: "📞",
        scenariusze: [
          "Klientka dzwoni żądając terminu na jutro i jest zła że nie ma wolnych miejsc",
          "Klientka pyta o cenę koloryzacji i jest oburzona że nie można podać dokładnej kwoty przez telefon",
          "Klientka odwołuje wizytę na godzinę przed i kłóci się o opłatę za odwołanie",
          "Klientka twierdzi że przez telefon obiecano jej inną fryzjerkę niż jest zapisana",
          "Klientka pyta przez telefon czy fryzjerka potrafi zrobić konkretny trudny styl",
          "Klientka dzwoni że jest w drodze i spóźni się 30 minut — pyta czy i tak ją przyjmą",
          "Klientka twierdzi że nie dostała SMS przypomnienia i teraz straciła termin",
          "Klientka chce umówić się na kompletną metamorfozę i jest zła że to zajmie kilka godzin",
          "Klientka pyta o godziny otwarcia i jest zła że salon jest nieczynny w niedzielę",
          "Klientka żąda konkretnej godziny a jedyne wolne miejsca jej nie pasują",
          "Klientka dzwoni z pretensjami że fryzura z ostatniej wizyty nie trzyma się już po tygodniu",
          "Klientka pyta czy może przyjść z córką i zamówić dwie usługi jednocześnie",
          "Klientka twierdzi że na stronie są inne ceny niż podane przez telefon",
          "Klientka żąda żeby recepcja opisała przez telefon jak wygląda dana technika koloryzacji",
          "Klientka jest zła że jej ulubiona stylistka już nie pracuje w salonie",
          "Klientka dzwoni żeby upewnić się że fryzjerka zna technikę którą przyniosła na zdjęciu",
          "Klientka pyta o możliwość płatności ratalnej za drogi zabieg keratynowy",
          "Klientka grozi złą opinią jeśli salon nie przyjmie jej bez terminu dziś",
          "Klientka twierdzi że znajoma dostała rabat a jej nikt nie zaproponował",
          "Klientka chce zamówić wizytę domową fryzjerki i jest zła że salon nie świadczy takich usług"
        ]
      }
    }
  },

  "Fotowoltaika / magazyny energii": {
    emoji: "☀️",
    stanowiska: {
      "Handlowiec/Doradca": {
        emoji: "☀️",
        scenariusze: [
          "Klient chce kupić i pyta o różnicę między panelami mono a bifacial",
          "Klient chce kupić i pyta który magazyn energii jest najlepszy dla jego domu",
          "Klient chce kupić i pyta o realny czas zwrotu z inwestycji dla jego zużycia",
          "Klient chce kupić i pyta o dostępne dofinansowania i dotacje w jego gminie",
          "Klient chce kupić i pyta o możliwość montażu na dachu płaskim",
          "Klient pyta o cenę i porównuje z trzema innymi ofertami na bieżąco",
          "Klient twierdzi że sąsiad dostał lepszą instalację taniej od innej firmy",
          "Klient żąda gwarancji konkretnej oszczędności na prądzie w złotówkach",
          "Klient jest po złym doświadczeniu z poprzednią firmą — instalacja niedziałająca",
          "Klient żąda pisemnej gwarancji terminu montażu z karami umownymi",
          "Klient twierdzi że rachunki za prąd nie spadły po montażu i żąda wyjaśnień",
          "Klient chce zacząć montaż bez podpisania umowy — na słowo",
          "Klient pyta dlaczego musi płacić zaliczkę zanim cokolwiek zobaczy",
          "Klient porównuje ofertę z panelami kupionymi na własną rękę z Chin",
          "Klient zmienia zakres instalacji po każdym spotkaniu i pyta dlaczego drożej",
          "Klient żąda montażu w 2 tygodnie bo kończy się dofinansowanie",
          "Klient jest sceptyczny — twierdzi że fotowoltaika to oszustwo i nic nie zaoszczędzi",
          "Klient pyta o możliwość rozszerzenia instalacji za rok i żąda gwarancji ceny",
          "Klient chce rabatu bo płaci gotówką całość z góry",
          "Klient po wycenie znika na miesiąc i wraca żądając tej samej ceny"
        ]
      },
      "Montażysta/Kierownik ekipy": {
        emoji: "🔩",
        scenariusze: [
          "Klient wpada na dach podczas montażu i komentuje każdy ruch ekipy",
          "Klient twierdzi że panele są zamontowane niezgodnie z projektem",
          "Klient żąda natychmiastowego wstrzymania prac bo zmienił zdanie o lokalizacji",
          "Klient twierdzi że ekipa uszkodziła dachówki podczas montażu",
          "Klient pyta dlaczego montaż trwa dłużej niż obiecano",
          "Klient twierdzi że użyto innych paneli niż w umowie",
          "Klient żąda dodatkowych paneli skoro ekipa już jest na dachu",
          "Klient fotografuje każdy etap i wysyła zdjęcia z pretensjami na WhatsApp",
          "Klient twierdzi że ekipa zaśmieciła ogród i taras",
          "Klient kwestionuje ułożenie paneli — chce inaczej mimo że projekt jest zatwierdzony",
          "Klient sprowadza sąsiada który jest elektrykiem i kwestionuje okablowanie",
          "Klient odmawia podpisania protokołu odbioru mimo że instalacja działa",
          "Klient pyta dlaczego montażyści robią przerwę — chce żeby pracowali bez przerwy",
          "Klient twierdzi że falownik jest zamontowany w złym miejscu",
          "Klient żąda żeby montażysta wyjaśnił mu cały system przez 2 godziny",
          "Klient odkrył że sąsiad ma więcej paneli za tę samą cenę",
          "Klient twierdzi że kable zewnętrzne szpecą elewację — chciał inaczej",
          "Klient żąda natychmiastowego uruchomienia instalacji zanim jest podpisana umowa z siecią",
          "Klient twierdzi że słyszał że tak zamontowane panele się przegrzewają",
          "Klient żąda pisemnego oświadczenia że dach nie przecieka po montażu"
        ]
      },
      "Serwisant": {
        emoji: "🔧",
        scenariusze: [
          "Klient twierdzi że instalacja przestała działać dzień po zakończeniu gwarancji",
          "Klient pyta dlaczego produkcja prądu jest niższa niż obiecywał handlowiec",
          "Klient twierdzi że falownik wydaje dziwny dźwięk i żąda natychmiastowej wizyty",
          "Klient jest zły że aplikacja do monitoringu nie działa od tygodnia",
          "Klient twierdzi że po burzy jeden panel nie produkuje i żąda darmowej wymiany",
          "Klient pyta dlaczego serwis pogwarancyjny jest tak drogi",
          "Klient twierdzi że magazyn energii nie ładuje się w nocy jak obiecywano",
          "Klient żąda serwisu w weekend bo w tygodniu pracuje",
          "Klient twierdzi że instalacja działa gorzej zimą niż handlowiec zapowiadał",
          "Klient odkrył że sąsiad ma ten sam problem i twierdzi że to wada seryjna",
          "Klient żąda bezpłatnego przeglądu powołując się na ustną obietnicę handlowca",
          "Klient twierdzi że rachunek za prąd wzrósł mimo działającej instalacji",
          "Klient jest zły że serwisant przyjechał bez zapowiedzi lub się spóźnił",
          "Klient żąda żeby serwisant przy okazji sprawdził rzeczy niezwiązane z instalacją",
          "Klient twierdzi że podczas serwisu uszkodzono panel lub dachówkę",
          "Klient pyta dlaczego diagnostyka zdalna nie wykryła usterki wcześniej",
          "Klient żąda kopii raportu serwisowego w szczegółowym formacie",
          "Klient twierdzi że serwisant był nieuprzejmy lub niedbały",
          "Klient żąda rozszerzenia gwarancji po jej wygaśnięciu bez dopłaty",
          "Klient twierdzi że firma instalacyjna zbankrutowała i nie ma komu reklamować — szuka pomocy u serwisanta"
        ]
      },
      "Infolinia / Obsługa telefoniczna": {
        emoji: "📞",
        scenariusze: [
          "Klient dzwoni że instalacja przestała działać i żąda natychmiastowego przyjazdu ekipy",
          "Klient pyta o wycenę instalacji i oczekuje dokładnej kwoty przez telefon bez wizyty",
          "Klient dzwoni z pytaniem o dofinansowania i jest zdezorientowany procedurą wniosku",
          "Klient twierdzi że rachunki za prąd nie spadły po montażu i żąda wyjaśnień",
          "Klient pyta o termin montażu i jest zły że musi czekać 6 tygodni",
          "Klient twierdzi że przez telefon obiecano mu inny czas zwrotu z inwestycji niż w umowie",
          "Klient dzwoni po burzy że panel jest uszkodzony i pyta czy to wchodzi w gwarancję",
          "Klient pyta o stan realizacji zamówienia i jest zły że nikt go nie informuje na bieżąco",
          "Klient twierdzi że aplikacja do monitoringu instalacji nie działa i żąda pomocy",
          "Klient dzwoni że sąsiad dostał wyższe dofinansowanie i pyta dlaczego on nie",
          "Klient pyta o możliwość rozszerzenia instalacji i jest zły na wycenę rozbudowy",
          "Klient twierdzi że falownik wydaje dziwny dźwięk i żąda wizyty serwisowej dzisiaj",
          "Klient pyta o możliwość przesunięcia terminu montażu bo właśnie remontuje dach",
          "Klient jest oburzony że firma zmieniła model paneli na równoważny bez jego zgody",
          "Klient dzwoni żeby zrezygnować z umowy i pyta o warunki i koszty odstąpienia",
          "Klient pyta dlaczego mikroinwertery są droższe niż zwykły falownik centralny",
          "Klient twierdzi że nikt nie oddzwonił po złożeniu zapytania przez formularz online",
          "Klient dzwoni po odbiorze instalacji i pyta jak prawidłowo odczytać licznik dwukierunkowy",
          "Klient jest zły że ekipa montażowa nie posprzątała po sobie po zakończeniu prac",
          "Klient pyta o możliwość połączenia instalacji PV z pompą ciepła i jest zły na wycenę"
        ]
      }
    }
  }

};
