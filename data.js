// =============================================================================
// DATA.JS – Wahl-O-Mat Bad Vilbel & Wetteraukreis 2026
// Alle Fragen, Antworten, Scores und Quellen
// Scores: -2 (starke Ablehnung) bis +2 (starke Zustimmung) je Partei
// =============================================================================

const APP_DATA = {

  // ---------------------------------------------------------------------------
  // MODUL A – Stadtverordnetenversammlung Bad Vilbel
  // Parteien: CDU, SPD, GRÜNE, FDP, AfD, LINKE
  // ---------------------------------------------------------------------------
  moduleA: {
    id: 'bad-vilbel',
    title: 'Stadtverordnetenversammlung Bad Vilbel',
    subtitle: '26 Fragen zur Stadtpolitik · 6 Parteien · Themen wählbar',
    parties: [
      { id: 'cdu',   name: 'CDU',   color: '#9ca3af' },
      { id: 'spd',   name: 'SPD',   color: '#ef4444' },
      { id: 'gruene',name: 'GRÜNE', color: '#22c55e' },
      { id: 'fdp',   name: 'FDP',   color: '#eab308' },
      { id: 'afd',   name: 'AfD',   color: '#38bdf8' },
      { id: 'linke', name: 'LINKE', color: '#f87171' },
    ],
    questions: [

      // Q1 – Straßenbahn
      {
        id: 'a1',
        topic: '🚋 Mobilität',
        question: 'Soll eine Straßenbahn von Frankfurt durch Bad Vilbel bis nach Karben gebaut werden?',
        context: 'Eine Straßenbahnlinie würde Bad Vilbel besser mit Frankfurt verbinden. Kritiker befürchten jahrelange Baustellen und Einschnitte ins Stadtbild.',
        options: [
          { id: 'a', text: 'Ja, die Straßenbahn soll so schnell wie möglich gebaut werden – sie ist unverzichtbar für die Verkehrswende.' },
          { id: 'b', text: 'Ja, aber erst nach einer gründlichen Machbarkeitsstudie und breiter Bürgerbeteiligung.' },
          { id: 'c', text: 'Nein, andere Maßnahmen (Busausbau, Vilbus-Elektrifizierung) sind sinnvoller und günstiger.' },
          { id: 'd', text: 'Nein, eine Straßenbahn würde die Stadt zerschneiden und jahrelang lahmlegen – klare Ablehnung.' },
        ],
        scores: {
          cdu:    { a: -2, b: -1, c:  1, d:  2 },
          spd:    { a:  1, b:  2, c:  0, d: -1 },
          gruene: { a:  1, b:  2, c: -1, d: -2 },
          fdp:    { a: -1, b:  1, c:  2, d:  0 },
          afd:    { a: -2, b: -1, c:  1, d:  2 },
          linke:  { a:  1, b:  2, c:  0, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU lehnt Straßenbahn klar ab: „würde Stadt in der Mitte zerschneiden"', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD für ÖPNV-Ausbau und Förderung des Nahverkehrs', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE fordern Machbarkeitsstudie für Straßenbahn', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: ÖPNV technologieoffen ausbauen, nach Wirkung bewerten', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Keine konkreten Äußerungen, generell gegen teure Infrastrukturprojekte', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Lösungsorientiert über Straßenbahn nachdenken, ÖPNV als echte Alternative', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q2 – Hallenbad & Therme
      {
        id: 'a2',
        topic: '🏊 Freizeit',
        question: 'Wie soll Bad Vilbel das geplante Hallenbad und die Therme realisieren?',
        context: 'Das Hallenbad in Bad Vilbel ist seit Jahren defizitär. Ein neues Hallenbad soll in Kombination mit einer Therme entstehen. Baugenehmigung wird zeitnah erwartet.',
        options: [
          { id: 'a', text: 'Hallenbad und Therme zügig bauen – als kommunales Hallenbad für Schulen, Vereine und Familien, integriert in die Thermenwelt.' },
          { id: 'b', text: 'Hallenbad ja, aber Therme nur wenn privatwirtschaftlich finanziert – die Stadt darf kein zusätzliches Defizit riskieren.' },
          { id: 'c', text: 'Zuerst umfangreiche Wirtschaftlichkeitsprüfung, dann entscheiden – kein Blankoscheck für das Projekt.' },
          { id: 'd', text: 'Das bestehende Freibad sanieren reicht; ein Hallenbad und eine Therme sind zu teuer.' },
        ],
        scores: {
          cdu:    { a:  2, b:  1, c:  0, d: -1 },
          spd:    { a:  2, b:  1, c:  0, d: -1 },
          gruene: { a:  1, b:  2, c:  1, d: -1 },
          fdp:    { a:  0, b:  2, c:  2, d:  0 },
          afd:    { a:  2, b:  1, c:  0, d: -1 },
          linke:  { a:  2, b:  0, c:  0, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Kommunales Hallenbad in Thermenwelt integriert, Baugenehmigung erwartet', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD unterstützt Hallenbad-Projekt', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Hallenbad erwähnt, Wirtschaftlichkeit im Blick', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Optionen für Hallenbad offen und frühzeitig prüfen, Kostenkontrolle bei Großprojekten', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Therme unterstützt als Einnahmequelle für VilCo-Defizit', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Öffentliche Einrichtungen für alle zugänglich halten', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q3 – Wohnraum
      {
        id: 'a3',
        topic: '🏠 Wohnraum',
        question: 'Wie soll Bad Vilbel auf den Wohnungsmangel reagieren?',
        context: 'Bad Vilbel hat einen extremen Mangel an bezahlbaren Mietwohnungen im unteren und mittleren Preissegment. Neue Baugebiete sind umstritten.',
        options: [
          { id: 'a', text: 'Deutlich mehr sozialen Wohnungsbau und Leerstandsbeseitigung – der Markt löst das Problem nicht.' },
          { id: 'b', text: 'Neubau ja, aber maßvoll und punktuell ohne große neue Baugebiete – Stadtcharakter erhalten.' },
          { id: 'c', text: 'Parkplatzregelungen und Bauvorschriften lockern, damit günstigeres Wohnen für Investoren attraktiver wird.' },
          { id: 'd', text: 'Keine neuen Großbaugebiete – Innenentwicklung und Nachverdichtung haben Vorrang.' },
        ],
        scores: {
          cdu:    { a: -1, b:  2, c:  1, d:  1 },
          spd:    { a:  2, b:  1, c:  0, d:  0 },
          gruene: { a:  1, b:  0, c:  2, d:  1 },
          fdp:    { a: -1, b:  1, c:  2, d:  0 },
          afd:    { a: -1, b:  1, c:  1, d:  1 },
          linke:  { a:  2, b:  0, c: -1, d:  0 },
        },
        sources: {
          cdu:    { text: 'CDU: Neuer Wohnraum ja, aber nur punktuell mit Augenmaß, ohne neue große Baugebiete', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Bezahlbares Wohnen als Kernthema', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Parkplatzregelungen ändern für günstigeres Wohnen, Carsharing fördern', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Regulierungen reduzieren, Markt aktivieren', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Maßvolle Stadtentwicklung, kein unkontrollierter Zuzug', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Extremer Mangel an Mietwohnungen, mehr sozialer Wohnungsbau und Leerstandbeseitigung', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q4 – Radverkehr & FRM6
      {
        id: 'a4',
        topic: '🚲 Radverkehr',
        question: 'Wie soll der Radschnellweg FRM6 (Frankfurt–Karben) in Bad Vilbel umgesetzt werden?',
        context: 'Der Radschnellweg FRM6 soll durch Bad Vilbel führen und eine komfortable Verbindung nach Frankfurt schaffen. Umstritten ist die genaue Trassenführung.',
        options: [
          { id: 'a', text: 'Zügig umsetzen – auch wenn das Parkplätze oder Straßenraum kostet. Radfahrer brauchen Priorität.' },
          { id: 'b', text: 'Umsetzen, aber ausgewogen und ohne ideologische Konfrontation zwischen Autofahrern und Radfahrern.' },
          { id: 'c', text: 'Sichere Radwege ja, aber mit Augenmaß – keine teuren Symbolprojekte auf Kosten des Autoverkehrs.' },
          { id: 'd', text: 'Radwege sind nice-to-have, aber nicht Priorität – Autoverkehr muss weiter fließen können.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  0 },
          spd:    { a:  1, b:  2, c:  0, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -1, b:  1, c:  2, d:  1 },
          afd:    { a: -1, b:  0, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c:  0, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Radschnellweg FRM6 geplant, ausgewogenes Miteinander aller Verkehrsarten', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Fahrrad als Teil der Mobilitätswende', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Radverkehr stark ausbauen, zukunftsweisende Verkehrspolitik', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Sichere Radwege mit Augenmaß und klarer Priorisierung vor teuren Symbolprojekten', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Keine konkrete Position, generell auto-affin', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Radverkehr als Autoalternative ausbauen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q5 – Kita-Gebühren
      {
        id: 'a5',
        topic: '👶 Kita & Familie',
        question: 'Soll Bad Vilbel die Kita-Gebühren senken oder ganz abschaffen?',
        context: 'Bad Vilbel erhebt vergleichsweise hohe Kita-Gebühren für unter Dreijährige. Das Land Hessen übernimmt ab 2024 die Kernzeiten. Eltern fordern kostenfreie Ganztagsbetreuung.',
        options: [
          { id: 'a', text: 'Ja – die Stadt soll die verbleibenden Gebühren vollständig übernehmen und kostenfreie Ganztagsbetreuung für alle einführen.' },
          { id: 'b', text: 'Ja – schrittweise Gebührensenkung anstreben, aber nur soweit der Haushalt es erlaubt.' },
          { id: 'c', text: 'Nein – die bestehenden Regelungen reichen; vollständige Gebührenfreiheit ist nicht finanzierbar.' },
          { id: 'd', text: 'Nein – Eltern sollen einen angemessenen Beitrag leisten; das Geld besser in Qualität investieren.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  1 },
          spd:    { a:  2, b:  1, c: -1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -1 },
          fdp:    { a: -1, b:  0, c:  1, d:  2 },
          afd:    { a:  0, b:  0, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Verlässliche Kinderbetreuung, keine konkreten Gebührenpläne', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Kostenfreie Ganztagsbetreuung angestrebt, kritisiert hohe Gebühren für unter 3-Jährige', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Bessere Kinderbetreuung als Priorität Nr. 1', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Welcome-Service für Kita-Platz, keine Gebührenfreiheit-Zusage', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Keine explizite Position zu Kita-Gebühren', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Soziale Gerechtigkeit – Gebührenfreiheit als Ziel', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q6 – Innenstadt & Einzelhandel
      {
        id: 'a6',
        topic: '🏪 Innenstadt',
        question: 'Wie soll die Bad Vilbeler Innenstadt und der Einzelhandel gestärkt werden?',
        context: 'Die Frankfurter Straße als Haupteinkaufsstraße kämpft mit Leerstand. Die Stadt diskutiert Sanierungsmaßnahmen, Veranstaltungen und Nutzungskonzepte.',
        options: [
          { id: 'a', text: 'Aktive Revitalisierung: Veranstaltungen, lokale Märkte, Pop-up-Flächen und gezielte Ansiedlung von Geschäften.' },
          { id: 'b', text: 'Straßensanierung und Aufwertung des öffentlichen Raums – attraktives Umfeld zieht Handel an.' },
          { id: 'c', text: 'Weniger Bürokratie und niedrige Gewerbesteuer – dann kommt der Handel von allein.' },
          { id: 'd', text: 'Online-Handel ist nicht aufzuhalten – lieber Gastronomie, Dienstleistungen und Kultur fördern.' },
        ],
        scores: {
          cdu:    { a:  1, b:  1, c:  2, d:  0 },
          spd:    { a:  2, b:  1, c:  0, d:  1 },
          gruene: { a:  1, b:  1, c: -1, d:  2 },
          fdp:    { a:  1, b:  2, c:  2, d:  0 },
          afd:    { a:  0, b:  1, c:  2, d: -1 },
          linke:  { a:  2, b:  1, c: -1, d:  1 },
        },
        sources: {
          cdu:    { text: 'CDU: Kulturelle Angebote und Wirtschaftsförderung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Revitalisierung der Innenstadt als klares Ziel', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Lebendige Stadt mit Kultur und vielfältiger Nutzung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Frankfurter Straße sanieren, lokale Formate unterstützen, Bürokratie abbauen', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Wettbewerbsfähige Gewerbesteuer als Standortfaktor', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Starke lokale Wirtschaft und soziale Infrastruktur in der Innenstadt', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q7 – Klimaneutralität
      {
        id: 'a7',
        topic: '🌍 Klimaschutz',
        question: 'Soll Bad Vilbel ein verbindliches Zieldatum für Klimaneutralität festlegen?',
        context: 'Die Stadt hat ein Integriertes Klimaschutzkonzept (IKSK) beschlossen. Nun geht es darum, wie ambitioniert und verbindlich die Ziele gesetzt werden.',
        options: [
          { id: 'a', text: 'Ja – Klimaneutralität bis 2035 als verbindliches Ziel, mit konkretem Maßnahmenplan und jährlichem Monitoring.' },
          { id: 'b', text: 'Ja – Klimaneutralität bis 2040–2045, realistisch und wirtschaftlich tragbar.' },
          { id: 'c', text: 'Klimaschutzziele ja, aber ohne starre Fristen – Maßnahmen müssen wirtschaftlich sinnvoll sein.' },
          { id: 'd', text: 'Klimaschutz ist Sache von Bund und Land – auf kommunaler Ebene gibt es wichtigere Themen.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  0 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -1, b:  0, c:  2, d:  1 },
          afd:    { a: -2, b: -1, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Klimaangepasste Stadtentwicklung, Stadtwald schützen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Begrüßt IKSK-Beschluss, Klimaschutz im Alltag spürbar machen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31025-spd-begr%C3%BC%C3%9Ft-beschluss-des-integrierten-klimaschutzkonzeptes.html' },
          gruene: { text: 'GRÜNE: Verstärkter ökologischer Fokus als Kernthema', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Klimaschutz nach Wirkung bewerten, technologieoffen', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Ablehnung von Windkraft, Kritik an Energiepolitik', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Klimagerechte Mobilität, ambitionierter Klimaschutz', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q8 – Solar auf Stadtgebäuden
      {
        id: 'a8',
        topic: '☀️ Energie',
        question: 'Sollen alle geeigneten städtischen Gebäude in Bad Vilbel mit Solaranlagen ausgestattet werden?',
        context: 'Städtische Gebäude wie Schulen, Feuerwehren und das Rathaus könnten mit PV-Anlagen Strom erzeugen und die Energiekosten der Stadt senken.',
        options: [
          { id: 'a', text: 'Ja – alle geeigneten Dächer sollen bis 2030 mit Photovoltaik ausgestattet werden, zügig und verbindlich.' },
          { id: 'b', text: 'Ja – schrittweise nach Wirtschaftlichkeitsprüfung, wo es Sinn ergibt.' },
          { id: 'c', text: 'Gut wenn möglich, aber nur wenn keine Mehrkosten für die Steuerzahler entstehen.' },
          { id: 'd', text: 'Energieversorgung ist Sache privater Anbieter – die Stadt soll sich auf ihre Kernaufgaben konzentrieren.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c:  0, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a: -1, b:  0, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c:  0, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Umwelt und Klima als Themenbereich, keine spezifische Solar-Zusage', url: 'https://www.cdu-bad-vilbel.de/programm' },
          spd:    { text: 'SPD: Klimaschutz im Alltag spürbar machen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31025-spd-begr%C3%BC%C3%9Ft-beschluss-des-integrierten-klimaschutzkonzeptes.html' },
          gruene: { text: 'GRÜNE: Erneuerbare Energien und ökologischer Fokus', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Wirtschaftlichkeit vor Ideologie – Solar wo sinnvoll', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Kritisch gegenüber staatlich gelenkter Energiewende', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Klimaschutz als gesamtgesellschaftliche Aufgabe', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q9 – Kommunale Finanzen
      {
        id: 'a9',
        topic: '💰 Finanzen',
        question: 'Wie soll Bad Vilbel seine kommunalen Finanzen ausrichten?',
        context: 'Bad Vilbel ist eine der finanziell stärksten Kommunen Hessens. Die Gewerbesteuer wurde gesenkt. Diskutiert wird, ob mehr investiert oder weiter gespart werden soll.',
        options: [
          { id: 'a', text: 'Mehr in soziale Infrastruktur, Schulen und ÖPNV investieren – auch wenn das mehr Schulden bedeutet.' },
          { id: 'b', text: 'Ausgeglichener Haushalt mit gezielten Investitionen – solide Finanzpolitik ohne neue Schulden.' },
          { id: 'c', text: 'Gewerbesteuer weiter niedrig halten und Bürokratie abbauen – wirtschaftsfreundlich bleiben.' },
          { id: 'd', text: 'Strikte Haushaltsdisziplin, keine Schulden – lieber auf Luxusprojekte verzichten.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  1 },
          spd:    { a:  2, b:  1, c:  0, d: -1 },
          gruene: { a:  1, b:  1, c: -1, d: -1 },
          fdp:    { a: -1, b:  1, c:  2, d:  1 },
          afd:    { a: -1, b:  0, c:  1, d:  2 },
          linke:  { a:  2, b:  0, c: -1, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Nahezu schuldenfrei, zweitniedrigste Gewerbesteuer Hessens, solide Finanzpolitik', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Stärkung der lokalen Infrastruktur und öffentlicher Dienste', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Ökologische Investitionen, keine Schulden auf Kosten der Natur', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Kein Steuererhöhungen, transparente Haushaltsführung, „mit Bürgergeldern umgehen wie mit eigenem"', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Kritik an Kosten der Migration, Unterfinanzierung der Kommunen', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Mehr Investitionen in soziale Infrastruktur', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q10 – Bürgerbeteiligung
      {
        id: 'a10',
        topic: '🗳️ Demokratie',
        question: 'Wie soll Bürgerbeteiligung in Bad Vilbel gestärkt werden?',
        context: 'Bürger wünschen sich mehr Mitsprache bei Stadtentwicklung und Großprojekten. Diskutiert werden digitale Tools, Bürgerentscheide und Ortsbeiräte.',
        options: [
          { id: 'a', text: 'Mehr direkte Demokratie: Bürgerentscheide bei Großprojekten, niedrigere Hürden für Bürgerbegehren.' },
          { id: 'b', text: 'Digitale Beteiligungsplattformen und Kleinstprojektefonds für Bürgerinitiativen.' },
          { id: 'c', text: 'Bestehende Ortsbeiräte stärken und Ausschüsse transparenter machen.' },
          { id: 'd', text: 'Repräsentative Demokratie reicht – häufigere Abstimmungen verlangsamen nur die Entscheidungen.' },
        ],
        scores: {
          cdu:    { a:  0, b:  1, c:  2, d:  1 },
          spd:    { a:  1, b:  1, c:  2, d:  0 },
          gruene: { a:  1, b:  2, c:  1, d: -1 },
          fdp:    { a:  0, b:  2, c:  1, d:  0 },
          afd:    { a:  2, b:  1, c:  0, d: -1 },
          linke:  { a:  2, b:  1, c:  1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Verwaltung und Digitalisierung als Themenbereich', url: 'https://www.cdu-bad-vilbel.de/programm' },
          spd:    { text: 'SPD: Sozialer Zusammenhalt und Bürgernähe', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Förderung des Zusammenhalts, Digitalisierung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Kleinstprojektefonds für Bürgerinitiativen, digitale Vereinsplattform', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Mehr Teilhabe durch Bürgerentscheide', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Mehr direkte Demokratie und Bürgerbeteiligung', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q11 – Sozialpolitik & Obdachlosenhilfe
      {
        id: 'a11',
        topic: '❤️ Soziales',
        question: 'Welche Priorität soll soziale Fürsorge in Bad Vilbel haben?',
        context: 'Obdachlosigkeit und Armut sind auch in wohlhabenden Kommunen wie Bad Vilbel präsent. Diskutiert werden Unterkünfte, Beratungsangebote und Prävention.',
        options: [
          { id: 'a', text: 'Starke Priorität: mehr Sozialwohnungen, Obdachlosenunterkunft ausbauen, niedrigschwellige Hilfe.' },
          { id: 'b', text: 'Verlässliche Absicherung: soziale Grundversorgung sicherstellen, Ehrenamt und Vereine stärken.' },
          { id: 'c', text: 'Soziales ist wichtig, aber primär Aufgabe von Land und Bund – Stadt soll ergänzen.' },
          { id: 'd', text: 'Eigenverantwortung hat Vorrang – staatliche Hilfe nur im Notfall, keine Vollversorgung.' },
        ],
        scores: {
          cdu:    { a: -1, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c:  0, d: -2 },
          gruene: { a:  2, b:  1, c:  0, d: -2 },
          fdp:    { a: -1, b:  1, c:  1, d:  2 },
          afd:    { a: -1, b:  0, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Stadt für alle Generationen, großzügige Unterstützung für Ehrenamt', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Soziale Gerechtigkeit als Kernthema', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Soziales Engagement als höchste Priorität', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Ehrenamt und Zusammenhalt fördern, Eigenverantwortung stärken', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Eigenverantwortung und selektive staatliche Hilfe', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Soziale Gerechtigkeit als oberstes Ziel, starke öffentliche Daseinsvorsorge', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q12 – Schulen
      {
        id: 'a12',
        topic: '📚 Bildung',
        question: 'Was soll die Stadt Bad Vilbel für die Schulinfrastruktur tun?',
        context: 'Schulgebäude in Bad Vilbel und dem Wetteraukreis brauchen Sanierungen. Diskutiert werden Investitionsprogramme, Digitalisierung und Ganztagsangebote.',
        options: [
          { id: 'a', text: 'Umfassendes Investitionsprogramm: alle Schulen modernisieren, digitalisieren und Ganztagsangebote ausbauen.' },
          { id: 'b', text: 'Schrittweise sanieren nach Dringlichkeit – solide Finanzierung wichtiger als schnelles Handeln.' },
          { id: 'c', text: 'Schulen sind primär Kreissache – die Stadt soll unterstützen, aber nicht die Hauptlast tragen.' },
          { id: 'd', text: 'Digitalisierung der Schulen hat Vorrang vor kostenintensiven Baumaßnahmen.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  1, d:  1 },
          spd:    { a:  2, b:  1, c:  0, d:  1 },
          gruene: { a:  2, b:  1, c:  0, d:  1 },
          fdp:    { a:  1, b:  1, c:  1, d:  2 },
          afd:    { a:  2, b:  1, c:  0, d:  1 },
          linke:  { a:  2, b:  1, c: -1, d:  0 },
        },
        sources: {
          cdu:    { text: 'CDU: Schule und Bildung als Themenbereich', url: 'https://www.cdu-bad-vilbel.de/programm' },
          spd:    { text: 'SPD: Bildungsinfrastruktur stärken', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Bessere Ausstattung und digitale Infrastruktur', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Digitalisierung als Schwerpunkt', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Umfassendes Investitionsprogramm in Schulen gefordert, Kritik an Verfall', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Soziale Infrastruktur – Schulen als öffentliche Aufgabe', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q13 – Wirtschaftsförderung
      {
        id: 'a13',
        topic: '🏭 Wirtschaft',
        question: 'Wie soll Bad Vilbel Wirtschaft und Gewerbe fördern?',
        context: 'Bad Vilbel hat eine der niedrigsten Gewerbesteuern Hessens. Das Dortelweiler Gewerbegebiet soll erweitert werden. Diskutiert wird auch ein großes Rechenzentrum.',
        options: [
          { id: 'a', text: 'Gewerbegebiet erweitern, niedrige Gewerbesteuer halten, Ansiedlung von Tech-Unternehmen aktiv fördern.' },
          { id: 'b', text: 'Mittelstand, Handwerk und Gründer gezielt stärken – nicht nur Großunternehmen bevorzugen.' },
          { id: 'c', text: 'Wirtschaftsförderung ja, aber Flächenversiegelung minimieren – Qualität vor Quantität.' },
          { id: 'd', text: 'Wirtschaft braucht keine staatliche Förderung – gute Rahmenbedingungen reichen.' },
        ],
        scores: {
          cdu:    { a:  2, b:  1, c:  0, d:  1 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a: -1, b:  1, c:  2, d: -1 },
          fdp:    { a:  1, b:  2, c:  0, d:  2 },
          afd:    { a:  2, b:  1, c: -1, d:  1 },
          linke:  { a: -1, b:  2, c:  1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Erweiterung Dortelweiler Gewerbegebiet, niedrige Gewerbesteuer', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Starke lokale Wirtschaft', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Ökologische Stadtentwicklung, Flächenverbrauch minimieren', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Gründer, Handwerk, Mittelstand stärken, digitale Genehmigungen', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Unterstützt Rechenzentrum Vantage, wirtschaftsfreundlich', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Wirtschaft im Dienst der Menschen, soziale und ökologische Standards', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q14 – Stadtgrün & Flächenentsiegelung
      {
        id: 'a14',
        topic: '🌿 Natur & Grün',
        question: 'Wie soll Bad Vilbel mit Stadtgrün und versiegelten Flächen umgehen?',
        context: 'Hitzesommer und Starkregen zeigen: Grünflächen und Entsiegelung sind wichtig. Die Grünen fordern u.a. Teilentsiegelung vor VilCo und Kurhaus.',
        options: [
          { id: 'a', text: 'Ambitioniert entsiegeln: VilCo-Vorplatz, Parkplätze und andere Flächen begrünen, Grüner Gürtel um die Stadt.' },
          { id: 'b', text: 'Neuen Niddapark schaffen und Stadtwald schützen – naturnahe Erholung in der Stadt.' },
          { id: 'c', text: 'Grünflächen erhalten, aber keine Einschränkungen für Gewerbe oder Parkplätze.' },
          { id: 'd', text: 'Stadtgrün ist schön, aber kein Thema, das die Politik aktiv steuern muss.' },
        ],
        scores: {
          cdu:    { a: -1, b:  2, c:  1, d:  0 },
          spd:    { a:  1, b:  1, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a: -1, b:  0, c:  2, d:  1 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Neuer 25.000m² Niddapark, Stadtwald-Schutz', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Klimaschutz im Alltag, Naturschutz', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31025-spd-begr%C3%BC%C3%9Ft-beschluss-des-integrierten-klimaschutzkonzeptes.html' },
          gruene: { text: 'GRÜNE: Grüner Gürtel, Teilentsiegelung VilCo-Vorplatz, ökologischer Fokus', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Stadtgrün ja, aber keine Einschränkungen für Wirtschaft', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Kein konkretes Stadtgrün-Programm', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Ökologische Stadt, Entsiegelung und Klimaanpassung', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q15 – Vilbus & ÖPNV
      {
        id: 'a15',
        topic: '🚌 ÖPNV & Vilbus',
        question: 'Wie soll der Vilbus (Stadtbus Bad Vilbel) weiterentwickelt werden?',
        context: 'Der Vilbus verbindet die Stadtteile Bad Vilbels. Diskutiert werden Elektrifizierung, neue Linien, Taktung und kostenfreie Nutzung.',
        options: [
          { id: 'a', text: 'Schrittweise elektrifizieren, Takt verdichten, Mobilitätsstationen an Bahnhöfen – pragmatische Verbesserung.' },
          { id: 'b', text: 'Vilbus kostenlos für alle anbieten – ÖPNV als Daseinsvorsorge, nicht als Einnahmequelle.' },
          { id: 'c', text: 'Angebot technologieoffen ausbauen und nach Wirkung bewerten – kein ideologischer Ansatz.' },
          { id: 'd', text: 'Vilbus ist ausreichend – das Geld besser in Straßen und Parkplätze investieren.' },
        ],
        scores: {
          cdu:    { a:  2, b: -1, c:  1, d:  0 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a:  1, b:  2, c:  1, d: -2 },
          fdp:    { a:  1, b: -1, c:  2, d:  1 },
          afd:    { a:  0, b: -2, c:  1, d:  2 },
          linke:  { a:  1, b:  2, c:  0, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Schrittweise Vilbus-Elektrifizierung, Mobilitätsstationen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: ÖPNV als Teil der Mobilität fördern', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Zukunftsweisende Verkehrspolitik, ÖPNV stärken', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: ÖPNV-Angebote ausbauen, technologieoffen', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Autoverkehr nicht benachteiligen', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: ÖPNV als bezahlbare und klimagerechte Alternative', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q16 – Tempo 30
      {
        id: 'a16',
        topic: '🚗 Straßenverkehr',
        question: 'Soll Bad Vilbel flächendeckend Tempo 30 in Wohngebieten einführen?',
        context: 'In vielen Städten gilt Tempo 30 als Standard in Wohngebieten, um Lärm, Unfälle und Abgase zu senken. Autoverbände warnen vor Behinderung des Verkehrs.',
        options: [
          { id: 'a', text: 'Ja – Tempo 30 als Standard in allen Wohngebieten, Tempo 50 nur noch auf Hauptstraßen.' },
          { id: 'b', text: 'Ja, aber nur an sensiblen Stellen – vor Schulen, Kitas und Seniorenheimen.' },
          { id: 'c', text: 'Nein – Tempo 50 ist ausreichend; Einzelregelungen da wo nötig reichen.' },
          { id: 'd', text: 'Nein – Tempo-30-Zonen bremsen den Verkehr und schaden dem Wirtschaftsverkehr.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  1 },
          spd:    { a:  1, b:  2, c:  0, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -1, b:  0, c:  2, d:  1 },
          afd:    { a: -2, b: -1, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Ausgewogenes Miteinander aller Verkehrsarten, keine Pauschalregelungen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Sichere Straßen für alle, gezielte Verkehrsberuhigung', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Tempo 30 als Standard für lebenswerte Straßen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Freie Fahrt statt Pauschalverbote, Einzelfallregelungen bevorzugt', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Autofahrer nicht unter Generalverdacht stellen', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Klimagerechte und sichere Mobilität – Tempo 30 ist überfällig', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q17 – Parkgebühren
      {
        id: 'a17',
        topic: '🅿️ Parken',
        question: 'Soll Bad Vilbel im Innenstadtbereich kostenpflichtige Parkplätze einführen oder die Gebühren deutlich erhöhen?',
        context: 'Parkplätze in der Innenstadt sind größtenteils kostenlos oder günstig. Parkgebühren könnten den Parkdruck mindern und Einnahmen für ÖPNV und Radwege generieren.',
        options: [
          { id: 'a', text: 'Ja – Parkgebühren einführen und Einnahmen direkt in ÖPNV und Radwegeausbau investieren.' },
          { id: 'b', text: 'Kurzzeit-Parken gratis für Einkäufer, danach moderate Gebühren – ein fairer Mittelweg.' },
          { id: 'c', text: 'Nein – kostenlose Parkplätze sind wichtig für Handel und Belebung der Innenstadt.' },
          { id: 'd', text: 'Nein – Parkgebühren treiben Kunden weg und schwächen den lokalen Einzelhandel.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  2 },
          spd:    { a:  1, b:  2, c:  0, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -1, b:  1, c:  2, d:  1 },
          afd:    { a: -2, b: -1, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Wirtschaftsfreundliche Innenstadt, freies Parken als Standortvorteil', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Innenstadt stärken, ÖPNV als echte Alternative fördern', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Parkraumbewirtschaftung für mehr Lebensqualität und Klimaschutz', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Freier Parkraum als Wettbewerbsvorteil für die Innenstadt', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Autofahrer nicht belasten, freies Parken erhalten', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Parkraum gerecht bewirtschaften, ÖPNV und Rad stärken', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q18 – Videoüberwachung
      {
        id: 'a18',
        topic: '🔒 Sicherheit',
        question: 'Soll Bad Vilbel öffentliche Plätze und den Bahnhof mit Videoüberwachungskameras ausstatten?',
        context: 'Mehr Kameras sollen laut Befürwortern Kriminalität verhindern und aufklären. Kritiker sehen Videoüberwachung als teuren Eingriff in Bürgerrechte ohne nachgewiesene Wirkung.',
        options: [
          { id: 'a', text: 'Ja – Kameras auf Bahnhöfen, zentralen Plätzen und Problemzonen für mehr objektive Sicherheit.' },
          { id: 'b', text: 'Nur dort, wo es nachweislich Probleme gibt – mit klaren Datenschutzregeln und Löschfristen.' },
          { id: 'c', text: 'Nein – Videoüberwachung schreckt nicht ab, ist teuer und schränkt Bürgerrechte ein.' },
          { id: 'd', text: 'Nein – Geld lieber in Streetworker, Prävention und soziale Angebote investieren.' },
        ],
        scores: {
          cdu:    { a:  2, b:  1, c: -1, d: -1 },
          spd:    { a:  0, b:  2, c:  0, d:  1 },
          gruene: { a: -2, b:  0, c:  1, d:  2 },
          fdp:    { a:  1, b:  2, c:  0, d: -1 },
          afd:    { a:  2, b:  1, c: -2, d: -1 },
          linke:  { a: -2, b: -1, c:  1, d:  2 },
        },
        sources: {
          cdu:    { text: 'CDU: Öffentliche Sicherheit und Ordnung stärken', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Sicherheit mit Augenmaß, soziale Prävention', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Datenschutz schützen, Prävention statt Überwachung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Datenschutzkonforme Sicherheitsmaßnahmen mit klaren Regeln', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Mehr Videoüberwachung für innere Sicherheit', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Gegen Überwachungsstaat – für soziale Prävention', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q19 – Integration
      {
        id: 'a19',
        topic: '🤝 Integration',
        question: 'Wie soll Bad Vilbel Geflüchtete und Zugewanderte in die Stadtgemeinschaft integrieren?',
        context: 'Bad Vilbel beherbergt Geflüchtete in städtischen Unterkünften. Diskutiert wird über Kapazitäten, Integrationsangebote und welche Anforderungen an Neuzugewanderte gestellt werden.',
        options: [
          { id: 'a', text: 'Aktive Integration: Sprach- und Berufsangebote ausbauen, dezentrale Unterbringung, gelebte Willkommenskultur.' },
          { id: 'b', text: 'Pragmatische Integration: Rechte und Pflichten klar kommunizieren, Unterbringung geordnet verwalten.' },
          { id: 'c', text: 'Aufnahmekapazitäten begrenzen und stärker auf Rückführung pochen, wenn Bleiberecht fehlt.' },
          { id: 'd', text: 'Weniger Zuwanderung – die Integrationsaufgabe übersteigt die Kapazitäten der Stadt.' },
        ],
        scores: {
          cdu:    { a: -1, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c: -1, d: -2 },
          gruene: { a:  2, b:  0, c: -2, d: -2 },
          fdp:    { a:  0, b:  2, c:  1, d: -1 },
          afd:    { a: -2, b: -1, c:  2, d:  2 },
          linke:  { a:  2, b:  0, c: -2, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Integration mit klaren Anforderungen, Rückführung bei fehlendem Bleiberecht', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Soziale Gerechtigkeit und gelebte Integration', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Willkommenskultur und umfassende Integrationsangebote', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Geordnete Zuwanderung, klare Regeln und Integrationsanforderungen', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Begrenzung der Aufnahme, Rückführungen forcieren', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Offene Gesellschaft und Solidarität mit Geflüchteten', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q20 – Städtische Wohnungsbaugesellschaft
      {
        id: 'a20',
        topic: '🏠 Wohnraum',
        question: 'Soll Bad Vilbel eine eigene städtische Wohnungsbaugesellschaft gründen?',
        context: 'Einige Kommunen gründen städtische Gesellschaften, um dauerhaft bezahlbaren Wohnraum zu schaffen und Sozialwohnungsquoten zu erfüllen. Andere setzen ganz auf private Investoren.',
        options: [
          { id: 'a', text: 'Ja – eine städtische GmbH soll günstigen Wohnraum bauen und dauerhaft im Bestand halten.' },
          { id: 'b', text: 'Alternativ: Quotenpflicht für Sozialwohnungen bei privaten Neubauprojekten erhöhen.' },
          { id: 'c', text: 'Nein – private Investoren bauen effizienter; die Stadt soll Rahmenbedingungen verbessern.' },
          { id: 'd', text: 'Nein – staatlicher Wohnungsbau ist zu teuer und ineffizient; Marktlösungen sind besser.' },
        ],
        scores: {
          cdu:    { a: -1, b:  0, c:  2, d:  1 },
          spd:    { a:  2, b:  2, c: -1, d: -2 },
          gruene: { a:  1, b:  2, c:  0, d: -2 },
          fdp:    { a: -2, b: -1, c:  1, d:  2 },
          afd:    { a: -1, b: -1, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Privaten Wohnungsbau aktivieren, Markt Spielraum lassen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Bezahlbares Wohnen durch mehr Sozialbindung und kommunalen Bau', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Öffentlicher Wohnungsbau als Kernaufgabe für bezahlbare Mieten', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Regulierungen abbauen statt staatlicher Wohnungsbau', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Markt statt Staat beim Wohnungsbau', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Kommunale Wohnungsbaugesellschaft dringend nötig', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q21 – Gewerbesteuer
      {
        id: 'a21',
        topic: '💰 Finanzen',
        question: 'Soll Bad Vilbel die Gewerbesteuer anheben, um mehr in soziale und ökologische Projekte zu investieren?',
        context: 'Bad Vilbel hat eine der niedrigsten Gewerbesteuern Hessens. Das bringt Firmen in die Stadt, hinterlässt aber weniger Spielraum für Schulen, Kitas und Klimaschutz.',
        options: [
          { id: 'a', text: 'Ja – Gewerbesteuer auf den Landesdurchschnitt anheben und Mehreinnahmen in soziale und Klimaprojekte stecken.' },
          { id: 'b', text: 'Leichte Anpassung möglich, wenn das Geld gezielt in Bildung und Infrastruktur fließt.' },
          { id: 'c', text: 'Nein – die niedrige Gewerbesteuer ist ein klarer Standortvorteil; sie darf nicht erhöht werden.' },
          { id: 'd', text: 'Nein – die Gewerbesteuer sollte eher weiter gesenkt werden, um mehr Firmen anzulocken.' },
        ],
        scores: {
          cdu:    { a: -2, b: -1, c:  2, d:  1 },
          spd:    { a:  1, b:  2, c:  0, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -2, b: -1, c:  1, d:  2 },
          afd:    { a: -1, b: -1, c:  2, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Zweitniedrigste Gewerbesteuer Hessens als Standortvorteil erhalten', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Mehr Investitionen in soziale Infrastruktur nötig', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Wirtschaft soll Beitrag zur Klimawandel-Bewältigung leisten', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Keine Steuererhöhungen, Standortvorteil erhalten', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Niedrige Steuern für Wirtschaftswachstum', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Reiche Kommunen müssen mehr in Soziales investieren', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q22 – Windkraft
      {
        id: 'a22',
        topic: '☀️ Energie',
        question: 'Sollen im Stadtgebiet Bad Vilbels Windenergieanlagen errichtet werden dürfen?',
        context: 'Im Stadtwald und auf stadtnahen Flächen könnten Windräder entstehen. Befürworter sehen das als Beitrag zur Energiewende; Gegner befürchten Eingriffe in Natur und Stadtbild.',
        options: [
          { id: 'a', text: 'Ja – Windkraftanlagen im Stadtwald und auf geeigneten Flächen aktiv ermöglichen.' },
          { id: 'b', text: 'Nur auf ausgewiesenen Flächen außerhalb von Schutzgebieten und nach breiter Bürgerbeteiligung.' },
          { id: 'c', text: 'Nein – im dichten Stadtgebiet ist Windkraft zu belastend; lieber konsequent auf Photovoltaik setzen.' },
          { id: 'd', text: 'Nein – Windkraft schadet Natur und Wohnqualität. Klare Ablehnung im Stadtgebiet.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  0 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -1, b:  1, c:  2, d:  0 },
          afd:    { a: -2, b: -1, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c:  0, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Stadtwald schützen, Windkraft mit Augenmaß', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Erneuerbare Energien ausbauen, Energiewende mitgestalten', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31025-spd-begr%C3%BC%C3%9Ft-beschluss-des-integrierten-klimaschutzkonzeptes.html' },
          gruene: { text: 'GRÜNE: Wind und Solar massiv ausbauen – Energiewende braucht beides', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Technologieoffen – Photovoltaik oft effizienter als Windkraft im Stadtgebiet', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Windkraft schadet Natur und Wohnqualität – klare Ablehnung', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Erneuerbare Energien als kommunale Aufgabe, Windkraft unterstützen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q23 – Senioren
      {
        id: 'a23',
        topic: '👴 Senioren',
        question: 'Wie soll Bad Vilbel seine älter werdenden Bürgerinnen und Bürger unterstützen?',
        context: 'Bad Vilbel hat eine alternde Bevölkerung. Gebraucht werden Pflegeplätze, barrierefreie Infrastruktur, Mobilitätshilfen und Begegnungsangebote für Senioren.',
        options: [
          { id: 'a', text: 'Massiv investieren: Seniorenzentren ausbauen, Barrierefreiheit im öffentlichen Raum durchsetzen, Seniorenbus einrichten.' },
          { id: 'b', text: 'Ambulante Pflege und Nachbarschaftshilfe stärken – damit Senioren länger selbstständig zuhause leben.' },
          { id: 'c', text: 'Rahmenbedingungen für private Pflegeanbieter verbessern – der Markt soll Lücken schließen.' },
          { id: 'd', text: 'Pflege ist primär Aufgabe von Land und Bund; die Stadt soll nicht in Konkurrenz zu privaten Anbietern treten.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c:  0, d: -1 },
          gruene: { a:  2, b:  2, c: -1, d: -1 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a:  1, b:  1, c:  1, d:  1 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Stadt für alle Generationen, Unterstützung für Ehrenamt und Senioren', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Soziale Gerechtigkeit für alle Generationen', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Barrierefreie Stadt, soziale Infrastruktur ausbauen', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Private Pflegeangebote stärken, Eigenverantwortung fördern', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Für ältere Bürger – Familie und Gemeinschaft stärken', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Würdige Pflege als öffentliche Aufgabe – kein Markt mit Menschenwürde', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q24 – Ganztag & Schulsozialarbeit
      {
        id: 'a24',
        topic: '📚 Bildung',
        question: 'Soll Bad Vilbel den Ganztagsbetrieb an Grundschulen und Schulsozialarbeit über die gesetzliche Pflicht hinaus ausbauen?',
        context: 'Ab 2026 gilt der Rechtsanspruch auf Ganztagsbetreuung. Diskutiert wird, ob die Stadt freiwillig mehr in Schulsozialarbeit und qualifiziertes Betreuungspersonal investiert.',
        options: [
          { id: 'a', text: 'Ja – Ganztag an allen Grundschulen mit qualifiziertem Personal und Schulsozialarbeit an jeder Schule.' },
          { id: 'b', text: 'Gesetzliches Angebot umsetzen und Schulsozialarbeit schrittweise ausbauen.' },
          { id: 'c', text: 'Gesetzliche Pflicht erfüllen, aber keine freiwilligen Extras, die den Haushalt belasten.' },
          { id: 'd', text: 'Bildung ist primär Ländersache – die Stadt soll die Räume stellen, aber keine Pädagogen anstellen.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  1 },
          spd:    { a:  2, b:  1, c: -1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -1 },
          fdp:    { a:  0, b:  1, c:  1, d:  2 },
          afd:    { a:  1, b:  1, c:  1, d:  1 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Verlässliche Bildung und Kinderbetreuung als Themenbereich', url: 'https://www.cdu-bad-vilbel.de/programm' },
          spd:    { text: 'SPD: Bildung als soziale Investition, Chancengleichheit von Anfang an', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Bessere Kinderbetreuung als höchste Priorität', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Digitalisierung und Qualität statt teure Vollversorgung', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Bildungsqualität verbessern, Leistung stärken', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Bildung als öffentliche Aufgabe – keine Zwei-Klassen-Bildung', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q25 – Kulturförderung / VilCo
      {
        id: 'a25',
        topic: '🎭 Kultur',
        question: 'Wie soll Bad Vilbel mit dem VilCo und der Kulturförderung umgehen?',
        context: 'Das VilCo ist Bad Vilbels Kulturzentrum und erwirtschaftet kein kostendeckendes Ergebnis. Diskutiert wird, wie viel die Stadt dauerhaft für Kultur ausgeben soll.',
        options: [
          { id: 'a', text: 'VilCo ausbauen und das Kulturangebot deutlich erweitern – Kultur ist Daseinsvorsorge.' },
          { id: 'b', text: 'VilCo erhalten und stabilisieren; moderate Investitionen in Kultur, die Bürger tatsächlich nutzen.' },
          { id: 'c', text: 'Kulturdefizite reduzieren – Angebote sollen sich stärker selbst finanzieren oder private Sponsoren finden.' },
          { id: 'd', text: 'Privatisierung oder Kooperationen prüfen – städtisches Kulturengagement auf das Notwendige begrenzen.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  1 },
          spd:    { a:  2, b:  1, c: -1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a: -1, b:  1, c:  2, d:  2 },
          afd:    { a: -1, b:  1, c:  2, d:  1 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Kulturelle Angebote und Burgfestspiele erhalten, moderate Förderung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Kulturleben als Teil der Stadtidentität stärken', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Lebendige Stadt mit vielfältiger Kultur', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Kostenbewusste Kulturförderung, Eigenfinanzierung stärken', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Defizite bei öffentlichen Einrichtungen deutlich reduzieren', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Kultur für alle – öffentliche Finanzierung verteidigen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

      // Q26 – Stadtentwicklung / Baugebiete
      {
        id: 'a26',
        topic: '🏗️ Stadtentwicklung',
        question: 'Soll Bad Vilbel neue Wohnbaugebiete auf der grünen Wiese erschließen?',
        context: 'Die Nachfrage nach Wohnraum ist hoch. Neue Baugebiete auf bisher unversiegelten Flächen wären die schnellste Lösung – sind aber umstritten wegen Flächenverbrauch und Infrastrukturkosten.',
        options: [
          { id: 'a', text: 'Ja – neue Baugebiete erschließen, um Wohnungsnot schnell zu lindern und die Stadt geordnet wachsen zu lassen.' },
          { id: 'b', text: 'Nachverdichtung hat Vorrang; Außenentwicklung nur als ergänzende Maßnahme mit starker Sozialbindung.' },
          { id: 'c', text: 'Nein – keine Grünflächen opfern; stattdessen Leerstand beseitigen und im Bestand verdichten.' },
          { id: 'd', text: 'Nein – Wachstum stoppen; Bad Vilbel hat genug gebaut und die bestehende Infrastruktur schützen.' },
        ],
        scores: {
          cdu:    { a:  2, b:  1, c: -1, d: -1 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a: -2, b:  0, c:  2, d:  1 },
          fdp:    { a:  2, b:  1, c:  0, d: -2 },
          afd:    { a:  1, b:  1, c:  0, d:  2 },
          linke:  { a:  0, b:  2, c:  1, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Maßvolles Wachstum, neue Wohngebiete als Entlastung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/31070-bad-vilbel-cdu-stellt-programm-zur-kommunalwahl-2026-vor.html' },
          spd:    { text: 'SPD: Bezahlbares Wohnen hat Priorität, Nachverdichtung bevorzugt', url: 'https://www.wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/30868-spd-bad-vilbel-erster-informationsstand-zur-kommunalwahl-2026.html' },
          gruene: { text: 'GRÜNE: Flächenverbrauch stoppen – nur Innenentwicklung', url: 'https://wetterau.news/wetteraukreis/bad-vilbel/351-bad-vilbel/27479-gr%C3%BCnes-wahlprogramm-f%C3%BCr-kommunalwahl-2026-verabschiedet.html' },
          fdp:    { text: 'FDP: Wohnungsbau ermöglichen, Regulierungen abbauen', url: 'https://fdp-bad-vilbel.de/wahlprogramm/' },
          afd:    { text: 'AfD: Kontrolliertes Wachstum, Stadtcharakter und Infrastruktur schützen', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Sozialer Wohnungsbau statt Spekulation, Nachverdichtung mit Bindung', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
        },
      },

    ], // end questions moduleA
  }, // end moduleA

  // ---------------------------------------------------------------------------
  // MODUL B – Kreistag Wetteraukreis
  // Parteien: CDU, SPD, GRÜNE, FDP, AfD, LINKE, FREIE WÄHLER, Volt
  // ---------------------------------------------------------------------------
  moduleB: {
    id: 'wetteraukreis',
    title: 'Kreistag Wetteraukreis',
    subtitle: '15 Fragen zur Kreispolitik · 8 Parteien · ca. 7 Minuten',
    parties: [
      { id: 'cdu',   name: 'CDU',           color: '#9ca3af' },
      { id: 'spd',   name: 'SPD',           color: '#ef4444' },
      { id: 'gruene',name: 'GRÜNE',         color: '#22c55e' },
      { id: 'fdp',   name: 'FDP',           color: '#eab308' },
      { id: 'afd',   name: 'AfD',           color: '#38bdf8' },
      { id: 'linke', name: 'LINKE',         color: '#f87171' },
      { id: 'fw',    name: 'FREIE WÄHLER',  color: '#fb923c' },
      { id: 'volt',  name: 'Volt',          color: '#7c3aed' },
    ],
    questions: [

      // B1 – Kreiskrankenhäuser
      {
        id: 'b1',
        topic: '🏥 Gesundheit',
        question: 'Wie soll der Wetteraukreis seine Kreiskrankenhäuser sichern?',
        context: 'Das Gesundheitszentrum Wetterau (GZW) mit Standorten in Friedberg und Büdingen steht unter Druck. Besonders das Krankenhaus Büdingen kämpft ums Überleben.',
        options: [
          { id: 'a', text: 'GZW finanziell absichern und kommunale Klinikverbünde für langfristige Sicherung anstreben.' },
          { id: 'b', text: 'Sofortiger Rettungsplan für Büdingen und Gutachten für alle Krankenhausstandorte.' },
          { id: 'c', text: 'Gesundheitsversorgung durch innovative Lösungen wie Ärztenetzwerke und Telemedizin stärken.' },
          { id: 'd', text: 'Krankenhäuser sollen sich selbst refinanzieren – der Kreis soll nicht dauerhaft Verluste ausgleichen.' },
        ],
        scores: {
          cdu:    { a:  1, b:  1, c:  2, d:  0 },
          spd:    { a:  2, b:  1, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c:  1, d: -1 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a:  1, b:  1, c:  1, d:  0 },
          linke:  { a:  2, b:  1, c:  1, d: -2 },
          fw:     { a:  1, b:  2, c:  1, d: -1 },
          volt:   { a:  1, b:  1, c:  2, d:  0 },
        },
        sources: {
          cdu:    { text: 'CDU: Gesundheitsversorgung als gesichert bezeichnet', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Stärkung lokaler Infrastruktur', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: GZW finanziell absichern, kommunale Klinikverbünde', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Innovative Lösungen, wirtschaftliche Tragfähigkeit', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Gesundheitsversorgung sichern', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Öffentliche Daseinsvorsorge verteidigen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Rettungsplan Büdingen, Gutachten Mathilden-Hospital', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Innovative Verwaltung und Gesundheitsversorgung', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B2 – Kreisstraßen
      {
        id: 'b2',
        topic: '🛣️ Infrastruktur',
        question: 'Welche Priorität sollen Kreisstraßen im Wetteraukreis haben?',
        context: 'Der Wetteraukreis ist für rund 850 km Kreisstraßen zuständig. Der Zustand vieler Straßen ist sanierungsbedürftig.',
        options: [
          { id: 'a', text: 'Massives Sanierungsprogramm für Kreisstraßen – schlechte Straßen schaden Wirtschaft und Lebensqualität.' },
          { id: 'b', text: 'Sanieren ja, aber Geld auch in ÖPNV und Radwege investieren – multimodal denken.' },
          { id: 'c', text: 'Straßensanierung nach Dringlichkeit, Haushalt im Blick – solide, aber nicht verschwenderisch.' },
          { id: 'd', text: 'Weniger neue Straßen, stattdessen Verkehrswende – Straßenausbau ist klimaschädlich.' },
        ],
        scores: {
          cdu:    { a:  2, b:  1, c:  2, d: -1 },
          spd:    { a:  1, b:  2, c:  1, d:  0 },
          gruene: { a: -1, b:  2, c:  1, d:  2 },
          fdp:    { a:  2, b:  1, c:  2, d: -1 },
          afd:    { a:  2, b:  0, c:  1, d: -2 },
          linke:  { a:  0, b:  2, c:  1, d:  1 },
          fw:     { a:  2, b:  1, c:  2, d: -1 },
          volt:   { a:  1, b:  2, c:  1, d:  1 },
        },
        sources: {
          cdu:    { text: 'CDU: Infrastruktur als Kernaufgabe', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Umfassende Mobilität als Schwerpunkt', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Multimodale Verkehrspolitik, weniger Flächenverbrauch', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Moderne, flexible Infrastruktur', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Autoverkehr nicht benachteiligen', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Ablehnung A5-Ausbau, stattdessen ÖPNV und Rad', url: 'https://die-linke-wetterau.de/wahlpruefsteine-fuer-die-kommunalwahl-in-hessen-2026/' },
          fw:     { text: 'FREIE WÄHLER: Infrastruktur für ländliche Regionen', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Moderne Mobilität und Radnetzausbau', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B3 – ÖPNV / Niddertalbahn / S6
      {
        id: 'b3',
        topic: '🚆 ÖPNV',
        question: 'Wie soll der ÖPNV im Wetteraukreis ausgebaut werden?',
        context: 'Die Niddertalbahn soll zweigleisig und elektrifiziert werden. Die S6 soll bis Friedberg verlängert werden. Ländliche Gebiete haben oft nur stündliche oder seltener Busverbindungen.',
        options: [
          { id: 'a', text: 'Niddertalbahn zweigleisig und elektrifizieren, S6 nach Friedberg, 30-Minuten-Takt auf allen Buslinien.' },
          { id: 'b', text: 'Niddertalbahn und S6-Ausbau vorantreiben, ländliche Verbindungen mit flexiblen Rufbussystemen ergänzen.' },
          { id: 'c', text: 'ÖPNV-Ausbau ja, aber wirtschaftlich tragbar – Defizite müssen begrenzt werden.' },
          { id: 'd', text: 'Im ländlichen Raum ist das Auto unverzichtbar – ÖPNV ist kein realistischer Ersatz.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  2, d:  1 },
          spd:    { a:  2, b:  1, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c:  0, d: -2 },
          fdp:    { a:  0, b:  2, c:  2, d:  1 },
          afd:    { a: -1, b:  0, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c:  0, d: -2 },
          fw:     { a:  1, b:  2, c:  1, d:  0 },
          volt:   { a:  1, b:  2, c:  1, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: ÖPNV-Ausbau mit wirtschaftlichem Augenmerk', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Umfassende Mobilität, bezahlbares Wohnen', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Niddertalbahn elektrifizieren, S5b, 30-Min-Takt', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Moderne, flexible Mobilität im ländlichen Raum', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Auto nicht verdrängen, ÖPNV kein Allheilmittel', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Guter, kostengünstiger ÖPNV unabdingbar', url: 'https://die-linke-wetterau.de/wahlpruefsteine-fuer-die-kommunalwahl-in-hessen-2026/' },
          fw:     { text: 'FREIE WÄHLER: ÖPNV für ländliche Regionen verbessern', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Zuverlässiger, flexibler ÖPNV und Radnetz', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B4 – Schulen Kreis
      {
        id: 'b4',
        topic: '📚 Schulen',
        question: 'Wie soll der Wetteraukreis sein Schulbauprogramm gestalten?',
        context: 'Der Kreis ist Schulträger für weiterführende Schulen. Viele Gebäude sind sanierungsbedürftig, teils gibt es Unterricht in Containern. Alle Standorte sollen erhalten bleiben.',
        options: [
          { id: 'a', text: 'Alle Schulstandorte erhalten, sofort umfassend sanieren und Ganztagsbetreuung flächendeckend einführen.' },
          { id: 'b', text: 'Sanierungen nach Dringlichkeit, schrittweise Ganztagsbetreuung ab 2026/27 – solide und planvoll.' },
          { id: 'c', text: 'Investitionsprogramm starten, aber Digitalisierung hat Vorrang vor kostspieligen Baumaßnahmen.' },
          { id: 'd', text: 'Schließung unrentabler Standorte prüfen – Qualität vor Flächendeckung.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c:  1, d: -1 },
          gruene: { a:  2, b:  2, c:  1, d: -2 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a:  2, b:  1, c:  1, d:  0 },
          linke:  { a:  2, b:  1, c:  0, d: -2 },
          fw:     { a:  1, b:  2, c:  1, d:  0 },
          volt:   { a:  1, b:  2, c:  2, d:  0 },
        },
        sources: {
          cdu:    { text: 'CDU: Schulen als Kerninvestition', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Beste Bildung von Kita bis Uni', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Alle Standorte erhalten, Sanierungen, Ganztagsbetreuung ab 2026/27', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Beste Bildung, Digitalisierung der Schulen', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Umfassendes Investitionsprogramm gefordert, Kritik an Verfall und Containerunterricht', url: 'https://www.afd-bad-vilbel.de/Kommunalpolitik/' },
          linke:  { text: 'LINKE: Schulen als öffentliche Aufgabe, keine Schließungen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Mehr Mittel für Schulschwimmen, Bildungsinfrastruktur', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Moderne Schulen mit digitaler Infrastruktur', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B5 – Windkraft
      {
        id: 'b5',
        topic: '💨 Windkraft',
        question: 'Sollen im Wetteraukreis neue Windkraftanlagen genehmigt werden?',
        context: 'Hessen hat Vorrangflächen für Windkraft ausgewiesen. Im Wetteraukreis sind Standorte auf dem Winterstein und anderen Anhöhen im Gespräch. Kritiker befürchten Landschaftsschäden.',
        options: [
          { id: 'a', text: 'Ja – Windkraft ist wichtig für die Energiewende, neue Anlagen auf geeigneten Flächen konsequent genehmigen.' },
          { id: 'b', text: 'Ja, mit Augenmaß – Windkraft auf Vorrangflächen ermöglichen, Bürger früh beteiligen.' },
          { id: 'c', text: 'Nur wenn Naturschutz und Landschaftsbild nicht beeinträchtigt werden – strenge Einzelfallprüfung.' },
          { id: 'd', text: 'Nein – Windkraftanlagen auf dem Winterstein und anderen Standorten im Kreis ablehnen.' },
        ],
        scores: {
          cdu:    { a: -1, b:  1, c:  2, d:  1 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a: -2, b: -1, c:  0, d:  2 },
          linke:  { a:  2, b:  1, c:  0, d: -2 },
          fw:     { a: -1, b:  0, c:  2, d:  1 },
          volt:   { a:  2, b:  1, c:  0, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Energieversorgung sichern, aber Bürgerinteressen wahren', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Klimaschutz als Querschnittsaufgabe', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Erneuerbare Energien durch OVAG, Klimaschutz priorisieren', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Technologieoffenheit, wirtschaftliche Vernunft', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Ablehnung Windkraftanlagen auf Winterstein und Umspannwerk bei Beienheim', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Konsequente Energiewende', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Kritisch gegenüber Windkraft, Bürgerinteressen', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Konsequenter Klimaschutz, erneuerbare Energien', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B6 – Kreishaushalt
      {
        id: 'b6',
        topic: '💰 Haushalt',
        question: 'Wie soll der Wetteraukreis seinen Haushalt aufstellen?',
        context: 'Der Kreistag diskutiert u.a. einen 60-Millionen-Euro-Neubau des Kreishauses. Die Umlage belastet die Gemeinden. Investitionsbedarf und Sparzwang stehen in Konflikt.',
        options: [
          { id: 'a', text: 'Mutig investieren: Schulen, Krankenhäuser und Infrastruktur haben Vorrang – auch wenn der Haushalt belastet wird.' },
          { id: 'b', text: 'Solide und kostenbewusst: Investitionen ja, aber ohne unnötige Luxusprojekte wie teure Kreishausneubauten.' },
          { id: 'c', text: 'Strikte Haushaltsdisziplin: Schulden reduzieren, Kreisumlage senken, Gemeinden entlasten.' },
          { id: 'd', text: 'Digitalisierung nutzen, um Effizienzgewinne zu erzielen und Kosten zu senken.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  1 },
          spd:    { a:  2, b:  1, c:  0, d:  1 },
          gruene: { a:  1, b:  2, c:  0, d:  1 },
          fdp:    { a: -1, b:  1, c:  2, d:  2 },
          afd:    { a: -1, b:  1, c:  2, d:  1 },
          linke:  { a:  2, b:  1, c: -1, d:  0 },
          fw:     { a: -1, b:  2, c:  2, d:  1 },
          volt:   { a:  0, b:  1, c:  1, d:  2 },
        },
        sources: {
          cdu:    { text: 'CDU: Solide Finanzpolitik als Schwerpunkt', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Investitionen in lokale Infrastruktur', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Solide, kostenbewusst, keine unbegrenzte Stellenmehrung', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Generationengerechte Finanzen, Digitalisierung für Effizienz', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Haushaltsdisziplin, Kritik an Ausgaben', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Investitionen in soziale Infrastruktur priorisieren', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Gegen 60-Mio-Kreishaus-Neubau, günstigere Alternativen', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Effizienz durch Digitalisierung, moderne Verwaltung', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B7 – Geflüchtete & Integration
      {
        id: 'b7',
        topic: '🌐 Integration',
        question: 'Wie soll der Wetteraukreis Geflüchtete unterbringen und integrieren?',
        context: 'Der Wetteraukreis ist für die Unterbringung und Integration von Geflüchteten zuständig. Diskutiert werden Kapazitäten, Sprachkurse und kommunale Integrationskonzepte.',
        options: [
          { id: 'a', text: 'Humane Unterbringung, umfangreiche Sprachkurse und eine regelmäßige Integrationskonferenz einrichten.' },
          { id: 'b', text: 'Pragmatisch: Unterbringung sicherstellen, Sprachkurse anbieten, Integration fördern wo es gelingt.' },
          { id: 'c', text: 'Zahl der Geflüchteten begrenzen – der Kreis ist an seiner Kapazitätsgrenze, Integration braucht Zeit.' },
          { id: 'd', text: 'Weniger Aufnahme, schnellere Abschiebung – Migration verursacht zu hohe Kosten für den Kreis.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d: -1 },
          spd:    { a:  2, b:  1, c: -1, d: -2 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a:  0, b:  2, c:  1, d:  0 },
          afd:    { a: -2, b: -1, c:  1, d:  2 },
          linke:  { a:  2, b:  1, c: -1, d: -2 },
          fw:     { a:  0, b:  1, c:  2, d:  1 },
          volt:   { a:  2, b:  1, c: -1, d: -2 },
        },
        sources: {
          cdu:    { text: 'CDU: Geordnete Integration, Kapazitäten realistisch einschätzen', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Integration als gesellschaftliche Aufgabe', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Sprachkurse, Integrationskonferenz', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Pragmatische Integrationspolitik', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Migration verursacht zu hohe Kosten, Begrenzung gefordert', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Menschenwürdige Unterbringung und umfassende Integration', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Kapazitäten begrenzt, Bürgerinteressen wahren', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Offene Gesellschaft, humane Integration', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B8 – Landwirtschaft & Flächenschutz
      {
        id: 'b8',
        topic: '🌾 Landwirtschaft',
        question: 'Wie soll der Wetteraukreis Landwirtschaft und Flächenschutz gestalten?',
        context: 'Die Wetterau gilt als eine der fruchtbarsten Agrarregionen Deutschlands. Gewerbeansiedlungen, Windkraft und Verkehrsprojekte konkurrieren mit landwirtschaftlichen Flächen.',
        options: [
          { id: 'a', text: 'Ökologischen Landbau ausbauen, Streuobstwiesen schützen, Bio- und Regionalprodukte in Kantinen.' },
          { id: 'b', text: 'Landwirtschaft als wichtigen Wirtschaftszweig stärken – sowohl konventionell als auch ökologisch.' },
          { id: 'c', text: 'Landwirtschaftliche Flächen konsequent vor Versiegelung schützen – keine weiteren Baugebiete auf Ackerland.' },
          { id: 'd', text: 'Landwirte entscheiden selbst – weniger staatliche Vorgaben und Regulierung.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  1 },
          spd:    { a:  1, b:  2, c:  1, d:  0 },
          gruene: { a:  2, b:  1, c:  2, d: -1 },
          fdp:    { a:  0, b:  1, c:  1, d:  2 },
          afd:    { a: -1, b:  1, c:  2, d:  2 },
          linke:  { a:  2, b:  1, c:  1, d: -1 },
          fw:     { a:  0, b:  2, c:  2, d:  1 },
          volt:   { a:  2, b:  1, c:  1, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Wetterau als attraktive Agrarregion erhalten', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Wirtschaft und Landwirtschaft stärken', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Ökolandbau ausbauen, Streuobstwiesen schützen, Bio in Kantinen', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Weniger Regulierung, Marktprinzipien', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Ablehnung Umspannwerk bei Beienheim zum Schutz von Ackerland', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Ökologische Landwirtschaft, Flächenschutz', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Landwirtschaftliche Flächen schützen, ländliche Strukturen', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Nachhaltige Landwirtschaft und Klimaschutz verbinden', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B9 – Wirtschaftsförderung
      {
        id: 'b9',
        topic: '🏭 Wirtschaft',
        question: 'Wie soll der Wetteraukreis Wirtschaft und Gewerbe fördern?',
        context: 'Die Wetterau hat eine starke Wirtschaftsstruktur mit Mittelstand und Landwirtschaft. Energiewende und Digitalisierung bieten Chancen, aber auch Herausforderungen.',
        options: [
          { id: 'a', text: 'Wirtschaftsförderung als Beratungsstelle bei Energie- und Wärmewende – Transformation aktiv begleiten.' },
          { id: 'b', text: 'Innovative Wirtschaftsförderung: Digitale Gründer, Tech und Mittelstand gleichermaßen stärken.' },
          { id: 'c', text: 'Bestehende Unternehmen halten, gute Rahmenbedingungen schaffen, Bürokratie abbauen.' },
          { id: 'd', text: 'Staatliche Wirtschaftsförderung reduzieren – der Markt regelt es besser.' },
        ],
        scores: {
          cdu:    { a:  1, b:  1, c:  2, d:  1 },
          spd:    { a:  1, b:  2, c:  1, d: -1 },
          gruene: { a:  2, b:  1, c:  0, d: -1 },
          fdp:    { a:  1, b:  2, c:  2, d:  2 },
          afd:    { a: -1, b:  0, c:  2, d:  2 },
          linke:  { a:  1, b:  1, c:  1, d: -2 },
          fw:     { a:  1, b:  1, c:  2, d:  1 },
          volt:   { a:  1, b:  2, c:  1, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Wetterau als wirtschaftsstarke Region', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Wirtschaft als Querschnittsaufgabe', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Wirtschaftsförderung bei Energie-/Wärmewende', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Wirtschaftliche Stärke, Bürokratieabbau', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Weniger staatliche Eingriffe, Marktwirtschaft stärken', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Wirtschaft im Dienst der Gesellschaft', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Mittelstand und regionale Wirtschaft stärken', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Innovative Wirtschaftsförderung, europäisch gedacht', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B10 – Digitalisierung
      {
        id: 'b10',
        topic: '💻 Digitalisierung',
        question: 'Wie digital soll die Kreisverwaltung Wetterau werden?',
        context: 'Viele Verwaltungsleistungen sind noch nicht digital verfügbar. Bürger müssen für einfache Anträge persönlich erscheinen. Digitalisierung kann Kosten senken und Bürger entlasten.',
        options: [
          { id: 'a', text: 'Vollständige Digitalisierung der Verwaltung: alle Anträge online, 24/7 verfügbar, barrierefrei.' },
          { id: 'b', text: 'Schrittweise digitalisieren nach Kosten-Nutzen-Analyse – nicht alles muss digital sein.' },
          { id: 'c', text: 'Digitalisierung für Effizienzgewinne und Kostenersparnis priorisieren.' },
          { id: 'd', text: 'Persönlicher Service bleibt wichtig – nicht alle Bürger können oder wollen digital.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  2, d:  1 },
          spd:    { a:  1, b:  2, c:  1, d:  1 },
          gruene: { a:  2, b:  1, c:  1, d:  1 },
          fdp:    { a:  2, b:  1, c:  2, d:  0 },
          afd:    { a:  1, b:  1, c:  2, d:  1 },
          linke:  { a:  1, b:  2, c:  1, d:  2 },
          fw:     { a:  1, b:  2, c:  2, d:  1 },
          volt:   { a:  2, b:  1, c:  2, d:  1 },
        },
        sources: {
          cdu:    { text: 'CDU: Digitalisierung der Verwaltung als Ziel', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Digitalisierung als Querschnittsaufgabe', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Verwaltungsprozesse digitalisieren, Schulen digital ausstatten', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Leistungsfähige digitale Verwaltung', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Effizienz durch Digitalisierung', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Digitalisierung mit sozialem Blick, niemanden abhängen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Moderne, effiziente Verwaltung', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Moderne barrierefreie Verwaltung als Kernthema', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B11 – Abfallwirtschaft
      {
        id: 'b11',
        topic: '♻️ Abfall',
        question: 'Wie soll der Wetteraukreis seine Abfallwirtschaft weiterentwickeln?',
        context: 'Der Wetteraukreis betreibt eine eigene Abfallwirtschaft. Diskutiert werden Kreislaufwirtschaft, Recyclingquoten und Gebührenstruktur.',
        options: [
          { id: 'a', text: 'Von Abfall- zu Kreislaufwirtschaft: Abfallvermeidung, höhere Recyclingquoten, Bürgerbewusstsein stärken.' },
          { id: 'b', text: 'Abfallwirtschaft effizient und kostengünstig halten – Gebühren niedrig, Service verlässlich.' },
          { id: 'c', text: 'Mehr Recyclinghöfe und Sammelstellen, bessere Mülltrennung im Kreis.' },
          { id: 'd', text: 'Private Anbieter können Abfallwirtschaft günstiger – mehr Privatisierung prüfen.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  1, d:  1 },
          spd:    { a:  1, b:  2, c:  2, d: -1 },
          gruene: { a:  2, b:  0, c:  1, d: -2 },
          fdp:    { a:  1, b:  2, c:  1, d:  2 },
          afd:    { a:  0, b:  2, c:  1, d:  1 },
          linke:  { a:  2, b:  1, c:  1, d: -2 },
          fw:     { a:  1, b:  2, c:  2, d:  0 },
          volt:   { a:  2, b:  1, c:  1, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Verlässliche kommunale Dienstleistungen', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Öffentliche Daseinsvorsorge', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Von Abfall- zu Kreislaufwirtschaft, Abfallvermeidung', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Effizienz und Kostentransparenz', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Gebühren niedrig halten, Effizienz prüfen', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Öffentliche Abfallwirtschaft, keine Privatisierung', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Bürgerfreundliche Abfallwirtschaft', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Nachhaltige Kreislaufwirtschaft', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B12 – Naturschutz & Nidda-Renaturierung
      {
        id: 'b12',
        topic: '🌱 Naturschutz',
        question: 'Was soll der Wetteraukreis für Naturschutz und Nidda-Renaturierung tun?',
        context: 'Die Nidda und ihre Auen sind ökologisch wertvoll, aber vielerorts kanalisiert und von Bebauung bedroht. Das Steinbachtal soll möglicherweise Naturschutzgebiet werden.',
        options: [
          { id: 'a', text: 'Steinbachtal zum Naturschutzgebiet, mehr Schutzgebiete, Nidda-Renaturierung und Flächenverbrauch stoppen.' },
          { id: 'b', text: 'Naturschutz und Hochwasserschutz verbinden: Nidda-Renaturierung mit Starkregenfrühwarnsystem.' },
          { id: 'c', text: 'Naturschutz ist wichtig, darf aber Wirtschaft und Wohnbau nicht blockieren.' },
          { id: 'd', text: 'Naturschutz ist primär Landes- und Bundessache – der Kreis soll nicht überregulieren.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  1 },
          spd:    { a:  1, b:  2, c:  1, d:  0 },
          gruene: { a:  2, b:  1, c: -1, d: -2 },
          fdp:    { a:  0, b:  1, c:  2, d:  1 },
          afd:    { a: -1, b:  1, c:  2, d:  1 },
          linke:  { a:  2, b:  1, c:  0, d: -1 },
          fw:     { a:  0, b:  2, c:  1, d:  1 },
          volt:   { a:  2, b:  1, c:  0, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Naturschutz und Wirtschaft in Balance', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Klimaschutz und Naturschutz verbinden', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Steinbachtal als NSG, Flächenverbrauch stoppen, mehr Schutzgebiete', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Verhältnismäßiger Naturschutz', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Naturschutz nicht über Wirtschaft stellen', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Konsequenter Naturschutz', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Hochwasserschutz und Starkregenfrühwarnsystem', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Konsequenter Umweltschutz als Priorität', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B13 – Soziale Einrichtungen & Jobcenter
      {
        id: 'b13',
        topic: '❤️ Soziales',
        question: 'Wie soll der Wetteraukreis seine sozialen Einrichtungen und das Jobcenter gestalten?',
        context: 'Das Jobcenter und soziale Dienste sind zentrale Einrichtungen des Kreises. Diskutiert werden Erreichbarkeit, Beratungsqualität und präventive Maßnahmen.',
        options: [
          { id: 'a', text: 'Barrierefrei erreichbare Sozialhilfe, mehr Schulsozialarbeit, präventive Jugendhilfe stärken.' },
          { id: 'b', text: 'Jobcenter effizient führen, schnelle Vermittlung in Arbeit, Eigenverantwortung fördern.' },
          { id: 'c', text: 'Soziale Dienste digitalisieren für mehr Effizienz und bessere Erreichbarkeit.' },
          { id: 'd', text: 'Sozialtransfers begrenzen – Eigenverantwortung hat Vorrang vor staatlicher Unterstützung.' },
        ],
        scores: {
          cdu:    { a:  0, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c:  1, d: -2 },
          gruene: { a:  2, b:  1, c:  1, d: -2 },
          fdp:    { a:  0, b:  2, c:  2, d:  1 },
          afd:    { a: -1, b:  1, c:  1, d:  2 },
          linke:  { a:  2, b:  0, c:  1, d: -2 },
          fw:     { a:  1, b:  2, c:  1, d:  0 },
          volt:   { a:  2, b:  1, c:  2, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Soziale Grundversorgung sichern', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Sicherheit in allen Lebenslagen', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Barrierefrei, Schulsozialarbeit, präventive Jugendhilfe', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Effizienz und Eigenverantwortung', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Eigenverantwortung stärken, Sozialtransfers begrenzen', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Starke Daseinsvorsorge, keine Kürzungen', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Soziale Einrichtungen bürgerorientiert', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Barrierefreie, digitale Sozialverwaltung', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B14 – Tourismus & Naherholung
      {
        id: 'b14',
        topic: '🌳 Tourismus',
        question: 'Wie soll der Wetteraukreis Tourismus und Naherholung fördern?',
        context: 'Die Landesgartenschau 2027 in Bad Nauheim bietet eine Chance. Die Wetterau hat Wanderwege, Radrouten und historische Stätten, die touristisch wenig genutzt werden.',
        options: [
          { id: 'a', text: 'Landesgartenschau 2027 als Katalysator: Naturtourismus, Radwege und digitale Angebotsvermarktung ausbauen.' },
          { id: 'b', text: 'Wanderwege, Radrouten und historische Stätten besser vermarkten und pflegen.' },
          { id: 'c', text: 'Tourismus soll sich selbst tragen – keine staatlichen Subventionen für die Branche.' },
          { id: 'd', text: 'Priorität liegt auf der Grundversorgung – Tourismus ist Luxus, keine Kernaufgabe des Kreises.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  1, d:  0 },
          spd:    { a:  2, b:  1, c:  0, d: -1 },
          gruene: { a:  2, b:  1, c: -1, d: -1 },
          fdp:    { a:  1, b:  1, c:  2, d:  0 },
          afd:    { a:  0, b:  1, c:  2, d:  1 },
          linke:  { a:  1, b:  1, c: -1, d:  0 },
          fw:     { a:  1, b:  2, c:  1, d:  0 },
          volt:   { a:  2, b:  1, c:  0, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Wetterau als attraktiven Lebens- und Erholungsraum', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Naherholung als Teil der Lebensqualität', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Landesgartenschau 2027 für Naturtourismus, Digitalisierung des Angebots', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Tourismus mit wirtschaftlicher Eigenverantwortung', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Marktlösungen bevorzugen', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Naherholung als öffentliches Gut', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Heimattourismus und regionale Identität', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Nachhaltiger Tourismus und digitale Vermarktung', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

      // B15 – Jugendhilfe
      {
        id: 'b15',
        topic: '🧒 Jugend',
        question: 'Wie soll der Wetteraukreis Jugendhilfe und Jugendarbeit stärken?',
        context: 'Der Kreis ist Träger der Jugendhilfe. Themen sind Mediensucht, Jugendfreizeiteinrichtungen, Schulsozialarbeit und sozialpädagogische Familienhilfe.',
        options: [
          { id: 'a', text: 'Präventive Jugendhilfe ausbauen: Mediensucht, Schulsozialarbeit, Familienhilfe – früh handeln spart später Kosten.' },
          { id: 'b', text: 'Jugendfreizeiteinrichtungen erhalten und mit aktuellen Angeboten füllen – Jugendliche brauchen Räume.' },
          { id: 'c', text: 'Jugendhilfe effizient organisieren und digitale Kanäle nutzen, um junge Menschen besser zu erreichen.' },
          { id: 'd', text: 'Eigenverantwortung der Familien stärken – staatliche Jugendhilfe nur bei echtem Bedarf.' },
        ],
        scores: {
          cdu:    { a:  1, b:  2, c:  1, d:  1 },
          spd:    { a:  2, b:  1, c:  1, d: -1 },
          gruene: { a:  2, b:  2, c:  1, d: -1 },
          fdp:    { a:  1, b:  1, c:  2, d:  1 },
          afd:    { a:  0, b:  1, c:  1, d:  2 },
          linke:  { a:  2, b:  2, c:  1, d: -2 },
          fw:     { a:  1, b:  2, c:  1, d:  1 },
          volt:   { a:  2, b:  1, c:  2, d: -1 },
        },
        sources: {
          cdu:    { text: 'CDU: Jugend und Familie stärken', url: 'https://www.cduwetterau.de/kw2026/' },
          spd:    { text: 'SPD: Jugendhilfe als Kernaufgabe', url: 'https://www.spd-wetterau.de/' },
          gruene: { text: 'GRÜNE: Präventive Jugendhilfe, Mediensucht adressieren', url: 'https://gruene-wetterau.de/kommunalwahl-2026/unser-kreiswahlprogramm/' },
          fdp:    { text: 'FDP: Bildung von Kita bis Uni als Kernthema', url: 'https://fdp-wetterau.de/' },
          afd:    { text: 'AfD: Familie und Eigenverantwortung', url: 'https://fb.afd-hessen.org/' },
          linke:  { text: 'LINKE: Starke Jugendhilfe und Prävention', url: 'https://die-linke-wetterau.de/programm-fuer-die-kommunalwahl-am-15-3-2026/' },
          fw:     { text: 'FREIE WÄHLER: Jugendarbeit im Kreis stärken', url: 'https://fwg-uwg-wetterau.de/' },
          volt:   { text: 'Volt: Moderne Jugendhilfe, digital und präventiv', url: 'https://voltdeutschland.org/hessen/neuigkeiten/zum-start-der-briefwahl-neue-politik-waehlen-volt-praesentiert-programm-und-kandidierende-fuer-den-wetteraukreis' },
        },
      },

    ], // end questions moduleB
  }, // end moduleB

}; // end APP_DATA
