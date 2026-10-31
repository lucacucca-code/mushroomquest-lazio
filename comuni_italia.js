// comuni_italia.js - Database Spot e Comuni FungiCast (Lazio, Toscana, Isola d'Elba, Trentino-Alto Adige)
const COMUNI_ITALIA = [
  // --- LAZIO & ZONE LIMITROFE (Capoluoghi e Confini) ---
  { name: "Roma", lat: 41.9028, lon: 12.4964, alt: 20, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Viterbo", lat: 42.4174, lon: 12.1047, alt: 330, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Frosinone", lat: 41.6400, lon: 13.3511, alt: 291, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Latina", lat: 41.4676, lon: 12.9036, alt: 21, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Rieti", lat: 42.4042, lon: 12.8628, alt: 405, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Terni", lat: 42.5647, lon: 12.6423, alt: 130, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },

  // --- TUSCIA, VITERBESE & MONTI CIMINI ---
  { name: "Oriolo Romano", lat: 42.1581, lon: 12.1363, alt: 430, type: "Comune", minZoom: 9 },
  { name: "Manziana", lat: 42.1306, lon: 12.1294, alt: 355, type: "Comune", minZoom: 9 },
  { name: "Allumiere (Tolfa)", lat: 42.1561, lon: 11.9056, alt: 520, type: "Comune", minZoom: 9 },
  { name: "Tolfa", lat: 42.1444, lon: 11.9333, alt: 342, type: "Comune", minZoom: 9 },
  { name: "Soriano nel Cimino", lat: 42.4181, lon: 12.2333, alt: 510, type: "Comune", minZoom: 9 },
  { name: "Monte Cimino", lat: 42.4289, lon: 12.2211, alt: 1053, type: "Località", minZoom: 11 },
  { name: "Faggeta del Cimino", lat: 42.4200, lon: 12.2150, alt: 950, type: "Località", minZoom: 11 },
  { name: "Caprarola", lat: 42.3275, lon: 12.2356, alt: 520, type: "Comune", minZoom: 9 },
  { name: "Ronciglione", lat: 42.2894, lon: 12.2197, alt: 440, type: "Comune", minZoom: 9 },
  { name: "Sutri", lat: 42.2417, lon: 12.2250, alt: 290, type: "Comune", minZoom: 9 },
  { name: "Vejano", lat: 42.2183, lon: 12.0967, alt: 390, type: "Comune", minZoom: 9 },
  { name: "Barbarano Romano", lat: 42.2500, lon: 12.0667, alt: 340, type: "Comune", minZoom: 9 },
  { name: "Blera", lat: 42.2583, lon: 12.0389, alt: 270, type: "Comune", minZoom: 9 },
  { name: "Bolsena", lat: 42.6333, lon: 11.8333, alt: 350, type: "Comune", minZoom: 9 },

  // --- LAGO DI BRACCIANO & VALLE DEL TREJA ---
  { name: "Canale Monterano", lat: 42.1583, lon: 12.0917, alt: 370, type: "Comune", minZoom: 9 },
  { name: "Bracciano", lat: 42.1033, lon: 12.1767, alt: 160, type: "Comune", minZoom: 9 },
  { name: "Trevignano Romano", lat: 42.1583, lon: 12.2333, alt: 400, type: "Comune", minZoom: 9 },
  { name: "Anguillara Sabazia", lat: 42.0833, lon: 12.2667, alt: 195, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Nepi", lat: 42.2458, lon: 12.3486, alt: 226, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Calcata", lat: 42.2472, lon: 12.4194, alt: 175, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Monterosi", lat: 42.2083, lon: 12.3333, alt: 276, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },

  // --- CASTELLI ROMANI & PRENESTINI ---
  { name: "Rocca Priora", lat: 41.7869, lon: 12.7611, alt: 768, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Artena", lat: 41.7417, lon: 12.9133, alt: 260, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Velletri", lat: 41.6867, lon: 12.7783, alt: 332, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Palestrina", lat: 41.8389, lon: 12.8911, alt: 450, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Frascati", lat: 41.8056, lon: 12.6778, alt: 320, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Grottaferrata", lat: 41.7917, lon: 12.6667, alt: 329, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Castel Gandolfo", lat: 41.7444, lon: 12.6528, alt: 426, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Nemi", lat: 41.7167, lon: 12.7167, alt: 521, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Genzano di Roma", lat: 41.7083, lon: 12.7083, alt: 435, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Ariccia", lat: 41.7167, lon: 12.6667, alt: 413, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Rocca di Papa", lat: 41.7583, lon: 12.7083, alt: 680, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Lanuvio", lat: 41.6750, lon: 12.6917, alt: 307, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Valmontone", lat: 41.7750, lon: 12.9167, alt: 303, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Colleferro", lat: 41.7250, lon: 13.0083, alt: 228, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },

  // --- SIMBRUINI, ANIENE & TIBURTINI ---
  { name: "Tivoli", lat: 41.9608, lon: 12.7989, alt: 235, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Subiaco", lat: 41.9256, lon: 13.0944, alt: 408, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Monte Livata", lat: 41.9328, lon: 13.1603, alt: 1350, type: "Località", minZoom: 11 },
  { name: "Pisoniano", lat: 41.9078, lon: 12.9575, alt: 532, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 11 },
  { name: "Bosco di Gattacieca", lat: 42.0478, lon: 12.6400, alt: 140, type: "Riserva", minZoom: 11 },

  // --- PARCO DI VEIO & AREA NORD ROMA ---
  { name: "Capena", lat: 42.1417, lon: 12.5500, alt: 160, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Campagnano di Roma", lat: 42.1500, lon: 12.3750, alt: 270, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Formello", lat: 42.0833, lon: 12.3833, alt: 243, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Sacrofano", lat: 42.1167, lon: 12.4500, alt: 260, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },

  // --- RIETI, TERMINILLO & REATINO ---
  { name: "Terminillo (Pian de Valli)", lat: 42.4700, lon: 12.9700, alt: 1600, type: "Località", minZoom: 9 },
  { name: "Cittaducale", lat: 42.3817, lon: 12.9922, alt: 481, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Antrodoco", lat: 42.4844, lon: 13.0769, alt: 525, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Montenero Sabino", lat: 42.2803, lon: 12.8144, alt: 475, isFavorite: true, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Amatrice", lat: 42.6289, lon: 13.2942, alt: 955, habitat: "Cerro / Querceto", geology: "Calcareo / Roccioso", type: "Comune", minZoom: 9 },
  { name: "Leonessa", lat: 42.5658, lon: 12.9619, alt: 969, habitat: "Cerro / Querceto", geology: "Calcareo / Roccioso", type: "Comune", minZoom: 9 },

  // --- TERNANO & VALNERINA (Confine Umbria/Lazio) ---
  { name: "Stroncone", lat: 42.5156, lon: 12.6711, alt: 450, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Arrone (Valnerina)", lat: 42.5533, lon: 12.7761, alt: 235, type: "Comune", minZoom: 9 },

  // --- CIOCIARIA, ERNICI & RAPINESE ---
  { name: "Fiuggi", lat: 41.7919, lon: 13.2208, alt: 747, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Fiuggi - Monte Scalone", lat: 41.7833, lon: 13.2167, alt: 950, type: "Località", minZoom: 11 },
  { name: "Guarcino", lat: 41.8167, lon: 13.3333, alt: 825, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Alatri", lat: 41.7333, lon: 13.3833, alt: 502, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Campocatino", lat: 41.8167, lon: 13.4333, alt: 1800, type: "Località", minZoom: 11 },
  { name: "Cassino", lat: 41.4922, lon: 13.8306, alt: 40, type: "Comune", minZoom: 9 },

  // --- LEPINI & AURUNCI (Sud Lazio) ---
  { name: "Sermoneta", lat: 41.5500, lon: 12.9833, alt: 157, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Bassiano", lat: 41.5667, lon: 13.0333, alt: 562, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Norma", lat: 41.5833, lon: 12.9667, alt: 410, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Terracina", lat: 41.2867, lon: 13.2442, alt: 22, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Formia", lat: 41.2575, lon: 13.6067, alt: 19, type: "Comune", minZoom: 9 },
  { name: "Itri", lat: 41.2833, lon: 13.5833, alt: 170, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Campodimele", lat: 41.3500, lon: 13.5333, alt: 647, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },
  { name: "Sperlonga", lat: 41.2583, lon: 13.4333, alt: 55, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Comune", minZoom: 9 },


  // --- TOSCANA (Grossetano, Aretino & Principali) ---
  { name: "Firenze", lat: 43.7696, lon: 11.2558, alt: 50, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Siena", lat: 43.3188, lon: 11.3308, alt: 322, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Grosseto", lat: 42.7599, lon: 11.1119, alt: 10, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Arezzo", lat: 43.4638, lon: 11.8797, alt: 296, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Lucca", lat: 43.8429, lon: 10.5027, alt: 19, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },

  // Grossetano & Monte Amiata
  { name: "Castel del Piano (Amiata)", lat: 42.8906, lon: 11.5383, alt: 626, type: "Comune", minZoom: 9 },
  { name: "Arcidosso (Amiata)", lat: 42.8756, lon: 11.5583, alt: 700, type: "Comune", minZoom: 9 },
  { name: "Santa Fiora", lat: 42.8333, lon: 11.6333, alt: 687, type: "Comune", minZoom: 9 },
  { name: "Roccalbegna", lat: 42.7094, lon: 11.5317, alt: 522, type: "Comune", minZoom: 9 },
  { name: "Massa Marittima", lat: 43.0494, lon: 10.8883, alt: 380, type: "Comune", minZoom: 9 },

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
  { name: "Val Carene (Elba)", lat: 42.8000, lon: 10.3040, alt: 40, type: "Località", minZoom: 11 },
  { name: "Valle di Lazzaro (Elba)", lat: 42.8003, lon: 10.3047, alt: 45, type: "Località", minZoom: 11 },
  { name: "Volterraio (Elba)", lat: 42.8050, lon: 10.3750, alt: 300, type: "Località", minZoom: 11 },
  { name: "Biodola (Elba)", lat: 42.7983, lon: 10.2683, alt: 25, type: "Località", minZoom: 11 },


  // --- TRENTINO-ALTO ADIGE ---
  { name: "Trento", lat: 46.0679, lon: 11.1211, alt: 194, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Provincia", minZoom: 0 },
  { name: "Bolzano", lat: 46.4983, lon: 11.3548, alt: 262, type: "Provincia", minZoom: 0 },
  { name: "Moena (Val di Fassa)", lat: 46.3756, lon: 11.6708, alt: 1148, type: "Comune", minZoom: 9 },
  { name: "Cavalese (Val di Fiemme)", lat: 46.2933, lon: 11.4625, alt: 1000, type: "Comune", minZoom: 9 },
  { name: "San Martino di Castrozza", lat: 46.2956, lon: 11.7983, alt: 1487, type: "Località", minZoom: 9 },
  { name: "Madonna di Campiglio", lat: 46.2289, lon: 10.8275, alt: 1550, type: "Località", minZoom: 9 },
  { name: "Ortisei (Val Gardena)", lat: 46.5744, lon: 11.6769, alt: 1236, type: "Comune", minZoom: 9 },
  { name: "Dobbiaco (Val Pusteria)", lat: 46.7356, lon: 12.2217, alt: 1241, type: "Comune", minZoom: 9 }
,
  { name: "Sante Marie", lat: 42.1208, lon: 13.1635, alt: 975, habitat: "Cerro / Querceto", geology: "Calcareo / Roccioso", type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Amelia", lat: 42.5536, lon: 12.4146, alt: 320, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Amelia", lat: 42.5552, lon: 12.418, alt: 325, type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Livata faggeta mucche", lat: 41.9396, lon: 13.1336, alt: 1326, habitat: "Faggeta Pura / Mista", geology: "Calcareo / Roccioso", type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Faggeta oriolo", lat: 42.1607, lon: 12.1513, alt: 453, type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Fregene parco avventura", lat: 41.8413, lon: 12.2135, alt: 14, type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Livata osservatorio", lat: 41.9516, lon: 13.1743, alt: 1589, habitat: "Faggeta Pura / Mista", geology: "Calcareo / Roccioso", type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Malga lavazé", lat: 46.4547, lon: 10.963, alt: 1647, type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Allumiere faggeta", lat: 42.1539, lon: 11.9123, alt: 615, type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Lido di Ostia", lat: 41.6665, lon: 12.2927, alt: 400, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Bellegra", lat: 41.8842, lon: 13.029, alt: 721, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Guadagnolo", lat: 41.9124, lon: 12.9331, alt: 1128, habitat: "Faggeta Pura / Mista", geology: "Calcareo / Roccioso", type: "Località", minZoom: 9 }
,
  { name: "Arcinazzo Romano", lat: 41.8774, lon: 13.1137, alt: 713, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Castagneto di San Polo", lat: 42.0166, lon: 12.8475, alt: 762, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Olevano Romano", lat: 41.8309, lon: 13.0287, alt: 279, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Cerreto Laziale", lat: 41.9478, lon: 12.9843, alt: 605, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Capalbio", lat: 42.454, lon: 11.4216, alt: 185, type: "Località", minZoom: 9 }
,
  { name: "Monteflavio", lat: 42.1067, lon: 12.8312, alt: 785, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", minZoom: 9 }
,
  { name: "Castel di Tora", lat: 42.2152, lon: 12.9672, alt: 562, habitat: "Cerro / Querceto", geology: "Siliceo / Arenario", type: "Località", isFavorite: true, minZoom: 9 }
,
  { name: "Tagliacozzo", lat: 42.0697, lon: 13.2531, alt: 739, geology: "Siliceo / Arenario", type: "Località", habitat: "Castagneto", minZoom: 9 }
,
  { name: "Ceccano castagneto", lat: 41.5493, lon: 13.293, alt: 640, geology: "Siliceo / Arenario", type: "Località", habitat: "Castagneto", minZoom: 9 }
,
  { name: "Monte Porzio Catone", lat: 41.8073, lon: 12.7195, alt: 620, geology: "Siliceo / Arenario", type: "Località", habitat: "Castagneto", minZoom: 9 }
,
  { name: "Val carene", lat: 42.786, lon: 10.3057, alt: 67, type: "Località", habitat: "Macchia Mediterranea", isFavorite: true, minZoom: 9 }
,
  { name: "Loc i Marmi", lat: 42.7814, lon: 10.3092, alt: 202, type: "Località", habitat: "Macchia Mediterranea", minZoom: 9 }
];