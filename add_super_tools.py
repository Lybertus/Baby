# -*- coding: utf-8 -*-
import json

who_growth_data = {
    "boys": {
        "weight": [
            {"m": 0, "p3": 2.5, "p15": 2.9, "p50": 3.3, "p85": 3.9, "p97": 4.4},
            {"m": 1, "p3": 3.4, "p15": 3.9, "p50": 4.5, "p85": 5.1, "p97": 5.8},
            {"m": 2, "p3": 4.3, "p15": 4.9, "p50": 5.6, "p85": 6.3, "p97": 7.1},
            {"m": 3, "p3": 5.0, "p15": 5.7, "p50": 6.4, "p85": 7.2, "p97": 8.0},
            {"m": 4, "p3": 5.6, "p15": 6.2, "p50": 7.0, "p85": 7.8, "p97": 8.7},
            {"m": 5, "p3": 6.0, "p15": 6.7, "p50": 7.5, "p85": 8.4, "p97": 9.3},
            {"m": 6, "p3": 6.4, "p15": 7.1, "p50": 7.9, "p85": 8.8, "p97": 9.8},
            {"m": 7, "p3": 6.7, "p15": 7.4, "p50": 8.3, "p85": 9.2, "p97": 10.3},
            {"m": 8, "p3": 6.9, "p15": 7.7, "p50": 8.6, "p85": 9.6, "p97": 10.7},
            {"m": 9, "p3": 7.1, "p15": 7.9, "p50": 8.9, "p85": 9.9, "p97": 11.0},
            {"m": 10, "p3": 7.4, "p15": 8.2, "p50": 9.2, "p85": 10.2, "p97": 11.4},
            {"m": 11, "p3": 7.6, "p15": 8.4, "p50": 9.4, "p85": 10.5, "p97": 11.7},
            {"m": 12, "p3": 7.7, "p15": 8.6, "p50": 9.6, "p85": 10.8, "p97": 12.0}
        ],
        "length": [
            {"m": 0, "p3": 46.1, "p15": 47.9, "p50": 49.9, "p85": 51.8, "p97": 53.7},
            {"m": 1, "p3": 50.8, "p15": 52.8, "p50": 54.7, "p85": 56.7, "p97": 58.6},
            {"m": 2, "p3": 54.4, "p15": 56.4, "p50": 58.4, "p85": 60.4, "p97": 62.4},
            {"m": 3, "p3": 57.3, "p15": 59.4, "p50": 61.4, "p85": 63.5, "p97": 65.5},
            {"m": 4, "p3": 59.7, "p15": 61.8, "p50": 63.9, "p85": 66.0, "p97": 68.0},
            {"m": 5, "p3": 61.7, "p15": 63.8, "p50": 65.9, "p85": 68.0, "p97": 70.1},
            {"m": 6, "p3": 63.3, "p15": 65.5, "p50": 67.6, "p85": 69.8, "p97": 71.9},
            {"m": 7, "p3": 64.8, "p15": 67.0, "p50": 69.2, "p85": 71.3, "p97": 73.5},
            {"m": 8, "p3": 66.2, "p15": 68.4, "p50": 70.6, "p85": 72.8, "p97": 75.0},
            {"m": 9, "p3": 67.5, "p15": 69.7, "p50": 72.0, "p85": 74.2, "p97": 76.5},
            {"m": 10, "p3": 68.7, "p15": 71.0, "p50": 73.3, "p85": 75.6, "p97": 77.9},
            {"m": 11, "p3": 69.9, "p15": 72.2, "p50": 74.5, "p85": 76.9, "p97": 79.2},
            {"m": 12, "p3": 71.0, "p15": 73.4, "p50": 75.7, "p85": 78.1, "p97": 80.5}
        ],
        "head": [
            {"m": 0, "p3": 31.9, "p15": 33.1, "p50": 34.5, "p85": 35.8, "p97": 37.0},
            {"m": 2, "p3": 36.8, "p15": 37.9, "p50": 39.1, "p85": 40.3, "p97": 41.5},
            {"m": 4, "p3": 39.7, "p15": 40.7, "p50": 41.9, "p85": 43.1, "p97": 44.3},
            {"m": 6, "p3": 41.4, "p15": 42.4, "p50": 43.6, "p85": 44.8, "p97": 46.0},
            {"m": 9, "p3": 43.0, "p15": 44.0, "p50": 45.2, "p85": 46.4, "p97": 47.6},
            {"m": 12, "p3": 44.1, "p15": 45.1, "p50": 46.3, "p85": 47.5, "p97": 48.7}
        ]
    },
    "girls": {
        "weight": [
            {"m": 0, "p3": 2.4, "p15": 2.8, "p50": 3.2, "p85": 3.7, "p97": 4.2},
            {"m": 1, "p3": 3.2, "p15": 3.6, "p50": 4.2, "p85": 4.8, "p97": 5.5},
            {"m": 2, "p3": 3.9, "p15": 4.5, "p50": 5.1, "p85": 5.8, "p97": 6.6},
            {"m": 3, "p3": 4.5, "p15": 5.2, "p50": 5.8, "p85": 6.6, "p97": 7.5},
            {"m": 4, "p3": 5.0, "p15": 5.7, "p50": 6.4, "p85": 7.3, "p97": 8.2},
            {"m": 5, "p3": 5.4, "p15": 6.1, "p50": 6.9, "p85": 7.8, "p97": 8.8},
            {"m": 6, "p3": 5.7, "p15": 6.5, "p50": 7.3, "p85": 8.2, "p97": 9.3},
            {"m": 7, "p3": 6.0, "p15": 6.8, "p50": 7.6, "p85": 8.6, "p97": 9.8},
            {"m": 8, "p3": 6.3, "p15": 7.0, "p50": 7.9, "p85": 9.0, "p97": 10.2},
            {"m": 9, "p3": 6.5, "p15": 7.3, "p50": 8.2, "p85": 9.3, "p97": 10.5},
            {"m": 10, "p3": 6.7, "p15": 7.5, "p50": 8.5, "p85": 9.6, "p97": 10.9},
            {"m": 11, "p3": 6.9, "p15": 7.7, "p50": 8.7, "p85": 9.9, "p97": 11.2},
            {"m": 12, "p3": 7.0, "p15": 7.9, "p50": 8.9, "p85": 10.1, "p97": 11.5}
        ],
        "length": [
            {"m": 0, "p3": 45.4, "p15": 47.3, "p50": 49.1, "p85": 51.0, "p97": 52.9},
            {"m": 1, "p3": 49.8, "p15": 51.7, "p50": 53.7, "p85": 55.6, "p97": 57.6},
            {"m": 2, "p3": 53.0, "p15": 55.0, "p50": 57.1, "p85": 59.1, "p97": 61.1},
            {"m": 3, "p3": 55.6, "p15": 57.7, "p50": 59.8, "p85": 61.9, "p97": 64.0},
            {"m": 4, "p3": 57.8, "p15": 60.0, "p50": 62.1, "p85": 64.3, "p97": 66.4},
            {"m": 5, "p3": 59.6, "p15": 61.8, "p50": 64.0, "p85": 66.2, "p97": 68.5},
            {"m": 6, "p3": 61.2, "p15": 63.5, "p50": 65.7, "p85": 68.0, "p97": 70.3},
            {"m": 7, "p3": 62.7, "p15": 65.0, "p50": 67.3, "p85": 69.6, "p97": 71.9},
            {"m": 8, "p3": 64.0, "p15": 66.4, "p50": 68.7, "p85": 71.1, "p97": 73.5},
            {"m": 9, "p3": 65.3, "p15": 67.7, "p50": 70.1, "p85": 72.6, "p97": 75.0},
            {"m": 10, "p3": 66.5, "p15": 69.0, "p50": 71.5, "p85": 73.9, "p97": 76.4},
            {"m": 11, "p3": 67.7, "p15": 70.3, "p50": 72.8, "p85": 75.3, "p97": 77.8},
            {"m": 12, "p3": 68.9, "p15": 71.4, "p50": 74.0, "p85": 76.6, "p97": 79.2}
        ],
        "head": [
            {"m": 0, "p3": 31.5, "p15": 32.7, "p50": 33.9, "p85": 35.1, "p97": 36.2},
            {"m": 2, "p3": 35.8, "p15": 36.9, "p50": 38.0, "p85": 39.2, "p97": 40.3},
            {"m": 4, "p3": 38.5, "p15": 39.6, "p50": 40.7, "p85": 41.9, "p97": 43.1},
            {"m": 6, "p3": 40.2, "p15": 41.2, "p50": 42.4, "p85": 43.6, "p97": 44.8},
            {"m": 9, "p3": 41.8, "p15": 42.8, "p50": 44.0, "p85": 45.2, "p97": 46.4},
            {"m": 12, "p3": 42.9, "p15": 43.9, "p50": 45.1, "p85": 46.3, "p97": 47.5}
        ]
    }
}

