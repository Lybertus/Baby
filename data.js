// ==========================================================================
// BABY GUIDE DATA: DAS GROSSE ENZYKLOPÄDISCHE ELTERN-KOMPENDIUM (MIT BILDERN)
// ==========================================================================
(function() {
  const EMERGENCY_CONTACTS = {
    germany: {
      notruf: "112",
      giftnotruf_berlin: "030 19240",
      giftnotruf_bonn: "0228 19240",
      giftnotruf_muenchen: "089 19240",
      giftnotruf_mainz: "06131 19240",
      aerztlicher_bereitschaftsdienst: "116 117",
      elterntelefon: "0800 111 0550 (kostenlos, anonym, Mo-Fr 9-17h, Di+Do bis 19h)",
      telefonseelsorge: "0800 111 0 111"
    },
    austria: {
      rettung: "144",
      vergiftungsinformation: "01 406 43 43",
      gesundheitstelefon: "1450",
      rat_auf_draht: "147"
    },
    switzerland: {
      sanitaet: "144",
      tox_zentrum: "145",
      elternnotruf: "0848 35 45 55"
    }
  };
  const TOP_PRIORITY_RULES = [
    {
      id: "never-shake",
      title: "1. NIEMALS SCHÜTTELN! (Schütteltrauma / Shaken Baby Syndrome)",
      severity: "danger",
      icon: "alert-triangle",
      shortSummary: "Schon 2–3 Sekunden Schütteln zerstören das Gehirn unwiderruflich oder führen zum Tod. Wenn du an deine Grenzen gerätst: Baby sicher ablegen und sofort den Raum verlassen!",
      fullArticleHtml: `
        <div class="space-y-6">
          <div class="p-4 bg-red-100 border-l-4 border-red-600 rounded-r-xl">
            <h4 class="text-red-900 font-extrabold text-lg m-0">LEBENSRETTENDE KARDINALREGEL #1</h4>
            <p class="text-red-800 text-sm mt-1 m-0">Ein Schütteltrauma ist die häufigste nicht-natürliche Todesursache bei Säuglingen. Jedes Jahr werden allein in Deutschland hunderte Babys mit schweren Hirnschäden in Notaufnahmen eingeliefert – die Dunkelziffer ist noch weitaus höher.</p>
          </div>

          <div class="my-4">
            <svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 p-4 border border-rose-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Crib with baby safely placed -->
  <rect x="40" y="85" width="165" height="80" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
  <line x1="65" y1="85" x2="65" y2="165" stroke="#fecdd3" stroke-width="1.5"/>
  <line x1="95" y1="85" x2="95" y2="165" stroke="#fecdd3" stroke-width="1.5"/>
  <line x1="125" y1="85" x2="125" y2="165" stroke="#fecdd3" stroke-width="1.5"/>
  <line x1="155" y1="85" x2="155" y2="165" stroke="#fecdd3" stroke-width="1.5"/>
  <circle cx="115" cy="115" r="14" fill="#fed7aa" stroke="#fb923c" stroke-width="1.5"/>
  <path d="M100 132 C100 125 130 125 130 132 Z" fill="#38bdf8"/>
  <text x="122" y="155" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">1. Baby sicher ablegen</text>
  <!-- Step 2: Door closed & step back -->
  <g transform="translate(225, 75)">
    <rect width="145" height="95" rx="10" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
    <text x="72" y="24" fill="#e11d48" font-size="11" font-weight="extrabold" text-anchor="middle" font-family="sans-serif">STOPP & DURCHATMEN</text>
    <text x="72" y="44" fill="#475569" font-size="10" text-anchor="middle" font-family="sans-serif">2. Raum kurz verlassen</text>
    <text x="72" y="58" fill="#475569" font-size="10" text-anchor="middle" font-family="sans-serif">3. Bis 10 zählen</text>
    <rect x="15" y="68" width="115" height="20" rx="4" fill="#f43f5e"/>
    <text x="72" y="82" fill="white" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">📞 0800 111 0550</text>
  </g>
  <!-- Main Banner -->
  <g transform="translate(20, 15)">
    <rect width="210" height="28" rx="8" fill="#be123c"/>
    <text x="105" y="18" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">NIEMALS SCHÜTTELN!</text>
  </g>
  <text x="200" y="205" fill="#881337" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">Schütteln tötet Hirnzellen in 2 Sek. | Bei Überforderung: Sicher ablegen & Hilfe holen!</text>
</svg>
          </div>

          <h3 class="text-xl font-bold text-slate-900">1. Die Biomechanik & Anatomie: Warum Säuglinge so verletzlich sind</h3>
          <p>Der Körper eines Neugeborenen unterscheidet sich fundamental von dem eines älteren Kindes oder Erwachsenen:</p>
          <ul class="list-disc list-inside space-y-2 text-slate-700 text-sm">
            <li><strong>Das Missverhältnis des Kopfgewichts:</strong> Bei der Geburt macht der Kopf rund <strong>25% des gesamten Körpergewichts</strong> aus (beim Erwachsenen sind es lediglich ca. 6%).</li>
            <li><strong>Atrophische, schwache Nackenmuskulatur:</strong> Die Muskeln, Sehnen und Bänder des Halses sind in den ersten Lebensmonaten noch viel zu schwach, um diesen massiven Kopf bei ruckartigen Bewegungen auch nur ansatzweise zu stabilisieren.</li>
            <li><strong>Weite Subarachnoidalräume & zarte Brückenvenen:</strong> Das Säuglingsgehirn ist weich und gallertartig. Es schwimmt mit viel Spielraum im Nervenwasser (Liquor). Dazwischen spannen sich haarfeine Blutgefäße – die sogenannten <em>Brückenvenen</em>.</li>
          </ul>

          <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <strong class="text-amber-900 block text-base font-bold">Was passiert physikalisch beim Schütteln?</strong>
            <p class="text-amber-800 text-sm mt-1">Bereits bei einem Vor- und Zurückpeitschen des Kopfes von nur <strong>2 bis 3 Sekunden</strong> prallt das Gehirn mit enormen Scherkräften ungeschützt gegen die Innenseite des harten Schädelknochens. Die empfindlichen Brückenvenen reißen sofort ab wie gespannte Bindfäden. Es kommt zu massiven <strong>Subduralblutungen</strong> (Blutungen unter der Hirnhaut), rasantem Anschwellen des Gehirns (Hirnödem), Netzhautblutungen in den Augen und dem Abreißen von Nervenbahnen (diffuses axonales Trauma).</p>
          </div>

          <h3 class="text-xl font-bold text-slate-900">2. Die Spätfolgen: Kein Kind kommt ungeschoren davon</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-rose-700 block">• Neurologische Zerstörung:</strong>
              Spastische Lähmungen, schwere geistige und motorische Mehrfachbehinderungen, lebenslange Epilepsie (Krampfanfälle).
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-rose-700 block">• Blindheit:</strong>
              Durch die Zerreißung der Netzhautblutgefäße erblinden viele betroffene Babys ganz oder teilweise.
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-rose-700 block">• Sprach- & Lernverlust:</strong>
              Zerstörung von Sprachzentren, massive Aufmerksamkeits- und Verhaltensstörungen im Schulalter.
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <strong class="text-rose-700 block">• 20–30% Todesrate:</strong>
              Rund jedes vierte geschüttelte Baby stirbt direkt an Ort und Stelle an Hirndruck oder Atemstillstand.
            </div>
          </div>

          <div class="p-6 bg-rose-50 border-2 border-rose-300 rounded-2xl">
            <h4 class="text-rose-900 font-extrabold text-lg mb-3">DIE LEBENSRETTENDE 5-SCHRITTE-AUSZEIT FÜR ELTERN</h4>
            <ol class="space-y-2 text-sm text-slate-800 list-decimal list-inside font-medium">
              <li><strong>STOP:</strong> Sobald du spürst, dass Wut, Hitze, Frustration oder Ohnmacht in dir aufsteigen: Halte inne. Ziehe deine Hände zurück.</li>
              <li><strong>SICHER ABLEGEN:</strong> Lege dein Baby sofort flach auf den Rücken in sein sicheres Gitterbettchen oder auf eine Krabbeldecke auf dem Boden. Keine Kissen, keine Gegenstände in Reichweite.</li>
              <li><strong>RAUM VERLASSEN:</strong> Geh aus dem Zimmer und schließe die Tür hinter dir.</li>
              <li><strong>DURCHATMEN (5 MINUTEN PAUSE):</strong> Trinke ein Glas eiskaltes Wasser, wasche dir das Gesicht mit kaltem Wasser ab, atme am offenen Fenster tief ein und aus.</li>
              <li><strong>HILFE RUFEN:</strong> Wecke deinen Partner/deine Partnerin, rufe eine Freundin, Verwandte oder das <strong>Elterntelefon (0800 111 0550)</strong> an.</li>
            </ol>
            <div class="mt-4 pt-3 border-t border-rose-200 text-xs font-bold text-rose-900">
              MERKE DIR FÜRS LEBEN: Ein Baby nimmt durch 5 oder 10 Minuten Schreien im sicheren Bettchen KEINEN Schaden – durch eine einzige Sekunde Schütteln verliert es sein gesundes Leben!
            </div>
          </div>
        </div>
      `
    },
    {
      id: "safe-sleep",
      title: "2. SICHERER BABYSCHLAF (Prävention des Plötzlichen Kindstods / SIDS)",
      severity: "warning",
      icon: "moon",
      shortSummary: "Rückenlage, passender Schlafsack, rauchfreie Umgebung, 16–18°C Raumtemperatur, eigenes Bettchen im Elternschlafzimmer – KEINE Decken, Kissen, Nestchen oder Felle!",
      fullArticleHtml: `
        <div class="space-y-6">
          <div class="p-4 bg-amber-100 border-l-4 border-amber-600 rounded-r-xl">
            <h4 class="text-amber-900 font-extrabold text-lg m-0">SIDS: VON 1.285 AUF UNTER 100 FÄLLE GESENKT</h4>
            <p class="text-amber-800 text-sm mt-1 m-0">In den 1980er Jahren starben in Deutschland jährlich über 1.200 Babys am Plötzlichen Säuglingstod (SIDS). Durch konsequente Rückenlage und sichere Schlafumgebungen sank die Todesrate um mehr als 80%!</p>
          </div>

          <div class="my-4">
            <svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-100 p-4 border border-sky-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="70" width="280" height="110" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="3"/>
  <line x1="80" y1="70" x2="80" y2="180" stroke="#bae6fd" stroke-width="2"/>
  <line x1="120" y1="70" x2="120" y2="180" stroke="#bae6fd" stroke-width="2"/>
  <line x1="280" y1="70" x2="280" y2="180" stroke="#bae6fd" stroke-width="2"/>
  <line x1="320" y1="70" x2="320" y2="180" stroke="#bae6fd" stroke-width="2"/>
  <rect x="70" y="130" width="260" height="40" rx="6" fill="#e0f2fe"/>
  <path d="M175 125 C170 145 160 160 185 165 C215 165 230 160 225 125 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
  <circle cx="200" cy="108" r="18" fill="#fed7aa" stroke="#fb923c" stroke-width="2"/>
  <path d="M192 108 Q195 111 198 108" stroke="#7c2d12" stroke-width="1.5" fill="none"/>
  <path d="M202 108 Q205 111 208 108" stroke="#7c2d12" stroke-width="1.5" fill="none"/>
  <g transform="translate(15, 20)">
    <rect width="115" height="28" rx="8" fill="#0284c7"/>
    <text x="57" y="18" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">OPTIMAL 16-18°C</text>
  </g>
  <g transform="translate(255, 20)">
    <rect width="130" height="28" rx="8" fill="#e11d48"/>
    <text x="65" y="18" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">KEINE KISSEN/DECKEN</text>
  </g>
  <text x="200" y="205" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Immer Rückenlage | Feste Matratze | Leeres Bett</text>
</svg>
          </div>

          <h3 class="text-xl font-bold text-slate-900">Die 6 goldenen Säulen des sicheren Babyschlafs</h3>

          <div class="space-y-4">
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">1</span>
                Ausschließlich die RÜCKENLAGE zum Schlafen
              </h4>
              <p class="text-sm text-slate-700 mt-2">
                Lege dein Kind zu JEDEM Schlaf – ob tagsüber oder nachts – auf den Rücken. Die Bauchlage ist der größte Einzelfaktor für SIDS! In Rückenlage liegt die Luftröhre ANATOMISCH OBERHALB der Speiseröhre – Erbrochenes läuft durch die Schwerkraft ab.
              </p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">2</span>
                Babyschlafsack statt Decke
              </h4>
              <p class="text-sm text-slate-700 mt-2">
                Verwende keine Bettdecken. Ein Baby strampelt sich die Decke über das Gesicht und kann ersticken. Der Schlafsack muss am Hals passgenau sitzen.
              </p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">3</span>
                Das komplett LEERE Bettchen
              </h4>
              <p class="text-sm text-slate-700 mt-2">
                Im Babybett hat NICHTS verloren außer einer festen Matratze und deinem Baby im Schlafsack: Keine Kissen, keine Nestchen, keine Felle, keine Kuscheltiere!
              </p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">4</span>
                Optimale Raumtemperatur: 16 bis 18 Grad Celsius
              </h4>
              <p class="text-sm text-slate-700 mt-2">
                Babys schlafen am sichersten und gesündesten in einem kühlen Zimmer. Überhitzung lässt das Atemzentrum einschlafen. Keine Mütze im Haus aufsetzen!
              </p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">5</span>
                Room-Sharing: Im Elternzimmer, aber im EIGENEN Bett
              </h4>
              <p class="text-sm text-slate-700 mt-2">
                Das Baby sollte die ersten 6 bis 12 Monate im Zimmer der Eltern schlafen (am besten im Beistellbett). NIEMALS auf dem Sofa oder im Sessel mit dem Baby einschlafen!
              </p>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 class="font-bold text-slate-900 flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">6</span>
                Strikte Rauchfreiheit
              </h4>
              <p class="text-sm text-slate-700 mt-2">
                Weder in der Schwangerschaft noch in der Wohnung oder im Beisein des Babys darf geraucht werden. Nikotin schwächt das Weckzentrum im Gehirn des Säuglings gravierend.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "red-flags",
      title: "3. ROTE FLAGGEN: WANN SOFORT DER NOTARZT (112) GERUFEN WERDEN MUSS",
      severity: "danger",
      icon: "shield-alert",
      shortSummary: "Fieber unter 3 Monaten (> 38,0°C rektal), schwere Atemnot (Einziehungen & Stöhnen), Apathie/Lethargie, akute Austrocknung – hier zählt jede Minute!",
      fullArticleHtml: `
        <div class="space-y-6">
          <div class="p-4 bg-red-100 border-l-4 border-red-600 rounded-r-xl">
            <h4 class="text-red-900 font-extrabold text-lg m-0">DER PÄDIATRISCHE NOTFALL-KOMPASS</h4>
            <p class="text-red-800 text-sm mt-1 m-0">Säuglinge haben kaum körperliche Reserven. Infektionen können sich innerhalb von Stunden rasant ausbreiten (Sepsis). Vertraue deinem Bauchgefühl: Wenn dir dein Baby fremd vorkommt, fahre sofort in die Notaufnahme!</p>
          </div>

          <div class="my-4">
            <svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 p-4 border border-rose-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Skin background -->
  <rect x="50" y="50" width="300" height="120" rx="16" fill="#fde68a" opacity="0.6"/>
  <!-- Red petechiae dots -->
  <circle cx="130" cy="100" r="5" fill="#be123c"/>
  <circle cx="150" cy="115" r="4" fill="#9f1239"/>
  <circle cx="140" cy="85" r="6" fill="#881337"/>
  <circle cx="180" cy="110" r="5" fill="#be123c"/>
  <circle cx="220" cy="95" r="6" fill="#881337"/>
  <circle cx="240" cy="115" r="5" fill="#be123c"/>
  <circle cx="260" cy="85" r="4" fill="#9f1239"/>
  <!-- Transparent drinking glass pressed on right side dots -->
  <rect x="200" y="45" width="85" height="110" rx="10" fill="#ffffff" fill-opacity="0.5" stroke="#38bdf8" stroke-width="3"/>
  <line x1="205" y1="50" x2="205" y2="150" stroke="#bae6fd" stroke-width="2"/>
  <text x="242" y="145" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">Glasboden</text>
  <!-- Badges -->
  <g transform="translate(20, 15)">
    <rect width="180" height="26" rx="6" fill="#be123c"/>
    <text x="90" y="17" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">DER GLASTEST (PETECHIEN)</text>
  </g>
  <text x="200" y="200" fill="#9f1239" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Verblassen die Punkte unter Glasdruck NICHT? -> Sofort 112 rufen!</text>
</svg>
          </div>

          <h3 class="text-xl font-bold text-slate-900">Die 6 absoluten Alarmzeichen (Red Flags):</h3>

          <div class="space-y-4">
            <div class="p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <h4 class="text-red-800 font-extrabold text-base flex items-center gap-2">
                <span>🚨</span> 1. Fieber bei Babys unter 12 Wochen (≥ 38,0°C rektal)
              </h4>
              <p class="text-sm text-slate-700 mt-1">
                Jede Temperatur ab <strong>38,0°C rektal</strong> in den ersten 3 Monaten ist ein pädiatrischer Notfall (Gefahr von Sepsis oder Meningitis). Nicht abwarten! Sofort ins Krankenhaus oder Notarzt rufen.
              </p>
            </div>

            <div class="p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <h4 class="text-red-800 font-extrabold text-base flex items-center gap-2">
                <span>🚨</span> 2. Schwere Atemnot & Atemdepression
              </h4>
              <p class="text-sm text-slate-700 mt-1">
                Einziehungen der Haut zwischen den Rippen, Nasenflügeln, klickendes Stöhnen beim Ausatmen oder bläuliche Lippen erfordern sofortiges Handeln!
              </p>
            </div>

            <div class="p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <h4 class="text-red-800 font-extrabold text-base flex items-center gap-2">
                <span>🚨</span> 3. Apathie, Lethargie & 'Floppy Baby'
              </h4>
              <p class="text-sm text-slate-700 mt-1">
                Das Baby lässt sich nicht wecken, reagiert nicht auf Ansprache, Arme und Beine hängen kraftlos herab, schwaches wimmerndes Weinen.
              </p>
            </div>

            <div class="p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <h4 class="text-red-800 font-extrabold text-base flex items-center gap-2">
                <span>🚨</span> 4. Akute Dehydrierung (Austrocknung)
              </h4>
              <p class="text-sm text-slate-700 mt-1">
                Eingesunkene Fontanelle, trockene Schleimhäute, keine Tränen beim Weinen, weniger als 4 nasse Windeln in 24h, stehende Hautfalten.
              </p>
            </div>

            <div class="p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <h4 class="text-red-800 font-extrabold text-base flex items-center gap-2">
                <span>🚨</span> 5. Schwallerbrechen mit grüner Galle
              </h4>
              <p class="text-sm text-slate-700 mt-1">
                Grünlich/galliges Erbrechen oder explosionsartiges Schwallerbrechen nach jeder Mahlzeit (Verdacht auf Darmverschluss oder Magenpförtnerkrampf).
              </p>
            </div>

            <div class="p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <h4 class="text-red-800 font-extrabold text-base flex items-center gap-2">
                <span>🚨</span> 6. Petechien (Punktförmige Hautblutungen)
              </h4>
              <p class="text-sm text-slate-700 mt-1">
                Dunkelrote Punkte auf der Haut, die beim Draufdrücken mit einem durchsichtigen Trinkglas NICHT verblassen (Glastest positiv = V.a. Meningokokken-Sepsis).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "never-honey-water",
      title: "4. VERBOTENE NAHRUNGSMITTEL IM 1. JAHR: KEIN HONIG & KEIN WASSER",
      severity: "warning",
      icon: "x-octagon",
      shortSummary: "Honig führt zu lebensbedrohlichem Säuglingsbotulismus (Atemlähmung). Zusätzliches Wasser bei vollgestillten/Pre-Säuglingen führt zu toxischer Wasservergiftung (Hirnödem)!",
      fullArticleHtml: `
        <div class="space-y-6">
          <div class="p-4 bg-amber-100 border-l-4 border-amber-600 rounded-r-xl">
            <h4 class="text-amber-900 font-extrabold text-lg m-0">ZWEI UNSCHEINBARE SUBSTANZEN – HÖCHSTE GEFAHR</h4>
            <p class="text-amber-800 text-sm mt-1 m-0">Viele Laien raten: „Gib ihm Fencheltee mit Honig gegen Bauchweh“ oder „Es ist heiß, er braucht Wasser“. Beide Ratschläge sind potenziell tödlich!</p>
          </div>

          <div class="my-4">
            <svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 p-4 border border-emerald-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(40, 40)">
    <rect width="140" height="130" rx="16" fill="#fff1f2" stroke="#fecdd3" stroke-width="2"/>
    <circle cx="70" cy="60" r="28" fill="#881337"/>
    <path d="M68 32 C68 25 74 20 80 18" stroke="#15803d" stroke-width="3" fill="none"/>
    <circle cx="70" cy="60" r="22" fill="#9f1239" opacity="0.8"/>
    <circle cx="115" cy="25" r="14" fill="#e11d48"/>
    <text x="115" y="30" fill="white" font-size="16" font-weight="bold" text-anchor="middle" font-family="sans-serif">✕</text>
    <text x="70" y="112" fill="#9f1239" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">GANZ = ERSTICKUNGSGEFAHR</text>
  </g>
  <g transform="translate(220, 40)">
    <rect width="140" height="130" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
    <path d="M50 45 Q58 45 60 75 Q48 70 50 45 Z" fill="#15803d"/>
    <path d="M65 45 Q73 45 75 75 Q63 70 65 45 Z" fill="#16a34a"/>
    <path d="M80 45 Q88 45 90 75 Q78 70 80 45 Z" fill="#15803d"/>
    <path d="M95 45 Q103 45 105 75 Q93 70 95 45 Z" fill="#16a34a"/>
    <circle cx="115" cy="25" r="14" fill="#16a34a"/>
    <text x="115" y="30" fill="white" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif">✓</text>
    <text x="70" y="112" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">LÄNGS GEVIERTELT = SICHER</text>
  </g>
  <text x="200" y="200" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Trauben, Kirschtomaten & Heidelbeeren immer vierteln!</text>
</svg>
          </div>

          <h3 class="text-xl font-bold text-slate-900">1. Warum Honig vor dem 1. Geburtstag absolut tabu ist</h3>
          <p>Honig kann Sporen des Bakteriums <em>Clostridium botulinum</em> enthalten. Im unreifen Magen-Darm-Trakt des Säuglings keimen diese Sporen aus und bilden Botulinumtoxin – eines der stärksten Nervengifte:</p>
          <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li>Lähmung der Atemmuskulatur und Schlucklähmung</li>
            <li>Schlaffheit des gesamten Körpers, Verstopfung, Tod durch Ersticken</li>
            <li>Kein Honig, kein Ahornsirup, Schnuller niemals mit Honig bestreichen!</li>
          </ul>

          <h3 class="text-xl font-bold text-slate-900 mt-6">2. Warum Babys unter 6 Monaten KEIN Wasser trinken dürfen</h3>
          <p>Muttermilch und Pre-Nahrung bestehen zu ca. 88% aus Wasser mit der exakten Elektrolyt-Balance. Reines Wasser führt zu einer <strong>Wasservergiftung (Hyponatriämie)</strong>:</p>
          <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li>Unreife Nieren können freies Wasser nicht rasch ausscheiden</li>
            <li>Blut verdünnt sich, Natriumspiegel fällt ab</li>
            <li>Gehirn saugt Wasser auf: Akutes Hirnödem, Krämpfe, Koma</li>
            <li>An heißen Tagen: Einfach häufiger anlegen oder Pre-Milch anbieten!</li>
          </ul>
        </div>
      `
    }
  ];
  const EMERGENCY_PROTOCOLS = [
  {
    "id": "cpr",
    "title": "Herz-Lungen-Wiederbelebung beim Säugling (CPR)",
    "badge": "Lebensgefahr",
    "shortSummary": "Keine Reaktion & keine normale Atmung: 5x Vorbeatmung, dann 30 Herzdruckmassagen im Wechsel mit 2 Beatmungen (30:2).",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 p-4 border border-rose-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"100%\" height=\"100%\" fill=\"none\"/>\n  <circle cx=\"200\" cy=\"110\" r=\"90\" fill=\"#fee2e2\" stroke=\"#f87171\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/>\n  <path d=\"M120 150 C120 120 150 100 180 105 C190 95 210 95 220 105 C250 100 280 120 280 150 Z\" fill=\"#fed7aa\" stroke=\"#fb923c\" stroke-width=\"2\"/>\n  <circle cx=\"200\" cy=\"80\" r=\"32\" fill=\"#fed7aa\" stroke=\"#fb923c\" stroke-width=\"2\"/>\n  <circle cx=\"190\" cy=\"78\" r=\"3\" fill=\"#7c2d12\"/>\n  <circle cx=\"210\" cy=\"78\" r=\"3\" fill=\"#7c2d12\"/>\n  <path d=\"M194 90 Q200 95 206 90\" stroke=\"#7c2d12\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"193\" y=\"115\" width=\"6\" height=\"35\" rx=\"3\" fill=\"#ef4444\"/>\n  <rect x=\"201\" y=\"115\" width=\"6\" height=\"35\" rx=\"3\" fill=\"#ef4444\"/>\n  <path d=\"M200 155 L200 175 M195 170 L200 178 L205 170\" stroke=\"#b91c1c\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <g transform=\"translate(20, 25)\">\n    <rect width=\"110\" height=\"30\" rx=\"8\" fill=\"#e11d48\"/>\n    <text x=\"55\" y=\"20\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">30 DRÜCKUNGEN</text>\n  </g>\n  <g transform=\"translate(270, 25)\">\n    <rect width=\"110\" height=\"30\" rx=\"8\" fill=\"#0284c7\"/>\n    <text x=\"55\" y=\"20\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">2 BEATMUNGEN</text>\n  </g>\n  <text x=\"200\" y=\"205\" fill=\"#991b1b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">2 Finger ca. 4 cm tief | Frequenz 100-120/Min | 5x Vorbeatmung</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-rose-600 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">REANIMATIONS-ALGORITHMUS BEIM SÄUGLING (0–12 MONATE)</h3>\n              <p class=\"text-xs text-rose-100 mt-1 m-0\">Im Unterschied zum Erwachsenen ersticken Säuglinge meist durch Sauerstoffmangel (Hypoxie). Daher beginnen wir IMMER mit 5 Beatmungen!</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 p-4 border border-rose-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"100%\" height=\"100%\" fill=\"none\"/>\n  <circle cx=\"200\" cy=\"110\" r=\"90\" fill=\"#fee2e2\" stroke=\"#f87171\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/>\n  <path d=\"M120 150 C120 120 150 100 180 105 C190 95 210 95 220 105 C250 100 280 120 280 150 Z\" fill=\"#fed7aa\" stroke=\"#fb923c\" stroke-width=\"2\"/>\n  <circle cx=\"200\" cy=\"80\" r=\"32\" fill=\"#fed7aa\" stroke=\"#fb923c\" stroke-width=\"2\"/>\n  <circle cx=\"190\" cy=\"78\" r=\"3\" fill=\"#7c2d12\"/>\n  <circle cx=\"210\" cy=\"78\" r=\"3\" fill=\"#7c2d12\"/>\n  <path d=\"M194 90 Q200 95 206 90\" stroke=\"#7c2d12\" stroke-width=\"2\" fill=\"none\"/>\n  <rect x=\"193\" y=\"115\" width=\"6\" height=\"35\" rx=\"3\" fill=\"#ef4444\"/>\n  <rect x=\"201\" y=\"115\" width=\"6\" height=\"35\" rx=\"3\" fill=\"#ef4444\"/>\n  <path d=\"M200 155 L200 175 M195 170 L200 178 L205 170\" stroke=\"#b91c1c\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <g transform=\"translate(20, 25)\">\n    <rect width=\"110\" height=\"30\" rx=\"8\" fill=\"#e11d48\"/>\n    <text x=\"55\" y=\"20\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">30 DRÜCKUNGEN</text>\n  </g>\n  <g transform=\"translate(270, 25)\">\n    <rect width=\"110\" height=\"30\" rx=\"8\" fill=\"#0284c7\"/>\n    <text x=\"55\" y=\"20\" fill=\"white\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">2 BEATMUNGEN</text>\n  </g>\n  <text x=\"200\" y=\"205\" fill=\"#991b1b\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">2 Finger ca. 4 cm tief | Frequenz 100-120/Min | 5x Vorbeatmung</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">1. BEWUSSTSEIN PRÜFEN:</strong>\n                <p class=\"text-slate-700 text-xs\">Laut ansprechen, sanft an den Fußsohlen kitzeln oder die Wange streicheln. Keine Reaktion? -> Sofort laut um Hilfe rufen!</p>\n              </div>\n\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">2. ATEMWEGE FREIMACHEN:</strong>\n                <p class=\"text-slate-700 text-xs\">Baby auf eine feste Unterlage (Tisch oder Boden) legen. Kopf vorsichtig in die <strong>Neutralposition / Schnüffelposition</strong> bringen (Kinn leicht anheben). <em>Achtung: Den Kopf beim Säugling NIEMALS überstrecken, da die enge Luftröhre sonst abknickt!</em></p>\n              </div>\n\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">3. ATMUNG PRÜFEN (10 SEKUNDEN):</strong>\n                <p class=\"text-slate-700 text-xs\">Ohr über Mund und Nase halten, Blick auf den Brustkorb: Hebt sich der Brustkorb? Höre ich Atemgeräusche? Fühle ich Atemluft an der Wange? Keine normale Atmung oder nur unregelmäßiges Schnappen?</p>\n              </div>\n\n              <div class=\"p-4 bg-rose-50 border border-rose-300 rounded-xl\">\n                <strong class=\"text-rose-900 font-bold block mb-1\">4. 5 INITIALE BEATMUNGEN:</strong>\n                <p class=\"text-slate-700 text-xs\">Umschließe mit deinem Mund <strong>Mund UND Nase</strong> des Babys gleichzeitig. Blase sanft Luft hinein (nur das Volumen deiner Wangen, nicht aus voller Lunge!), ca. 1 Sekunde lang, bis sich der Brustkorb leicht sichtbar hebt. 5-mal wiederholen.</p>\n              </div>\n\n              <div class=\"p-4 bg-rose-50 border border-rose-300 rounded-xl\">\n                <strong class=\"text-rose-900 font-bold block mb-1\">5. 30 HERZDRUCKMASSAGEN (2 FINGER):</strong>\n                <p class=\"text-slate-700 text-xs\">Platziere <strong>zwei Finger</strong> (Zeige- und Mittelfinger) auf der unteren Hälfte des Brustbeins (eine Fingerbreite unterhalb der Brustwarzenlinie). Drücke das Brustbein ca. <strong>4 cm tief (ein Drittel der Brustkorbtiefe)</strong> schnell und kräftig nach unten. Frequenz: 100 bis 120 Mal pro Minute.</p>\n              </div>\n\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">6. WECHSEL 30:2 FORTSETZEN:</strong>\n                <p class=\"text-slate-700 text-xs\">Immer 30 Drückungen im Wechsel mit 2 Beatmungen fortsetzen, bis der Notarzt (112) eintrifft oder das Baby wieder normale Atmung und Lebenszeichen zeigt. Wenn du allein bist: Führe 1 Minute CPR durch, rufe dann sofort die 112 (Lautsprecher an!) und setze CPR sofort fort.</p>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "id": "choking",
    "title": "Akute Atemwegsverlegung / Verschlucken (Ersticken)",
    "badge": "Akute Erstickungsgefahr",
    "shortSummary": "Lautloses Ersticken: 5 Schläge auf den Rücken in Kopftieflage, danach 5 Brustdrücke. Niemals blind im Hals stochern!",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M50 180 L220 140 L350 160\" stroke=\"#78350f\" stroke-width=\"18\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M140 130 C170 110 240 100 270 125 C250 145 170 155 140 130 Z\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <circle cx=\"115\" cy=\"140\" r=\"28\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <path d=\"M95 160 Q115 170 135 155\" stroke=\"#f97316\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\n  <circle cx=\"210\" cy=\"115\" r=\"16\" fill=\"#f87171\" opacity=\"0.4\"/>\n  <circle cx=\"210\" cy=\"115\" r=\"8\" fill=\"#ef4444\"/>\n  <path d=\"M235 65 L215 105 M208 95 L215 105 L225 103\" stroke=\"#b91c1c\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <g transform=\"translate(15, 20)\">\n    <rect width=\"130\" height=\"28\" rx=\"8\" fill=\"#ea580c\"/>\n    <text x=\"65\" y=\"18\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">5 RÜCKENSCHLÄGE</text>\n  </g>\n  <g transform=\"translate(250, 20)\">\n    <rect width=\"135\" height=\"28\" rx=\"8\" fill=\"#e11d48\"/>\n    <text x=\"67\" y=\"18\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">5 BRUSTDRÜCKE</text>\n  </g>\n  <text x=\"200\" y=\"205\" fill=\"#7c2d12\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Kopftieflage auf Unterarm | Kiefer stützen, Hals frei!</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-amber-600 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">ERSTICKUNGSNOTFALL BEIM SÄUGLING</h3>\n              <p class=\"text-xs text-amber-100 mt-1 m-0\">Wichtigster Unterschied: Lautes Würgen (Gagging) ist harmlos. Völlig lautloses Schnappen nach Luft mit Blauverfärbung ist ein tödlicher Notfall!</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M50 180 L220 140 L350 160\" stroke=\"#78350f\" stroke-width=\"18\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M140 130 C170 110 240 100 270 125 C250 145 170 155 140 130 Z\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <circle cx=\"115\" cy=\"140\" r=\"28\" fill=\"#fed7aa\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <path d=\"M95 160 Q115 170 135 155\" stroke=\"#f97316\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\"/>\n  <circle cx=\"210\" cy=\"115\" r=\"16\" fill=\"#f87171\" opacity=\"0.4\"/>\n  <circle cx=\"210\" cy=\"115\" r=\"8\" fill=\"#ef4444\"/>\n  <path d=\"M235 65 L215 105 M208 95 L215 105 L225 103\" stroke=\"#b91c1c\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <g transform=\"translate(15, 20)\">\n    <rect width=\"130\" height=\"28\" rx=\"8\" fill=\"#ea580c\"/>\n    <text x=\"65\" y=\"18\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">5 RÜCKENSCHLÄGE</text>\n  </g>\n  <g transform=\"translate(250, 20)\">\n    <rect width=\"135\" height=\"28\" rx=\"8\" fill=\"#e11d48\"/>\n    <text x=\"67\" y=\"18\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">5 BRUSTDRÜCKE</text>\n  </g>\n  <text x=\"200\" y=\"205\" fill=\"#7c2d12\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Kopftieflage auf Unterarm | Kiefer stützen, Hals frei!</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">1. SCHRITT: 5 RÜCKENSCHLÄGE IN KOPFTIEFLAGE</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Lege das Baby bäuchlings längs über deinen Unterarm.</li>\n                  <li>Stütze mit deinen Fingern den <strong>Unterkiefer</strong> des Babys (nicht den Hals eindrücken!).</li>\n                  <li>Senke den Arm so ab, dass der Kopf des Babys <strong>deutlich tiefer als das Becken</strong> liegt.</li>\n                  <li>Schlage mit dem Handballen deiner freien Hand <strong>5-mal kräftig und gezielt zwischen die Schulterblätter</strong> nach vorne-unten.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">2. SCHRITT: 5 BRUSTKOMPRESSIONEN</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Ist der Fremdkörper nicht draußen: Drehe das Baby auf den Rücken auf deinen anderen Unterarm (Kopf bleibt tiefer als Körper).</li>\n                  <li>Drücke mit 2 Fingern 5-mal kräftig mittig auf das Brustbein (wie bei der Herzdruckmassage).</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">3. SCHRITT: WIEDERHOLEN & NOTRUF</strong>\n                <p class=\"text-slate-700 text-xs\">Wiederhole 5 Rückenschläge und 5 Brustkompressionen im Wechsel. Rufe sofort 112 (Lautsprecher an!). Wird das Baby bewusstlos: Sofort mit Reanimation (CPR 30:2) beginnen!</p>\n              </div>\n\n              <div class=\"p-4 bg-red-100 border border-red-300 rounded-xl text-xs text-red-900 font-bold\">\n                ⛔ ABSOLUTES VERBOT: Greife NIEMALS blind mit den Fingern in den Mund oder Rachen! Dadurch schiebst du den Fremdkörper nur noch tiefer in den Kehlkopf hinein. Nur sichtbare Gegenstände mit zwei Fingern herausnehmen.\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "id": "febrile-seizure",
    "title": "Fieberkrampf (Febrile Seizure)",
    "badge": "Notfall",
    "shortSummary": "Plötzliche Zuckungen und Bewusstlosigkeit bei schnellem Fieberanstieg: Ruhe bewahren, auf die Seite legen, Zeit stoppen, 112 rufen!",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Baby in recovery position -->\n  <path d=\"M120 120 C140 100 220 100 270 120 C270 150 200 160 140 155 Z\" fill=\"#fed7aa\" stroke=\"#f97316\" stroke-width=\"2\"/>\n  <circle cx=\"115\" cy=\"120\" r=\"24\" fill=\"#fed7aa\" stroke=\"#f97316\" stroke-width=\"2\"/>\n  <path d=\"M130 145 Q160 165 190 145\" stroke=\"#ea580c\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/>\n  <!-- Clock / Timer -->\n  <g transform=\"translate(300, 40)\">\n    <circle cx=\"30\" cy=\"30\" r=\"28\" fill=\"#ffffff\" stroke=\"#ea580c\" stroke-width=\"3\"/>\n    <line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"15\" stroke=\"#ea580c\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"30\" y1=\"30\" x2=\"42\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <text x=\"30\" y=\"72\" fill=\"#9a3412\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">ZEIT STOPPEN</text>\n  </g>\n  <!-- Badges -->\n  <g transform=\"translate(20, 20)\">\n    <rect width=\"180\" height=\"28\" rx=\"8\" fill=\"#c2410c\"/>\n    <text x=\"90\" y=\"18\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">FIEBERKRAMPF-REGELN</text>\n  </g>\n  <text x=\"180\" y=\"195\" fill=\"#7c2d12\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Auf die Seite legen | Nicht festhalten | Nichts in den Mund!</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-orange-600 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">DER FIEBERKRAMPF BEIM BABY</h3>\n              <p class=\"text-xs text-orange-100 mt-1 m-0\">Tritt bei 3–5% aller Kinder zwischen dem 6. Lebensmonat und 5. Lebensjahr auf. Sieht dramatisch aus, hinterlässt bei unkompliziertem Verlauf aber keine Hirnschäden!</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Baby in recovery position -->\n  <path d=\"M120 120 C140 100 220 100 270 120 C270 150 200 160 140 155 Z\" fill=\"#fed7aa\" stroke=\"#f97316\" stroke-width=\"2\"/>\n  <circle cx=\"115\" cy=\"120\" r=\"24\" fill=\"#fed7aa\" stroke=\"#f97316\" stroke-width=\"2\"/>\n  <path d=\"M130 145 Q160 165 190 145\" stroke=\"#ea580c\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/>\n  <!-- Clock / Timer -->\n  <g transform=\"translate(300, 40)\">\n    <circle cx=\"30\" cy=\"30\" r=\"28\" fill=\"#ffffff\" stroke=\"#ea580c\" stroke-width=\"3\"/>\n    <line x1=\"30\" y1=\"30\" x2=\"30\" y2=\"15\" stroke=\"#ea580c\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <line x1=\"30\" y1=\"30\" x2=\"42\" y2=\"30\" stroke=\"#ea580c\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <text x=\"30\" y=\"72\" fill=\"#9a3412\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">ZEIT STOPPEN</text>\n  </g>\n  <!-- Badges -->\n  <g transform=\"translate(20, 20)\">\n    <rect width=\"180\" height=\"28\" rx=\"8\" fill=\"#c2410c\"/>\n    <text x=\"90\" y=\"18\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">FIEBERKRAMPF-REGELN</text>\n  </g>\n  <text x=\"180\" y=\"195\" fill=\"#7c2d12\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Auf die Seite legen | Nicht festhalten | Nichts in den Mund!</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-emerald-50 border border-emerald-200 rounded-xl\">\n                <strong class=\"text-emerald-900 font-bold block mb-1\">✅ SOFORTMASSNAHMEN (DO'S):</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Ruhe bewahren:</strong> Ein unkomplizierter Fieberkrampf endet meist nach 2 bis 3 Minuten von selbst.</li>\n                  <li><strong>Auf die Seite legen:</strong> Lege das Kind flach auf den Boden oder eine Decke auf die Seite (stabile Seitenlage), damit Speichel oder Erbrochenes abfließen kann.</li>\n                  <li><strong>Verletzungen verhindern:</strong> Gefährliche Gegenstände, Ecken und Kanten aus der Umgebung entfernen. Kopf weich abpolstern.</li>\n                  <li><strong>ZEIT STOPPEN:</strong> Blicke sofort auf die Uhr und messe die genaue Dauer des Krampfes! Das ist die wichtigste Information für den Notarzt.</li>\n                  <li><strong>NOTRUF 112:</strong> Bei jedem ersten Fieberkrampf IMMER den Notarzt rufen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-rose-50 border border-rose-200 rounded-xl\">\n                <strong class=\"text-rose-900 font-bold block mb-1\">⛔ ABSOLUTE VERBOTE (DON'TS):</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Niemals festhalten:</strong> Versuche nicht, die zuckenden Gliedmaßen gewaltsam festzuhalten (Gefahr von Knochenbrüchen).</li>\n                  <li><strong>Nichts in den Mund stecken:</strong> Kein Beißkeil, kein Löffel, keine Finger! Erstickungsgefahr und Zähne können abbrechen.</li>\n                  <li><strong>Kein Wasser einflößen:</strong> Bewusstlose Kinder können nicht schlucken -> Erstickungsgefahr!</li>\n                  <li><strong>Niemals schütteln:</strong> Auch nicht, um das Kind 'wachzubekommen'!</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "id": "fall-trauma",
    "title": "Sturz vom Wickeltisch / Schädel-Hirn-Trauma",
    "badge": "Unfallchirurgie",
    "shortSummary": "Häufigster Unfall im 1. Lebensjahr: Pupillen kontrollieren, Alarmsignale bei Hirnerschütterung / Schädelbruch erkennen.",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"50\" y=\"95\" width=\"300\" height=\"70\" rx=\"8\" fill=\"#ffffff\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <rect x=\"70\" y=\"80\" width=\"260\" height=\"25\" rx=\"4\" fill=\"#fed7aa\"/>\n  <rect x=\"65\" y=\"70\" width=\"10\" height=\"35\" rx=\"3\" fill=\"#ea580c\"/>\n  <rect x=\"325\" y=\"70\" width=\"10\" height=\"35\" rx=\"3\" fill=\"#ea580c\"/>\n  <circle cx=\"160\" cy=\"78\" r=\"14\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n  <rect x=\"175\" y=\"73\" width=\"40\" height=\"18\" rx=\"6\" fill=\"#67e8f9\"/>\n  <g transform=\"translate(180, 45)\">\n    <path d=\"M10 25 C10 15 25 15 25 25 L25 35 L10 35 Z\" fill=\"#f97316\"/>\n    <rect x=\"5\" y=\"0\" width=\"30\" height=\"25\" rx=\"6\" fill=\"#ea580c\"/>\n    <text x=\"20\" y=\"16\" fill=\"white\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">HAND</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"210\" height=\"26\" rx=\"6\" fill=\"#c2410c\"/>\n    <text x=\"105\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">WICKELTISCH-SICHERHEIT</text>\n  </g>\n  <text x=\"200\" y=\"192\" fill=\"#9a3412\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Eine Hand bleibt IMMER am Kind! | Alles vorher griffbereit legen</text>\n  <text x=\"200\" y=\"208\" fill=\"#c2410c\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Nach Sturz: 48h Pupillen, Erbrechen und Bewusstsein kontrollieren!</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-red-600 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">STURZ VOM WICKELTISCH ODER BETT</h3>\n              <p class=\"text-xs text-red-100 mt-1 m-0\">Ein Sturz aus ca. 80–100 cm Höhe auf harten Fliesenboden birgt die Gefahr von Schädelknochenbrüchen und intrakraniellen Blutungen.</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"50\" y=\"95\" width=\"300\" height=\"70\" rx=\"8\" fill=\"#ffffff\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n  <rect x=\"70\" y=\"80\" width=\"260\" height=\"25\" rx=\"4\" fill=\"#fed7aa\"/>\n  <rect x=\"65\" y=\"70\" width=\"10\" height=\"35\" rx=\"3\" fill=\"#ea580c\"/>\n  <rect x=\"325\" y=\"70\" width=\"10\" height=\"35\" rx=\"3\" fill=\"#ea580c\"/>\n  <circle cx=\"160\" cy=\"78\" r=\"14\" fill=\"#fde68a\" stroke=\"#d97706\" stroke-width=\"1.5\"/>\n  <rect x=\"175\" y=\"73\" width=\"40\" height=\"18\" rx=\"6\" fill=\"#67e8f9\"/>\n  <g transform=\"translate(180, 45)\">\n    <path d=\"M10 25 C10 15 25 15 25 25 L25 35 L10 35 Z\" fill=\"#f97316\"/>\n    <rect x=\"5\" y=\"0\" width=\"30\" height=\"25\" rx=\"6\" fill=\"#ea580c\"/>\n    <text x=\"20\" y=\"16\" fill=\"white\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">HAND</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"210\" height=\"26\" rx=\"6\" fill=\"#c2410c\"/>\n    <text x=\"105\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">WICKELTISCH-SICHERHEIT</text>\n  </g>\n  <text x=\"200\" y=\"192\" fill=\"#9a3412\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Eine Hand bleibt IMMER am Kind! | Alles vorher griffbereit legen</text>\n  <text x=\"200\" y=\"208\" fill=\"#c2410c\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Nach Sturz: 48h Pupillen, Erbrechen und Bewusstsein kontrollieren!</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-red-50 border border-red-200 rounded-xl\">\n                <strong class=\"text-red-900 font-bold block mb-1\">🚨 SOFORT 112 / NOTAUFNAHME BEI DIESEN ZEICHEN:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Bewusstlosigkeit:</strong> Auch wenn das Baby nur für wenige Sekunden 'weggetreten' war oder nicht sofort geschrien hat.</li>\n                  <li><strong>Erbrechen:</strong> Wiederholtes Erbrechen (mehr als 1x nach dem Sturz).</li>\n                  <li><strong>Ungleiche Pupillen:</strong> Eine Pupille ist größer als die andere oder reagiert nicht auf Licht.</li>\n                  <li><strong>Blut oder klare Flüssigkeit:</strong> Aus Ohr oder Nase läuft Blut oder wässrige Flüssigkeit (Verdacht auf Schädelbasisbruch!).</li>\n                  <li><strong>Delle am Kopf:</strong> Fühlbare Stufenbildung oder weiche, teigige Beule am Schädelknochen.</li>\n                  <li><strong>Apathie:</strong> Baby schläft sofort tief ein und lässt sich kaum noch wecken.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">Überwachungsregel für 48 Stunden:</strong>\n                Auch wenn das Kind nach dem Weinen wieder munter wirkt: In den ersten 48 Stunden nach dem Sturz alle 2 bis 3 Stunden wecken und ansprechen, um das Bewusstsein zu prüfen. Bei Verhaltensänderungen sofort in die Klinik!\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "id": "poisoning",
    "title": "Vergiftung & Verätzung (Giftnotruf)",
    "badge": "Toxikologie",
    "shortSummary": "Putzmittel, Spültabs, Medikamente oder giftige Pflanzen verschluckt: Giftnotruf 030 19240 wählen! Niemals Erbrechen auslösen!",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 p-4 border border-purple-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"translate(25, 45)\">\n    <rect width=\"155\" height=\"125\" rx=\"12\" fill=\"#ffffff\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n    <circle cx=\"77\" cy=\"38\" r=\"20\" fill=\"#ede9fe\"/>\n    <text x=\"77\" y=\"45\" fill=\"#6d28d9\" font-size=\"18\" text-anchor=\"middle\">☠️</text>\n    <text x=\"77\" y=\"78\" fill=\"#5b21b6\" font-size=\"11\" font-weight=\"extrabold\" text-anchor=\"middle\" font-family=\"sans-serif\">GIFTNOTRUF</text>\n    <rect x=\"22\" y=\"88\" width=\"110\" height=\"22\" rx=\"6\" fill=\"#7c3aed\"/>\n    <text x=\"77\" y=\"103\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">030 19240</text>\n  </g>\n  <g transform=\"translate(195, 45)\">\n    <rect width=\"180\" height=\"125\" rx=\"12\" fill=\"#fff1f2\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"24\" fill=\"#be123c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">LEBENSWICHTIG:</text>\n    <text x=\"90\" y=\"48\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ KEIN Erbrechen auslösen!</text>\n    <text x=\"90\" y=\"68\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ KEINE Milch trinken lassen!</text>\n    <text x=\"90\" y=\"90\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Verpackung/Pflanze sichern</text>\n    <text x=\"90\" y=\"105\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">& Giftzentrale anrufen</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"190\" height=\"26\" rx=\"6\" fill=\"#6d28d9\"/>\n    <text x=\"95\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">VERGIFTUNG & VERÄTZUNG</text>\n  </g>\n  <text x=\"200\" y=\"200\" fill=\"#4c1d95\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Spül-Tabs, Putzmittel, Pflanzen & Medikamente hoch verschließen!</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-purple-700 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">AKUTE VERGIFTUNG ODER VERÄTZUNG</h3>\n              <p class=\"text-xs text-purple-100 mt-1 m-0\">Typische Gefahrenquellen: Bunte Waschmittel-Pods, Spülmaschinen-Tabs, Zigarettenkippen, Zimmerpflanzen (z. B. Dieffenbachie), Lampenöle und herumliegende Medikamente.</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 p-4 border border-purple-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"translate(25, 45)\">\n    <rect width=\"155\" height=\"125\" rx=\"12\" fill=\"#ffffff\" stroke=\"#7c3aed\" stroke-width=\"2\"/>\n    <circle cx=\"77\" cy=\"38\" r=\"20\" fill=\"#ede9fe\"/>\n    <text x=\"77\" y=\"45\" fill=\"#6d28d9\" font-size=\"18\" text-anchor=\"middle\">☠️</text>\n    <text x=\"77\" y=\"78\" fill=\"#5b21b6\" font-size=\"11\" font-weight=\"extrabold\" text-anchor=\"middle\" font-family=\"sans-serif\">GIFTNOTRUF</text>\n    <rect x=\"22\" y=\"88\" width=\"110\" height=\"22\" rx=\"6\" fill=\"#7c3aed\"/>\n    <text x=\"77\" y=\"103\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">030 19240</text>\n  </g>\n  <g transform=\"translate(195, 45)\">\n    <rect width=\"180\" height=\"125\" rx=\"12\" fill=\"#fff1f2\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"24\" fill=\"#be123c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">LEBENSWICHTIG:</text>\n    <text x=\"90\" y=\"48\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ KEIN Erbrechen auslösen!</text>\n    <text x=\"90\" y=\"68\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ KEINE Milch trinken lassen!</text>\n    <text x=\"90\" y=\"90\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Verpackung/Pflanze sichern</text>\n    <text x=\"90\" y=\"105\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">& Giftzentrale anrufen</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"190\" height=\"26\" rx=\"6\" fill=\"#6d28d9\"/>\n    <text x=\"95\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">VERGIFTUNG & VERÄTZUNG</text>\n  </g>\n  <text x=\"200\" y=\"200\" fill=\"#4c1d95\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Spül-Tabs, Putzmittel, Pflanzen & Medikamente hoch verschließen!</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-purple-50 border border-purple-200 rounded-xl\">\n                <strong class=\"text-purple-900 font-bold block mb-1\">📞 SOFORTIGE MASSNAHMEN:</strong>\n                <ol class=\"list-decimal list-inside space-y-1.5 text-slate-700 text-xs\">\n                  <li><strong>Reste entfernen:</strong> Substanzreste vorsichtig mit einem Tuch aus Mundhöhle entfernen. Nicht schlucken lassen.</li>\n                  <li><strong>Giftnotruf wählen (Berlin: 030 19240, Bonn: 0228 19240):</strong> Die Experten sagen dir genau, was zu tun ist. Bei Bewusstlosigkeit oder Atemnot sofort 112 rufen!</li>\n                  <li><strong>Verpackung bereithalten:</strong> Genaue Produktbezeichnung, Inhaltsstoffe und geschätzte Menge angeben.</li>\n                </ol>\n              </div>\n\n              <div class=\"p-4 bg-rose-50 border border-rose-200 rounded-xl\">\n                <strong class=\"text-rose-900 font-bold block mb-1\">⛔ TÖDLICHE FEHLER VERMEIDEN:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>NIEMALS Erbrechen auslösen:</strong> Bei ätzenden Stoffen (Säuren, Laugen, Spültabs) verätzt die Speiseröhre beim Rückfluss ein zweites Mal! Bei schäumenden Stoffen droht Schaumbildung in der Lunge (Ersticken).</li>\n                  <li><strong>KEINE Milch geben:</strong> Milch beschleunigt bei fettlöslichen Giften die Giftaufnahme im Darm!</li>\n                  <li><strong>Kein Salzwasser geben:</strong> Führt bei Babys zu tödlicher Hypernatriämie.</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "id": "burns",
    "title": "Verbrennung & Verbrühung",
    "badge": "Thermischer Notfall",
    "shortSummary": "Tee, Kaffee, Badewasser: Handwarm kühlen (10–15 Min.), niemals eiskalt, keine Hausmittel, Brandblasen geschlossen halten.",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-orange-100 p-4 border border-rose-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"translate(25, 45)\">\n    <rect width=\"155\" height=\"125\" rx=\"12\" fill=\"#ffffff\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n    <text x=\"77\" y=\"28\" fill=\"#c2410c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">ERSTE HILFE</text>\n    <text x=\"77\" y=\"55\" fill=\"#0284c7\" font-size=\"20\" text-anchor=\"middle\">💧</text>\n    <text x=\"77\" y=\"80\" fill=\"#0369a1\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">10–15 Min kühlen</text>\n    <text x=\"77\" y=\"100\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Handwarm (ca. 20°C)</text>\n    <text x=\"77\" y=\"115\" fill=\"#991b1b\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">NIEMALS EISKALT!</text>\n  </g>\n  <g transform=\"translate(195, 45)\">\n    <rect width=\"180\" height=\"125\" rx=\"12\" fill=\"#fff1f2\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"24\" fill=\"#be123c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">STRIKTE VERBOTE</text>\n    <text x=\"90\" y=\"48\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ Keine Brandblasen öffnen</text>\n    <text x=\"90\" y=\"68\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ Keine Hausmittel (Mehl, Öl)</text>\n    <text x=\"90\" y=\"88\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ Eingebrannte Kleidung dranlassen</text>\n    <text x=\"90\" y=\"110\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Keimfrei abdecken & Notruf 112</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"190\" height=\"26\" rx=\"6\" fill=\"#e11d48\"/>\n    <text x=\"95\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">VERBRENNUNG & VERBRÜHUNG</text>\n  </g>\n  <text x=\"200\" y=\"200\" fill=\"#881337\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Tee/Kaffee nie auf Tischdecken stellen – Säuglingshaut verbrüht in Sekunden!</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-rose-600 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">VERBRÜHUNG & VERBRENNUNG</h3>\n              <p class=\"text-xs text-rose-100 mt-1 m-0\">Säuglingshaut ist nur ein Fünftel so dick wie Erwachsenenhaut. Eine Tasse heißer Tee (65°C) verursacht in 1 Sekunde tiefste Verbrennungen 3. Grades!</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-orange-100 p-4 border border-rose-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"translate(25, 45)\">\n    <rect width=\"155\" height=\"125\" rx=\"12\" fill=\"#ffffff\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n    <text x=\"77\" y=\"28\" fill=\"#c2410c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">ERSTE HILFE</text>\n    <text x=\"77\" y=\"55\" fill=\"#0284c7\" font-size=\"20\" text-anchor=\"middle\">💧</text>\n    <text x=\"77\" y=\"80\" fill=\"#0369a1\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">10–15 Min kühlen</text>\n    <text x=\"77\" y=\"100\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Handwarm (ca. 20°C)</text>\n    <text x=\"77\" y=\"115\" fill=\"#991b1b\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">NIEMALS EISKALT!</text>\n  </g>\n  <g transform=\"translate(195, 45)\">\n    <rect width=\"180\" height=\"125\" rx=\"12\" fill=\"#fff1f2\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <text x=\"90\" y=\"24\" fill=\"#be123c\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">STRIKTE VERBOTE</text>\n    <text x=\"90\" y=\"48\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ Keine Brandblasen öffnen</text>\n    <text x=\"90\" y=\"68\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ Keine Hausmittel (Mehl, Öl)</text>\n    <text x=\"90\" y=\"88\" fill=\"#9f1239\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">⛔ Eingebrannte Kleidung dranlassen</text>\n    <text x=\"90\" y=\"110\" fill=\"#475569\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Keimfrei abdecken & Notruf 112</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"190\" height=\"26\" rx=\"6\" fill=\"#e11d48\"/>\n    <text x=\"95\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">VERBRENNUNG & VERBRÜHUNG</text>\n  </g>\n  <text x=\"200\" y=\"200\" fill=\"#881337\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Tee/Kaffee nie auf Tischdecken stellen – Säuglingshaut verbrüht in Sekunden!</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-sky-50 border border-sky-200 rounded-xl\">\n                <strong class=\"text-sky-900 font-bold block mb-1\">💧 RICHTIG KÜHLEN:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Kleidung sofort vorsichtig entfernen:</strong> Nasse, heiße Kleidung hält die Hitze am Körper. Ausnahme: Mit der Haut verbrannte Textilien NICHT abreißen!</li>\n                  <li><strong>Handwarm kühlen (ca. 15–20°C):</strong> 10 bis maximal 15 Minuten unter sanft fließendes Leitungswasser halten.</li>\n                  <li><strong>NIEMALS Eis oder eiskaltes Wasser:</strong> Führt bei Säuglingen rasant zu lebensbedrohlicher Unterkühlung (Hypothermie) und Gefäßkrampf!</li>\n                  <li><strong>Rest des Körpers warmhalten:</strong> Baby in eine warme Decke hüllen, um Auskühlung zu stoppen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-rose-50 border border-rose-200 rounded-xl\">\n                <strong class=\"text-rose-900 font-bold block mb-1\">⛔ STRIKTE VERBOTE & VERSORGUNG:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Keine Hausmittel:</strong> Niemals Mehl, Öl, Butter, Zahnpasta oder Puder auf Brandwunden schmieren – Infektionsgefahr!</li>\n                  <li><strong>Brandblasen niemals aufstechen:</strong> Die Blasenoberfläche schützt vor schweren Infektionen.</li>\n                  <li><strong>Keimfrei abdecken:</strong> Wunde locker mit einem sterilen Verbandtuch oder sauberen Frischhaltefolie bedecken.</li>\n                  <li><strong>Notruf 112:</strong> Bei jeder Verbrennung, die größer als die Handfläche des Babys ist, oder bei Gesicht, Händen und Genitalien sofort 112 rufen!</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "id": "drowning",
    "title": "Wasserunfall & Sekundäres Ertrinken",
    "badge": "Lebensgefahr",
    "shortSummary": "Lautloses Ertrinken in Sekunden: Stimmritzenkrampf verhindert Rufen. Nach jedem Untertauchen: 24h Lungenödem-Gefahr beachten!",
    "svg": "<svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 p-4 border border-cyan-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"40\" y=\"65\" width=\"320\" height=\"100\" rx=\"12\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n  <path d=\"M50 120 Q130 110 210 120 T350 120 L350 155 Q270 155 200 155 T50 155 Z\" fill=\"#bae6fd\" opacity=\"0.7\"/>\n  <g transform=\"translate(60, 80)\">\n    <text x=\"0\" y=\"18\" fill=\"#0369a1\" font-size=\"11\" font-weight=\"extrabold\" font-family=\"sans-serif\">LAUTLOSES ERTRINKEN:</text>\n    <text x=\"0\" y=\"38\" fill=\"#0f172a\" font-size=\"10\" font-family=\"sans-serif\">• Babys strampeln oder rufen NICHT!</text>\n    <text x=\"0\" y=\"54\" fill=\"#0f172a\" font-size=\"10\" font-family=\"sans-serif\">• Stimmritzenkrampf (Laryngospasmus) tritt sofort ein</text>\n    <text x=\"0\" y=\"70\" fill=\"#e11d48\" font-size=\"10\" font-weight=\"bold\" font-family=\"sans-serif\">• Schon 3–5 cm Wasser & 30 Sek. genügen!</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"210\" height=\"26\" rx=\"6\" fill=\"#0284c7\"/>\n    <text x=\"105\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">WASSERUNFALL & ERTRINKEN</text>\n  </g>\n  <text x=\"200\" y=\"195\" fill=\"#0369a1\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">NIEMALS auch nur 1 Sekunde alleine in der Badewanne lassen!</text>\n  <text x=\"200\" y=\"210\" fill=\"#0284c7\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Nach Wasserunfall: Bei Husten / Atemnot sofort in die Klinik (Sekundäres Ertrinken)!</text>\n</svg>",
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-cyan-700 text-white rounded-2xl shadow-md\">\n              <h3 class=\"text-xl font-black m-0 text-white\">WASSERUNFALL & LAUTLOSES ERTRINKEN</h3>\n              <p class=\"text-xs text-cyan-100 mt-1 m-0\">Babys ertrinken völlig lautlos. Sie schlagen nicht mit den Armen und schreien nicht – der Kehlkopf verschließt sich reflexartig (Laryngospasmus).</p>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 p-4 border border-cyan-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"40\" y=\"65\" width=\"320\" height=\"100\" rx=\"12\" fill=\"#ffffff\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n  <path d=\"M50 120 Q130 110 210 120 T350 120 L350 155 Q270 155 200 155 T50 155 Z\" fill=\"#bae6fd\" opacity=\"0.7\"/>\n  <g transform=\"translate(60, 80)\">\n    <text x=\"0\" y=\"18\" fill=\"#0369a1\" font-size=\"11\" font-weight=\"extrabold\" font-family=\"sans-serif\">LAUTLOSES ERTRINKEN:</text>\n    <text x=\"0\" y=\"38\" fill=\"#0f172a\" font-size=\"10\" font-family=\"sans-serif\">• Babys strampeln oder rufen NICHT!</text>\n    <text x=\"0\" y=\"54\" fill=\"#0f172a\" font-size=\"10\" font-family=\"sans-serif\">• Stimmritzenkrampf (Laryngospasmus) tritt sofort ein</text>\n    <text x=\"0\" y=\"70\" fill=\"#e11d48\" font-size=\"10\" font-weight=\"bold\" font-family=\"sans-serif\">• Schon 3–5 cm Wasser & 30 Sek. genügen!</text>\n  </g>\n  <g transform=\"translate(20, 15)\">\n    <rect width=\"210\" height=\"26\" rx=\"6\" fill=\"#0284c7\"/>\n    <text x=\"105\" y=\"17\" fill=\"white\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">WASSERUNFALL & ERTRINKEN</text>\n  </g>\n  <text x=\"200\" y=\"195\" fill=\"#0369a1\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">NIEMALS auch nur 1 Sekunde alleine in der Badewanne lassen!</text>\n  <text x=\"200\" y=\"210\" fill=\"#0284c7\" font-size=\"9\" text-anchor=\"middle\" font-family=\"sans-serif\">Nach Wasserunfall: Bei Husten / Atemnot sofort in die Klinik (Sekundäres Ertrinken)!</text>\n</svg>\n            </div>\n\n            <div class=\"space-y-4 text-sm\">\n              <div class=\"p-4 bg-cyan-50 border border-cyan-200 rounded-xl\">\n                <strong class=\"text-cyan-900 font-bold block mb-1\">🚨 SOFORTMASSNAHMEN BEI WASSERUNFALL:</strong>\n                <ol class=\"list-decimal list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Sofort aus dem Wasser heben:</strong> Jede Millisekunde zählt.</li>\n                  <li><strong>Atmung prüfen (Kopf sanft überstrecken, Ohr an Mund, Blick auf Brustkorb für 10 Sek.):</strong></li>\n                  <li><strong>Wenn KEINE Atmung vorhanden ist:</strong> Sofort 112 rufen (Lautsprecher!) und mit <strong>5 Initialbeatmungen</strong> (Mund über Mund und Nase des Babys) beginnen, danach 30 Herzdruckmassagen : 2 Beatmungen!</li>\n                  <li><strong>Wenn Atmung vorhanden ist:</strong> Baby auf die Seite drehen, nasse Kleidung ausziehen, in trockene Decke wickeln.</li>\n                </ol>\n              </div>\n\n              <div class=\"p-4 bg-amber-50 border border-amber-200 rounded-xl\">\n                <strong class=\"text-amber-900 font-bold block mb-1\">⚠️ DAS PHÄNOMEN 'SEKUNDÄRES ERTRINKEN' (LUNGENÖDEM):</strong>\n                <p class=\"text-slate-700 text-xs leading-relaxed\">\n                  Auch wenn das Baby nach kurzem Untertauchen gehustet hat und scheinbar wieder fröhlich ist: Schon wenige Milliliter eingeatmetes Wasser zerstören die schützende Surfactant-Schicht der Lungenbläschen. Stunden später kann es zu Entzündungen und einem <strong>toxischen Lungenödem</strong> kommen.\n                </p>\n                <p class=\"text-xs font-bold text-amber-900 mt-2\">\n                  Warnzeichen in den nächsten 24 Stunden: Anhaltender Husten, erschwerte flache Atmung, Blässe/Lippenblau, extreme Müdigkeit. Bei diesen Zeichen sofort Notaufnahme ansteuern!\n                </p>\n              </div>\n            </div>\n          </div>\n        "
  }
];
  const ILLNESSES_LEXIKON = [
    {
      id: "rsv",
      title: "RS-Virus (Respiratory Syncytial Virus / Bronchiolitis)",
      badge: "Atemwegsinfekt",
      urgency: "Hoch bei Säuglingen",
      summary: "Häufigste Ursache für Klinikeinweisungen im ersten Winter. Schleim verstopft die kleinsten Atemwege (Bronchiolen).",
      contentHtml: `
        <h4>Was ist das RS-Virus?</h4>
        <p>RSV ist ein hoch ansteckendes Virus, das bei älteren Kindern nur einen Schnupfen verursacht, bei Säuglingen unter 12 Monaten jedoch die winzigen Lungenästchen verstopft.</p>
        <h4>Typische Symptome:</h4>
        <ul>
          <li>Beginnt wie Schnupfen, nach 2–3 Tagen zunehmender rasselnder Husten</li>
          <li>Pfeifende Atemgeräusche (Giemen) und sichtbare Einziehungen der Rippen</li>
          <li>Trinkschwäche: Baby hat keine Luft mehr zum Saugen</li>
        </ul>
        <p class="text-rose-700 font-bold">Sofort ins Krankenhaus bei Trinkverweigerung, Einziehungen oder blassen Lippen!</p>
      `
    },
    {
      id: "pseudokrupp",
      title: "Pseudokrupp (Stenosierende Laryngitis)",
      badge: "Obere Atemwege",
      urgency: "Sofortige Beruhigung nötig",
      summary: "Plötzlicher bellender Husten mitten in der Nacht durch Anschwellen der Stimmritze.",
      contentHtml: `
        <h4>Typischer Anfall um Mitternacht:</h4>
        <p>Kind wacht mit trockenem, bellendem Husten wie ein Seehund auf und zieht pfeifend Luft ein (Stridor).</p>
        <h4>Sofortmaßnahmen:</h4>
        <ol>
          <li>Ruhe bewahren – Panik lässt Schleimhäute weiter anschwellen!</li>
          <li>Aufrecht auf den Arm nehmen.</li>
          <li>Kalte, feuchte Luft einatmen: Ans offene Fenster, Balkon oder vor das geöffnete Eisfach stellen!</li>
          <li>Bei Atemnot Notarzt (112) rufen. Notfall-Kortisonzäpfchen nach ärztlicher Verordnung bereithalten.</li>
        </ol>
      `
    },
    {
      id: "drei-tage-fieber",
      title: "Drei-Tage-Fieber (Exanthema subitum)",
      badge: "Kinderkrankheit",
      urgency: "Mittel",
      summary: "3–4 Tage hohes Fieber ohne sonstige Symptome, gefolgt von einem feinfleckigen Ausschlag am Rumpf nach Entfieberung.",
      contentHtml: `
        <h4>Der typische Verlauf:</h4>
        <p>Plötzlich einsetzendes hohes Fieber (oft bis 40°C) über 3 Tage. Am 4. Tag fällt das Fieber schlagartig ab und ein blassroter Fleckenausschlag erscheint am Bauch/Rücken. Harmlos, aber wegen des schnellen Fieberanstiegs häufigster Auslöser für Fieberkrämpfe.</p>
      `
    },
    {
      id: "magen-darm",
      title: "Magen-Darm-Infekt (Gastroenteritis & Dehydratation)",
      badge: "Magen-Darm",
      urgency: "Hoch bei Flüssigkeitsverlust",
      summary: "Durchfall und Erbrechen führen bei Säuglingen rasch zur gefährlichen Austrocknung.",
      contentHtml: `
        <h4>Die Gefahr: Schneller Flüssigkeitsverlust</h4>
        <p>Durchfall und Erbrechen entziehen dem kleinen Körper Elektrolyte. Häufiges Stillen oder Pre in kleinen Schlucken alle 15 Minuten anbieten. Bei Bedarf orale Rehydratationslösung (Elektrolyte) aus der Apotheke. Notfall bei eingesunkener Fontanelle oder trockenen Windeln!</p>
      `
    },
    {
      id: "soor",
      title: "Mundsoor & Windelsoor (Candida albicans)",
      badge: "Pilzinfektion",
      urgency: "Behandlungsbedürftig",
      summary: "Weißliche, nicht abwischbare Beläge auf der Mundschleimhaut oder feuerroter Po mit Pusteln.",
      contentHtml: `
        <h4>Pilzbefall erkennen:</h4>
        <p>Mundsoor zeigt weiße Beläge an Wangeninnenseite und Zunge, die beim Abwischversuch bluten. Windelsoor ist eine intensiv rote Hautreizung mit Pickelchen am Rand. Behandlung: Antimykotisches Gel (z.B. Nystatin) für den Mund UND gleichzeitig Brustwarzen der Mutter mitbehandeln, um Ping-Pong-Effekt zu verhindern!</p>
      `
    },
    {
      id: "zahnen",
      title: "Zahnen & Zahndurchbruch",
      badge: "Entwicklung",
      urgency: "Gering",
      summary: "Speicheln, Kauen auf Gegenständen, rote Wangen. Hohes Fieber über 38,5°C kommt NICHT vom Zahnen!",
      contentHtml: `
        <h4>Wann kommen die Zähne?</h4>
        <p>Meist brechen zwischen dem 5. und 8. Monat die unteren Schneidezähne durch. Zahnen macht quengelig und evtl. erhöhte Temperatur bis 38,0°C, aber NIEMALS hohes Fieber über 38,5°C! Linderung durch kühle Beißringe (aus dem Kühlschrank, nicht Eisfach) und Zahnfleischmassage.</p>
      `
    },
    {
      id: "ikterus",
      title: "Neugeborenengelbsucht (Physiologischer Ikterus)",
      badge: "Neugeborene",
      urgency: "Hebammenkontrolle nötig",
      summary: "Gelbfärbung von Augen und Haut ab Tag 2–3 durch Abbau fetalem Hämoglobins.",
      contentHtml: `
        <h4>Warum wird das Baby gelb?</h4>
        <p>Der Körper baut überschüssige rote Blutkörperchen ab, wobei Bilirubin entsteht. Da die Leber noch unreif ist, lagert sich Bilirubin in der Haut ab. Häufiges Stillen kurbelt die Ausscheidung über den Darm an. Steigt der Wert zu hoch, erfolgt eine harmlose Phototherapie (Blaulicht) in der Klinik, um Schäden an den Basalganglien (Kernikterus) zu verhindern.</p>
      `
    },
    {
      id: "otitis",
      title: "Mittelohrentzündung (Otitis media)",
      badge: "HNO",
      urgency: "Mittel bis Hoch",
      summary: "Starke Schmerzen, Baby fasst sich ans Ohr, weint im Liegen beim Trinken.",
      contentHtml: `
        <h4>Warum weint das Baby beim Trinken?</h4>
        <p>Der Schluckvorgang und das flache Liegen erhöhen den Druck im Mittelohr. Oft geht ein einfacher Schnupfen voraus, der die kurze eustachische Röhre verstopft. Abschwellende Nasentropfen (altersgerecht) und Schmerzmittel (Paracetamol/Ibuprofen nach ärztlicher Rücksprache) sind essenziell.</p>
      `
    }
  ];
  const MONTHLY_GUIDES = [
  {
    "month": 1,
    "title": "Monat 1: Das 4. Trimester & Die Ankunft",
    "motto": "Vom Mutterleib in die weite Welt: Geborgenheit, Reflexe & Ankommen",
    "badge": "Woche 1 bis 4",
    "summary": "Schlafbedarf 16–18h, Wachfenster nur 45–60 Min, Kolostrum & Milcheinschuss, angeborene Reflexe.",
    "milestones": [
      "Angeborene Reflexe",
      "Kopf kurz halten",
      "Scharfstellen 20-25cm",
      "U1 & U2 Check"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: DAS VIERTE TRIMESTER</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Ein Neugeborenes ist physiologisch eine 'Frühgeburt'. Es braucht in den ersten 12 Wochen vor allem eines: Die Illusion, noch immer im schützenden Mutterleib zu sein – durch enge Berührung, Hautkontakt und vertraute Stimmen.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Körperliche & Motorische Entwicklung:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Physiologische Beugehaltung:</strong> Arme und Beine sind eng an den Körper angezogen.</li>\n                  <li><strong>Angeborene Reflexe:</strong> Saugreflex, Suchreflex (dreht Kopf zur Wange), Mororeflex (Schreckreflex), Palmarer Greifreflex (schließt Hand um Finger).</li>\n                  <li><strong>Kopfkontrolle:</strong> In Bauchlage kann der Kopf für 1–2 Sekunden leicht angehoben und zur Seite gedreht werden, um die Atemwege frei zu halten.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">👀 Sinne & Kognition:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Sehschärfe 20–25 cm:</strong> Genau die Distanz zur Brust oder zum Gesicht der Eltern. Alles dahinter ist verschwommen.</li>\n                  <li><strong>Kontraste & Gesichter:</strong> Schwarz-Weiß-Muster und menschliche Gesichter faszinieren das Baby am meisten.</li>\n                  <li><strong>Gehör voll ausgebildet:</strong> Erkennt die Stimme von Mutter und Vater bereits aus dem Mutterleib wieder.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & Wachfenster:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Schlafbedarf:</strong> 16 bis 18 Stunden pro 24 Stunden, verteilt auf 5–6 Schläfchen.</li>\n                  <li><strong>Wachfenster:</strong> Extrem kurz: <strong>45 bis 60 Minuten</strong>! Nach Wickeln und Trinken ist das Baby oft schon wieder übermüdet.</li>\n                  <li><strong>Kein Tag-Nacht-Rhythmus:</strong> Melatonin wird noch nicht gebildet. Tagsüber hell & Alltagslärm, nachts dunkel & leise.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🍼 Ernährung & Gewicht:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Kolostrum & Milcheinschuss:</strong> Die gelbliche Vormilch (Kolostrum) ist reich an Antikörpern. Tag 3–4 Milcheinschuss.</li>\n                  <li><strong>Gewichtsverlust:</strong> Bis zu 7–10% Gewichtsverlust nach Geburt sind physiologisch normal.</li>\n                  <li><strong>Ziel:</strong> Bis Tag 10 bis spätestens Tag 14 muss das Geburtsgewicht wieder erreicht sein.</li>\n                  <li><strong>Nasse Windeln:</strong> Ab Tag 5 mindestens 5–6 schwere, nasse Pipi-Windeln pro 24 Stunden.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900\">\n              <strong class=\"text-sm font-bold block mb-1\">⚠️ Typische Hürden in Monat 1:</strong>\n              <strong>Clusterfeeding:</strong> Vor allem in den Abendstunden will das Baby oft stundenlang ununterbrochen an die Brust. Das ist KEIN Zeichen für zu wenig Milch, sondern kurbelt die Prolaktinproduktion an und spendet Sicherheit!<br>\n              <strong>Baby Blues:</strong> An Tag 3–5 weinen bis zu 80% aller Mütter wegen des Hormonsturzes. Liebevoll auffangen!\n            </div>\n\n            <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n              <strong class=\"text-slate-900 font-bold block mb-1\">🩺 Arzttermine & Vorsorge:</strong>\n              U1 (direkt nach Geburt), U2 (3. bis 10. Lebenstag), erweitertes Stoffwechselscreening aus der Ferse, Neugeborenen-Hörscreening, 3 Gaben Vitamin K und tägl. Vitamin D (400–500 I.E.).\n            </div>\n          </div>\n        "
  },
  {
    "month": 2,
    "title": "Monat 2: Das erste Lächeln & Kopfkontrolle",
    "motto": "Die Welt antwortet: Das soziale Lächeln erwacht und der Blick wird wach",
    "badge": "Woche 5 bis 8",
    "summary": "Wachfenster 60–90 Min, soziales Lächeln (um Woche 6), Kopf heben um 45 Grad, Gurrlaute ('ah', 'oh').",
    "milestones": [
      "Soziales Lächeln",
      "Kopfheben 45°",
      "Gurrlaute",
      "U3 Check"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: DIE ERSTE ECHTE INTERAKTION</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Rund um die 6. Lebenswoche geschieht einer der berührendsten Momente der Elternschaft: Das Baby lächelt dich zum ersten Mal bewusst an, wenn du freundlich mit ihm sprichst. Das soziale Lächeln ist der Startschuss für echte Kommunikation.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Körperliche & Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Kopfkontrolle nimmt zu:</strong> In Bauchlage stützt sich das Baby kurz auf die Unterarme und hebt den Kopf um 45 Grad an.</li>\n                  <li><strong>Fäustchen öffnen sich:</strong> Die Hände sind nicht mehr permanent verkrampft geschlossen, sondern öffnen sich im entspannten Zustand.</li>\n                  <li><strong>Flüssigere Bewegungen:</strong> Die ruckartigen Strampelbewegungen der ersten Wochen weichen harmonischeren Beinbewegungen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🗣️ Sprache & Kognition:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Gurrlaute (Cooing):</strong> Erste Vokallaute wie 'ah', 'eh', 'ooh' ertönen, wenn das Baby zufrieden auf der Wickelkommode liegt.</li>\n                  <li><strong>Blickkontakt halten:</strong> Das Baby fixiert die Augen der Eltern für mehrere Sekunden und folgt sich langsam bewegenden Objekten.</li>\n                  <li><strong>Mimik-Imitation:</strong> Wenn du die Zunge herausstreckst, versucht das Baby manchmal verblüfft, es nachzumachen.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & Wachfenster:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Schlafbedarf:</strong> 15 bis 16 Stunden pro Tag, 4–5 Tagschläfchen.</li>\n                  <li><strong>Wachfenster:</strong> <strong>60 bis 90 Minuten</strong>. Achte auf frühe Signale: Gähnen, glasige Augen, Abwenden des Blicks.</li>\n                  <li><strong>Erste Tag-Nacht-Unterscheidung:</strong> Die Zirbeldrüse beginnt minimale Spuren Melatonin zu produzieren.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🍼 Ernährung:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Stillen oder Pre nach Bedarf (ca. 6 bis 8 Mahlzeiten in 24h).</li>\n                  <li>Der Magen fasst nun bereits ca. 90–120 ml pro Mahlzeit.</li>\n                  <li>Wachstumsschub um die 6. bis 8. Woche ('2. Sprung' nach Oje, ich wachse): Erhöhte Anhänglichkeit und Trinkfrequenz.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900\">\n              <strong class=\"text-sm font-bold block mb-1\">⚠️ Der Höhepunkt des Schreiens (PURPLE Crying):</strong>\n              Zwischen Woche 6 und 8 erreicht das physiologische Schreien statistisch seinen Höhepunkt! Viele Babys schreien in den Abendstunden untröstlich. <em>Erinnere dich:</em> Niemals schütteln! Fliegergriff, Tragetuch und ruhiges Wiegen mit weißem Rauschen lindern die Reizüberflutung.\n            </div>\n\n            <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n              <strong class=\"text-slate-900 font-bold block mb-1\">🩺 Arzttermine & Vorsorge:</strong>\n              <strong>U3 (4.–5. Lebenswoche):</strong> Gründliche Überprüfung der Reflexe, Hüftultraschall (Früherkennung von Hüftdysplasie). Erste Rotaviren-Schluckimpfung nach STIKO-Empfehlung ab Woche 6.\n            </div>\n          </div>\n        "
  },
  {
    "month": 3,
    "title": "Monat 3: Hände entdecken & stabiler Unterarmstütz",
    "motto": "Die Hände gehören zu mir: Erste Dialoge und sichere Kopfbalance",
    "badge": "Woche 9 bis 12",
    "summary": "Wachfenster 75–90 Min, Hände finden zur Körpermitte, 90° Unterarmstütz in Bauchlage, Dialog-Brabbeln.",
    "milestones": [
      "Hände betrachten",
      "90° Kopfstütz",
      "Brabbel-Dialoge",
      "Start 6-fach-Impfung"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: DIE FASZINATION DER EIGENEN HÄNDE</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Dein Baby entdeckt das erstaunlichste Spielzeug der Welt: Seine eigenen Finger! Das 'Hand-Regarding' (minutenlanges, erstauntes Betrachten der Hände) schult die Koordination zwischen Auge und Hand.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorischer Durchbruch:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Sicherer Unterarmstütz:</strong> In Bauchlage stützt sich das Baby auf beide Unterarme und hält den Kopf stabil um 90 Grad aufrecht.</li>\n                  <li><strong>Hände zur Körpermitte:</strong> Das Baby führt beide Hände vor der Brust zusammen und steckt sie mit Wonne in den Mund.</li>\n                  <li><strong>Greifreflex weicht bewusstem Berühren:</strong> Das Baby schlägt gezielt gegen über ihm hängendes Spielzeug (Trapez).</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🗣️ Die ersten 'Gespräche' (Protodialoge):</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Das Baby wartet ab, wenn du sprichst, und antwortet mit Gurren und Jauchzen, sobald du eine Pause machst.</li>\n                  <li>Laute werden melodischer: Lautstärken- und Tonhöhenwechsel werden ausprobiert.</li>\n                  <li>Reagiert mit Ganzkörper-Freude (rudert mit Armen und Beinen), wenn Bezugspersonen den Raum betreten.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & Zyklen:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Schlafbedarf:</strong> 14 bis 16 Stunden pro Tag, 4 Tagschläfchen.</li>\n                  <li><strong>Wachfenster:</strong> <strong>75 bis 90 Minuten</strong> (ca. 1,25–1,5 Stunden).</li>\n                  <li>Erste längere Nachtschlaf-Etappe: Manche Babys schaffen bereits 4 bis 5 Stunden Schlaf am Stück.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🍼 Fütterung:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Das Stillen/Fläschchengeben wird routinierter und schneller (oft nur noch 10–15 Min. pro Seite).</li>\n                  <li>Das Baby lässt sich beim Trinken leichter durch Geräusche ablenken – füttere an einem ruhigen, abgedunkelten Ort.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n              <strong class=\"text-slate-900 font-bold block mb-1\">🩺 Vorsorge & Impfungen (STIKO):</strong>\n              Mit vollendeten 2 Monaten startet nach STIKO die <strong>1. Dosis der 6-fach-Impfung</strong> (Diphtherie, Tetanus, Keuchhusten, Polio, Hib, Hepatitis B) sowie die Pneumokokken-Impfung und die 2. Rotaviren-Dosis.\n            </div>\n          </div>\n        "
  },
  {
    "month": 4,
    "title": "Monat 4: Die 4-Monats-Schlafregression & gezieltes Greifen",
    "motto": "Das Gehirn baut sich um: Schlafarchitektur reift, Hände greifen zielgenau",
    "badge": "Woche 13 bis 16",
    "summary": "Wachfenster 75–120 Min, Schlafregression durch 4-Phasen-Schlaf, gezieltes Greifen mit beiden Händen, lautes Lachen.",
    "milestones": [
      "4-Monats-Regression",
      "Gezieltes Greifen",
      "Lautes Lachen",
      "U4 Check"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-xl\">\n              <h4 class=\"text-amber-900 font-extrabold text-base m-0\">DIE BERÜCHTIGTE 4-MONATS-SCHLAFREGRESSION</h4>\n              <p class=\"text-amber-800 text-sm mt-1 m-0\">Warum wacht mein Baby plötzlich alle 45–60 Minuten auf, obwohl es vorher so gut schlief? Keine Sorge: Es ist kein Rückschritt, sondern ein gewaltiger Gehirnumbau! Die Schlafstruktur reift dauerhaft von Neugeborenen-Schlaf in adulte 4-Phasen-Zyklen um.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Gezieltes Greifen:</strong> Das Baby greift nach hingehaltenem Spielzeug, hält es fest und schüttelt es.</li>\n                  <li><strong>Drehen auf die Seite:</strong> Das Baby beginnt, sich aus der Rückenlage schwungvoll auf die Seite zu rollen.</li>\n                  <li><strong>Vollständige Kopfkontrolle:</strong> Beim Hochziehen an den Händen aus der Rückenlage fällt der Kopf nicht mehr nach hinten.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🧠 Kognition & Soziales:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Lautes Kichern & Lachen:</strong> Das Baby gluckst und lacht laut heraus, wenn man es kitzelt oder lustige Geräusche macht.</li>\n                  <li><strong>Prusten mit Spucke:</strong> Es prustet mit den Lippen und bildet Schaumbläschen.</li>\n                  <li><strong>Erste Konsonanten:</strong> Laute wie 'm', 'b', 'p' mischen sich in das Brabbeln.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf-Management in Monat 4:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>1,25 bis 2 Stunden</strong> (75–120 Min).</li>\n                  <li><strong>Tagschlaf:</strong> 3 bis 4 Schläfchen pro Tag. Oft sind diese Schläfchen nun exakt 30–45 Minuten kurz (ein Zyklus).</li>\n                  <li><strong>Einschlafbegleitung:</strong> Feste Routine einführen (z.B. Wickeln, Schlafsack, Stillen/Flasche, Schlaflied, Dunkelheit).</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🦷 Zähne schießen in den Kiefer:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Exzessiver Speichelfluss! Das Baby kaut wie wild auf den Fäustchen.</li>\n                  <li>Das bedeutet meist noch nicht den Durchbruch, sondern das Einschießen der Zahnkeime in den Kieferknochen.</li>\n                  <li>Kühlbeißringe anbieten!</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n              <strong class=\"text-slate-900 font-bold block mb-1\">🩺 Vorsorge U4 (3.–4. Monat):</strong>\n              Überprüfung von Beweglichkeit, Hör- und Sehvermögen, Schielen-Ausschluss, Wachstumskurven (Perzentilen) sowie 2. Impfdosis (6-fach + Pneumokokken).\n            </div>\n          </div>\n        "
  },
  {
    "month": 5,
    "title": "Monat 5: Rollen, Drehen & Lautmalerei",
    "motto": "In Bewegung kommen: Vom Rücken auf den Bauch und die Welt aus neuer Sicht",
    "badge": "Woche 17 bis 20",
    "summary": "Wachfenster 1,5–2,5h, Drehen von Rücken auf Bauch, Beikost-Reifezeichen beobachten, Ursache & Wirkung verstehen.",
    "milestones": [
      "Vom Rücken auf Bauch drehen",
      "Ursache-Wirkung",
      "Pucken stoppen!",
      "Brabbelkonzert"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: DIE WELT DREHT SICH</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Das Baby meistert die erste große selbstständige Fortbewegung: Die Drehung! Sobald sich dein Baby selbstständig drehen kann, gilt eine lebenswichtige Regel: <strong>AB SOFORT DARF NICHT MEHR GEPÜCKT WERDEN!</strong></p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Drehen:</strong> Dreht sich schwungvoll vom Rücken auf den Bauch. Manche Babys drehen sich auch schon zurück.</li>\n                  <li><strong>'Flugzeug'-Stellung:</strong> In Bauchlage hebt das Baby Arme und Beine gleichzeitig an und balanciert auf dem Bauch ('Schwimmbewegungen').</li>\n                  <li><strong>Hand-zu-Hand:</strong> Gegenstände werden mit beiden Händen gefasst und zielgenau zum Mund geführt.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🧠 Geistige Sprünge (4. Sprung nach Oje, ich wachse):</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Ursache und Wirkung:</strong> Wenn ich den Löffel fallen lasse, scheppert es! Das Baby wiederholt Handlungen mit Begeisterung.</li>\n                  <li><strong>Farbsehen komplett:</strong> Volles Farbspektrum wird nun wie beim Erwachsenen wahrgenommen.</li>\n                  <li><strong>Eigene Stimme testen:</strong> Das Baby quietscht in den höchsten Tönen und lauscht seinem eigenen Echo.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & Rhythmus:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Schlafbedarf:</strong> 13 bis 15 Stunden pro Tag.</li>\n                  <li><strong>Wachfenster:</strong> <strong>1,5 bis 2,5 Stunden</strong>.</li>\n                  <li>Übergang von 4 auf 3 Tagschläfchen (Vormittag, Mittag, Spätnachmittag).</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Beikoststart: Wann ist es soweit?</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Die Leitlinie besagt: <em>Frühestens ab vollendetem 4. Monat (Woche 17)</em> und spätestens mit Beginn des 7. Monats.</li>\n                  <li>Starte NUR, wenn ALLE 3 Reifezeichen vorliegen (stabiler Sitz mit Stütze, Zungenstoßreflex weg, zielgerichtetes Greifen zum Mund). Im Zweifel lieber noch bis Monat 6 warten!</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "month": 6,
    "title": "Monat 6: Beikoststart & Halbzeit zum 1. Geburtstag",
    "motto": "Der große Essensstart: Reifezeichen, Brei & BLW, erster Zahn",
    "badge": "Woche 21 bis 24",
    "summary": "Wachfenster 2–2,5h, Beikost-Reifezeichen erfüllt, Gewicht meist verdoppelt, Durchbruch der ersten unteren Schneidezähne.",
    "milestones": [
      "Beikoststart",
      "Gewicht verdoppelt",
      "Erster Zahn",
      "U5 Check"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl\">\n              <h4 class=\"text-emerald-900 font-extrabold text-base m-0\">HALBZEIT: 6 MONATE VOLLE LIEBE</h4>\n              <p class=\"text-emerald-800 text-sm mt-1 m-0\">Das erste halbe Jahr ist vollbracht! Dein Baby hat sein Geburtsgewicht im Schnitt verdoppelt. Die WHO empfiehlt bis zum vollendeten 6. Monat ausschließliches Stillen oder Pre-Fütterung – jetzt beginnt für fast alle Babys das Abenteuer Beikost.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Beikost: Breifahrplan vs. BLW:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Klassischer Brei:</strong> Start mit reinem Gemüsebrei (z.B. Kürbis, Pastinake, Karotte) mittags, nach einigen Tagen Kartoffel dazu, dann Fleisch/Fisch (Eisen!).</li>\n                  <li><strong>Baby-Led Weaning (BLW):</strong> Weich gedämpfte Gemüsesticks in Pommesgröße, die das Baby selbst greift und erkundet.</li>\n                  <li><strong>Beikost ist BEI-Kost:</strong> Hauptnahrungsquelle bleibt im gesamten 1. Lebensjahr Muttermilch oder Pre! Kein Druck beim Essenlernen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Drehen in beide Richtungen:</strong> Rollen von Rücken auf Bauch und zurück klappt flüssig.</li>\n                  <li><strong>Sitzen auf dem Schoß:</strong> Kann mit leichter Stütze aufrecht im Hochstuhl oder auf dem Schoß sitzen.</li>\n                  <li><strong>Aufgestützter Handstütz:</strong> In Bauchlage stützt sich das Baby mit durchgestreckten Armen auf die offenen Handflächen ('Kobra').</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"my-4\">\n              <svg viewBox=\"0 0 400 220\" class=\"w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 p-4 border border-emerald-200 shadow-sm\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"translate(40, 40)\">\n    <rect width=\"140\" height=\"130\" rx=\"16\" fill=\"#fff1f2\" stroke=\"#fecdd3\" stroke-width=\"2\"/>\n    <circle cx=\"70\" cy=\"60\" r=\"28\" fill=\"#881337\"/>\n    <path d=\"M68 32 C68 25 74 20 80 18\" stroke=\"#15803d\" stroke-width=\"3\" fill=\"none\"/>\n    <circle cx=\"70\" cy=\"60\" r=\"22\" fill=\"#9f1239\" opacity=\"0.8\"/>\n    <circle cx=\"115\" cy=\"25\" r=\"14\" fill=\"#e11d48\"/>\n    <text x=\"115\" y=\"30\" fill=\"white\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">✕</text>\n    <text x=\"70\" y=\"112\" fill=\"#9f1239\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">GANZ = ERSTICKUNGSGEFAHR</text>\n  </g>\n  <g transform=\"translate(220, 40)\">\n    <rect width=\"140\" height=\"130\" rx=\"16\" fill=\"#f0fdf4\" stroke=\"#bbf7d0\" stroke-width=\"2\"/>\n    <path d=\"M50 45 Q58 45 60 75 Q48 70 50 45 Z\" fill=\"#15803d\"/>\n    <path d=\"M65 45 Q73 45 75 75 Q63 70 65 45 Z\" fill=\"#16a34a\"/>\n    <path d=\"M80 45 Q88 45 90 75 Q78 70 80 45 Z\" fill=\"#15803d\"/>\n    <path d=\"M95 45 Q103 45 105 75 Q93 70 95 45 Z\" fill=\"#16a34a\"/>\n    <circle cx=\"115\" cy=\"25\" r=\"14\" fill=\"#16a34a\"/>\n    <text x=\"115\" y=\"30\" fill=\"white\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">✓</text>\n    <text x=\"70\" y=\"112\" fill=\"#166534\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">LÄNGS GEVIERTELT = SICHER</text>\n  </g>\n  <text x=\"200\" y=\"200\" fill=\"#065f46\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" font-family=\"sans-serif\">Trauben, Kirschtomaten & Heidelbeeren immer vierteln!</text>\n</svg>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🦷 Die ersten Zähnchen:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Meist brechen die beiden unteren mittleren Schneidezähne durch.</li>\n                  <li>Ab dem ersten Zahn: Einmal täglich mit einer erbsengroßen Menge fluoridhaltiger Kinderzahnpasta (1000 ppm) oder fluoridfreier Paste + Fluoridtablette sanft putzen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & Wachfenster:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>2 bis 2,5 Stunden</strong>.</li>\n                  <li>Schlafbedarf: ca. 13 bis 14 Stunden pro 24h.</li>\n                  <li>3 feste Schläfchen (Morgens, Mittags, Spätnachmittag).</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n              <strong class=\"text-slate-900 font-bold block mb-1\">🩺 Vorsorge U5 (6.–7. Monat):</strong>\n              Entwicklungsdiagnostik: Körperbeherrschung, Beweglichkeit, Seh- und Hörfunktion, Zahngesundheit. STIKO-Auffrischungsimpfung (3. Dosis 6-fach + Pneumokokken).\n            </div>\n          </div>\n        "
  },
  {
    "month": 7,
    "title": "Monat 7: Hände lernen loszulassen & Brabbelkonzerte",
    "motto": "Hände übergeben, Silben verdoppeln: 'Ba-ba', 'Da-da' und Robben auf dem Teppich",
    "badge": "Woche 25 bis 28",
    "summary": "Wachfenster 2,25–2,75h, Silbendopplungen (ma-ma, ba-ba), Übergabe von Hand zu Hand, Robben beginnt.",
    "milestones": [
      "Silbendopplungen",
      "Hand-zu-Hand Übergabe",
      "Erstes Robben",
      "2. Abendbrei"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: DIE SPRACHE NIMMT FAHRT AUF</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Die Kehlkopfmuskulatur ist nun so koordiniert, dass echte Silbenketten entstehen: 'Ba-ba-ba', 'Da-da', 'Ga-ga'. Das Baby probiert Intonationen aus und ahmt die Sprachmelodie seiner Eltern nach.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Hand-zu-Hand-Transfer:</strong> Das Baby nimmt einen Gegenstand in die rechte Hand und übergibt ihn gezielt in die linke Hand.</li>\n                  <li><strong>Gegenstände aneinanderschlagen:</strong> Zwei Bauklötze werden aufeinander geschlagen, um Lärm zu machen.</li>\n                  <li><strong>Erstes Robben:</strong> Durch Abstoßen mit den Zehen oder Ziehen mit den Unterarmen schiebt sich das Baby vorwärts oder rückwärts über den Boden.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Beikost-Erweiterung:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Einführung des <strong>2. Breis: Milch-Getreide-Brei</strong> (Abendbrei aus Vollmilch oder Pre + Hafer-/Hirseflocken).</li>\n                  <li>Wasser anbieten: Bei 2 festen Beikostmahlzeiten kann zu den Mahlzeiten etwas Wasser aus einem offenen Becher angeboten werden.</li>\n                  <li>Allergene frühzeitig einführen: Erdnussmus, Ei und Weizen regelmäßig in kleinen Mengen geben (senkt Allergierisiko!).</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>2,25 bis 2,75 Stunden</strong>.</li>\n                  <li>Oft pendelt sich der Rhythmus jetzt auf 2 bis 3 Schläfchen ein. Das späte Nachmittagsschläfchen wird kürzer.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💡 Spiel- & Fördertipp:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Fühlbücher mit verschiedenen Texturen (Rau, Weich, Glatt).</li>\n                  <li>Becherstapeln und das Baby den Turm umwerfen lassen.</li>\n                  <li>Singen von Kniereitern ('Hoppe hoppe Reiter').</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "month": 8,
    "title": "Monat 8: Die Vertikale lockt & Trennungsangst erwacht",
    "motto": "Auf allen Vieren: Vierfüßlerstand, Wippen und das Begreifen der Trennung",
    "badge": "Woche 29 bis 32",
    "summary": "Wachfenster 2,5–3h, Vierfüßlerstand, Krabbelversuche, erste Trennungsangst, Zeit für Kindersicherung!",
    "milestones": [
      "Vierfüßlerstand",
      "Trennungsangst",
      "Kindersicherung Pflicht",
      "Wippen auf Knien"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-rose-50 border-l-4 border-rose-600 rounded-r-xl\">\n              <h4 class=\"text-rose-900 font-extrabold text-base m-0\">DIE ERSTE TRENNUNGSANGST: EIN GEISTIGER RIESENSPRUNG</h4>\n              <p class=\"text-rose-800 text-sm mt-1 m-0\">Verlässt Mama oder Papa kurz den Raum, bricht das Baby in bitterliche Tränen aus. Das ist kein 'Klammern', sondern ein kognitiver Meilenstein: Das Baby begreift zum ersten Mal, dass es eine von den Eltern getrennte Person ist und diese weggehen können!</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Vierfüßlerstand:</strong> Das Baby geht auf Hände und Knie und wippt rhythmisch vor und zurück (der Startmotor fürs Krabbeln).</li>\n                  <li><strong>Drehscheibe:</strong> Im Liegen dreht sich das Baby um 360 Grad im Kreis auf dem Bauch.</li>\n                  <li><strong>Scherengriff:</strong> Greift Gegenstände zwischen Daumen und die Seite des Zeigefingers.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🚨 Kindersicherung jetzt Pflicht!</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Steckdosensicherungen in der gesamten Wohnung anbringen.</li>\n                  <li>Treppenschutzgitter oben und unten montieren.</li>\n                  <li>Putzmittel, Medikamente und Kosmetika in verschließbare Oberschränke räumen.</li>\n                  <li>Kabel sichern, Tischdecken entfernen (Baby zieht daran!).</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & 8-Monats-Regression:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>2,5 bis 3 Stunden</strong>.</li>\n                  <li>Wegen Trennungsangst und motorischem Üben im Schlaf wachen viele Babys nachts wieder häufiger auf. Viel Körperkontakt und sanfte Begleitung helfen durch diese Phase.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Ernährung:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Einführung des <strong>3. Breis: Getreide-Obst-Brei (GOB)</strong> am Nachmittag.</li>\n                  <li>Die Breie dürfen stückiger werden; weiche Brotrinde oder gedünstete Karotte zum Kauen anbieten.</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "month": 9,
    "title": "Monat 9: Der Pinzettengriff & Objektpermanenz",
    "motto": "Kuckuck, da bin ich! Feinmotorische Präzision und das Versteckspiel",
    "badge": "Woche 33 bis 36",
    "summary": "Wachfenster 2,5–3,5h, Pinzettengriff perfektioniert, Objektpermanenz voll aktiv, Krabbeln & selbstständiges Aufsetzen.",
    "milestones": [
      "Pinzettengriff",
      "Objektpermanenz",
      "Selbstständig Aufsetzen",
      "2 Tagschläfchen"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DER PINZETTENGRIFF & DIE OBJEKTPERMANENZ</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Zwei gigantische Meilensteine treffen in Monat 9 aufeinander: Der feinmotorische Pinzettengriff (Greifen kleinster Krümel mit Daumen und Zeigefingerspitze) und das Verständnis, dass Dinge weiter existieren, auch wenn sie verdeckt sind.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Der Pinzettengriff:</strong> Hebt kleinste Fussel oder Erbsen punktgenau mit Daumen und Zeigefinger auf. <em>Achtung Kleinteile-Verschluckungsgefahr!</em></li>\n                  <li><strong>Selbstständiges Aufsetzen:</strong> Das Baby setzt sich aus dem Vierfüßlerstand oder über den Seitsitz selbstständig stabil hin.</li>\n                  <li><strong>Freies Krabbeln:</strong> Viele Babys krabbeln nun zügig im Kreuzgang durch die Wohnung.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🧠 Kognition & Sprachverständnis:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Kuckuck-Spiele:</strong> Zieht ein Tuch vom eigenen Kopf oder sucht versteckte Spielzeuge unter Kissen.</li>\n                  <li><strong>Wortverständnis:</strong> Reagiert auf seinen Namen, blickt sich um bei 'Wo ist Papa?' oder 'Wo ist der Ball?'.</li>\n                  <li><strong>'Nein' verstehen:</strong> Versteht ein deutliches 'Nein' mit Mimik (hält kurz inne, testet aber Grenzen aus!).</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Fester 2-Schläfchen-Rhythmus:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>2,5 bis 3,5 Stunden</strong>.</li>\n                  <li>Fast alle Babys schlafen nun stabil in 2 Tagschläfchen (Vormittag ca. 1h, Mittag ca. 1,5–2h). Das Abend-Schläfchen entfällt komplett.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Essen:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Mit dem Pinzettengriff macht Fingerfood riesigen Spaß (weiche Nudeln, weiche Bananenstücke, gekochte Gemüsestücke).</li>\n                  <li>Selbstständiges Trinken aus dem Schnabelbecher oder Becher mit zwei Henkeln.</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "month": 10,
    "title": "Monat 10: Hochziehen in den Stand & Imitation",
    "motto": "Die Welt von oben: Das Hochziehen an Möbeln und Nachahmen von Gesten",
    "badge": "Woche 37 bis 40",
    "summary": "Wachfenster 3–3,5h, Hochziehen an Möbeln in den Stand, Winken ('Tschüss'), Klatschen, Kniestand.",
    "milestones": [
      "Hochziehen an Möbeln",
      "Winken & Klatschen",
      "Kniestand",
      "Erste Gesten"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: DIE VERTIKALE PERSPEKTIVE</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Auf dem Boden liegen war gestern: Dein Baby zieht sich an Tischbeinen, Sofakanten und Gitterstäben mit ganzer Kraft in den Kniestand und den Stand hoch! Die Welt von oben zu sehen beflügelt seinen Forscherdrang.</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Hochziehen in den Stand:</strong> Zieht sich kraftvoll an stabilen Gegenständen hoch. Zu Beginn weiß es oft noch nicht, wie es wieder nach unten kommt und weint. Zeige ihm, wie man in die Knie geht!</li>\n                  <li><strong>Sicheres Sitzen:</strong> Sitzt mit geradem Rücken auf dem Boden und kann sich zur Seite drehen, ohne das Gleichgewicht zu verlieren.</li>\n                  <li><strong>Beidhändiges Hantieren:</strong> Hält in jeder Hand einen Gegenstand und schlägt sie gezielt zusammen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🗣️ Imitation & Gesten:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Winken:</strong> Hebt die Hand und winkt zum Abschied ('Tschüss-Tschüss').</li>\n                  <li><strong>In die Hände klatschen:</strong> Klatscht begeistert mit ('Bravo' / 'Klatsch-Klatsch').</li>\n                  <li><strong>Kopfschütteln:</strong> Schüttelt den Kopf für 'Nein', wenn es satt ist.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf & 10-Monats-Regression:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>3 bis 3,5 Stunden</strong>.</li>\n                  <li>Babys stehen nachts plötzlich im Bettchen und finden nicht zurück in den Liegemodus. Ruhig hinlegen, Hand auflegen, nicht hochnehmen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Familientisch rückt näher:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Brei wird zunehmend durch weiche Familienkost ersetzt (Kartoffelstücke, weiches Fleisch, Gemüsestücke).</li>\n                  <li>Baby will mit dem eigenen Löffel experimentieren (viel Geduld bei Kleckereien!).</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "month": 11,
    "title": "Monat 11: Seitliches Entlanglaufen & Eigenwille",
    "motto": "Cruising an Möbeln: Die ersten Schritte zur Seite und das Erwachen des eigenen Willens",
    "badge": "Woche 41 bis 44",
    "summary": "Wachfenster 3–4h, seitliches Entlanglaufen an Möbeln ('Cruising'), erstes freies Stehen für Sekunden, Zeigegeste.",
    "milestones": [
      "Cruising an Möbeln",
      "Freies Stehen kurz",
      "Zeigegeste mit Zeigefinger",
      "U6 Vorbereitung"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-sky-50 border-l-4 border-sky-600 rounded-r-xl\">\n              <h4 class=\"text-sky-900 font-extrabold text-base m-0\">DAS LEITMOTTO: 'CRUISING' ENTLANG DER MÖBEL</h4>\n              <p class=\"text-sky-800 text-sm mt-1 m-0\">Dein Baby läuft seitlich an Sofas, Couchtischen und Wänden entlang ('Cruising'). Es hangelt sich von Möbelstück zu Möbelstück und probiert manchmal für 2 Sekunden mutig das freie Stehen!</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Seitliches Laufen:</strong> Festes Festhalten mit einer Hand und sicheres Trippeln an Möbelkanten entlang.</li>\n                  <li><strong>In die Hocke gehen:</strong> Geht aus dem Stand in die Knie, um ein Spielzeug aufzuheben, und drückt sich wieder hoch.</li>\n                  <li><strong>Ein-Hand-Greifen im Stehen:</strong> Hält sich mit einer Hand fest und manipuliert mit der anderen Hand Spielzeug.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🗣️ Die Zeigegeste & Sprachverständnis:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Zeigen mit dem Zeigefinger:</strong> Zeigt auf Dinge, die es haben will oder die es spannend findet ('Da! Da!'). Das sogenannte <em>deklarative Zeigen</em> ist ein Meilenstein sozialer Intelligenz.</li>\n                  <li><strong>Aufträge verstehen:</strong> Versteht 'Gib Mama den Ball' oder 'Wo sind deine Schuhe?'.</li>\n                  <li><strong>Erstes echtes Wort möglich:</strong> Manche Babys sprechen nun ihr erstes bewusstes Wort ('Mama', 'Papa', 'Wauwau', 'Auto').</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Wachfenster:</strong> <strong>3 bis 4 Stunden</strong>.</li>\n                  <li>Das letzte Wachfenster vor der Bettgehzeit ist meist das längste des Tages (ca. 3,5–4h), um genügend Schlafdruck aufzubauen.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">⚠️ Barfuß ist am gesündesten:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Keine festen Schuhe in der Wohnung! Barfußlaufen oder rutschfeste Stoppersocken stärken die Fußgewölbemuskulatur und die sensorische Rückmeldung des Bodens am besten.</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        "
  },
  {
    "month": 12,
    "title": "Monat 12: Der erste Geburtstag & Übergang zum Kleinkind!",
    "motto": "Ein ganzes Jahr voller Wunder: Freie Schritte, erste Worte und der Familientisch",
    "badge": "Woche 45 bis 52",
    "summary": "Geburtsgewicht verdreifacht, erste freie Schritte oder sicheres Stehen, 2–4 Wörter mit Sinnbezug, U6 & MMRV-Impfung.",
    "milestones": [
      "1. Geburtstag!",
      "Erste freie Schritte",
      "Erste Wörter",
      "U6 Check"
    ],
    "contentHtml": "\n          <div class=\"space-y-6\">\n            <div class=\"p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl\">\n              <h4 class=\"text-emerald-900 font-extrabold text-base m-0\">HERZLICHEN GLÜCKWUNSCH ZUM 1. GEBURTSTAG!</h4>\n              <p class=\"text-emerald-800 text-sm mt-1 m-0\">Aus dem hilflosen Neugeborenen ist ein neugieriges, eigenständiges Kleinkind geworden. Sein Geburtsgewicht hat sich im Schnitt verdreifacht und seine Körperlänge um rund 50% zugenommen. Ihr habt das intensivste Jahr gemeistert!</p>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💪 Motorische Meilensteine mit 1 Jahr:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Gehen oder Cruisen:</strong> Manche Kinder laufen mit 12 Monaten frei, viele erst mit 14 oder 16 Monaten – beides ist vollkommen normal!</li>\n                  <li><strong>Freies Stehen:</strong> Steht frei im Raum für mehrere Sekunden mit ausgestreckten Balance-Armen.</li>\n                  <li><strong>Feinmotorik:</strong> Blättert dicke Pappbilderbuchseiten um, steckt Ringe auf einen Stab, baut 2-Klötzchen-Türme.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🗣️ Sprache & Kognition:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Erste Wörter:</strong> 1 bis 3 Wörter mit konkreter Bedeutung ('Mama', 'Papa', 'Ball', 'Nein').</li>\n                  <li><strong>Tierlaute imitieren:</strong> Macht 'Wauwau', 'Muh' oder 'Miau' nach.</li>\n                  <li><strong>Einfache Bitten:</strong> Versteht Aufforderungen wie 'Bring mir den Becher' oder 'Komm her'.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm\">\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">🥣 Familientisch ab 1 Jahr:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li>Das Kind darf fast alles vom Familientisch mitessen (salzarm zubereiten!).</li>\n                  <li><strong>Weiterhin verboten:</strong> Ganze Nüsse (Erstickungsgefahr bis 4–5 Jahre!) und Alkohol in Speisen.</li>\n                  <li><strong>Honig ab jetzt erlaubt:</strong> Nach dem 1. Geburtstag ist die Darmflora reif genug gegen Botulinumsporen.</li>\n                  <li>Kuhmilch kann nun als Trinkmilch (max. 300 ml/Tag inklusive Käse/Joghurt) gegeben werden.</li>\n                </ul>\n              </div>\n\n              <div class=\"p-4 bg-white border border-slate-200 rounded-xl shadow-sm\">\n                <strong class=\"text-slate-900 font-bold block mb-1\">💤 Schlaf mit 12 Monaten:</strong>\n                <ul class=\"list-disc list-inside space-y-1 text-slate-700 text-xs\">\n                  <li><strong>Schlafbedarf:</strong> ca. 12 bis 14 Stunden pro 24h.</li>\n                  <li><strong>Wachfenster:</strong> <strong>3 bis 4 Stunden</strong>.</li>\n                  <li>Die meisten Kinder schlafen noch 2x tagsüber. Ein Wechsel auf 1 Mittagsschlaf erfolgt meist erst zwischen Monat 13 und 18.</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700\">\n              <strong class=\"text-slate-900 font-bold block mb-1\">🩺 Vorsorge U6 (10.–12. Lebensmonat) & Impfungen:</strong>\n              Großer Checkup: Körpermaße, Bewegungsapparat, Sprachentwicklung, Interaktion. STIKO-Impfung: 1. Dosis <strong>MMRV (Masern, Mumps, Röteln, Windpocken)</strong> und Meningokokken B / C.\n            </div>\n          </div>\n        "
  }
];
  const STOOL_COLOR_GUIDE = [
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
];
  const TEETH_DATA = {
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
};
  const AGE_STAGES_DATA = [
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
];
  const MODULES = [
    {
      id: "module-0",
      title: "Modul 0: Lebenswichtige Grundregeln & Notfälle",
      badge: "🚨 Top Priorität",
      description: "Was jedes Elternpaar VOR der Geburt wissen MUSS: Schütteltrauma, SIDS-Prävention, giftige Stoffe & Notrufe.",
      lessons: [
        {
          id: "l0-1",
          title: "Schütteltrauma: Warum 2 Sekunden dein Baby zerstören",
          readTime: "4 Min",
          category: "safety",
          content: `
            <h3>Die Anatomie des Babys verstehen</h3>
            <p>Ein Neugeborenes hat eine sehr schwache Nackenmuskulatur und einen Kopf, der ein Viertel seines Körpergewichts ausmacht. Die Blutgefäße im Gehirn (Brückenvenen) sind zart und reißen bei ruckartigen Hin- und Herbewegungen sofort ab.</p>
            <div class="warning-box">
              <strong>Typische Auslöser bei Eltern:</strong>
              Schlafmangel, Erschöpfung, stundenlanges Weinen („Schreibaby“) und das Gefühl der Machtlosigkeit. Schütteln passiert fast nie aus Bosheit, sondern aus einem plötzlichen Kontrollverlust!
            </div>
            <h3>Der SOS-Ablauf, wenn du nicht mehr kannst:</h3>
            <ol>
              <li><strong>STOP:</strong> Halte inne, atme aus.</li>
              <li><strong>ABLEGEN:</strong> Lege das Kind sicher flach in sein Gitterbett oder auf den Boden (auf eine Decke).</li>
              <li><strong>RAUM VERLASSEN:</strong> Geh ins Nachbarzimmer, schließe die Tür.</li>
              <li><strong>REIZABSCHIRMUNG:</strong> Trinke ein Glas Wasser, wasche dein Gesicht mit kaltem Wasser.</li>
              <li><strong>HILFE RUFEN:</strong> Rufe deinen Partner an, Freunde, oder nutze das <em>Elterntelefon (0800 111 0550)</em>.</li>
            </ol>
          `
        },
        {
          id: "l0-2",
          title: "SIDS-Prävention: Die sichere Schlafumgebung",
          readTime: "5 Min",
          category: "sleep",
          content: `
            <h3>Die 'ABC-Regel' des sicheren Schlafs</h3>
            <p>Internationale Kinderärzte fassen den sicheren Schlaf oft mit <strong>ABC</strong> zusammen:</p>
            <ul>
              <li><strong>A - ALONE (Allein im eigenen Bettchen):</strong> Keine Decken, Kissen, Nestchen, Lagerungskissen oder Geschwisterkinder im Babybett.</li>
              <li><strong>B - BACK (Auf dem Rücken):</strong> Immer in Rückenlage hinlegen. Babys ersticken in Rückenlage NICHT am Erbrochenen.</li>
              <li><strong>C - CRIB (Sicheres Bett):</strong> Feste, atmungsaktive Matratze, keine Ritzen, Gitterstäbe mit 4,5 bis 6,5 cm Abstand.</li>
            </ul>
          `
        },
        {
          id: "l0-3",
          title: "Atemnot, Fieber & Notfall-Checkliste",
          readTime: "6 Min",
          category: "safety",
          content: `
            <h3>Fieber messen: Wie und wo?</h3>
            <p>Der einzig verlässliche Ort für die Fiebermessung bei Babys ist <strong>rektal (im Po)</strong> mit einer flexiblen Thermometerspitze und etwas Wundsalbe/Vaseline. Ohr- oder Stirnthermometer sind bei Säuglingen ungenau.</p>
            <ul>
              <li><strong>36,5°C – 37,5°C:</strong> Normale Körpertemperatur</li>
              <li><strong>37,6°C – 37,9°C:</strong> Erhöhte Temperatur</li>
              <li><strong>Ab 38,0°C:</strong> Fieber! Bei Babys unter 3 Monaten IMMER Notarzt / Notaufnahme aufsuchen!</li>
            </ul>
          `
        }
      ]
    },
    {
      id: "module-1",
      title: "Modul 1: Die ersten Tage & das Wochenbett (0–2 Wochen)",
      badge: "👶 Die Ankunft",
      description: "Bonding, Nabelschnurpflege, Hormonchaos, erste Untersuchungen (U1-U3) und die Rolle des Partners.",
      lessons: [
        {
          id: "l1-1",
          title: "Die goldene Stunde & Bonding",
          readTime: "4 Min",
          category: "newborn",
          content: `
            <h3>Haut-an-Haut: Die magische erste Zeit</h3>
            <p>Unmittelbar nach der Geburt gehört das Baby nackt auf die nackte Brust der Mutter (oder des Partners). Dieses <em>Bonding</em> reguliert Herzfrequenz, Blutzuckerspiegel und Temperatur des Babys und schüttet beruhigendes Oxytocin aus.</p>
          `
        },
        {
          id: "l1-2",
          title: "Nabelpflege: Heilen ohne Panik",
          readTime: "3 Min",
          category: "care",
          content: `
            <h3>Trocken und sauber halten</h3>
            <p>Der Nabelstumpf fällt meist zwischen dem 5. und 14. Lebenstag von selbst ab. Windel vorne umschlagen, damit kein Urin an den Nabel gerät. Keine Puder oder Salben ohne Hebammenanweisung auftragen.</p>
          `
        },
        {
          id: "l1-3",
          title: "Baby Blues vs. Postpartale Depression (PPD)",
          readTime: "5 Min",
          category: "mental",
          content: `
            <h3>Hormonabfall nach Tag 3</h3>
            <p>Bis zu 80% aller Mütter weinen an Tag 3–5 ('Heultage'). Das ist hormonell bedingt und normal. Hält die Niedergeschlagenheit, Freudlosigkeit oder Angst länger als 2 Wochen an, liegt eine behandlungsbedürftige postpartale Depression vor.</p>
          `
        },
        {
          id: "l1-4",
          title: "U-Untersuchungen & Vitamin K / D Prophylaxe",
          readTime: "4 Min",
          category: "health",
          content: `
            <h3>U1 bis U3 & Rachitis-Schutz</h3>
            <p>Vitamin K schützt vor lebensbedrohlichen Blutungen im Neugeborenenalter. Vitamin D (400–500 I.E. täglich) schützt im gesamten ersten Lebensjahr vor Rachitis (Knochenerweichung).</p>
          `
        }
      ]
    },
    {
      id: "module-2",
      title: "Modul 2: Ernährung – Stillen, Flasche & Bäuerchen",
      badge: "🍼 Füttern & Trinken",
      description: "Anlegetechniken, Pre-Milch, Paced Bottle Feeding, Milchstau verhindern, Bäuerchen & Koliken.",
      lessons: [
        {
          id: "l2-1",
          title: "Stillen meistern: Anlegen ohne Schmerzen",
          readTime: "6 Min",
          category: "feeding",
          content: `
            <h3>Schmerzen beim Stillen sind ein Warnsignal</h3>
            <p>Das Baby muss einen großen Teil des Warzenhofs erfassen, nicht nur die Brustwarzenkuppe. Die Lippen müssen wie Kirschblüten nach außen gestülpt sein. Vakuum immer mit dem kleinen Finger im Mundwinkel lösen!</p>
          `
        },
        {
          id: "l2-2",
          title: "Formula / Pre-Nahrung: Richtig füttern mit der Flasche",
          readTime: "5 Min",
          category: "feeding",
          content: `
            <h3>Ausschließlich Pre-Nahrung im 1. Jahr</h3>
            <p>Pre-Nahrung enthält wie Muttermilch ausschließlich Laktose und kann nach Bedarf gefüttert werden. Paced Bottle Feeding: Flasche waagerecht halten und Pausen einlegen, um Überfütterung zu verhindern.</p>
          `
        },
        {
          id: "l2-3",
          title: "Bäuerchen, Spucken & die berühmten Koliken",
          readTime: "5 Min",
          category: "feeding",
          content: `
            <h3>Der Fliegergriff & Bauchmassage</h3>
            <p>Bauchlage auf dem Unterarm massiert Gase sanft heraus. Beinchen im Uhrzeigersinn anwinkeln ('Fahrradfahren'). Spucken nach dem Trinken ist harmlos, solange das Baby normal zunimmt.</p>
          `
        }
      ]
    },
    {
      id: "module-3",
      title: "Modul 3: Babyschlaf, Wachfenster & Beruhigung",
      badge: "💤 Schlaf & Ruhe",
      description: "Schlafzyklen verstehen, Wachfenster nach Alter, die 5 S's Beruhigungsmethode & Einschlafhilfen.",
      lessons: [
        {
          id: "l3-1",
          title: "Schlafarchitektur: Warum Babys ständig aufwachen",
          readTime: "5 Min",
          category: "sleep",
          content: `
            <h3>45-Minuten-Zyklen und aktiver REM-Schlaf</h3>
            <p>Babys verbringen 50% der Zeit im Leichtschlaf. Sie zucken, stöhnen und lächeln. Nicht jedes Geräusch bedeutet, dass das Baby wach ist – warte erst kurz ab, bevor du eingreifst.</p>
          `
        },
        {
          id: "l3-2",
          title: "Wachfenster: Das Geheimnis gegen Übermüdung",
          readTime: "4 Min",
          category: "sleep",
          content: `
            <h3>Cortisolausschüttung verhindern</h3>
            <p>Neugeborene sind nach 45–60 Minuten müde. Achte auf frühe Müdigkeitszeichen: Glasiger Blick, rote Augenbrauen, Blick abwenden.</p>
          `
        },
        {
          id: "l3-3",
          title: "Die 5 S's Beruhigungsmethode (Dr. Harvey Karp)",
          readTime: "5 Min",
          category: "soothing",
          content: `
            <h3>Den Beruhigungsreflex aktivieren</h3>
            <p>Swaddle (Pucken), Side/Stomach (Seitenhaltung auf dem Arm), Shush (Weißes Rauschen), Swing (Wiegen) und Suck (Saugen an Schnuller oder Finger).</p>
          `
        }
      ]
    },
    {
      id: "module-4",
      title: "Modul 4: Hygiene, Wickeln & Hautpflege",
      badge: "🛁 Pflege & Hygiene",
      description: "Windeldermatitis vorbeugen, sanftes Babybad, Nabelhygiene, Nägel schneiden & Milchschorf.",
      lessons: [
        {
          id: "l4-1",
          title: "Richtig Wickeln & Wunden Po verhindern",
          readTime: "5 Min",
          category: "care",
          content: `
            <h3>Nur Wasser an den Neugeborenen-Po</h3>
            <p>Feuchttücher greifen die Hautbarriere an. Mädchen immer strikt von vorne nach hinten wischen. Vorhaut bei Jungen niemals zurückziehen! Luft an den Po lassen.</p>
          `
        },
        {
          id: "l4-2",
          title: "Das erste Babybad: Entspannt & sicher",
          readTime: "4 Min",
          category: "care",
          content: `
            <h3>37 Grad Celsius & sicherer Griff</h3>
            <p>1–2 Mal pro Woche reicht völlig. Keine Schaumbäder; etwas Muttermilch oder ein Tropfen Mandelöl ins Badewasser geben.</p>
          `
        },
        {
          id: "l4-3",
          title: "Nägel, Haare & Kopfgneis vs. Milchschorf",
          readTime: "4 Min",
          category: "care",
          content: `
            <h3>Kopfgneis (harmlos) vs. Milchschorf (Neurodermitis-Vorstufe)</h3>
            <p>Kopfgneis juckt nicht und stört das Baby nicht. Milchschorf juckt quälend und erfordert kinderärztliche Behandlung.</p>
          `
        }
      ]
    },
    {
      id: "module-5",
      title: "Modul 5: Sprache des Babys & Entwicklung",
      badge: "🧠 Gehirn & Sprache",
      description: "Dunstan Baby Language, Tummy Time (Bauchlage), Meilensteine und Entwicklungssprünge.",
      lessons: [
        {
          id: "l5-1",
          title: "Die Dunstan Baby Language: Laute entschlüsseln",
          readTime: "5 Min",
          category: "communication",
          content: `
            <h3>Die 5 Laute vor dem Weinen:</h3>
            <p>Neh (Hunger), Owh (Müde), Heh (Unwohl), Eairh (Bauchweh/Blähung), Eh (Bäuerchen).</p>
          `
        },
        {
          id: "l5-2",
          title: "Tummy Time: Warum die Bauchlage am Tag Pflicht ist",
          readTime: "4 Min",
          category: "development",
          content: `
            <h3>Back to sleep, tummy to play</h3>
            <p>Täglich im wachen Zustand unter Aufsicht auf den Bauch legen, um den Hinterkopf vor Verformung zu schützen und die Nackenmuskeln zu kräftigen.</p>
          `
        }
      ]
    },
    {
      id: "module-6",
      title: "Modul 6: Beikoststart & Esssicherheit",
      badge: "🥣 Essen & Beiwerk",
      description: "Die 3 Reifezeichen, Brei vs. BLW, Erstickungsgefahr minimieren, Würgen vs. Ersticken.",
      lessons: [
        {
          id: "l6-1",
          title: "Wann ist mein Baby bereit? Die 3 Reifezeichen",
          readTime: "5 Min",
          category: "nutrition",
          content: `
            <h3>Die 3 Kriterien:</h3>
            <p>Aufrechter Sitz mit leichter Unterstützung, Zungenstoßreflex erloschen, zielgerichtetes Greifen zum Mund. Niemals vor Beginn des 5. Monats!</p>
          `
        },
        {
          id: "l6-2",
          title: "Würgen (Gagging) vs. Ersticken (Choking)",
          readTime: "5 Min",
          category: "safety",
          content: `
            <h3>Lautes Würgen schützt – lautloses Ersticken tötet</h3>
            <p>Würgen ist laut und rot im Gesicht. Ersticken ist völlig lautlos und das Kind wird blau. Niemals blind mit den Fingern im Mund tasten!</p>
          `
        }
      ]
    },
    {
      id: "module-7",
      title: "Modul 7: Erste Hilfe & Notfall-Handgriffe",
      badge: "🆘 Lebensrettung",
      description: "Verschlucken, Reanimation beim Säugling, Fieberkrampf & Vergiftungen.",
      lessons: [
        {
          id: "l7-1",
          title: "Sofortmaßnahme bei Erstickungsnotfall (Fremdkörper)",
          readTime: "5 Min",
          category: "safety",
          content: `
            <h3>5 Rückenschläge & 5 Brustkompressionen</h3>
            <p>Baby in Kopftieflage auf den Unterarm legen, 5 feste Schläge zwischen die Schulterblätter. Wenn erfolglos: Umdrehen und 5 Herzdruckmassagen mit 2 Fingern durchführen.</p>
          `
        },
        {
          id: "l7-2",
          title: "Wiederbelebung (Reanimation) beim Säugling",
          readTime: "6 Min",
          category: "safety",
          content: `
            <h3>5 Beatmungen zuerst!</h3>
            <p>Mund UND Nase gleichzeitig umschließen, 5 sanfte Atemstöße aus den Wangen. Anschließend 30 Herzdruckmassagen im Wechsel mit 2 Beatmungen (30:2).</p>
          `
        }
      ]
    },
    {
      id: "module-8",
      title: "Modul 8: Must-Haves vs. Gefährlicher Schrott",
      badge: "🛒 Anschaffungen",
      description: "Was braucht man wirklich zur Geburt und was ist Geldverschwendung oder sogar gefährlich?",
      lessons: [
        {
          id: "l8-1",
          title: "Gefährliche Produkte, die du NIEMALS kaufen solltest",
          readTime: "4 Min",
          category: "equipment",
          content: `
            <h3>Gehfrei, Nestchen und Bernsteinketten</h3>
            <p>Lauflernhilfen führen zu Treppenstürzen. Nestchen erhöhen das SIDS-Risiko. Bernsteinketten bergen Strangulationsgefahr.</p>
          `
        }
      ]
    }
  ];
  const DOS_AND_DONTS = [
    {
      id: "cat-sleep",
      category: "Schlaf & Sicherheit",
      dos: [
        {
          id: "do-back-sleep",
          title: "Immer auf dem Rücken schlafen legen",
          desc: "Rückenlage ist die mit Abstand sicherste Schlafposition zur Verhinderung von SIDS.",
          deepDiveHtml: `
            <h4>Warum ist die Rückenlage so wichtig?</h4>
            <p>Vor den 1990er Jahren empfahl man oft die Bauchlage. Die Folge waren weltweit zehntausende SIDS-Fälle. Seit der Einführung der strikten Rückenlage-Empfehlung sank die Säuglingssterblichkeit um über 80%.</p>
            <h4>Die Schutzmechanismen in Rückenlage:</h4>
            <ul>
              <li>Freie Atemwege: Mund und Nase werden nicht durch Matratzenfalten verdeckt.</li>
              <li>Keine Überhitzung der Gesichtshaut (über das Gesicht wird Wärme abgeführt).</li>
              <li>Reflexe funktionieren: Wenn das Kind spuckt, schützt die Schwerkraft davor, dass Flüssigkeit in die tiefer liegende Luftröhre läuft.</li>
            </ul>
          `
        },
        {
          id: "do-sleeping-bag",
          title: "Passenden Schlafsack verwenden",
          desc: "Halsausschnitt darf nicht über das Köpfchen rutschen. Keine Decken oder lose Tücher.",
          deepDiveHtml: `
            <h4>Warum Schlafsäcke Decken überlegen sind:</h4>
            <p>Ein Baby bewegt im Schlaf reflexartig die Beine. Eine Decke wird im Schlaf leicht über das Gesicht gezogen. Babys haben in den ersten Monaten nicht die motorische Koordination, eine Decke mit den Händen vom Gesicht wegzuschieben.</p>
            <p><strong>Die richtige Größe:</strong> Körperlänge minus Kopflänge plus 10–15 cm zum Strampeln. Der Halsausschnitt darf nicht größer sein als der Kopfumfang!</p>
          `
        },
        {
          id: "do-room-temp",
          title: "Schlafzimmertemperatur 16–18°C",
          desc: "Kühle Raumluft und gute Belüftung schützen vor gefährlicher Überhitzung.",
          deepDiveHtml: `
            <h4>Der gefährliche Zusammenhang zwischen Hitze und Atemstillstand:</h4>
            <p>Überhitzung führt dazu, dass das Atemzentrum im Hirnstamm in einen zu tiefen Schlaf fällt und bei CO2-Anstieg nicht rechtzeitig aufwacht (Arousal-Defekt). 16 bis 18 Grad ist die medizinisch empfohlene Optimaltemperatur.</p>
          `
        },
        {
          id: "do-room-share",
          title: "Baby im eigenen Bettchen im Elternzimmer",
          desc: "Die Atemgeräusche der Eltern stimulieren das unreife Atemzentrum des Babys positiv.",
          deepDiveHtml: `
            <h4>Room-Sharing senkt SIDS um 50%:</h4>
            <p>Wenn das Baby im selben Zimmer wie die Eltern schläft, nimmt es im Unterbewusstsein die Atem- und Bewegungsgeräusche der Eltern wahr. Das verhindert, dass der Säugling in pathologisch tiefe Schlafphasen abgleitet.</p>
          `
        }
      ],
      donts: [
        {
          id: "dont-shake",
          title: "Niemals das Baby schütteln!",
          desc: "Bereits minimales Schütteln führt zu tödlichen Hirnblutungen und schweren Behinderungen.",
          deepDiveHtml: `
            <h4>Warum schon 2 Sekunden tödlich sind:</h4>
            <p>Kopfgewicht beträgt 25% des Körpers. Nackenmuskeln halten den Kopf nicht. Blutgefäße im Gehirn reißen ab. Wenn die Nerven blank liegen: Baby sofort ins sichere Bett legen, Raum verlassen und 5 Minuten durchatmen!</p>
          `
        },
        {
          id: "dont-loose-bedding",
          title: "Keine Decken, Kissen, Felle oder Kuscheltiere im Bett",
          desc: "Erstickungs- und CO2-Rückatmungsgefahr durch lose Textilien im Schlafbereich.",
          deepDiveHtml: `
            <h4>Was ist CO2-Rückatmung?</h4>
            <p>Wenn ein Kissen oder Kuscheltier vor Babys Gesicht liegt, atmet es seine eigene ausgeatmete Luft (Kohlendioxid) wieder ein. Der Sauerstoffgehalt im Blut sinkt, ohne dass das Baby reflexartig erwacht.</p>
          `
        },
        {
          id: "dont-couch-sleep",
          title: "Niemals mit dem Baby auf dem Sofa einschlafen",
          desc: "Extrem hohe Einklemm- und Erstickungsgefahr in Sofaritzen bei übermüdeten Eltern.",
          deepDiveHtml: `
            <h4>Sofa-Schlafen ist die gefährlichste Schlafumgebung:</h4>
            <p>Studien zeigen, dass das Einschlafen mit dem Säugling auf einem Sofa oder Polstersessel das Erstickungsrisiko um das <strong>50- bis 60-Fache</strong> erhöht! Das Baby rutscht zwischen die Kissen oder unter den Körper des erschöpften Elternteils.</p>
          `
        },
        {
          id: "dont-smoking",
          title: "Niemals in der Wohnung oder im Auto rauchen",
          desc: "Rauchen ist der stärkste vermeidbare Risikofaktor für plötzlichen Kindstod.",
          deepDiveHtml: `
            <h4>Passivrauch lähmt das Atemzentrum:</h4>
            <p>Nikotin und Giftstoffe lagern sich in Kleidung und Polstern ab. Babys von Rauchern haben nachweislich geringere Weckreaktionen bei Sauerstoffmangel.</p>
          `
        }
      ]
    },
    {
      id: "cat-feeding",
      category: "Ernährung & Trinken",
      dos: [
        {
          id: "do-pre-milk",
          title: "Ausschließlich Muttermilch oder Pre-Nahrung bis 6 Monate",
          desc: "Pre-Nahrung ist der Muttermilch am ähnlichsten und kann nicht überfüttert werden.",
          deepDiveHtml: `
            <h4>Warum Pre und keine 1er oder 2er Milch?</h4>
            <p>Pre-Nahrung enthält als einziges Kohlenhydrat Milchzucker (Laktose) – genau wie Muttermilch. Folgemilch (1, 2, 3) enthält Stärke, sättigt künstlich und führt zu unnötiger Kalorienbelastung.</p>
          `
        },
        {
          id: "do-feed-demand",
          title: "Nach Bedarf füttern (Ad libitum)",
          desc: "Keine starren 4-Stunden-Pläne. Füttere, sobald frühe Hungerzeichen sichtbar sind.",
          deepDiveHtml: `
            <h4>Frühe Hungerzeichen:</h4>
            <p>Schlecken an Lippen, Suchen mit dem Mund (Rooting), Saugen an Fäustchen. Schreien ist bereits ein spätes Hungerzeichen!</p>
          `
        },
        {
          id: "do-wait-readiness",
          title: "Alle 3 Beikost-Reifezeichen abwarten",
          desc: "Aufrechtes Sitzen, erloschener Zungenstoßreflex und gezieltes Greifen zum Mund.",
          deepDiveHtml: `
            <h4>Warum der Darm Reifezeit braucht:</h4>
            <p>Vor der 17. Woche ist die Darmschleimhaut zu durchlässig für Fremdeiweiße (Open Gut) und die Nieren können die Osmolarität fester Nahrung nicht regulieren.</p>
          `
        },
        {
          id: "do-quarter-round-food",
          title: "Runde Lebensmittel immer vierteln",
          desc: "Trauben, Heidelbeeren und Cocktailtomaten immer der Länge nach vierteln.",
          deepDiveHtml: `
            <h4>Die perfekte Abdichtung der Luftröhre verhindern:</h4>
            <p>Runde Lebensmittel haben exakt den Durchmesser der kindlichen Luftröhre und dichten sie wie ein Korken komplett ab. Ein Vierteln bricht diese Kugelform auf.</p>
          `
        }
      ],
      donts: [
        {
          id: "dont-water-under-6m",
          title: "Niemals Wasser vor dem 6. Monat geben",
          desc: "Führt zu lebensgefährlicher Wasservergiftung (Hyponatriämie) und Hirnschwellung.",
          deepDiveHtml: `
            <h4>Wasservergiftung verstehen:</h4>
            <p>Die Nieren filtern kein freies Wasser heraus. Das Blut verdünnt sich, Natrium sinkt, Zellen schwellen an -> Hirnödem und Krampfanfall.</p>
          `
        },
        {
          id: "dont-honey-1y",
          title: "Keinen Honig vor dem 1. Geburtstag",
          desc: "Gefahr von lebensgefährlichem Säuglingsbotulismus durch Bakteriensporen.",
          deepDiveHtml: `
            <h4>Sporen von Clostridium botulinum:</h4>
            <p>Keimen im Darm aus und lähmen die Atemmuskeln. Auch kein Ahornsirup oder Backwaren mit Honig!</p>
          `
        },
        {
          id: "dont-nuts",
          title: "Keine ganzen Nüsse bis zum 4.–5. Lebensjahr",
          desc: "Nüsse gelangen leicht in die Lunge (Aspiration) und führen zu akutem Ersticken.",
          deepDiveHtml: `
            <h4>Nuss-Aspiration ist ein chirurgischer Notfall:</h4>
            <p>Nüsse quellen in den feuchten Bronchien auf, zersetzen sich ölig und führen zu schweren Lungenentzündungen oder sofortigem Ersticken.</p>
          `
        },
        {
          id: "dont-salt-sugar",
          title: "Kein Salz und kein zugesetzter Zucker im 1. Jahr",
          desc: "Die unreifen Nieren können Salz nicht verarbeiten; Zucker schädigt Zahnanlagen.",
          deepDiveHtml: `
            <h4>Nierenbelastung durch Salz:</h4>
            <p>Babynieren können Natriumkonzentrationen nicht konzentriert ausscheiden. Maximal 1g Salz pro Tag im ersten Jahr (bereits durch natürliche Lebensmittel gedeckt).</p>
          `
        }
      ]
    },
    {
      id: "cat-care",
      category: "Körperpflege & Hygiene",
      dos: [
        {
          id: "do-water-wipes",
          title: "Popo vorwiegend mit lauwarmem Wasser reinigen",
          desc: "Schützt die zarte Säureschutzbarriere am effektivsten vor Windeldermatitis.",
          deepDiveHtml: `
            <h4>Feuchttücher nur für unterwegs:</h4>
            <p>Konservierungsstoffe in Feuchttüchern reizen den feuchten Windelbereich. Weiche Wattepads mit warmem Wasser sind der Goldstandard.</p>
          `
        },
        {
          id: "do-wipe-front-to-back",
          title: "Mädchen immer von vorne nach hinten wischen",
          desc: "Verhindert die Einschleppung von E. coli Darmbakterien in die Harnwege.",
          deepDiveHtml: `
            <h4>Harnwegsinfekte bei Säuglingen:</h4>
            <p>Darmbakterien in der Harnblase führen schnell zu Nierenbeckenentzündungen mit hohem Fieber. Immer in Richtung After wischen!</p>
          `
        },
        {
          id: "do-bath-temp",
          title: "Wassertemperatur beim Baden immer mit Thermometer messen (37°C)",
          desc: "Die Haut von Säuglingen ist dünn und verbrennt bereits bei 40°C in Sekunden.",
          deepDiveHtml: `
            <h4>Säuglingshaut ist 5x dünner:</h4>
            <p>Prüfe immer mit Badethermometer und dem empfindlichen eigenen Ellenbogen vor dem Hineinsetzen.</p>
          `
        },
        {
          id: "do-check-folds",
          title: "Hautfalten (Hals, Achseln, Leisten) täglich kontrollieren & trocknen",
          desc: "Milchreste und Schweiß sammeln sich dort schnell und führen zu schmerzhaftem Wundsein.",
          deepDiveHtml: `
            <h4>Intertrigo verhindern:</h4>
            <p>Haut-an-Haut-Falten feuchten schnell durch. Sanft abtupfen und trocken halten.</p>
          `
        }
      ],
      donts: [
        {
          id: "dont-retract-foreskin",
          title: "Niemals die Vorhaut bei Jungen zurückziehen",
          desc: "Die Vorhaut ist physiologisch verklebt. Gewaltsames Ziehen führt zu Vernarbungen.",
          deepDiveHtml: `
            <h4>Physiologische Phimose:</h4>
            <p>Bei fast allen Neugeborenen ist die Vorhaut mit der Eichel verklebt. Gewaltsames Zurückziehen reißt die Haut ein und führt zu Narbenverengungen.</p>
          `
        },
        {
          id: "dont-talcum-powder",
          title: "Kein Babypuder (Talkum) verwenden",
          desc: "Puderpartikel werden eingeatmet und können schwere Lungenschäden verursachen.",
          deepDiveHtml: `
            <h4>Gefahr der Puder-Aspiration:</h4>
            <p>Aufsteigender Talkumstaub lagert sich in den Alveolen ab und verursacht chemische Pneumonitis.</p>
          `
        },
        {
          id: "dont-qtips-ears",
          title: "Keine Wattestäbchen in den Gehörgang oder die Nase",
          desc: "Schiebt Ohrenschmalz tief nach innen und kann das Trommelfell perforieren.",
          deepDiveHtml: `
            <h4>Selbstreinigung des Ohrs:</h4>
            <p>Ohrenschmalz transportiert Schmutz nach außen. Nur die äußere Ohrmuschel mit einem Tuch abwischen.</p>
          `
        },
        {
          id: "dont-leave-changing-table",
          title: "Baby niemals auch nur eine Sekunde unbeaufsichtigt auf dem Wickeltisch lassen",
          desc: "Sturz vom Wickeltisch ist der häufigste Grund für Schädelbrüche im 1. Lebensjahr!",
          deepDiveHtml: `
            <h4>Immer eine Hand am Baby:</h4>
            <p>Babys drehen sich oft das allererste Mal unerwartet auf dem Wickeltisch. Wenn du etwas vergessen hast: Nimm das Baby auf den Arm oder wickle auf dem Boden!</p>
          `
        }
      ]
    }
  ];
  const QUIZ_QUESTIONS = [
    {
      question: "Was ist der allerwichtigste Schritt, wenn dein Baby unstillbar schreit und du spürst, dass Aggression oder Verzweiflung in dir hochkochen?",
      options: [
        "Das Baby fest im Arm halten und lauter sprechen, damit es aufhört",
        "Das Baby sofort sicher auf den Rücken ins Bettchen legen, den Raum verlassen und 5 Minuten durchatmen",
        "Das Baby leicht rütteln, damit es wieder zu sich kommt",
        "Ihm sofort ein Fläschchen Wasser zur Beruhigung geben"
      ],
      correct: 1,
      explanation: "Schütteln führt in Sekunden zu schwersten Hirnblutungen oder Tod. Die lebensrettende Notfall-Regel lautet: Baby sicher im Bettchen ablegen, Tür zu, durchatmen, Hilfe holen! Ein paar Minuten Weinen im Bett schaden dem Baby nicht."
    },
    {
      question: "Welche Schlafposition ist für Säuglinge die sicherste zur Vermeidung des plötzlichen Kindstods (SIDS)?",
      options: [
        "Ausschließlich die Bauchlage, weil das Baby dann besser aufstoßen kann",
        "Die Seitenlage mit einem Kissen im Rücken",
        "Ausschließlich die Rückenlage",
        "Es ist völlig egal, Hauptsache das Baby schläft ruhig"
      ],
      correct: 2,
      explanation: "Babys müssen im ersten Lebensjahr immer auf den Rücken gelegt werden. Die Atemwege sind in Rückenlage am besten geschützt, und das Risiko für SIDS wird drastisch gesenkt."
    },
    {
      question: "Ab welcher rektal gemessenen Temperatur muss ein Neugeborenes unter 3 Monaten SOFORT als Notfall zum Kinderarzt oder in die Klinik?",
      options: [
        "Ab 37,5°C",
        "Ab 38,0°C",
        "Erst ab 39,5°C",
        "Fieber ist in diesem Alter immer harmlos und stärkt das Immunsystem"
      ],
      correct: 1,
      explanation: "Bei Babys unter 12 Wochen gilt jede rektale Temperatur ab 38,0°C als medizinischer Notfall, da das Immunsystem noch unreif ist und bakterielle Infektionen sich rasant ausbreiten können."
    },
    {
      question: "Warum darf ein Baby unter 12 Monaten unter keinen Umständen Honig zu sich nehmen?",
      options: [
        "Wegen des hohen Zuckergehalts und Kariesgefahr",
        "Weil Honig zu einer lebensbedrohlichen Lähmung (Säuglingsbotulismus) führen kann",
        "Weil Honig unverdaulich für die Leber ist",
        "Weil Honig die Milchaufnahme blockiert"
      ],
      correct: 1,
      explanation: "Honig kann Sporen von Clostridium botulinum enthalten. Im unreifen Säuglingsdarm vermehren sie sich und setzen Nervengifte frei, die zu Atemlähmung und Tod führen können."
    },
    {
      question: "Warum darf ein voll gestilltes oder mit Pre-Milch ernährtes Baby unter 6 Monaten KEIN zusätzliches Wasser trinken?",
      options: [
        "Weil es den Geschmack von Milch verlernen könnte",
        "Weil überschüssiges Wasser zu einer lebensgefährlichen Wasservergiftung (Hirnschwellung) führen kann",
        "Weil Wasser die Zähne schädigt",
        "Wasser ist erlaubt, man sollte sogar 200ml täglich zufüttern"
      ],
      correct: 1,
      explanation: "Die unreifen Nieren können freies Wasser nicht ausreichend ausscheiden. Das Blut verdünnt sich, Natrium sinkt rapide ab (Hyponatriämie), was zu Krämpfen und tödlichen Hirnödemen führen kann."
    },
    {
      question: "Welche Raumtemperatur gilt im Schlafzimmer als ideal für Babys?",
      options: [
        "22 bis 24°C, damit das Baby nicht friert",
        "16 bis 18°C, kühl und gut gelüftet",
        "Mindestens 25°C mit Mütze",
        "12 bis 14°C"
      ],
      correct: 1,
      explanation: "16–18°C ist die ideale Temperatur. Überhitzung ist ein Hauptrisikofaktor für SIDS. Ob dem Baby warm genug ist, prüft man im Nacken – nicht an den Händen!"
    },
    {
      question: "Wie reagierst du richtig, wenn ein Baby beim Essen anfängt laut zu würgen (Gagging) und rot im Gesicht wird?",
      options: [
        "Sofort mit dem Finger tief in den Hals greifen und nach dem Essen tasten",
        "Das Baby auf den Kopf stellen und kräftig schütteln",
        "Ruhe bewahren, das Kind aufrecht lassen und es selbst abhusten lassen (Schutzreflex)",
        "Ihm sofort ein Glas Wasser einflößen"
      ],
      correct: 2,
      explanation: "Lautes Würgen ist ein gesunder Schutzreflex! Nicht mit den Fingern im Mund herumstochern (das drückt den Bissen erst recht in die Luftröhre). Erst wenn es lautlos ist und das Baby keine Luft bekommt (Ersticken), greift man mit Notfallschlägen ein!"
    },
    {
      question: "Warum raten Kinderärzte dringend von Lauflernhilfen ('Gehfrei' / Babywalker) ab?",
      options: [
        "Weil sie zu viel Strom verbrauchen",
        "Weil sie schwere Treppenstürze verursachen und das echte Laufenlernen verzögern",
        "Weil Babys darin zu schnell wachsen",
        "Weil sie nur für Zwillinge geeignet sind"
      ],
      correct: 1,
      explanation: "Lauflernhilfen führen zu gravierenden Kopfverletzungen durch Treppenabstürze und führen zu Spitzfuß-Fehlstellungen. In manchen Ländern (z.B. Kanada) sind sie gesetzlich verboten."
    },
    {
      question: "Wie lang ist das typische Wachfenster eines Neugeborenen (0–4 Wochen) zwischen zwei Schlafphasen?",
      options: [
        "45 bis 60 Minuten",
        "3 bis 4 Stunden",
        "Mindestens 6 Stunden, damit es nachts schläft",
        "Neugeborene müssen gar nicht schlafen"
      ],
      correct: 0,
      explanation: "Neugeborene schaffen meist nur 45–60 Minuten Wachzeit am Stück. Danach schüttet ihr Körper Cortisol aus und sie übermüden, was zu exzessivem Schreien führt."
    },
    {
      question: "Welche Richtung muss beim Abwischen des Windelbereichs bei Mädchen immer eingehalten werden?",
      options: [
        "Von hinten nach vorne",
        "Immer von vorne nach hinten (Richtung After)",
        "Kreisend im Uhrzeigersinn",
        "Die Richtung ist egal"
      ],
      correct: 1,
      explanation: "Immer von vorne nach hinten wischen, um keine Darmbakterien in die Harnröhre oder Scheide einzutragen. Das schützt zuverlässig vor schmerzhaften Harnwegsinfekten."
    }
  ];
  const CHECKLISTS = {
    erstausstattung: [
      { text: "6–8 Wickelbodys (Größe 50/56, zum Knöpfen statt über den Kopf ziehen)", category: "Kleidung" },
      { text: "5–6 Strampler / Schlafanzüge mit Füßen", category: "Kleidung" },
      { text: "2–3 Babyschlafsäcke passender Größe (ca. 50/56 cm oder 70 cm mit verstellbarem Halsausschnitt)", category: "Schlaf" },
      { text: "1–2 dünne Hauben / Erstlingsmützchen für draußen", category: "Kleidung" },
      { text: "Beistellbett oder Gitterbett mit fester, schadstoffgeprüfter Matratze", category: "Möbel" },
      { text: "2–3 passende Spannbettlaken (ohne Kissen, Decken oder Nestchen!)", category: "Schlaf" },
      { text: "Wickelunterlage mit abwaschbarem Bezug & Randbegrenzung", category: "Wickeln" },
      { text: "Neugeborenen-Windeln (Größe 1) & weiche Einmal-Waschlappen / Wattepads", category: "Wickeln" },
      { text: "Wundschutzcreme (mit Zink) & reines Bio-Mandelöl", category: "Pflege" },
      { text: "Digitales Fieberthermometer mit flexibler Spitze (für rektale Messung)", category: "Gesundheit" },
      { text: "10–15 Mullwindeln / Spucktücher (die Allzweckwaffe für Eltern)", category: "Alltag" },
      { text: "Babyschale fürs Auto (Gruppe 0+, rückwärtsgerichtet, vorab Einbau testen!)", category: "Unterwegs" },
      { text: "Ergonomische Babytrage oder Tragetuch (M-Position / Anhock-Spreiz-Haltung)", category: "Unterwegs" }
    ],
    kliniktasche: [
      { text: "Mutterpass & Personalausweis / Krankenkassenkarte", category: "Dokumente" },
      { text: "Geburtsurkunde der Eltern & Heiratsurkunde (für Standesamt im Krankenhaus)", category: "Dokumente" },
      { text: "2–3 bequeme, weite Nachthemden oder Shirts zum Aufknöpfen (Stillen)", category: "Für Mama" },
      { text: "Bequeme Umstandshosen / Jogginghosen (der Bauch bleibt noch einige Zeit)", category: "Für Mama" },
      { text: "Wöchnerinnen-Vorlagen (extra dicke Binden ohne Plastikfolie)", category: "Für Mama" },
      { text: "Still-BHs (1–2 Nummern größer als vor Geburt kaufen)", category: "Für Mama" },
      { text: "Warme Socken (kalte Füße hemmen Wehen!) & Hausschuhe / Schlappen", category: "Für Mama" },
      { text: "Lippenbalsam & Snacks (Nüsse, Müsliriegel, Traubenzucker für die Geburt)", category: "Für Mama" },
      { text: "Langes Ladekabel fürs Smartphone", category: "Technik" },
      { text: "Heimgeh-Outfit fürs Baby (Body, Strampler, Jäckchen, Mütze, Decke)", category: "Fürs Baby" },
      { text: "Babyschale fürs Auto (bereits im Auto installiert oder zur Abholung bereit)", category: "Fürs Baby" }
    ],
    hausapotheke: [
      { text: "Digitales Fieberthermometer mit flexibler Spitze", category: "Notfall" },
      { text: "Paracetamol- oder Ibuprofen-Zäpfchen (nur nach ärztlicher Dosierungsfreigabe!)", category: "Medikamente" },
      { text: "Kochsalzlösung (NaCl 0,9%) in Einzeldosen zum Spülen von Nase & Augen", category: "Pflege" },
      { text: "Manueller Nasensauger (Schleim sanft absaugen bei Schnupfen)", category: "Pflege" },
      { text: "Zinkhaltige Wundsalbe für den wunden Po", category: "Haut" },
      { text: "Kümmelzäpfchen oder Sab Simplex / Lefax Tropfen (bei schmerzhaften Blähungen)", category: "Magen" },
      { text: "Elektrolyt-Lösung (orale Rehydratation bei Durchfall)", category: "Notfall" },
      { text: "Notfallnummern-Kärtchen sichtbar am Kühlschrank (112, Giftnotruf, Kinderarzt)", category: "Notfall" }
    ]
  };

  // Attach safely to window

  // Attach safely to window

  // Attach safely to window

  // Attach safely to window

  const WHO_GROWTH_DATA = {
  "boys": {
    "weight": [
      {
        "m": 0,
        "p3": 2.5,
        "p15": 2.9,
        "p50": 3.3,
        "p85": 3.9,
        "p97": 4.4
      },
      {
        "m": 1,
        "p3": 3.4,
        "p15": 3.9,
        "p50": 4.5,
        "p85": 5.1,
        "p97": 5.8
      },
      {
        "m": 2,
        "p3": 4.3,
        "p15": 4.9,
        "p50": 5.6,
        "p85": 6.3,
        "p97": 7.1
      },
      {
        "m": 3,
        "p3": 5.0,
        "p15": 5.7,
        "p50": 6.4,
        "p85": 7.2,
        "p97": 8.0
      },
      {
        "m": 4,
        "p3": 5.6,
        "p15": 6.2,
        "p50": 7.0,
        "p85": 7.8,
        "p97": 8.7
      },
      {
        "m": 5,
        "p3": 6.0,
        "p15": 6.7,
        "p50": 7.5,
        "p85": 8.4,
        "p97": 9.3
      },
      {
        "m": 6,
        "p3": 6.4,
        "p15": 7.1,
        "p50": 7.9,
        "p85": 8.8,
        "p97": 9.8
      },
      {
        "m": 7,
        "p3": 6.7,
        "p15": 7.4,
        "p50": 8.3,
        "p85": 9.2,
        "p97": 10.3
      },
      {
        "m": 8,
        "p3": 6.9,
        "p15": 7.7,
        "p50": 8.6,
        "p85": 9.6,
        "p97": 10.7
      },
      {
        "m": 9,
        "p3": 7.1,
        "p15": 7.9,
        "p50": 8.9,
        "p85": 9.9,
        "p97": 11.0
      },
      {
        "m": 10,
        "p3": 7.4,
        "p15": 8.2,
        "p50": 9.2,
        "p85": 10.2,
        "p97": 11.4
      },
      {
        "m": 11,
        "p3": 7.6,
        "p15": 8.4,
        "p50": 9.4,
        "p85": 10.5,
        "p97": 11.7
      },
      {
        "m": 12,
        "p3": 7.7,
        "p15": 8.6,
        "p50": 9.6,
        "p85": 10.8,
        "p97": 12.0
      }
    ],
    "length": [
      {
        "m": 0,
        "p3": 46.1,
        "p15": 47.9,
        "p50": 49.9,
        "p85": 51.8,
        "p97": 53.7
      },
      {
        "m": 1,
        "p3": 50.8,
        "p15": 52.8,
        "p50": 54.7,
        "p85": 56.7,
        "p97": 58.6
      },
      {
        "m": 2,
        "p3": 54.4,
        "p15": 56.4,
        "p50": 58.4,
        "p85": 60.4,
        "p97": 62.4
      },
      {
        "m": 3,
        "p3": 57.3,
        "p15": 59.4,
        "p50": 61.4,
        "p85": 63.5,
        "p97": 65.5
      },
      {
        "m": 4,
        "p3": 59.7,
        "p15": 61.8,
        "p50": 63.9,
        "p85": 66.0,
        "p97": 68.0
      },
      {
        "m": 5,
        "p3": 61.7,
        "p15": 63.8,
        "p50": 65.9,
        "p85": 68.0,
        "p97": 70.1
      },
      {
        "m": 6,
        "p3": 63.3,
        "p15": 65.5,
        "p50": 67.6,
        "p85": 69.8,
        "p97": 71.9
      },
      {
        "m": 7,
        "p3": 64.8,
        "p15": 67.0,
        "p50": 69.2,
        "p85": 71.3,
        "p97": 73.5
      },
      {
        "m": 8,
        "p3": 66.2,
        "p15": 68.4,
        "p50": 70.6,
        "p85": 72.8,
        "p97": 75.0
      },
      {
        "m": 9,
        "p3": 67.5,
        "p15": 69.7,
        "p50": 72.0,
        "p85": 74.2,
        "p97": 76.5
      },
      {
        "m": 10,
        "p3": 68.7,
        "p15": 71.0,
        "p50": 73.3,
        "p85": 75.6,
        "p97": 77.9
      },
      {
        "m": 11,
        "p3": 69.9,
        "p15": 72.2,
        "p50": 74.5,
        "p85": 76.9,
        "p97": 79.2
      },
      {
        "m": 12,
        "p3": 71.0,
        "p15": 73.4,
        "p50": 75.7,
        "p85": 78.1,
        "p97": 80.5
      }
    ],
    "head": [
      {
        "m": 0,
        "p3": 31.9,
        "p15": 33.1,
        "p50": 34.5,
        "p85": 35.8,
        "p97": 37.0
      },
      {
        "m": 2,
        "p3": 36.8,
        "p15": 37.9,
        "p50": 39.1,
        "p85": 40.3,
        "p97": 41.5
      },
      {
        "m": 4,
        "p3": 39.7,
        "p15": 40.7,
        "p50": 41.9,
        "p85": 43.1,
        "p97": 44.3
      },
      {
        "m": 6,
        "p3": 41.4,
        "p15": 42.4,
        "p50": 43.6,
        "p85": 44.8,
        "p97": 46.0
      },
      {
        "m": 9,
        "p3": 43.0,
        "p15": 44.0,
        "p50": 45.2,
        "p85": 46.4,
        "p97": 47.6
      },
      {
        "m": 12,
        "p3": 44.1,
        "p15": 45.1,
        "p50": 46.3,
        "p85": 47.5,
        "p97": 48.7
      }
    ]
  },
  "girls": {
    "weight": [
      {
        "m": 0,
        "p3": 2.4,
        "p15": 2.8,
        "p50": 3.2,
        "p85": 3.7,
        "p97": 4.2
      },
      {
        "m": 1,
        "p3": 3.2,
        "p15": 3.6,
        "p50": 4.2,
        "p85": 4.8,
        "p97": 5.5
      },
      {
        "m": 2,
        "p3": 3.9,
        "p15": 4.5,
        "p50": 5.1,
        "p85": 5.8,
        "p97": 6.6
      },
      {
        "m": 3,
        "p3": 4.5,
        "p15": 5.2,
        "p50": 5.8,
        "p85": 6.6,
        "p97": 7.5
      },
      {
        "m": 4,
        "p3": 5.0,
        "p15": 5.7,
        "p50": 6.4,
        "p85": 7.3,
        "p97": 8.2
      },
      {
        "m": 5,
        "p3": 5.4,
        "p15": 6.1,
        "p50": 6.9,
        "p85": 7.8,
        "p97": 8.8
      },
      {
        "m": 6,
        "p3": 5.7,
        "p15": 6.5,
        "p50": 7.3,
        "p85": 8.2,
        "p97": 9.3
      },
      {
        "m": 7,
        "p3": 6.0,
        "p15": 6.8,
        "p50": 7.6,
        "p85": 8.6,
        "p97": 9.8
      },
      {
        "m": 8,
        "p3": 6.3,
        "p15": 7.0,
        "p50": 7.9,
        "p85": 9.0,
        "p97": 10.2
      },
      {
        "m": 9,
        "p3": 6.5,
        "p15": 7.3,
        "p50": 8.2,
        "p85": 9.3,
        "p97": 10.5
      },
      {
        "m": 10,
        "p3": 6.7,
        "p15": 7.5,
        "p50": 8.5,
        "p85": 9.6,
        "p97": 10.9
      },
      {
        "m": 11,
        "p3": 6.9,
        "p15": 7.7,
        "p50": 8.7,
        "p85": 9.9,
        "p97": 11.2
      },
      {
        "m": 12,
        "p3": 7.0,
        "p15": 7.9,
        "p50": 8.9,
        "p85": 10.1,
        "p97": 11.5
      }
    ],
    "length": [
      {
        "m": 0,
        "p3": 45.4,
        "p15": 47.3,
        "p50": 49.1,
        "p85": 51.0,
        "p97": 52.9
      },
      {
        "m": 1,
        "p3": 49.8,
        "p15": 51.7,
        "p50": 53.7,
        "p85": 55.6,
        "p97": 57.6
      },
      {
        "m": 2,
        "p3": 53.0,
        "p15": 55.0,
        "p50": 57.1,
        "p85": 59.1,
        "p97": 61.1
      },
      {
        "m": 3,
        "p3": 55.6,
        "p15": 57.7,
        "p50": 59.8,
        "p85": 61.9,
        "p97": 64.0
      },
      {
        "m": 4,
        "p3": 57.8,
        "p15": 60.0,
        "p50": 62.1,
        "p85": 64.3,
        "p97": 66.4
      },
      {
        "m": 5,
        "p3": 59.6,
        "p15": 61.8,
        "p50": 64.0,
        "p85": 66.2,
        "p97": 68.5
      },
      {
        "m": 6,
        "p3": 61.2,
        "p15": 63.5,
        "p50": 65.7,
        "p85": 68.0,
        "p97": 70.3
      },
      {
        "m": 7,
        "p3": 62.7,
        "p15": 65.0,
        "p50": 67.3,
        "p85": 69.6,
        "p97": 71.9
      },
      {
        "m": 8,
        "p3": 64.0,
        "p15": 66.4,
        "p50": 68.7,
        "p85": 71.1,
        "p97": 73.5
      },
      {
        "m": 9,
        "p3": 65.3,
        "p15": 67.7,
        "p50": 70.1,
        "p85": 72.6,
        "p97": 75.0
      },
      {
        "m": 10,
        "p3": 66.5,
        "p15": 69.0,
        "p50": 71.5,
        "p85": 73.9,
        "p97": 76.4
      },
      {
        "m": 11,
        "p3": 67.7,
        "p15": 70.3,
        "p50": 72.8,
        "p85": 75.3,
        "p97": 77.8
      },
      {
        "m": 12,
        "p3": 68.9,
        "p15": 71.4,
        "p50": 74.0,
        "p85": 76.6,
        "p97": 79.2
      }
    ],
    "head": [
      {
        "m": 0,
        "p3": 31.5,
        "p15": 32.7,
        "p50": 33.9,
        "p85": 35.1,
        "p97": 36.2
      },
      {
        "m": 2,
        "p3": 35.8,
        "p15": 36.9,
        "p50": 38.0,
        "p85": 39.2,
        "p97": 40.3
      },
      {
        "m": 4,
        "p3": 38.5,
        "p15": 39.6,
        "p50": 40.7,
        "p85": 41.9,
        "p97": 43.1
      },
      {
        "m": 6,
        "p3": 40.2,
        "p15": 41.2,
        "p50": 42.4,
        "p85": 43.6,
        "p97": 44.8
      },
      {
        "m": 9,
        "p3": 41.8,
        "p15": 42.8,
        "p50": 44.0,
        "p85": 45.2,
        "p97": 46.4
      },
      {
        "m": 12,
        "p3": 42.9,
        "p15": 43.9,
        "p50": 45.1,
        "p85": 46.3,
        "p97": 47.5
      }
    ]
  }
};

  const MILESTONE_JUMPS_DATA = [
  {
    "jump": 1,
    "week": 5,
    "name": "Die Welt der wechselnden Empfindungen",
    "stormDays": "1 bis 3 Tage",
    "signs": "Plötzliches Weinen ohne ersichtlichen Grund, ständiges Suchen nach der Brust, Baby will nur auf dem Arm sein.",
    "skills": "Das Baby nimmt seine Umwelt erstmals nicht mehr nur verschwommen wahr. Es lauscht Stimmen aufmerksam und vergießt erstmals echte Tränen.",
    "tips": "Viel Körperkontakt (Tragetuch), Reize radikal drosseln, kein Besuch in dieser Phase."
  },
  {
    "jump": 2,
    "week": 8,
    "name": "Die Welt der Muster & Formen",
    "stormDays": "1 bis 2 Tage",
    "signs": "Unruhiges Trinken, wendet den Kopf oft ab, Schlafphasen werden kürzer.",
    "skills": "Entdeckt seine Hände, fixiert Streifen- oder Hell-Dunkel-Muster an der Wand, erstes bewusstes soziales Lächeln!",
    "tips": "Zeige dem Baby kontrastreiche Schwarz-Weiß-Karten, lass es seine Hände in Ruhe betrachten."
  },
  {
    "jump": 3,
    "week": 12,
    "name": "Die Welt der fließenden Übergänge",
    "stormDays": "1 bis 3 Tage",
    "signs": "Fremdelt leicht, quietscht oder jammert bei Langeweile, schlägt unruhig um sich.",
    "skills": "Bewegungen werden flüssiger statt ruckartig. Dreht den Kopf gezielt nach Geräuschen, probiert Quietsch- und Gurr-Laute aus.",
    "tips": "Fliegergriff, sanftes Wiegen zur Musik, gemeinsames Singen und rhythmische Berührungen."
  },
  {
    "jump": 4,
    "week": 19,
    "name": "Die Welt der Ereignisse (Der Mega-Sprung)",
    "stormDays": "Bis zu 1 bis 2 Wochen! (4-Monats-Schlafregression)",
    "signs": "Schläft nachts plötzlich stündlich auf, trinkt hastig und unruhig, quengelt tagsüber schnell, will permanente Unterhaltung.",
    "skills": "Ergreift Gegenstände gezielt mit beiden Händen, steckt alles in den Mund, versteht Ursache-Wirkung (Rassel schütteln = Geräusch).",
    "tips": "Ruhe bewahren: Das Schlafprofil reift auf 4 Schlafphasen um. Feste Einschlafrituale (Dunkelheit, Schlafsack, weißes Rauschen)."
  },
  {
    "jump": 5,
    "week": 26,
    "name": "Die Welt der Zusammenhänge & Distanz",
    "stormDays": "3 bis 7 Tage",
    "signs": "Trennungsangst bricht aus! Baby weint sofort, wenn Mama oder Papa den Raum verlässt.",
    "skills": "Versteht, dass Dinge und Menschen weggehen können (Objektpermanenz). Beikost-Reifezeichen bilden sich aus. Dreht sich vom Rücken auf den Bauch.",
    "tips": "Kuckuck-Spiele ('Wo ist Mama? Da!'), immer ankündigen, wenn du kurz den Raum verlässt (mit Stimme Kontakt halten)."
  },
  {
    "jump": 6,
    "week": 37,
    "name": "Die Welt der Kategorien",
    "stormDays": "3 bis 6 Tage",
    "signs": "Möchte alles untersuchen und zerpflücken, Essen wird zermatscht, schläft unruhig ein.",
    "skills": "Erkennt, dass ein Hund kein Pferd ist (Kategorisierung). Untersucht Gegenstände akribisch mit Zeigefinger und Daumen (Pinzettengriff).",
    "tips": "Verschiedene Texturen zum Anfassen geben (Holzklotz, Schwamm, Löffel). Beikost mit den Fingern erforschen lassen."
  },
  {
    "jump": 7,
    "week": 46,
    "name": "Die Welt der Reihenfolgen",
    "stormDays": "3 bis 7 Tage",
    "signs": "Wutausbrüche bei Misserfolg, schlägt Gegenstände gegeneinander, Schlafprobleme am Nachmittag.",
    "skills": "Versteht, dass erst der Schuh und dann der Fuß kommt, steckt Ringe der Größe nach auf Stäbe, winkt zum Abschied ('Tschüss').",
    "tips": "Geduld bei Wutanfällen, Stapelbecher zum Ineinanderstecken bereitstellen, einfache Handlungsabläufe vorführen."
  },
  {
    "jump": 8,
    "week": 55,
    "name": "Die Welt der Programme & 1. Geburtstag",
    "stormDays": "1 Woche",
    "signs": "Starker eigener Wille, trotzt beim Anziehen oder Wickeln, verweigert vertrautes Essen.",
    "skills": "Begreift ganze Handlungsabläufe (z.B. Schlüssel ins Schloss, Löffel in die Schüssel). Erste freie Schritte oder Cruisen an Möbeln!",
    "tips": "Kleine Entscheidungen erlauben (z.B. 'Welchen Becher möchtest du?'), Raum kindersicher zum Laufenlernen gestalten."
  }
];

  const BEIKOST_FOODS_DATA = [
  {
    "id": "karotte",
    "name": "Frühkarotte",
    "cat": "Gemüse",
    "allergen": false,
    "intro": "Sehr mild, süßlicher Geschmack, klassischer Start. Kann stopfend wirken."
  },
  {
    "id": "pastinake",
    "name": "Pastinake",
    "cat": "Gemüse",
    "allergen": false,
    "intro": "Besonders stuhlregulierend und leicht verdaulich. Perfekt für empfindliche Babys."
  },
  {
    "id": "kuerbis",
    "name": "Kürbis (Hokkaido)",
    "cat": "Gemüse",
    "allergen": false,
    "intro": "Cremig, leuchtende Farbe, stuhllockernd und reich an Beta-Carotin."
  },
  {
    "id": "zucchini",
    "name": "Zucchini",
    "cat": "Gemüse",
    "allergen": false,
    "intro": "Sehr wasserreich, extrem mild und allergenarm."
  },
  {
    "id": "kartoffel",
    "name": "Kartoffel",
    "cat": "Sättigung",
    "allergen": false,
    "intro": "Liefert komplexe Kohlenhydrate und Kalium. Wird mit Gemüse kombiniert."
  },
  {
    "id": "rind",
    "name": "Rindfleisch",
    "cat": "Eisen",
    "allergen": false,
    "intro": "Bester Eisenlieferant für das Gehirnwachstum ab dem 5./6. Monat."
  },
  {
    "id": "hafer",
    "name": "Haferflocken (Schmelzflocken)",
    "cat": "Getreide",
    "allergen": false,
    "intro": "Reich an pflanzlichem Eisen und Zink. Ideal für den Abendbrei."
  },
  {
    "id": "weizen",
    "name": "Weizengrieß (Gluten)",
    "cat": "Allergen",
    "allergen": true,
    "intro": "Enthält Gluten. Soll laut Leitlinie frühzeitig in kleinen Mengen eingeführt werden."
  },
  {
    "id": "apfel",
    "name": "Apfel (gedünstet)",
    "cat": "Obst",
    "allergen": false,
    "intro": "Anfangs immer dünsten, um Fruchtsäure abzumildern. Liefert Vitamin C."
  },
  {
    "id": "banane",
    "name": "Banane",
    "cat": "Obst",
    "allergen": false,
    "intro": "Sehr energiereich, weich. Kann bei empfindlichen Babys stopfen."
  },
  {
    "id": "kuhmilch",
    "name": "Vollmilch (im Brei gekocht)",
    "cat": "Allergen",
    "allergen": true,
    "intro": "Im Milch-Getreide-Brei erlaubt (max. 200 ml/Tag). Niemals als Trinkmilch vor 1 Jahr!"
  },
  {
    "id": "ei",
    "name": "Hühnerei (hartgekocht)",
    "cat": "Allergen",
    "allergen": true,
    "intro": "Wichtiges Allergen. 1x wöchentlich 1/4 hartgekochtes Eigelb/Eiweiß unter den Brei mischen."
  },
  {
    "id": "fisch",
    "name": "Lachs / Kabeljau",
    "cat": "Allergen",
    "allergen": true,
    "intro": "Liefert wertvolle Omega-3-Fettsäuren (DHA) für Augen und Gehirn. Gründlich entgräten!"
  },
  {
    "id": "erdnuss",
    "name": "Erdnussmus (fein püriert)",
    "cat": "Allergen",
    "allergen": true,
    "intro": "Messerspitze ins Püree rühren. Senkt das Erdnussallergie-Risiko drastisch!"
  }
];

  const TRIAGE_QUESTIONS_DATA = [
  {
    "id": "q1",
    "question": "1. Wie alt ist dein Baby?",
    "options": [
      {
        "label": "Unter 3 Monate alt (Neugeborenes)",
        "next": "q_young"
      },
      {
        "label": "3 Monate oder älter",
        "next": "q_temp"
      }
    ]
  },
  {
    "id": "q_young",
    "question": "2. Hat dein Neugeborenes (< 3 Monate) eine Temperatur von 38,0 °C oder höher?",
    "options": [
      {
        "label": "JA – Temperatur ist 38,0 °C oder höher",
        "result": "red_newborn_fever"
      },
      {
        "label": "NEIN – Temperatur ist unter 38,0 °C",
        "next": "q_breathing"
      }
    ]
  },
  {
    "id": "q_temp",
    "question": "2. Welche Körpertemperatur (rektal gemessen) hat dein Baby?",
    "options": [
      {
        "label": "Unter 38,5 °C (Normal oder leicht erhöht)",
        "next": "q_breathing"
      },
      {
        "label": "38,5 °C bis 39,4 °C (Fieber)",
        "next": "q_breathing"
      },
      {
        "label": "39,5 °C oder höher (Sehr hohes Fieber)",
        "next": "q_fever_high"
      }
    ]
  },
  {
    "id": "q_breathing",
    "question": "3. Wie atmet dein Baby?",
    "options": [
      {
        "label": "Normal, ruhig, kein Stöhnen",
        "next": "q_behavior"
      },
      {
        "label": "Bellender Husten, pfeifendes Einatmen (Verdacht auf Pseudokrupp)",
        "result": "yellow_croup"
      },
      {
        "label": "Akute Atemnot: Zieht Haut an Rippen/Hals ein, Nasenflügeln, Blaufärbung",
        "result": "red_dyspnea"
      }
    ]
  },
  {
    "id": "q_behavior",
    "question": "4. Wie verhält sich dein Baby beim Trinken & Reagieren?",
    "options": [
      {
        "label": "Aufmerksam, lächelt zwischendurch, trinkt ausreichend, Windeln nass",
        "next": "q_rash"
      },
      {
        "label": "Sehr unruhig, quengelig, trinkt weniger, aber weckbar",
        "next": "q_rash"
      },
      {
        "label": "Apathisch, reagiert kaum, blickt ins Leere, lässt sich kaum wecken",
        "result": "red_lethargy"
      }
    ]
  },
  {
    "id": "q_rash",
    "question": "5. Hat dein Baby Hautausschlag oder rote Punkte?",
    "options": [
      {
        "label": "Kein Ausschlag / normale Haut",
        "result": "green_watch"
      },
      {
        "label": "Flächiger roter Ausschlag (z.B. Hitze- oder Infekt-Ausschlag)",
        "result": "yellow_rash"
      },
      {
        "label": "Kleine rote/violette Punkte, die bei Glas-Andruck NICHT verblassen! (Petechien)",
        "result": "red_petechiae"
      }
    ]
  },
  {
    "id": "q_fever_high",
    "question": "Reagiert dein Baby trotz > 39,5 °C Fieber auf Ansprache?",
    "options": [
      {
        "label": "Ja, ist ansprechbar, trinkt nach Fiebersaft etwas Wasser/Milch",
        "next": "q_breathing"
      },
      {
        "label": "Nein, erbricht alles, krampft oder ist apathisch",
        "result": "red_fever_severe"
      }
    ]
  }
];

  const TRIAGE_RESULTS_DATA = {
  "red_newborn_fever": {
    "level": "red",
    "badge": "🚨 SOFORT NOTAUFNAHME / 112",
    "title": "Fieber bei Neugeborenen (< 3 Monate)",
    "message": "Fieber ab 38,0 °C in den ersten 12 Lebenswochen ist IMMER ein potenzieller Notfall (Gefahr einer Neugeborenen-Sepsis). Warte NICHT bis zum Morgen und gib keine Zäpfchen ohne ärztliche Anweisung – fahre SOFORT in die nächste Kinder-Notaufnahme!",
    "action": "Sofort Notruf 112 oder Kinderklinik anrufen"
  },
  "red_dyspnea": {
    "level": "red",
    "badge": "🚨 SOFORT NOTRUF 112",
    "title": "Akute Atemnot / Einziehungen",
    "message": "Wenn sich die Haut zwischen den Rippen oder am Hals beim Atmen sichtbar einzieht oder Lippen bläulich schimmern, bekommt das Kind zu wenig Sauerstoff. Baby aufrecht halten, frische Luft zuführen und sofort den Notarzt rufen!",
    "action": "Notruf 112 wählen"
  },
  "red_lethargy": {
    "level": "red",
    "badge": "🚨 SOFORT NOTAUFNAHME",
    "title": "Apathie / Bewusstseinstrübung",
    "message": "Ein Baby, das nicht mehr auf Ansprache reagiert, kraftlos zusammensackt oder sich nicht mehr wecken lässt, benötigt sofortige intensivmedizinische Untersuchung.",
    "action": "Notruf 112 wählen"
  },
  "red_petechiae": {
    "level": "red",
    "badge": "🚨 SOFORT NOTARZT 112 (SEPSIS-VERDACHT)",
    "title": "Petechien (nicht wegdrückbare Blutflecken)",
    "message": "Kleine punktförmige rote Flecken, die unter dem Druck eines Trinkglases NICHT verblassen, sind ein Alarmsignal für Meningokokken-Sepsis. Jede Minute zählt!",
    "action": "Notruf 112 wählen"
  },
  "red_fever_severe": {
    "level": "red",
    "badge": "🚨 SOFORT KINDERKLINIK / 112",
    "title": "Sehr hohes Fieber mit Begleitsymptomen",
    "message": "Hohes Fieber mit Erbrechen, Nackensteifigkeit oder Krampfneigung erfordert sofortige ärztliche Notfallbehandlung.",
    "action": "112 oder Kinder-Notaufnahme"
  },
  "yellow_croup": {
    "level": "yellow",
    "badge": "⚠️ HEUTE NOCH ABKLÄREN (116 117)",
    "title": "Verdacht auf Pseudokrupp (Bellender Husten)",
    "message": "Typischer nächtlicher Pseudokrupp-Anfall: Baby aufrecht nehmen, ans offene Fenster treten (kühle feuchte Nachtluft beruhigt die Schleimhäute sofort!). Wenn keine Besserung eintritt oder Atemnot entsteht, sofort Notarzt rufen, sonst ärztlichen Bereitschaftsdienst (116 117).",
    "action": "Kühle Luft atmen & 116 117 anrufen"
  },
  "yellow_rash": {
    "level": "yellow",
    "badge": "⚠️ KINDERARZT AM MORGEN",
    "title": "Infektbedingter Hautausschlag",
    "message": "Hautausschläge nach Fieber (z.B. Drei-Tage-Fieber) sind häufig und meist harmlos, solange die Flecken bei Druck verblassen und das Kind trinkt. Morgen früh dem Kinderarzt vorstellen.",
    "action": "Beobachten & morgen Kinderarzt kontaktieren"
  },
  "green_watch": {
    "level": "green",
    "badge": "🟢 RUHE BEWAHREN & BEOBACHTEN",
    "title": "Keine akuten Alarmsignale erkennbar",
    "message": "Dein Baby zeigt aktuell keine lebensbedrohlichen Notfall-Symptome. Achte auf ausreichende Flüssigkeitszufuhr (Stillen / Pre anbieten), halte das Schlafzimmer kühl (16–18 °C) und ziehe das Kind nicht zu dick an. Bei Verschlechterung oder Unsicherheit morgen zum Kinderarzt.",
    "action": "Liebevoll trösten & weiterschlafen"
  }
};

  const VACCINE_TIMELINE_TEMPLATE = [
  {
    "id": "u1",
    "title": "Vorsorge U1",
    "offsetDays": 0,
    "type": "u",
    "doctor": "Klinik / Kreißsaal",
    "desc": "APGAR-Score, pH-Wert, 1. Gabe Vitamin K"
  },
  {
    "id": "u2",
    "title": "Vorsorge U2",
    "offsetDays": 7,
    "type": "u",
    "doctor": "Kinderarzt",
    "desc": "3. bis 10. Lebenstag: Organ-Check, Hör- & Stoffwechselscreening, 2. Vitamin K"
  },
  {
    "id": "u3",
    "title": "Vorsorge U3 & Hüftultraschall",
    "offsetDays": 30,
    "type": "u",
    "doctor": "Kinderarzt",
    "desc": "4. bis 5. Woche: Gedeihen, Reflexe, Hüftdysplasie-Ultraschall, 3. Vitamin K"
  },
  {
    "id": "rota1",
    "title": "1. Schluckimpfung Rotaviren",
    "offsetDays": 42,
    "type": "vax",
    "doctor": "Kinderarzt",
    "desc": "Ab vollendeter 6. Lebenswoche: Schutz vor schwerem Magen-Darm-Brechdurchfall"
  },
  {
    "id": "u4",
    "title": "Vorsorge U4 & 1. Grundimmunisierung",
    "offsetDays": 95,
    "type": "both",
    "doctor": "Kinderarzt",
    "desc": "3. bis 4. Monat: Motorik-Check + 1. 6-fach (Tetanus, Diphtherie, Pertussis, Polio, Hib, HepB) + Pneumokokken + Rotaviren 2"
  },
  {
    "id": "vax2",
    "title": "2. Grundimmunisierung",
    "offsetDays": 135,
    "type": "vax",
    "doctor": "Kinderarzt",
    "desc": "Ca. 4 Monate: 2. Dosis 6-fach + Pneumokokken"
  },
  {
    "id": "u5",
    "title": "Vorsorge U5",
    "offsetDays": 185,
    "type": "u",
    "doctor": "Kinderarzt",
    "desc": "6. bis 7. Monat: Drehen, Greifen, Zähne, Beikostreife"
  },
  {
    "id": "z1",
    "title": "1. Zahnärztliche Früherkennung (Z1)",
    "offsetDays": 220,
    "type": "dental",
    "doctor": "Zahnarzt",
    "desc": "Ab Durchbruch der ersten Milchzähne (6.–9. Monat): Zahnpflegeberatung & Fluorid"
  },
  {
    "id": "vax3",
    "title": "3. Grundimmunisierung",
    "offsetDays": 330,
    "type": "vax",
    "doctor": "Kinderarzt",
    "desc": "11. Monat: Vervollständigung 6-fach-Impfung + Pneumokokken"
  },
  {
    "id": "u6",
    "title": "Vorsorge U6 & 1. Geburtstag",
    "offsetDays": 365,
    "type": "both",
    "doctor": "Kinderarzt",
    "desc": "10. bis 12. Monat: Krabbeln, Hochziehen, Pinzettengriff + 1. Dosis MMRV (Masern, Mumps, Röteln, Windpocken) + Meningokokken B / C"
  }
];

  window.BabyData = {
    WHO_GROWTH_DATA,
    MILESTONE_JUMPS_DATA,
    BEIKOST_FOODS_DATA,
    TRIAGE_QUESTIONS_DATA,
    TRIAGE_RESULTS_DATA,
    VACCINE_TIMELINE_TEMPLATE,
    EMERGENCY_CONTACTS,
    TOP_PRIORITY_RULES,
    EMERGENCY_PROTOCOLS,
    ILLNESSES_LEXIKON,
    MONTHLY_GUIDES,
    MODULES,
    DOS_AND_DONTS,
    QUIZ_QUESTIONS,
    CHECKLISTS,
    STOOL_COLOR_GUIDE,
    TEETH_DATA,
    AGE_STAGES_DATA
  };
})();
