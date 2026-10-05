import json

# Import SVGs from generate_svgs.py
import generate_svgs

svg_cpr = generate_svgs.svg_cpr
svg_choking = generate_svgs.svg_choking
svg_safe_sleep = generate_svgs.svg_safe_sleep
svg_food_safety = generate_svgs.svg_food_safety
svg_petechiae = generate_svgs.svg_petechiae
svg_febrile = generate_svgs.svg_febrile
svg_sbs = generate_svgs.svg_sbs
svg_fall_trauma = generate_svgs.svg_fall_trauma
svg_poisoning = generate_svgs.svg_poisoning
svg_burns = generate_svgs.svg_burns
svg_drowning = generate_svgs.svg_drowning

# Define comprehensive 12 months data
monthly_guides_data = [
    {
        "month": 1,
        "title": "Monat 1: Das 4. Trimester & Die Ankunft",
        "motto": "Vom Mutterleib in die weite Welt: Geborgenheit, Reflexe & Ankommen",
        "badge": "Woche 1 bis 4",
        "summary": "Schlafbedarf 16–18h, Wachfenster nur 45–60 Min, Kolostrum & Milcheinschuss, angeborene Reflexe.",
        "milestones": ["Angeborene Reflexe", "Kopf kurz halten", "Scharfstellen 20-25cm", "U1 & U2 Check"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: DAS VIERTE TRIMESTER</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Ein Neugeborenes ist physiologisch eine 'Frühgeburt'. Es braucht in den ersten 12 Wochen vor allem eines: Die Illusion, noch immer im schützenden Mutterleib zu sein – durch enge Berührung, Hautkontakt und vertraute Stimmen.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Körperliche & Motorische Entwicklung:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Physiologische Beugehaltung:</strong> Arme und Beine sind eng an den Körper angezogen.</li>
                  <li><strong>Angeborene Reflexe:</strong> Saugreflex, Suchreflex (dreht Kopf zur Wange), Mororeflex (Schreckreflex), Palmarer Greifreflex (schließt Hand um Finger).</li>
                  <li><strong>Kopfkontrolle:</strong> In Bauchlage kann der Kopf für 1–2 Sekunden leicht angehoben und zur Seite gedreht werden, um die Atemwege frei zu halten.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">👀 Sinne & Kognition:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Sehschärfe 20–25 cm:</strong> Genau die Distanz zur Brust oder zum Gesicht der Eltern. Alles dahinter ist verschwommen.</li>
                  <li><strong>Kontraste & Gesichter:</strong> Schwarz-Weiß-Muster und menschliche Gesichter faszinieren das Baby am meisten.</li>
                  <li><strong>Gehör voll ausgebildet:</strong> Erkennt die Stimme von Mutter und Vater bereits aus dem Mutterleib wieder.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & Wachfenster:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Schlafbedarf:</strong> 16 bis 18 Stunden pro 24 Stunden, verteilt auf 5–6 Schläfchen.</li>
                  <li><strong>Wachfenster:</strong> Extrem kurz: <strong>45 bis 60 Minuten</strong>! Nach Wickeln und Trinken ist das Baby oft schon wieder übermüdet.</li>
                  <li><strong>Kein Tag-Nacht-Rhythmus:</strong> Melatonin wird noch nicht gebildet. Tagsüber hell & Alltagslärm, nachts dunkel & leise.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🍼 Ernährung & Gewicht:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Kolostrum & Milcheinschuss:</strong> Die gelbliche Vormilch (Kolostrum) ist reich an Antikörpern. Tag 3–4 Milcheinschuss.</li>
                  <li><strong>Gewichtsverlust:</strong> Bis zu 7–10% Gewichtsverlust nach Geburt sind physiologisch normal.</li>
                  <li><strong>Ziel:</strong> Bis Tag 10 bis spätestens Tag 14 muss das Geburtsgewicht wieder erreicht sein.</li>
                  <li><strong>Nasse Windeln:</strong> Ab Tag 5 mindestens 5–6 schwere, nasse Pipi-Windeln pro 24 Stunden.</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong class="text-sm font-bold block mb-1">⚠️ Typische Hürden in Monat 1:</strong>
              <strong>Clusterfeeding:</strong> Vor allem in den Abendstunden will das Baby oft stundenlang ununterbrochen an die Brust. Das ist KEIN Zeichen für zu wenig Milch, sondern kurbelt die Prolaktinproduktion an und spendet Sicherheit!<br>
              <strong>Baby Blues:</strong> An Tag 3–5 weinen bis zu 80% aller Mütter wegen des Hormonsturzes. Liebevoll auffangen!
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
              <strong class="text-slate-900 font-bold block mb-1">🩺 Arzttermine & Vorsorge:</strong>
              U1 (direkt nach Geburt), U2 (3. bis 10. Lebenstag), erweitertes Stoffwechselscreening aus der Ferse, Neugeborenen-Hörscreening, 3 Gaben Vitamin K und tägl. Vitamin D (400–500 I.E.).
            </div>
          </div>
        """
    },
    {
        "month": 2,
        "title": "Monat 2: Das erste Lächeln & Kopfkontrolle",
        "motto": "Die Welt antwortet: Das soziale Lächeln erwacht und der Blick wird wach",
        "badge": "Woche 5 bis 8",
        "summary": "Wachfenster 60–90 Min, soziales Lächeln (um Woche 6), Kopf heben um 45 Grad, Gurrlaute ('ah', 'oh').",
        "milestones": ["Soziales Lächeln", "Kopfheben 45°", "Gurrlaute", "U3 Check"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: DIE ERSTE ECHTE INTERAKTION</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Rund um die 6. Lebenswoche geschieht einer der berührendsten Momente der Elternschaft: Das Baby lächelt dich zum ersten Mal bewusst an, wenn du freundlich mit ihm sprichst. Das soziale Lächeln ist der Startschuss für echte Kommunikation.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Körperliche & Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Kopfkontrolle nimmt zu:</strong> In Bauchlage stützt sich das Baby kurz auf die Unterarme und hebt den Kopf um 45 Grad an.</li>
                  <li><strong>Fäustchen öffnen sich:</strong> Die Hände sind nicht mehr permanent verkrampft geschlossen, sondern öffnen sich im entspannten Zustand.</li>
                  <li><strong>Flüssigere Bewegungen:</strong> Die ruckartigen Strampelbewegungen der ersten Wochen weichen harmonischeren Beinbewegungen.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🗣️ Sprache & Kognition:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Gurrlaute (Cooing):</strong> Erste Vokallaute wie 'ah', 'eh', 'ooh' ertönen, wenn das Baby zufrieden auf der Wickelkommode liegt.</li>
                  <li><strong>Blickkontakt halten:</strong> Das Baby fixiert die Augen der Eltern für mehrere Sekunden und folgt sich langsam bewegenden Objekten.</li>
                  <li><strong>Mimik-Imitation:</strong> Wenn du die Zunge herausstreckst, versucht das Baby manchmal verblüfft, es nachzumachen.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & Wachfenster:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Schlafbedarf:</strong> 15 bis 16 Stunden pro Tag, 4–5 Tagschläfchen.</li>
                  <li><strong>Wachfenster:</strong> <strong>60 bis 90 Minuten</strong>. Achte auf frühe Signale: Gähnen, glasige Augen, Abwenden des Blicks.</li>
                  <li><strong>Erste Tag-Nacht-Unterscheidung:</strong> Die Zirbeldrüse beginnt minimale Spuren Melatonin zu produzieren.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🍼 Ernährung:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Stillen oder Pre nach Bedarf (ca. 6 bis 8 Mahlzeiten in 24h).</li>
                  <li>Der Magen fasst nun bereits ca. 90–120 ml pro Mahlzeit.</li>
                  <li>Wachstumsschub um die 6. bis 8. Woche ('2. Sprung' nach Oje, ich wachse): Erhöhte Anhänglichkeit und Trinkfrequenz.</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong class="text-sm font-bold block mb-1">⚠️ Der Höhepunkt des Schreiens (PURPLE Crying):</strong>
              Zwischen Woche 6 und 8 erreicht das physiologische Schreien statistisch seinen Höhepunkt! Viele Babys schreien in den Abendstunden untröstlich. <em>Erinnere dich:</em> Niemals schütteln! Fliegergriff, Tragetuch und ruhiges Wiegen mit weißem Rauschen lindern die Reizüberflutung.
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
              <strong class="text-slate-900 font-bold block mb-1">🩺 Arzttermine & Vorsorge:</strong>
              <strong>U3 (4.–5. Lebenswoche):</strong> Gründliche Überprüfung der Reflexe, Hüftultraschall (Früherkennung von Hüftdysplasie). Erste Rotaviren-Schluckimpfung nach STIKO-Empfehlung ab Woche 6.
            </div>
          </div>
        """
    },
    {
        "month": 3,
        "title": "Monat 3: Hände entdecken & stabiler Unterarmstütz",
        "motto": "Die Hände gehören zu mir: Erste Dialoge und sichere Kopfbalance",
        "badge": "Woche 9 bis 12",
        "summary": "Wachfenster 75–90 Min, Hände finden zur Körpermitte, 90° Unterarmstütz in Bauchlage, Dialog-Brabbeln.",
        "milestones": ["Hände betrachten", "90° Kopfstütz", "Brabbel-Dialoge", "Start 6-fach-Impfung"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: DIE FASZINATION DER EIGENEN HÄNDE</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Dein Baby entdeckt das erstaunlichste Spielzeug der Welt: Seine eigenen Finger! Das 'Hand-Regarding' (minutenlanges, erstauntes Betrachten der Hände) schult die Koordination zwischen Auge und Hand.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorischer Durchbruch:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Sicherer Unterarmstütz:</strong> In Bauchlage stützt sich das Baby auf beide Unterarme und hält den Kopf stabil um 90 Grad aufrecht.</li>
                  <li><strong>Hände zur Körpermitte:</strong> Das Baby führt beide Hände vor der Brust zusammen und steckt sie mit Wonne in den Mund.</li>
                  <li><strong>Greifreflex weicht bewusstem Berühren:</strong> Das Baby schlägt gezielt gegen über ihm hängendes Spielzeug (Trapez).</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🗣️ Die ersten 'Gespräche' (Protodialoge):</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Das Baby wartet ab, wenn du sprichst, und antwortet mit Gurren und Jauchzen, sobald du eine Pause machst.</li>
                  <li>Laute werden melodischer: Lautstärken- und Tonhöhenwechsel werden ausprobiert.</li>
                  <li>Reagiert mit Ganzkörper-Freude (rudert mit Armen und Beinen), wenn Bezugspersonen den Raum betreten.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & Zyklen:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Schlafbedarf:</strong> 14 bis 16 Stunden pro Tag, 4 Tagschläfchen.</li>
                  <li><strong>Wachfenster:</strong> <strong>75 bis 90 Minuten</strong> (ca. 1,25–1,5 Stunden).</li>
                  <li>Erste längere Nachtschlaf-Etappe: Manche Babys schaffen bereits 4 bis 5 Stunden Schlaf am Stück.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🍼 Fütterung:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Das Stillen/Fläschchengeben wird routinierter und schneller (oft nur noch 10–15 Min. pro Seite).</li>
                  <li>Das Baby lässt sich beim Trinken leichter durch Geräusche ablenken – füttere an einem ruhigen, abgedunkelten Ort.</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
              <strong class="text-slate-900 font-bold block mb-1">🩺 Vorsorge & Impfungen (STIKO):</strong>
              Mit vollendeten 2 Monaten startet nach STIKO die <strong>1. Dosis der 6-fach-Impfung</strong> (Diphtherie, Tetanus, Keuchhusten, Polio, Hib, Hepatitis B) sowie die Pneumokokken-Impfung und die 2. Rotaviren-Dosis.
            </div>
          </div>
        """
    },
    {
        "month": 4,
        "title": "Monat 4: Die 4-Monats-Schlafregression & gezieltes Greifen",
        "motto": "Das Gehirn baut sich um: Schlafarchitektur reift, Hände greifen zielgenau",
        "badge": "Woche 13 bis 16",
        "summary": "Wachfenster 75–120 Min, Schlafregression durch 4-Phasen-Schlaf, gezieltes Greifen mit beiden Händen, lautes Lachen.",
        "milestones": ["4-Monats-Regression", "Gezieltes Greifen", "Lautes Lachen", "U4 Check"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-xl">
              <h4 class="text-amber-900 font-extrabold text-base m-0">DIE BERÜCHTIGTE 4-MONATS-SCHLAFREGRESSION</h4>
              <p class="text-amber-800 text-sm mt-1 m-0">Warum wacht mein Baby plötzlich alle 45–60 Minuten auf, obwohl es vorher so gut schlief? Keine Sorge: Es ist kein Rückschritt, sondern ein gewaltiger Gehirnumbau! Die Schlafstruktur reift dauerhaft von Neugeborenen-Schlaf in adulte 4-Phasen-Zyklen um.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Gezieltes Greifen:</strong> Das Baby greift nach hingehaltenem Spielzeug, hält es fest und schüttelt es.</li>
                  <li><strong>Drehen auf die Seite:</strong> Das Baby beginnt, sich aus der Rückenlage schwungvoll auf die Seite zu rollen.</li>
                  <li><strong>Vollständige Kopfkontrolle:</strong> Beim Hochziehen an den Händen aus der Rückenlage fällt der Kopf nicht mehr nach hinten.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🧠 Kognition & Soziales:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Lautes Kichern & Lachen:</strong> Das Baby gluckst und lacht laut heraus, wenn man es kitzelt oder lustige Geräusche macht.</li>
                  <li><strong>Prusten mit Spucke:</strong> Es prustet mit den Lippen und bildet Schaumbläschen.</li>
                  <li><strong>Erste Konsonanten:</strong> Laute wie 'm', 'b', 'p' mischen sich in das Brabbeln.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf-Management in Monat 4:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>1,25 bis 2 Stunden</strong> (75–120 Min).</li>
                  <li><strong>Tagschlaf:</strong> 3 bis 4 Schläfchen pro Tag. Oft sind diese Schläfchen nun exakt 30–45 Minuten kurz (ein Zyklus).</li>
                  <li><strong>Einschlafbegleitung:</strong> Feste Routine einführen (z.B. Wickeln, Schlafsack, Stillen/Flasche, Schlaflied, Dunkelheit).</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🦷 Zähne schießen in den Kiefer:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Exzessiver Speichelfluss! Das Baby kaut wie wild auf den Fäustchen.</li>
                  <li>Das bedeutet meist noch nicht den Durchbruch, sondern das Einschießen der Zahnkeime in den Kieferknochen.</li>
                  <li>Kühlbeißringe anbieten!</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
              <strong class="text-slate-900 font-bold block mb-1">🩺 Vorsorge U4 (3.–4. Monat):</strong>
              Überprüfung von Beweglichkeit, Hör- und Sehvermögen, Schielen-Ausschluss, Wachstumskurven (Perzentilen) sowie 2. Impfdosis (6-fach + Pneumokokken).
            </div>
          </div>
        """
    },
    {
        "month": 5,
        "title": "Monat 5: Rollen, Drehen & Lautmalerei",
        "motto": "In Bewegung kommen: Vom Rücken auf den Bauch und die Welt aus neuer Sicht",
        "badge": "Woche 17 bis 20",
        "summary": "Wachfenster 1,5–2,5h, Drehen von Rücken auf Bauch, Beikost-Reifezeichen beobachten, Ursache & Wirkung verstehen.",
        "milestones": ["Vom Rücken auf Bauch drehen", "Ursache-Wirkung", "Pucken stoppen!", "Brabbelkonzert"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: DIE WELT DREHT SICH</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Das Baby meistert die erste große selbstständige Fortbewegung: Die Drehung! Sobald sich dein Baby selbstständig drehen kann, gilt eine lebenswichtige Regel: <strong>AB SOFORT DARF NICHT MEHR GEPÜCKT WERDEN!</strong></p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Drehen:</strong> Dreht sich schwungvoll vom Rücken auf den Bauch. Manche Babys drehen sich auch schon zurück.</li>
                  <li><strong>'Flugzeug'-Stellung:</strong> In Bauchlage hebt das Baby Arme und Beine gleichzeitig an und balanciert auf dem Bauch ('Schwimmbewegungen').</li>
                  <li><strong>Hand-zu-Hand:</strong> Gegenstände werden mit beiden Händen gefasst und zielgenau zum Mund geführt.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🧠 Geistige Sprünge (4. Sprung nach Oje, ich wachse):</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Ursache und Wirkung:</strong> Wenn ich den Löffel fallen lasse, scheppert es! Das Baby wiederholt Handlungen mit Begeisterung.</li>
                  <li><strong>Farbsehen komplett:</strong> Volles Farbspektrum wird nun wie beim Erwachsenen wahrgenommen.</li>
                  <li><strong>Eigene Stimme testen:</strong> Das Baby quietscht in den höchsten Tönen und lauscht seinem eigenen Echo.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & Rhythmus:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Schlafbedarf:</strong> 13 bis 15 Stunden pro Tag.</li>
                  <li><strong>Wachfenster:</strong> <strong>1,5 bis 2,5 Stunden</strong>.</li>
                  <li>Übergang von 4 auf 3 Tagschläfchen (Vormittag, Mittag, Spätnachmittag).</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Beikoststart: Wann ist es soweit?</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Die Leitlinie besagt: <em>Frühestens ab vollendetem 4. Monat (Woche 17)</em> und spätestens mit Beginn des 7. Monats.</li>
                  <li>Starte NUR, wenn ALLE 3 Reifezeichen vorliegen (stabiler Sitz mit Stütze, Zungenstoßreflex weg, zielgerichtetes Greifen zum Mund). Im Zweifel lieber noch bis Monat 6 warten!</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "month": 6,
        "title": "Monat 6: Beikoststart & Halbzeit zum 1. Geburtstag",
        "motto": "Der große Essensstart: Reifezeichen, Brei & BLW, erster Zahn",
        "badge": "Woche 21 bis 24",
        "summary": "Wachfenster 2–2,5h, Beikost-Reifezeichen erfüllt, Gewicht meist verdoppelt, Durchbruch der ersten unteren Schneidezähne.",
        "milestones": ["Beikoststart", "Gewicht verdoppelt", "Erster Zahn", "U5 Check"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl">
              <h4 class="text-emerald-900 font-extrabold text-base m-0">HALBZEIT: 6 MONATE VOLLE LIEBE</h4>
              <p class="text-emerald-800 text-sm mt-1 m-0">Das erste halbe Jahr ist vollbracht! Dein Baby hat sein Geburtsgewicht im Schnitt verdoppelt. Die WHO empfiehlt bis zum vollendeten 6. Monat ausschließliches Stillen oder Pre-Fütterung – jetzt beginnt für fast alle Babys das Abenteuer Beikost.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Beikost: Breifahrplan vs. BLW:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Klassischer Brei:</strong> Start mit reinem Gemüsebrei (z.B. Kürbis, Pastinake, Karotte) mittags, nach einigen Tagen Kartoffel dazu, dann Fleisch/Fisch (Eisen!).</li>
                  <li><strong>Baby-Led Weaning (BLW):</strong> Weich gedämpfte Gemüsesticks in Pommesgröße, die das Baby selbst greift und erkundet.</li>
                  <li><strong>Beikost ist BEI-Kost:</strong> Hauptnahrungsquelle bleibt im gesamten 1. Lebensjahr Muttermilch oder Pre! Kein Druck beim Essenlernen.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Drehen in beide Richtungen:</strong> Rollen von Rücken auf Bauch und zurück klappt flüssig.</li>
                  <li><strong>Sitzen auf dem Schoß:</strong> Kann mit leichter Stütze aufrecht im Hochstuhl oder auf dem Schoß sitzen.</li>
                  <li><strong>Aufgestützter Handstütz:</strong> In Bauchlage stützt sich das Baby mit durchgestreckten Armen auf die offenen Handflächen ('Kobra').</li>
                </ul>
              </div>
            </div>

            <div class="my-4">
              {svg_food_safety}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🦷 Die ersten Zähnchen:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Meist brechen die beiden unteren mittleren Schneidezähne durch.</li>
                  <li>Ab dem ersten Zahn: Einmal täglich mit einer erbsengroßen Menge fluoridhaltiger Kinderzahnpasta (1000 ppm) oder fluoridfreier Paste + Fluoridtablette sanft putzen.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & Wachfenster:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>2 bis 2,5 Stunden</strong>.</li>
                  <li>Schlafbedarf: ca. 13 bis 14 Stunden pro 24h.</li>
                  <li>3 feste Schläfchen (Morgens, Mittags, Spätnachmittag).</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
              <strong class="text-slate-900 font-bold block mb-1">🩺 Vorsorge U5 (6.–7. Monat):</strong>
              Entwicklungsdiagnostik: Körperbeherrschung, Beweglichkeit, Seh- und Hörfunktion, Zahngesundheit. STIKO-Auffrischungsimpfung (3. Dosis 6-fach + Pneumokokken).
            </div>
          </div>
        """
    },
    {
        "month": 7,
        "title": "Monat 7: Hände lernen loszulassen & Brabbelkonzerte",
        "motto": "Hände übergeben, Silben verdoppeln: 'Ba-ba', 'Da-da' und Robben auf dem Teppich",
        "badge": "Woche 25 bis 28",
        "summary": "Wachfenster 2,25–2,75h, Silbendopplungen (ma-ma, ba-ba), Übergabe von Hand zu Hand, Robben beginnt.",
        "milestones": ["Silbendopplungen", "Hand-zu-Hand Übergabe", "Erstes Robben", "2. Abendbrei"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: DIE SPRACHE NIMMT FAHRT AUF</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Die Kehlkopfmuskulatur ist nun so koordiniert, dass echte Silbenketten entstehen: 'Ba-ba-ba', 'Da-da', 'Ga-ga'. Das Baby probiert Intonationen aus und ahmt die Sprachmelodie seiner Eltern nach.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Hand-zu-Hand-Transfer:</strong> Das Baby nimmt einen Gegenstand in die rechte Hand und übergibt ihn gezielt in die linke Hand.</li>
                  <li><strong>Gegenstände aneinanderschlagen:</strong> Zwei Bauklötze werden aufeinander geschlagen, um Lärm zu machen.</li>
                  <li><strong>Erstes Robben:</strong> Durch Abstoßen mit den Zehen oder Ziehen mit den Unterarmen schiebt sich das Baby vorwärts oder rückwärts über den Boden.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Beikost-Erweiterung:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Einführung des <strong>2. Breis: Milch-Getreide-Brei</strong> (Abendbrei aus Vollmilch oder Pre + Hafer-/Hirseflocken).</li>
                  <li>Wasser anbieten: Bei 2 festen Beikostmahlzeiten kann zu den Mahlzeiten etwas Wasser aus einem offenen Becher angeboten werden.</li>
                  <li>Allergene frühzeitig einführen: Erdnussmus, Ei und Weizen regelmäßig in kleinen Mengen geben (senkt Allergierisiko!).</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>2,25 bis 2,75 Stunden</strong>.</li>
                  <li>Oft pendelt sich der Rhythmus jetzt auf 2 bis 3 Schläfchen ein. Das späte Nachmittagsschläfchen wird kürzer.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💡 Spiel- & Fördertipp:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Fühlbücher mit verschiedenen Texturen (Rau, Weich, Glatt).</li>
                  <li>Becherstapeln und das Baby den Turm umwerfen lassen.</li>
                  <li>Singen von Kniereitern ('Hoppe hoppe Reiter').</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "month": 8,
        "title": "Monat 8: Die Vertikale lockt & Trennungsangst erwacht",
        "motto": "Auf allen Vieren: Vierfüßlerstand, Wippen und das Begreifen der Trennung",
        "badge": "Woche 29 bis 32",
        "summary": "Wachfenster 2,5–3h, Vierfüßlerstand, Krabbelversuche, erste Trennungsangst, Zeit für Kindersicherung!",
        "milestones": ["Vierfüßlerstand", "Trennungsangst", "Kindersicherung Pflicht", "Wippen auf Knien"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-rose-50 border-l-4 border-rose-600 rounded-r-xl">
              <h4 class="text-rose-900 font-extrabold text-base m-0">DIE ERSTE TRENNUNGSANGST: EIN GEISTIGER RIESENSPRUNG</h4>
              <p class="text-rose-800 text-sm mt-1 m-0">Verlässt Mama oder Papa kurz den Raum, bricht das Baby in bitterliche Tränen aus. Das ist kein 'Klammern', sondern ein kognitiver Meilenstein: Das Baby begreift zum ersten Mal, dass es eine von den Eltern getrennte Person ist und diese weggehen können!</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Vierfüßlerstand:</strong> Das Baby geht auf Hände und Knie und wippt rhythmisch vor und zurück (der Startmotor fürs Krabbeln).</li>
                  <li><strong>Drehscheibe:</strong> Im Liegen dreht sich das Baby um 360 Grad im Kreis auf dem Bauch.</li>
                  <li><strong>Scherengriff:</strong> Greift Gegenstände zwischen Daumen und die Seite des Zeigefingers.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🚨 Kindersicherung jetzt Pflicht!</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Steckdosensicherungen in der gesamten Wohnung anbringen.</li>
                  <li>Treppenschutzgitter oben und unten montieren.</li>
                  <li>Putzmittel, Medikamente und Kosmetika in verschließbare Oberschränke räumen.</li>
                  <li>Kabel sichern, Tischdecken entfernen (Baby zieht daran!).</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & 8-Monats-Regression:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>2,5 bis 3 Stunden</strong>.</li>
                  <li>Wegen Trennungsangst und motorischem Üben im Schlaf wachen viele Babys nachts wieder häufiger auf. Viel Körperkontakt und sanfte Begleitung helfen durch diese Phase.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Ernährung:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Einführung des <strong>3. Breis: Getreide-Obst-Brei (GOB)</strong> am Nachmittag.</li>
                  <li>Die Breie dürfen stückiger werden; weiche Brotrinde oder gedünstete Karotte zum Kauen anbieten.</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "month": 9,
        "title": "Monat 9: Der Pinzettengriff & Objektpermanenz",
        "motto": "Kuckuck, da bin ich! Feinmotorische Präzision und das Versteckspiel",
        "badge": "Woche 33 bis 36",
        "summary": "Wachfenster 2,5–3,5h, Pinzettengriff perfektioniert, Objektpermanenz voll aktiv, Krabbeln & selbstständiges Aufsetzen.",
        "milestones": ["Pinzettengriff", "Objektpermanenz", "Selbstständig Aufsetzen", "2 Tagschläfchen"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DER PINZETTENGRIFF & DIE OBJEKTPERMANENZ</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Zwei gigantische Meilensteine treffen in Monat 9 aufeinander: Der feinmotorische Pinzettengriff (Greifen kleinster Krümel mit Daumen und Zeigefingerspitze) und das Verständnis, dass Dinge weiter existieren, auch wenn sie verdeckt sind.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Der Pinzettengriff:</strong> Hebt kleinste Fussel oder Erbsen punktgenau mit Daumen und Zeigefinger auf. <em>Achtung Kleinteile-Verschluckungsgefahr!</em></li>
                  <li><strong>Selbstständiges Aufsetzen:</strong> Das Baby setzt sich aus dem Vierfüßlerstand oder über den Seitsitz selbstständig stabil hin.</li>
                  <li><strong>Freies Krabbeln:</strong> Viele Babys krabbeln nun zügig im Kreuzgang durch die Wohnung.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🧠 Kognition & Sprachverständnis:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Kuckuck-Spiele:</strong> Zieht ein Tuch vom eigenen Kopf oder sucht versteckte Spielzeuge unter Kissen.</li>
                  <li><strong>Wortverständnis:</strong> Reagiert auf seinen Namen, blickt sich um bei 'Wo ist Papa?' oder 'Wo ist der Ball?'.</li>
                  <li><strong>'Nein' verstehen:</strong> Versteht ein deutliches 'Nein' mit Mimik (hält kurz inne, testet aber Grenzen aus!).</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Fester 2-Schläfchen-Rhythmus:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>2,5 bis 3,5 Stunden</strong>.</li>
                  <li>Fast alle Babys schlafen nun stabil in 2 Tagschläfchen (Vormittag ca. 1h, Mittag ca. 1,5–2h). Das Abend-Schläfchen entfällt komplett.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Essen:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Mit dem Pinzettengriff macht Fingerfood riesigen Spaß (weiche Nudeln, weiche Bananenstücke, gekochte Gemüsestücke).</li>
                  <li>Selbstständiges Trinken aus dem Schnabelbecher oder Becher mit zwei Henkeln.</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "month": 10,
        "title": "Monat 10: Hochziehen in den Stand & Imitation",
        "motto": "Die Welt von oben: Das Hochziehen an Möbeln und Nachahmen von Gesten",
        "badge": "Woche 37 bis 40",
        "summary": "Wachfenster 3–3,5h, Hochziehen an Möbeln in den Stand, Winken ('Tschüss'), Klatschen, Kniestand.",
        "milestones": ["Hochziehen an Möbeln", "Winken & Klatschen", "Kniestand", "Erste Gesten"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: DIE VERTIKALE PERSPEKTIVE</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Auf dem Boden liegen war gestern: Dein Baby zieht sich an Tischbeinen, Sofakanten und Gitterstäben mit ganzer Kraft in den Kniestand und den Stand hoch! Die Welt von oben zu sehen beflügelt seinen Forscherdrang.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Hochziehen in den Stand:</strong> Zieht sich kraftvoll an stabilen Gegenständen hoch. Zu Beginn weiß es oft noch nicht, wie es wieder nach unten kommt und weint. Zeige ihm, wie man in die Knie geht!</li>
                  <li><strong>Sicheres Sitzen:</strong> Sitzt mit geradem Rücken auf dem Boden und kann sich zur Seite drehen, ohne das Gleichgewicht zu verlieren.</li>
                  <li><strong>Beidhändiges Hantieren:</strong> Hält in jeder Hand einen Gegenstand und schlägt sie gezielt zusammen.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🗣️ Imitation & Gesten:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Winken:</strong> Hebt die Hand und winkt zum Abschied ('Tschüss-Tschüss').</li>
                  <li><strong>In die Hände klatschen:</strong> Klatscht begeistert mit ('Bravo' / 'Klatsch-Klatsch').</li>
                  <li><strong>Kopfschütteln:</strong> Schüttelt den Kopf für 'Nein', wenn es satt ist.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf & 10-Monats-Regression:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>3 bis 3,5 Stunden</strong>.</li>
                  <li>Babys stehen nachts plötzlich im Bettchen und finden nicht zurück in den Liegemodus. Ruhig hinlegen, Hand auflegen, nicht hochnehmen.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Familientisch rückt näher:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Brei wird zunehmend durch weiche Familienkost ersetzt (Kartoffelstücke, weiches Fleisch, Gemüsestücke).</li>
                  <li>Baby will mit dem eigenen Löffel experimentieren (viel Geduld bei Kleckereien!).</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "month": 11,
        "title": "Monat 11: Seitliches Entlanglaufen & Eigenwille",
        "motto": "Cruising an Möbeln: Die ersten Schritte zur Seite und das Erwachen des eigenen Willens",
        "badge": "Woche 41 bis 44",
        "summary": "Wachfenster 3–4h, seitliches Entlanglaufen an Möbeln ('Cruising'), erstes freies Stehen für Sekunden, Zeigegeste.",
        "milestones": ["Cruising an Möbeln", "Freies Stehen kurz", "Zeigegeste mit Zeigefinger", "U6 Vorbereitung"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl">
              <h4 class="text-sky-900 font-extrabold text-base m-0">DAS LEITMOTTO: 'CRUISING' ENTLANG DER MÖBEL</h4>
              <p class="text-sky-800 text-sm mt-1 m-0">Dein Baby läuft seitlich an Sofas, Couchtischen und Wänden entlang ('Cruising'). Es hangelt sich von Möbelstück zu Möbelstück und probiert manchmal für 2 Sekunden mutig das freie Stehen!</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Seitliches Laufen:</strong> Festes Festhalten mit einer Hand und sicheres Trippeln an Möbelkanten entlang.</li>
                  <li><strong>In die Hocke gehen:</strong> Geht aus dem Stand in die Knie, um ein Spielzeug aufzuheben, und drückt sich wieder hoch.</li>
                  <li><strong>Ein-Hand-Greifen im Stehen:</strong> Hält sich mit einer Hand fest und manipuliert mit der anderen Hand Spielzeug.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🗣️ Die Zeigegeste & Sprachverständnis:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Zeigen mit dem Zeigefinger:</strong> Zeigt auf Dinge, die es haben will oder die es spannend findet ('Da! Da!'). Das sogenannte <em>deklarative Zeigen</em> ist ein Meilenstein sozialer Intelligenz.</li>
                  <li><strong>Aufträge verstehen:</strong> Versteht 'Gib Mama den Ball' oder 'Wo sind deine Schuhe?'.</li>
                  <li><strong>Erstes echtes Wort möglich:</strong> Manche Babys sprechen nun ihr erstes bewusstes Wort ('Mama', 'Papa', 'Wauwau', 'Auto').</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Wachfenster:</strong> <strong>3 bis 4 Stunden</strong>.</li>
                  <li>Das letzte Wachfenster vor der Bettgehzeit ist meist das längste des Tages (ca. 3,5–4h), um genügend Schlafdruck aufzubauen.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">⚠️ Barfuß ist am gesündesten:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Keine festen Schuhe in der Wohnung! Barfußlaufen oder rutschfeste Stoppersocken stärken die Fußgewölbemuskulatur und die sensorische Rückmeldung des Bodens am besten.</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "month": 12,
        "title": "Monat 12: Der erste Geburtstag & Übergang zum Kleinkind!",
        "motto": "Ein ganzes Jahr voller Wunder: Freie Schritte, erste Worte und der Familientisch",
        "badge": "Woche 45 bis 52",
        "summary": "Geburtsgewicht verdreifacht, erste freie Schritte oder sicheres Stehen, 2–4 Wörter mit Sinnbezug, U6 & MMRV-Impfung.",
        "milestones": ["1. Geburtstag!", "Erste freie Schritte", "Erste Wörter", "U6 Check"],
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl">
              <h4 class="text-emerald-900 font-extrabold text-base m-0">HERZLICHEN GLÜCKWUNSCH ZUM 1. GEBURTSTAG!</h4>
              <p class="text-emerald-800 text-sm mt-1 m-0">Aus dem hilflosen Neugeborenen ist ein neugieriges, eigenständiges Kleinkind geworden. Sein Geburtsgewicht hat sich im Schnitt verdreifacht und seine Körperlänge um rund 50% zugenommen. Ihr habt das intensivste Jahr gemeistert!</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💪 Motorische Meilensteine mit 1 Jahr:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Gehen oder Cruisen:</strong> Manche Kinder laufen mit 12 Monaten frei, viele erst mit 14 oder 16 Monaten – beides ist vollkommen normal!</li>
                  <li><strong>Freies Stehen:</strong> Steht frei im Raum für mehrere Sekunden mit ausgestreckten Balance-Armen.</li>
                  <li><strong>Feinmotorik:</strong> Blättert dicke Pappbilderbuchseiten um, steckt Ringe auf einen Stab, baut 2-Klötzchen-Türme.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🗣️ Sprache & Kognition:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Erste Wörter:</strong> 1 bis 3 Wörter mit konkreter Bedeutung ('Mama', 'Papa', 'Ball', 'Nein').</li>
                  <li><strong>Tierlaute imitieren:</strong> Macht 'Wauwau', 'Muh' oder 'Miau' nach.</li>
                  <li><strong>Einfache Bitten:</strong> Versteht Aufforderungen wie 'Bring mir den Becher' oder 'Komm her'.</li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">🥣 Familientisch ab 1 Jahr:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Das Kind darf fast alles vom Familientisch mitessen (salzarm zubereiten!).</li>
                  <li><strong>Weiterhin verboten:</strong> Ganze Nüsse (Erstickungsgefahr bis 4–5 Jahre!) und Alkohol in Speisen.</li>
                  <li><strong>Honig ab jetzt erlaubt:</strong> Nach dem 1. Geburtstag ist die Darmflora reif genug gegen Botulinumsporen.</li>
                  <li>Kuhmilch kann nun als Trinkmilch (max. 300 ml/Tag inklusive Käse/Joghurt) gegeben werden.</li>
                </ul>
              </div>

              <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <strong class="text-slate-900 font-bold block mb-1">💤 Schlaf mit 12 Monaten:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Schlafbedarf:</strong> ca. 12 bis 14 Stunden pro 24h.</li>
                  <li><strong>Wachfenster:</strong> <strong>3 bis 4 Stunden</strong>.</li>
                  <li>Die meisten Kinder schlafen noch 2x tagsüber. Ein Wechsel auf 1 Mittagsschlaf erfolgt meist erst zwischen Monat 13 und 18.</li>
                </ul>
              </div>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
              <strong class="text-slate-900 font-bold block mb-1">🩺 Vorsorge U6 (10.–12. Lebensmonat) & Impfungen:</strong>
              Großer Checkup: Körpermaße, Bewegungsapparat, Sprachentwicklung, Interaktion. STIKO-Impfung: 1. Dosis <strong>MMRV (Masern, Mumps, Röteln, Windpocken)</strong> und Meningokokken B / C.
            </div>
          </div>
        """
    }
]

# Define Emergency Protocols
emergency_protocols_data = [
    {
        "id": "cpr",
        "title": "Herz-Lungen-Wiederbelebung beim Säugling (CPR)",
        "badge": "Lebensgefahr",
        "shortSummary": "Keine Reaktion & keine normale Atmung: 5x Vorbeatmung, dann 30 Herzdruckmassagen im Wechsel mit 2 Beatmungen (30:2).",
        "svg": svg_cpr,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-rose-600 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">REANIMATIONS-ALGORITHMUS BEIM SÄUGLING (0–12 MONATE)</h3>
              <p class="text-xs text-rose-100 mt-1 m-0">Im Unterschied zum Erwachsenen ersticken Säuglinge meist durch Sauerstoffmangel (Hypoxie). Daher beginnen wir IMMER mit 5 Beatmungen!</p>
            </div>

            <div class="my-4">
              {svg_cpr}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">1. BEWUSSTSEIN PRÜFEN:</strong>
                <p class="text-slate-700 text-xs">Laut ansprechen, sanft an den Fußsohlen kitzeln oder die Wange streicheln. Keine Reaktion? -> Sofort laut um Hilfe rufen!</p>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">2. ATEMWEGE FREIMACHEN:</strong>
                <p class="text-slate-700 text-xs">Baby auf eine feste Unterlage (Tisch oder Boden) legen. Kopf vorsichtig in die <strong>Neutralposition / Schnüffelposition</strong> bringen (Kinn leicht anheben). <em>Achtung: Den Kopf beim Säugling NIEMALS überstrecken, da die enge Luftröhre sonst abknickt!</em></p>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">3. ATMUNG PRÜFEN (10 SEKUNDEN):</strong>
                <p class="text-slate-700 text-xs">Ohr über Mund und Nase halten, Blick auf den Brustkorb: Hebt sich der Brustkorb? Höre ich Atemgeräusche? Fühle ich Atemluft an der Wange? Keine normale Atmung oder nur unregelmäßiges Schnappen?</p>
              </div>

              <div class="p-4 bg-rose-50 border border-rose-300 rounded-xl">
                <strong class="text-rose-900 font-bold block mb-1">4. 5 INITIALE BEATMUNGEN:</strong>
                <p class="text-slate-700 text-xs">Umschließe mit deinem Mund <strong>Mund UND Nase</strong> des Babys gleichzeitig. Blase sanft Luft hinein (nur das Volumen deiner Wangen, nicht aus voller Lunge!), ca. 1 Sekunde lang, bis sich der Brustkorb leicht sichtbar hebt. 5-mal wiederholen.</p>
              </div>

              <div class="p-4 bg-rose-50 border border-rose-300 rounded-xl">
                <strong class="text-rose-900 font-bold block mb-1">5. 30 HERZDRUCKMASSAGEN (2 FINGER):</strong>
                <p class="text-slate-700 text-xs">Platziere <strong>zwei Finger</strong> (Zeige- und Mittelfinger) auf der unteren Hälfte des Brustbeins (eine Fingerbreite unterhalb der Brustwarzenlinie). Drücke das Brustbein ca. <strong>4 cm tief (ein Drittel der Brustkorbtiefe)</strong> schnell und kräftig nach unten. Frequenz: 100 bis 120 Mal pro Minute.</p>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">6. WECHSEL 30:2 FORTSETZEN:</strong>
                <p class="text-slate-700 text-xs">Immer 30 Drückungen im Wechsel mit 2 Beatmungen fortsetzen, bis der Notarzt (112) eintrifft oder das Baby wieder normale Atmung und Lebenszeichen zeigt. Wenn du allein bist: Führe 1 Minute CPR durch, rufe dann sofort die 112 (Lautsprecher an!) und setze CPR sofort fort.</p>
              </div>
            </div>
          </div>
        """
    },
    {
        "id": "choking",
        "title": "Akute Atemwegsverlegung / Verschlucken (Ersticken)",
        "badge": "Akute Erstickungsgefahr",
        "shortSummary": "Lautloses Ersticken: 5 Schläge auf den Rücken in Kopftieflage, danach 5 Brustdrücke. Niemals blind im Hals stochern!",
        "svg": svg_choking,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-amber-600 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">ERSTICKUNGSNOTFALL BEIM SÄUGLING</h3>
              <p class="text-xs text-amber-100 mt-1 m-0">Wichtigster Unterschied: Lautes Würgen (Gagging) ist harmlos. Völlig lautloses Schnappen nach Luft mit Blauverfärbung ist ein tödlicher Notfall!</p>
            </div>

            <div class="my-4">
              {svg_choking}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">1. SCHRITT: 5 RÜCKENSCHLÄGE IN KOPFTIEFLAGE</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Lege das Baby bäuchlings längs über deinen Unterarm.</li>
                  <li>Stütze mit deinen Fingern den <strong>Unterkiefer</strong> des Babys (nicht den Hals eindrücken!).</li>
                  <li>Senke den Arm so ab, dass der Kopf des Babys <strong>deutlich tiefer als das Becken</strong> liegt.</li>
                  <li>Schlage mit dem Handballen deiner freien Hand <strong>5-mal kräftig und gezielt zwischen die Schulterblätter</strong> nach vorne-unten.</li>
                </ul>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">2. SCHRITT: 5 BRUSTKOMPRESSIONEN</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li>Ist der Fremdkörper nicht draußen: Drehe das Baby auf den Rücken auf deinen anderen Unterarm (Kopf bleibt tiefer als Körper).</li>
                  <li>Drücke mit 2 Fingern 5-mal kräftig mittig auf das Brustbein (wie bei der Herzdruckmassage).</li>
                </ul>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong class="text-slate-900 font-bold block mb-1">3. SCHRITT: WIEDERHOLEN & NOTRUF</strong>
                <p class="text-slate-700 text-xs">Wiederhole 5 Rückenschläge und 5 Brustkompressionen im Wechsel. Rufe sofort 112 (Lautsprecher an!). Wird das Baby bewusstlos: Sofort mit Reanimation (CPR 30:2) beginnen!</p>
              </div>

              <div class="p-4 bg-red-100 border border-red-300 rounded-xl text-xs text-red-900 font-bold">
                ⛔ ABSOLUTES VERBOT: Greife NIEMALS blind mit den Fingern in den Mund oder Rachen! Dadurch schiebst du den Fremdkörper nur noch tiefer in den Kehlkopf hinein. Nur sichtbare Gegenstände mit zwei Fingern herausnehmen.
              </div>
            </div>
          </div>
        """
    },
    {
        "id": "febrile-seizure",
        "title": "Fieberkrampf (Febrile Seizure)",
        "badge": "Notfall",
        "shortSummary": "Plötzliche Zuckungen und Bewusstlosigkeit bei schnellem Fieberanstieg: Ruhe bewahren, auf die Seite legen, Zeit stoppen, 112 rufen!",
        "svg": svg_febrile,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-orange-600 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">DER FIEBERKRAMPF BEIM BABY</h3>
              <p class="text-xs text-orange-100 mt-1 m-0">Tritt bei 3–5% aller Kinder zwischen dem 6. Lebensmonat und 5. Lebensjahr auf. Sieht dramatisch aus, hinterlässt bei unkompliziertem Verlauf aber keine Hirnschäden!</p>
            </div>

            <div class="my-4">
              {svg_febrile}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <strong class="text-emerald-900 font-bold block mb-1">✅ SOFORTMASSNAHMEN (DO'S):</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Ruhe bewahren:</strong> Ein unkomplizierter Fieberkrampf endet meist nach 2 bis 3 Minuten von selbst.</li>
                  <li><strong>Auf die Seite legen:</strong> Lege das Kind flach auf den Boden oder eine Decke auf die Seite (stabile Seitenlage), damit Speichel oder Erbrochenes abfließen kann.</li>
                  <li><strong>Verletzungen verhindern:</strong> Gefährliche Gegenstände, Ecken und Kanten aus der Umgebung entfernen. Kopf weich abpolstern.</li>
                  <li><strong>ZEIT STOPPEN:</strong> Blicke sofort auf die Uhr und messe die genaue Dauer des Krampfes! Das ist die wichtigste Information für den Notarzt.</li>
                  <li><strong>NOTRUF 112:</strong> Bei jedem ersten Fieberkrampf IMMER den Notarzt rufen.</li>
                </ul>
              </div>

              <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                <strong class="text-rose-900 font-bold block mb-1">⛔ ABSOLUTE VERBOTE (DON'TS):</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Niemals festhalten:</strong> Versuche nicht, die zuckenden Gliedmaßen gewaltsam festzuhalten (Gefahr von Knochenbrüchen).</li>
                  <li><strong>Nichts in den Mund stecken:</strong> Kein Beißkeil, kein Löffel, keine Finger! Erstickungsgefahr und Zähne können abbrechen.</li>
                  <li><strong>Kein Wasser einflößen:</strong> Bewusstlose Kinder können nicht schlucken -> Erstickungsgefahr!</li>
                  <li><strong>Niemals schütteln:</strong> Auch nicht, um das Kind 'wachzubekommen'!</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "id": "fall-trauma",
        "title": "Sturz vom Wickeltisch / Schädel-Hirn-Trauma",
        "badge": "Unfallchirurgie",
        "shortSummary": "Häufigster Unfall im 1. Lebensjahr: Pupillen kontrollieren, Alarmsignale bei Hirnerschütterung / Schädelbruch erkennen.",
        "svg": svg_fall_trauma,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-red-600 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">STURZ VOM WICKELTISCH ODER BETT</h3>
              <p class="text-xs text-red-100 mt-1 m-0">Ein Sturz aus ca. 80–100 cm Höhe auf harten Fliesenboden birgt die Gefahr von Schädelknochenbrüchen und intrakraniellen Blutungen.</p>
            </div>

            <div class="my-4">
              {svg_fall_trauma}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-red-50 border border-red-200 rounded-xl">
                <strong class="text-red-900 font-bold block mb-1">🚨 SOFORT 112 / NOTAUFNAHME BEI DIESEN ZEICHEN:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Bewusstlosigkeit:</strong> Auch wenn das Baby nur für wenige Sekunden 'weggetreten' war oder nicht sofort geschrien hat.</li>
                  <li><strong>Erbrechen:</strong> Wiederholtes Erbrechen (mehr als 1x nach dem Sturz).</li>
                  <li><strong>Ungleiche Pupillen:</strong> Eine Pupille ist größer als die andere oder reagiert nicht auf Licht.</li>
                  <li><strong>Blut oder klare Flüssigkeit:</strong> Aus Ohr oder Nase läuft Blut oder wässrige Flüssigkeit (Verdacht auf Schädelbasisbruch!).</li>
                  <li><strong>Delle am Kopf:</strong> Fühlbare Stufenbildung oder weiche, teigige Beule am Schädelknochen.</li>
                  <li><strong>Apathie:</strong> Baby schläft sofort tief ein und lässt sich kaum noch wecken.</li>
                </ul>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
                <strong class="text-slate-900 font-bold block mb-1">Überwachungsregel für 48 Stunden:</strong>
                Auch wenn das Kind nach dem Weinen wieder munter wirkt: In den ersten 48 Stunden nach dem Sturz alle 2 bis 3 Stunden wecken und ansprechen, um das Bewusstsein zu prüfen. Bei Verhaltensänderungen sofort in die Klinik!
              </div>
            </div>
          </div>
        """
    },
    {
        "id": "poisoning",
        "title": "Vergiftung & Verätzung (Giftnotruf)",
        "badge": "Toxikologie",
        "shortSummary": "Putzmittel, Spültabs, Medikamente oder giftige Pflanzen verschluckt: Giftnotruf 030 19240 wählen! Niemals Erbrechen auslösen!",
        "svg": svg_poisoning,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-purple-700 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">AKUTE VERGIFTUNG ODER VERÄTZUNG</h3>
              <p class="text-xs text-purple-100 mt-1 m-0">Typische Gefahrenquellen: Bunte Waschmittel-Pods, Spülmaschinen-Tabs, Zigarettenkippen, Zimmerpflanzen (z. B. Dieffenbachie), Lampenöle und herumliegende Medikamente.</p>
            </div>

            <div class="my-4">
              {svg_poisoning}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                <strong class="text-purple-900 font-bold block mb-1">📞 SOFORTIGE MASSNAHMEN:</strong>
                <ol class="list-decimal list-inside space-y-1.5 text-slate-700 text-xs">
                  <li><strong>Reste entfernen:</strong> Substanzreste vorsichtig mit einem Tuch aus Mundhöhle entfernen. Nicht schlucken lassen.</li>
                  <li><strong>Giftnotruf wählen (Berlin: 030 19240, Bonn: 0228 19240):</strong> Die Experten sagen dir genau, was zu tun ist. Bei Bewusstlosigkeit oder Atemnot sofort 112 rufen!</li>
                  <li><strong>Verpackung bereithalten:</strong> Genaue Produktbezeichnung, Inhaltsstoffe und geschätzte Menge angeben.</li>
                </ol>
              </div>

              <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                <strong class="text-rose-900 font-bold block mb-1">⛔ TÖDLICHE FEHLER VERMEIDEN:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>NIEMALS Erbrechen auslösen:</strong> Bei ätzenden Stoffen (Säuren, Laugen, Spültabs) verätzt die Speiseröhre beim Rückfluss ein zweites Mal! Bei schäumenden Stoffen droht Schaumbildung in der Lunge (Ersticken).</li>
                  <li><strong>KEINE Milch geben:</strong> Milch beschleunigt bei fettlöslichen Giften die Giftaufnahme im Darm!</li>
                  <li><strong>Kein Salzwasser geben:</strong> Führt bei Babys zu tödlicher Hypernatriämie.</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "id": "burns",
        "title": "Verbrennung & Verbrühung",
        "badge": "Thermischer Notfall",
        "shortSummary": "Tee, Kaffee, Badewasser: Handwarm kühlen (10–15 Min.), niemals eiskalt, keine Hausmittel, Brandblasen geschlossen halten.",
        "svg": svg_burns,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-rose-600 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">VERBRÜHUNG & VERBRENNUNG</h3>
              <p class="text-xs text-rose-100 mt-1 m-0">Säuglingshaut ist nur ein Fünftel so dick wie Erwachsenenhaut. Eine Tasse heißer Tee (65°C) verursacht in 1 Sekunde tiefste Verbrennungen 3. Grades!</p>
            </div>

            <div class="my-4">
              {svg_burns}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl">
                <strong class="text-sky-900 font-bold block mb-1">💧 RICHTIG KÜHLEN:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Kleidung sofort vorsichtig entfernen:</strong> Nasse, heiße Kleidung hält die Hitze am Körper. Ausnahme: Mit der Haut verbrannte Textilien NICHT abreißen!</li>
                  <li><strong>Handwarm kühlen (ca. 15–20°C):</strong> 10 bis maximal 15 Minuten unter sanft fließendes Leitungswasser halten.</li>
                  <li><strong>NIEMALS Eis oder eiskaltes Wasser:</strong> Führt bei Säuglingen rasant zu lebensbedrohlicher Unterkühlung (Hypothermie) und Gefäßkrampf!</li>
                  <li><strong>Rest des Körpers warmhalten:</strong> Baby in eine warme Decke hüllen, um Auskühlung zu stoppen.</li>
                </ul>
              </div>

              <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                <strong class="text-rose-900 font-bold block mb-1">⛔ STRIKTE VERBOTE & VERSORGUNG:</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Keine Hausmittel:</strong> Niemals Mehl, Öl, Butter, Zahnpasta oder Puder auf Brandwunden schmieren – Infektionsgefahr!</li>
                  <li><strong>Brandblasen niemals aufstechen:</strong> Die Blasenoberfläche schützt vor schweren Infektionen.</li>
                  <li><strong>Keimfrei abdecken:</strong> Wunde locker mit einem sterilen Verbandtuch oder sauberen Frischhaltefolie bedecken.</li>
                  <li><strong>Notruf 112:</strong> Bei jeder Verbrennung, die größer als die Handfläche des Babys ist, oder bei Gesicht, Händen und Genitalien sofort 112 rufen!</li>
                </ul>
              </div>
            </div>
          </div>
        """
    },
    {
        "id": "drowning",
        "title": "Wasserunfall & Sekundäres Ertrinken",
        "badge": "Lebensgefahr",
        "shortSummary": "Lautloses Ertrinken in Sekunden: Stimmritzenkrampf verhindert Rufen. Nach jedem Untertauchen: 24h Lungenödem-Gefahr beachten!",
        "svg": svg_drowning,
        "contentHtml": f"""
          <div class="space-y-6">
            <div class="p-4 bg-cyan-700 text-white rounded-2xl shadow-md">
              <h3 class="text-xl font-black m-0 text-white">WASSERUNFALL & LAUTLOSES ERTRINKEN</h3>
              <p class="text-xs text-cyan-100 mt-1 m-0">Babys ertrinken völlig lautlos. Sie schlagen nicht mit den Armen und schreien nicht – der Kehlkopf verschließt sich reflexartig (Laryngospasmus).</p>
            </div>

            <div class="my-4">
              {svg_drowning}
            </div>

            <div class="space-y-4 text-sm">
              <div class="p-4 bg-cyan-50 border border-cyan-200 rounded-xl">
                <strong class="text-cyan-900 font-bold block mb-1">🚨 SOFORTMASSNAHMEN BEI WASSERUNFALL:</strong>
                <ol class="list-decimal list-inside space-y-1 text-slate-700 text-xs">
                  <li><strong>Sofort aus dem Wasser heben:</strong> Jede Millisekunde zählt.</li>
                  <li><strong>Atmung prüfen (Kopf sanft überstrecken, Ohr an Mund, Blick auf Brustkorb für 10 Sek.):</strong></li>
                  <li><strong>Wenn KEINE Atmung vorhanden ist:</strong> Sofort 112 rufen (Lautsprecher!) und mit <strong>5 Initialbeatmungen</strong> (Mund über Mund und Nase des Babys) beginnen, danach 30 Herzdruckmassagen : 2 Beatmungen!</li>
                  <li><strong>Wenn Atmung vorhanden ist:</strong> Baby auf die Seite drehen, nasse Kleidung ausziehen, in trockene Decke wickeln.</li>
                </ol>
              </div>

              <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <strong class="text-amber-900 font-bold block mb-1">⚠️ DAS PHÄNOMEN 'SEKUNDÄRES ERTRINKEN' (LUNGENÖDEM):</strong>
                <p class="text-slate-700 text-xs leading-relaxed">
                  Auch wenn das Baby nach kurzem Untertauchen gehustet hat und scheinbar wieder fröhlich ist: Schon wenige Milliliter eingeatmetes Wasser zerstören die schützende Surfactant-Schicht der Lungenbläschen. Stunden später kann es zu Entzündungen und einem <strong>toxischen Lungenödem</strong> kommen.
                </p>
                <p class="text-xs font-bold text-amber-900 mt-2">
                  Warnzeichen in den nächsten 24 Stunden: Anhaltender Husten, erschwerte flache Atmung, Blässe/Lippenblau, extreme Müdigkeit. Bei diesen Zeichen sofort Notaufnahme ansteuern!
                </p>
              </div>
            </div>
          </div>
        """
    }
]

# =============================================================================
# STOOL / DIAPER COLOR GUIDE DATA
# =============================================================================
stool_color_guide_data = [
    {
        "id": "meconium",
        "name": "Mekonium (Kindspech)",
        "color": "#1c1917",
        "textCol": "#ffffff",
        "timing": "Tag 1 bis Tag 3 nach Geburt",
        "urgency": "Normal & Lebenswichtig",
        "urgencyBadge": "bg-emerald-100 text-emerald-800",
        "description": "Tiefschwarz-grünlich, extrem zäh und klebrig wie Teer. Besteht aus im Mutterleib geschlucktem Fruchtwasser, Lanugohaaren und Darmepithel.",
        "meaning": "Beweist, dass der Magen-Darm-Trakt deines Babys durchgängig ist und funktioniert. Wird durch das Kolostrum (Erstmilch) rasch ausgeschieden."
    },
    {
        "id": "transition",
        "name": "Übergangsstuhl",
        "color": "#4d5b24",
        "textCol": "#ffffff",
        "timing": "Tag 3 bis Tag 5",
        "urgency": "Normal & physiologisch",
        "urgencyBadge": "bg-emerald-100 text-emerald-800",
        "description": "Grünlich-braun bis senffarben, wird deutlich weicher und verliert die zähe Teer-Konsistenz.",
        "meaning": "Zeigt an, dass der Milcheinschuss erfolgt ist und die eigentliche Verdauung von Muttermilch oder Pre-Nahrung beginnt."
    },
    {
        "id": "breastfed",
        "name": "Muttermilchstuhl",
        "color": "#eab308",
        "textCol": "#713f12",
        "timing": "Ab Tag 5 bei Stillbabys",
        "urgency": "Optimaler Goldstandard",
        "urgencyBadge": "bg-emerald-100 text-emerald-800",
        "description": "Senfgelb bis ockergelb, flüssig bis cremig, oft mit kleinen weißen Körnchen (wie Senfkörner). Riecht aromatisch-säuerlich (nicht faulig!).",
        "meaning": "Perfekte Verdauung. Wichtig: Von 10-mal am Tag bis zu 1-mal alle 10 Tage ist bei voll gestillten Babys ALLES völlig normal, solange das Baby munter ist und der Bauch weich ist!"
    },
    {
        "id": "formula",
        "name": "Pre-Nahrungs-Stuhl",
        "color": "#ca8a04",
        "textCol": "#ffffff",
        "timing": "Bei Fläschchen-Babys (Pre)",
        "urgency": "Völlig normal",
        "urgencyBadge": "bg-emerald-100 text-emerald-800",
        "description": "Hellgelb bis pastös hellbraun, fester geformt (wie Brei oder Erdnussbutter), riecht intensiver nach Stuhl.",
        "meaning": "Pre-Milch wird etwas langsamer verstoffwechselt als Muttermilch. Babys haben meist 1- bis 2-mal täglich oder jeden 2. Tag Stuhlgang."
    },
    {
        "id": "green",
        "name": "Grüner Stuhl (Spinatgrün)",
        "color": "#15803d",
        "textCol": "#ffffff",
        "timing": "Gelegentlich im gesamten 1. Jahr",
        "urgency": "Meist harmlos – beobachten",
        "urgencyBadge": "bg-amber-100 text-amber-800",
        "description": "Dunkelgrün oder grasgrün, oft etwas schaumig oder flüssiger.",
        "meaning": "Häufige Ursachen: 1. Baby trinkt viel wässrige Vordermilch (Tipp: Brust länger austrinken lassen für die fettige Hintermilch). 2. Zahnen oder leichter Schnupfen (verschluckter Speichel/Schleim). 3. Eisenhaltige Spezialnahrung."
    },
    {
        "id": "acholic",
        "name": "Kreideweiß / Lehmfarben (Acholisch)",
        "color": "#f1f5f9",
        "textCol": "#0f172a",
        "timing": "Jederzeit möglich (oft 2.–8. Woche)",
        "urgency": "🚨 SOFORT NOTAUFNAHME!",
        "urgencyBadge": "bg-rose-600 text-white font-black",
        "description": "Entfärbter Stuhl, kreideweiß, grau oder lehmfarben ohne jeden Gelbton. Oft begleitet von dunkelbraunem Urin und anhaltender Gelbsucht.",
        "meaning": "LEBENSGEFAHR: Gallengangsatresie (Verschluss der Gallenwege) oder schwere Leberstörung! Die Galle kann nicht in den Darm abfließen. Muss binnen weniger Wochen operiert werden! Sofort Windel einpacken und in die Kinderklinik!"
    },
    {
        "id": "red_blood",
        "name": "Roter Stuhl / Blutauflagerungen",
        "color": "#dc2626",
        "textCol": "#ffffff",
        "timing": "Jederzeit möglich",
        "urgency": "🚨 SOFORT ARZT / NOTFALL!",
        "urgencyBadge": "bg-rose-600 text-white font-black",
        "description": "Sichtbare rote Blutspuren, Blutfäden oder himbeergeleeartiger Schleim im Stuhl.",
        "meaning": "Mögliche Ursachen: 1. Frisches Blut durch kleine Analfissur (oft schmerzhaft beim Drücken). 2. Verschlucktes mütterliches Blut von wunden Brustwarzen. 3. Kuhmilcheiweiß-Allergie. 4. AKUTER NOTFALL: Himbeergeleeartiger Stuhl bei Darminvagination (Darmverschlingung) mit schrillem Weinen! Sofort ärztlich abklären."
    },
    {
        "id": "black_tar",
        "name": "Teerschwarz (nach Tag 4)",
        "color": "#09090b",
        "textCol": "#ffffff",
        "timing": "Nach dem 4. Lebenstag",
        "urgency": "🚨 NOTFALL 112!",
        "urgencyBadge": "bg-rose-600 text-white font-black",
        "description": "Tiefschwarzer, glänzender Teerstuhl (Meläna) NACHDEM das Neugeborenen-Mekonium bereits vollständig ausgeschieden war.",
        "meaning": "Verdacht auf obere Magen-Darm-Blutung (z.B. Magenblutung bei Vitamin-K-Mangel). Sofort Notarzt (112) rufen!"
    }
]

# =============================================================================
# TEETHING & MILK TEETH DATA
# =============================================================================
teeth_data = {
    "overview": {
        "total": 20,
        "normalStart": "6. bis 8. Lebensmonat",
        "normalRange": "4. bis 14. Lebensmonat (enorme genetische Schwankungsbreite!)"
    },
    "jawGroups": [
        {
            "id": "lower_central",
            "name": "Untere mittlere Schneidezähne (2)",
            "timing": "6. bis 10. Monat",
            "tag": "Meist die allerersten Zähnchen!",
            "symptoms": "Starkes Speicheln, Faust in den Mund stecken, gerötetes Zahnfleisch vorne unten.",
            "order": 1
        },
        {
            "id": "upper_central",
            "name": "Obere mittlere Schneidezähne (2)",
            "timing": "8. bis 12. Monat",
            "tag": "Die 'Hasenzähnchen'",
            "symptoms": "Baby beißt auf Löffel oder Brustwarzen, geschwollenes oberes Zahnfleisch.",
            "order": 2
        },
        {
            "id": "upper_lateral",
            "name": "Obere seitliche Schneidezähne (2)",
            "timing": "9. bis 13. Monat",
            "tag": "Neben den mittleren",
            "symptoms": "Unruhe beim Einschlafen, Drang auf harten Gegenständen zu kauen.",
            "order": 3
        },
        {
            "id": "lower_lateral",
            "name": "Untere seitliche Schneidezähne (2)",
            "timing": "10. bis 16. Monat",
            "tag": "Vervollständigt die Schneidezähne",
            "symptoms": "Oft unbemerkt oder während eines Entwicklungsschubs.",
            "order": 4
        },
        {
            "id": "first_molars",
            "name": "Erste Backenzähne / Mahlzähne (4)",
            "timing": "13. bis 19. Monat",
            "tag": "Oft schmerzhafter Durchtritt!",
            "symptoms": "Breite Kaufläche schiebt sich durch. Schmerzen beim Kauen fester Speisen, gerötete Wangen.",
            "order": 5
        },
        {
            "id": "canines",
            "name": "Eckzähne / Augenzähne (4)",
            "timing": "16. bis 23. Monat",
            "tag": "Schließen die Lücke",
            "symptoms": "Spitz zulaufend. Kind fasst sich oft an die Wange oder das Ohr auf der Durchtrittsseite.",
            "order": 6
        },
        {
            "id": "second_molars",
            "name": "Zweite Backenzähne (4)",
            "timing": "23. bis 33. Monat",
            "tag": "Vollständiges Milchgebiss (20 Zähne)",
            "symptoms": "Ganz hinten im Kiefer. Kind kann Schmerzen oft schon mit Worten lokalisieren.",
            "order": 7
        }
    ],
    "mythsAndFacts": [
        {
            "myth": "Zahnen verursacht hohes Fieber (über 38,5°C) und schweren Durchfall.",
            "fact": "FALSCH & GEFÄHRLICH! Zahnen kann die Temperatur leicht erhöhen (bis ca. 38,2°C) durch lokale Entzündungsbotenstoffe. Hohes Fieber über 38,5°C oder wässriger Durchfall wird IMMER durch einen echten Infekt verursacht! Schiebe hohes Fieber niemals aufs Zahnen – suche bei Fieber den Kinderarzt auf!"
        },
        {
            "myth": "Bernsteinketten helfen gegen Zahnschmerzen.",
            "fact": "GEFÄHRLICH! Kinderärzte und Stiftung Warentest warnen eindringlich vor Bernsteinketten: Es besteht akute Strangulations- und Erstickungsgefahr durch verschluckte Steine beim Reißen der Kette. Es gibt keinerlei wissenschaftlichen Wirkungsnachweis."
        },
        {
            "myth": "Milchzähne müssen nicht geputzt werden, weil sie ohnehin ausfallen.",
            "fact": "FALSCH! Karies an Milchzähnen schädigt die darunterliegenden Keime der bleibenden Zähne. Ab dem ERSTEN sichtbaren Zahn: 1-mal täglich mit einer reiskorngroßen Menge fluoridhaltiger Kinderzahnpasta (1000 ppm) sanft putzen."
        }
    ],
    "reliefTips": [
        "Kühle Beißringe (nur im Kühlschrank lagern, NIEMALS im Gefrierfach – Erfrierungsgefahr!)",
        "Kühler, feuchter Waschlappen zum Draufbeißen",
        "Sanfte Kiefermassage mit sauberem Finger oder Silikon-Fingerling",
        "Gekühlte Gurkensticks (nur unter strenger Aufsicht wegen Erstickungsgefahr!)",
        "Pflanzliche Zahnungsgele mit Kamille/Eibisch oder schmerzlindernde Gele nach Absprache mit Arzt/Apotheke"
    ]
}

# =============================================================================
# AGE STAGES DATA (FOR QUICK SELECTOR ON HOME)
# =============================================================================
age_stages_data = [
    {
        "id": "pregnant",
        "label": "Schwanger",
        "subLabel": "Vorbereitung",
        "icon": "🤰",
        "badge": "Vor der Geburt",
        "wakeWindow": "Noch im Bauch",
        "sleepHours": "Schläft ca. 90% der Zeit",
        "headline": "Die Ruhe vor dem Sturm: Lebenswichtiges Vorwissen vor der Geburt",
        "keyHighlights": [
            "Die 4 lebenswichtigen Kardinalregeln jetzt verinnerlichen (Schütteltrauma, sicherer Schlaf 16–18°C, leeres Bett)",
            "Kliniktasche & Erstausstattung vorbereiten (Wickelbodys statt Pullover zum Über-den-Kopf-Ziehen)",
            "Notfallnummern einspeichern: Kinderarzt, Giftnotruf 030 19240, Hebamme",
            "Wichtige Behördengänge vorab vorbereiten: Elternzeit, Elterngeld, Vaterschaftsanerkennung"
        ],
        "nextCheckup": "U1 direkt nach der Geburt im Kreißsaal",
        "targetMonth": 1
    },
    {
        "id": "0-1m",
        "label": "0–1 Monat",
        "subLabel": "Neugeborenes",
        "icon": "🐣",
        "badge": "Woche 1–4",
        "wakeWindow": "Nur 45–60 Minuten!",
        "sleepHours": "16–18 Stunden / 24h",
        "headline": "Das 4. Trimester: Ankommen, Geborgenheit & Reflexe",
        "keyHighlights": [
            "Wachfenster strikt beachten: Nach spätestens 60 Minuten muss das Baby wieder ruhen, sonst schreit es übermüdet",
            "Kolostrum & Milcheinschuss (Tag 3–5): Häufiges Anlegen (8–12x in 24h) kurbelt Milchbildung an",
            "Kein Wasser, kein Tee, kein Honig geben – reine Muttermilch oder Pre-Nahrung genügt völlig",
            "Fieber über 38,0°C rektal ist in diesem Alter ein sofortiger Notfall!"
        ],
        "nextCheckup": "U2 (Tag 3–10) & U3 (Woche 4–5)",
        "targetMonth": 1
    },
    {
        "id": "2-3m",
        "label": "2–3 Monate",
        "subLabel": "Das Ankommen",
        "icon": "🍼",
        "badge": "Monat 2 & 3",
        "wakeWindow": "60–90 Minuten",
        "sleepHours": "15–16 Stunden / 24h",
        "headline": "Das erste Lächeln, Blickkontakt & die 'Dreimonatskoliken'",
        "keyHighlights": [
            "Soziales Lächeln (ca. 6. Woche): Baby reagiert bewusst auf euer Lächeln und eure Stimme",
            "Kopfkontrolle in Bauchlage: Täglich 2–3 Mal ein paar Minuten 'Tummy Time' üben",
            "Bauchweh-Peak um die 6.–8. Woche: Fliegergriff, Kirschkernkissen und Fahrradfahren mit den Beinchen",
            "Erste STIKO-Schutzimpfungen (Rotaviren, 6-fach, Pneumokokken) stehen an"
        ],
        "nextCheckup": "U3 (4.–5. Woche) & Impfstart mit 2 Monaten",
        "targetMonth": 2
    },
    {
        "id": "4-6m",
        "label": "4–6 Monate",
        "subLabel": "Wendephase",
        "icon": "✨",
        "badge": "Monat 4 bis 6",
        "wakeWindow": "1,5 bis 2,5 Stunden",
        "sleepHours": "14–15 Stunden / 24h",
        "headline": "4-Monats-Schlafregression, gezieltes Greifen & Beikoststart",
        "keyHighlights": [
            "4-Monats-Schlafregression: Babys Schlafarchitektur reift von 2 auf 4 Phasen – viele wachen stündlich auf",
            "Drehen von Bauch auf Rücken & gezieltes Beidhändiges Greifen",
            "Beikostreifezeichen prüfen (frühestens Monat 5, meist Monat 6): Kopf stabil, Zungenstoßreflex weg, Interesse",
            "Wichtig: Trauben, Heidelbeeren & Tomaten IMMER längs vierteln wegen Erstickungsgefahr!"
        ],
        "nextCheckup": "U4 (3.–4. Monat) & U5 (6.–7. Monat)",
        "targetMonth": 4
    },
    {
        "id": "7-9m",
        "label": "7–9 Monate",
        "subLabel": "Auf Entdeckung",
        "icon": "🧸",
        "badge": "Monat 7 bis 9",
        "wakeWindow": "2,5 bis 3,5 Stunden",
        "sleepHours": "13–14 Stunden / 24h",
        "headline": "Robben, Krabbeln, Fremdeln & Objektpermanenz",
        "keyHighlights": [
            "Mobilität explodiert: Robben, Vierfüßlerstand, erstes freies Sitzen – Wohnung babysicher machen!",
            "Wohnung sichern: Steckdosenschutz, Tischtücher entfernen, Treppengitter, Putzmittel wegsperren",
            "Fremdeln (8-Monats-Angst): Erkenntnis, dass Mama/Papa getrennte Wesen sind – 'Kuckuck'-Spiel hilft!",
            "Beikost-Ausbau: Brei oder BLW (Fingerfood), Wasser zum Essen im offenen Becher anbieten"
        ],
        "nextCheckup": "U5 (bis Monat 7) & Vorbereitung U6",
        "targetMonth": 7
    },
    {
        "id": "10-12m",
        "label": "10–12 Monate",
        "subLabel": "Auf zwei Beinen",
        "icon": "🚶",
        "badge": "Monat 10 bis 12",
        "wakeWindow": "3,0 bis 4,0 Stunden",
        "sleepHours": "12–14 Stunden / 24h",
        "headline": "Hochziehen, erste Schritte, Zeigegesten & der 1. Geburtstag",
        "keyHighlights": [
            "Hochziehen an Möbeln, Kreuzgang an der Couch, vielleicht erste freie Schritte",
            "Pinzettengriff perfektioniert: Baby hebt kleinste Fussel auf – größte Gefahr für Kleinteile-Verschlucken!",
            "Übergang zum Familientisch: Salz- und zuckerarm mitessen, Kuhmilch in kleinen Mengen erlaubt",
            "U6-Untersuchung & Masern-Mumps-Röteln (MMR) Impfung beim Kinderarzt"
        ],
        "nextCheckup": "U6 (10.–12. Monat) & 1. Geburtstag!",
        "targetMonth": 10
    }
]

print("Assembled detailed data objects.")