milestone_jumps_data = [
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
]

beikost_foods_data = [
    {"id": "karotte", "name": "Frühkarotte", "cat": "Gemüse", "allergen": False, "intro": "Sehr mild, süßlicher Geschmack, klassischer Start. Kann stopfend wirken."},
    {"id": "pastinake", "name": "Pastinake", "cat": "Gemüse", "allergen": False, "intro": "Besonders stuhlregulierend und leicht verdaulich. Perfekt für empfindliche Babys."},
    {"id": "kuerbis", "name": "Kürbis (Hokkaido)", "cat": "Gemüse", "allergen": False, "intro": "Cremig, leuchtende Farbe, stuhllockernd und reich an Beta-Carotin."},
    {"id": "zucchini", "name": "Zucchini", "cat": "Gemüse", "allergen": False, "intro": "Sehr wasserreich, extrem mild und allergenarm."},
    {"id": "kartoffel", "name": "Kartoffel", "cat": "Sättigung", "allergen": False, "intro": "Liefert komplexe Kohlenhydrate und Kalium. Wird mit Gemüse kombiniert."},
    {"id": "rind", "name": "Rindfleisch", "cat": "Eisen", "allergen": False, "intro": "Bester Eisenlieferant für das Gehirnwachstum ab dem 5./6. Monat."},
    {"id": "hafer", "name": "Haferflocken (Schmelzflocken)", "cat": "Getreide", "allergen": False, "intro": "Reich an pflanzlichem Eisen und Zink. Ideal für den Abendbrei."},
    {"id": "weizen", "name": "Weizengrieß (Gluten)", "cat": "Allergen", "allergen": True, "intro": "Enthält Gluten. Soll laut Leitlinie frühzeitig in kleinen Mengen eingeführt werden."},
    {"id": "apfel", "name": "Apfel (gedünstet)", "cat": "Obst", "allergen": False, "intro": "Anfangs immer dünsten, um Fruchtsäure abzumildern. Liefert Vitamin C."},
    {"id": "banane", "name": "Banane", "cat": "Obst", "allergen": False, "intro": "Sehr energiereich, weich. Kann bei empfindlichen Babys stopfen."},
    {"id": "kuhmilch", "name": "Vollmilch (im Brei gekocht)", "cat": "Allergen", "allergen": True, "intro": "Im Milch-Getreide-Brei erlaubt (max. 200 ml/Tag). Niemals als Trinkmilch vor 1 Jahr!"},
    {"id": "ei", "name": "Hühnerei (hartgekocht)", "cat": "Allergen", "allergen": True, "intro": "Wichtiges Allergen. 1x wöchentlich 1/4 hartgekochtes Eigelb/Eiweiß unter den Brei mischen."},
    {"id": "fisch", "name": "Lachs / Kabeljau", "cat": "Allergen", "allergen": True, "intro": "Liefert wertvolle Omega-3-Fettsäuren (DHA) für Augen und Gehirn. Gründlich entgräten!"},
    {"id": "erdnuss", "name": "Erdnussmus (fein püriert)", "cat": "Allergen", "allergen": True, "intro": "Messerspitze ins Püree rühren. Senkt das Erdnussallergie-Risiko drastisch!"}
]

