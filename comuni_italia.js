// comuni_italia.js - Database Spot e Comuni FungiCast (Lazio, Toscana, Isola d'Elba, Trentino-Alto Adige)
const COMUNI_ITALIA = [
  // --- LAZIO & ZONE LIMITROFE (Terni/Umbria di confine) ---
  // Capoluoghi
  { name: "Roma", lat: 41.9028, lon: 12.4964, alt: 20, type: "Provincia", minZoom: 0 },
  { name: "Viterbo", lat: 42.4174, lon: 12.1047, alt: 330, type: "Provincia", minZoom: 0 },
  { name: "Frosinone", lat: 41.6400, lon: 13.3511, alt: 291, type: "Provincia", minZoom: 0 },
  { name: "Latina", lat: 41.4676, lon: 12.9036, alt: 21, type: "Provincia", minZoom: 0 },
  { name: "Rieti", lat: 42.4042, lon: 12.8628, alt: 405, type: "Provincia", minZoom: 0 },
  { name: "Terni", lat: 42.5647, lon: 12.6423, alt: 130, type: "Provincia", minZoom: 0 }, // Zona strategica confini Lazio

  // Tuscia & Viterbese
  { name: "Oriolo Romano", lat: 42.1581, lon: 12.1363, alt: 430, type: "Comune", minZoom: 9 },
  { name: "Manziana", lat: 42.1306, lon: 12.1294, alt: 355, type: "Comune", minZoom: 9 },
  { name: "Allumiere (Tolfa)", lat: 42.1561, lon: 11.9056, alt: 520, type: "Comune", minZoom: 9 },
  { name: "Soriano nel Cimino", lat: 42.4181, lon: 12.2333, alt: 510, type: "Comune", minZoom: 9 },
  { name: "Monte Cimino", lat: 42.4289, lon: 12.2211, alt: 1053, type: "Località", minZoom: 11 },
  { name: "Vejano", lat: 42.2183, lon: 12.0967, alt: 390, type: "Comune", minZoom: 9 },

  // Castelli Romani & Prenestini
  { name: "Rocca Priora", lat: 41.7869, lon: 12.7611, alt: 768, type: "Comune", minZoom: 9 },
  { name: "Artena", lat: 41.7417, lon: 12.9133, alt: 260, type: "Comune", minZoom: 9 },
  { name: "Velletri", lat: 41.6867, lon: 12.7783, alt: 332, type: "Comune", minZoom: 9 },
  { name: "Palestrina", lat: 41.8389, lon: 12.8911, alt: 450, type: "Comune", minZoom: 9 },

  // Simbruini & Aniene
  { name: "Tivoli", lat: 41.9608, lon: 12.7989, alt: 235, type: "Comune", minZoom: 9 },
  { name: "Subiaco", lat: 41.9256, lon: 13.0944, alt: 408, type: "Comune", minZoom: 9 },
  { name: "Monte Livata", lat: 41.9328, lon: 13.1603, alt: 1350, type: "Località", minZoom: 11 },
  { name: "Pisoniano", lat: 41.9078, lon: 12.9575, alt: 532, type: "Comune", minZoom: 11 },
  { name: "Bosco di Gattacieca", lat: 42.0292, lon: 12.6681, alt: 150, type: "Riserva", minZoom: 11 },

  // Rieti, Terminillo & Reatino
  { name: "Terminillo (Campofetente/Pian de Valli)", lat: 42.4700, lon: 12.9700, alt: 1600, type: "Località", minZoom: 9 },
  { name: "Cittaducale", lat: 42.3817, lon: 12.9922, alt: 481, type: "Comune", minZoom: 9 },
  { name: "Antrodoco", lat: 42.4844, lon: 13.0769, alt: 525, type: "Comune", minZoom: 9 },
  { name: "Montenero Sabino", lat: 42.2803, lon: 12.8144, alt: 475, type: "Comune", minZoom: 9 },
  { name: "Amatrice", lat: 42.6289, lon: 13.2942, alt: 955, type: "Comune", minZoom: 9 },
  { name: "Leonessa", lat: 42.5658, lon: 12.9619, alt: 969, type: "Comune", minZoom: 9 },

  // Ternano & Valnerina (Confine Lazio/Umbria)
  { name: "Stroncone", lat: 42.5156, lon: 12.6711, alt: 450, type: "Comune", minZoom: 9 },
  { name: "Arrone (Valnerina)", lat: 42.5533, lon: 12.7761, alt: 235, type: "Comune", minZoom: 9 },

  // Ciociaria & Basso Lazio
  { name: "Fiuggi", lat: 41.7919, lon: 13.2208, alt: 747, type: "Comune", minZoom: 9 },
  { name: "Cassino", lat: 41.4922, lon: 13.8306, alt: 40, type: "Comune", minZoom: 9 },
  { name: "Terracina", lat: 41.2867, lon: 13.2442, alt: 22, type: "Comune", minZoom: 9 },
  { name: "Formia", lat: 41.2575, lon: 13.6067, alt: 19, type: "Comune", minZoom: 9 },


  // --- TOSCANA (Grossetano, Aretino & Principali) ---
  // Capoluoghi
  { name: "Firenze", lat: 43.7696, lon: 11.2558, alt: 50, type: "Provincia", minZoom: 0 },
  { name: "Siena", lat: 43.3188, lon: 11.3308, alt: 322, type: "Provincia", minZoom: 0 },
  { name: "Grosseto", lat: 42.7599, lon: 11.1119, alt: 10, type: "Provincia", minZoom: 0 },
  { name: "Arezzo", lat: 43.4638, lon: 11.8797, alt: 296, type: "Provincia", minZoom: 0 },
  { name: "Lucca", lat: 43.8429, lon: 10.5027, alt: 19, type: "Provincia", minZoom: 0 },

  // Grossetano & Monte Amiata
  { name: "Castel del Piano (Amiata)", lat: 42.8906, lon: 11.5383, alt: 626, type: "Comune", minZoom: 9 },
  { name: "Arcidosso (Amiata)", lat: 42.8756, lon: 11.5583, alt: 700, type: "Comune", minZoom: 9 },
  { name: "Santa Fiora", lat: 42.8333, lon: 11.6333, alt: 687, type: "Comune", minZoom: 9 },
  { name: "Roccalbegna", lat: 42.7094, lon: 11.5317, alt: 522, type: "Comune", minZoom: 9 },
  { name: "Mass Marittima", lat: 43.0494, lon: 10.8883, alt: 380, type: "Comune", minZoom: 9 },

  // Aretino & Casentino / Valtiberina
  { name: "Vallombrosa (Casentinesi)", lat: 43.7317, lon: 11.5542, alt: 980, type: "Riserva", minZoom: 9 },
  { name: "Badia Prataglia", lat: 43.7933, lon: 11.8500, alt: 835, type: "Comune", minZoom: 9 },
  { name: "Bibbiena (Casentino)", lat: 43.6922, lon: 11.8217, alt: 425, type: "Comune", minZoom: 9 },
  { name: "Poppi", lat: 43.7250, lon: 11.7667, alt: 437, type: "Comune", minZoom: 9 },
  { name: "Pieve Santo Stefano (Valtiberina)", lat: 43.6694, lon: 12.0464, alt: 431, type: "Comune", minZoom: 9 },
  { name: "Abetone (Appennino)", lat: 44.1509, lon: 10.6669, alt: 1388, type: "Comune", minZoom: 9 },


  // --- ISOLA D'ELBA (Spot Specifici) ---
  { name: "Portoferraio (Elba)", lat: 42.8129, lon: 10.3131, alt: 10, type: "Comune", minZoom: 9 },
  { name: "Marciana (Elba)", lat: 42.7881, lon: 10.1983, alt: 375, type: "Comune", minZoom: 11 },
  { name: "Monte Perone (Elba)", lat: 42.7694, lon: 10.2283, alt: 630, type: "Località", minZoom: 11 },
  { name: "Val Carene (Elba)", lat: 42.7750, lon: 10.1900, alt: 320, type: "Località", minZoom: 11 },
  { name: "Valle di Lazzaro (Elba)", lat: 42.7833, lon: 10.2100, alt: 280, type: "Località", minZoom: 11 },
  { name: "Volterraio (Elba)", lat: 42.8050, lon: 10.3750, alt: 300, type: "Località", minZoom: 11 },
  { name: "Biodola (Elba)", lat: 42.7983, lon: 10.2683, alt: 25, type: "Località", minZoom: 11 },


  // --- TRENTINO-ALTO ADIGE ---
  { name: "Trento", lat: 46.0679, lon: 11.1211, alt: 194, type: "Provincia", minZoom: 0 },
  { name: "Bolzano", lat: 46.4983, lon: 11.3548, alt: 262, type: "Provincia", minZoom: 0 },
  { name: "Moena (Val di Fassa)", lat: 46.3756, lon: 11.6708, alt: 1148, type: "Comune", minZoom: 9 },
  { name: "Cavalese (Val di Fiemme)", lat: 46.2933, lon: 11.4625, alt: 1000, type: "Comune", minZoom: 9 },
  { name: "San Martino di Castrozza", lat: 46.2956, lon: 11.7983, alt: 1487, type: "Località", minZoom: 9 },
  { name: "Madonna di Campiglio", lat: 46.2289, lon: 10.8275, alt: 1550, type: "Località", minZoom: 9 },
  { name: "Ortisei (Val Gardena)", lat: 46.5744, lon: 11.6769, alt: 1236, type: "Comune", minZoom: 9 },
  { name: "Dobbiaco (Val Pusteria)", lat: 46.7356, lon: 12.2217, alt: 1241, type: "Comune", minZoom: 9 }
];
