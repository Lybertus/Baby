
import os

svg_cpr = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 p-4 border border-rose-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="none"/>
  <circle cx="200" cy="110" r="90" fill="#fee2e2" stroke="#f87171" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M120 150 C120 120 150 100 180 105 C190 95 210 95 220 105 C250 100 280 120 280 150 Z" fill="#fed7aa" stroke="#fb923c" stroke-width="2"/>
  <circle cx="200" cy="80" r="32" fill="#fed7aa" stroke="#fb923c" stroke-width="2"/>
  <circle cx="190" cy="78" r="3" fill="#7c2d12"/>
  <circle cx="210" cy="78" r="3" fill="#7c2d12"/>
  <path d="M194 90 Q200 95 206 90" stroke="#7c2d12" stroke-width="2" fill="none"/>
  <rect x="193" y="115" width="6" height="35" rx="3" fill="#ef4444"/>
  <rect x="201" y="115" width="6" height="35" rx="3" fill="#ef4444"/>
  <path d="M200 155 L200 175 M195 170 L200 178 L205 170" stroke="#b91c1c" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <g transform="translate(20, 25)">
    <rect width="110" height="30" rx="8" fill="#e11d48"/>
    <text x="55" y="20" fill="white" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">30 DRÜCKUNGEN</text>
  </g>
  <g transform="translate(270, 25)">
    <rect width="110" height="30" rx="8" fill="#0284c7"/>
    <text x="55" y="20" fill="white" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">2 BEATMUNGEN</text>
  </g>
  <text x="200" y="205" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">2 Finger ca. 4 cm tief | Frequenz 100-120/Min | 5x Vorbeatmung</text>
</svg>'''

svg_choking = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 180 L220 140 L350 160" stroke="#78350f" stroke-width="18" stroke-linecap="round" fill="none"/>
  <path d="M140 130 C170 110 240 100 270 125 C250 145 170 155 140 130 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
  <circle cx="115" cy="140" r="28" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
  <path d="M95 160 Q115 170 135 155" stroke="#f97316" stroke-width="6" fill="none" stroke-linecap="round"/>
  <circle cx="210" cy="115" r="16" fill="#f87171" opacity="0.4"/>
  <circle cx="210" cy="115" r="8" fill="#ef4444"/>
  <path d="M235 65 L215 105 M208 95 L215 105 L225 103" stroke="#b91c1c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <g transform="translate(15, 20)">
    <rect width="130" height="28" rx="8" fill="#ea580c"/>
    <text x="65" y="18" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">5 RÜCKENSCHLÄGE</text>
  </g>
  <g transform="translate(250, 20)">
    <rect width="135" height="28" rx="8" fill="#e11d48"/>
    <text x="67" y="18" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">5 BRUSTDRÜCKE</text>
  </g>
  <text x="200" y="205" fill="#7c2d12" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Kopftieflage auf Unterarm | Kiefer stützen, Hals frei!</text>
</svg>'''

svg_safe_sleep = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-100 p-4 border border-sky-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
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
</svg>'''

svg_food_safety = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 p-4 border border-emerald-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
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
</svg>'''

svg_petechiae = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 p-4 border border-rose-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
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
</svg>'''

svg_febrile = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <!-- Baby in recovery position -->
  <path d="M120 120 C140 100 220 100 270 120 C270 150 200 160 140 155 Z" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
  <circle cx="115" cy="120" r="24" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
  <path d="M130 145 Q160 165 190 145" stroke="#ea580c" stroke-width="5" fill="none" stroke-linecap="round"/>
  <!-- Clock / Timer -->
  <g transform="translate(300, 40)">
    <circle cx="30" cy="30" r="28" fill="#ffffff" stroke="#ea580c" stroke-width="3"/>
    <line x1="30" y1="30" x2="30" y2="15" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
    <line x1="30" y1="30" x2="42" y2="30" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
    <text x="30" y="72" fill="#9a3412" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">ZEIT STOPPEN</text>
  </g>
  <!-- Badges -->
  <g transform="translate(20, 20)">
    <rect width="180" height="28" rx="8" fill="#c2410c"/>
    <text x="90" y="18" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">FIEBERKRAMPF-REGELN</text>
  </g>
  <text x="180" y="195" fill="#7c2d12" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Auf die Seite legen | Nicht festhalten | Nichts in den Mund!</text>
</svg>'''

svg_sbs = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-red-100 p-4 border border-rose-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
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
</svg>'''

svg_fall_trauma = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 p-4 border border-amber-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="95" width="300" height="70" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
  <rect x="70" y="80" width="260" height="25" rx="4" fill="#fed7aa"/>
  <rect x="65" y="70" width="10" height="35" rx="3" fill="#ea580c"/>
  <rect x="325" y="70" width="10" height="35" rx="3" fill="#ea580c"/>
  <circle cx="160" cy="78" r="14" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <rect x="175" y="73" width="40" height="18" rx="6" fill="#67e8f9"/>
  <g transform="translate(180, 45)">
    <path d="M10 25 C10 15 25 15 25 25 L25 35 L10 35 Z" fill="#f97316"/>
    <rect x="5" y="0" width="30" height="25" rx="6" fill="#ea580c"/>
    <text x="20" y="16" fill="white" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">HAND</text>
  </g>
  <g transform="translate(20, 15)">
    <rect width="210" height="26" rx="6" fill="#c2410c"/>
    <text x="105" y="17" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">WICKELTISCH-SICHERHEIT</text>
  </g>
  <text x="200" y="192" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">Eine Hand bleibt IMMER am Kind! | Alles vorher griffbereit legen</text>
  <text x="200" y="208" fill="#c2410c" font-size="9" text-anchor="middle" font-family="sans-serif">Nach Sturz: 48h Pupillen, Erbrechen und Bewusstsein kontrollieren!</text>
</svg>'''