triage_questions_data = [
    {
        "id": "q1",
        "question": "1. Wie alt ist dein Baby?",
        "options": [
            {"label": "Unter 3 Monate alt (Neugeborenes)", "next": "q_young"},
            {"label": "3 Monate oder älter", "next": "q_temp"}
        ]
    },
    {
        "id": "q_young",
        "question": "2. Hat dein Neugeborenes (< 3 Monate) eine Temperatur von 38,0 °C oder höher?",
        "options": [
            {"label": "JA – Temperatur ist 38,0 °C oder höher", "result": "red_newborn_fever"},
            {"label": "NEIN – Temperatur ist unter 38,0 °C", "next": "q_breathing"}
        ]
    },
    {
        "id": "q_temp",
        "question": "2. Welche Körpertemperatur (rektal gemessen) hat dein Baby?",
        "options": [
            {"label": "Unter 38,5 °C (Normal oder leicht erhöht)", "next": "q_breathing"},
            {"label": "38,5 °C bis 39,4 °C (Fieber)", "next": "q_breathing"},
            {"label": "39,5 °C oder höher (Sehr hohes Fieber)", "next": "q_fever_high"}
        ]
    },
    {
        "id": "q_breathing",
        "question": "3. Wie atmet dein Baby?",
        "options": [
            {"label": "Normal, ruhig, kein Stöhnen", "next": "q_behavior"},
            {"label": "Bellender Husten, pfeifendes Einatmen (Verdacht auf Pseudokrupp)", "result": "yellow_croup"},
            {"label": "Akute Atemnot: Zieht Haut an Rippen/Hals ein, Nasenflügeln, Blaufärbung", "result": "red_dyspnea"}
        ]
    },
    {
        "id": "q_behavior",
        "question": "4. Wie verhält sich dein Baby beim Trinken & Reagieren?",
        "options": [
            {"label": "Aufmerksam, lächelt zwischendurch, trinkt ausreichend, Windeln nass", "next": "q_rash"},
            {"label": "Sehr unruhig, quengelig, trinkt weniger, aber weckbar", "next": "q_rash"},
            {"label": "Apathisch, reagiert kaum, blickt ins Leere, lässt sich kaum wecken", "result": "red_lethargy"}
        ]
    },
    {
        "id": "q_rash",
        "question": "5. Hat dein Baby Hautausschlag oder rote Punkte?",
        "options": [
            {"label": "Kein Ausschlag / normale Haut", "result": "green_watch"},
            {"label": "Flächiger roter Ausschlag (z.B. Hitze- oder Infekt-Ausschlag)", "result": "yellow_rash"},
            {"label": "Kleine rote/violette Punkte, die bei Glas-Andruck NICHT verblassen! (Petechien)", "result": "red_petechiae"}
        ]
    },
    {
        "id": "q_fever_high",
        "question": "Reagiert dein Baby trotz > 39,5 °C Fieber auf Ansprache?",
        "options": [
            {"label": "Ja, ist ansprechbar, trinkt nach Fiebersaft etwas Wasser/Milch", "next": "q_breathing"},
            {"label": "Nein, erbricht alles, krampft oder ist apathisch", "result": "red_fever_severe"}
        ]
    }
]

