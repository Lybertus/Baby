import json
import build_objects
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

# Let's inspect the original sections in data.js
with open("data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's extract MODULES, DOS_AND_DONTS, QUIZ_QUESTIONS, CHECKLISTS from data.js
# They are located after const MODULES = [
mod_start = text.find("const MODULES = [")
dodont_start = text.find("const DOS_AND_DONTS = [")
quiz_start = text.find("const QUIZ_QUESTIONS = [")
check_start = text.find("const CHECKLISTS = {")
window_export = text.find("window.BabyData = {")

modules_code = text[mod_start:dodont_start].strip()
dodonts_code = text[dodont_start:quiz_start].strip()
quiz_code = text[quiz_start:check_start].strip()
checklists_code = text[check_start:window_export].strip()

# Now write complete data.js
out = []
out.append("// ==========================================================================")
out.append("// BABY GUIDE DATA: DAS GROSSE ENZYKLOPÄDISCHE ELTERN-KOMPENDIUM (MIT BILDERN)")
out.append("// ==========================================================================")
out.append("(function() {")

# Contacts
out.append("""  const EMERGENCY_CONTACTS = {
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
  };""")

# Top priority rules with embedded SVGs
out.append(f"""  const TOP_PRIORITY_RULES = [
    {{
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
            {svg_sbs}
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
    }},
    {{
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
            {svg_safe_sleep}
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
    }},
    {{
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
            {svg_petechiae}
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
    }},
    {{
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
            {svg_food_safety}
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
    }}
  ];""")

# Emergency protocols serialization
out.append("  const EMERGENCY_PROTOCOLS = " + json.dumps(build_objects.emergency_protocols_data, ensure_ascii=False, indent=2) + ";")

# Illnesses
out.append("""  const ILLNESSES_LEXIKON = [
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
  ];""")

# Monthly guides serialization
out.append("  const MONTHLY_GUIDES = " + json.dumps(build_objects.monthly_guides_data, ensure_ascii=False, indent=2) + ";")

# Additional interactive tools datasets
out.append("  const STOOL_COLOR_GUIDE = " + json.dumps(build_objects.stool_color_guide_data, ensure_ascii=False, indent=2) + ";")
out.append("  const TEETH_DATA = " + json.dumps(build_objects.teeth_data, ensure_ascii=False, indent=2) + ";")
out.append("  const AGE_STAGES_DATA = " + json.dumps(build_objects.age_stages_data, ensure_ascii=False, indent=2) + ";")

# Modules, Dos & Donts, Quiz, Checklists
out.append("  " + modules_code)
out.append("  " + dodonts_code)
out.append("  " + quiz_code)
out.append("  " + checklists_code)

# Global export
out.append("""
  // Attach safely to window
  window.BabyData = {
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
""")

full_js = "\n".join(out)
with open("data.js", "w", encoding="utf-8") as f:
    f.write(full_js)

print("data.js updated successfully! Length:", len(full_js))
