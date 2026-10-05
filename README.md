# 🍼 BabyKompass – Das Große Eltern-Kompendium fürs 1. Lebensjahr

> **Evidenzbasiertes medizinisches Elternwissen, Erste-Hilfe-Notfallpläne, interaktive Rechner (TOG, Wachfenster, Stuhlgang, Zahnen) und U-Vorsorge-Checklisten – optimiert für iPhone 15 Pro Max (Hoch- & Querformat) als installierbare Web-App (PWA).**

---

## 📱 Auf dem iPhone wie eine App installieren (PWA)

Sobald dieses Repository auf **GitHub Pages** bereitgestellt ist (oder über Safari aufgerufen wird), lässt sich BabyKompass direkt als vollwertige native App ohne Safari-Adressleiste auf dem iPhone installieren:

1. **Öffne die Website in Safari auf deinem iPhone** (z. B. `https://<dein-benutzername>.github.io/baby-guide/`).
2. Tippe unten in der Safari-Leiste auf das **Teilen-Symbol** (Viereck mit Pfeil nach oben `􀈂`).
3. Scrolle etwas nach unten und wähle **„Zum Home-Bildschirm“** (Add to Home Screen `➕`).
4. Tippe oben rechts auf **„Hinzufügen“**.
5. **Fertig!** Das BabyKompass-App-Icon (🍼) erscheint auf deinem Home-Bildschirm. Sie öffnet sich im Vollbildschirmmodus, unterstützt Hoch- und Querformat (iPhone 15 Pro Max Dynamic Island & Safe Area) und funktioniert dank Service Worker auch ohne Internetverbindung (100% offline).

---

## 🚀 In 3 Schritten auf GitHub hochladen & kostenlos online stellen (GitHub Pages)

### Schritt 1: Lokales Git-Repository initialisieren und committen
Öffne das Terminal in diesem Projektordner und führe aus:

```bash
git init
git add .
git commit -m "Initial commit: BabyKompass PWA & iPhone 15 Pro Max optimization"
```

### Schritt 2: Mit GitHub verbinden
Erstelle auf [GitHub.com](https://github.com/new) ein neues Repository (z. B. `baby-guide` oder `babykompass`, auf **Public** stellen). Verbinde es anschließend:

```bash
git branch -M main
git remote add origin https://github.com/<DEIN-GITHUB-BENUTZERNAME>/<DEIN-REPO-NAME>.git
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren
1. Gehe in deinem GitHub-Repository auf **Settings** (Einstellungen).
2. Klicke in der linken Seitenleiste auf **Pages**.
3. Wähle unter **Build and deployment** bei **Source** die Option `Deploy from a branch`.
4. Wähle als Branch `main` und Ordner `/ (root)` aus und klicke auf **Save**.
5. Nach ca. 1–2 Minuten ist deine App unter `https://<DEIN-GITHUB-BENUTZERNAME>.github.io/<DEIN-REPO-NAME>/` live erreichbar!

---

## ✨ Features & Highlights

* **🌙 Standardmäßiger Nachtlesemodus (Dark Mode):** Augenschonend für nächtliches Stillen und Füttern um 3 Uhr morgens, jederzeit per Button in den Tagmodus wechselbar.
* **📱 Optimiert für iPhone 15 Pro Max:**
  * Unterstützt die Dynamic Island und den Home Indicator (`viewport-fit=cover` & CSS Safe-Area-Insets).
  * Vollständig responsive im **Hoch- und Querformat (Landscape)** mit kompakten Bedienelementen und scrollbaren Modals.
* **🚨 7 illustrierte Notfallpläne:** Schritt-für-Schritt-Anleitungen für Reanimation (CPR), Verschlucken/Ersticken, Fieberkrampf, Sturz vom Wickeltisch, Vergiftung, Verbrennung und Ertrinken.
* **🛠️ 6 Interaktive Eltern-Werkzeuge:**
  1. **TOG-Schlafrechner:** Verhindert Überhitzung (SIDS-Prävention) anhand der Raumtemperatur.
  2. **Wachfenster-Rechner:** Verhindert Übermüdung je nach Lebensmonat.
  3. **Dunstan Baby-Sprach-Decoder:** Die 5 Reflexlaute mit Audiovorschau.
  4. **Windel- & Stuhlgang-Decoder:** Farblehre mit Alarmstufen (Weiß, Rot, Teerschwarz).
  5. **Zahnungs-Kompass:** Durchbruchsfolge der 20 Milchzähne & Schmerzlinderung.
  6. **Druckbares Babysitter-Merkblatt:** Für Großeltern & Babysitter mit Notfallnummern.
* **🗓️ Monat 1 bis 12 Entwicklungskompass:** Meilensteine, Motorik, Schlafbedarf, Ernährung und U-Untersuchungen.
* **⭐ Persönliche Merkliste:** Wichtige Artikel markieren und sofort wiederfinden.
* **🎓 10-Fragen-Elterndiplom:** Interaktives Quiz zum Überprüfen lebenswichtigen Wissens.