triage_results_data = {
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
}

vaccine_timeline_template = [
    {"id": "u1", "title": "Vorsorge U1", "offsetDays": 0, "type": "u", "doctor": "Klinik / Kreißsaal", "desc": "APGAR-Score, pH-Wert, 1. Gabe Vitamin K"},
    {"id": "u2", "title": "Vorsorge U2", "offsetDays": 7, "type": "u", "doctor": "Kinderarzt", "desc": "3. bis 10. Lebenstag: Organ-Check, Hör- & Stoffwechselscreening, 2. Vitamin K"},
    {"id": "u3", "title": "Vorsorge U3 & Hüftultraschall", "offsetDays": 30, "type": "u", "doctor": "Kinderarzt", "desc": "4. bis 5. Woche: Gedeihen, Reflexe, Hüftdysplasie-Ultraschall, 3. Vitamin K"},
    {"id": "rota1", "title": "1. Schluckimpfung Rotaviren", "offsetDays": 42, "type": "vax", "doctor": "Kinderarzt", "desc": "Ab vollendeter 6. Lebenswoche: Schutz vor schwerem Magen-Darm-Brechdurchfall"},
    {"id": "u4", "title": "Vorsorge U4 & 1. Grundimmunisierung", "offsetDays": 95, "type": "both", "doctor": "Kinderarzt", "desc": "3. bis 4. Monat: Motorik-Check + 1. 6-fach (Tetanus, Diphtherie, Pertussis, Polio, Hib, HepB) + Pneumokokken + Rotaviren 2"},
    {"id": "vax2", "title": "2. Grundimmunisierung", "offsetDays": 135, "type": "vax", "doctor": "Kinderarzt", "desc": "Ca. 4 Monate: 2. Dosis 6-fach + Pneumokokken"},
    {"id": "u5", "title": "Vorsorge U5", "offsetDays": 185, "type": "u", "doctor": "Kinderarzt", "desc": "6. bis 7. Monat: Drehen, Greifen, Zähne, Beikostreife"},
    {"id": "z1", "title": "1. Zahnärztliche Früherkennung (Z1)", "offsetDays": 220, "type": "dental", "doctor": "Zahnarzt", "desc": "Ab Durchbruch der ersten Milchzähne (6.–9. Monat): Zahnpflegeberatung & Fluorid"},
    {"id": "vax3", "title": "3. Grundimmunisierung", "offsetDays": 330, "type": "vax", "doctor": "Kinderarzt", "desc": "11. Monat: Vervollständigung 6-fach-Impfung + Pneumokokken"},
    {"id": "u6", "title": "Vorsorge U6 & 1. Geburtstag", "offsetDays": 365, "type": "both", "doctor": "Kinderarzt", "desc": "10. bis 12. Monat: Krabbeln, Hochziehen, Pinzettengriff + 1. Dosis MMRV (Masern, Mumps, Röteln, Windpocken) + Meningokokken B / C"}
]

print("Writing datasets to new_datasets.json...")
all_data = {
    "WHO_GROWTH_DATA": who_growth_data,
    "MILESTONE_JUMPS_DATA": milestone_jumps_data,
    "BEIKOST_FOODS_DATA": beikost_foods_data,
    "TRIAGE_QUESTIONS_DATA": triage_questions_data,
    "TRIAGE_RESULTS_DATA": triage_results_data,
    "VACCINE_TIMELINE_TEMPLATE": vaccine_timeline_template
}

with open("new_datasets.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, ensure_ascii=False, indent=2)

print("Saved new_datasets.json successfully!")