svg_poisoning = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100 p-4 border border-purple-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(25, 45)">
    <rect width="155" height="125" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <circle cx="77" cy="38" r="20" fill="#ede9fe"/>
    <text x="77" y="45" fill="#6d28d9" font-size="18" text-anchor="middle">☠️</text>
    <text x="77" y="78" fill="#5b21b6" font-size="11" font-weight="extrabold" text-anchor="middle" font-family="sans-serif">GIFTNOTRUF</text>
    <rect x="22" y="88" width="110" height="22" rx="6" fill="#7c3aed"/>
    <text x="77" y="103" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">030 19240</text>
  </g>
  <g transform="translate(195, 45)">
    <rect width="180" height="125" rx="12" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
    <text x="90" y="24" fill="#be123c" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">LEBENSWICHTIG:</text>
    <text x="90" y="48" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">⛔ KEIN Erbrechen auslösen!</text>
    <text x="90" y="68" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">⛔ KEINE Milch trinken lassen!</text>
    <text x="90" y="90" fill="#475569" font-size="9" text-anchor="middle" font-family="sans-serif">Verpackung/Pflanze sichern</text>
    <text x="90" y="105" fill="#475569" font-size="9" text-anchor="middle" font-family="sans-serif">& Giftzentrale anrufen</text>
  </g>
  <g transform="translate(20, 15)">
    <rect width="190" height="26" rx="6" fill="#6d28d9"/>
    <text x="95" y="17" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">VERGIFTUNG & VERÄTZUNG</text>
  </g>
  <text x="200" y="200" fill="#4c1d95" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">Spül-Tabs, Putzmittel, Pflanzen & Medikamente hoch verschließen!</text>
</svg>'''

svg_burns = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-orange-100 p-4 border border-rose-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(25, 45)">
    <rect width="155" height="125" rx="12" fill="#ffffff" stroke="#ea580c" stroke-width="2"/>
    <text x="77" y="28" fill="#c2410c" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">ERSTE HILFE</text>
    <text x="77" y="55" fill="#0284c7" font-size="20" text-anchor="middle">💧</text>
    <text x="77" y="80" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">10–15 Min kühlen</text>
    <text x="77" y="100" fill="#475569" font-size="9" text-anchor="middle" font-family="sans-serif">Handwarm (ca. 20°C)</text>
    <text x="77" y="115" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle" font-family="sans-serif">NIEMALS EISKALT!</text>
  </g>
  <g transform="translate(195, 45)">
    <rect width="180" height="125" rx="12" fill="#fff1f2" stroke="#f43f5e" stroke-width="2"/>
    <text x="90" y="24" fill="#be123c" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">STRIKTE VERBOTE</text>
    <text x="90" y="48" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">⛔ Keine Brandblasen öffnen</text>
    <text x="90" y="68" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">⛔ Keine Hausmittel (Mehl, Öl)</text>
    <text x="90" y="88" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">⛔ Eingebrannte Kleidung dranlassen</text>
    <text x="90" y="110" fill="#475569" font-size="9" text-anchor="middle" font-family="sans-serif">Keimfrei abdecken & Notruf 112</text>
  </g>
  <g transform="translate(20, 15)">
    <rect width="190" height="26" rx="6" fill="#e11d48"/>
    <text x="95" y="17" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">VERBRENNUNG & VERBRÜHUNG</text>
  </g>
  <text x="200" y="200" fill="#881337" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">Tee/Kaffee nie auf Tischdecken stellen – Säuglingshaut verbrüht in Sekunden!</text>
</svg>'''

svg_drowning = '''<svg viewBox="0 0 400 220" class="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 p-4 border border-cyan-200 shadow-sm" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="65" width="320" height="100" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
  <path d="M50 120 Q130 110 210 120 T350 120 L350 155 Q270 155 200 155 T50 155 Z" fill="#bae6fd" opacity="0.7"/>
  <g transform="translate(60, 80)">
    <text x="0" y="18" fill="#0369a1" font-size="11" font-weight="extrabold" font-family="sans-serif">LAUTLOSES ERTRINKEN:</text>
    <text x="0" y="38" fill="#0f172a" font-size="10" font-family="sans-serif">• Babys strampeln oder rufen NICHT!</text>
    <text x="0" y="54" fill="#0f172a" font-size="10" font-family="sans-serif">• Stimmritzenkrampf (Laryngospasmus) tritt sofort ein</text>
    <text x="0" y="70" fill="#e11d48" font-size="10" font-weight="bold" font-family="sans-serif">• Schon 3–5 cm Wasser & 30 Sek. genügen!</text>
  </g>
  <g transform="translate(20, 15)">
    <rect width="210" height="26" rx="6" fill="#0284c7"/>
    <text x="105" y="17" fill="white" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">WASSERUNFALL & ERTRINKEN</text>
  </g>
  <text x="200" y="195" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">NIEMALS auch nur 1 Sekunde alleine in der Badewanne lassen!</text>
  <text x="200" y="210" fill="#0284c7" font-size="9" text-anchor="middle" font-family="sans-serif">Nach Wasserunfall: Bei Husten / Atemnot sofort in die Klinik (Sekundäres Ertrinken)!</text>
</svg>'''

print("Generated SVGs successfully")
