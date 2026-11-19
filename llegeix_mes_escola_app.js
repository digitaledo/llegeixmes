const PHASES_INFO = {
    1: { name: "Fase 1 · Directes CV i b/d/p/q", gradeTarget: "1r de primària", expectedPPM: 45 },
    2: { name: "Fase 2 · Inverses i mixtes VC/CVC", gradeTarget: "2n de primària", expectedPPM: 70 },
    3: { name: "Fase 3 · Travades CCV i diftongs", gradeTarget: "3r de primària", expectedPPM: 95 },
    4: { name: "Fase 4 · Dígrafs i ortografia", gradeTarget: "4t de primària", expectedPPM: 115 },
    5: { name: "Fase 5 · Polisíl·labes i fluïdesa", gradeTarget: "5è-6è de primària", expectedPPM: 135 }
};

const ADVENTURE_STAGES = [
    { icon: "⛺", name: "Campament" },
    { icon: "🌲", name: "Bosc blau" },
    { icon: "🌉", name: "Pont de rima" },
    { icon: "🏔️", name: "Cim sabut" },
    { icon: "🛸", name: "Nau lèxica" },
    { icon: "👑", name: "Mestre lector" }
];

const PET_EVOLUTIONS = [
    { minXp: 0, icon: "🥚", title: "Ou màgic" },
    { minXp: 120, icon: "🐣", title: "Pollet curiós" },
    { minXp: 280, icon: "🦎", title: "Dragó jove" },
    { minXp: 500, icon: "🐉", title: "Drac guardià" },
    { minXp: 800, icon: "🦄", title: "Fènix savi" }
];

const STICKERS_CATALOG = [
    { id: "stk_1", icon: "🚀", name: "Coet sil·làbic" },
    { id: "stk_2", icon: "🧭", name: "Brúixola d'or" },
    { id: "stk_3", icon: "🦖", name: "Rex lector" },
    { id: "stk_4", icon: "🔮", name: "Bola de rimes" },
    { id: "stk_5", icon: "🛸", name: "Nau lèxica" },
    { id: "stk_6", icon: "🦁", name: "Lleó valent" },
    { id: "stk_7", icon: "🌋", name: "Volcà de mots" },
    { id: "stk_8", icon: "🏆", name: "Copa campió" },
    { id: "stk_9", icon: "🦉", name: "Mussol savi" },
    { id: "stk_10", icon: "🌈", name: "Arc de lletres" },
    { id: "stk_11", icon: "🐬", name: "Dofí veloç" },
    { id: "stk_12", icon: "👑", name: "Corona reial" }
];

const SENTENCE_SCRAMBLE_DB = {
    1: [
        ["La", "gata", "beu", "llet."],
        ["En", "Pau", "menja", "pa."],
        ["El", "sol", "brilla", "molt."],
        ["La", "pilota", "és", "blava."]
    ],
    2: [
        ["La", "formiga", "puja", "a", "l'arbre."],
        ["Avui", "anem", "a", "l'escola."],
        ["El", "pastís", "té", "una", "espelma."],
        ["Tinc", "un", "llapis", "de", "colors."]
    ],
    3: [
        ["El", "drac", "vola", "sobre", "el", "castell."],
        ["La", "princesa", "toca", "la", "flauta."],
        ["M'agrada", "molt", "anar", "en", "bicicleta."],
        ["Hem", "vist", "una", "estrella", "brillant."]
    ],
    4: [
        ["La", "papallona", "vola", "per", "la", "muntanya."],
        ["Diumenge", "vam", "menjar", "formatge", "i", "castanyes."],
        ["El", "vaixell", "navega", "pel", "mar", "blau."],
        ["Guardo", "els", "llibres", "dins", "la", "motxilla."]
    ],
    5: [
        ["L'astronauta", "observa", "una", "constel·lació", "llunyana."],
        ["Fem", "un", "experiment", "al", "laboratori", "de", "ciències."],
        ["Cal", "protegir", "la", "biodiversitat", "del", "nostre", "planeta."],
        ["L'arquitectura", "sostenible", "aprofita", "l'energia", "solar."]
    ]
};

const CHAIN_WORDS_DB = {
    1: ["elgatbeullet", "lapomavermella", "lacasagran", "unapilotablava"],
    2: ["laformigaverda", "elcastelldesorra", "unarmarivell", "elespelmagroga"],
    3: ["unabruixoladaurada", "eldractranquil", "unabicicletanova", "laflautamàgica"],
    4: ["alacimdelamuntanya", "unapapallonagran", "elrellotgedelaplaça", "elvaixellblanc"],
    5: ["unexperimentcientífic", "labiodiversitatmarina", "energiaelèctrica", "unaconstel·lació"]
};

const LEXICON_DB = {"1": [{"w": "boca", "syl": ["bo", "ca"], "tag": "Discriminació b/d"}, {"w": "dit", "syl": ["dit"], "tag": "Discriminació b/d"}, {"w": "pilota", "syl": ["pi", "lo", "ta"], "tag": "Síl·labes directes CV"}, {"w": "poma", "syl": ["po", "ma"], "tag": "Discriminació p/q"}, {"w": "casa", "syl": ["ca", "sa"], "tag": "Síl·labes directes CV"}, {"w": "mapa", "syl": ["ma", "pa"], "tag": "Discriminació m/n"}, {"w": "nena", "syl": ["ne", "na"], "tag": "Discriminació m/n"}, {"w": "sabata", "syl": ["sa", "ba", "ta"], "tag": "Discriminació b/d"}, {"w": "cadira", "syl": ["ca", "di", "ra"], "tag": "Discriminació b/d"}, {"w": "taula", "syl": ["tau", "la"], "tag": "Discriminació b/d"}, {"w": "lluna", "syl": ["llu", "na"], "tag": "Discriminació p/q"}, {"w": "sol", "syl": ["sol"], "tag": "Discriminació m/n"}, {"w": "gos", "syl": ["gos"], "tag": "Síl·labes directes CV"}, {"w": "gat", "syl": ["gat"], "tag": "Discriminació b/d"}, {"w": "moto", "syl": ["mo", "to"], "tag": "Discriminació p/q"}, {"w": "foca", "syl": ["fo", "ca"], "tag": "Discriminació m/n"}, {"w": "patata", "syl": ["pa", "ta", "ta"], "tag": "Síl·labes directes CV"}, {"w": "balena", "syl": ["ba", "le", "na"], "tag": "Discriminació b/d"}, {"w": "pirata", "syl": ["pi", "ra", "ta"], "tag": "Discriminació p/q"}, {"w": "dado", "syl": ["da", "do"], "tag": "Discriminació m/n"}, {"w": "ditada", "syl": ["di", "ta", "da"], "tag": "Síl·labes directes CV"}, {"w": "bota", "syl": ["bo", "ta"], "tag": "Discriminació b/d"}, {"w": "bata", "syl": ["ba", "ta"], "tag": "Discriminació p/q"}, {"w": "bava", "syl": ["ba", "va"], "tag": "Discriminació m/n"}, {"w": "bola", "syl": ["bo", "la"], "tag": "Síl·labes directes CV"}, {"w": "bosc", "syl": ["bosc"], "tag": "Discriminació b/d"}, {"w": "botiga", "syl": ["bo", "ti", "ga"], "tag": "Discriminació p/q"}, {"w": "bou", "syl": ["bou"], "tag": "Discriminació m/n"}, {"w": "bufa", "syl": ["bu", "fa"], "tag": "Síl·labes directes CV"}, {"w": "cabra", "syl": ["ca", "bra"], "tag": "Discriminació b/d"}, {"w": "caca", "syl": ["ca", "ca"], "tag": "Discriminació p/q"}, {"w": "cada", "syl": ["ca", "da"], "tag": "Discriminació m/n"}, {"w": "cafè", "syl": ["ca", "fè"], "tag": "Síl·labes directes CV"}, {"w": "caixa", "syl": ["cai", "xa"], "tag": "Discriminació b/d"}, {"w": "cala", "syl": ["ca", "la"], "tag": "Discriminació p/q"}, {"w": "cama", "syl": ["ca", "ma"], "tag": "Discriminació m/n"}, {"w": "camí", "syl": ["ca", "mí"], "tag": "Síl·labes directes CV"}, {"w": "capa", "syl": ["ca", "pa"], "tag": "Discriminació b/d"}, {"w": "cara", "syl": ["ca", "ra"], "tag": "Discriminació p/q"}, {"w": "caseta", "syl": ["ca", "se", "ta"], "tag": "Síl·labes directes CV"}, {"w": "cava", "syl": ["ca", "va"], "tag": "Discriminació b/d"}, {"w": "ceba", "syl": ["ce", "ba"], "tag": "Discriminació p/q"}, {"w": "cena", "syl": ["ce", "na"], "tag": "Discriminació m/n"}, {"w": "cera", "syl": ["ce", "ra"], "tag": "Síl·labes directes CV"}, {"w": "cim", "syl": ["cim"], "tag": "Discriminació b/d"}, {"w": "cita", "syl": ["ci", "ta"], "tag": "Discriminació p/q"}, {"w": "coca", "syl": ["co", "ca"], "tag": "Discriminació m/n"}, {"w": "coda", "syl": ["co", "da"], "tag": "Síl·labes directes CV"}, {"w": "cola", "syl": ["co", "la"], "tag": "Discriminació b/d"}, {"w": "coma", "syl": ["co", "ma"], "tag": "Discriminació p/q"}, {"w": "copa", "syl": ["co", "pa"], "tag": "Discriminació m/n"}, {"w": "cosa", "syl": ["co", "sa"], "tag": "Síl·labes directes CV"}, {"w": "cota", "syl": ["co", "ta"], "tag": "Discriminació b/d"}, {"w": "cova", "syl": ["co", "va"], "tag": "Discriminació p/q"}, {"w": "cuba", "syl": ["cu", "ba"], "tag": "Discriminació m/n"}, {"w": "cullereta", "syl": ["cu", "lle", "re", "ta"], "tag": "Síl·labes directes CV"}, {"w": "cura", "syl": ["cu", "ra"], "tag": "Discriminació b/d"}, {"w": "dama", "syl": ["da", "ma"], "tag": "Discriminació p/q"}, {"w": "data", "syl": ["da", "ta"], "tag": "Discriminació m/n"}, {"w": "dau", "syl": ["dau"], "tag": "Síl·labes directes CV"}, {"w": "deessa", "syl": ["de", "es", "sa"], "tag": "Discriminació b/d"}, {"w": "defensa", "syl": ["de", "fen", "sa"], "tag": "Discriminació p/q"}, {"w": "delit", "syl": ["de", "lit"], "tag": "Discriminació m/n"}, {"w": "demà", "syl": ["de", "mà"], "tag": "Síl·labes directes CV"}, {"w": "dent", "syl": ["dent"], "tag": "Discriminació b/d"}, {"w": "desig", "syl": ["de", "sig"], "tag": "Discriminació p/q"}, {"w": "deute", "syl": ["deu", "te"], "tag": "Discriminació m/n"}, {"w": "dia", "syl": ["di", "a"], "tag": "Síl·labes directes CV"}, {"w": "dibuix", "syl": ["di", "bu", "ix"], "tag": "Discriminació b/d"}, {"w": "dina", "syl": ["di", "na"], "tag": "Discriminació p/q"}, {"w": "dinar", "syl": ["di", "nar"], "tag": "Discriminació m/n"}, {"w": "dita", "syl": ["di", "ta"], "tag": "Discriminació b/d"}, {"w": "diví", "syl": ["di", "ví"], "tag": "Discriminació p/q"}, {"w": "dola", "syl": ["do", "la"], "tag": "Discriminació m/n"}, {"w": "dona", "syl": ["do", "na"], "tag": "Síl·labes directes CV"}, {"w": "dos", "syl": ["dos"], "tag": "Discriminació b/d"}, {"w": "dot", "syl": ["dot"], "tag": "Discriminació p/q"}, {"w": "dubte", "syl": ["dub", "te"], "tag": "Discriminació m/n"}, {"w": "duna", "syl": ["du", "na"], "tag": "Síl·labes directes CV"}, {"w": "dura", "syl": ["du", "ra"], "tag": "Discriminació b/d"}, {"w": "fada", "syl": ["fa", "da"], "tag": "Discriminació p/q"}, {"w": "fama", "syl": ["fa", "ma"], "tag": "Discriminació m/n"}, {"w": "fanga", "syl": ["fan", "ga"], "tag": "Síl·labes directes CV"}, {"w": "farina", "syl": ["fa", "ri", "na"], "tag": "Discriminació b/d"}, {"w": "fase", "syl": ["fa", "se"], "tag": "Discriminació p/q"}, {"w": "fata", "syl": ["fa", "ta"], "tag": "Discriminació m/n"}, {"w": "fava", "syl": ["fa", "va"], "tag": "Síl·labes directes CV"}, {"w": "febre", "syl": ["fe", "bre"], "tag": "Discriminació b/d"}, {"w": "feda", "syl": ["fe", "da"], "tag": "Discriminació p/q"}, {"w": "feina", "syl": ["fei", "na"], "tag": "Discriminació m/n"}, {"w": "felí", "syl": ["fe", "lí"], "tag": "Síl·labes directes CV"}, {"w": "fera", "syl": ["fe", "ra"], "tag": "Discriminació b/d"}, {"w": "festa", "syl": ["fes", "ta"], "tag": "Discriminació p/q"}, {"w": "fibla", "syl": ["fi", "bla"], "tag": "Discriminació m/n"}, {"w": "fila", "syl": ["fi", "la"], "tag": "Síl·labes directes CV"}, {"w": "fina", "syl": ["fi", "na"], "tag": "Discriminació b/d"}, {"w": "fira", "syl": ["fi", "ra"], "tag": "Discriminació p/q"}, {"w": "flota", "syl": ["flo", "ta"], "tag": "Discriminació m/n"}, {"w": "foguera", "syl": ["fo", "gu", "e", "ra"], "tag": "Discriminació b/d"}, {"w": "fulla", "syl": ["fu", "lla"], "tag": "Discriminació p/q"}, {"w": "fuma", "syl": ["fu", "ma"], "tag": "Discriminació m/n"}, {"w": "funda", "syl": ["fun", "da"], "tag": "Síl·labes directes CV"}, {"w": "gala", "syl": ["ga", "la"], "tag": "Discriminació b/d"}, {"w": "gallina", "syl": ["ga", "lli", "na"], "tag": "Discriminació p/q"}, {"w": "gamma", "syl": ["gam", "ma"], "tag": "Discriminació m/n"}, {"w": "gana", "syl": ["ga", "na"], "tag": "Síl·labes directes CV"}, {"w": "gara", "syl": ["ga", "ra"], "tag": "Discriminació b/d"}, {"w": "gasa", "syl": ["ga", "sa"], "tag": "Discriminació p/q"}, {"w": "gata", "syl": ["ga", "ta"], "tag": "Discriminació m/n"}, {"w": "gavina", "syl": ["ga", "vi", "na"], "tag": "Síl·labes directes CV"}, {"w": "gelera", "syl": ["ge", "le", "ra"], "tag": "Discriminació b/d"}, {"w": "gema", "syl": ["ge", "ma"], "tag": "Discriminació p/q"}, {"w": "geniva", "syl": ["ge", "ni", "va"], "tag": "Discriminació m/n"}, {"w": "gerra", "syl": ["ger", "ra"], "tag": "Síl·labes directes CV"}, {"w": "gegant", "syl": ["ge", "gant"], "tag": "Discriminació b/d"}, {"w": "gira", "syl": ["gi", "ra"], "tag": "Discriminació p/q"}, {"w": "gitana", "syl": ["gi", "ta", "na"], "tag": "Discriminació m/n"}, {"w": "gola", "syl": ["go", "la"], "tag": "Síl·labes directes CV"}, {"w": "goma", "syl": ["go", "ma"], "tag": "Discriminació b/d"}, {"w": "gota", "syl": ["go", "ta"], "tag": "Discriminació p/q"}, {"w": "gula", "syl": ["gu", "la"], "tag": "Discriminació m/n"}, {"w": "hava", "syl": ["ha", "va"], "tag": "Síl·labes directes CV"}, {"w": "hora", "syl": ["ho", "ra"], "tag": "Discriminació b/d"}, {"w": "idea", "syl": ["i", "de", "a"], "tag": "Discriminació p/q"}, {"w": "imatge", "syl": ["i", "mat", "ge"], "tag": "Discriminació m/n"}, {"w": "illa", "syl": ["i", "lla"], "tag": "Síl·labes directes CV"}, {"w": "jove", "syl": ["jo", "ve"], "tag": "Discriminació b/d"}, {"w": "juga", "syl": ["ju", "ga"], "tag": "Discriminació p/q"}, {"w": "juguet", "syl": ["ju", "gu", "et"], "tag": "Discriminació m/n"}, {"w": "laca", "syl": ["la", "ca"], "tag": "Síl·labes directes CV"}, {"w": "llac", "syl": ["llac"], "tag": "Discriminació b/d"}, {"w": "llana", "syl": ["lla", "na"], "tag": "Discriminació p/q"}, {"w": "llapa", "syl": ["lla", "pa"], "tag": "Discriminació m/n"}, {"w": "llata", "syl": ["lla", "ta"], "tag": "Síl·labes directes CV"}, {"w": "llet", "syl": ["llet"], "tag": "Discriminació b/d"}, {"w": "lleva", "syl": ["lle", "va"], "tag": "Discriminació p/q"}, {"w": "llima", "syl": ["lli", "ma"], "tag": "Discriminació m/n"}, {"w": "lliri", "syl": ["lli", "ri"], "tag": "Síl·labes directes CV"}, {"w": "lloba", "syl": ["llo", "ba"], "tag": "Discriminació b/d"}, {"w": "lloc", "syl": ["lloc"], "tag": "Discriminació p/q"}, {"w": "llom", "syl": ["llom"], "tag": "Discriminació m/n"}, {"w": "llop", "syl": ["llop"], "tag": "Síl·labes directes CV"}, {"w": "llosa", "syl": ["llo", "sa"], "tag": "Discriminació b/d"}, {"w": "llum", "syl": ["llum"], "tag": "Discriminació p/q"}, {"w": "maca", "syl": ["ma", "ca"], "tag": "Discriminació m/n"}, {"w": "maduixa", "syl": ["ma", "du", "i", "xa"], "tag": "Síl·labes directes CV"}, {"w": "màgia", "syl": ["mà", "gi", "a"], "tag": "Discriminació b/d"}, {"w": "mala", "syl": ["ma", "la"], "tag": "Discriminació p/q"}, {"w": "maleta", "syl": ["ma", "le", "ta"], "tag": "Discriminació m/n"}, {"w": "mamà", "syl": ["ma", "mà"], "tag": "Síl·labes directes CV"}, {"w": "mana", "syl": ["ma", "na"], "tag": "Discriminació b/d"}, {"w": "manera", "syl": ["ma", "ne", "ra"], "tag": "Discriminació p/q"}, {"w": "maneta", "syl": ["ma", "ne", "ta"], "tag": "Discriminació m/n"}, {"w": "mania", "syl": ["ma", "ni", "a"], "tag": "Síl·labes directes CV"}, {"w": "manta", "syl": ["man", "ta"], "tag": "Discriminació b/d"}, {"w": "mare", "syl": ["ma", "re"], "tag": "Discriminació p/q"}, {"w": "marida", "syl": ["ma", "ri", "da"], "tag": "Discriminació m/n"}, {"w": "marina", "syl": ["ma", "ri", "na"], "tag": "Síl·labes directes CV"}, {"w": "massa", "syl": ["mas", "sa"], "tag": "Discriminació b/d"}, {"w": "mata", "syl": ["ma", "ta"], "tag": "Discriminació p/q"}, {"w": "matalàs", "syl": ["ma", "ta", "làs"], "tag": "Discriminació m/n"}, {"w": "matí", "syl": ["ma", "tí"], "tag": "Síl·labes directes CV"}, {"w": "medalla", "syl": ["me", "da", "lla"], "tag": "Discriminació b/d"}, {"w": "meló", "syl": ["me", "ló"], "tag": "Discriminació p/q"}, {"w": "mena", "syl": ["me", "na"], "tag": "Discriminació m/n"}, {"w": "menuda", "syl": ["me", "nu", "da"], "tag": "Síl·labes directes CV"}, {"w": "mica", "syl": ["mi", "ca"], "tag": "Discriminació b/d"}, {"w": "mina", "syl": ["mi", "na"], "tag": "Discriminació p/q"}, {"w": "moda", "syl": ["mo", "da"], "tag": "Discriminació m/n"}, {"w": "mola", "syl": ["mo", "la"], "tag": "Síl·labes directes CV"}, {"w": "molina", "syl": ["mo", "li", "na"], "tag": "Discriminació b/d"}, {"w": "moneda", "syl": ["mo", "ne", "da"], "tag": "Discriminació p/q"}, {"w": "mora", "syl": ["mo", "ra"], "tag": "Discriminació m/n"}, {"w": "mosca", "syl": ["mos", "ca"], "tag": "Síl·labes directes CV"}, {"w": "mula", "syl": ["mu", "la"], "tag": "Discriminació b/d"}, {"w": "música", "syl": ["mú", "si", "ca"], "tag": "Discriminació p/q"}, {"w": "nada", "syl": ["na", "da"], "tag": "Discriminació m/n"}, {"w": "nata", "syl": ["na", "ta"], "tag": "Síl·labes directes CV"}, {"w": "nau", "syl": ["nau"], "tag": "Discriminació b/d"}, {"w": "navalla", "syl": ["na", "va", "lla"], "tag": "Discriminació p/q"}, {"w": "nebot", "syl": ["ne", "bot"], "tag": "Discriminació m/n"}, {"w": "negra", "syl": ["ne", "gra"], "tag": "Síl·labes directes CV"}, {"w": "neta", "syl": ["ne", "ta"], "tag": "Discriminació b/d"}, {"w": "neu", "syl": ["neu"], "tag": "Discriminació p/q"}, {"w": "neula", "syl": ["neu", "la"], "tag": "Discriminació m/n"}, {"w": "nina", "syl": ["ni", "na"], "tag": "Síl·labes directes CV"}, {"w": "niu", "syl": ["ni", "u"], "tag": "Discriminació b/d"}, {"w": "noia", "syl": ["noi", "i", "a"], "tag": "Discriminació p/q"}, {"w": "nom", "syl": ["nom"], "tag": "Discriminació m/n"}, {"w": "norma", "syl": ["nor", "ma"], "tag": "Síl·labes directes CV"}, {"w": "nota", "syl": ["no", "ta"], "tag": "Discriminació b/d"}, {"w": "núvol", "syl": ["nú", "vol"], "tag": "Discriminació p/q"}, {"w": "oca", "syl": ["o", "ca"], "tag": "Discriminació m/n"}, {"w": "oda", "syl": ["o", "da"], "tag": "Síl·labes directes CV"}, {"w": "oficina", "syl": ["o", "fi", "ci", "na"], "tag": "Discriminació b/d"}, {"w": "oli", "syl": ["o", "li"], "tag": "Discriminació p/q"}, {"w": "olla", "syl": ["o", "lla"], "tag": "Discriminació m/n"}, {"w": "ona", "syl": ["o", "na"], "tag": "Síl·labes directes CV"}, {"w": "òpera", "syl": ["ò", "pe", "ra"], "tag": "Discriminació b/d"}, {"w": "orella", "syl": ["o", "re", "lla"], "tag": "Discriminació p/q"}, {"w": "oruga", "syl": ["o", "ru", "ga"], "tag": "Discriminació m/n"}, {"w": "ossa", "syl": ["os", "sa"], "tag": "Síl·labes directes CV"}, {"w": "ovella", "syl": ["o", "ve", "lla"], "tag": "Discriminació b/d"}, {"w": "pada", "syl": ["pa", "da"], "tag": "Discriminació p/q"}, {"w": "pàgina", "syl": ["pà", "gi", "na"], "tag": "Discriminació m/n"}, {"w": "pala", "syl": ["pa", "la"], "tag": "Síl·labes directes CV"}, {"w": "paleta", "syl": ["pa", "le", "ta"], "tag": "Discriminació b/d"}, {"w": "palma", "syl": ["pal", "ma"], "tag": "Discriminació p/q"}, {"w": "paloma", "syl": ["pa", "lo", "ma"], "tag": "Discriminació m/n"}, {"w": "pana", "syl": ["pa", "na"], "tag": "Síl·labes directes CV"}, {"w": "panera", "syl": ["pa", "ne", "ra"], "tag": "Discriminació b/d"}, {"w": "papa", "syl": ["pa", "pa"], "tag": "Discriminació p/q"}, {"w": "paper", "syl": ["pa", "per"], "tag": "Discriminació m/n"}, {"w": "paraula", "syl": ["pa", "rau", "la"], "tag": "Síl·labes directes CV"}, {"w": "paret", "syl": ["pa", "ret"], "tag": "Discriminació b/d"}, {"w": "parida", "syl": ["pa", "ri", "da"], "tag": "Discriminació p/q"}, {"w": "part", "syl": ["part"], "tag": "Discriminació m/n"}, {"w": "pas", "syl": ["pas"], "tag": "Síl·labes directes CV"}, {"w": "passa", "syl": ["pas", "sa"], "tag": "Discriminació b/d"}, {"w": "pasta", "syl": ["pas", "ta"], "tag": "Discriminació p/q"}, {"w": "pata", "syl": ["pa", "ta"], "tag": "Discriminació m/n"}, {"w": "patge", "syl": ["pat", "ge"], "tag": "Síl·labes directes CV"}, {"w": "pau", "syl": ["pau"], "tag": "Discriminació b/d"}, {"w": "peca", "syl": ["pe", "ca"], "tag": "Discriminació p/q"}, {"w": "pedal", "syl": ["pe", "dal"], "tag": "Discriminació m/n"}, {"w": "pega", "syl": ["pe", "ga"], "tag": "Síl·labes directes CV"}, {"w": "pell", "syl": ["pell"], "tag": "Discriminació b/d"}, {"w": "pena", "syl": ["pe", "na"], "tag": "Discriminació p/q"}, {"w": "pera", "syl": ["pe", "ra"], "tag": "Discriminació m/n"}, {"w": "perla", "syl": ["per", "la"], "tag": "Síl·labes directes CV"}, {"w": "pesa", "syl": ["pe", "sa"], "tag": "Discriminació b/d"}, {"w": "peseta", "syl": ["pe", "se", "ta"], "tag": "Discriminació p/q"}, {"w": "petita", "syl": ["pe", "ti", "ta"], "tag": "Discriminació m/n"}, {"w": "pica", "syl": ["pi", "ca"], "tag": "Síl·labes directes CV"}, {"w": "pico", "syl": ["pi", "co"], "tag": "Discriminació b/d"}, {"w": "pila", "syl": ["pi", "la"], "tag": "Discriminació p/q"}, {"w": "pina", "syl": ["pi", "na"], "tag": "Discriminació m/n"}, {"w": "pipa", "syl": ["pi", "pa"], "tag": "Síl·labes directes CV"}, {"w": "pis", "syl": ["pis"], "tag": "Discriminació b/d"}, {"w": "pista", "syl": ["pis", "ta"], "tag": "Discriminació p/q"}, {"w": "placa", "syl": ["pla", "ca"], "tag": "Discriminació m/n"}, {"w": "plana", "syl": ["pla", "na"], "tag": "Síl·labes directes CV"}, {"w": "planta", "syl": ["plan", "ta"], "tag": "Discriminació b/d"}, {"w": "plata", "syl": ["pla", "ta"], "tag": "Discriminació p/q"}, {"w": "ploma", "syl": ["plo", "ma"], "tag": "Discriminació m/n"}, {"w": "poble", "syl": ["po", "ble"], "tag": "Síl·labes directes CV"}, {"w": "poda", "syl": ["po", "da"], "tag": "Discriminació b/d"}, {"w": "poema", "syl": ["po", "e", "ma"], "tag": "Discriminació p/q"}, {"w": "polida", "syl": ["po", "li", "da"], "tag": "Discriminació m/n"}, {"w": "pols", "syl": ["pols"], "tag": "Síl·labes directes CV"}, {"w": "pomada", "syl": ["po", "ma", "da"], "tag": "Discriminació b/d"}, {"w": "pona", "syl": ["po", "na"], "tag": "Discriminació p/q"}, {"w": "por", "syl": ["por"], "tag": "Discriminació m/n"}, {"w": "port", "syl": ["port"], "tag": "Síl·labes directes CV"}, {"w": "porta", "syl": ["por", "ta"], "tag": "Discriminació b/d"}, {"w": "posa", "syl": ["po", "sa"], "tag": "Discriminació p/q"}, {"w": "pota", "syl": ["po", "ta"], "tag": "Discriminació m/n"}, {"w": "pou", "syl": ["pou"], "tag": "Síl·labes directes CV"}, {"w": "prova", "syl": ["pro", "va"], "tag": "Discriminació b/d"}, {"w": "pua", "syl": ["pu", "a"], "tag": "Discriminació p/q"}, {"w": "pubilla", "syl": ["pu", "bi", "lla"], "tag": "Discriminació m/n"}, {"w": "pujada", "syl": ["pu", "ja", "da"], "tag": "Síl·labes directes CV"}, {"w": "punta", "syl": ["pun", "ta"], "tag": "Discriminació b/d"}, {"w": "pupa", "syl": ["pu", "pa"], "tag": "Discriminació p/q"}, {"w": "pura", "syl": ["pu", "ra"], "tag": "Discriminació m/n"}, {"w": "queixa", "syl": ["qu", "ei", "xa"], "tag": "Síl·labes directes CV"}, {"w": "crema", "syl": ["cre", "ma"], "tag": "Discriminació b/d"}, {"w": "quilo", "syl": ["qu", "i", "lo"], "tag": "Discriminació p/q"}, {"w": "quina", "syl": ["qu", "i", "na"], "tag": "Discriminació m/n"}, {"w": "raça", "syl": ["ra", "ça"], "tag": "Síl·labes directes CV"}, {"w": "rada", "syl": ["ra", "da"], "tag": "Discriminació b/d"}, {"w": "raïm", "syl": ["raïm"], "tag": "Discriminació p/q"}, {"w": "branca", "syl": ["bran", "ca"], "tag": "Discriminació m/n"}, {"w": "rana", "syl": ["ra", "na"], "tag": "Síl·labes directes CV"}, {"w": "rapa", "syl": ["ra", "pa"], "tag": "Discriminació b/d"}, {"w": "rasa", "syl": ["ra", "sa"], "tag": "Discriminació p/q"}, {"w": "rata", "syl": ["ra", "ta"], "tag": "Discriminació m/n"}, {"w": "raure", "syl": ["rau", "re"], "tag": "Síl·labes directes CV"}, {"w": "rebaixa", "syl": ["re", "bai", "xa"], "tag": "Discriminació b/d"}, {"w": "recepta", "syl": ["re", "cep", "ta"], "tag": "Discriminació p/q"}, {"w": "xarxa", "syl": ["xar", "xa"], "tag": "Discriminació m/n"}, {"w": "regla", "syl": ["re", "gla"], "tag": "Síl·labes directes CV"}, {"w": "reina", "syl": ["rei", "na"], "tag": "Discriminació b/d"}, {"w": "reixa", "syl": ["rei", "xa"], "tag": "Discriminació p/q"}, {"w": "rem", "syl": ["rem"], "tag": "Discriminació m/n"}, {"w": "renda", "syl": ["ren", "da"], "tag": "Síl·labes directes CV"}, {"w": "repàs", "syl": ["re", "pàs"], "tag": "Discriminació b/d"}, {"w": "res", "syl": ["res"], "tag": "Discriminació p/q"}, {"w": "resa", "syl": ["re", "sa"], "tag": "Discriminació m/n"}, {"w": "resta", "syl": ["res", "ta"], "tag": "Síl·labes directes CV"}, {"w": "reta", "syl": ["re", "ta"], "tag": "Discriminació b/d"}, {"w": "riba", "syl": ["ri", "ba"], "tag": "Discriminació p/q"}, {"w": "rica", "syl": ["ri", "ca"], "tag": "Discriminació m/n"}, {"w": "rima", "syl": ["ri", "ma"], "tag": "Síl·labes directes CV"}, {"w": "riure", "syl": ["ri", "u", "re"], "tag": "Discriminació b/d"}, {"w": "roba", "syl": ["ro", "ba"], "tag": "Discriminació p/q"}, {"w": "roca", "syl": ["ro", "ca"], "tag": "Discriminació m/n"}, {"w": "roda", "syl": ["ro", "da"], "tag": "Síl·labes directes CV"}, {"w": "roja", "syl": ["ro", "ja"], "tag": "Discriminació b/d"}, {"w": "roma", "syl": ["ro", "ma"], "tag": "Discriminació p/q"}, {"w": "ronda", "syl": ["ron", "da"], "tag": "Discriminació m/n"}, {"w": "rosa", "syl": ["ro", "sa"], "tag": "Síl·labes directes CV"}, {"w": "rota", "syl": ["ro", "ta"], "tag": "Discriminació b/d"}, {"w": "roure", "syl": ["rou", "re"], "tag": "Discriminació p/q"}, {"w": "rua", "syl": ["ru", "a"], "tag": "Discriminació m/n"}, {"w": "ruda", "syl": ["ru", "da"], "tag": "Síl·labes directes CV"}, {"w": "ruga", "syl": ["ru", "ga"], "tag": "Discriminació b/d"}, {"w": "sabó", "syl": ["sa", "bó"], "tag": "Discriminació p/q"}, {"w": "sacada", "syl": ["sa", "ca", "da"], "tag": "Discriminació m/n"}, {"w": "sala", "syl": ["sa", "la"], "tag": "Síl·labes directes CV"}, {"w": "saliva", "syl": ["sa", "li", "va"], "tag": "Discriminació b/d"}, {"w": "salta", "syl": ["sal", "ta"], "tag": "Discriminació p/q"}, {"w": "salut", "syl": ["sa", "lut"], "tag": "Discriminació m/n"}, {"w": "sana", "syl": ["sa", "na"], "tag": "Síl·labes directes CV"}, {"w": "sapa", "syl": ["sa", "pa"], "tag": "Discriminació b/d"}, {"w": "sardina", "syl": ["sar", "di", "na"], "tag": "Discriminació p/q"}, {"w": "sastre", "syl": ["sas", "tre"], "tag": "Discriminació m/n"}, {"w": "seca", "syl": ["se", "ca"], "tag": "Síl·labes directes CV"}, {"w": "seda", "syl": ["se", "da"], "tag": "Discriminació b/d"}, {"w": "segona", "syl": ["se", "go", "na"], "tag": "Discriminació p/q"}, {"w": "sembla", "syl": ["sem", "bla"], "tag": "Discriminació m/n"}, {"w": "setmana", "syl": ["set", "ma", "na"], "tag": "Síl·labes directes CV"}, {"w": "seva", "syl": ["se", "va"], "tag": "Discriminació b/d"}, {"w": "sida", "syl": ["si", "da"], "tag": "Discriminació p/q"}, {"w": "silla", "syl": ["si", "lla"], "tag": "Discriminació m/n"}, {"w": "simi", "syl": ["si", "mi"], "tag": "Síl·labes directes CV"}, {"w": "sina", "syl": ["si", "na"], "tag": "Discriminació b/d"}, {"w": "soca", "syl": ["so", "ca"], "tag": "Discriminació p/q"}, {"w": "sofà", "syl": ["so", "fà"], "tag": "Discriminació m/n"}, {"w": "sola", "syl": ["so", "la"], "tag": "Síl·labes directes CV"}, {"w": "soma", "syl": ["so", "ma"], "tag": "Discriminació b/d"}, {"w": "sona", "syl": ["so", "na"], "tag": "Discriminació p/q"}, {"w": "sopa", "syl": ["so", "pa"], "tag": "Discriminació m/n"}, {"w": "sorda", "syl": ["sor", "da"], "tag": "Síl·labes directes CV"}, {"w": "suau", "syl": ["su", "au"], "tag": "Discriminació b/d"}, {"w": "suro", "syl": ["su", "ro"], "tag": "Discriminació p/q"}, {"w": "tabac", "syl": ["ta", "bac"], "tag": "Discriminació m/n"}, {"w": "taca", "syl": ["ta", "ca"], "tag": "Síl·labes directes CV"}, {"w": "talla", "syl": ["ta", "lla"], "tag": "Discriminació b/d"}, {"w": "tapa", "syl": ["ta", "pa"], "tag": "Discriminació p/q"}, {"w": "tarda", "syl": ["tar", "da"], "tag": "Discriminació m/n"}, {"w": "tassa", "syl": ["tas", "sa"], "tag": "Síl·labes directes CV"}, {"w": "taxa", "syl": ["ta", "xa"], "tag": "Discriminació b/d"}, {"w": "teula", "syl": ["teu", "la"], "tag": "Discriminació p/q"}, {"w": "tela", "syl": ["te", "la"], "tag": "Discriminació m/n"}, {"w": "tema", "syl": ["te", "ma"], "tag": "Síl·labes directes CV"}, {"w": "tena", "syl": ["te", "na"], "tag": "Discriminació b/d"}, {"w": "tenda", "syl": ["ten", "da"], "tag": "Discriminació p/q"}, {"w": "terra", "syl": ["ter", "ra"], "tag": "Discriminació m/n"}, {"w": "teta", "syl": ["te", "ta"], "tag": "Síl·labes directes CV"}, {"w": "tia", "syl": ["ti", "a"], "tag": "Discriminació b/d"}, {"w": "tiba", "syl": ["ti", "ba"], "tag": "Discriminació p/q"}, {"w": "tina", "syl": ["ti", "na"], "tag": "Discriminació m/n"}, {"w": "tinta", "syl": ["tin", "ta"], "tag": "Síl·labes directes CV"}, {"w": "tira", "syl": ["ti", "ra"], "tag": "Discriminació b/d"}, {"w": "titella", "syl": ["ti", "te", "lla"], "tag": "Discriminació p/q"}, {"w": "toia", "syl": ["toi", "i", "a"], "tag": "Discriminació m/n"}, {"w": "toma", "syl": ["to", "ma"], "tag": "Síl·labes directes CV"}, {"w": "tona", "syl": ["to", "na"], "tag": "Discriminació b/d"}, {"w": "topa", "syl": ["to", "pa"], "tag": "Discriminació p/q"}, {"w": "toro", "syl": ["to", "ro"], "tag": "Discriminació m/n"}, {"w": "torre", "syl": ["tor", "re"], "tag": "Síl·labes directes CV"}, {"w": "torta", "syl": ["tor", "ta"], "tag": "Discriminació b/d"}, {"w": "tova", "syl": ["to", "va"], "tag": "Discriminació p/q"}, {"w": "tuba", "syl": ["tu", "ba"], "tag": "Discriminació m/n"}, {"w": "canonada", "syl": ["ca", "no", "na", "da"], "tag": "Síl·labes directes CV"}, {"w": "tulipa", "syl": ["tu", "li", "pa"], "tag": "Discriminació b/d"}, {"w": "vaca", "syl": ["va", "ca"], "tag": "Discriminació p/q"}, {"w": "vaga", "syl": ["va", "ga"], "tag": "Discriminació m/n"}, {"w": "vainilla", "syl": ["vai", "ni", "lla"], "tag": "Síl·labes directes CV"}, {"w": "valenta", "syl": ["va", "len", "ta"], "tag": "Discriminació b/d"}, {"w": "vall", "syl": ["vall"], "tag": "Discriminació p/q"}, {"w": "valor", "syl": ["va", "lor"], "tag": "Discriminació m/n"}, {"w": "vana", "syl": ["va", "na"], "tag": "Síl·labes directes CV"}, {"w": "vapor", "syl": ["va", "por"], "tag": "Discriminació b/d"}, {"w": "vara", "syl": ["va", "ra"], "tag": "Discriminació p/q"}, {"w": "vas", "syl": ["vas"], "tag": "Discriminació m/n"}, {"w": "vella", "syl": ["ve", "lla"], "tag": "Síl·labes directes CV"}, {"w": "vena", "syl": ["ve", "na"], "tag": "Discriminació b/d"}, {"w": "venda", "syl": ["ven", "da"], "tag": "Discriminació p/q"}, {"w": "venta", "syl": ["ven", "ta"], "tag": "Discriminació m/n"}, {"w": "vera", "syl": ["ve", "ra"], "tag": "Síl·labes directes CV"}, {"w": "verda", "syl": ["ver", "da"], "tag": "Discriminació b/d"}, {"w": "vida", "syl": ["vi", "da"], "tag": "Discriminació p/q"}, {"w": "vila", "syl": ["vi", "la"], "tag": "Discriminació m/n"}, {"w": "vina", "syl": ["vi", "na"], "tag": "Síl·labes directes CV"}, {"w": "viola", "syl": ["vi", "o", "la"], "tag": "Discriminació b/d"}, {"w": "visita", "syl": ["vi", "si", "ta"], "tag": "Discriminació p/q"}, {"w": "vocal", "syl": ["vo", "cal"], "tag": "Discriminació m/n"}, {"w": "volta", "syl": ["vol", "ta"], "tag": "Síl·labes directes CV"}, {"w": "vora", "syl": ["vo", "ra"], "tag": "Discriminació b/d"}, {"w": "vot", "syl": ["vot"], "tag": "Discriminació p/q"}, {"w": "xai", "syl": ["xai"], "tag": "Discriminació m/n"}, {"w": "xapa", "syl": ["xa", "pa"], "tag": "Síl·labes directes CV"}, {"w": "xarop", "syl": ["xa", "rop"], "tag": "Discriminació b/d"}, {"w": "xic", "syl": ["xic"], "tag": "Discriminació p/q"}, {"w": "xina", "syl": ["xi", "na"], "tag": "Discriminació m/n"}, {"w": "xiulet", "syl": ["xi", "u", "let"], "tag": "Síl·labes directes CV"}, {"w": "zona", "syl": ["zo", "na"], "tag": "Discriminació b/d"}, {"w": "alba", "syl": ["al", "ba"], "tag": "Síl·labes directes CV"}, {"w": "alma", "syl": ["al", "ma"], "tag": "Discriminació b/d"}, {"w": "alta", "syl": ["al", "ta"], "tag": "Discriminació p/q"}, {"w": "altiva", "syl": ["al", "ti", "va"], "tag": "Discriminació m/n"}, {"w": "amiga", "syl": ["a", "mi", "ga"], "tag": "Síl·labes directes CV"}, {"w": "amo", "syl": ["a", "mo"], "tag": "Discriminació b/d"}, {"w": "ampla", "syl": ["am", "pla"], "tag": "Discriminació p/q"}, {"w": "ànima", "syl": ["à", "ni", "ma"], "tag": "Síl·labes directes CV"}, {"w": "anna", "syl": ["an", "na"], "tag": "Discriminació b/d"}, {"w": "anyell", "syl": ["a", "nyell"], "tag": "Discriminació m/n"}, {"w": "aplec", "syl": ["a", "plec"], "tag": "Síl·labes directes CV"}, {"w": "ase", "syl": ["a", "se"], "tag": "Síl·labes directes CV"}, {"w": "atles", "syl": ["at", "les"], "tag": "Discriminació b/d"}, {"w": "àvia", "syl": ["à", "vi", "a"], "tag": "Discriminació m/n"}, {"w": "avi", "syl": ["a", "vi"], "tag": "Síl·labes directes CV"}, {"w": "bada", "syl": ["ba", "da"], "tag": "Discriminació b/d"}, {"w": "baga", "syl": ["ba", "ga"], "tag": "Discriminació p/q"}, {"w": "bala", "syl": ["ba", "la"], "tag": "Discriminació m/n"}, {"w": "balcó", "syl": ["bal", "có"], "tag": "Síl·labes directes CV"}, {"w": "banda", "syl": ["ban", "da"], "tag": "Discriminació b/d"}, {"w": "bany", "syl": ["bany"], "tag": "Discriminació p/q"}, {"w": "banya", "syl": ["ba", "nya"], "tag": "Discriminació m/n"}, {"w": "barba", "syl": ["bar", "ba"], "tag": "Síl·labes directes CV"}, {"w": "barra", "syl": ["bar", "ra"], "tag": "Discriminació b/d"}, {"w": "base", "syl": ["ba", "se"], "tag": "Discriminació p/q"}, {"w": "bassa", "syl": ["bas", "sa"], "tag": "Discriminació m/n"}, {"w": "bastó", "syl": ["bas", "tó"], "tag": "Síl·labes directes CV"}, {"w": "bateria", "syl": ["ba", "te", "ri", "a"], "tag": "Discriminació b/d"}, {"w": "batussa", "syl": ["ba", "tus", "sa"], "tag": "Discriminació p/q"}, {"w": "beca", "syl": ["be", "ca"], "tag": "Discriminació m/n"}, {"w": "beda", "syl": ["be", "da"], "tag": "Síl·labes directes CV"}, {"w": "beina", "syl": ["bei", "na"], "tag": "Discriminació b/d"}, {"w": "bella", "syl": ["be", "lla"], "tag": "Discriminació p/q"}, {"w": "bena", "syl": ["be", "na"], "tag": "Discriminació m/n"}, {"w": "berena", "syl": ["be", "re", "na"], "tag": "Síl·labes directes CV"}, {"w": "besada", "syl": ["be", "sa", "da"], "tag": "Discriminació b/d"}, {"w": "bèstia", "syl": ["bès", "ti", "a"], "tag": "Discriminació p/q"}, {"w": "betum", "syl": ["be", "tum"], "tag": "Discriminació m/n"}, {"w": "biela", "syl": ["bi", "e", "la"], "tag": "Síl·labes directes CV"}, {"w": "biga", "syl": ["bi", "ga"], "tag": "Discriminació b/d"}, {"w": "bitlla", "syl": ["bit", "lla"], "tag": "Discriminació p/q"}, {"w": "blanca", "syl": ["blan", "ca"], "tag": "Discriminació m/n"}, {"w": "blava", "syl": ["bla", "va"], "tag": "Síl·labes directes CV"}, {"w": "boira", "syl": ["boi", "ra"], "tag": "Discriminació b/d"}, {"w": "bolla", "syl": ["bo", "lla"], "tag": "Discriminació m/n"}, {"w": "bomba", "syl": ["bom", "ba"], "tag": "Síl·labes directes CV"}, {"w": "bonica", "syl": ["bo", "ni", "ca"], "tag": "Discriminació b/d"}, {"w": "borda", "syl": ["bor", "da"], "tag": "Discriminació p/q"}, {"w": "borla", "syl": ["bor", "la"], "tag": "Discriminació m/n"}, {"w": "bossa", "syl": ["bos", "sa"], "tag": "Síl·labes directes CV"}, {"w": "brasa", "syl": ["bra", "sa"], "tag": "Discriminació m/n"}, {"w": "bresca", "syl": ["bres", "ca"], "tag": "Síl·labes directes CV"}, {"w": "brisa", "syl": ["bri", "sa"], "tag": "Discriminació b/d"}, {"w": "broca", "syl": ["bro", "ca"], "tag": "Discriminació p/q"}, {"w": "broma", "syl": ["bro", "ma"], "tag": "Discriminació m/n"}, {"w": "bruixa", "syl": ["bru", "i", "xa"], "tag": "Síl·labes directes CV"}, {"w": "bulla", "syl": ["bu", "lla"], "tag": "Discriminació b/d"}, {"w": "burra", "syl": ["bur", "ra"], "tag": "Discriminació p/q"}, {"w": "busca", "syl": ["bus", "ca"], "tag": "Discriminació m/n"}, {"w": "cabàs", "syl": ["ca", "bàs"], "tag": "Síl·labes directes CV"}, {"w": "cabell", "syl": ["ca", "bell"], "tag": "Discriminació b/d"}, {"w": "cabina", "syl": ["ca", "bi", "na"], "tag": "Discriminació p/q"}, {"w": "cadaf", "syl": ["ca", "daf"], "tag": "Síl·labes directes CV"}, {"w": "cadena", "syl": ["ca", "de", "na"], "tag": "Discriminació p/q"}, {"w": "caiguda", "syl": ["cai", "gu", "da"], "tag": "Síl·labes directes CV"}, {"w": "caldera", "syl": ["cal", "de", "ra"], "tag": "Discriminació m/n"}, {"w": "caliu", "syl": ["ca", "li", "u"], "tag": "Síl·labes directes CV"}, {"w": "calma", "syl": ["cal", "ma"], "tag": "Discriminació b/d"}, {"w": "calor", "syl": ["ca", "lor"], "tag": "Discriminació p/q"}, {"w": "cambra", "syl": ["cam", "bra"], "tag": "Síl·labes directes CV"}, {"w": "camisa", "syl": ["ca", "mi", "sa"], "tag": "Discriminació p/q"}, {"w": "campana", "syl": ["cam", "pa", "na"], "tag": "Discriminació m/n"}, {"w": "canal", "syl": ["ca", "nal"], "tag": "Síl·labes directes CV"}, {"w": "canasta", "syl": ["ca", "nas", "ta"], "tag": "Discriminació b/d"}, {"w": "cançó", "syl": ["can", "çó"], "tag": "Discriminació p/q"}, {"w": "candela", "syl": ["can", "de", "la"], "tag": "Discriminació m/n"}, {"w": "canella", "syl": ["ca", "ne", "lla"], "tag": "Síl·labes directes CV"}, {"w": "canó", "syl": ["ca", "nó"], "tag": "Discriminació b/d"}, {"w": "cansada", "syl": ["can", "sa", "da"], "tag": "Discriminació p/q"}, {"w": "canta", "syl": ["can", "ta"], "tag": "Discriminació m/n"}, {"w": "cantina", "syl": ["can", "ti", "na"], "tag": "Síl·labes directes CV"}, {"w": "canya", "syl": ["ca", "nya"], "tag": "Discriminació b/d"}, {"w": "capella", "syl": ["ca", "pe", "lla"], "tag": "Discriminació m/n"}, {"w": "capità", "syl": ["ca", "pi", "tà"], "tag": "Síl·labes directes CV"}, {"w": "capsa", "syl": ["cap", "sa"], "tag": "Discriminació b/d"}, {"w": "cargol", "syl": ["car", "gol"], "tag": "Discriminació m/n"}, {"w": "caramel", "syl": ["ca", "ra", "mel"], "tag": "Síl·labes directes CV"}, {"w": "carbó", "syl": ["car", "bó"], "tag": "Discriminació b/d"}, {"w": "carcaix", "syl": ["car", "caix"], "tag": "Discriminació p/q"}, {"w": "carda", "syl": ["car", "da"], "tag": "Discriminació m/n"}, {"w": "careta", "syl": ["ca", "re", "ta"], "tag": "Síl·labes directes CV"}, {"w": "càrrega", "syl": ["càr", "re", "ga"], "tag": "Discriminació b/d"}, {"w": "carrera", "syl": ["car", "re", "ra"], "tag": "Discriminació p/q"}, {"w": "carro", "syl": ["car", "ro"], "tag": "Discriminació m/n"}, {"w": "carta", "syl": ["car", "ta"], "tag": "Síl·labes directes CV"}, {"w": "cartera", "syl": ["car", "te", "ra"], "tag": "Discriminació b/d"}, {"w": "casaca", "syl": ["ca", "sa", "ca"], "tag": "Discriminació m/n"}, {"w": "cascada", "syl": ["cas", "ca", "da"], "tag": "Síl·labes directes CV"}, {"w": "caspa", "syl": ["cas", "pa"], "tag": "Discriminació p/q"}, {"w": "castella", "syl": ["cas", "te", "lla"], "tag": "Síl·labes directes CV"}, {"w": "casualitat", "syl": ["ca", "su", "a", "li", "tat"], "tag": "Discriminació b/d"}, {"w": "càtedra", "syl": ["cà", "te", "dra"], "tag": "Discriminació p/q"}, {"w": "causa", "syl": ["cau", "sa"], "tag": "Discriminació m/n"}, {"w": "cavall", "syl": ["ca", "vall"], "tag": "Síl·labes directes CV"}, {"w": "caverna", "syl": ["ca", "ver", "na"], "tag": "Discriminació b/d"}, {"w": "cedre", "syl": ["ce", "dre"], "tag": "Discriminació m/n"}, {"w": "cella", "syl": ["ce", "lla"], "tag": "Síl·labes directes CV"}, {"w": "cendra", "syl": ["cen", "dra"], "tag": "Discriminació b/d"}, {"w": "centenar", "syl": ["cen", "te", "nar"], "tag": "Discriminació p/q"}, {"w": "cep", "syl": ["cep"], "tag": "Discriminació m/n"}, {"w": "ceràmica", "syl": ["ce", "rà", "mi", "ca"], "tag": "Discriminació b/d"}, {"w": "cerca", "syl": ["cer", "ca"], "tag": "Discriminació p/q"}, {"w": "cervell", "syl": ["cer", "vell"], "tag": "Discriminació m/n"}, {"w": "cistella", "syl": ["cis", "te", "lla"], "tag": "Síl·labes directes CV"}, {"w": "ciutat", "syl": ["ci", "u", "tat"], "tag": "Discriminació b/d"}, {"w": "clara", "syl": ["cla", "ra"], "tag": "Discriminació p/q"}, {"w": "classe", "syl": ["clas", "se"], "tag": "Discriminació m/n"}, {"w": "clau", "syl": ["clau"], "tag": "Síl·labes directes CV"}, {"w": "clavell", "syl": ["cla", "vell"], "tag": "Discriminació b/d"}, {"w": "clima", "syl": ["cli", "ma"], "tag": "Discriminació p/q"}, {"w": "closca", "syl": ["clos", "ca"], "tag": "Discriminació m/n"}, {"w": "coberta", "syl": ["co", "ber", "ta"], "tag": "Síl·labes directes CV"}, {"w": "cobla", "syl": ["co", "bla"], "tag": "Discriminació b/d"}, {"w": "codony", "syl": ["co", "dony"], "tag": "Síl·labes directes CV"}, {"w": "coet", "syl": ["co", "et"], "tag": "Discriminació b/d"}, {"w": "coixí", "syl": ["coi", "xí"], "tag": "Discriminació p/q"}, {"w": "còlera", "syl": ["cò", "le", "ra"], "tag": "Síl·labes directes CV"}, {"w": "colla", "syl": ["co", "lla"], "tag": "Discriminació b/d"}, {"w": "colom", "syl": ["co", "lom"], "tag": "Discriminació p/q"}, {"w": "color", "syl": ["co", "lor"], "tag": "Discriminació m/n"}, {"w": "comarca", "syl": ["co", "mar", "ca"], "tag": "Discriminació b/d"}, {"w": "cometa", "syl": ["co", "me", "ta"], "tag": "Discriminació p/q"}, {"w": "còmica", "syl": ["cò", "mi", "ca"], "tag": "Discriminació m/n"}, {"w": "companya", "syl": ["com", "pa", "nya"], "tag": "Síl·labes directes CV"}, {"w": "compra", "syl": ["com", "pra"], "tag": "Discriminació b/d"}, {"w": "comte", "syl": ["com", "te"], "tag": "Discriminació p/q"}, {"w": "conca", "syl": ["con", "ca"], "tag": "Discriminació m/n"}, {"w": "condició", "syl": ["con", "di", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "conducta", "syl": ["con", "duc", "ta"], "tag": "Discriminació b/d"}, {"w": "conill", "syl": ["co", "nill"], "tag": "Discriminació p/q"}, {"w": "consell", "syl": ["con", "sell"], "tag": "Discriminació m/n"}, {"w": "conta", "syl": ["con", "ta"], "tag": "Síl·labes directes CV"}, {"w": "contenta", "syl": ["con", "ten", "ta"], "tag": "Discriminació b/d"}, {"w": "contrada", "syl": ["con", "tra", "da"], "tag": "Discriminació p/q"}, {"w": "coqueta", "syl": ["co", "qu", "e", "ta"], "tag": "Síl·labes directes CV"}, {"w": "cor", "syl": ["cor"], "tag": "Discriminació b/d"}, {"w": "corall", "syl": ["co", "rall"], "tag": "Discriminació p/q"}, {"w": "corba", "syl": ["cor", "ba"], "tag": "Discriminació m/n"}, {"w": "corda", "syl": ["cor", "da"], "tag": "Síl·labes directes CV"}, {"w": "corona", "syl": ["co", "ro", "na"], "tag": "Discriminació b/d"}, {"w": "correu", "syl": ["cor", "reu"], "tag": "Discriminació p/q"}, {"w": "cortina", "syl": ["cor", "ti", "na"], "tag": "Discriminació m/n"}, {"w": "costa", "syl": ["cos", "ta"], "tag": "Discriminació b/d"}, {"w": "costat", "syl": ["cos", "tat"], "tag": "Discriminació p/q"}, {"w": "costura", "syl": ["cos", "tu", "ra"], "tag": "Discriminació m/n"}, {"w": "creixement", "syl": ["crei", "xe", "ment"], "tag": "Discriminació b/d"}, {"w": "cresta", "syl": ["cres", "ta"], "tag": "Discriminació m/n"}, {"w": "creu", "syl": ["creu"], "tag": "Síl·labes directes CV"}, {"w": "criada", "syl": ["cri", "a", "da"], "tag": "Discriminació b/d"}, {"w": "cristal", "syl": ["cris", "tal"], "tag": "Discriminació p/q"}, {"w": "crosta", "syl": ["cros", "ta"], "tag": "Discriminació m/n"}, {"w": "crua", "syl": ["cru", "a"], "tag": "Síl·labes directes CV"}, {"w": "cuina", "syl": ["cu", "i", "na"], "tag": "Discriminació b/d"}, {"w": "cullera", "syl": ["cu", "lle", "ra"], "tag": "Discriminació p/q"}, {"w": "culpa", "syl": ["cul", "pa"], "tag": "Discriminació m/n"}, {"w": "cultura", "syl": ["cul", "tu", "ra"], "tag": "Síl·labes directes CV"}, {"w": "cuna", "syl": ["cu", "na"], "tag": "Discriminació b/d"}, {"w": "curiosa", "syl": ["cu", "ri", "o", "sa"], "tag": "Discriminació m/n"}, {"w": "dansa", "syl": ["dan", "sa"], "tag": "Discriminació b/d"}, {"w": "debanadora", "syl": ["de", "ba", "na", "do", "ra"], "tag": "Síl·labes directes CV"}, {"w": "dècada", "syl": ["dè", "ca", "da"], "tag": "Discriminació b/d"}, {"w": "deixa", "syl": ["dei", "xa"], "tag": "Discriminació m/n"}, {"w": "delícia", "syl": ["de", "lí", "ci", "a"], "tag": "Síl·labes directes CV"}, {"w": "derrota", "syl": ["der", "ro", "ta"], "tag": "Discriminació m/n"}, {"w": "despesa", "syl": ["des", "pe", "sa"], "tag": "Discriminació b/d"}, {"w": "destí", "syl": ["des", "tí"], "tag": "Discriminació p/q"}, {"w": "detall", "syl": ["de", "tall"], "tag": "Discriminació m/n"}, {"w": "diadema", "syl": ["di", "a", "de", "ma"], "tag": "Discriminació p/q"}, {"w": "diamant", "syl": ["di", "a", "mant"], "tag": "Discriminació m/n"}, {"w": "diari", "syl": ["di", "a", "ri"], "tag": "Síl·labes directes CV"}, {"w": "difunta", "syl": ["di", "fun", "ta"], "tag": "Discriminació p/q"}, {"w": "diligència", "syl": ["di", "li", "gèn", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "dimoni", "syl": ["di", "mo", "ni"], "tag": "Síl·labes directes CV"}, {"w": "direcció", "syl": ["di", "rec", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "disciplina", "syl": ["dis", "ci", "pli", "na"], "tag": "Síl·labes directes CV"}, {"w": "disfressa", "syl": ["dis", "fres", "sa"], "tag": "Discriminació b/d"}, {"w": "distancia", "syl": ["dis", "tan", "ci", "a"], "tag": "Discriminació p/q"}, {"w": "diversa", "syl": ["di", "ver", "sa"], "tag": "Síl·labes directes CV"}, {"w": "divisa", "syl": ["di", "vi", "sa"], "tag": "Discriminació b/d"}, {"w": "dolça", "syl": ["dol", "ça"], "tag": "Discriminació p/q"}, {"w": "dolor", "syl": ["do", "lor"], "tag": "Discriminació m/n"}, {"w": "doma", "syl": ["do", "ma"], "tag": "Síl·labes directes CV"}, {"w": "donzella", "syl": ["don", "ze", "lla"], "tag": "Discriminació p/q"}, {"w": "dormitori", "syl": ["dor", "mi", "to", "ri"], "tag": "Discriminació m/n"}, {"w": "dotzena", "syl": ["dot", "ze", "na"], "tag": "Síl·labes directes CV"}, {"w": "drapaire", "syl": ["dra", "pai", "re"], "tag": "Discriminació b/d"}, {"w": "droga", "syl": ["dro", "ga"], "tag": "Discriminació p/q"}, {"w": "duquessa", "syl": ["du", "qu", "es", "sa"], "tag": "Síl·labes directes CV"}, {"w": "eina", "syl": ["ei", "na"], "tag": "Discriminació b/d"}, {"w": "eixam", "syl": ["ei", "xam"], "tag": "Discriminació p/q"}, {"w": "eixida", "syl": ["ei", "xi", "da"], "tag": "Discriminació m/n"}, {"w": "elegant", "syl": ["e", "le", "gant"], "tag": "Síl·labes directes CV"}, {"w": "element", "syl": ["e", "le", "ment"], "tag": "Discriminació b/d"}, {"w": "elogi", "syl": ["e", "lo", "gi"], "tag": "Discriminació p/q"}, {"w": "embut", "syl": ["em", "but"], "tag": "Discriminació m/n"}, {"w": "emoció", "syl": ["e", "mo", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "empatia", "syl": ["em", "pa", "ti", "a"], "tag": "Discriminació b/d"}, {"w": "empleada", "syl": ["em", "ple", "a", "da"], "tag": "Discriminació p/q"}, {"w": "enamorada", "syl": ["e", "na", "mo", "ra", "da"], "tag": "Discriminació m/n"}, {"w": "encaix", "syl": ["en", "caix"], "tag": "Síl·labes directes CV"}, {"w": "encant", "syl": ["en", "cant"], "tag": "Discriminació b/d"}, {"w": "enciam", "syl": ["en", "ci", "am"], "tag": "Discriminació p/q"}, {"w": "enclusa", "syl": ["en", "clu", "sa"], "tag": "Discriminació m/n"}, {"w": "endema", "syl": ["en", "de", "ma"], "tag": "Síl·labes directes CV"}, {"w": "energia", "syl": ["e", "ner", "gi", "a"], "tag": "Discriminació b/d"}, {"w": "enfadada", "syl": ["en", "fa", "da", "da"], "tag": "Discriminació p/q"}, {"w": "enginy", "syl": ["en", "giny"], "tag": "Discriminació m/n"}, {"w": "enllac", "syl": ["en", "llac"], "tag": "Síl·labes directes CV"}, {"w": "enquesta", "syl": ["en", "qu", "es", "ta"], "tag": "Discriminació b/d"}, {"w": "enrenou", "syl": ["en", "re", "nou"], "tag": "Discriminació p/q"}, {"w": "ensenya", "syl": ["en", "se", "nya"], "tag": "Discriminació m/n"}, {"w": "entesa", "syl": ["en", "te", "sa"], "tag": "Síl·labes directes CV"}, {"w": "entrada", "syl": ["en", "tra", "da"], "tag": "Discriminació b/d"}, {"w": "entrevista", "syl": ["en", "tre", "vis", "ta"], "tag": "Discriminació p/q"}, {"w": "envia", "syl": ["en", "vi", "a"], "tag": "Discriminació m/n"}, {"w": "època", "syl": ["è", "po", "ca"], "tag": "Síl·labes directes CV"}, {"w": "equació", "syl": ["e", "qu", "a", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "equip", "syl": ["e", "qu", "ip"], "tag": "Discriminació p/q"}, {"w": "ermita", "syl": ["er", "mi", "ta"], "tag": "Discriminació m/n"}, {"w": "error", "syl": ["er", "ror"], "tag": "Síl·labes directes CV"}, {"w": "escala", "syl": ["es", "ca", "la"], "tag": "Discriminació b/d"}, {"w": "escama", "syl": ["es", "ca", "ma"], "tag": "Discriminació p/q"}, {"w": "escapada", "syl": ["es", "ca", "pa", "da"], "tag": "Discriminació m/n"}, {"w": "escarabat", "syl": ["es", "ca", "ra", "bat"], "tag": "Síl·labes directes CV"}, {"w": "escena", "syl": ["es", "ce", "na"], "tag": "Discriminació b/d"}, {"w": "esclata", "syl": ["es", "cla", "ta"], "tag": "Discriminació p/q"}, {"w": "escoba", "syl": ["es", "co", "ba"], "tag": "Discriminació m/n"}, {"w": "escombra", "syl": ["es", "com", "bra"], "tag": "Discriminació b/d"}, {"w": "escopeta", "syl": ["es", "co", "pe", "ta"], "tag": "Discriminació p/q"}, {"w": "escorça", "syl": ["es", "cor", "ça"], "tag": "Discriminació m/n"}, {"w": "escriptura", "syl": ["es", "crip", "tu", "ra"], "tag": "Síl·labes directes CV"}, {"w": "escrit", "syl": ["es", "crit"], "tag": "Discriminació b/d"}, {"w": "escudella", "syl": ["es", "cu", "de", "lla"], "tag": "Discriminació p/q"}, {"w": "escull", "syl": ["es", "cull"], "tag": "Discriminació m/n"}, {"w": "escuma", "syl": ["es", "cu", "ma"], "tag": "Síl·labes directes CV"}, {"w": "esfèrica", "syl": ["es", "fè", "ri", "ca"], "tag": "Discriminació b/d"}, {"w": "església", "syl": ["es", "glé", "si", "a"], "tag": "Discriminació p/q"}, {"w": "esguard", "syl": ["es", "gu", "ard"], "tag": "Discriminació m/n"}, {"w": "esmorteïda", "syl": ["es", "mor", "teï", "da"], "tag": "Síl·labes directes CV"}, {"w": "espai", "syl": ["es", "pai"], "tag": "Discriminació b/d"}, {"w": "espasa", "syl": ["es", "pa", "sa"], "tag": "Discriminació p/q"}, {"w": "espècie", "syl": ["es", "pè", "ci", "e"], "tag": "Discriminació m/n"}, {"w": "espera", "syl": ["es", "pe", "ra"], "tag": "Discriminació b/d"}, {"w": "espiga", "syl": ["es", "pi", "ga"], "tag": "Discriminació p/q"}, {"w": "espina", "syl": ["es", "pi", "na"], "tag": "Discriminació m/n"}, {"w": "esponja", "syl": ["es", "pon", "ja"], "tag": "Síl·labes directes CV"}, {"w": "esposa", "syl": ["es", "po", "sa"], "tag": "Discriminació b/d"}, {"w": "espuma", "syl": ["es", "pu", "ma"], "tag": "Discriminació p/q"}, {"w": "esquadra", "syl": ["es", "qu", "a", "dra"], "tag": "Discriminació m/n"}, {"w": "esquerda", "syl": ["es", "qu", "er", "da"], "tag": "Síl·labes directes CV"}, {"w": "esquema", "syl": ["es", "qu", "e", "ma"], "tag": "Discriminació b/d"}, {"w": "essència", "syl": ["es", "sèn", "ci", "a"], "tag": "Discriminació p/q"}, {"w": "estació", "syl": ["es", "ta", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "estada", "syl": ["es", "ta", "da"], "tag": "Síl·labes directes CV"}, {"w": "estafa", "syl": ["es", "ta", "fa"], "tag": "Discriminació b/d"}, {"w": "estampa", "syl": ["es", "tam", "pa"], "tag": "Discriminació p/q"}, {"w": "estanc", "syl": ["es", "tanc"], "tag": "Discriminació m/n"}, {"w": "estany", "syl": ["es", "tany"], "tag": "Síl·labes directes CV"}, {"w": "estapa", "syl": ["es", "ta", "pa"], "tag": "Discriminació b/d"}, {"w": "estat", "syl": ["es", "tat"], "tag": "Discriminació p/q"}, {"w": "estàtua", "syl": ["es", "tà", "tu", "a"], "tag": "Discriminació m/n"}, {"w": "estel", "syl": ["es", "tel"], "tag": "Síl·labes directes CV"}, {"w": "estepa", "syl": ["es", "te", "pa"], "tag": "Discriminació b/d"}, {"w": "estiu", "syl": ["es", "ti", "u"], "tag": "Discriminació p/q"}, {"w": "estómac", "syl": ["es", "tó", "mac"], "tag": "Discriminació m/n"}, {"w": "estona", "syl": ["es", "to", "na"], "tag": "Síl·labes directes CV"}, {"w": "estora", "syl": ["es", "to", "ra"], "tag": "Discriminació b/d"}, {"w": "estreta", "syl": ["es", "tre", "ta"], "tag": "Discriminació p/q"}, {"w": "estructura", "syl": ["es", "truc", "tu", "ra"], "tag": "Discriminació m/n"}, {"w": "estudi", "syl": ["es", "tu", "di"], "tag": "Síl·labes directes CV"}, {"w": "etapa", "syl": ["e", "ta", "pa"], "tag": "Discriminació b/d"}, {"w": "eternitat", "syl": ["e", "ter", "ni", "tat"], "tag": "Discriminació p/q"}, {"w": "etiqueta", "syl": ["e", "ti", "qu", "e", "ta"], "tag": "Discriminació m/n"}, {"w": "europeu", "syl": ["eu", "ro", "peu"], "tag": "Síl·labes directes CV"}, {"w": "evidència", "syl": ["e", "vi", "dèn", "ci", "a"], "tag": "Discriminació b/d"}, {"w": "examen", "syl": ["e", "xa", "men"], "tag": "Discriminació p/q"}, {"w": "exemple", "syl": ["e", "xem", "ple"], "tag": "Discriminació m/n"}, {"w": "exercici", "syl": ["e", "xer", "ci", "ci"], "tag": "Síl·labes directes CV"}, {"w": "exili", "syl": ["e", "xi", "li"], "tag": "Discriminació b/d"}, {"w": "èxit", "syl": ["è", "xit"], "tag": "Discriminació p/q"}, {"w": "expedició", "syl": ["ex", "pe", "di", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "experiència", "syl": ["ex", "pe", "ri", "èn", "ci", "a"], "tag": "Síl·labes directes CV"}, {"w": "expert", "syl": ["ex", "pert"], "tag": "Discriminació b/d"}, {"w": "explicació", "syl": ["ex", "pli", "ca", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "exploració", "syl": ["ex", "plo", "ra", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "exposició", "syl": ["ex", "po", "si", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "expressió", "syl": ["ex", "pres", "si", "ó"], "tag": "Discriminació b/d"}, {"w": "extensió", "syl": ["ex", "ten", "si", "ó"], "tag": "Discriminació p/q"}, {"w": "exterior", "syl": ["ex", "te", "ri", "or"], "tag": "Discriminació m/n"}, {"w": "extracte", "syl": ["ex", "trac", "te"], "tag": "Síl·labes directes CV"}, {"w": "fàbula", "syl": ["fà", "bu", "la"], "tag": "Discriminació b/d"}, {"w": "façana", "syl": ["fa", "ça", "na"], "tag": "Discriminació p/q"}, {"w": "fàcil", "syl": ["fà", "cil"], "tag": "Discriminació m/n"}, {"w": "factura", "syl": ["fac", "tu", "ra"], "tag": "Síl·labes directes CV"}, {"w": "fageda", "syl": ["fa", "ge", "da"], "tag": "Discriminació p/q"}, {"w": "faixa", "syl": ["fai", "xa"], "tag": "Discriminació m/n"}, {"w": "falcó", "syl": ["fal", "có"], "tag": "Síl·labes directes CV"}, {"w": "falda", "syl": ["fal", "da"], "tag": "Discriminació b/d"}, {"w": "família", "syl": ["fa", "mí", "li", "a"], "tag": "Discriminació p/q"}, {"w": "famós", "syl": ["fa", "mós"], "tag": "Discriminació m/n"}, {"w": "fantasia", "syl": ["fan", "ta", "si", "a"], "tag": "Discriminació b/d"}, {"w": "fantasma", "syl": ["fan", "tas", "ma"], "tag": "Discriminació p/q"}, {"w": "far", "syl": ["far"], "tag": "Discriminació m/n"}, {"w": "faraó", "syl": ["fa", "ra", "ó"], "tag": "Síl·labes directes CV"}, {"w": "farcell", "syl": ["far", "cell"], "tag": "Discriminació b/d"}, {"w": "farmàcia", "syl": ["far", "mà", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "fanal", "syl": ["fa", "nal"], "tag": "Síl·labes directes CV"}, {"w": "fatiga", "syl": ["fa", "ti", "ga"], "tag": "Discriminació p/q"}, {"w": "fauna", "syl": ["fau", "na"], "tag": "Discriminació m/n"}, {"w": "favor", "syl": ["fa", "vor"], "tag": "Síl·labes directes CV"}, {"w": "felicitat", "syl": ["fe", "li", "ci", "tat"], "tag": "Discriminació m/n"}, {"w": "femella", "syl": ["fe", "me", "lla"], "tag": "Síl·labes directes CV"}, {"w": "fenda", "syl": ["fen", "da"], "tag": "Discriminació b/d"}, {"w": "fenoll", "syl": ["fe", "noll"], "tag": "Discriminació p/q"}, {"w": "fenomen", "syl": ["fe", "no", "men"], "tag": "Discriminació m/n"}, {"w": "ferida", "syl": ["fe", "ri", "da"], "tag": "Discriminació b/d"}, {"w": "ferma", "syl": ["fer", "ma"], "tag": "Discriminació p/q"}, {"w": "ferro", "syl": ["fer", "ro"], "tag": "Discriminació m/n"}, {"w": "festuc", "syl": ["fes", "tuc"], "tag": "Discriminació b/d"}, {"w": "fetge", "syl": ["fet", "ge"], "tag": "Discriminació p/q"}, {"w": "fibra", "syl": ["fi", "bra"], "tag": "Discriminació m/n"}, {"w": "ficció", "syl": ["fic", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "fidel", "syl": ["fi", "del"], "tag": "Discriminació b/d"}, {"w": "figura", "syl": ["fi", "gu", "ra"], "tag": "Discriminació p/q"}, {"w": "filera", "syl": ["fi", "le", "ra"], "tag": "Síl·labes directes CV"}, {"w": "filla", "syl": ["fi", "lla"], "tag": "Discriminació b/d"}, {"w": "film", "syl": ["film"], "tag": "Discriminació p/q"}, {"w": "filosofia", "syl": ["fi", "lo", "so", "fi", "a"], "tag": "Discriminació m/n"}, {"w": "final", "syl": ["fi", "nal"], "tag": "Síl·labes directes CV"}, {"w": "finca", "syl": ["fin", "ca"], "tag": "Discriminació b/d"}, {"w": "firma", "syl": ["fir", "ma"], "tag": "Discriminació m/n"}, {"w": "físic", "syl": ["fí", "sic"], "tag": "Síl·labes directes CV"}, {"w": "flama", "syl": ["fla", "ma"], "tag": "Discriminació b/d"}, {"w": "fleca", "syl": ["fle", "ca"], "tag": "Discriminació m/n"}, {"w": "fletxa", "syl": ["fle", "txa"], "tag": "Síl·labes directes CV"}, {"w": "flor", "syl": ["flor"], "tag": "Discriminació b/d"}, {"w": "floreta", "syl": ["flo", "re", "ta"], "tag": "Discriminació p/q"}, {"w": "fluix", "syl": ["flu", "ix"], "tag": "Síl·labes directes CV"}, {"w": "foc", "syl": ["foc"], "tag": "Discriminació b/d"}, {"w": "fullola", "syl": ["fu", "llo", "la"], "tag": "Discriminació b/d"}, {"w": "fum", "syl": ["fum"], "tag": "Discriminació p/q"}, {"w": "fúria", "syl": ["fú", "ri", "a"], "tag": "Síl·labes directes CV"}, {"w": "fusell", "syl": ["fu", "sell"], "tag": "Discriminació b/d"}, {"w": "gàbia", "syl": ["gà", "bi", "a"], "tag": "Discriminació p/q"}, {"w": "galant", "syl": ["ga", "lant"], "tag": "Discriminació m/n"}, {"w": "galàxia", "syl": ["ga", "là", "xi", "a"], "tag": "Síl·labes directes CV"}, {"w": "galeta", "syl": ["ga", "le", "ta"], "tag": "Discriminació b/d"}, {"w": "galop", "syl": ["ga", "lop"], "tag": "Discriminació p/q"}, {"w": "ganivet", "syl": ["ga", "ni", "vet"], "tag": "Discriminació b/d"}, {"w": "garatge", "syl": ["ga", "rat", "ge"], "tag": "Discriminació p/q"}, {"w": "garba", "syl": ["gar", "ba"], "tag": "Discriminació m/n"}, {"w": "gàrgola", "syl": ["gàr", "go", "la"], "tag": "Síl·labes directes CV"}, {"w": "garra", "syl": ["gar", "ra"], "tag": "Discriminació b/d"}, {"w": "garrofa", "syl": ["gar", "ro", "fa"], "tag": "Discriminació p/q"}, {"w": "gas", "syl": ["gas"], "tag": "Discriminació m/n"}, {"w": "gasela", "syl": ["ga", "se", "la"], "tag": "Síl·labes directes CV"}, {"w": "gasoil", "syl": ["ga", "soil"], "tag": "Discriminació b/d"}, {"w": "gel", "syl": ["gel"], "tag": "Discriminació b/d"}, {"w": "gelat", "syl": ["ge", "lat"], "tag": "Discriminació p/q"}, {"w": "gemec", "syl": ["ge", "mec"], "tag": "Síl·labes directes CV"}, {"w": "generació", "syl": ["ge", "ne", "ra", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "gent", "syl": ["gent"], "tag": "Discriminació m/n"}, {"w": "geografia", "syl": ["ge", "o", "gra", "fi", "a"], "tag": "Síl·labes directes CV"}, {"w": "germà", "syl": ["ger", "mà"], "tag": "Discriminació b/d"}, {"w": "gest", "syl": ["gest"], "tag": "Discriminació m/n"}, {"w": "gimnàs", "syl": ["gim", "nàs"], "tag": "Síl·labes directes CV"}, {"w": "glop", "syl": ["glop"], "tag": "Síl·labes directes CV"}, {"w": "glòria", "syl": ["glò", "ri", "a"], "tag": "Discriminació b/d"}, {"w": "golf", "syl": ["golf"], "tag": "Discriminació m/n"}, {"w": "gorg", "syl": ["gorg"], "tag": "Discriminació b/d"}, {"w": "got", "syl": ["got"], "tag": "Discriminació p/q"}, {"w": "govern", "syl": ["go", "vern"], "tag": "Síl·labes directes CV"}, {"w": "gracia", "syl": ["gra", "ci", "a"], "tag": "Discriminació b/d"}, {"w": "grada", "syl": ["gra", "da"], "tag": "Discriminació p/q"}, {"w": "gràfic", "syl": ["grà", "fic"], "tag": "Discriminació m/n"}, {"w": "gramàtica", "syl": ["gra", "mà", "ti", "ca"], "tag": "Síl·labes directes CV"}, {"w": "gran", "syl": ["gran"], "tag": "Discriminació b/d"}, {"w": "grana", "syl": ["gra", "na"], "tag": "Discriminació p/q"}, {"w": "granja", "syl": ["gran", "ja"], "tag": "Discriminació m/n"}, {"w": "graó", "syl": ["gra", "ó"], "tag": "Discriminació b/d"}, {"w": "grapa", "syl": ["gra", "pa"], "tag": "Discriminació p/q"}, {"w": "gratitud", "syl": ["gra", "ti", "tud"], "tag": "Discriminació m/n"}, {"w": "greu", "syl": ["greu"], "tag": "Síl·labes directes CV"}, {"w": "grifó", "syl": ["gri", "fó"], "tag": "Discriminació b/d"}, {"w": "grill", "syl": ["grill"], "tag": "Discriminació p/q"}, {"w": "gris", "syl": ["gris"], "tag": "Discriminació m/n"}, {"w": "gronxador", "syl": ["gron", "xa", "dor"], "tag": "Síl·labes directes CV"}, {"w": "grua", "syl": ["gru", "a"], "tag": "Discriminació b/d"}, {"w": "grup", "syl": ["grup"], "tag": "Discriminació p/q"}, {"w": "guant", "syl": ["gu", "ant"], "tag": "Discriminació m/n"}, {"w": "guarda", "syl": ["gu", "ar", "da"], "tag": "Síl·labes directes CV"}, {"w": "guatlla", "syl": ["gu", "at", "lla"], "tag": "Discriminació b/d"}, {"w": "guerra", "syl": ["gu", "er", "ra"], "tag": "Discriminació p/q"}, {"w": "guia", "syl": ["gu", "i", "a"], "tag": "Discriminació m/n"}, {"w": "guineu", "syl": ["gu", "i", "neu"], "tag": "Síl·labes directes CV"}, {"w": "guitarra", "syl": ["gu", "i", "tar", "ra"], "tag": "Discriminació b/d"}, {"w": "gust", "syl": ["gust"], "tag": "Discriminació p/q"}, {"w": "hada", "syl": ["ha", "da"], "tag": "Discriminació m/n"}, {"w": "harmonia", "syl": ["har", "mo", "ni", "a"], "tag": "Síl·labes directes CV"}, {"w": "herba", "syl": ["her", "ba"], "tag": "Discriminació b/d"}, {"w": "hereu", "syl": ["he", "reu"], "tag": "Discriminació p/q"}, {"w": "heroïna", "syl": ["he", "roï", "na"], "tag": "Discriminació m/n"}, {"w": "hivern", "syl": ["hi", "vern"], "tag": "Síl·labes directes CV"}, {"w": "home", "syl": ["ho", "me"], "tag": "Discriminació b/d"}, {"w": "honor", "syl": ["ho", "nor"], "tag": "Discriminació p/q"}, {"w": "horitzontal", "syl": ["ho", "rit", "zon", "tal"], "tag": "Síl·labes directes CV"}, {"w": "hort", "syl": ["hort"], "tag": "Discriminació b/d"}, {"w": "hospital", "syl": ["hos", "pi", "tal"], "tag": "Discriminació p/q"}, {"w": "hotel", "syl": ["ho", "tel"], "tag": "Discriminació m/n"}, {"w": "humil", "syl": ["hu", "mil"], "tag": "Síl·labes directes CV"}, {"w": "humor", "syl": ["hu", "mor"], "tag": "Discriminació b/d"}, {"w": "idioma", "syl": ["i", "di", "o", "ma"], "tag": "Discriminació m/n"}, {"w": "iglú", "syl": ["i", "glú"], "tag": "Síl·labes directes CV"}, {"w": "igual", "syl": ["i", "gu", "al"], "tag": "Discriminació b/d"}, {"w": "il·luminació", "syl": ["il·", "lu", "mi", "na", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "il·lusió", "syl": ["il·", "lu", "si", "ó"], "tag": "Discriminació m/n"}, {"w": "imitació", "syl": ["i", "mi", "ta", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "impacte", "syl": ["im", "pac", "te"], "tag": "Discriminació p/q"}, {"w": "imperi", "syl": ["im", "pe", "ri"], "tag": "Discriminació m/n"}, {"w": "importància", "syl": ["im", "por", "tàn", "ci", "a"], "tag": "Síl·labes directes CV"}, {"w": "impressió", "syl": ["im", "pres", "si", "ó"], "tag": "Discriminació b/d"}, {"w": "impuls", "syl": ["im", "puls"], "tag": "Discriminació p/q"}, {"w": "incendi", "syl": ["in", "cen", "di"], "tag": "Discriminació m/n"}, {"w": "incident", "syl": ["in", "ci", "dent"], "tag": "Síl·labes directes CV"}, {"w": "inclinat", "syl": ["in", "cli", "nat"], "tag": "Discriminació b/d"}, {"w": "inclusió", "syl": ["in", "clu", "si", "ó"], "tag": "Discriminació p/q"}, {"w": "incòmode", "syl": ["in", "cò", "mo", "de"], "tag": "Discriminació m/n"}, {"w": "increïble", "syl": ["in", "creï", "ble"], "tag": "Síl·labes directes CV"}, {"w": "índex", "syl": ["ín", "dex"], "tag": "Discriminació b/d"}, {"w": "indica", "syl": ["in", "di", "ca"], "tag": "Discriminació p/q"}, {"w": "individu", "syl": ["in", "di", "vi", "du"], "tag": "Discriminació m/n"}, {"w": "indústria", "syl": ["in", "dús", "tri", "a"], "tag": "Síl·labes directes CV"}, {"w": "infància", "syl": ["in", "fàn", "ci", "a"], "tag": "Discriminació b/d"}, {"w": "infinit", "syl": ["in", "fi", "nit"], "tag": "Discriminació p/q"}, {"w": "influència", "syl": ["in", "flu", "èn", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "informació", "syl": ["in", "for", "ma", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "ingredient", "syl": ["in", "gre", "di", "ent"], "tag": "Discriminació p/q"}, {"w": "inicial", "syl": ["i", "ni", "ci", "al"], "tag": "Discriminació m/n"}, {"w": "iniciativa", "syl": ["i", "ni", "ci", "a", "ti", "va"], "tag": "Síl·labes directes CV"}, {"w": "injustícia", "syl": ["in", "jus", "tí", "ci", "a"], "tag": "Discriminació b/d"}, {"w": "innocent", "syl": ["in", "no", "cent"], "tag": "Discriminació p/q"}, {"w": "inquietud", "syl": ["in", "qu", "i", "e", "tud"], "tag": "Discriminació m/n"}, {"w": "insecte", "syl": ["in", "sec", "te"], "tag": "Síl·labes directes CV"}, {"w": "insígnia", "syl": ["in", "síg", "ni", "a"], "tag": "Discriminació b/d"}, {"w": "insistència", "syl": ["in", "sis", "tèn", "ci", "a"], "tag": "Discriminació p/q"}, {"w": "inspiració", "syl": ["ins", "pi", "ra", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "instal·lació", "syl": ["ins", "tal·", "la", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "instant", "syl": ["ins", "tant"], "tag": "Discriminació b/d"}, {"w": "institut", "syl": ["ins", "ti", "tut"], "tag": "Discriminació p/q"}, {"w": "instrument", "syl": ["ins", "tru", "ment"], "tag": "Discriminació m/n"}, {"w": "insult", "syl": ["in", "sult"], "tag": "Síl·labes directes CV"}, {"w": "intacte", "syl": ["in", "tac", "te"], "tag": "Discriminació b/d"}, {"w": "intel·ligència", "syl": ["in", "tel·", "li", "gèn", "ci", "a"], "tag": "Discriminació p/q"}, {"w": "intensitat", "syl": ["in", "ten", "si", "tat"], "tag": "Discriminació m/n"}, {"w": "intenció", "syl": ["in", "ten", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "interès", "syl": ["in", "te", "rès"], "tag": "Discriminació b/d"}, {"w": "interior", "syl": ["in", "te", "ri", "or"], "tag": "Discriminació p/q"}, {"w": "internacional", "syl": ["in", "ter", "na", "ci", "o", "nal"], "tag": "Discriminació m/n"}, {"w": "interpretació", "syl": ["in", "ter", "pre", "ta", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "interrogant", "syl": ["in", "ter", "ro", "gant"], "tag": "Discriminació b/d"}, {"w": "interval", "syl": ["in", "ter", "val"], "tag": "Discriminació p/q"}, {"w": "intervenció", "syl": ["in", "ter", "ven", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "intimitat", "syl": ["in", "ti", "mi", "tat"], "tag": "Síl·labes directes CV"}, {"w": "introducció", "syl": ["in", "tro", "duc", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "inundació", "syl": ["i", "nun", "da", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "invenció", "syl": ["in", "ven", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "invent", "syl": ["in", "vent"], "tag": "Síl·labes directes CV"}, {"w": "inversió", "syl": ["in", "ver", "si", "ó"], "tag": "Discriminació b/d"}, {"w": "invitació", "syl": ["in", "vi", "ta", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "ira", "syl": ["i", "ra"], "tag": "Síl·labes directes CV"}, {"w": "ironia", "syl": ["i", "ro", "ni", "a"], "tag": "Discriminació b/d"}, {"w": "jardí", "syl": ["jar", "dí"], "tag": "Discriminació m/n"}, {"w": "jaqueta", "syl": ["ja", "qu", "e", "ta"], "tag": "Síl·labes directes CV"}, {"w": "jersei", "syl": ["jer", "sei"], "tag": "Discriminació b/d"}, {"w": "joc", "syl": ["joc"], "tag": "Discriminació p/q"}, {"w": "joia", "syl": ["joi", "i", "a"], "tag": "Discriminació m/n"}, {"w": "judici", "syl": ["ju", "di", "ci"], "tag": "Discriminació b/d"}, {"w": "jugada", "syl": ["ju", "ga", "da"], "tag": "Discriminació p/q"}, {"w": "juliol", "syl": ["ju", "li", "ol"], "tag": "Síl·labes directes CV"}, {"w": "juny", "syl": ["juny"], "tag": "Discriminació b/d"}, {"w": "jurat", "syl": ["ju", "rat"], "tag": "Discriminació p/q"}, {"w": "justícia", "syl": ["jus", "tí", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "joventut", "syl": ["jo", "ven", "tut"], "tag": "Síl·labes directes CV"}, {"w": "llacuna", "syl": ["lla", "cu", "na"], "tag": "Discriminació m/n"}, {"w": "lladre", "syl": ["lla", "dre"], "tag": "Síl·labes directes CV"}, {"w": "llagosta", "syl": ["lla", "gos", "ta"], "tag": "Discriminació b/d"}, {"w": "llamborda", "syl": ["llam", "bor", "da"], "tag": "Discriminació p/q"}, {"w": "llamp", "syl": ["llamp"], "tag": "Discriminació m/n"}, {"w": "llança", "syl": ["llan", "ça"], "tag": "Discriminació b/d"}, {"w": "llanterna", "syl": ["llan", "ter", "na"], "tag": "Discriminació p/q"}, {"w": "llarg", "syl": ["llarg"], "tag": "Síl·labes directes CV"}, {"w": "llargada", "syl": ["llar", "ga", "da"], "tag": "Discriminació b/d"}, {"w": "llar", "syl": ["llar"], "tag": "Discriminació p/q"}, {"w": "llatí", "syl": ["lla", "tí"], "tag": "Discriminació m/n"}, {"w": "llavor", "syl": ["lla", "vor"], "tag": "Síl·labes directes CV"}, {"w": "lledoner", "syl": ["lle", "do", "ner"], "tag": "Discriminació b/d"}, {"w": "llegenda", "syl": ["lle", "gen", "da"], "tag": "Discriminació p/q"}, {"w": "llegum", "syl": ["lle", "gum"], "tag": "Discriminació m/n"}, {"w": "llei", "syl": ["llei"], "tag": "Síl·labes directes CV"}, {"w": "llençol", "syl": ["llen", "çol"], "tag": "Discriminació b/d"}, {"w": "llengua", "syl": ["llen", "gu", "a"], "tag": "Discriminació p/q"}, {"w": "llenya", "syl": ["lle", "nya"], "tag": "Discriminació m/n"}, {"w": "lleó", "syl": ["lle", "ó"], "tag": "Síl·labes directes CV"}, {"w": "lleona", "syl": ["lle", "o", "na"], "tag": "Discriminació b/d"}, {"w": "lletra", "syl": ["lle", "tra"], "tag": "Discriminació p/q"}, {"w": "llevat", "syl": ["lle", "vat"], "tag": "Discriminació m/n"}, {"w": "llibreta", "syl": ["lli", "bre", "ta"], "tag": "Síl·labes directes CV"}, {"w": "llicència", "syl": ["lli", "cèn", "ci", "a"], "tag": "Discriminació b/d"}, {"w": "lliga", "syl": ["lli", "ga"], "tag": "Discriminació p/q"}, {"w": "llimona", "syl": ["lli", "mo", "na"], "tag": "Discriminació m/n"}, {"w": "llinatge", "syl": ["lli", "nat", "ge"], "tag": "Síl·labes directes CV"}, {"w": "llis", "syl": ["llis"], "tag": "Discriminació p/q"}, {"w": "llista", "syl": ["llis", "ta"], "tag": "Discriminació m/n"}, {"w": "llit", "syl": ["llit"], "tag": "Síl·labes directes CV"}, {"w": "llogaret", "syl": ["llo", "ga", "ret"], "tag": "Discriminació m/n"}, {"w": "lloguer", "syl": ["llo", "gu", "er"], "tag": "Síl·labes directes CV"}, {"w": "lluny", "syl": ["lluny"], "tag": "Discriminació p/q"}, {"w": "mestra", "syl": ["mes", "tra"], "tag": "Discriminació b/d"}, {"w": "magatzem", "syl": ["ma", "gat", "zem"], "tag": "Discriminació p/q"}, {"w": "magnífica", "syl": ["mag", "ní", "fi", "ca"], "tag": "Síl·labes directes CV"}, {"w": "malalt", "syl": ["ma", "lalt"], "tag": "Discriminació b/d"}, {"w": "malícia", "syl": ["ma", "lí", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "manament", "syl": ["ma", "na", "ment"], "tag": "Discriminació p/q"}, {"w": "manca", "syl": ["man", "ca"], "tag": "Discriminació m/n"}, {"w": "mànec", "syl": ["mà", "nec"], "tag": "Síl·labes directes CV"}, {"w": "mantega", "syl": ["man", "te", "ga"], "tag": "Discriminació b/d"}, {"w": "manual", "syl": ["ma", "nu", "al"], "tag": "Discriminació p/q"}, {"w": "màquina", "syl": ["mà", "qu", "i", "na"], "tag": "Síl·labes directes CV"}, {"w": "mar", "syl": ["mar"], "tag": "Discriminació b/d"}, {"w": "meravella", "syl": ["me", "ra", "ve", "lla"], "tag": "Discriminació p/q"}, {"w": "marca", "syl": ["mar", "ca"], "tag": "Discriminació m/n"}, {"w": "marxa", "syl": ["mar", "xa"], "tag": "Síl·labes directes CV"}, {"w": "marea", "syl": ["ma", "re", "a"], "tag": "Discriminació p/q"}, {"w": "marge", "syl": ["mar", "ge"], "tag": "Discriminació m/n"}, {"w": "mariner", "syl": ["ma", "ri", "ner"], "tag": "Discriminació b/d"}, {"w": "marbre", "syl": ["mar", "bre"], "tag": "Discriminació p/q"}, {"w": "marquès", "syl": ["mar", "qu", "ès"], "tag": "Discriminació m/n"}, {"w": "matèria", "syl": ["ma", "tè", "ri", "a"], "tag": "Discriminació m/n"}, {"w": "matrícula", "syl": ["ma", "trí", "cu", "la"], "tag": "Discriminació b/d"}, {"w": "matrimoni", "syl": ["ma", "tri", "mo", "ni"], "tag": "Discriminació p/q"}, {"w": "màxim", "syl": ["mà", "xim"], "tag": "Discriminació m/n"}, {"w": "mecànica", "syl": ["me", "cà", "ni", "ca"], "tag": "Síl·labes directes CV"}, {"w": "medicina", "syl": ["me", "di", "ci", "na"], "tag": "Discriminació p/q"}, {"w": "medusa", "syl": ["me", "du", "sa"], "tag": "Discriminació m/n"}, {"w": "mel", "syl": ["mel"], "tag": "Síl·labes directes CV"}, {"w": "melodia", "syl": ["me", "lo", "di", "a"], "tag": "Discriminació b/d"}, {"w": "membre", "syl": ["mem", "bre"], "tag": "Discriminació m/n"}, {"w": "memòria", "syl": ["me", "mò", "ri", "a"], "tag": "Síl·labes directes CV"}, {"w": "menjar", "syl": ["men", "jar"], "tag": "Discriminació p/q"}, {"w": "ment", "syl": ["ment"], "tag": "Discriminació m/n"}, {"w": "mentida", "syl": ["men", "ti", "da"], "tag": "Síl·labes directes CV"}, {"w": "mercat", "syl": ["mer", "cat"], "tag": "Discriminació b/d"}, {"w": "merescuda", "syl": ["me", "res", "cu", "da"], "tag": "Discriminació p/q"}, {"w": "mèrit", "syl": ["mè", "rit"], "tag": "Discriminació m/n"}, {"w": "mesura", "syl": ["me", "su", "ra"], "tag": "Síl·labes directes CV"}, {"w": "metall", "syl": ["me", "tall"], "tag": "Discriminació b/d"}, {"w": "meteorit", "syl": ["me", "te", "o", "rit"], "tag": "Discriminació p/q"}, {"w": "mètode", "syl": ["mè", "to", "de"], "tag": "Discriminació m/n"}, {"w": "metre", "syl": ["me", "tre"], "tag": "Síl·labes directes CV"}, {"w": "micròfon", "syl": ["mi", "crò", "fon"], "tag": "Discriminació p/q"}, {"w": "migdia", "syl": ["mig", "di", "a"], "tag": "Discriminació m/n"}, {"w": "migració", "syl": ["mi", "gra", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "miracle", "syl": ["mi", "ra", "cle"], "tag": "Discriminació b/d"}, {"w": "miler", "syl": ["mi", "ler"], "tag": "Discriminació p/q"}, {"w": "militar", "syl": ["mi", "li", "tar"], "tag": "Discriminació m/n"}, {"w": "mineral", "syl": ["mi", "ne", "ral"], "tag": "Discriminació b/d"}, {"w": "mínim", "syl": ["mí", "nim"], "tag": "Discriminació p/q"}, {"w": "ministre", "syl": ["mi", "nis", "tre"], "tag": "Discriminació m/n"}, {"w": "minoria", "syl": ["mi", "no", "ri", "a"], "tag": "Síl·labes directes CV"}, {"w": "minut", "syl": ["mi", "nut"], "tag": "Discriminació b/d"}, {"w": "mirada", "syl": ["mi", "ra", "da"], "tag": "Discriminació m/n"}, {"w": "mirall", "syl": ["mi", "rall"], "tag": "Síl·labes directes CV"}, {"w": "misèria", "syl": ["mi", "sè", "ri", "a"], "tag": "Discriminació b/d"}, {"w": "missatge", "syl": ["mis", "sat", "ge"], "tag": "Discriminació p/q"}, {"w": "missió", "syl": ["mis", "si", "ó"], "tag": "Discriminació m/n"}, {"w": "mística", "syl": ["mís", "ti", "ca"], "tag": "Síl·labes directes CV"}, {"w": "mitja", "syl": ["mit", "ja"], "tag": "Discriminació b/d"}, {"w": "mitjana", "syl": ["mit", "ja", "na"], "tag": "Discriminació p/q"}, {"w": "mòbil", "syl": ["mò", "bil"], "tag": "Discriminació m/n"}, {"w": "model", "syl": ["mo", "del"], "tag": "Discriminació b/d"}, {"w": "modesta", "syl": ["mo", "des", "ta"], "tag": "Discriminació p/q"}, {"w": "mòdul", "syl": ["mò", "dul"], "tag": "Discriminació m/n"}, {"w": "mofeta", "syl": ["mo", "fe", "ta"], "tag": "Síl·labes directes CV"}, {"w": "molla", "syl": ["mo", "lla"], "tag": "Discriminació b/d"}, {"w": "molí", "syl": ["mo", "lí"], "tag": "Discriminació p/q"}, {"w": "molt", "syl": ["molt"], "tag": "Síl·labes directes CV"}, {"w": "moment", "syl": ["mo", "ment"], "tag": "Discriminació b/d"}, {"w": "monarca", "syl": ["mo", "nar", "ca"], "tag": "Discriminació p/q"}, {"w": "monestir", "syl": ["mo", "nes", "tir"], "tag": "Síl·labes directes CV"}, {"w": "monja", "syl": ["mon", "ja"], "tag": "Discriminació b/d"}, {"w": "mono", "syl": ["mo", "no"], "tag": "Discriminació p/q"}, {"w": "monstre", "syl": ["mons", "tre"], "tag": "Discriminació m/n"}, {"w": "monument", "syl": ["mo", "nu", "ment"], "tag": "Discriminació b/d"}, {"w": "moral", "syl": ["mo", "ral"], "tag": "Discriminació m/n"}, {"w": "mosquit", "syl": ["mos", "qu", "it"], "tag": "Discriminació b/d"}, {"w": "motiu", "syl": ["mo", "ti", "u"], "tag": "Discriminació p/q"}, {"w": "moviments", "syl": ["mo", "vi", "ments"], "tag": "Síl·labes directes CV"}, {"w": "mucositat", "syl": ["mu", "co", "si", "tat"], "tag": "Discriminació b/d"}, {"w": "muda", "syl": ["mu", "da"], "tag": "Discriminació p/q"}, {"w": "mulla", "syl": ["mu", "lla"], "tag": "Discriminació m/n"}, {"w": "multa", "syl": ["mul", "ta"], "tag": "Síl·labes directes CV"}, {"w": "multitud", "syl": ["mul", "ti", "tud"], "tag": "Discriminació b/d"}, {"w": "muralla", "syl": ["mu", "ra", "lla"], "tag": "Discriminació p/q"}, {"w": "ratpenat", "syl": ["rat", "pe", "nat"], "tag": "Discriminació m/n"}, {"w": "múscul", "syl": ["mús", "cul"], "tag": "Síl·labes directes CV"}, {"w": "museu", "syl": ["mu", "seu"], "tag": "Discriminació b/d"}, {"w": "mutació", "syl": ["mu", "ta", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "nació", "syl": ["na", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "nadal", "syl": ["na", "dal"], "tag": "Discriminació p/q"}, {"w": "nadala", "syl": ["na", "da", "la"], "tag": "Discriminació m/n"}, {"w": "naufragi", "syl": ["nau", "fra", "gi"], "tag": "Discriminació b/d"}, {"w": "navegació", "syl": ["na", "ve", "ga", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "nebulosa", "syl": ["ne", "bu", "lo", "sa"], "tag": "Discriminació b/d"}, {"w": "necessitat", "syl": ["ne", "ces", "si", "tat"], "tag": "Discriminació p/q"}, {"w": "nega", "syl": ["ne", "ga"], "tag": "Discriminació m/n"}, {"w": "nervi", "syl": ["ner", "vi"], "tag": "Discriminació b/d"}, {"w": "nicolau", "syl": ["ni", "co", "lau"], "tag": "Discriminació b/d"}, {"w": "ningú", "syl": ["nin", "gú"], "tag": "Discriminació m/n"}, {"w": "nivell", "syl": ["ni", "vell"], "tag": "Síl·labes directes CV"}, {"w": "noble", "syl": ["no", "ble"], "tag": "Discriminació b/d"}, {"w": "noces", "syl": ["no", "ces"], "tag": "Discriminació p/q"}, {"w": "nocturna", "syl": ["noc", "tur", "na"], "tag": "Discriminació m/n"}, {"w": "nombre", "syl": ["nom", "bre"], "tag": "Discriminació p/q"}, {"w": "nord", "syl": ["nord"], "tag": "Discriminació m/n"}, {"w": "normal", "syl": ["nor", "mal"], "tag": "Discriminació b/d"}, {"w": "notícia", "syl": ["no", "tí", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "oasi", "syl": ["o", "a", "si"], "tag": "Discriminació b/d"}, {"w": "objecte", "syl": ["ob", "jec", "te"], "tag": "Discriminació p/q"}, {"w": "obligació", "syl": ["o", "bli", "ga", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "obra", "syl": ["o", "bra"], "tag": "Síl·labes directes CV"}, {"w": "obrer", "syl": ["o", "brer"], "tag": "Discriminació b/d"}, {"w": "obscuritat", "syl": ["obs", "cu", "ri", "tat"], "tag": "Discriminació p/q"}, {"w": "observació", "syl": ["ob", "ser", "va", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "obstacle", "syl": ["obs", "ta", "cle"], "tag": "Síl·labes directes CV"}, {"w": "ocasió", "syl": ["o", "ca", "si", "ó"], "tag": "Discriminació b/d"}, {"w": "occident", "syl": ["oc", "ci", "dent"], "tag": "Discriminació p/q"}, {"w": "oceà", "syl": ["o", "ce", "à"], "tag": "Discriminació m/n"}, {"w": "oci", "syl": ["o", "ci"], "tag": "Síl·labes directes CV"}, {"w": "ofici", "syl": ["o", "fi", "ci"], "tag": "Síl·labes directes CV"}, {"w": "ofrena", "syl": ["o", "fre", "na"], "tag": "Discriminació b/d"}, {"w": "oïda", "syl": ["oï", "da"], "tag": "Discriminació p/q"}, {"w": "oliva", "syl": ["o", "li", "va"], "tag": "Síl·labes directes CV"}, {"w": "ombra", "syl": ["om", "bra"], "tag": "Discriminació p/q"}, {"w": "onada", "syl": ["o", "na", "da"], "tag": "Síl·labes directes CV"}, {"w": "oncle", "syl": ["on", "cle"], "tag": "Discriminació b/d"}, {"w": "operació", "syl": ["o", "pe", "ra", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "opinió", "syl": ["o", "pi", "ni", "ó"], "tag": "Síl·labes directes CV"}, {"w": "oportunitat", "syl": ["o", "por", "tu", "ni", "tat"], "tag": "Discriminació b/d"}, {"w": "oposició", "syl": ["o", "po", "si", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "oració", "syl": ["o", "ra", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "òrbita", "syl": ["òr", "bi", "ta"], "tag": "Síl·labes directes CV"}, {"w": "ordre", "syl": ["or", "dre"], "tag": "Discriminació b/d"}, {"w": "organització", "syl": ["or", "ga", "nit", "za", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "orgull", "syl": ["or", "gull"], "tag": "Síl·labes directes CV"}, {"w": "orient", "syl": ["o", "ri", "ent"], "tag": "Discriminació b/d"}, {"w": "origen", "syl": ["o", "ri", "gen"], "tag": "Discriminació p/q"}, {"w": "orquestra", "syl": ["or", "qu", "es", "tra"], "tag": "Discriminació m/n"}, {"w": "ortografia", "syl": ["or", "to", "gra", "fi", "a"], "tag": "Síl·labes directes CV"}, {"w": "os", "syl": ["os"], "tag": "Discriminació p/q"}, {"w": "ostentació", "syl": ["os", "ten", "ta", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "ostra", "syl": ["os", "tra"], "tag": "Discriminació b/d"}, {"w": "òxid", "syl": ["ò", "xid"], "tag": "Síl·labes directes CV"}, {"w": "oxigen", "syl": ["o", "xi", "gen"], "tag": "Discriminació b/d"}, {"w": "paciència", "syl": ["pa", "ci", "èn", "ci", "a"], "tag": "Discriminació p/q"}, {"w": "pacte", "syl": ["pac", "te"], "tag": "Discriminació m/n"}, {"w": "padrina", "syl": ["pa", "dri", "na"], "tag": "Síl·labes directes CV"}, {"w": "país", "syl": ["pa", "ís"], "tag": "Discriminació p/q"}, {"w": "paisatge", "syl": ["pai", "sat", "ge"], "tag": "Discriminació m/n"}, {"w": "palla", "syl": ["pa", "lla"], "tag": "Síl·labes directes CV"}, {"w": "pallasso", "syl": ["pa", "llas", "so"], "tag": "Discriminació b/d"}, {"w": "pànic", "syl": ["pà", "nic"], "tag": "Discriminació p/q"}, {"w": "pantalla", "syl": ["pan", "ta", "lla"], "tag": "Discriminació m/n"}, {"w": "pantofla", "syl": ["pan", "to", "fla"], "tag": "Síl·labes directes CV"}, {"w": "paquet", "syl": ["pa", "qu", "et"], "tag": "Discriminació m/n"}, {"w": "paracaigudes", "syl": ["pa", "ra", "cai", "gu", "des"], "tag": "Síl·labes directes CV"}, {"w": "parada", "syl": ["pa", "ra", "da"], "tag": "Discriminació b/d"}, {"w": "paradís", "syl": ["pa", "ra", "dís"], "tag": "Discriminació p/q"}, {"w": "paraigua", "syl": ["pa", "rai", "gu", "a"], "tag": "Discriminació m/n"}, {"w": "paral·lel", "syl": ["pa", "ral·", "lel"], "tag": "Síl·labes directes CV"}, {"w": "parany", "syl": ["pa", "rany"], "tag": "Discriminació b/d"}, {"w": "parcel·la", "syl": ["par", "cel·", "la"], "tag": "Discriminació m/n"}, {"w": "pare", "syl": ["pa", "re"], "tag": "Síl·labes directes CV"}, {"w": "parlar", "syl": ["par", "lar"], "tag": "Discriminació p/q"}, {"w": "parpella", "syl": ["par", "pe", "lla"], "tag": "Discriminació m/n"}, {"w": "parc", "syl": ["parc"], "tag": "Síl·labes directes CV"}, {"w": "partícula", "syl": ["par", "tí", "cu", "la"], "tag": "Discriminació p/q"}, {"w": "partida", "syl": ["par", "ti", "da"], "tag": "Discriminació m/n"}, {"w": "passadís", "syl": ["pas", "sa", "dís"], "tag": "Síl·labes directes CV"}, {"w": "passatge", "syl": ["pas", "sat", "ge"], "tag": "Discriminació b/d"}, {"w": "passat", "syl": ["pas", "sat"], "tag": "Discriminació p/q"}, {"w": "passeig", "syl": ["pas", "seig"], "tag": "Discriminació m/n"}, {"w": "passió", "syl": ["pas", "si", "ó"], "tag": "Síl·labes directes CV"}, {"w": "pastura", "syl": ["pas", "tu", "ra"], "tag": "Discriminació m/n"}, {"w": "pati", "syl": ["pa", "ti"], "tag": "Discriminació b/d"}, {"w": "patiment", "syl": ["pa", "ti", "ment"], "tag": "Discriminació p/q"}, {"w": "pàtria", "syl": ["pà", "tri", "a"], "tag": "Discriminació m/n"}, {"w": "patró", "syl": ["pa", "tró"], "tag": "Síl·labes directes CV"}, {"w": "pausa", "syl": ["pau", "sa"], "tag": "Discriminació b/d"}, {"w": "paviment", "syl": ["pa", "vi", "ment"], "tag": "Discriminació p/q"}, {"w": "pecat", "syl": ["pe", "cat"], "tag": "Síl·labes directes CV"}, {"w": "pedra", "syl": ["pe", "dra"], "tag": "Discriminació p/q"}, {"w": "pèndol", "syl": ["pèn", "dol"], "tag": "Discriminació m/n"}, {"w": "penya", "syl": ["pe", "nya"], "tag": "Síl·labes directes CV"}, {"w": "percepció", "syl": ["per", "cep", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "pèrdua", "syl": ["pèr", "du", "a"], "tag": "Discriminació m/n"}, {"w": "peresa", "syl": ["pe", "re", "sa"], "tag": "Síl·labes directes CV"}, {"w": "perfecció", "syl": ["per", "fec", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "perfil", "syl": ["per", "fil"], "tag": "Discriminació p/q"}, {"w": "perfum", "syl": ["per", "fum"], "tag": "Discriminació m/n"}, {"w": "perill", "syl": ["pe", "rill"], "tag": "Síl·labes directes CV"}, {"w": "període", "syl": ["pe", "rí", "o", "de"], "tag": "Discriminació b/d"}, {"w": "permanència", "syl": ["per", "ma", "nèn", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "permís", "syl": ["per", "mís"], "tag": "Síl·labes directes CV"}, {"w": "persona", "syl": ["per", "so", "na"], "tag": "Discriminació b/d"}, {"w": "perspectiva", "syl": ["pers", "pec", "ti", "va"], "tag": "Discriminació p/q"}, {"w": "pertany", "syl": ["per", "tany"], "tag": "Discriminació m/n"}, {"w": "pes", "syl": ["pes"], "tag": "Síl·labes directes CV"}, {"w": "pesada", "syl": ["pe", "sa", "da"], "tag": "Discriminació b/d"}, {"w": "pescador", "syl": ["pes", "ca", "dor"], "tag": "Discriminació p/q"}, {"w": "pestanya", "syl": ["pes", "ta", "nya"], "tag": "Síl·labes directes CV"}, {"w": "petició", "syl": ["pe", "ti", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "petjada", "syl": ["pet", "ja", "da"], "tag": "Discriminació m/n"}, {"w": "peus", "syl": ["peus"], "tag": "Síl·labes directes CV"}, {"w": "piano", "syl": ["pi", "a", "no"], "tag": "Discriminació b/d"}, {"w": "picada", "syl": ["pi", "ca", "da"], "tag": "Discriminació p/q"}, {"w": "piscina", "syl": ["pis", "ci", "na"], "tag": "Discriminació m/n"}, {"w": "pictòric", "syl": ["pic", "tò", "ric"], "tag": "Síl·labes directes CV"}, {"w": "peça", "syl": ["pe", "ça"], "tag": "Discriminació p/q"}, {"w": "pigota", "syl": ["pi", "go", "ta"], "tag": "Discriminació m/n"}, {"w": "pilot", "syl": ["pi", "lot"], "tag": "Discriminació b/d"}, {"w": "pinacle", "syl": ["pi", "na", "cle"], "tag": "Discriminació m/n"}, {"w": "pincell", "syl": ["pin", "cell"], "tag": "Síl·labes directes CV"}, {"w": "pinya", "syl": ["pi", "nya"], "tag": "Discriminació p/q"}, {"w": "piràmide", "syl": ["pi", "rà", "mi", "de"], "tag": "Síl·labes directes CV"}, {"w": "pistola", "syl": ["pis", "to", "la"], "tag": "Síl·labes directes CV"}, {"w": "pitjor", "syl": ["pit", "jor"], "tag": "Discriminació b/d"}, {"w": "placer", "syl": ["pla", "cer"], "tag": "Discriminació m/n"}, {"w": "planeta", "syl": ["pla", "ne", "ta"], "tag": "Discriminació b/d"}, {"w": "plataforma", "syl": ["pla", "ta", "for", "ma"], "tag": "Síl·labes directes CV"}, {"w": "plaer", "syl": ["pla", "er"], "tag": "Discriminació p/q"}, {"w": "plega", "syl": ["ple", "ga"], "tag": "Discriminació m/n"}, {"w": "plor", "syl": ["plor"], "tag": "Discriminació b/d"}, {"w": "pluja", "syl": ["plu", "ja"], "tag": "Discriminació p/q"}, {"w": "població", "syl": ["po", "bla", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "poder", "syl": ["po", "der"], "tag": "Discriminació p/q"}, {"w": "poesia", "syl": ["po", "e", "si", "a"], "tag": "Síl·labes directes CV"}, {"w": "poeta", "syl": ["po", "e", "ta"], "tag": "Discriminació b/d"}, {"w": "polar", "syl": ["po", "lar"], "tag": "Discriminació p/q"}, {"w": "policia", "syl": ["po", "li", "ci", "a"], "tag": "Discriminació m/n"}, {"w": "polsera", "syl": ["pol", "se", "ra"], "tag": "Discriminació p/q"}, {"w": "pólvora", "syl": ["pól", "vo", "ra"], "tag": "Discriminació m/n"}, {"w": "pont", "syl": ["pont"], "tag": "Discriminació p/q"}, {"w": "popular", "syl": ["po", "pu", "lar"], "tag": "Discriminació m/n"}, {"w": "porció", "syl": ["por", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "portal", "syl": ["por", "tal"], "tag": "Discriminació m/n"}, {"w": "porter", "syl": ["por", "ter"], "tag": "Síl·labes directes CV"}, {"w": "pòrtic", "syl": ["pòr", "tic"], "tag": "Discriminació b/d"}, {"w": "posició", "syl": ["po", "si", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "possessió", "syl": ["pos", "ses", "si", "ó"], "tag": "Discriminació m/n"}, {"w": "posta", "syl": ["pos", "ta"], "tag": "Síl·labes directes CV"}, {"w": "postal", "syl": ["pos", "tal"], "tag": "Discriminació b/d"}, {"w": "postres", "syl": ["pos", "tres"], "tag": "Discriminació p/q"}, {"w": "potència", "syl": ["po", "tèn", "ci", "a"], "tag": "Síl·labes directes CV"}, {"w": "pràctica", "syl": ["pràc", "ti", "ca"], "tag": "Discriminació p/q"}, {"w": "preciosa", "syl": ["pre", "ci", "o", "sa"], "tag": "Discriminació m/n"}, {"w": "precisió", "syl": ["pre", "ci", "si", "ó"], "tag": "Síl·labes directes CV"}, {"w": "predicció", "syl": ["pre", "dic", "ci", "ó"], "tag": "Discriminació b/d"}, {"w": "pregunta", "syl": ["pre", "gun", "ta"], "tag": "Discriminació p/q"}, {"w": "premi", "syl": ["pre", "mi"], "tag": "Discriminació m/n"}, {"w": "premsa", "syl": ["prem", "sa"], "tag": "Síl·labes directes CV"}, {"w": "presa", "syl": ["pre", "sa"], "tag": "Discriminació b/d"}, {"w": "presència", "syl": ["pre", "sèn", "ci", "a"], "tag": "Discriminació p/q"}, {"w": "president", "syl": ["pre", "si", "dent"], "tag": "Discriminació m/n"}, {"w": "pressió", "syl": ["pres", "si", "ó"], "tag": "Síl·labes directes CV"}, {"w": "préstec", "syl": ["prés", "tec"], "tag": "Discriminació b/d"}, {"w": "pretensió", "syl": ["pre", "ten", "si", "ó"], "tag": "Discriminació p/q"}, {"w": "primavera", "syl": ["pri", "ma", "ve", "ra"], "tag": "Discriminació m/n"}, {"w": "primer", "syl": ["pri", "mer"], "tag": "Síl·labes directes CV"}, {"w": "principi", "syl": ["prin", "ci", "pi"], "tag": "Discriminació p/q"}, {"w": "prioritat", "syl": ["pri", "o", "ri", "tat"], "tag": "Discriminació m/n"}, {"w": "presó", "syl": ["pre", "só"], "tag": "Síl·labes directes CV"}, {"w": "privada", "syl": ["pri", "va", "da"], "tag": "Discriminació b/d"}, {"w": "privilegi", "syl": ["pri", "vi", "le", "gi"], "tag": "Discriminació p/q"}, {"w": "problema", "syl": ["pro", "ble", "ma"], "tag": "Discriminació m/n"}, {"w": "procediment", "syl": ["pro", "ce", "di", "ment"], "tag": "Síl·labes directes CV"}, {"w": "procés", "syl": ["pro", "cés"], "tag": "Discriminació b/d"}, {"w": "producció", "syl": ["pro", "duc", "ci", "ó"], "tag": "Discriminació p/q"}, {"w": "producte", "syl": ["pro", "duc", "te"], "tag": "Discriminació m/n"}, {"w": "professor", "syl": ["pro", "fes", "sor"], "tag": "Síl·labes directes CV"}, {"w": "profunditat", "syl": ["pro", "fun", "di", "tat"], "tag": "Discriminació b/d"}, {"w": "programa", "syl": ["pro", "gra", "ma"], "tag": "Discriminació p/q"}, {"w": "progrés", "syl": ["pro", "grés"], "tag": "Discriminació m/n"}, {"w": "prohibició", "syl": ["pro", "hi", "bi", "ci", "ó"], "tag": "Síl·labes directes CV"}, {"w": "projecte", "syl": ["pro", "jec", "te"], "tag": "Discriminació b/d"}, {"w": "promesa", "syl": ["pro", "me", "sa"], "tag": "Discriminació p/q"}, {"w": "pronòstic", "syl": ["pro", "nòs", "tic"], "tag": "Discriminació m/n"}, {"w": "província", "syl": ["pro", "vín", "ci", "a"], "tag": "Discriminació b/d"}, {"w": "proximitat", "syl": ["pro", "xi", "mi", "tat"], "tag": "Discriminació p/q"}, {"w": "publicació", "syl": ["pu", "bli", "ca", "ci", "ó"], "tag": "Discriminació m/n"}, {"w": "publicitat", "syl": ["pu", "bli", "ci", "tat"], "tag": "Síl·labes directes CV"}, {"w": "pudor", "syl": ["pu", "dor"], "tag": "Discriminació b/d"}, {"w": "pulmó", "syl": ["pul", "mó"], "tag": "Discriminació m/n"}, {"w": "puntada", "syl": ["pun", "ta", "da"], "tag": "Discriminació b/d"}, {"w": "puresa", "syl": ["pu", "re", "sa"], "tag": "Discriminació m/n"}], "2": [{"w": "arbre", "syl": ["ar", "bre"], "tag": "Síl·labes inverses VC"}, {"w": "espelma", "syl": ["es", "pel", "ma"], "tag": "Síl·labes mixtes CVC"}, {"w": "formiga", "syl": ["for", "mi", "ga"], "tag": "Síl·labes mixtes CVC"}, {"w": "pastís", "syl": ["pas", "tís"], "tag": "Síl·labes mixtes CVC"}, {"w": "armari", "syl": ["ar", "ma", "ri"], "tag": "Síl·labes inverses VC"}, {"w": "escola", "syl": ["es", "co", "la"], "tag": "Síl·labes inverses VC"}, {"w": "llapis", "syl": ["lla", "pis"], "tag": "Síl·labes mixtes CVC"}, {"w": "castell", "syl": ["cas", "tell"], "tag": "Síl·labes mixtes CVC"}, {"w": "barco", "syl": ["bar", "co"], "tag": "Consonants finals"}, {"w": "porta", "syl": ["por", "ta"], "tag": "Síl·labes inverses VC"}, {"w": "finestra", "syl": ["fi", "nes", "tra"], "tag": "Síl·labes mixtes CVC"}, {"w": "martell", "syl": ["mar", "tell"], "tag": "Consonants finals"}, {"w": "elefant", "syl": ["e", "le", "fant"], "tag": "Síl·labes inverses VC"}, {"w": "cargol", "syl": ["car", "gol"], "tag": "Síl·labes mixtes CVC"}, {"w": "tardor", "syl": ["tar", "dor"], "tag": "Consonants finals"}, {"w": "abric", "syl": ["a", "bric"], "tag": "Síl·labes inverses VC"}, {"w": "absència", "syl": ["ab", "sèn", "ci", "a"], "tag": "Síl·labes mixtes CVC"}, {"w": "accent", "syl": ["ac", "cent"], "tag": "Consonants finals"}, {"w": "acceptar", "syl": ["ac", "cep", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "acord", "syl": ["a", "cord"], "tag": "Síl·labes mixtes CVC"}, {"w": "actor", "syl": ["ac", "tor"], "tag": "Consonants finals"}, {"w": "actual", "syl": ["ac", "tu", "al"], "tag": "Síl·labes inverses VC"}, {"w": "adaptar", "syl": ["a", "dap", "tar"], "tag": "Síl·labes mixtes CVC"}, {"w": "admirar", "syl": ["ad", "mi", "rar"], "tag": "Consonants finals"}, {"w": "adoptar", "syl": ["a", "dop", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "adults", "syl": ["a", "dults"], "tag": "Síl·labes mixtes CVC"}, {"w": "advertir", "syl": ["ad", "ver", "tir"], "tag": "Consonants finals"}, {"w": "afecte", "syl": ["a", "fec", "te"], "tag": "Síl·labes inverses VC"}, {"w": "afegir", "syl": ["a", "fe", "gir"], "tag": "Síl·labes mixtes CVC"}, {"w": "agafar", "syl": ["a", "ga", "far"], "tag": "Consonants finals"}, {"w": "agulla", "syl": ["a", "gu", "lla"], "tag": "Síl·labes inverses VC"}, {"w": "aire", "syl": ["ai", "re"], "tag": "Síl·labes mixtes CVC"}, {"w": "aixeta", "syl": ["ai", "xe", "ta"], "tag": "Consonants finals"}, {"w": "ajustar", "syl": ["a", "jus", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "alarma", "syl": ["a", "lar", "ma"], "tag": "Síl·labes mixtes CVC"}, {"w": "àlbum", "syl": ["àl", "bum"], "tag": "Consonants finals"}, {"w": "alcalde", "syl": ["al", "cal", "de"], "tag": "Síl·labes inverses VC"}, {"w": "alcova", "syl": ["al", "co", "va"], "tag": "Síl·labes mixtes CVC"}, {"w": "alegria", "syl": ["a", "le", "gri", "a"], "tag": "Consonants finals"}, {"w": "alerta", "syl": ["a", "ler", "ta"], "tag": "Síl·labes inverses VC"}, {"w": "alfabètic", "syl": ["al", "fa", "bè", "tic"], "tag": "Síl·labes mixtes CVC"}, {"w": "cotó", "syl": ["co", "tó"], "tag": "Consonants finals"}, {"w": "alimentar", "syl": ["a", "li", "men", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "allargar", "syl": ["a", "llar", "gar"], "tag": "Síl·labes mixtes CVC"}, {"w": "alliberar", "syl": ["a", "lli", "be", "rar"], "tag": "Consonants finals"}, {"w": "allunyar", "syl": ["a", "llu", "nyar"], "tag": "Síl·labes inverses VC"}, {"w": "almena", "syl": ["al", "me", "na"], "tag": "Síl·labes mixtes CVC"}, {"w": "almogàver", "syl": ["al", "mo", "gà", "ver"], "tag": "Consonants finals"}, {"w": "alpargata", "syl": ["al", "par", "ga", "ta"], "tag": "Síl·labes inverses VC"}, {"w": "altar", "syl": ["al", "tar"], "tag": "Síl·labes mixtes CVC"}, {"w": "alternar", "syl": ["al", "ter", "nar"], "tag": "Consonants finals"}, {"w": "alçada", "syl": ["al", "ça", "da"], "tag": "Síl·labes inverses VC"}, {"w": "amable", "syl": ["a", "ma", "ble"], "tag": "Síl·labes mixtes CVC"}, {"w": "amagatall", "syl": ["a", "ma", "ga", "tall"], "tag": "Consonants finals"}, {"w": "amanida", "syl": ["a", "ma", "ni", "da"], "tag": "Síl·labes inverses VC"}, {"w": "amant", "syl": ["a", "mant"], "tag": "Síl·labes mixtes CVC"}, {"w": "amarg", "syl": ["a", "marg"], "tag": "Consonants finals"}, {"w": "ambient", "syl": ["am", "bi", "ent"], "tag": "Síl·labes inverses VC"}, {"w": "ambició", "syl": ["am", "bi", "ci", "ó"], "tag": "Síl·labes mixtes CVC"}, {"w": "ambulància", "syl": ["am", "bu", "làn", "ci", "a"], "tag": "Consonants finals"}, {"w": "amenaça", "syl": ["a", "me", "na", "ça"], "tag": "Síl·labes inverses VC"}, {"w": "amistat", "syl": ["a", "mis", "tat"], "tag": "Síl·labes mixtes CVC"}, {"w": "amor", "syl": ["a", "mor"], "tag": "Consonants finals"}, {"w": "amplada", "syl": ["am", "pla", "da"], "tag": "Síl·labes inverses VC"}, {"w": "ample", "syl": ["am", "ple"], "tag": "Síl·labes mixtes CVC"}, {"w": "ampolla", "syl": ["am", "po", "lla"], "tag": "Consonants finals"}, {"w": "analitzar", "syl": ["a", "na", "lit", "zar"], "tag": "Síl·labes inverses VC"}, {"w": "anar", "syl": ["a", "nar"], "tag": "Síl·labes mixtes CVC"}, {"w": "ancià", "syl": ["an", "ci", "à"], "tag": "Consonants finals"}, {"w": "àncora", "syl": ["àn", "co", "ra"], "tag": "Síl·labes inverses VC"}, {"w": "ànec", "syl": ["à", "nec"], "tag": "Síl·labes mixtes CVC"}, {"w": "anell", "syl": ["a", "nell"], "tag": "Consonants finals"}, {"w": "àngel", "syl": ["àn", "gel"], "tag": "Síl·labes inverses VC"}, {"w": "angle", "syl": ["an", "gle"], "tag": "Síl·labes mixtes CVC"}, {"w": "angoixa", "syl": ["an", "goi", "xa"], "tag": "Consonants finals"}, {"w": "animal", "syl": ["a", "ni", "mal"], "tag": "Síl·labes inverses VC"}, {"w": "animar", "syl": ["a", "ni", "mar"], "tag": "Síl·labes mixtes CVC"}, {"w": "aniversari", "syl": ["a", "ni", "ver", "sa", "ri"], "tag": "Consonants finals"}, {"w": "anomenar", "syl": ["a", "no", "me", "nar"], "tag": "Síl·labes inverses VC"}, {"w": "anotar", "syl": ["a", "no", "tar"], "tag": "Síl·labes mixtes CVC"}, {"w": "ànsia", "syl": ["àn", "si", "a"], "tag": "Consonants finals"}, {"w": "antecedent", "syl": ["an", "te", "ce", "dent"], "tag": "Síl·labes inverses VC"}, {"w": "antena", "syl": ["an", "te", "na"], "tag": "Síl·labes mixtes CVC"}, {"w": "anterior", "syl": ["an", "te", "ri", "or"], "tag": "Consonants finals"}, {"w": "antic", "syl": ["an", "tic"], "tag": "Síl·labes inverses VC"}, {"w": "anticipar", "syl": ["an", "ti", "ci", "par"], "tag": "Síl·labes mixtes CVC"}, {"w": "antiguitat", "syl": ["an", "ti", "gu", "i", "tat"], "tag": "Consonants finals"}, {"w": "antull", "syl": ["an", "tull"], "tag": "Síl·labes inverses VC"}, {"w": "apagar", "syl": ["a", "pa", "gar"], "tag": "Síl·labes mixtes CVC"}, {"w": "aparell", "syl": ["a", "pa", "rell"], "tag": "Consonants finals"}, {"w": "aparent", "syl": ["a", "pa", "rent"], "tag": "Síl·labes inverses VC"}, {"w": "aparició", "syl": ["a", "pa", "ri", "ci", "ó"], "tag": "Síl·labes mixtes CVC"}, {"w": "apartament", "syl": ["a", "par", "ta", "ment"], "tag": "Consonants finals"}, {"w": "apartar", "syl": ["a", "par", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "apassionar", "syl": ["a", "pas", "si", "o", "nar"], "tag": "Síl·labes mixtes CVC"}, {"w": "àpat", "syl": ["à", "pat"], "tag": "Consonants finals"}, {"w": "apel·lar", "syl": ["a", "pel·", "lar"], "tag": "Síl·labes inverses VC"}, {"w": "aperitiu", "syl": ["a", "pe", "ri", "ti", "u"], "tag": "Síl·labes mixtes CVC"}, {"w": "apetència", "syl": ["a", "pe", "tèn", "ci", "a"], "tag": "Consonants finals"}, {"w": "aplaudir", "syl": ["a", "plau", "dir"], "tag": "Síl·labes inverses VC"}, {"w": "aplicar", "syl": ["a", "pli", "car"], "tag": "Síl·labes mixtes CVC"}, {"w": "aportar", "syl": ["a", "por", "tar"], "tag": "Consonants finals"}, {"w": "apostar", "syl": ["a", "pos", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "aprendre", "syl": ["a", "pren", "dre"], "tag": "Síl·labes mixtes CVC"}, {"w": "aprenent", "syl": ["a", "pre", "nent"], "tag": "Consonants finals"}, {"w": "aprofitar", "syl": ["a", "pro", "fi", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "apropar", "syl": ["a", "pro", "par"], "tag": "Síl·labes mixtes CVC"}, {"w": "aprovar", "syl": ["a", "pro", "var"], "tag": "Consonants finals"}, {"w": "apuntar", "syl": ["a", "pun", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "aquest", "syl": ["a", "qu", "est"], "tag": "Síl·labes mixtes CVC"}, {"w": "aranya", "syl": ["a", "ra", "nya"], "tag": "Consonants finals"}, {"w": "àrbitre", "syl": ["àr", "bi", "tre"], "tag": "Síl·labes inverses VC"}, {"w": "arboç", "syl": ["ar", "boç"], "tag": "Síl·labes mixtes CVC"}, {"w": "arbust", "syl": ["ar", "bust"], "tag": "Consonants finals"}, {"w": "arca", "syl": ["ar", "ca"], "tag": "Síl·labes inverses VC"}, {"w": "arcaic", "syl": ["ar", "caic"], "tag": "Síl·labes mixtes CVC"}, {"w": "arcada", "syl": ["ar", "ca", "da"], "tag": "Consonants finals"}, {"w": "ardiaca", "syl": ["ar", "di", "a", "ca"], "tag": "Síl·labes inverses VC"}, {"w": "ardor", "syl": ["ar", "dor"], "tag": "Síl·labes mixtes CVC"}, {"w": "arena", "syl": ["a", "re", "na"], "tag": "Consonants finals"}, {"w": "argila", "syl": ["ar", "gi", "la"], "tag": "Síl·labes inverses VC"}, {"w": "argument", "syl": ["ar", "gu", "ment"], "tag": "Síl·labes mixtes CVC"}, {"w": "àrid", "syl": ["à", "rid"], "tag": "Consonants finals"}, {"w": "arma", "syl": ["ar", "ma"], "tag": "Síl·labes inverses VC"}, {"w": "armada", "syl": ["ar", "ma", "da"], "tag": "Síl·labes mixtes CVC"}, {"w": "armament", "syl": ["ar", "ma", "ment"], "tag": "Consonants finals"}, {"w": "armilla", "syl": ["ar", "mi", "lla"], "tag": "Síl·labes inverses VC"}, {"w": "aroma", "syl": ["a", "ro", "ma"], "tag": "Síl·labes mixtes CVC"}, {"w": "arpa", "syl": ["ar", "pa"], "tag": "Consonants finals"}, {"w": "arquejar", "syl": ["ar", "qu", "e", "jar"], "tag": "Síl·labes inverses VC"}, {"w": "arrel", "syl": ["ar", "rel"], "tag": "Síl·labes mixtes CVC"}, {"w": "arrelar", "syl": ["ar", "re", "lar"], "tag": "Consonants finals"}, {"w": "arrendar", "syl": ["ar", "ren", "dar"], "tag": "Síl·labes inverses VC"}, {"w": "arrestar", "syl": ["ar", "res", "tar"], "tag": "Síl·labes mixtes CVC"}, {"w": "arribar", "syl": ["ar", "ri", "bar"], "tag": "Consonants finals"}, {"w": "arròs", "syl": ["ar", "ròs"], "tag": "Síl·labes inverses VC"}, {"w": "arrossegar", "syl": ["ar", "ros", "se", "gar"], "tag": "Síl·labes mixtes CVC"}, {"w": "arruga", "syl": ["ar", "ru", "ga"], "tag": "Consonants finals"}, {"w": "art", "syl": ["art"], "tag": "Síl·labes inverses VC"}, {"w": "artèria", "syl": ["ar", "tè", "ri", "a"], "tag": "Síl·labes mixtes CVC"}, {"w": "artesania", "syl": ["ar", "te", "sa", "ni", "a"], "tag": "Consonants finals"}, {"w": "article", "syl": ["ar", "ti", "cle"], "tag": "Síl·labes inverses VC"}, {"w": "artificial", "syl": ["ar", "ti", "fi", "ci", "al"], "tag": "Síl·labes mixtes CVC"}, {"w": "artista", "syl": ["ar", "tis", "ta"], "tag": "Consonants finals"}, {"w": "asfíxia", "syl": ["as", "fí", "xi", "a"], "tag": "Síl·labes inverses VC"}, {"w": "asfalt", "syl": ["as", "falt"], "tag": "Síl·labes mixtes CVC"}, {"w": "assignar", "syl": ["as", "sig", "nar"], "tag": "Consonants finals"}, {"w": "assistir", "syl": ["as", "sis", "tir"], "tag": "Síl·labes inverses VC"}, {"w": "associar", "syl": ["as", "so", "ci", "ar"], "tag": "Síl·labes mixtes CVC"}, {"w": "assumir", "syl": ["as", "su", "mir"], "tag": "Consonants finals"}, {"w": "assegurar", "syl": ["as", "se", "gu", "rar"], "tag": "Síl·labes inverses VC"}, {"w": "asseure", "syl": ["as", "seu", "re"], "tag": "Síl·labes mixtes CVC"}, {"w": "astúcia", "syl": ["as", "tú", "ci", "a"], "tag": "Consonants finals"}, {"w": "atabalat", "syl": ["a", "ta", "ba", "lat"], "tag": "Síl·labes inverses VC"}, {"w": "atacar", "syl": ["a", "ta", "car"], "tag": "Síl·labes mixtes CVC"}, {"w": "atalaiar", "syl": ["a", "ta", "lai", "i", "ar"], "tag": "Consonants finals"}, {"w": "atansar", "syl": ["a", "tan", "sar"], "tag": "Síl·labes inverses VC"}, {"w": "capvespre", "syl": ["cap", "ves", "pre"], "tag": "Síl·labes mixtes CVC"}, {"w": "atenció", "syl": ["a", "ten", "ci", "ó"], "tag": "Consonants finals"}, {"w": "atendre", "syl": ["a", "ten", "dre"], "tag": "Síl·labes inverses VC"}, {"w": "atenta", "syl": ["a", "ten", "ta"], "tag": "Síl·labes mixtes CVC"}, {"w": "aterrar", "syl": ["a", "ter", "rar"], "tag": "Consonants finals"}, {"w": "atestar", "syl": ["a", "tes", "tar"], "tag": "Síl·labes inverses VC"}, {"w": "atleta", "syl": ["at", "le", "ta"], "tag": "Síl·labes mixtes CVC"}, {"w": "atmosfera", "syl": ["at", "mos", "fe", "ra"], "tag": "Consonants finals"}, {"w": "àtom", "syl": ["à", "tom"], "tag": "Síl·labes inverses VC"}, {"w": "atorgar", "syl": ["a", "tor", "gar"], "tag": "Síl·labes mixtes CVC"}, {"w": "atracar", "syl": ["a", "tra", "car"], "tag": "Consonants finals"}, {"w": "atraure", "syl": ["a", "trau", "re"], "tag": "Síl·labes inverses VC"}, {"w": "atrevir", "syl": ["a", "tre", "vir"], "tag": "Síl·labes mixtes CVC"}, {"w": "atribuir", "syl": ["a", "tri", "bu", "ir"], "tag": "Consonants finals"}, {"w": "atrium", "syl": ["a", "tri", "um"], "tag": "Síl·labes inverses VC"}, {"w": "aturar", "syl": ["a", "tu", "rar"], "tag": "Síl·labes mixtes CVC"}, {"w": "audàcia", "syl": ["au", "dà", "ci", "a"], "tag": "Consonants finals"}, {"w": "audiència", "syl": ["au", "di", "èn", "ci", "a"], "tag": "Síl·labes inverses VC"}, {"w": "augmentar", "syl": ["aug", "men", "tar"], "tag": "Síl·labes mixtes CVC"}, {"w": "aula", "syl": ["au", "la"], "tag": "Consonants finals"}, {"w": "aura", "syl": ["au", "ra"], "tag": "Síl·labes inverses VC"}, {"w": "aurora", "syl": ["au", "ro", "ra"], "tag": "Síl·labes mixtes CVC"}, {"w": "autèntica", "syl": ["au", "tèn", "ti", "ca"], "tag": "Consonants finals"}, {"w": "autor", "syl": ["au", "tor"], "tag": "Síl·labes inverses VC"}, {"w": "autoritat", "syl": ["au", "to", "ri", "tat"], "tag": "Síl·labes mixtes CVC"}, {"w": "auxiliar", "syl": ["au", "xi", "li", "ar"], "tag": "Consonants finals"}, {"w": "avançar", "syl": ["a", "van", "çar"], "tag": "Síl·labes inverses VC"}, {"w": "avantatge", "syl": ["a", "van", "tat", "ge"], "tag": "Síl·labes mixtes CVC"}, {"w": "avarícia", "syl": ["a", "va", "rí", "ci", "a"], "tag": "Consonants finals"}, {"w": "aventura", "syl": ["a", "ven", "tu", "ra"], "tag": "Síl·labes inverses VC"}, {"w": "avergonyir", "syl": ["a", "ver", "go", "nyir"], "tag": "Síl·labes mixtes CVC"}, {"w": "aviar", "syl": ["a", "vi", "ar"], "tag": "Consonants finals"}, {"w": "aviat", "syl": ["a", "vi", "at"], "tag": "Síl·labes inverses VC"}, {"w": "avió", "syl": ["a", "vi", "ó"], "tag": "Síl·labes mixtes CVC"}, {"w": "avís", "syl": ["a", "vís"], "tag": "Consonants finals"}, {"w": "avisar", "syl": ["a", "vi", "sar"], "tag": "Síl·labes inverses VC"}, {"w": "avorrir", "syl": ["a", "vor", "rir"], "tag": "Síl·labes mixtes CVC"}, {"w": "absurd", "syl": ["ab", "surd"], "tag": "Síl·labes inverses VC"}, {"w": "abundant", "syl": ["a", "bun", "dant"], "tag": "Síl·labes mixtes CVC"}, {"w": "acabat", "syl": ["a", "ca", "bat"], "tag": "Consonants finals"}, {"w": "acadèmia", "syl": ["a", "ca", "dè", "mi", "a"], "tag": "Síl·labes inverses VC"}, {"w": "accelerador", "syl": ["ac", "ce", "le", "ra", "dor"], "tag": "Síl·labes mixtes CVC"}, {"w": "acceptació", "syl": ["ac", "cep", "ta", "ci", "ó"], "tag": "Consonants finals"}, {"w": "accessori", "syl": ["ac", "ces", "so", "ri"], "tag": "Síl·labes inverses VC"}, {"w": "accident", "syl": ["ac", "ci", "dent"], "tag": "Síl·labes mixtes CVC"}, {"w": "aclamació", "syl": ["a", "cla", "ma", "ci", "ó"], "tag": "Consonants finals"}, {"w": "aclariment", "syl": ["a", "cla", "ri", "ment"], "tag": "Síl·labes inverses VC"}, {"w": "acollidor", "syl": ["a", "co", "lli", "dor"], "tag": "Síl·labes mixtes CVC"}, {"w": "acordió", "syl": ["a", "cor", "di", "ó"], "tag": "Síl·labes inverses VC"}, {"w": "acostumat", "syl": ["a", "cos", "tu", "mat"], "tag": "Síl·labes mixtes CVC"}, {"w": "actitud", "syl": ["ac", "ti", "tud"], "tag": "Consonants finals"}, {"w": "activitat", "syl": ["ac", "ti", "vi", "tat"], "tag": "Síl·labes inverses VC"}, {"w": "actualitat", "syl": ["ac", "tu", "a", "li", "tat"], "tag": "Síl·labes mixtes CVC"}, {"w": "adaptació", "syl": ["a", "dap", "ta", "ci", "ó"], "tag": "Consonants finals"}, {"w": "adherit", "syl": ["ad", "he", "rit"], "tag": "Síl·labes mixtes CVC"}, {"w": "adopció", "syl": ["a", "dop", "ci", "ó"], "tag": "Síl·labes mixtes CVC"}, {"w": "adoració", "syl": ["a", "do", "ra", "ci", "ó"], "tag": "Consonants finals"}, {"w": "adversari", "syl": ["ad", "ver", "sa", "ri"], "tag": "Síl·labes mixtes CVC"}, {"w": "afer", "syl": ["a", "fer"], "tag": "Síl·labes inverses VC"}, {"w": "afició", "syl": ["a", "fi", "ci", "ó"], "tag": "Síl·labes mixtes CVC"}, {"w": "afiliat", "syl": ["a", "fi", "li", "at"], "tag": "Consonants finals"}, {"w": "afluixat", "syl": ["a", "flu", "i", "xat"], "tag": "Síl·labes mixtes CVC"}, {"w": "agafat", "syl": ["a", "ga", "fat"], "tag": "Consonants finals"}, {"w": "agència", "syl": ["a", "gèn", "ci", "a"], "tag": "Síl·labes inverses VC"}, {"w": "agenda", "syl": ["a", "gen", "da"], "tag": "Síl·labes mixtes CVC"}, {"w": "àgil", "syl": ["à", "gil"], "tag": "Consonants finals"}, {"w": "agitació", "syl": ["a", "gi", "ta", "ci", "ó"], "tag": "Síl·labes inverses VC"}, {"w": "agradar", "syl": ["a", "gra", "dar"], "tag": "Consonants finals"}, {"w": "agregat", "syl": ["a", "gre", "gat"], "tag": "Síl·labes inverses VC"}, {"w": "airejat", "syl": ["ai", "re", "jat"], "tag": "Síl·labes mixtes CVC"}, {"w": "aixecat", "syl": ["ai", "xe", "cat"], "tag": "Consonants finals"}, {"w": "ajornat", "syl": ["a", "jor", "nat"], "tag": "Síl·labes inverses VC"}, {"w": "ajudant", "syl": ["a", "ju", "dant"], "tag": "Síl·labes mixtes CVC"}, {"w": "alabar", "syl": ["a", "la", "bar"], "tag": "Síl·labes inverses VC"}, {"w": "alarmant", "syl": ["a", "lar", "mant"], "tag": "Síl·labes mixtes CVC"}, {"w": "alberg", "syl": ["al", "berg"], "tag": "Consonants finals"}, {"w": "alliberat", "syl": ["a", "lli", "be", "rat"], "tag": "Consonants finals"}, {"w": "allunyat", "syl": ["a", "llu", "nyat"], "tag": "Síl·labes inverses VC"}, {"w": "animat", "syl": ["a", "ni", "mat"], "tag": "Síl·labes inverses VC"}, {"w": "anotat", "syl": ["a", "no", "tat"], "tag": "Síl·labes inverses VC"}, {"w": "anticipat", "syl": ["an", "ti", "ci", "pat"], "tag": "Síl·labes inverses VC"}, {"w": "apagat", "syl": ["a", "pa", "gat"], "tag": "Síl·labes inverses VC"}, {"w": "aplaudit", "syl": ["a", "plau", "dit"], "tag": "Consonants finals"}, {"w": "aportat", "syl": ["a", "por", "tat"], "tag": "Síl·labes mixtes CVC"}, {"w": "apostat", "syl": ["a", "pos", "tat"], "tag": "Consonants finals"}, {"w": "aprofitat", "syl": ["a", "pro", "fi", "tat"], "tag": "Síl·labes mixtes CVC"}, {"w": "apropat", "syl": ["a", "pro", "pat"], "tag": "Consonants finals"}, {"w": "aprovat", "syl": ["a", "pro", "vat"], "tag": "Síl·labes inverses VC"}, {"w": "apuntat", "syl": ["a", "pun", "tat"], "tag": "Síl·labes mixtes CVC"}, {"w": "arquejat", "syl": ["ar", "qu", "e", "jat"], "tag": "Síl·labes mixtes CVC"}, {"w": "arrendat", "syl": ["ar", "ren", "dat"], "tag": "Síl·labes mixtes CVC"}, {"w": "arrestat", "syl": ["ar", "res", "tat"], "tag": "Consonants finals"}, {"w": "arribat", "syl": ["ar", "ri", "bat"], "tag": "Síl·labes inverses VC"}, {"w": "arrossegat", "syl": ["ar", "ros", "se", "gat"], "tag": "Consonants finals"}, {"w": "assumit", "syl": ["as", "su", "mit"], "tag": "Síl·labes inverses VC"}, {"w": "atacat", "syl": ["a", "ta", "cat"], "tag": "Síl·labes mixtes CVC"}, {"w": "atalaiat", "syl": ["a", "ta", "lai", "i", "at"], "tag": "Consonants finals"}, {"w": "atansat", "syl": ["a", "tan", "sat"], "tag": "Síl·labes inverses VC"}, {"w": "aterrat", "syl": ["a", "ter", "rat"], "tag": "Síl·labes mixtes CVC"}, {"w": "atestat", "syl": ["a", "tes", "tat"], "tag": "Consonants finals"}, {"w": "atorgat", "syl": ["a", "tor", "gat"], "tag": "Síl·labes inverses VC"}, {"w": "atracat", "syl": ["a", "tra", "cat"], "tag": "Síl·labes mixtes CVC"}, {"w": "atrevit", "syl": ["a", "tre", "vit"], "tag": "Síl·labes inverses VC"}, {"w": "atribuit", "syl": ["a", "tri", "bu", "it"], "tag": "Síl·labes mixtes CVC"}, {"w": "aturat", "syl": ["a", "tu", "rat"], "tag": "Síl·labes inverses VC"}, {"w": "augmentat", "syl": ["aug", "men", "tat"], "tag": "Síl·labes inverses VC"}, {"w": "autèntic", "syl": ["au", "tèn", "tic"], "tag": "Síl·labes mixtes CVC"}, {"w": "avançat", "syl": ["a", "van", "çat"], "tag": "Consonants finals"}, {"w": "avisat", "syl": ["a", "vi", "sat"], "tag": "Síl·labes mixtes CVC"}, {"w": "avorrit", "syl": ["a", "vor", "rit"], "tag": "Consonants finals"}], "3": [{"w": "brúixola", "syl": ["brúi", "xo", "la"], "tag": "Travades br/bl"}, {"w": "plàtan", "syl": ["plà", "tan"], "tag": "Travades pr/pl"}, {"w": "drac", "syl": ["drac"], "tag": "Travades tr/dr"}, {"w": "estrella", "syl": ["es", "tre", "lla"], "tag": "Travades tr/dr"}, {"w": "bicicleta", "syl": ["bi", "ci", "cle", "ta"], "tag": "Travades cr/cl"}, {"w": "granota", "syl": ["gra", "no", "ta"], "tag": "Travades gr/gl"}, {"w": "tren", "syl": ["tren"], "tag": "Travades cr/cl"}, {"w": "biblioteca", "syl": ["bi", "bli", "o", "te", "ca"], "tag": "Diftongs"}, {"w": "princesa", "syl": ["prin", "ce", "sa"], "tag": "Travades br/bl"}, {"w": "cocodril", "syl": ["co", "co", "dril"], "tag": "Travades pr/pl"}, {"w": "flauta", "syl": ["flau", "ta"], "tag": "Travades gr/gl"}, {"w": "quadern", "syl": ["qu", "a", "dern"], "tag": "Diftongs"}, {"w": "pingüí", "syl": ["pin", "gü", "í"], "tag": "Travades br/bl"}, {"w": "trompeta", "syl": ["trom", "pe", "ta"], "tag": "Travades pr/pl"}, {"w": "cristall", "syl": ["cris", "tall"], "tag": "Travades tr/dr"}, {"w": "abraçada", "syl": ["a", "bra", "ça", "da"], "tag": "Travades cr/cl"}, {"w": "abric", "syl": ["a", "bric"], "tag": "Travades gr/gl"}, {"w": "abrupte", "syl": ["a", "brup", "te"], "tag": "Diftongs"}, {"w": "absolut", "syl": ["ab", "so", "lut"], "tag": "Travades br/bl"}, {"w": "abstracte", "syl": ["abs", "trac", "te"], "tag": "Travades pr/pl"}, {"w": "aclamar", "syl": ["a", "cla", "mar"], "tag": "Travades tr/dr"}, {"w": "aclarir", "syl": ["a", "cla", "rir"], "tag": "Travades cr/cl"}, {"w": "aclimatar", "syl": ["a", "cli", "ma", "tar"], "tag": "Travades gr/gl"}, {"w": "acompanyar", "syl": ["a", "com", "pa", "nyar"], "tag": "Diftongs"}, {"w": "acoblar", "syl": ["a", "co", "blar"], "tag": "Travades br/bl"}, {"w": "acreditar", "syl": ["a", "cre", "di", "tar"], "tag": "Travades pr/pl"}, {"w": "acrobàtics", "syl": ["a", "cro", "bà", "tics"], "tag": "Travades tr/dr"}, {"w": "actuar", "syl": ["ac", "tu", "ar"], "tag": "Travades cr/cl"}, {"w": "adobar", "syl": ["a", "do", "bar"], "tag": "Travades gr/gl"}, {"w": "adoctrinar", "syl": ["a", "doc", "tri", "nar"], "tag": "Diftongs"}, {"w": "adquirir", "syl": ["ad", "qu", "i", "rir"], "tag": "Travades br/bl"}, {"w": "afavorir", "syl": ["a", "fa", "vo", "rir"], "tag": "Travades pr/pl"}, {"w": "afligir", "syl": ["a", "fli", "gir"], "tag": "Travades tr/dr"}, {"w": "afrontar", "syl": ["a", "fron", "tar"], "tag": "Travades cr/cl"}, {"w": "aglomerar", "syl": ["a", "glo", "me", "rar"], "tag": "Travades gr/gl"}, {"w": "agrair", "syl": ["a", "grair"], "tag": "Diftongs"}, {"w": "agreujar", "syl": ["a", "greu", "jar"], "tag": "Travades br/bl"}, {"w": "agrupar", "syl": ["a", "gru", "par"], "tag": "Travades pr/pl"}, {"w": "aiguat", "syl": ["ai", "gu", "at"], "tag": "Travades tr/dr"}, {"w": "aigua", "syl": ["ai", "gu", "a"], "tag": "Travades cr/cl"}, {"w": "aillar", "syl": ["ai", "llar"], "tag": "Travades gr/gl"}, {"w": "albercoc", "syl": ["al", "ber", "coc"], "tag": "Diftongs"}, {"w": "albirar", "syl": ["al", "bi", "rar"], "tag": "Travades br/bl"}, {"w": "alegrement", "syl": ["a", "le", "gre", "ment"], "tag": "Travades pr/pl"}, {"w": "alegria", "syl": ["a", "le", "gri", "a"], "tag": "Travades tr/dr"}, {"w": "alfabet", "syl": ["al", "fa", "bet"], "tag": "Travades cr/cl"}, {"w": "àlgebra", "syl": ["àl", "ge", "bra"], "tag": "Travades gr/gl"}, {"w": "algunes", "syl": ["al", "gu", "nes"], "tag": "Diftongs"}, {"w": "alimentació", "syl": ["a", "li", "men", "ta", "ci", "ó"], "tag": "Travades br/bl"}, {"w": "alliberament", "syl": ["a", "lli", "be", "ra", "ment"], "tag": "Travades pr/pl"}, {"w": "almirall", "syl": ["al", "mi", "rall"], "tag": "Travades tr/dr"}, {"w": "alpí", "syl": ["al", "pí"], "tag": "Travades cr/cl"}, {"w": "alquimia", "syl": ["al", "qu", "i", "mi", "a"], "tag": "Travades gr/gl"}, {"w": "alterar", "syl": ["al", "te", "rar"], "tag": "Diftongs"}, {"w": "altiplà", "syl": ["al", "ti", "plà"], "tag": "Travades br/bl"}, {"w": "alumne", "syl": ["a", "lum", "ne"], "tag": "Travades pr/pl"}, {"w": "amablement", "syl": ["a", "ma", "ble", "ment"], "tag": "Travades tr/dr"}, {"w": "amagar", "syl": ["a", "ma", "gar"], "tag": "Travades cr/cl"}, {"w": "amanir", "syl": ["a", "ma", "nir"], "tag": "Travades gr/gl"}, {"w": "amargor", "syl": ["a", "mar", "gor"], "tag": "Diftongs"}, {"w": "ambiciós", "syl": ["am", "bi", "ci", "ós"], "tag": "Travades br/bl"}, {"w": "ambulant", "syl": ["am", "bu", "lant"], "tag": "Travades pr/pl"}, {"w": "amenaçador", "syl": ["a", "me", "na", "ça", "dor"], "tag": "Travades tr/dr"}, {"w": "ametlla", "syl": ["a", "met", "lla"], "tag": "Travades cr/cl"}, {"w": "amfibi", "syl": ["am", "fi", "bi"], "tag": "Travades gr/gl"}, {"w": "amigable", "syl": ["a", "mi", "ga", "ble"], "tag": "Diftongs"}, {"w": "amistat", "syl": ["a", "mis", "tat"], "tag": "Travades br/bl"}, {"w": "amorós", "syl": ["a", "mo", "rós"], "tag": "Travades pr/pl"}, {"w": "amplament", "syl": ["am", "pla", "ment"], "tag": "Travades tr/dr"}, {"w": "ampliació", "syl": ["am", "pli", "a", "ci", "ó"], "tag": "Travades cr/cl"}, {"w": "anacronisme", "syl": ["a", "na", "cro", "nis", "me"], "tag": "Travades gr/gl"}, {"w": "analogia", "syl": ["a", "na", "lo", "gi", "a"], "tag": "Diftongs"}, {"w": "anarquia", "syl": ["a", "nar", "qu", "i", "a"], "tag": "Travades br/bl"}, {"w": "anatomia", "syl": ["a", "na", "to", "mi", "a"], "tag": "Travades pr/pl"}, {"w": "ancoratge", "syl": ["an", "co", "rat", "ge"], "tag": "Travades tr/dr"}, {"w": "andana", "syl": ["an", "da", "na"], "tag": "Travades cr/cl"}, {"w": "anecdotari", "syl": ["a", "nec", "do", "ta", "ri"], "tag": "Travades gr/gl"}, {"w": "anestèsia", "syl": ["a", "nes", "tè", "si", "a"], "tag": "Diftongs"}, {"w": "anglès", "syl": ["an", "glès"], "tag": "Travades br/bl"}, {"w": "angoixant", "syl": ["an", "goi", "xant"], "tag": "Travades pr/pl"}, {"w": "animalada", "syl": ["a", "ni", "ma", "la", "da"], "tag": "Travades tr/dr"}, {"w": "animació", "syl": ["a", "ni", "ma", "ci", "ó"], "tag": "Travades cr/cl"}, {"w": "aniversari", "syl": ["a", "ni", "ver", "sa", "ri"], "tag": "Travades gr/gl"}, {"w": "anomalia", "syl": ["a", "no", "ma", "li", "a"], "tag": "Diftongs"}, {"w": "anonimat", "syl": ["a", "no", "ni", "mat"], "tag": "Travades br/bl"}, {"w": "ansietat", "syl": ["an", "si", "e", "tat"], "tag": "Travades pr/pl"}, {"w": "antàrtic", "syl": ["an", "tàr", "tic"], "tag": "Travades tr/dr"}, {"w": "antecessor", "syl": ["an", "te", "ces", "sor"], "tag": "Travades cr/cl"}, {"w": "anteriorment", "syl": ["an", "te", "ri", "or", "ment"], "tag": "Travades gr/gl"}, {"w": "antigament", "syl": ["an", "ti", "ga", "ment"], "tag": "Diftongs"}, {"w": "antipatia", "syl": ["an", "ti", "pa", "ti", "a"], "tag": "Travades br/bl"}, {"w": "antiquari", "syl": ["an", "ti", "qu", "a", "ri"], "tag": "Travades pr/pl"}, {"w": "anualment", "syl": ["a", "nu", "al", "ment"], "tag": "Travades tr/dr"}, {"w": "aparellar", "syl": ["a", "pa", "re", "llar"], "tag": "Travades cr/cl"}, {"w": "aparentment", "syl": ["a", "pa", "rent", "ment"], "tag": "Travades gr/gl"}, {"w": "aparador", "syl": ["a", "pa", "ra", "dor"], "tag": "Diftongs"}, {"w": "apartat", "syl": ["a", "par", "tat"], "tag": "Travades br/bl"}, {"w": "apassionant", "syl": ["a", "pas", "si", "o", "nant"], "tag": "Travades pr/pl"}, {"w": "apel·lació", "syl": ["a", "pel·", "la", "ci", "ó"], "tag": "Travades tr/dr"}, {"w": "aplaudiment", "syl": ["a", "plau", "di", "ment"], "tag": "Travades cr/cl"}, {"w": "aplicació", "syl": ["a", "pli", "ca", "ci", "ó"], "tag": "Travades gr/gl"}, {"w": "apoderar", "syl": ["a", "po", "de", "rar"], "tag": "Diftongs"}, {"w": "aportar", "syl": ["a", "por", "tar"], "tag": "Travades br/bl"}, {"w": "apreciable", "syl": ["a", "pre", "ci", "a", "ble"], "tag": "Travades pr/pl"}, {"w": "aprenentatge", "syl": ["a", "pre", "nen", "tat", "ge"], "tag": "Travades tr/dr"}, {"w": "aprofitament", "syl": ["a", "pro", "fi", "ta", "ment"], "tag": "Travades cr/cl"}, {"w": "apropament", "syl": ["a", "pro", "pa", "ment"], "tag": "Travades gr/gl"}, {"w": "aprovacions", "syl": ["a", "pro", "va", "ci", "ons"], "tag": "Diftongs"}, {"w": "aproximar", "syl": ["a", "pro", "xi", "mar"], "tag": "Travades br/bl"}, {"w": "apuntador", "syl": ["a", "pun", "ta", "dor"], "tag": "Travades pr/pl"}, {"w": "aquari", "syl": ["a", "qu", "a", "ri"], "tag": "Travades tr/dr"}, {"w": "aquàtica", "syl": ["a", "qu", "à", "ti", "ca"], "tag": "Travades cr/cl"}, {"w": "aquella", "syl": ["a", "qu", "e", "lla"], "tag": "Travades gr/gl"}, {"w": "aquestes", "syl": ["a", "qu", "es", "tes"], "tag": "Diftongs"}, {"w": "aranyes", "syl": ["a", "ra", "nyes"], "tag": "Travades br/bl"}, {"w": "arbitratge", "syl": ["ar", "bi", "trat", "ge"], "tag": "Travades pr/pl"}, {"w": "arbreda", "syl": ["ar", "bre", "da"], "tag": "Travades tr/dr"}, {"w": "arcaicament", "syl": ["ar", "cai", "ca", "ment"], "tag": "Travades cr/cl"}, {"w": "arxipèlag", "syl": ["ar", "xi", "pè", "lag"], "tag": "Travades gr/gl"}, {"w": "ardentment", "syl": ["ar", "dent", "ment"], "tag": "Diftongs"}, {"w": "argumentació", "syl": ["ar", "gu", "men", "ta", "ci", "ó"], "tag": "Travades br/bl"}, {"w": "aristocràcia", "syl": ["a", "ris", "to", "crà", "ci", "a"], "tag": "Travades pr/pl"}, {"w": "aritmètica", "syl": ["a", "rit", "mè", "ti", "ca"], "tag": "Travades tr/dr"}, {"w": "armadura", "syl": ["ar", "ma", "du", "ra"], "tag": "Travades cr/cl"}, {"w": "armariet", "syl": ["ar", "ma", "ri", "et"], "tag": "Travades gr/gl"}, {"w": "aromàtica", "syl": ["a", "ro", "mà", "ti", "ca"], "tag": "Diftongs"}, {"w": "arqueologia", "syl": ["ar", "qu", "e", "o", "lo", "gi", "a"], "tag": "Travades br/bl"}, {"w": "arquitectura", "syl": ["ar", "qu", "i", "tec", "tu", "ra"], "tag": "Travades pr/pl"}, {"w": "arrelament", "syl": ["ar", "re", "la", "ment"], "tag": "Travades tr/dr"}, {"w": "arrendament", "syl": ["ar", "ren", "da", "ment"], "tag": "Travades cr/cl"}, {"w": "arribada", "syl": ["ar", "ri", "ba", "da"], "tag": "Travades gr/gl"}, {"w": "arrossar", "syl": ["ar", "ros", "sar"], "tag": "Diftongs"}, {"w": "arrugat", "syl": ["ar", "ru", "gat"], "tag": "Travades br/bl"}, {"w": "artesanal", "syl": ["ar", "te", "sa", "nal"], "tag": "Travades pr/pl"}, {"w": "articulació", "syl": ["ar", "ti", "cu", "la", "ci", "ó"], "tag": "Travades tr/dr"}, {"w": "artificialment", "syl": ["ar", "ti", "fi", "ci", "al", "ment"], "tag": "Travades cr/cl"}, {"w": "artilleria", "syl": ["ar", "ti", "lle", "ri", "a"], "tag": "Travades gr/gl"}, {"w": "assegurança", "syl": ["as", "se", "gu", "ran", "ça"], "tag": "Diftongs"}, {"w": "assemblea", "syl": ["as", "sem", "ble", "a"], "tag": "Travades br/bl"}, {"w": "assentament", "syl": ["as", "sen", "ta", "ment"], "tag": "Travades pr/pl"}, {"w": "assignatura", "syl": ["as", "sig", "na", "tu", "ra"], "tag": "Travades tr/dr"}, {"w": "assistència", "syl": ["as", "sis", "tèn", "ci", "a"], "tag": "Travades cr/cl"}, {"w": "associació", "syl": ["as", "so", "ci", "a", "ci", "ó"], "tag": "Travades gr/gl"}, {"w": "assumpte", "syl": ["as", "sump", "te"], "tag": "Diftongs"}, {"w": "asteroide", "syl": ["as", "te", "roi", "de"], "tag": "Travades br/bl"}, {"w": "astronauta", "syl": ["as", "tro", "nau", "ta"], "tag": "Travades pr/pl"}, {"w": "astronomia", "syl": ["as", "tro", "no", "mi", "a"], "tag": "Travades tr/dr"}, {"w": "astutament", "syl": ["as", "tu", "ta", "ment"], "tag": "Travades cr/cl"}, {"w": "atabalament", "syl": ["a", "ta", "ba", "la", "ment"], "tag": "Travades gr/gl"}, {"w": "atacant", "syl": ["a", "ta", "cant"], "tag": "Diftongs"}, {"w": "atenció", "syl": ["a", "ten", "ci", "ó"], "tag": "Travades br/bl"}, {"w": "atemporal", "syl": ["a", "tem", "po", "ral"], "tag": "Travades pr/pl"}, {"w": "aterriment", "syl": ["a", "ter", "ri", "ment"], "tag": "Travades tr/dr"}, {"w": "atletisme", "syl": ["at", "le", "tis", "me"], "tag": "Travades cr/cl"}, {"w": "atmosfèric", "syl": ["at", "mos", "fè", "ric"], "tag": "Travades gr/gl"}, {"w": "atòmic", "syl": ["a", "tò", "mic"], "tag": "Diftongs"}, {"w": "atractiu", "syl": ["a", "trac", "ti", "u"], "tag": "Travades br/bl"}, {"w": "atrapar", "syl": ["a", "tra", "par"], "tag": "Travades pr/pl"}, {"w": "atreviment", "syl": ["a", "tre", "vi", "ment"], "tag": "Travades tr/dr"}, {"w": "atribució", "syl": ["a", "tri", "bu", "ci", "ó"], "tag": "Travades cr/cl"}, {"w": "atropellar", "syl": ["a", "tro", "pe", "llar"], "tag": "Travades gr/gl"}, {"w": "audaçment", "syl": ["au", "daç", "ment"], "tag": "Diftongs"}, {"w": "audiovisual", "syl": ["au", "di", "o", "vi", "su", "al"], "tag": "Travades br/bl"}, {"w": "augment", "syl": ["aug", "ment"], "tag": "Travades pr/pl"}, {"w": "aurora", "syl": ["au", "ro", "ra"], "tag": "Travades tr/dr"}, {"w": "auspicis", "syl": ["aus", "pi", "cis"], "tag": "Travades cr/cl"}, {"w": "autenticitat", "syl": ["au", "ten", "ti", "ci", "tat"], "tag": "Travades gr/gl"}, {"w": "autobuses", "syl": ["au", "to", "bu", "ses"], "tag": "Diftongs"}, {"w": "automatisme", "syl": ["au", "to", "ma", "tis", "me"], "tag": "Travades br/bl"}, {"w": "automòbil", "syl": ["au", "to", "mò", "bil"], "tag": "Travades pr/pl"}, {"w": "autonomia", "syl": ["au", "to", "no", "mi", "a"], "tag": "Travades tr/dr"}, {"w": "autorització", "syl": ["au", "to", "rit", "za", "ci", "ó"], "tag": "Travades cr/cl"}, {"w": "auxiliarment", "syl": ["au", "xi", "li", "ar", "ment"], "tag": "Travades gr/gl"}, {"w": "avalar", "syl": ["a", "va", "lar"], "tag": "Diftongs"}, {"w": "avançada", "syl": ["a", "van", "ça", "da"], "tag": "Travades br/bl"}, {"w": "avantatjós", "syl": ["a", "van", "tat", "jós"], "tag": "Travades pr/pl"}, {"w": "aventurer", "syl": ["a", "ven", "tu", "rer"], "tag": "Travades tr/dr"}, {"w": "avergonyit", "syl": ["a", "ver", "go", "nyit"], "tag": "Travades cr/cl"}, {"w": "aviació", "syl": ["a", "vi", "a", "ci", "ó"], "tag": "Travades gr/gl"}, {"w": "avinguda", "syl": ["a", "vin", "gu", "da"], "tag": "Diftongs"}, {"w": "avioneta", "syl": ["a", "vi", "o", "ne", "ta"], "tag": "Travades br/bl"}, {"w": "avisador", "syl": ["a", "vi", "sa", "dor"], "tag": "Travades pr/pl"}, {"w": "avorriment", "syl": ["a", "vor", "ri", "ment"], "tag": "Travades tr/dr"}], "4": [{"w": "muntanya", "syl": ["mun", "ta", "nya"], "tag": "Dígraf ny"}, {"w": "papallona", "syl": ["pa", "pa", "llo", "na"], "tag": "Dígraf ll"}, {"w": "calaix", "syl": ["ca", "laix"], "tag": "Dígraf ix"}, {"w": "cotxe", "syl": ["co", "txe"], "tag": "Dígraf tx"}, {"w": "pel·lícula", "syl": ["pel·", "lí", "cu", "la"], "tag": "Ela geminada l·l"}, {"w": "girafa", "syl": ["gi", "ra", "fa"], "tag": "Ortografia g/j"}, {"w": "formatge", "syl": ["for", "mat", "ge"], "tag": "Ela geminada l·l"}, {"w": "rellotge", "syl": ["re", "llot", "ge"], "tag": "Ortografia g/j"}, {"w": "goril·la", "syl": ["go", "ril·", "la"], "tag": "Dígraf ll"}, {"w": "castanya", "syl": ["cas", "ta", "nya"], "tag": "Dígraf ix"}, {"w": "motxilla", "syl": ["mo", "txi", "lla"], "tag": "Dígraf tx"}, {"w": "vaixell", "syl": ["vai", "xell"], "tag": "Ela geminada l·l"}, {"w": "carbassa", "syl": ["car", "bas", "sa"], "tag": "Dígraf ny"}, {"w": "aranya", "syl": ["a", "ra", "nya"], "tag": "Dígraf ll"}, {"w": "platja", "syl": ["plat", "ja"], "tag": "Dígraf ix"}, {"w": "abella", "syl": ["a", "be", "lla"], "tag": "Dígraf tx"}, {"w": "abellot", "syl": ["a", "be", "llot"], "tag": "Ela geminada l·l"}, {"w": "abraçar", "syl": ["a", "bra", "çar"], "tag": "Ortografia g/j"}, {"w": "acariciar", "syl": ["a", "ca", "ri", "ci", "ar"], "tag": "Dígraf ny"}, {"w": "acompanyant", "syl": ["a", "com", "pa", "nyant"], "tag": "Dígraf ll"}, {"w": "acostumar", "syl": ["a", "cos", "tu", "mar"], "tag": "Dígraf ix"}, {"w": "adequat", "syl": ["a", "de", "qu", "at"], "tag": "Dígraf tx"}, {"w": "adjacència", "syl": ["ad", "ja", "cèn", "ci", "a"], "tag": "Ela geminada l·l"}, {"w": "adjectiu", "syl": ["ad", "jec", "ti", "u"], "tag": "Ortografia g/j"}, {"w": "adjunt", "syl": ["ad", "junt"], "tag": "Dígraf ny"}, {"w": "administrar", "syl": ["ad", "mi", "nis", "trar"], "tag": "Dígraf ll"}, {"w": "admiració", "syl": ["ad", "mi", "ra", "ci", "ó"], "tag": "Dígraf ix"}, {"w": "adobar", "syl": ["a", "do", "bar"], "tag": "Dígraf tx"}, {"w": "adolescent", "syl": ["a", "do", "les", "cent"], "tag": "Ela geminada l·l"}, {"w": "adoptar", "syl": ["a", "dop", "tar"], "tag": "Ortografia g/j"}, {"w": "adquisició", "syl": ["ad", "qu", "i", "si", "ci", "ó"], "tag": "Dígraf ny"}, {"w": "adreça", "syl": ["a", "dre", "ça"], "tag": "Dígraf ll"}, {"w": "adverbi", "syl": ["ad", "ver", "bi"], "tag": "Dígraf ix"}, {"w": "afany", "syl": ["a", "fany"], "tag": "Dígraf tx"}, {"w": "afanyar", "syl": ["a", "fa", "nyar"], "tag": "Ela geminada l·l"}, {"w": "afegit", "syl": ["a", "fe", "git"], "tag": "Ortografia g/j"}, {"w": "aficionat", "syl": ["a", "fi", "ci", "o", "nat"], "tag": "Dígraf ny"}, {"w": "afilar", "syl": ["a", "fi", "lar"], "tag": "Dígraf ll"}, {"w": "afirmar", "syl": ["a", "fir", "mar"], "tag": "Dígraf ix"}, {"w": "afluixar", "syl": ["a", "flu", "i", "xar"], "tag": "Dígraf tx"}, {"w": "agafador", "syl": ["a", "ga", "fa", "dor"], "tag": "Ela geminada l·l"}, {"w": "agalla", "syl": ["a", "ga", "lla"], "tag": "Ortografia g/j"}, {"w": "agenollar", "syl": ["a", "ge", "no", "llar"], "tag": "Dígraf ny"}, {"w": "agilitat", "syl": ["a", "gi", "li", "tat"], "tag": "Dígraf ll"}, {"w": "agitar", "syl": ["a", "gi", "tar"], "tag": "Dígraf ix"}, {"w": "agonia", "syl": ["a", "go", "ni", "a"], "tag": "Dígraf tx"}, {"w": "agradable", "syl": ["a", "gra", "da", "ble"], "tag": "Ela geminada l·l"}, {"w": "agraiment", "syl": ["a", "grai", "ment"], "tag": "Ortografia g/j"}, {"w": "agregar", "syl": ["a", "gre", "gar"], "tag": "Dígraf ny"}, {"w": "agrícola", "syl": ["a", "grí", "co", "la"], "tag": "Dígraf ll"}, {"w": "aigualit", "syl": ["ai", "gu", "a", "lit"], "tag": "Dígraf ix"}, {"w": "aiguardent", "syl": ["ai", "gu", "ar", "dent"], "tag": "Dígraf tx"}, {"w": "aixada", "syl": ["ai", "xa", "da"], "tag": "Ela geminada l·l"}, {"w": "aixecar", "syl": ["ai", "xe", "car"], "tag": "Ortografia g/j"}, {"w": "aixella", "syl": ["ai", "xe", "lla"], "tag": "Dígraf ny"}, {"w": "aixeta", "syl": ["ai", "xe", "ta"], "tag": "Dígraf ll"}, {"w": "aixopluc", "syl": ["ai", "xo", "pluc"], "tag": "Dígraf ix"}, {"w": "ajagut", "syl": ["a", "ja", "gut"], "tag": "Dígraf tx"}, {"w": "ajornar", "syl": ["a", "jor", "nar"], "tag": "Ela geminada l·l"}, {"w": "ajudar", "syl": ["a", "ju", "dar"], "tag": "Ortografia g/j"}, {"w": "ajuntament", "syl": ["a", "jun", "ta", "ment"], "tag": "Dígraf ny"}, {"w": "ajustat", "syl": ["a", "jus", "tat"], "tag": "Dígraf ll"}, {"w": "alabastre", "syl": ["a", "la", "bas", "tre"], "tag": "Dígraf ix"}, {"w": "allargat", "syl": ["a", "llar", "gat"], "tag": "Dígraf tx"}, {"w": "allau", "syl": ["a", "llau"], "tag": "Ela geminada l·l"}, {"w": "alletar", "syl": ["a", "lle", "tar"], "tag": "Ortografia g/j"}, {"w": "allioli", "syl": ["a", "lli", "o", "li"], "tag": "Dígraf ny"}, {"w": "allisar", "syl": ["a", "lli", "sar"], "tag": "Dígraf ll"}, {"w": "allotjar", "syl": ["a", "llot", "jar"], "tag": "Dígraf ix"}, {"w": "allunyament", "syl": ["a", "llu", "nya", "ment"], "tag": "Dígraf tx"}, {"w": "almadia", "syl": ["al", "ma", "di", "a"], "tag": "Ela geminada l·l"}, {"w": "almanac", "syl": ["al", "ma", "nac"], "tag": "Ortografia g/j"}, {"w": "almenys", "syl": ["al", "menys"], "tag": "Dígraf ny"}, {"w": "almoina", "syl": ["al", "moi", "na"], "tag": "Dígraf ll"}, {"w": "alosa", "syl": ["a", "lo", "sa"], "tag": "Dígraf ix"}, {"w": "alpí", "syl": ["al", "pí"], "tag": "Dígraf tx"}, {"w": "altaveu", "syl": ["al", "ta", "veu"], "tag": "Ela geminada l·l"}, {"w": "alteracio", "syl": ["al", "te", "ra", "ci", "o"], "tag": "Ortografia g/j"}, {"w": "alternatiu", "syl": ["al", "ter", "na", "ti", "u"], "tag": "Dígraf ny"}, {"w": "alçada", "syl": ["al", "ça", "da"], "tag": "Dígraf ll"}, {"w": "amagada", "syl": ["a", "ma", "ga", "da"], "tag": "Dígraf ix"}, {"w": "amanida", "syl": ["a", "ma", "ni", "da"], "tag": "Dígraf tx"}, {"w": "amargant", "syl": ["a", "mar", "gant"], "tag": "Ela geminada l·l"}, {"w": "amassar", "syl": ["a", "mas", "sar"], "tag": "Ortografia g/j"}, {"w": "ambaixada", "syl": ["am", "bai", "xa", "da"], "tag": "Dígraf ny"}, {"w": "ambientació", "syl": ["am", "bi", "en", "ta", "ci", "ó"], "tag": "Dígraf ll"}, {"w": "ambigu", "syl": ["am", "bi", "gu"], "tag": "Dígraf ix"}, {"w": "ambrosia", "syl": ["am", "bro", "si", "a"], "tag": "Dígraf tx"}, {"w": "amenaça", "syl": ["a", "me", "na", "ça"], "tag": "Ela geminada l·l"}, {"w": "ametller", "syl": ["a", "met", "ller"], "tag": "Ortografia g/j"}, {"w": "amfibologia", "syl": ["am", "fi", "bo", "lo", "gi", "a"], "tag": "Dígraf ny"}, {"w": "amigdalitis", "syl": ["a", "mig", "da", "li", "tis"], "tag": "Dígraf ll"}, {"w": "amnistia", "syl": ["am", "nis", "ti", "a"], "tag": "Dígraf ix"}, {"w": "amorosament", "syl": ["a", "mo", "ro", "sa", "ment"], "tag": "Dígraf tx"}, {"w": "amortitzar", "syl": ["a", "mor", "tit", "zar"], "tag": "Ela geminada l·l"}, {"w": "amplificador", "syl": ["am", "pli", "fi", "ca", "dor"], "tag": "Ortografia g/j"}, {"w": "ampolleta", "syl": ["am", "po", "lle", "ta"], "tag": "Dígraf ny"}, {"w": "anarquisme", "syl": ["a", "nar", "qu", "is", "me"], "tag": "Dígraf ll"}, {"w": "ancorat", "syl": ["an", "co", "rat"], "tag": "Dígraf ix"}, {"w": "andalús", "syl": ["an", "da", "lús"], "tag": "Dígraf tx"}, {"w": "anemòmetre", "syl": ["a", "ne", "mò", "me", "tre"], "tag": "Ela geminada l·l"}, {"w": "amfitrió", "syl": ["am", "fi", "tri", "ó"], "tag": "Ortografia g/j"}, {"w": "anginas", "syl": ["an", "gi", "nas"], "tag": "Dígraf ny"}, {"w": "anglosaxó", "syl": ["an", "glo", "sa", "xó"], "tag": "Dígraf ll"}, {"w": "anhel", "syl": ["an", "hel"], "tag": "Dígraf ix"}, {"w": "anhelar", "syl": ["an", "he", "lar"], "tag": "Dígraf tx"}, {"w": "aniversari", "syl": ["a", "ni", "ver", "sa", "ri"], "tag": "Ela geminada l·l"}, {"w": "anomenat", "syl": ["a", "no", "me", "nat"], "tag": "Ortografia g/j"}, {"w": "anotació", "syl": ["a", "no", "ta", "ci", "ó"], "tag": "Dígraf ny"}, {"w": "ansiosament", "syl": ["an", "si", "o", "sa", "ment"], "tag": "Dígraf ll"}, {"w": "antagonista", "syl": ["an", "ta", "go", "nis", "ta"], "tag": "Dígraf ix"}, {"w": "anteposar", "syl": ["an", "te", "po", "sar"], "tag": "Dígraf tx"}, {"w": "anterioritat", "syl": ["an", "te", "ri", "o", "ri", "tat"], "tag": "Ela geminada l·l"}, {"w": "antibiòtic", "syl": ["an", "ti", "bi", "ò", "tic"], "tag": "Ortografia g/j"}, {"w": "anticipació", "syl": ["an", "ti", "ci", "pa", "ci", "ó"], "tag": "Dígraf ny"}, {"w": "antídot", "syl": ["an", "tí", "dot"], "tag": "Dígraf ll"}, {"w": "antílop", "syl": ["an", "tí", "lop"], "tag": "Dígraf ix"}, {"w": "antipàtic", "syl": ["an", "ti", "pà", "tic"], "tag": "Dígraf tx"}, {"w": "antologia", "syl": ["an", "to", "lo", "gi", "a"], "tag": "Ela geminada l·l"}, {"w": "antropologia", "syl": ["an", "tro", "po", "lo", "gi", "a"], "tag": "Ortografia g/j"}, {"w": "anul·lar", "syl": ["a", "nul·", "lar"], "tag": "Dígraf ny"}, {"w": "aparcar", "syl": ["a", "par", "car"], "tag": "Dígraf ll"}, {"w": "aparença", "syl": ["a", "pa", "ren", "ça"], "tag": "Dígraf ix"}, {"w": "apartament", "syl": ["a", "par", "ta", "ment"], "tag": "Dígraf tx"}, {"w": "apassionat", "syl": ["a", "pas", "si", "o", "nat"], "tag": "Ela geminada l·l"}, {"w": "apel·latiu", "syl": ["a", "pel·", "la", "ti", "u"], "tag": "Ortografia g/j"}, {"w": "apèndix", "syl": ["a", "pèn", "dix"], "tag": "Dígraf ny"}, {"w": "aperitiu", "syl": ["a", "pe", "ri", "ti", "u"], "tag": "Dígraf ll"}, {"w": "apetitosament", "syl": ["a", "pe", "ti", "to", "sa", "ment"], "tag": "Dígraf ix"}, {"w": "apicultura", "syl": ["a", "pi", "cul", "tu", "ra"], "tag": "Dígraf tx"}, {"w": "aplanar", "syl": ["a", "pla", "nar"], "tag": "Ela geminada l·l"}, {"w": "aplaudir", "syl": ["a", "plau", "dir"], "tag": "Ortografia g/j"}, {"w": "aplicat", "syl": ["a", "pli", "cat"], "tag": "Dígraf ny"}, {"w": "apoderat", "syl": ["a", "po", "de", "rat"], "tag": "Dígraf ll"}, {"w": "apologia", "syl": ["a", "po", "lo", "gi", "a"], "tag": "Dígraf ix"}, {"w": "aportar", "syl": ["a", "por", "tar"], "tag": "Dígraf tx"}, {"w": "apòstol", "syl": ["a", "pòs", "tol"], "tag": "Ela geminada l·l"}, {"w": "apreciar", "syl": ["a", "pre", "ci", "ar"], "tag": "Ortografia g/j"}, {"w": "aprenent", "syl": ["a", "pre", "nent"], "tag": "Dígraf ny"}, {"w": "aproximació", "syl": ["a", "pro", "xi", "ma", "ci", "ó"], "tag": "Dígraf ll"}, {"w": "aquàrium", "syl": ["a", "qu", "à", "ri", "um"], "tag": "Dígraf ix"}, {"w": "aquós", "syl": ["a", "qu", "ós"], "tag": "Dígraf tx"}, {"w": "aranyoner", "syl": ["a", "ra", "nyo", "ner"], "tag": "Ela geminada l·l"}, {"w": "arboricultura", "syl": ["ar", "bo", "ri", "cul", "tu", "ra"], "tag": "Ortografia g/j"}, {"w": "arbustiu", "syl": ["ar", "bus", "ti", "u"], "tag": "Dígraf ny"}, {"w": "arcaïsme", "syl": ["ar", "caïs", "me"], "tag": "Dígraf ll"}, {"w": "arxivador", "syl": ["ar", "xi", "va", "dor"], "tag": "Dígraf ix"}, {"w": "arxiver", "syl": ["ar", "xi", "ver"], "tag": "Dígraf tx"}, {"w": "ardència", "syl": ["ar", "dèn", "ci", "a"], "tag": "Ela geminada l·l"}, {"w": "argenteria", "syl": ["ar", "gen", "te", "ri", "a"], "tag": "Ortografia g/j"}, {"w": "argilós", "syl": ["ar", "gi", "lós"], "tag": "Dígraf ny"}, {"w": "argumentat", "syl": ["ar", "gu", "men", "tat"], "tag": "Dígraf ll"}, {"w": "aridesa", "syl": ["a", "ri", "de", "sa"], "tag": "Dígraf ix"}, {"w": "aristòcrata", "syl": ["a", "ris", "tò", "cra", "ta"], "tag": "Dígraf tx"}, {"w": "arítmia", "syl": ["a", "rít", "mi", "a"], "tag": "Ela geminada l·l"}, {"w": "armador", "syl": ["ar", "ma", "dor"], "tag": "Ortografia g/j"}, {"w": "armamentístic", "syl": ["ar", "ma", "men", "tís", "tic"], "tag": "Dígraf ny"}, {"w": "armilla", "syl": ["ar", "mi", "lla"], "tag": "Dígraf ll"}, {"w": "aromatitzat", "syl": ["a", "ro", "ma", "tit", "zat"], "tag": "Dígraf ix"}, {"w": "arqueòleg", "syl": ["ar", "qu", "e", "ò", "leg"], "tag": "Dígraf tx"}, {"w": "arracada", "syl": ["ar", "ra", "ca", "da"], "tag": "Ela geminada l·l"}, {"w": "arran", "syl": ["ar", "ran"], "tag": "Ortografia g/j"}, {"w": "arranjament", "syl": ["ar", "ran", "ja", "ment"], "tag": "Dígraf ny"}, {"w": "arrapar", "syl": ["ar", "ra", "par"], "tag": "Dígraf ll"}, {"w": "arrebossar", "syl": ["ar", "re", "bos", "sar"], "tag": "Dígraf ix"}, {"w": "arreglar", "syl": ["ar", "re", "glar"], "tag": "Dígraf tx"}, {"w": "arrelat", "syl": ["ar", "re", "lat"], "tag": "Ela geminada l·l"}, {"w": "arremangar", "syl": ["ar", "re", "man", "gar"], "tag": "Ortografia g/j"}, {"w": "arrendatari", "syl": ["ar", "ren", "da", "ta", "ri"], "tag": "Dígraf ny"}, {"w": "arrepapada", "syl": ["ar", "re", "pa", "pa", "da"], "tag": "Dígraf ll"}, {"w": "arriada", "syl": ["ar", "ri", "a", "da"], "tag": "Dígraf ix"}, {"w": "arribisme", "syl": ["ar", "ri", "bis", "me"], "tag": "Dígraf tx"}, {"w": "arriscar", "syl": ["ar", "ris", "car"], "tag": "Ela geminada l·l"}, {"w": "arrodonir", "syl": ["ar", "ro", "do", "nir"], "tag": "Ortografia g/j"}, {"w": "arromangar", "syl": ["ar", "ro", "man", "gar"], "tag": "Dígraf ny"}, {"w": "arrossaire", "syl": ["ar", "ros", "sai", "re"], "tag": "Dígraf ll"}, {"w": "arrufar", "syl": ["ar", "ru", "far"], "tag": "Dígraf ix"}, {"w": "arruïnar", "syl": ["ar", "ru", "ï", "nar"], "tag": "Dígraf tx"}, {"w": "arsenal", "syl": ["ar", "se", "nal"], "tag": "Ela geminada l·l"}, {"w": "artell", "syl": ["ar", "tell"], "tag": "Ortografia g/j"}, {"w": "artesà", "syl": ["ar", "te", "sà"], "tag": "Dígraf ny"}, {"w": "articulat", "syl": ["ar", "ti", "cu", "lat"], "tag": "Dígraf ll"}, {"w": "artífex", "syl": ["ar", "tí", "fex"], "tag": "Dígraf ix"}, {"w": "artista", "syl": ["ar", "tis", "ta"], "tag": "Dígraf tx"}, {"w": "asbest", "syl": ["as", "best"], "tag": "Ela geminada l·l"}, {"w": "ascensor", "syl": ["as", "cen", "sor"], "tag": "Ortografia g/j"}, {"w": "asèptic", "syl": ["a", "sèp", "tic"], "tag": "Dígraf ny"}, {"w": "asfaltat", "syl": ["as", "fal", "tat"], "tag": "Dígraf ll"}, {"w": "asil", "syl": ["a", "sil"], "tag": "Dígraf ix"}, {"w": "asimetria", "syl": ["a", "si", "me", "tri", "a"], "tag": "Dígraf tx"}, {"w": "asma", "syl": ["as", "ma"], "tag": "Ela geminada l·l"}, {"w": "aspirador", "syl": ["as", "pi", "ra", "dor"], "tag": "Ortografia g/j"}, {"w": "assassí", "syl": ["as", "sas", "sí"], "tag": "Dígraf ny"}, {"w": "assecador", "syl": ["as", "se", "ca", "dor"], "tag": "Dígraf ll"}, {"w": "assegurat", "syl": ["as", "se", "gu", "rat"], "tag": "Dígraf ix"}, {"w": "assembleari", "syl": ["as", "sem", "ble", "a", "ri"], "tag": "Dígraf tx"}, {"w": "assentir", "syl": ["as", "sen", "tir"], "tag": "Ela geminada l·l"}, {"w": "asserenar", "syl": ["as", "se", "re", "nar"], "tag": "Ortografia g/j"}, {"w": "assessoria", "syl": ["as", "ses", "so", "ri", "a"], "tag": "Dígraf ny"}, {"w": "assignat", "syl": ["as", "sig", "nat"], "tag": "Dígraf ll"}, {"w": "assistent", "syl": ["as", "sis", "tent"], "tag": "Dígraf ix"}, {"w": "associat", "syl": ["as", "so", "ci", "at"], "tag": "Dígraf tx"}, {"w": "assolar", "syl": ["as", "so", "lar"], "tag": "Ela geminada l·l"}, {"w": "assot", "syl": ["as", "sot"], "tag": "Ortografia g/j"}, {"w": "assumir", "syl": ["as", "su", "mir"], "tag": "Dígraf ny"}], "5": [{"w": "extraordinari", "syl": ["ex", "tra", "or", "di", "na", "ri"], "tag": "Polisíl·labes complexes"}, {"w": "espectacular", "syl": ["es", "pec", "ta", "cu", "lar"], "tag": "Polisíl·labes complexes"}, {"w": "investigació", "syl": ["in", "ves", "ti", "ga", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "biodiversitat", "syl": ["bi", "o", "di", "ver", "si", "tat"], "tag": "Vocabulari acadèmic"}, {"w": "constel·lació", "syl": ["cons", "tel·", "la", "ci", "ó"], "tag": "Ela geminada l·l"}, {"w": "desenvolupament", "syl": ["de", "sen", "vo", "lu", "pa", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "temperatura", "syl": ["tem", "pe", "ra", "tu", "ra"], "tag": "Polisíl·labes complexes"}, {"w": "electricitat", "syl": ["e", "lec", "tri", "ci", "tat"], "tag": "Vocabulari acadèmic"}, {"w": "arquitectura", "syl": ["ar", "qu", "i", "tec", "tu", "ra"], "tag": "Grups cultes"}, {"w": "astronauta", "syl": ["as", "tro", "nau", "ta"], "tag": "Grups cultes"}, {"w": "laboratori", "syl": ["la", "bo", "ra", "to", "ri"], "tag": "Polisíl·labes complexes"}, {"w": "experiment", "syl": ["ex", "pe", "ri", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "fotosíntesi", "syl": ["fo", "to", "sín", "te", "si"], "tag": "Polisíl·labes complexes"}, {"w": "mediterrani", "syl": ["me", "di", "ter", "ra", "ni"], "tag": "Vocabulari acadèmic"}, {"w": "abastament", "syl": ["a", "bas", "ta", "ment"], "tag": "Grups cultes"}, {"w": "abbreviatura", "syl": ["ab", "bre", "vi", "a", "tu", "ra"], "tag": "Polisíl·labes complexes"}, {"w": "abdominal", "syl": ["ab", "do", "mi", "nal"], "tag": "Vocabulari acadèmic"}, {"w": "aberració", "syl": ["a", "ber", "ra", "ci", "ó"], "tag": "Grups cultes"}, {"w": "abnegació", "syl": ["ab", "ne", "ga", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "abominable", "syl": ["a", "bo", "mi", "na", "ble"], "tag": "Vocabulari acadèmic"}, {"w": "aborigen", "syl": ["a", "bo", "ri", "gen"], "tag": "Grups cultes"}, {"w": "abreujar", "syl": ["a", "breu", "jar"], "tag": "Polisíl·labes complexes"}, {"w": "absolutisme", "syl": ["ab", "so", "lu", "tis", "me"], "tag": "Vocabulari acadèmic"}, {"w": "absorció", "syl": ["ab", "sor", "ci", "ó"], "tag": "Grups cultes"}, {"w": "abstinència", "syl": ["abs", "ti", "nèn", "ci", "a"], "tag": "Polisíl·labes complexes"}, {"w": "abstracció", "syl": ["abs", "trac", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "absurdament", "syl": ["ab", "sur", "da", "ment"], "tag": "Grups cultes"}, {"w": "abundància", "syl": ["a", "bun", "dàn", "ci", "a"], "tag": "Polisíl·labes complexes"}, {"w": "acadèmic", "syl": ["a", "ca", "dè", "mic"], "tag": "Vocabulari acadèmic"}, {"w": "acceleració", "syl": ["ac", "ce", "le", "ra", "ci", "ó"], "tag": "Grups cultes"}, {"w": "accentuació", "syl": ["ac", "cen", "tu", "a", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "acceptabilitat", "syl": ["ac", "cep", "ta", "bi", "li", "tat"], "tag": "Vocabulari acadèmic"}, {"w": "accessibilitat", "syl": ["ac", "ces", "si", "bi", "li", "tat"], "tag": "Grups cultes"}, {"w": "accidentalment", "syl": ["ac", "ci", "den", "tal", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "aclimatació", "syl": ["a", "cli", "ma", "ta", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "acolliment", "syl": ["a", "co", "lli", "ment"], "tag": "Grups cultes"}, {"w": "acomiadament", "syl": ["a", "co", "mi", "a", "da", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "acompanyament", "syl": ["a", "com", "pa", "nya", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "acondicionament", "syl": ["a", "con", "di", "ci", "o", "na", "ment"], "tag": "Grups cultes"}, {"w": "acoblament", "syl": ["a", "co", "bla", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "acreditació", "syl": ["a", "cre", "di", "ta", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "acrobàcia", "syl": ["a", "cro", "bà", "ci", "a"], "tag": "Grups cultes"}, {"w": "actualització", "syl": ["ac", "tu", "a", "lit", "za", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "acumulació", "syl": ["a", "cu", "mu", "la", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "acusació", "syl": ["a", "cu", "sa", "ci", "ó"], "tag": "Grups cultes"}, {"w": "adaptabilitat", "syl": ["a", "dap", "ta", "bi", "li", "tat"], "tag": "Polisíl·labes complexes"}, {"w": "adequació", "syl": ["a", "de", "qu", "a", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "adherència", "syl": ["ad", "he", "rèn", "ci", "a"], "tag": "Grups cultes"}, {"w": "adjudicació", "syl": ["ad", "ju", "di", "ca", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "administració", "syl": ["ad", "mi", "nis", "tra", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "admirador", "syl": ["ad", "mi", "ra", "dor"], "tag": "Grups cultes"}, {"w": "admissió", "syl": ["ad", "mis", "si", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "adolescència", "syl": ["a", "do", "les", "cèn", "ci", "a"], "tag": "Vocabulari acadèmic"}, {"w": "adquisició", "syl": ["ad", "qu", "i", "si", "ci", "ó"], "tag": "Grups cultes"}, {"w": "adscripció", "syl": ["ads", "crip", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "adulteració", "syl": ["a", "dul", "te", "ra", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "advertència", "syl": ["ad", "ver", "tèn", "ci", "a"], "tag": "Grups cultes"}, {"w": "advocacia", "syl": ["ad", "vo", "ca", "ci", "a"], "tag": "Polisíl·labes complexes"}, {"w": "aerodinàmica", "syl": ["a", "e", "ro", "di", "nà", "mi", "ca"], "tag": "Vocabulari acadèmic"}, {"w": "aeronàutica", "syl": ["a", "e", "ro", "nàu", "ti", "ca"], "tag": "Grups cultes"}, {"w": "aeroport", "syl": ["a", "e", "ro", "port"], "tag": "Polisíl·labes complexes"}, {"w": "afabilitat", "syl": ["a", "fa", "bi", "li", "tat"], "tag": "Vocabulari acadèmic"}, {"w": "afectuositat", "syl": ["a", "fec", "tu", "o", "si", "tat"], "tag": "Grups cultes"}, {"w": "aferrissat", "syl": ["a", "fer", "ris", "sat"], "tag": "Polisíl·labes complexes"}, {"w": "aficionat", "syl": ["a", "fi", "ci", "o", "nat"], "tag": "Vocabulari acadèmic"}, {"w": "afiliació", "syl": ["a", "fi", "li", "a", "ci", "ó"], "tag": "Grups cultes"}, {"w": "afirmació", "syl": ["a", "fir", "ma", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "afluència", "syl": ["a", "flu", "èn", "ci", "a"], "tag": "Vocabulari acadèmic"}, {"w": "afrontament", "syl": ["a", "fron", "ta", "ment"], "tag": "Grups cultes"}, {"w": "agilització", "syl": ["a", "gi", "lit", "za", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "aglomeració", "syl": ["a", "glo", "me", "ra", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "agnosticisme", "syl": ["ag", "nos", "ti", "cis", "me"], "tag": "Grups cultes"}, {"w": "agraiment", "syl": ["a", "grai", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "agrimensura", "syl": ["a", "gri", "men", "su", "ra"], "tag": "Vocabulari acadèmic"}, {"w": "agropecuari", "syl": ["a", "gro", "pe", "cu", "a", "ri"], "tag": "Grups cultes"}, {"w": "agrupació", "syl": ["a", "gru", "pa", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "aiguabarreig", "syl": ["ai", "gu", "a", "bar", "reig"], "tag": "Vocabulari acadèmic"}, {"w": "aixecament", "syl": ["ai", "xe", "ca", "ment"], "tag": "Grups cultes"}, {"w": "ajornament", "syl": ["a", "jor", "na", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "ajustament", "syl": ["a", "jus", "ta", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "al·legoria", "syl": ["al·", "le", "go", "ri", "a"], "tag": "Grups cultes"}, {"w": "al·lèrgia", "syl": ["al·", "lèr", "gi", "a"], "tag": "Polisíl·labes complexes"}, {"w": "al·literació", "syl": ["al·", "li", "te", "ra", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "al·lucinació", "syl": ["al·", "lu", "ci", "na", "ci", "ó"], "tag": "Grups cultes"}, {"w": "al·lusió", "syl": ["al·", "lu", "si", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "alfabetització", "syl": ["al", "fa", "be", "tit", "za", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "algorisme", "syl": ["al", "go", "ris", "me"], "tag": "Grups cultes"}, {"w": "alienació", "syl": ["a", "li", "e", "na", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "alimentació", "syl": ["a", "li", "men", "ta", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "alliberament", "syl": ["a", "lli", "be", "ra", "ment"], "tag": "Grups cultes"}, {"w": "allotjament", "syl": ["a", "llot", "ja", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "allunyament", "syl": ["a", "llu", "nya", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "alternança", "syl": ["al", "ter", "nan", "ça"], "tag": "Grups cultes"}, {"w": "altitud", "syl": ["al", "ti", "tud"], "tag": "Polisíl·labes complexes"}, {"w": "altruisme", "syl": ["al", "tru", "is", "me"], "tag": "Vocabulari acadèmic"}, {"w": "amabilitat", "syl": ["a", "ma", "bi", "li", "tat"], "tag": "Grups cultes"}, {"w": "amalgama", "syl": ["a", "mal", "ga", "ma"], "tag": "Polisíl·labes complexes"}, {"w": "amanida", "syl": ["a", "ma", "ni", "da"], "tag": "Vocabulari acadèmic"}, {"w": "amargor", "syl": ["a", "mar", "gor"], "tag": "Grups cultes"}, {"w": "ambivalència", "syl": ["am", "bi", "va", "lèn", "ci", "a"], "tag": "Polisíl·labes complexes"}, {"w": "ambulància", "syl": ["am", "bu", "làn", "ci", "a"], "tag": "Vocabulari acadèmic"}, {"w": "amenaçador", "syl": ["a", "me", "na", "ça", "dor"], "tag": "Grups cultes"}, {"w": "americanisme", "syl": ["a", "me", "ri", "ca", "nis", "me"], "tag": "Polisíl·labes complexes"}, {"w": "amfiteatre", "syl": ["am", "fi", "te", "a", "tre"], "tag": "Vocabulari acadèmic"}, {"w": "ampliació", "syl": ["am", "pli", "a", "ci", "ó"], "tag": "Grups cultes"}, {"w": "amplificació", "syl": ["am", "pli", "fi", "ca", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "anacronisme", "syl": ["a", "na", "cro", "nis", "me"], "tag": "Vocabulari acadèmic"}, {"w": "analfabetisme", "syl": ["a", "nal", "fa", "be", "tis", "me"], "tag": "Grups cultes"}, {"w": "analitzador", "syl": ["a", "na", "lit", "za", "dor"], "tag": "Polisíl·labes complexes"}, {"w": "analogia", "syl": ["a", "na", "lo", "gi", "a"], "tag": "Vocabulari acadèmic"}, {"w": "anarquista", "syl": ["a", "nar", "qu", "is", "ta"], "tag": "Grups cultes"}, {"w": "anatomia", "syl": ["a", "na", "to", "mi", "a"], "tag": "Polisíl·labes complexes"}, {"w": "ancestral", "syl": ["an", "ces", "tral"], "tag": "Vocabulari acadèmic"}, {"w": "anecdotari", "syl": ["a", "nec", "do", "ta", "ri"], "tag": "Grups cultes"}, {"w": "anestesista", "syl": ["a", "nes", "te", "sis", "ta"], "tag": "Polisíl·labes complexes"}, {"w": "amfitrió", "syl": ["am", "fi", "tri", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "anglosaxó", "syl": ["an", "glo", "sa", "xó"], "tag": "Grups cultes"}, {"w": "aniquilació", "syl": ["a", "ni", "qu", "i", "la", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "aniversari", "syl": ["a", "ni", "ver", "sa", "ri"], "tag": "Vocabulari acadèmic"}, {"w": "anomalia", "syl": ["a", "no", "ma", "li", "a"], "tag": "Grups cultes"}, {"w": "anonimat", "syl": ["a", "no", "ni", "mat"], "tag": "Polisíl·labes complexes"}, {"w": "antagonista", "syl": ["an", "ta", "go", "nis", "ta"], "tag": "Vocabulari acadèmic"}, {"w": "antecessor", "syl": ["an", "te", "ces", "sor"], "tag": "Grups cultes"}, {"w": "anterioritat", "syl": ["an", "te", "ri", "o", "ri", "tat"], "tag": "Polisíl·labes complexes"}, {"w": "antibiòtic", "syl": ["an", "ti", "bi", "ò", "tic"], "tag": "Vocabulari acadèmic"}, {"w": "anticipació", "syl": ["an", "ti", "ci", "pa", "ci", "ó"], "tag": "Grups cultes"}, {"w": "anticossos", "syl": ["an", "ti", "cos", "sos"], "tag": "Polisíl·labes complexes"}, {"w": "antidemocràtic", "syl": ["an", "ti", "de", "mo", "crà", "tic"], "tag": "Vocabulari acadèmic"}, {"w": "antienvelliment", "syl": ["an", "ti", "en", "ve", "lli", "ment"], "tag": "Grups cultes"}, {"w": "antiguitat", "syl": ["an", "ti", "gu", "i", "tat"], "tag": "Polisíl·labes complexes"}, {"w": "antiinflamatori", "syl": ["an", "ti", "in", "fla", "ma", "to", "ri"], "tag": "Vocabulari acadèmic"}, {"w": "antipatia", "syl": ["an", "ti", "pa", "ti", "a"], "tag": "Grups cultes"}, {"w": "antiquari", "syl": ["an", "ti", "qu", "a", "ri"], "tag": "Polisíl·labes complexes"}, {"w": "antisèptic", "syl": ["an", "ti", "sèp", "tic"], "tag": "Vocabulari acadèmic"}, {"w": "antologia", "syl": ["an", "to", "lo", "gi", "a"], "tag": "Grups cultes"}, {"w": "antropologia", "syl": ["an", "tro", "po", "lo", "gi", "a"], "tag": "Polisíl·labes complexes"}, {"w": "anul·lació", "syl": ["a", "nul·", "la", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "aparador", "syl": ["a", "pa", "ra", "dor"], "tag": "Grups cultes"}, {"w": "aparença", "syl": ["a", "pa", "ren", "ça"], "tag": "Polisíl·labes complexes"}, {"w": "apartament", "syl": ["a", "par", "ta", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "apassionament", "syl": ["a", "pas", "si", "o", "na", "ment"], "tag": "Grups cultes"}, {"w": "apel·lació", "syl": ["a", "pel·", "la", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "apendicitis", "syl": ["a", "pen", "di", "ci", "tis"], "tag": "Vocabulari acadèmic"}, {"w": "apercebre", "syl": ["a", "per", "ce", "bre"], "tag": "Grups cultes"}, {"w": "apetència", "syl": ["a", "pe", "tèn", "ci", "a"], "tag": "Polisíl·labes complexes"}, {"w": "apicultura", "syl": ["a", "pi", "cul", "tu", "ra"], "tag": "Vocabulari acadèmic"}, {"w": "aplaudiment", "syl": ["a", "plau", "di", "ment"], "tag": "Grups cultes"}, {"w": "aplicació", "syl": ["a", "pli", "ca", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "apoderament", "syl": ["a", "po", "de", "ra", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "apologia", "syl": ["a", "po", "lo", "gi", "a"], "tag": "Grups cultes"}, {"w": "aportació", "syl": ["a", "por", "ta", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "apostolat", "syl": ["a", "pos", "to", "lat"], "tag": "Vocabulari acadèmic"}, {"w": "apreciació", "syl": ["a", "pre", "ci", "a", "ci", "ó"], "tag": "Grups cultes"}, {"w": "aprenentatge", "syl": ["a", "pre", "nen", "tat", "ge"], "tag": "Polisíl·labes complexes"}, {"w": "aprofitament", "syl": ["a", "pro", "fi", "ta", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "apropiació", "syl": ["a", "pro", "pi", "a", "ci", "ó"], "tag": "Grups cultes"}, {"w": "aprovacions", "syl": ["a", "pro", "va", "ci", "ons"], "tag": "Polisíl·labes complexes"}, {"w": "aproximació", "syl": ["a", "pro", "xi", "ma", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "aqueducte", "syl": ["a", "qu", "e", "duc", "te"], "tag": "Grups cultes"}, {"w": "equilibrisme", "syl": ["e", "qu", "i", "li", "bris", "me"], "tag": "Polisíl·labes complexes"}, {"w": "arbitratge", "syl": ["ar", "bi", "trat", "ge"], "tag": "Vocabulari acadèmic"}, {"w": "arboricultura", "syl": ["ar", "bo", "ri", "cul", "tu", "ra"], "tag": "Grups cultes"}, {"w": "arqueologia", "syl": ["ar", "qu", "e", "o", "lo", "gi", "a"], "tag": "Polisíl·labes complexes"}, {"w": "arquitectònic", "syl": ["ar", "qu", "i", "tec", "tò", "nic"], "tag": "Vocabulari acadèmic"}, {"w": "arrelament", "syl": ["ar", "re", "la", "ment"], "tag": "Grups cultes"}, {"w": "arrendament", "syl": ["ar", "ren", "da", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "arribada", "syl": ["ar", "ri", "ba", "da"], "tag": "Vocabulari acadèmic"}, {"w": "arrodoniment", "syl": ["ar", "ro", "do", "ni", "ment"], "tag": "Grups cultes"}, {"w": "arrossegament", "syl": ["ar", "ros", "se", "ga", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "articulació", "syl": ["ar", "ti", "cu", "la", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "artificialitat", "syl": ["ar", "ti", "fi", "ci", "a", "li", "tat"], "tag": "Grups cultes"}, {"w": "artilleria", "syl": ["ar", "ti", "lle", "ri", "a"], "tag": "Polisíl·labes complexes"}, {"w": "ascendència", "syl": ["as", "cen", "dèn", "ci", "a"], "tag": "Vocabulari acadèmic"}, {"w": "asèpsia", "syl": ["a", "sèp", "si", "a"], "tag": "Grups cultes"}, {"w": "asfaltatge", "syl": ["as", "fal", "tat", "ge"], "tag": "Polisíl·labes complexes"}, {"w": "assignatura", "syl": ["as", "sig", "na", "tu", "ra"], "tag": "Vocabulari acadèmic"}, {"w": "assistència", "syl": ["as", "sis", "tèn", "ci", "a"], "tag": "Grups cultes"}, {"w": "associacionisme", "syl": ["as", "so", "ci", "a", "ci", "o", "nis", "me"], "tag": "Polisíl·labes complexes"}, {"w": "asteroide", "syl": ["as", "te", "roi", "de"], "tag": "Vocabulari acadèmic"}, {"w": "astigmatisme", "syl": ["as", "tig", "ma", "tis", "me"], "tag": "Grups cultes"}, {"w": "astronomia", "syl": ["as", "tro", "no", "mi", "a"], "tag": "Polisíl·labes complexes"}, {"w": "atmosfera", "syl": ["at", "mos", "fe", "ra"], "tag": "Vocabulari acadèmic"}, {"w": "atomització", "syl": ["a", "to", "mit", "za", "ci", "ó"], "tag": "Grups cultes"}, {"w": "atracció", "syl": ["a", "trac", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "atreviment", "syl": ["a", "tre", "vi", "ment"], "tag": "Vocabulari acadèmic"}, {"w": "atribució", "syl": ["a", "tri", "bu", "ci", "ó"], "tag": "Grups cultes"}, {"w": "atropellament", "syl": ["a", "tro", "pe", "lla", "ment"], "tag": "Polisíl·labes complexes"}, {"w": "audiometria", "syl": ["au", "di", "o", "me", "tri", "a"], "tag": "Vocabulari acadèmic"}, {"w": "audiovisual", "syl": ["au", "di", "o", "vi", "su", "al"], "tag": "Grups cultes"}, {"w": "augmentatiu", "syl": ["aug", "men", "ta", "ti", "u"], "tag": "Polisíl·labes complexes"}, {"w": "autentificació", "syl": ["au", "ten", "ti", "fi", "ca", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "autobiografia", "syl": ["au", "to", "bi", "o", "gra", "fi", "a"], "tag": "Grups cultes"}, {"w": "autocràcia", "syl": ["au", "to", "crà", "ci", "a"], "tag": "Polisíl·labes complexes"}, {"w": "autodidacta", "syl": ["au", "to", "di", "dac", "ta"], "tag": "Vocabulari acadèmic"}, {"w": "autogestió", "syl": ["au", "to", "ges", "ti", "ó"], "tag": "Grups cultes"}, {"w": "automatització", "syl": ["au", "to", "ma", "tit", "za", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "automobilisme", "syl": ["au", "to", "mo", "bi", "lis", "me"], "tag": "Vocabulari acadèmic"}, {"w": "autonomia", "syl": ["au", "to", "no", "mi", "a"], "tag": "Grups cultes"}, {"w": "autoritarisme", "syl": ["au", "to", "ri", "ta", "ris", "me"], "tag": "Polisíl·labes complexes"}, {"w": "autorització", "syl": ["au", "to", "rit", "za", "ci", "ó"], "tag": "Vocabulari acadèmic"}, {"w": "auxiliarment", "syl": ["au", "xi", "li", "ar", "ment"], "tag": "Grups cultes"}, {"w": "avantguarda", "syl": ["a", "vant", "gu", "ar", "da"], "tag": "Polisíl·labes complexes"}, {"w": "aventurer", "syl": ["a", "ven", "tu", "rer"], "tag": "Vocabulari acadèmic"}, {"w": "avergonyiment", "syl": ["a", "ver", "go", "nyi", "ment"], "tag": "Grups cultes"}, {"w": "aviació", "syl": ["a", "vi", "a", "ci", "ó"], "tag": "Polisíl·labes complexes"}, {"w": "avituallament", "syl": ["a", "vi", "tu", "a", "lla", "ment"], "tag": "Vocabulari acadèmic"}]};


const PACBAL_VOCAB_DB = [
    { s: "Ella és la meva mare i jo sóc el seu...", opts: ["familiar", "germà", "fill", "senyor"], ans: 2, level: 1 },
    { s: "Un gos és un animal i un nen és...", opts: ["un infant", "una persona", "un alumne", "un número"], ans: 1, level: 1 },
    { s: "Jo començo la fila, sóc el primer. En Pere acaba la fila, és...", opts: ["el darrer", "el petit", "el segon", "el blau"], ans: 0, level: 1 },
    { s: "El conill tenia por i va...", opts: ["cridar", "cantar", "córrer", "fugir"], ans: 3, level: 1 },
    { s: "El dos és un número i el vermell és...", opts: ["un cor", "un senyor", "un color", "una lletra"], ans: 2, level: 1 },
    { s: "No hi vaig anar sol, la mare em va...", opts: ["comprar", "acompanyar", "separar", "ajudar"], ans: 1, level: 1 },
    { s: "Quan estic content sento...", opts: ["olor", "por", "tristesa", "alegria"], ans: 3, level: 1 },
    { s: "El que viu a França és...", opts: ["francès", "català", "baix", "europeu"], ans: 0, level: 1 },
    { s: "Va pensar una estona i va trobar...", opts: ["el pensament", "un anell", "la solució", "la llengua"], ans: 2, level: 1 },
    { s: "A l'hora de dinar paro...", opts: ["la cadira", "la taula", "el moble", "el plat"], ans: 1, level: 1 },
    { s: "La geografia és...", opts: ["un mapa", "un estel", "un país", "una ciència"], ans: 3, level: 1 },
    { s: "Li agradava la meva goma i, sense pagar, li vaig...", opts: ["donar", "menjar", "tornar", "vendre"], ans: 0, level: 1 },
    { s: "El riu és vida i n'hem de tenir cura, l'hem de...", opts: ["travessar", "embrutar", "conservar", "congelar"], ans: 2, level: 1 },
    { s: "Perquè una altra persona sàpiga què vols has de...", opts: ["pensar", "parlar", "callar", "amanir"], ans: 1, level: 1 },
    { s: "Al pare li agrada molt conduir, diumenge anirem tota la família d'excursió amb...", opts: ["moto", "cotxe", "avió", "tren"], ans: 1, level: 1 },

    { s: "L'espectacle ha tingut molt èxit. La sala era plena de...", opts: ["llums", "nois", "públic", "cadires"], ans: 2, level: 2 },
    { s: "Després de segar l'herba i regar les flors la mare va dir: és un bonic...", opts: ["jardí", "roser", "caminet", "matoll"], ans: 0, level: 2 },
    { s: "En Pau el van acceptar al club de futbol, estava content perquè el van...", opts: ["rebre", "disfressar", "admetre", "acompanyar"], ans: 2, level: 2 },
    { s: "Li agrada la consola, treballarà molt per poder-la...", opts: ["demanar", "desitjar", "vendre", "adquirir"], ans: 3, level: 2 },
    { s: "Els nens de 2n han assajat un conte, ara ja estan a punt per fer...", opts: ["la representació", "el concert", "la celebració", "la pintura"], ans: 0, level: 2 },
    { s: "Va fer un castell de sorra i una onada el va...", opts: ["trencar", "destruir", "aturar", "arrencar"], ans: 1, level: 2 },
    { s: "No es veu el fons perquè el pou és molt...", opts: ["fresc", "ample", "profund", "estret"], ans: 2, level: 2 },
    { s: "El pare ha venut dues vaques a bon preu. Ha fet un bon...", opts: ["negoci", "servei", "resultat", "esforç"], ans: 0, level: 2 },
    { s: "La mestra m'ha dit que he fet la feina ben feta, estic...", opts: ["magnífic", "content", "tranquil", "perfecte"], ans: 1, level: 2 },
    { s: "En Pau i en Joan fabriquen mobles, treballen en...", opts: ["una empresa", "un mercat", "un magatzem", "una botiga"], ans: 0, level: 2 },
    { s: "Aquesta pintura és una obra d'art. L'ha fet un gran...", opts: ["poeta", "artista", "músic", "doctor"], ans: 1, level: 2 },
    { s: "Havia plogut poc i el riu baixava sense aigua. Estava...", opts: ["humit", "ple", "sec", "fresc"], ans: 2, level: 2 },
    { s: "La tempesta ha fet tantes destrosses que feia por. Ha estat una tempesta...", opts: ["enorme", "especial", "terrible", "interessant"], ans: 2, level: 2 },
    { s: "Els dos germans es barallaven i la mare va haver de...", opts: ["intervenir", "ajudar", "lluitar", "callar"], ans: 0, level: 2 },
    { s: "Va prendre tant el sol que la pell se li va...", opts: ["destruir", "encendre", "tallar", "cremar"], ans: 3, level: 2 },

    { s: "En Nil té la responsabilitat de posar la data. Tota la setmana ha de complir aquest...", opts: ["càrrec", "treball", "material", "ofici"], ans: 0, level: 2 },
    { s: "En Joan menja molt i ha augmentat...", opts: ["la seva set", "el seu cansament", "la seva alçada", "el seu pes"], ans: 3, level: 2 },
    { s: "Aquest any la pomera de l'avi ha fet moltes pomes, ha donat bon...", opts: ["negoci", "fruit", "èxit", "model"], ans: 1, level: 2 },
    { s: "La Rosa mai porta pantalons, sempre va amb...", opts: ["un paraigua", "un barret", "un vestit", "una peça"], ans: 2, level: 2 },
    { s: "En Pol es va acabar tota la verdura perquè el seu pare li va...", opts: ["obligar", "agafar", "aturar", "deixar"], ans: 0, level: 2 },
    { s: "Jo no sabia que havia nascut el meu germà. El pare m'ha donat...", opts: ["la nota", "la notícia", "la pregunta", "l'opinió"], ans: 1, level: 2 },
    { s: "Perquè els pares puguin veure totes les pintures dels nens de segon, a la biblioteca fem...", opts: ["una representació", "una mostra", "una exposició", "una presentació"], ans: 2, level: 2 },
    { s: "La Marta ha comentat coses de la Berta que no són certes, el que ha dit és...", opts: ["segur", "dolent", "fals", "fosc"], ans: 2, level: 2 },
    { s: "La meva germana porta al dit un anell d'or i plata, és una bonica...", opts: ["pedra", "perla", "tireta", "joia"], ans: 3, level: 2 },
    { s: "La Joana avui s'ha barallat amb la seva germana petita perquè no l'ha deixat de...", opts: ["ferir", "contemplar", "provocar", "cridar"], ans: 2, level: 2 },
    { s: "La Laia té tanta son que al matí mai s'acaba de...", opts: ["dormir", "despertar", "despullar", "vestir"], ans: 1, level: 2 },
    { s: "Per saber què passa cada dia al món ens hem d'informar, per això podem llegir...", opts: ["una revista", "el diari", "una llibreta", "un llibre"], ans: 1, level: 2 },
    { s: "L'àvia viu molt lluny, per anar-la a veure hem de fer un llarg...", opts: ["viatge", "camí", "passeig", "carrer"], ans: 0, level: 2 },
    { s: "Aquest estiu fa el mateix temps que cada any, és un estiu...", opts: ["bonic", "normal", "diferent", "tranquil"], ans: 1, level: 2 },
    { s: "Ahir el pare va anar a comprar les peces de la caseta nova del gos, i després la vam...", opts: ["acabar", "realitzar", "formar", "construir"], ans: 3, level: 2 },

    { s: "En Pol fa el puzle. Només li falta col·locar...", opts: ["una fitxa", "un element", "una peça", "una figura"], ans: 2, level: 3 },
    { s: "Arreglen la carretera. Hi treballen molts...", opts: ["obrers", "fusters", "paletes", "amos"], ans: 0, level: 3 },
    { s: "Dilluns en Pol va fer 8 anys. Els pares li van fer una festa sorpresa. Tots junts ho van...", opts: ["aplaudir", "decidir", "celebrar", "preparar"], ans: 2, level: 3 },
    { s: "Tots els nens han pujat a l'autobús, ja no hi cap ningú més. L'autobús està...", opts: ["carregat", "arreglat", "complet", "obert"], ans: 2, level: 3 },
    { s: "La primera vegada que l'home va arribar a la lluna va ser un fet...", opts: ["interessant", "extraordinari", "estrany", "normal"], ans: 1, level: 3 },
    { s: "La Maria té 18 anys. Està en plena...", opts: ["infantesa", "forma", "joventut", "vellesa"], ans: 2, level: 3 },
    { s: "Hem pujat a peu els vuit pisos...", opts: ["de la casa", "del pis", "de l'edifici", "del portal"], ans: 2, level: 3 },
    { s: "Quasi tots els nens de la classe han votat la Berta per delegada de curs. La Berta ha guanyat...", opts: ["per poc", "per majoria", "per força", "per punts"], ans: 1, level: 3 },
    { s: "El prestatge de la paret no va caure a terra perquè la senyoreta el va...", opts: ["empènyer", "pintar", "mirar", "sostenir"], ans: 3, level: 3 },
    { s: "Van convocar una reunió de pares a l'escola. Tots els pares hi van...", opts: ["entrar", "acudir", "arribar", "córrer"], ans: 1, level: 3 },
    { s: "En Roc diu: em costa encistellar la pilota a la cistella de bàsquet, tinc força...", opts: ["facilitat", "alçada", "dificultat", "gana"], ans: 2, level: 3 },
    { s: "La Maria es va casar amb en Joel. Ara en Joel és el seu...", opts: ["amic", "germà", "marit", "company"], ans: 2, level: 3 },
    { s: "Avui m'he llevat tard. Si vull arribar a les 9 a l'escola he de caminar...", opts: ["lleuger", "lent", "normal", "tranquil"], ans: 0, level: 3 },
    { s: "Tinc un germà ros i un altre castany. Els meus germans tenen el cabell...", opts: ["igual", "fosc", "fi", "distint"], ans: 3, level: 3 },
    { s: "La mestra ens va dir que expliquéssim com era la classe. Tots els nens la vam...", opts: ["retallar", "pintar", "ensenyar", "descriure"], ans: 3, level: 3 }
];

const PACBAL_PHONEMIC_DB = [
    { w: "sol", phonemes: ["s", "o", "l"], clue: "☀️ Estrella que ens escalfa de dia", phase: 1 },
    { w: "bosc", phonemes: ["b", "o", "s", "c"], clue: "🌲 Lloc ple d'arbres i animals", phase: 1 },
    { w: "orca", phonemes: ["o", "r", "c", "a"], clue: "🐋 Mamífer marí blanc i negre", phase: 1 },
    { w: "anell", phonemes: ["a", "n", "e", "ll"], clue: "💍 Joia rodona que es posa al dit", phase: 1 },
    { w: "pruna", phonemes: ["p", "r", "u", "n", "a"], clue: "🟣 Fruita dolça de pell morada", phase: 1 },
    { w: "estel", phonemes: ["e", "s", "t", "e", "l"], clue: "⭐ Punt lluminós que brilla a la nit", phase: 1 },
    { w: "moble", phonemes: ["m", "o", "b", "l", "e"], clue: "🪑 Taula, cadira o armari de casa", phase: 1 },
    { w: "blocs", phonemes: ["b", "l", "o", "c", "s"], clue: "🧱 Peces per fer construccions", phase: 1 },
    { w: "groc", phonemes: ["g", "r", "o", "c"], clue: "💛 El color del sol i del plàtan", phase: 1 },
    { w: "xarxa", phonemes: ["x", "a", "r", "x", "a"], clue: "🕸️ Teixit de fils per pescar peixos", phase: 1 },
    { w: "iman", phonemes: ["i", "m", "a", "n"], clue: "🧲 Peça que atrau el ferro", phase: 1 },
    { w: "arma", phonemes: ["a", "r", "m", "a"], clue: "🛡️ Espasa o escut antic", phase: 1 },
    { w: "sucre", phonemes: ["s", "u", "c", "r", "e"], clue: "🍬 Pols blanca molt dolça", phase: 1 },
    { w: "pinya", phonemes: ["p", "i", "ny", "a"], clue: "🍍 Fruit tropical o del pi", phase: 1 },
    { w: "ànec", phonemes: ["à", "n", "e", "c"], clue: "🦆 Ocell aquàtic que fa quac-quac", phase: 1 },
    { w: "glaçó", phonemes: ["g", "l", "a", "ç", "ó"], clue: "🧊 Cub d'aigua congelada", phase: 1 },
    { w: "alta", phonemes: ["a", "l", "t", "a"], clue: "📏 Que té molta alçada", phase: 2 },
    { w: "premi", phonemes: ["p", "r", "e", "m", "i"], clue: "🏆 Recompensa que guanya el campió", phase: 2 },
    { w: "herba", phonemes: ["e", "r", "b", "a"], clue: "🌱 Planta verda que cobreix el prat", phase: 2 },
    { w: "llibre", phonemes: ["ll", "i", "b", "r", "e"], clue: "📖 Objecte amb fulls per llegir històries", phase: 2 },
    { w: "llarg", phonemes: ["ll", "a", "r", "g"], clue: "📏 Contrari de curt", phase: 2 },
    { w: "vista", phonemes: ["v", "i", "s", "t", "a"], clue: "👀 Sentit amb el qual mirem", phase: 2 },
    { w: "atac", phonemes: ["a", "t", "a", "c"], clue: "⚔️ Acció d'atacar", phase: 2 },
    { w: "creu", phonemes: ["c", "r", "e", "u"], clue: "➕ Signe de sumar o dues línies creuades", phase: 2 },
    { w: "únic", phonemes: ["ú", "n", "i", "c"], clue: "1️⃣ Que només n'hi ha un", phase: 2 },
    { w: "fort", phonemes: ["f", "o", "r", "t"], clue: "💪 Que té molta força", phase: 2 },
    { w: "crema", phonemes: ["c", "r", "e", "m", "a"], clue: "🍮 Postres dolces o pomada", phase: 2 },
    { w: "gra", phonemes: ["g", "r", "a"], clue: "🌾 Llavor petita de blat o arròs", phase: 2 },
    { w: "porta", phonemes: ["p", "o", "r", "t", "a"], clue: "🚪 Obertura per entrar a una sala", phase: 2 },
    { w: "amic", phonemes: ["a", "m", "i", "c"], clue: "🤝 Company que estimes molt", phase: 2 },
    { w: "gorra", phonemes: ["g", "o", "rr", "a"], clue: "🧢 Peça de roba amb visera per al cap", phase: 2 }
];

const PACBAL_ALPHABETIC_ITEMS = [
    { grapheme: "ny", soundLabel: "/ny/ de pinya", opts: ["pinya", "casa", "sol", "dit"], ans: 0 },
    { grapheme: "ll", soundLabel: "/ll/ de lluna", opts: ["mapa", "lluna", "foca", "gat"], ans: 1 },
    { grapheme: "b", soundLabel: "/b/ de boca", opts: ["dit", "poma", "boca", "casa"], ans: 2 },
    { grapheme: "d", soundLabel: "/d/ de dit", opts: ["boca", "poma", "sol", "dit"], ans: 3 },
    { grapheme: "p", soundLabel: "/p/ de poma", opts: ["poma", "boca", "dit", "gat"], ans: 0 },
    { grapheme: "q", soundLabel: "/k/ de quadern", opts: ["foca", "quadern", "lluna", "sol"], ans: 1 },
    { grapheme: "x", soundLabel: "/x/ de xarxa", opts: ["taula", "gos", "xarxa", "poma"], ans: 2 },
    { grapheme: "g", soundLabel: "/g/ de gat", opts: ["foca", "nena", "sol", "gat"], ans: 3 },
    { grapheme: "j", soundLabel: "/j/ de jardí", opts: ["jardí", "casa", "poma", "dit"], ans: 0 },
    { grapheme: "f", soundLabel: "/f/ de foca", opts: ["gos", "foca", "mapa", "taula"], ans: 1 },
    { grapheme: "v", soundLabel: "/v/ de vaixell", opts: ["boca", "poma", "vaixell", "sol"], ans: 2 },
    { grapheme: "r", soundLabel: "/r/ de ratolí", opts: ["gos", "mapa", "nena", "ratolí"], ans: 3 },
    { grapheme: "z", soundLabel: "/z/ de zebra", opts: ["zebra", "sol", "casa", "foca"], ans: 0 },
    { grapheme: "t", soundLabel: "/t/ de taula", opts: ["dit", "taula", "boca", "gos"], ans: 1 },
    { grapheme: "m", soundLabel: "/m/ de mapa", opts: ["nena", "sol", "mapa", "gat"], ans: 2 },
    { grapheme: "n", soundLabel: "/n/ de nena", opts: ["mapa", "foca", "gos", "nena"], ans: 3 }
];

const PACBAL_SCREENER_DATA = {
    "P5_T1": {
        label: "P5 · 1r Trimestre",
        tests: [
            { id: "SF", name: "Segmentació Fonèmica (SF)", max: 80, cutoffs: { risk: 0, some: 13, norm: 14 }, desc: "1 min · Sons de paraules orals" },
            { id: "PA", name: "Principi Alfabètic (PA)", max: 60, cutoffs: { risk: 4, some: 18, norm: 19 }, desc: "1 min · Sons de 60 lletres" }
        ],
        globalCutoffs: { risk: 11, some: 33, norm: 34 }
    },
    "P5_T2": {
        label: "P5 · 2n Trimestre",
        tests: [
            { id: "SF", name: "Segmentació Fonèmica (SF)", max: 80, cutoffs: { risk: 7, some: 24, norm: 25 }, desc: "1 min · Sons de paraules orals" },
            { id: "PA", name: "Principi Alfabètic (PA)", max: 60, cutoffs: { risk: 11, some: 27, norm: 28 }, desc: "1 min · Sons de 60 lletres" },
            { id: "LPSS", name: "Paraules Sense Sentit (LPSS)", max: 90, cutoffs: { risk: 10, some: 32, norm: 33 }, desc: "1 min · Lletres llegides correctament" },
            { id: "LPAS", name: "Paraules Amb Sentit (LPAS)", max: 32, cutoffs: { risk: 0, some: 9, norm: 10 }, desc: "1 min · Paraules llegides senceres" }
        ],
        globalCutoffs: { risk: 41, some: 101, norm: 102 }
    },
    "P5_T3": {
        label: "P5 · 3r Trimestre",
        tests: [
            { id: "SF", name: "Segmentació Fonèmica (SF)", max: 82, cutoffs: { risk: 15, some: 36, norm: 37 }, desc: "1 min · Sons de paraules orals" },
            { id: "PA", name: "Principi Alfabètic (PA)", max: 60, cutoffs: { risk: 18, some: 28, norm: 29 }, desc: "1 min · Sons de 60 lletres" },
            { id: "LPSS", name: "Paraules Sense Sentit (LPSS)", max: 90, cutoffs: { risk: 23, some: 39, norm: 40 }, desc: "1 min · Lletres llegides correctament" },
            { id: "LPAS", name: "Paraules Amb Sentit (LPAS)", max: 32, cutoffs: { risk: 3, some: 10, norm: 11 }, desc: "1 min · Paraules llegides senceres" }
        ],
        globalCutoffs: { risk: 69, some: 125, norm: 126 }
    },
    "1R_T1": {
        label: "1r Primària · 1r Trimestre",
        tests: [
            { id: "SF", name: "Segmentació Fonèmica (SF)", max: 98, cutoffs: { risk: 12, some: 31, norm: 32 }, desc: "1 min · pruna, orca, bosc, anell..." },
            { id: "PA", name: "Principi Alfabètic (PA)", max: 60, cutoffs: { risk: 14, some: 28, norm: 29 }, desc: "1 min · Sons de 60 grafies" },
            { id: "LPSS", name: "Paraules Sense Sentit (LPSS)", max: 186, cutoffs: { risk: 34, some: 69, norm: 70 }, desc: "1 min · polta, musafe, glodi..." },
            { id: "LPAS", name: "Paraules Amb Sentit (LPAS)", max: 40, cutoffs: { risk: 4, some: 15, norm: 16 }, desc: "1 min · nen, ric, cavall, segon..." },
            { id: "FLO", name: "Fluïdesa Lectura Oral (FLO)", max: 120, cutoffs: { risk: 10, some: 28, norm: 29 }, desc: "1 min · Mitjana pc/m 3 textos" },
            { id: "CL", name: "Comprensió Lectora (CL)", max: 8, cutoffs: { risk: 2, some: 5, norm: 6 }, desc: "Sense temps · El conte nou + L'Elvis" }
        ],
        globalCutoffs: { risk: 92, some: 203, norm: 204 }
    },
    "1R_T2": {
        label: "1r Primària · 2n Trimestre",
        tests: [
            { id: "SF", name: "Segmentació Fonèmica (SF)", max: 92, cutoffs: { risk: 22, some: 37, norm: 38 }, desc: "1 min · premi, alta, llibre, herba..." },
            { id: "LPSS", name: "Paraules Sense Sentit (LPSS)", max: 191, cutoffs: { risk: 52, some: 84, norm: 85 }, desc: "1 min · calpi, joma, cleu, bitula..." },
            { id: "LPAS", name: "Paraules Amb Sentit (LPAS)", max: 40, cutoffs: { risk: 7, some: 17, norm: 18 }, desc: "1 min · germà, planta, matí..." },
            { id: "FLO", name: "Fluïdesa Lectura Oral (FLO)", max: 120, cutoffs: { risk: 15, some: 30, norm: 31 }, desc: "1 min · Mitjana pc/m 3 textos" },
            { id: "CL", name: "Comprensió Lectora (CL)", max: 10, cutoffs: { risk: 2, some: 7, norm: 8 }, desc: "Sense temps · Formiga Piga + Un bon matí" }
        ],
        globalCutoffs: { risk: 112, some: 201, norm: 202 }
    },
    "1R_T3": {
        label: "1r Primària · 3r Trimestre",
        tests: [
            { id: "FLO", name: "Fluïdesa Lectura Oral (FLO)", max: 130, cutoffs: { risk: 25, some: 38, norm: 39 }, desc: "1 min · Can Caseta, Tarda jocs, Dos amics" },
            { id: "CL", name: "Comprensió Lectora (CL)", max: 10, cutoffs: { risk: 3, some: 6, norm: 7 }, desc: "Sense temps · Pingüí Martí + M'ha passat la son" },
            { id: "VC", name: "Vocabulari (Vc - orientatiu)", max: 15, cutoffs: { risk: 6, some: 10, norm: 11 }, desc: "Sense temps · 15 frases contextuals" }
        ],
        globalCutoffs: { risk: 30, some: 44, norm: 45 }
    },
    "2N_T1": {
        label: "2n Primària · 1r Trimestre",
        tests: [
            { id: "FLO", name: "Fluïdesa Lectura Oral (FLO)", max: 180, cutoffs: { risk: 30, some: 46, norm: 47 }, desc: "1 min · Moto voladora, Estrany animal, Desert" },
            { id: "CL", name: "Comprensió Lectora (CL)", max: 12, cutoffs: { risk: 4, some: 7, norm: 8 }, desc: "Sense temps · Ratolí i l'aigua + Cireres" },
            { id: "VC", name: "Vocabulari (Vc - orientatiu)", max: 15, cutoffs: { risk: 7, some: 10, norm: 11 }, desc: "Sense temps · 15 frases contextuals" }
        ],
        globalCutoffs: { risk: 36, some: 53, norm: 54 }
    },
    "2N_T2": {
        label: "2n Primària · 2n Trimestre",
        tests: [
            { id: "FLO", name: "Fluïdesa Lectura Oral (FLO)", max: 180, cutoffs: { risk: 42, some: 60, norm: 61 }, desc: "1 min · Estiu a l'Escala, Xim, En Roc" },
            { id: "CL", name: "Comprensió Lectora (CL)", max: 12, cutoffs: { risk: 3, some: 6, norm: 7 }, desc: "Sense temps · L'ànec blau + En Moll" },
            { id: "VC", name: "Vocabulari (Vc - orientatiu)", max: 15, cutoffs: { risk: 7, some: 10, norm: 11 }, desc: "Sense temps · 15 frases contextuals" }
        ],
        globalCutoffs: { risk: 47, some: 67, norm: 68 }
    },
    "2N_T3": {
        label: "2n Primària · 3r Trimestre",
        tests: [
            { id: "FLO", name: "Fluïdesa Lectura Oral (FLO)", max: 190, cutoffs: { risk: 46, some: 65, norm: 66 }, desc: "1 min · La meva tieta, Anell perdut, Colònies" },
            { id: "CL", name: "Comprensió Lectora (CL)", max: 12, cutoffs: { risk: 2, some: 5, norm: 6 }, desc: "Sense temps · Elefant Trapezi + Regal Sàmia" },
            { id: "VC", name: "Vocabulari (Vc - orientatiu)", max: 15, cutoffs: { risk: 8, some: 11, norm: 12 }, desc: "Sense temps · 15 frases contextuals" }
        ],
        globalCutoffs: { risk: 51, some: 71, norm: 72 }
    }
};

const DEFAULT_READINGS = {
    1: [
        {
            title: "El conte nou (PACBAL 1r)",
            text: "La Laura té un conte nou. Li ha regalat el seu avi. El conte parla d'un gat petit i mogut. Avui la Laura porta el conte a l'escola. La Fina ha llegit el conte als nens.",
            questions: [
                { q: "Què té la Laura?", opts: ["Un camió", "Un conte", "Una nina", "Un caramel"], ans: 1 },
                { q: "Qui li ha regalat el conte a la Laura?", opts: ["El pare", "La mare", "L'avi", "L'àvia"], ans: 2 },
                { q: "De què parla el conte?", opts: ["D'un nen", "D'un gat", "D'un cavall", "D'un gos"], ans: 1 },
                { q: "Qui ha llegit el conte als nens?", opts: ["La mare", "La Laura", "La Fina", "L'avi"], ans: 2 }
            ]
        },
        {
            title: "L'Elvis (PACBAL 1r)",
            text: "Hi havia una vegada un gos que es deia Elvis. L'Elvis era petit. Tenia el pèl marró. El gos estava avorrit. Volia un amic. La mama de l'Elvis va tenir un gosset petit. L'Elvis, ara té un amic!",
            questions: [
                { q: "Qui era l'Elvis?", opts: ["Un gat", "Un gos", "Un amic", "Un nen"], ans: 1 },
                { q: "Com era el pèl de l'Elvis?", opts: ["Gris", "Negre", "Marró", "Blanc"], ans: 2 },
                { q: "Què volia l'Elvis?", opts: ["Una casa", "La mama", "Un caramel", "Un amic"], ans: 3 },
                { q: "Què va tenir la mama?", opts: ["Un gosset", "Un gatet", "Un pollet", "Un cavallet"], ans: 0 }
            ]
        },
        {
            title: "La formiga Piga (PACBAL 1r)",
            text: "La formiga Piga vivia al bosc, en un cau sota terra. Com totes les formigues, cada dia sortia del cau a buscar menjar. Un dia, en un racó del bosc, va olorar una gran molla de pa. La molla de pa pesava tant, que no se la podia carregar a l'esquena. Però va tenir molta sort. Darrera seu, venia la seva amiga. Totes dues sí que la podien dur al cau!",
            questions: [
                { q: "Com es deia la formiga?", opts: ["Paga", "Piga", "Pega", "Riga"], ans: 1 },
                { q: "On tenia el cau la formiga?", opts: ["Sota terra", "Sota les fulles", "Sota un bolet", "Sota un arbre"], ans: 0 },
                { q: "Què feia quan sortia del cau?", opts: ["Prendre el sol", "Caminar una estona", "Buscar menjar", "Jugar"], ans: 2 },
                { q: "Què va olorar?", opts: ["Una flor", "Una molla de pa", "Una caca de gos", "Un animal del bosc"], ans: 1 },
                { q: "Qui va portar la molla de pa al cau?", opts: ["La formiga Piga tota sola", "La seva amiga", "La seva mama i l'amiga", "La formiga Piga i la seva amiga"], ans: 3 }
            ]
        },
        {
            title: "Un bon matí (PACBAL 1r)",
            text: "En Joan cada dia es lleva a les vuit. Es dutxa tot sol i es renta les dents. La seva mare li fa l'esmorzar. Menja pa amb tomàquet i pernil i beu una tassa de llet. Quan acaba, agafa la maleta i fa un petó a la seva mare. Tot content se'n va a l'escola. A en Joan li encanta llegir i jugar amb els seus amics. Anar a l'escola és molt divertit.",
            questions: [
                { q: "A quina hora es lleva en Joan?", opts: ["A les onze", "A les vuit", "A les set", "A les nou"], ans: 1 },
                { q: "Qui li fa l'esmorzar?", opts: ["La seva mare", "El seu pare", "L'àvia", "El seu germà"], ans: 0 },
                { q: "On va en Joan?", opts: ["Al carrer", "A comprar", "A l'escola", "Al pati"], ans: 2 },
                { q: "Quan va a l'escola en Joan?", opts: ["Després de llevar-se", "Després de rentar-se les dents", "Quan veu els seus amics", "Després d'esmorzar"], ans: 3 },
                { q: "Què li agrada fer a l'escola?", opts: ["Escriure i pintar", "Llegir i pintar", "Llegir i escriure", "Llegir i jugar"], ans: 3 }
            ]
        },
        {
            title: "El pingüí Martí (PACBAL 1r)",
            text: "El pingüí Martí va néixer al pol Sud. Un matí va trencar la closca de l'ou i va treure el cap a fora. Tot era blanc. Ell estava ficat en una bossa. Va mirar enlaire i va veure algú més gros que ell. Quan va sortir, el fred i el vent el van espantar. Volia tornar al seu cau. El seu pare li va dir: Martí, ja ets gran! Vés a buscar menjar al mar. En Martí va ficar la pota a l'aigua. Era tan freda! No m'agrada pas ser gran - va pensar.",
            questions: [
                { q: "On va néixer el pingüí Martí?", opts: ["A l'hospital", "A Catalunya", "Al pol Sud", "Al zoo"], ans: 2 },
                { q: "Quan va sortir de l'ou?", opts: ["Un vespre", "Una tarda", "Una nit", "Un matí"], ans: 3 },
                { q: "Per què es volia tornar a ficar al seu cau?", opts: ["Perquè es va espantar", "Perquè tenia por", "Perquè tenia gana", "Perquè tenia son"], ans: 0 },
                { q: "Què li va dir el seu pare?", opts: ["Martí, encara ets petit!", "Martí, vés a jugar!", "Martí, ja ets gran!", "Martí, vés a nedar!"], ans: 2 },
                { q: "Què fan els pingüins grans?", opts: ["Surten de l'ou", "Van a buscar menjar", "S'estan a la bossa", "Fiquen la pota a l'aigua"], ans: 1 }
            ]
        },
        {
            title: "M'ha passat la son (PACBAL 1r)",
            text: "Són les vuit del matí. La mare aixeca la persiana i crida la Joana. La Joana no es vol llevar. Vol dormir una mica més. Al cap d'una estona, la Joana surt del llit i es comença de vestir ben a poc a poc per anar a l'escola. La mare diu des de la cuina: Afanya't Joana! Se t'escaparà l'autobús. Ja tens la motxilla preparada per anar d'excursió. Ara sí que la Joana s'acaba de vestir de pressa. Baixa les escales corrent i diu: -Ja m'ha passat la son!",
            questions: [
                { q: "Quan desperta la Joana, la mare?", opts: ["Quan és clar", "A les vuit del matí", "A les deu del matí", "Quan ja fa sol"], ans: 1 },
                { q: "Per què la Joana no es vol llevar?", opts: ["Perquè a fora fa fred", "Perquè no es troba bé", "Perquè vol dormir més", "Perquè no li agrada la claror"], ans: 2 },
                { q: "Com es vesteix la Joana quan surt del llit?", opts: ["A poc a poc", "De pressa", "Malament", "Molt bé"], ans: 0 },
                { q: "Per què la Joana baixa corrent les escales?", opts: ["Perquè ha d'anar a l'escola", "Perquè té ganes d'anar d'excursió", "Perquè vol anar a esmorzar", "Perquè la mare la renyarà"], ans: 1 },
                { q: "Què diu la Joana?", opts: ["M'ha passat la gana", "M'ha passat el mal", "M'ha passat la son", "M'ha passat el fred"], ans: 2 }
            ]
        },
        {
            title: "El gat Neu",
            text: "La Martina té un gat molt petit que es diu Neu. Cada matí el gat beu llet tèbia i juga amb una pilota de llana blava al jardí de casa.",
            questions: [
                { q: "Com es diu el gat de la Martina?", opts: ["Neu", "Sol", "Blau"], ans: 0 },
                { q: "Amb què juga el gat al jardí?", opts: ["Amb un os", "Amb una pilota de llana", "Amb una caixa"], ans: 1 }
            ]
        },
        {
            title: "La poma vermella",
            text: "En Pau va a comprar fruita amb la seva mare. A la botiga trien una poma vermella, dues peres dolces i un plàtan madur per berenar al parc.",
            questions: [
                { q: "De quin color és la poma que trien?", opts: ["Verda", "Groga", "Vermella"], ans: 2 },
                { q: "On berenaran la fruita?", opts: ["A l'escola", "Al parc", "Al cotxe"], ans: 1 }
            ]
        },
        {
            title: "La tortuga Lola",
            text: "La tortuga Lola camina molt a poc a poc per l'herba verda. Quan surt el sol treu el cap de la closca i menja fulles tendres d'enciam.",
            questions: [
                { q: "Com camina la tortuga Lola?", opts: ["Molt ràpid", "Molt a poc a poc", "Saltant"], ans: 1 },
                { q: "Què menja quan surt el sol?", opts: ["Fulles d'enciam", "Pomes", "Pa sec"], ans: 0 }
            ]
        }
    ],
    2: [
        {
            title: "El ratolí que no volia dutxar-se (PACBAL 2n)",
            text: "Era un ratolí que vivia feliç en una casa de pagès. El seu cau era darrera la màquina de cosir. Cada dia al vespre tenia un problema: no volia dutxar-se. Un dia, després de rebolcar-se a la cort de porcs amb els seus amics, va tornar cap a casa. Va entrar ràpid, va passar per darrera la mestressa i va entrar al cau. La mestressa va dir: Quina pudor que sento! I ensumant, ensumant va arribar a la màquina de cosir. La mare del ratolí, espantada, va posar el ratolí a la dutxa i el va rentar amb sabó. És estrany! va pensar la mestressa. Ara sento bona olor. I el ratolí mai més va tenir mandra de dutxar-se.",
            questions: [
                { q: "Quan tenia el problema el ratolí?", opts: ["Al matí", "Al migdia", "A la tarda", "Al vespre"], ans: 3 },
                { q: "Què no li agradava fer al ratolí?", opts: ["Vestir-se", "Dutxar-se", "Ensabonar-se", "Embrutar-se"], ans: 1 },
                { q: "Qui fa mala olor?", opts: ["La mestressa", "La mare", "El ratolí", "El pagès"], ans: 2 },
                { q: "Què fa la mare amb el ratolí?", opts: ["El dutxa", "L'espanta", "L'amaga", "L'olora"], ans: 0 },
                { q: "Què sent la mestressa al final?", opts: ["Bona olor", "Pudor", "Soroll", "Mala olor"], ans: 0 },
                { q: "De què va la història?", opts: ["D'una mestressa que neteja", "D'un ratolí que li agrada cosir", "D'un ratolí que no li agrada dutxar-se", "D'uns amics que es dutxen"], ans: 2 }
            ]
        },
        {
            title: "Les cireres de la Maria (PACBAL 2n)",
            text: "És l'hora de pati. Com cada dia la Maria menja fruita. Avui la mare li ha posat un bon grapat de cireres vermelles i lluentes. La Maria se les menja amb delit i posa els pinyols a la carmanyola. Quan ja ha acabat, la carmanyola se li escapa de la mà i tot va per terra. La Marta s'ho mira des del tobogan. En Lluc i la Rosa la van a ajudar. Tot d'una en Lluc fa una proposta: - Per què no plantem els pinyols? Si creixen cirerers podrem agafar cireres amb les mans! Tots hi estan d'acord. Es posen a buscar un bon lloc, però sona el timbre. Només queda la classe de Mates. Després de dinar acabaran la feina.",
            questions: [
                { q: "Amb què porta les cireres la Maria?", opts: ["En una bossa", "A la mà", "A la butxaca", "En una carmanyola"], ans: 3 },
                { q: "Què li va caure per terra a la Maria?", opts: ["Totes les cireres i la carmanyola", "Alguns pinyols i algunes cireres", "Tots els pinyols i la carmanyola", "Només els pinyols"], ans: 2 },
                { q: "A quina part del dia passa aquest fet?", opts: ["Al pati de la tarda", "Al pati del matí", "Després de dinar", "A la sortida de l'escola"], ans: 1 },
                { q: "Quins nens ajuden la Maria?", opts: ["La Marta, en Lluc i la Rosa", "La Marta i la Rosa", "La Rosa i en Lluc", "La Marta i en Lluc"], ans: 2 },
                { q: "Quina classe hi ha després del pati?", opts: ["No hi ha cap classe", "Mates", "Música", "Naturals"], ans: 1 },
                { q: "Quina és la feina que han d'acabar després de dinar?", opts: ["Collir els pinyols de terra", "Collir cireres amb les mans", "Rentar la carmanyola", "Plantar els pinyols al terra"], ans: 3 }
            ]
        },
        {
            title: "L'ànec blau (PACBAL 2n)",
            text: "Era un bonic ànec blau. Era el fill gran d'una família d'ànecs. D'ànecs n'hi ha de moltes classes i colors diferents. Ell era l'únic ànec de color blau. Tots els seus germans i germanes el miraven estranyats. Uns deien que no era germà seu, que venia d'una altra terra. Els altres deien que havia caigut del cel. Un dia la seva mare els va explicar per què era blau. Resulta que quan feia una setmana que havia nascut, es va quedar adormit durant molts dies. No hi havia manera que es despertés. La mare va anar a buscar l'ànec metge. El doctor li va donar unes pastilles miraculoses de color blau. I per fi es va despertar, però el seu color havia canviat.",
            questions: [
                { q: "Per què el miraven estranyats els seus germans?", opts: ["Perquè era el gran", "Perquè era de color groc", "Perquè tenia molta son", "Perquè era diferent dels altres"], ans: 3 },
                { q: "Qui sabia per què l'ànec era blau?", opts: ["Els seus germans", "Els altres ànecs", "La seva família", "La seva mare"], ans: 3 },
                { q: "Quan es va quedar adormit?", opts: ["Quan tenia un any", "Quan tenia dos anys", "Quan tenia pocs dies", "Quan tenia un mes"], ans: 2 },
                { q: "Qui va anar a buscar la mare?", opts: ["L'ànec metge", "El metge del poble", "L'ànec més vell", "Els seus germans"], ans: 0 },
                { q: "Per què era blau l'ànec?", opts: ["Perquè era el fill gran", "Perquè havia dormit molt", "Perquè va prendre pastilles blaves", "Perquè l'havien pintat"], ans: 2 },
                { q: "De què tracta aquesta història?", opts: ["D'una mare ànec", "D'un ànec que era diferent", "D'un ànec que va caure", "D'un ànec que no podia dormir"], ans: 1 }
            ]
        },
        {
            title: "En Moll (PACBAL 2n)",
            text: "En Moll nedava en el seu mar tranquil quan de sobte va sentir un cargolí a la panxa. Quina gana! El cas és que ja estava tip de menjar algues. Les algues no tenien cap gust i va decidir de buscar alguna cosa millor per menjar. La família d'en Moll només menjaven algues. Va continuar nedant fent moure les aletes dins l'aigua. Al cap d'una estona va veure que de la sorra en sortia alguna cosa. Era un petit cuc. En Moll va obrir la boca per menjar-se'l. Però l'animaló se'l va mirar amb uns ulls tan tristos, que la boca se li va tancar. De fet, les algues no són pas tan dolentes va pensar en Moll mentre menjava.",
            questions: [
                { q: "Qui era en Moll?", opts: ["Un nen", "Un submarinista", "Una alga", "Un peix"], ans: 3 },
                { q: "Per què no li agradaven les algues?", opts: ["Perquè eren verdes", "Perquè li feien mal de panxa", "Perquè no eren bones", "Perquè no tenien cap gust"], ans: 3 },
                { q: "Què és el que buscava?", opts: ["Algues marines", "La seva família", "Un menjar millor", "Els seus amics"], ans: 2 },
                { q: "Què menjava la família d'en Moll?", opts: ["Algues i peixos", "Només algues", "Només peixos", "De tot"], ans: 1 },
                { q: "Per on nedava?", opts: ["Per sobre del mar", "Pel fons del mar", "Al costat de les roques", "A prop de les barques"], ans: 1 },
                { q: "Per què l'animaló es mirava en Moll amb els ulls tristos?", opts: ["Perquè no volia que se'l mengés", "Perquè no sabia què passava", "Perquè estava constipat", "Perquè tenia molta gana"], ans: 0 }
            ]
        },
        {
            title: "L'elefant Trapezi (PACBAL 2n)",
            text: "En Trapezi és un elefant petit. Viu a la selva de l'Àfrica en una manada amb molts elefants. La seva mare està preocupada. Sovint en Trapezi fa de les seves: amb la trompa tira sorra als altres elefants, els dóna cops, i així tot el dia. La seva mare el vol escarmentar. Un matí quan la manada marxa, deixa el seu fill dormint. Quan es desperta, en Trapezi queda tot parat i es troba molt sol. Comença a donar voltes i no veu ningú enlloc. En Trapezi està molt trist i tot sol no sap què fer. Crida desesperat la seva mare que arriba al cap de poca estona. De camí cap a la manada en Trapezi diu: A partir d'ara tractaré bé tots els elefants.",
            questions: [
                { q: "Amb qui viu en Trapezi?", opts: ["Amb un grup d'elefants", "Tot sol", "Amb la seva mare", "Amb els seus amics"], ans: 0 },
                { q: "Per què està preocupada la seva mare?", opts: ["Perquè fa el que vol", "Perquè molesta els altres elefants", "Perquè s'escapa de la manada", "Perquè no vol menjar"], ans: 1 },
                { q: "Què fa la mare per escarmentar en Trapezi?", opts: ["No el desperta perquè quedi sol", "Li dóna un cop amb la trompa", "Té gana i no li dóna esmorzar", "El fa aixecar abans d'hora"], ans: 0 },
                { q: "Per què la mare vol escarmentar en Trapezi?", opts: ["Perquè deixi d'empipar els altres elefants", "Perquè no s'escapi", "Perquè no prengui menjar", "Perquè els altres elefants puguin dormir"], ans: 0 },
                { q: "Què li diu en Trapezi a la seva mare?", opts: ["Que no vol tornar a la manada", "Que tractarà bé tots els elefants", "Que no li agrada que el deixin sol", "Que té molta gana"], ans: 1 },
                { q: "Per què en Trapezi ha après a tractar bé els altres elefants?", opts: ["Perquè la mare no hi és", "Perquè no veu ningú enlloc", "Perquè ha vist que sol no s'està bé", "Perquè no troba menjar"], ans: 2 }
            ]
        },
        {
            title: "Un regal per a la Sàmia (PACBAL 2n)",
            text: "Quina sorpresa va tenir la Sàmia! Damunt la taula de la cuina va veure una capsa de color rosa i lila que es movia! Dins hi havia un gosset preciós. Tenia el pèl blanc amb taques negres i marronoses. La Sàmia, feliç i contenta, va abraçar i va fer mil petons als pares que digueren: -Sàmia, ja sabem que jugaràs i estimaràs molt el gosset, però volem que el cuidis tu. Has d'alimentar-lo i portar-lo a passejar perquè pugui caminar, córrer i fer les seves necessitats. Des d'aquell dia han estat inseparables. Matí i tarda es veu la Sàmia i en Puc que caminen, corren i juguen. Fins i tot a la nit dormen de costat.",
            questions: [
                { q: "Quants colors té el gosset de la Sàmia?", opts: ["Quatre colors", "Molts colors", "Tres colors", "Dos colors"], ans: 2 },
                { q: "Quina condició van posar els pares a la Sàmia?", opts: ["Estimar molt l'animal", "Dormir al seu costat", "Jugar amb l'animal cada dia", "Cuidar ella sola del gosset"], ans: 3 },
                { q: "Per què els pares van regalar un gosset a la Sàmia?", opts: ["Perquè la Sàmia volia un regal", "Perquè el gosset era molt bonic", "Perquè li feia molta il·lusió tenir un gosset", "Perquè la Sàmia no tenia cap gos"], ans: 2 },
                { q: "Quina responsabilitat té la Sàmia amb l'animal cada dia?", opts: ["Donar-li menjar i beure", "Donar-li menjar i portar-lo a passejar", "Jugar-hi cada dia", "Caminar, córrer i jugar"], ans: 1 },
                { q: "Quan surten a passejar la Sàmia i en Puc?", opts: ["Cada dia al matí", "Matí i tarda", "A la nit", "Només a la tarda"], ans: 1 },
                { q: "On dorm en Puc?", opts: ["A l'habitació de la Sàmia", "A la capsa rosa i lila", "A la seva caseta", "En un coixí a la cuina"], ans: 0 }
            ]
        },        {
            title: "La formiga i l'espelma",
            text: "En Biel ha trobat una formiga vermella damunt de l'espelma groga. Amb molta cura l'ha posada sobre una fulla verda de l'arbre del pati perquè torni al seu formiguer.",
            questions: [
                { q: "On era la formiga al principi?", opts: ["Dins d'un got", "Damunt d'una espelma", "Sota una pedra"], ans: 1 },
                { q: "Per què la posa sobre una fulla?", opts: ["Perquè dormi", "Perquè torni al formiguer", "Per fer-li una foto"], ans: 1 }
            ]
        },
        {
            title: "El castell de sorra",
            text: "A la platja hem construït un castell gegant amb quatre torres altes. Hem fet servir una galleda blava, una pala petita i moltes petxines blanques per decorar la porta.",
            questions: [
                { q: "Quantes torres tenia el castell?", opts: ["Dues", "Quatre", "Sis"], ans: 1 },
                { q: "Amb què han decorat la porta?", opts: ["Amb pedres negres", "Amb algues", "Amb petxines blanques"], ans: 2 }
            ]
        },
        {
            title: "L'armari de l'àvia",
            text: "Dins de l'armari de fusta de l'àvia vam trobar un barret antic, una bufanda de llana vermella i una capsa plena de fotografies en blanc i negre.",
            questions: [
                { q: "De quin material era l'armari?", opts: ["De metall", "De fusta", "De vidre"], ans: 1 },
                { q: "Què hi havia dins de la capsa?", opts: ["Caramels", "Fotografies antigues", "Monedes"], ans: 1 }
            ]
        }
    ],
    3: [
        {
            title: "La brúixola daurada",
            text: "L'exploradora va obrir la seva brúixola daurada al mig del bosc. Havia de creuar un pont de fusta per arribar a la cova del drac tranquil, on guardava un llibre ple d'estrelles.",
            questions: [
                { q: "Quin objecte va obrir l'exploradora?", opts: ["Un mapa antic", "Una brúixola daurada", "Una llanterna"], ans: 1 },
                { q: "Què guardava el drac a la cova?", opts: ["Un tresor d'or", "Una flauta màgica", "Un llibre ple d'estrelles"], ans: 2 }
            ]
        },
        {
            title: "Excursió en bicicleta",
            text: "Dissabte vam sortir amb la bicicleta pel camí del riu. Vam veure una granota verda saltant entre les pedres i tres ànecs nedant tranquil·lament sota el sol.",
            questions: [
                { q: "Per on passava el camí?", opts: ["Pel mig de la ciutat", "Pel costat del riu", "Per la neu"], ans: 1 },
                { q: "Quin animal saltava entre les pedres?", opts: ["Un conill", "Una granota verda", "Un esquirol"], ans: 1 }
            ]
        },
        {
            title: "La biblioteca del barri",
            text: "Cada divendres a la tarda anem a la biblioteca per triar contes d'aventures. A la sala gran hi ha taules silencioses, prestatgeries plenes de llibres i un racó molt còmode amb coixins.",
            questions: [
                { q: "Quin dia de la setmana van a la biblioteca?", opts: ["Dilluns", "Dimecres", "Divendres"], ans: 2 },
                { q: "Què hi ha al racó còmode?", opts: ["Ordinadors", "Coixins", "Joguines"], ans: 1 }
            ]
        }
    ],
    4: [
        {
            title: "Al cim de la muntanya",
            text: "Diumenge vam pujar fins al cim de la muntanya amb la motxilla plena de castanyes i formatge. Des de dalt vam veure un vaixell blanc que navegava lentament pel mar blau.",
            questions: [
                { q: "Què portaven dins de la motxilla?", opts: ["Pomes i pa", "Castanyes i formatge", "Aigua i galetes"], ans: 1 },
                { q: "Què van veure des del cim de la muntanya?", opts: ["Un vaixell blanc", "Un tren vermell", "Una papallona gegant"], ans: 0 }
            ]
        },
        {
            title: "El rellotge de la plaça",
            text: "El rellotge antic de la plaça del poble fa sonar dotze campanades cada migdia. Quan toca l'hora, els coloms aixequen el vol tots alhora i donen una volta per sobre les teulades.",
            questions: [
                { q: "Quantes campanades sona el rellotge al migdia?", opts: ["Sis", "Deu", "Dotze"], ans: 2 },
                { q: "Què fan els coloms quan sona el rellotge?", opts: ["Baixen a menjar", "Aixequen el vol tots alhora", "S'amaguen"], ans: 1 }
            ]
        },
        {
            title: "Les papallones del jardí",
            text: "A la primavera el jardí s'omple de flors grogues i liles que atreuen desenes de papallones. Si t'hi acostes sense fer soroll, pots observar els dibuixos simètrics de les seves ales.",
            questions: [
                { q: "Què atreu les papallones al jardí?", opts: ["L'aigua de la font", "Les flors grogues i liles", "Els arbres alts"], ans: 1 },
                { q: "Com s'hi ha d'acostar per observar-les?", opts: ["Corrent ràpid", "Sense fer soroll", "Amb una xarxa"], ans: 1 }
            ]
        }
    ],
    5: [
        {
            title: "Experiment tèrmic",
            text: "Durant l'experiment al laboratori de l'escola, l'alumnat va observar com la temperatura de l'aigua canviava ràpidament. Aquesta investigació científica va demostrar com es produeix l'energia tèrmica de manera sostenible.",
            questions: [
                { q: "On es va fer l'experiment?", opts: ["Al gimnàs", "Al laboratori de l'escola", "A la biblioteca"], ans: 1 },
                { q: "Què va demostrar la investigació?", opts: ["Com es produeix l'energia tèrmica", "Com creixen les plantes", "Com es formen els núvols"], ans: 0 }
            ]
        },
        {
            title: "La biodiversitat marina",
            text: "El mar Mediterrani acull una extraordinària biodiversitat d'espècies animals i vegetals. Protegir les praderies de posidònia és fonamental perquè oxigenen l'aigua i serveixen de refugi per a milers de peixos.",
            questions: [
                { q: "Per què és important protegir la posidònia?", opts: ["Perquè fa ombra", "Perquè oxigena l'aigua i refugia peixos", "Perquè canvia el color de la sorra"], ans: 1 },
                { q: "De quin mar parla el text?", opts: ["Del mar Cantàbric", "Del mar Mediterrani", "De l'oceà Atlàntic"], ans: 1 }
            ]
        },
        {
            title: "L'arquitectura sostenible",
            text: "L'arquitectura moderna busca construir edificis que aprofitin al màxim la llum natural i l'energia solar. Utilitzar materials reciclables i aïllants tèrmics permet reduir dràsticament el consum d'electricitat durant tot l'any.",
            questions: [
                { q: "Quin objectiu té l'arquitectura sostenible?", opts: ["Fer edificis més alts", "Aprofitar la llum natural i reduir el consum elèctric", "Utilitzar només vidre"], ans: 1 },
                { q: "Quin tipus de materials fa servir?", opts: ["Reciclables i aïllants tèrmics", "Només pedra pesant", "Plàstic industrial"], ans: 0 }
            ]
        }
    ]
};

function generatePseudoword(phase) {
    const pacbalPseudo1 = ["buma", "bal", "naca", "rena", "tai", "nel", "lip", "gou", "ica", "gani", "erri", "allu", "fano", "edi", "cot", "foba", "ris", "cuvi", "matu", "rup", "sefu", "guba", "ulle", "irru", "xali", "doc"];
    const pacbalPseudo2 = ["polta", "musafe", "glodi", "umec", "orpa", "osal", "nart", "cluni", "napi", "pinaco", "brin", "dego", "gapis", "polt", "blafa", "bedofi", "gano", "eldis", "drem", "dulgo", "tusigo", "senc", "iscos", "faso", "manti", "pibla", "frecal", "loma", "epil", "reblu", "misfa", "solacu", "trion", "vuni", "iroc"];
    const pacbalPseudo3 = ["calpi", "joma", "cleu", "bitula", "apec", "mufa", "pitela", "xibro", "list", "ganpu", "flemu", "dunells", "trim", "llarsu", "duga", "llonca", "pinyeu", "gofilu", "plim", "gomi", "rincra", "nuva", "plits", "adic", "fusbu", "fluesa", "latera", "bristes", "trunc", "juca", "cruc", "sumbri", "fatida", "lisbi"];
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    if (phase === 1) return pick(pacbalPseudo1);
    if (phase === 2) return pick(pacbalPseudo2);
    if (phase === 3) return pick(pacbalPseudo3);
    const ccv = ["pla", "bra", "tri", "cro", "flu", "gre", "dre", "pri", "blu", "tra", "cle", "fro", "gra"];
    const cvc = ["par", "sol", "mar", "tes", "lor", "pin", "cal", "fos", "mel", "ban", "dir", "por", "sal", "ver"];
    const cv = ["pa", "ta", "ca", "ma", "na", "sa", "la", "ro", "pi", "te", "bo", "da", "mi", "nu", "fa", "ve"];
    const dig = ["nya", "llo", "xa", "txo", "ge", "qui", "gua", "nyo", "lla", "xec"];
    const endings = ["dor", "tic", "ment", "ble", "nat", "sio", "ral", "tor"];
    if (phase === 4) return pick(cv) + pick(dig) + pick(cv);
    return pick(ccv) + pick(cvc) + pick(endings);
}

function generateSmartDistractors(word) {
    const distractors = new Set();
    const swaps = [['b', 'd'], ['d', 'b'], ['p', 'q'], ['q', 'p'], ['m', 'n'], ['n', 'm']];
    for (const [from, to] of swaps) {
        if (word.includes(from)) distractors.add(word.replace(from, to));
    }
    if (word.length >= 4) {
        const idx = Math.floor(word.length / 2) - 1;
        const arr = word.split('');
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        const inv = arr.join('');
        if (inv !== word) distractors.add(inv);
    }
    if (word.length >= 5) {
        const cutIdx = Math.floor(word.length / 2);
        const omitted = word.slice(0, cutIdx) + word.slice(cutIdx + 1);
        if (omitted !== word) distractors.add(omitted);
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < word.length && distractors.size < 5; i++) {
        if (vowels.includes(word[i])) {
            const altV = vowels.find(v => v !== word[i]);
            const variant = word.slice(0, i) + altV + word.slice(i + 1);
            if (variant !== word) distractors.add(variant);
        }
    }
    while (distractors.size < 3) {
        const fake = word.slice(0, -1) + (word.endsWith('a') ? 'e' : 'a');
        if (fake !== word) distractors.add(fake);
        else distractors.add(word + "s");
    }
    return [word, ...Array.from(distractors).slice(0, 3)].sort(() => Math.random() - 0.5);
}

const STORAGE_KEY = "llegeix_mes_escola_pro_final_v1";

let appData = {
    students: [],
    customTexts: [],
    studentPin: "1234",
    a11y: { cream: false, spacing: false, bicolor: false }
};



function generateRandom3DigitPin() {
    return String(Math.floor(100 + Math.random() * 900));
}

let pendingStudentIdToUnlock = null;
let editingPinStudentId = null;

function promptStudentPin(studentId) {
    const st = appData.students.find(s => s.id === studentId);
    if (!st) return;
    if (!st.pin || !/^[0-9]{3}$/.test(String(st.pin))) {
        st.pin = generateRandom3DigitPin();
        saveStorage();
    }
    pendingStudentIdToUnlock = studentId;
    document.getElementById('pin-student-avatar').textContent = st.avatar;
    document.getElementById('pin-student-title').textContent = st.name + " (" + st.grade + ")";
    document.getElementById('inp-student-pin-attempt').value = "";
    document.getElementById('student-pin-error').style.display = "none";
    document.getElementById('modal-student-pin').classList.add('open');
    setTimeout(() => document.getElementById('inp-student-pin-attempt').focus(), 100);
}

function appendPinDigit(d) {
    const inp = document.getElementById('inp-student-pin-attempt');
    if (!inp) return;
    document.getElementById('student-pin-error').style.display = "none";
    if (inp.value.length < 3) {
        inp.value += d;
        if (inp.value.length === 3) {
            setTimeout(() => verifyStudentPin(), 120);
        }
    }
}

function clearPinDigits() {
    const inp = document.getElementById('inp-student-pin-attempt');
    if (!inp) return;
    inp.value = inp.value.slice(0, -1);
    document.getElementById('student-pin-error').style.display = "none";
}

function verifyStudentPin() {
    const attempt = document.getElementById('inp-student-pin-attempt').value.trim();
    const st = appData.students.find(s => s.id === pendingStudentIdToUnlock);
    if (!st) return;

    if (attempt === String(st.pin)) {
        playTone('ok');
        closeModal('modal-student-pin');
        applyStudentA11y(st);
        if (!st.screened) startScreeningTest(st.id);
        else startSession(st.id);
    } else {
        playTone('err');
        document.getElementById('student-pin-error').style.display = "block";
        document.getElementById('inp-student-pin-attempt').value = "";
    }
}

function openEditPinModal(studentId) {
    const st = appData.students.find(s => s.id === studentId);
    if (!st) return;
    if (!st.pin || !/^[0-9]{3}$/.test(String(st.pin))) {
        st.pin = generateRandom3DigitPin();
    }
    editingPinStudentId = studentId;
    document.getElementById('edit-pin-avatar').textContent = st.avatar;
    document.getElementById('edit-pin-student-name').textContent = "PIN de " + st.name + " (" + st.grade + ")";
    document.getElementById('inp-edit-pin-val').value = st.pin;
    document.getElementById('edit-pin-error').style.display = "none";
    document.getElementById('modal-edit-pin').classList.add('open');
    setTimeout(() => {
        const inp = document.getElementById('inp-edit-pin-val');
        inp.focus();
        inp.select();
    }, 100);
}

function saveEditedStudentPin() {
    const st = appData.students.find(s => s.id === editingPinStudentId);
    if (!st) return;
    const val = document.getElementById('inp-edit-pin-val').value.trim();
    if (!/^[0-9]{3}$/.test(val)) {
        document.getElementById('edit-pin-error').style.display = "block";
        return;
    }
    st.pin = val;
    saveStorage();
    closeModal('modal-edit-pin');
    renderTeacherDashboard();
    renderPinsManager();
    if (selectedPIStudentId === st.id) {
        const piPinInp = document.getElementById('pi-pin-input');
        if (piPinInp) piPinInp.value = st.pin;
    }
}

function printGroupPins(selectId) {
    const sel = document.getElementById(selectId);
    const filterVal = sel ? sel.value : 'ALL';
    const list = filterVal === 'ALL' ? appData.students : appData.students.filter(s => s.grade === filterVal);

    if (list.length === 0) {
        alert("No hi ha alumnes per imprimir en aquest grup.");
        return;
    }

    list.forEach(st => {
        if (!st.pin || !/^[0-9]{3}$/.test(String(st.pin))) {
            st.pin = generateRandom3DigitPin();
        }
    });
    saveStorage();

    const win = window.open('', '_blank', 'width=850,height=700');
    if (!win) {
        window.print();
        return;
    }

    const cardsHtml = list.map(st => `
        <div style="border:2px solid #2563EB; border-radius:14px; padding:14px; text-align:center; background:#fff; page-break-inside:avoid;">
            <div style="font-size:0.72rem; font-weight:700; color:#2563EB; text-transform:uppercase;">LlegeixMés · ${st.grade}</div>
            <div style="font-size:2rem; margin:4px 0;">${st.avatar}</div>
            <div style="font-size:1.1rem; font-weight:800; color:#0F172A; margin-bottom:8px;">${st.name}</div>
            <div style="background:#EFF6FF; border:1.5px dashed #2563EB; border-radius:10px; padding:8px; font-size:1.45rem; font-weight:800; letter-spacing:0.25em; color:#1D4ED8;">
                🔑 ${st.pin}
            </div>
        </div>
    `).join('');

    win.document.write(`
        <!DOCTYPE html>
        <html lang="ca">
        <head>
            <meta charset="UTF-8">
            <title>Targetes i llista de PINs · ${filterVal === 'ALL' ? "Tota l'escola" : filterVal}</title>
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; color: #0F172A; }
                h2 { margin: 0 0 6px 0; }
                p { margin: 0 0 20px 0; color: #475569; font-size: 0.9rem; }
                .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 28px; }
                table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 0.92rem; }
                th, td { border: 1px solid #CBD5E1; padding: 8px 12px; text-align: left; }
                th { background: #F1F5F9; }
                @media print { .no-print { display: none !important; } }
            </style>
        </head>
        <body>
            <div class="no-print" style="margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; background:#EFF6FF; padding:12px 16px; border-radius:10px;">
                <strong>🖨️ Vista d'impressió de codis PIN (${filterVal === 'ALL' ? 'Tots els grups' : filterVal})</strong>
                <button onclick="window.print()" style="background:#2563EB; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-weight:700; cursor:pointer;">Imprimir ara</button>
            </div>
            <h2>🔑 Codis PIN d'accés · ${filterVal === 'ALL' ? 'Tots els grups' : 'Grup ' + filterVal}</h2>
            <p>Retalla les targetes per als alumnes o conserva la taula resum per al docent.</p>
            <div class="grid">${cardsHtml}</div>
            <h3>📋 Llista resum per al mestre/a</h3>
            <table>
                <thead>
                    <tr><th>Alumne</th><th>Grup classe</th><th>Fase</th><th>PIN (3 xifres)</th></tr>
                </thead>
                <tbody>
                    ${list.map(st => `<tr><td><strong>${st.avatar} ${st.name}</strong></td><td>${st.grade}</td><td>Fase ${st.phase}</td><td style="font-weight:800; font-size:1.1rem; letter-spacing:0.15em;">${st.pin}</td></tr>`).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `);
    win.document.close();
}


function initStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            appData = JSON.parse(saved);
            if (!appData.customTexts) appData.customTexts = [];
            if (!appData.a11y) appData.a11y = { cream: false, spacing: false, bicolor: false };
            if (Array.isArray(appData.students)) {
                appData.students.forEach(st => {
                    if (!st.pin || !/^[0-9]{3}$/.test(String(st.pin))) {
                        st.pin = generateRandom3DigitPin();
                    }
                });
            }
        } catch (e) {
            appData.students = [];
        }
    }
    applyA11yClasses();
}

function saveStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    scheduleCloudPush();
}

function getPetForXP(xp) {
    let current = PET_EVOLUTIONS[0];
    for (const p of PET_EVOLUTIONS) {
        if ((xp || 0) >= p.minXp) current = p;
    }
    return current;
}

function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const colors = ['#2563EB', '#10B981', '#F59E0B', '#7C3AED', '#EF4444'];
    for (let i = 0; i < 85; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 40 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5
        });
    }
    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.r, p.r * 1.4);
            p.y += Math.cos(frame * 0.05 + p.d) + 3.2;
            p.x += Math.sin(frame * 0.05) * 1.5;
        });
        frame++;
        if (frame < 130) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
}

function toggleA11yBar() {
    document.getElementById('a11y-bar').classList.toggle('open');
}

function toggleA11yOption(opt) {
    appData.a11y[opt] = !appData.a11y[opt];
    saveStorage();
    applyA11yClasses();
}

function applyA11yClasses() {
    document.body.classList.toggle('a11y-cream', !!appData.a11y.cream);
    document.body.classList.toggle('a11y-spacing', !!appData.a11y.spacing);

    document.getElementById('btn-a11y-cream').classList.toggle('active', !!appData.a11y.cream);
    document.getElementById('btn-a11y-spacing').classList.toggle('active', !!appData.a11y.spacing);
    document.getElementById('btn-a11y-bicolor').classList.toggle('active', !!appData.a11y.bicolor);
}

function applyStudentA11y(student) {
    if (!student || !student.a11yProfile) return;
    if (student.a11yProfile === 'cream') {
        appData.a11y.cream = true;
    } else if (student.a11yProfile === 'bicolor') {
        appData.a11y.bicolor = true;
        appData.a11y.spacing = true;
    }
    applyA11yClasses();
}

function splitWordBicolor(word) {
    const vowels = "aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜ";
    const parts = [];
    let cur = "";
    for (let i = 0; i < word.length; i++) {
        cur += word[i];
        if (vowels.includes(word[i]) && i < word.length - 1 && !vowels.includes(word[i + 1])) {
            parts.push(cur);
            cur = "";
        }
    }
    if (cur) {
        if (parts.length && cur.length === 1 && !vowels.includes(cur)) parts[parts.length - 1] += cur;
        else parts.push(cur);
    }
    return parts.map((p, idx) => `<span class="${idx % 2 === 0 ? 'syl-a' : 'syl-b'}">${p}</span>`).join('');
}

let currentStudent = null;
let selectedPIStudentId = null;
let activePacerInterval = null;

function clearTimers() {
    if (activePacerInterval) {
        clearInterval(activePacerInterval);
        activePacerInterval = null;
    }
}

function switchView(viewId) {
    clearTimers();
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    renderHomeStudents();
    switchView('view-home');
}

function playTone(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'ok') {
            osc.frequency.setValueAtTime(523.25, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.14);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.16);
        } else if (type === 'err') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(175, ctx.currentTime + 0.18);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        }
    } catch (e) {}
}

function renderHomeStudents() {
    const grid = document.getElementById('students-grid');
    grid.innerHTML = "";

    if (appData.students.length === 0) {
        grid.style.display = "block";
        grid.innerHTML = `
            <div class="card" style="text-align:center; padding:44px 24px; border:2px dashed var(--border);">
                <div style="font-size:3rem; margin-bottom:10px;">🎒</div>
                <h3 style="font-size:1.25rem; margin-bottom:6px;">L'aula està llesta per començar</h3>
                <p style="color:var(--text-muted); max-width:500px; margin:0 auto 20px auto; font-size:0.94rem;">
                    Encara no hi ha cap alumne donat d'alta en aquest dispositiu. Crea el primer perfil per iniciar el test de cribratge inicial o escaneja un carnet QR d'un altre dispositiu.
                </p>
                <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
                    <button class="btn btn-outline" onclick="openQRScannerModal()">📷 Escanejar carnet QR</button>
                    <button class="btn btn-primary" onclick="openNewStudentModal()">+ Afegir primer alumne</button>
                </div>
            </div>
        `;
        return;
    }

    const filterVal = document.getElementById('home-group-filter') ? document.getElementById('home-group-filter').value : 'ALL';
    const filteredStudents = filterVal === 'ALL' ? appData.students : appData.students.filter(s => s.grade === filterVal);

    if (filteredStudents.length === 0) {
        grid.style.display = "block";
        grid.innerHTML = `<div class="card" style="text-align:center; padding:32px;"><p style="color:var(--text-muted);">No hi ha cap alumne assignat al grup <strong>${filterVal}</strong>.</p></div>`;
        return;
    }

    grid.style.display = "grid";

    filteredStudents.forEach(st => {
        const lastSes = st.sessions[st.sessions.length - 1];
        const ppmText = lastSes ? `${lastSes.ppm} PPM` : "Pendent cribratge";
        const accText = lastSes ? `${lastSes.accuracy}% precisió` : "Sessió 0";
        const pet = getPetForXP(st.xp || 0);
        const stickersCount = (st.stickers || []).length;

        const card = document.createElement('div');
        card.className = 'student-card';
        card.onclick = () => {
            promptStudentPin(st.id);
        };
        card.innerHTML = `
            <div class="student-top">
                <div class="avatar-circle">${st.avatar}</div>
                <div class="student-info">
                    <h3>${st.name}</h3>
                    <span class="badge badge-blue">${st.grade}</span>
                    ${!st.screened
                        ? `<span class="badge badge-amber" style="margin-left:4px;">🩺 Test inicial</span>`
                        : `<span class="badge badge-green" style="margin-left:4px;">Fase ${st.phase}</span>`}
                </div>
            </div>
            <div class="gamification-bar">
                <span>${pet.icon} ${pet.title}</span>
                <span>🎴 ${stickersCount}/${STICKERS_CATALOG.length} · ⭐ ${st.xp || 0} XP</span>
            </div>
            <div class="student-meta">
                <span>⚡ ${ppmText}</span>
                <span>🎯 ${accText}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.querySelectorAll('.avatar-opt').forEach(opt => {
    opt.addEventListener('click', () => {
        document.querySelectorAll('.avatar-opt').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
    });
});

function openNewStudentModal() {
    document.getElementById('inp-student-name').value = "";
    const pinInp = document.getElementById('inp-student-custom-pin');
    if (pinInp) pinInp.value = generateRandom3DigitPin();
    document.getElementById('modal-new-student').classList.add('open');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');
}

function createStudent() {
    const name = document.getElementById('inp-student-name').value.trim();
    const grade = document.getElementById('inp-student-grade').value;
    const startMode = document.getElementById('inp-student-startmode').value;
    const avatarEl = document.querySelector('.avatar-opt.selected');
    const avatar = avatarEl ? avatarEl.dataset.av : "🦊";

    if (!name) {
        alert("Escriu el nom de l'alumne.");
        return;
    }

    let phase = 1;
    let speed = 1350;
    if (grade.startsWith("2n")) { phase = 2; speed = 1200; }
    else if (grade.startsWith("3r")) { phase = 3; speed = 1050; }
    else if (grade.startsWith("4t")) { phase = 4; speed = 950; }
    else if (grade.startsWith("5è") || grade.startsWith("6è")) { phase = 5; speed = 850; }

    const pinInp = document.getElementById('inp-student-custom-pin');
    const rawPin = pinInp ? pinInp.value.trim() : "";
    const pin = (/^[0-9]{3}$/.test(rawPin)) ? rawPin : generateRandom3DigitPin();

    const newSt = {
        id: "st_" + Date.now(),
        name,
        grade,
        pin,
        avatar,
        phase,
        tachSpeed: speed,
        xp: 0,
        streakDays: 1,
        stickers: [],
        screened: startMode === "direct",
        a11yProfile: "none",
        phonemeStats: {},
        sessions: []
    };

    appData.students.push(newSt);
    saveStorage();
    closeModal('modal-new-student');
    renderHomeStudents();
    if (document.getElementById('view-teacher').classList.contains('active')) {
        renderTeacherDashboard();
    }
}

let sessionState = null;

function updateComboUI() {
    const badge = document.getElementById('ses-combo-badge');
    if (!badge) return;
    if (sessionState && sessionState.combo >= 2) {
        badge.style.display = "inline-flex";
        badge.textContent = `🔥 Ratxa x${sessionState.combo}`;
    } else {
        badge.style.display = "none";
    }
}

function startScreeningTest(studentId) {
    currentStudent = appData.students.find(s => s.id === studentId);
    if (!currentStudent) return;

    const screeningSteps = [
        { type: 'flash', word: "boca", tag: "Discriminació b/d", level: 1, speedOverride: 1300 },
        { type: 'flash', word: "pilota", tag: "Síl·labes directes CV", level: 1, speedOverride: 1200 },
        { type: 'flash', word: "espelma", tag: "Síl·labes mixtes CVC", level: 2, speedOverride: 1150 },
        { type: 'flash', word: "parlo", tag: "Pseudoparaules", isPseudo: true, level: 2, speedOverride: 1150 },
        { type: 'flash', word: "brúixola", tag: "Travades br/bl", level: 3, speedOverride: 1050 },
        { type: 'flash', word: "platònic", tag: "Pseudoparaules", isPseudo: true, level: 3, speedOverride: 1050 },
        { type: 'flash', word: "muntanya", tag: "Dígraf ny", level: 4, speedOverride: 950 },
        { type: 'flash', word: "pel·lícula", tag: "Ela geminada l·l", level: 4, speedOverride: 950 },
        { type: 'flash', word: "extraordinari", tag: "Polisíl·labes complexes", level: 5, speedOverride: 850 },
        { type: 'reading', passage: DEFAULT_READINGS[Math.min(5, Math.max(1, currentStudent.phase))][0], isScreening: true }
    ];

    sessionState = {
        isScreening: true,
        steps: screeningSteps,
        currentIndex: 0,
        correctCount: 0,
        totalQuestions: 0,
        levelHits: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        currentSpeed: 1200,
        streak: 0,
        combo: 0,
        errorQueue: [],
        inRecoveryMode: false,
        recoveredCount: 0,
        initialErrorCount: 0,
        measuredPPM: 60,
        prosodyRating: "Completada"
    };

    document.getElementById('ses-avatar').textContent = currentStudent.avatar;
    document.getElementById('ses-student-name').textContent = currentStudent.name;
    document.getElementById('ses-phase-badge').textContent = "🩺 Test de cribratge inicial";
    updateComboUI();

    switchView('view-session');
    renderCurrentStep();
}

function startSession(studentId) {
    currentStudent = appData.students.find(s => s.id === studentId);
    if (!currentStudent) return;

    const phase = currentStudent.phase;
    const rawPool = [...LEXICON_DB[phase]];

    const samplePool = rawPool.sort(() => Math.random() - 0.5).slice(0, 35);
    samplePool.sort((a, b) => {
        const statA = currentStudent.phonemeStats[a.tag];
        const statB = currentStudent.phonemeStats[b.tag];
        const rateA = statA ? statA.ok / statA.total : 0.85;
        const rateB = statB ? statB.ok / statB.total : 0.85;
        return rateA - rateB;
    });

    const steps = [];

    for (let i = 0; i < 2; i++) {
        const item = samplePool[i % samplePool.length];
        steps.push({ type: 'flash', word: item.w, tag: item.tag, isPseudo: false });
    }

    const sacItem = samplePool[2 % samplePool.length];
    steps.push({ type: 'saccadic', word: sacItem.w, tag: "Rastreig ocular" });

    const noiseItem = samplePool[3 % samplePool.length];
    steps.push({ type: 'visual_noise', word: noiseItem.w, tag: "Discriminació visual" });

    const sylItem = samplePool.find(x => x.syl && x.syl.length >= 2) || samplePool[4];
    steps.push({ type: 'syllables', word: sylItem.w, syl: sylItem.syl, tag: sylItem.tag });

    const chains = CHAIN_WORDS_DB[phase];
    const chainStr = chains[Math.floor(Math.random() * chains.length)];
    steps.push({ type: 'word_chain', chain: chainStr, tag: "Segmentació lèxica" });

    if (phase <= 2) {
        const alphaItem = PACBAL_ALPHABETIC_ITEMS[Math.floor(Math.random() * PACBAL_ALPHABETIC_ITEMS.length)];
        steps.push({ type: 'pacbal_alphabetic', item: alphaItem, tag: "Principi alfabètic (PACBAL)" });
    }

    const phonPool = PACBAL_PHONEMIC_DB.filter(x => phase === 1 ? x.phase === 1 : true);
    const phonItem = phonPool[Math.floor(Math.random() * phonPool.length)];
    steps.push({ type: 'pacbal_phonemic', item: phonItem, tag: "Segmentació fonèmica (PACBAL)" });

    const sentences = SENTENCE_SCRAMBLE_DB[phase];
    const sentenceWords = sentences[Math.floor(Math.random() * sentences.length)];
    steps.push({ type: 'sentence_scramble', words: sentenceWords, tag: "Construcció sintàctica" });

    const vocabPool = PACBAL_VOCAB_DB.filter(v => phase <= 1 ? v.level === 1 : (phase === 2 ? v.level <= 2 : true));
    const vocabItem = vocabPool[Math.floor(Math.random() * vocabPool.length)];
    steps.push({ type: 'pacbal_vocab', item: vocabItem, tag: "Vocabulari contextual (PACBAL)" });

    for (let i = 0; i < 2; i++) {
        const pw = generatePseudoword(phase);
        steps.push({ type: 'flash', word: pw, tag: "Pseudoparaules (PACBAL)", isPseudo: true });
    }

    const customForPhase = appData.customTexts.filter(ct => ct.phase === phase);
    const availableTexts = customForPhase.length > 0
        ? [...customForPhase, ...DEFAULT_READINGS[phase]]
        : DEFAULT_READINGS[phase];
    const chosenPassage = availableTexts[Math.floor(Math.random() * availableTexts.length)];

    steps.push({ type: 'reading', passage: chosenPassage });

    sessionState = {
        isScreening: false,
        steps,
        currentIndex: 0,
        correctCount: 0,
        totalQuestions: 0,
        currentSpeed: currentStudent.tachSpeed,
        streak: 0,
        combo: 0,
        errorQueue: [],
        inRecoveryMode: false,
        recoveredCount: 0,
        initialErrorCount: 0,
        measuredPPM: PHASES_INFO[phase].expectedPPM,
        prosodyRating: "Completada"
    };

    document.getElementById('ses-avatar').textContent = currentStudent.avatar;
    document.getElementById('ses-student-name').textContent = currentStudent.name;
    document.getElementById('ses-phase-badge').textContent = `Fase ${phase}`;
    updateComboUI();

    switchView('view-session');
    renderCurrentStep();
}

function abortSession() {
    if (confirm("Vols sortir de la sessió actual? El progrés no es desarà.")) {
        goHome();
    }
}

function recordPhonemeResult(tag, isOk) {
    if (!tag) return;
    if (!currentStudent.phonemeStats[tag]) {
        currentStudent.phonemeStats[tag] = { ok: 0, total: 0 };
    }
    currentStudent.phonemeStats[tag].total += 1;
    if (isOk) currentStudent.phonemeStats[tag].ok += 1;
}

function renderCurrentStep() {
    clearTimers();
    updateComboUI();
    const total = sessionState.steps.length;
    const idx = sessionState.currentIndex;

    if (idx >= total) {
        if (!sessionState.isScreening && sessionState.errorQueue.length > 0) {
            if (!sessionState.inRecoveryMode) {
                sessionState.inRecoveryMode = true;
                sessionState.initialErrorCount = sessionState.errorQueue.length;
            }
            const retryItem = sessionState.errorQueue.shift();
            document.getElementById('ses-step-counter').textContent = `🔄 Càpsula de consolidació`;
            document.getElementById('ses-progress-bar').style.width = `96%`;
            renderFlashStep(retryItem, true);
            return;
        } else {
            finishSession();
            return;
        }
    }

    const step = sessionState.steps[idx];
    document.getElementById('ses-step-counter').textContent = `Repte ${idx + 1} / ${total}`;
    document.getElementById('ses-progress-bar').style.width = `${Math.round((idx / total) * 100)}%`;

    if (step.type === 'flash') renderFlashStep(step, false);
    else if (step.type === 'saccadic') renderSaccadicStep(step);
    else if (step.type === 'visual_noise') renderVisualNoiseStep(step);
    else if (step.type === 'syllables') renderSyllableStep(step);
    else if (step.type === 'word_chain') renderWordChainStep(step);
    else if (step.type === 'sentence_scramble') renderSentenceScrambleStep(step);
    else if (step.type === 'pacbal_alphabetic') renderPacbalAlphabeticStep(step);
    else if (step.type === 'pacbal_phonemic') renderPacbalPhonemicStep(step);
    else if (step.type === 'pacbal_vocab') renderPacbalVocabStep(step);
    else if (step.type === 'reading') renderReadingStep(step);
}

function renderFlashStep(step, isRecovery) {
    const stage = document.getElementById('game-stage');
    const displaySpeed = step.speedOverride || sessionState.currentSpeed;
    const label = isRecovery
        ? "🔄 Càpsula de repàs · Fixa-t'hi bé!"
        : (step.isPseudo ? "🛸 Paraula inventada (ruta fonològica)" : "⚡ Lectura flash");

    stage.innerHTML = `
        <span class="game-tag">${label}</span>
        <span class="speed-indicator">⏱️ ${displaySpeed} ms</span>
        <p style="color:var(--text-muted); margin-top:16px;">Fixa la mirada al centre del quadre...</p>
        <div id="flash-box" class="flash-box">👀</div>
        <div id="flash-options" class="options-grid" style="visibility:hidden;"></div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const box = document.getElementById('flash-box');
    const optsContainer = document.getElementById('flash-options');

    setTimeout(() => {
        if (!document.getElementById('flash-box')) return;
        box.textContent = step.word;
        box.classList.add('active-word');

        setTimeout(() => {
            if (!document.getElementById('flash-box')) return;
            box.textContent = "❓";
            box.classList.remove('active-word');

            const choices = generateSmartDistractors(step.word);
            optsContainer.innerHTML = "";
            choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = choice;
                btn.onclick = () => handleFlashAnswer(btn, choice, step, isRecovery);
                optsContainer.appendChild(btn);
            });
            optsContainer.style.visibility = "visible";
        }, displaySpeed);
    }, 600);
}

function handleFlashAnswer(btn, chosen, step, isRecovery) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    const fb = document.getElementById('step-feedback');
    sessionState.totalQuestions++;

    if (chosen === step.word) {
        btn.classList.add('correct');
        playTone('ok');
        fb.style.color = "var(--secondary)";
        fb.textContent = "✨ Excel·lent! Lectura precisa.";
        sessionState.correctCount++;
        sessionState.streak++;
        sessionState.combo++;

        if (sessionState.isScreening && step.level) {
            sessionState.levelHits[step.level] = (sessionState.levelHits[step.level] || 0) + 1;
        }

        if (isRecovery) sessionState.recoveredCount++;
        else recordPhonemeResult(step.tag, true);

        if (!sessionState.isScreening && sessionState.streak >= 2 && sessionState.currentSpeed > 550) {
            sessionState.currentSpeed -= 60;
            sessionState.streak = 0;
        }
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.textContent === step.word) b.classList.add('correct');
        });
        playTone('err');
        fb.style.color = "var(--danger)";
        fb.textContent = `Era "${step.word}".`;
        sessionState.streak = 0;
        sessionState.combo = 0;

        if (!sessionState.isScreening && sessionState.currentSpeed < 1900) {
            sessionState.currentSpeed += 80;
        }
        if (!isRecovery) {
            recordPhonemeResult(step.tag, false);
            if (!sessionState.isScreening) sessionState.errorQueue.push(step);
        }
    }

    setTimeout(() => {
        if (!isRecovery) sessionState.currentIndex++;
        renderCurrentStep();
    }, 1250);
}

function renderSaccadicStep(step) {
    const stage = document.getElementById('game-stage');
    stage.innerHTML = `
        <span class="game-tag" style="background:var(--teal-soft); color:var(--teal);">👁️ Rastreig ocular dinàmic</span>
        <span class="speed-indicator">Moviments sacàdics</span>
        <p style="color:var(--text-muted); margin-top:16px;">Segueix la paraula amb els ulls sense moure el cap mentre creua la pantalla:</p>
        <div class="saccadic-track" id="sac-track">
            <div class="saccadic-word" id="sac-word" style="left: -220px;">${step.word}</div>
        </div>
        <div id="sac-options" class="options-grid" style="visibility:hidden;"></div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const track = document.getElementById('sac-track');
    const wordEl = document.getElementById('sac-word');
    const optsContainer = document.getElementById('sac-options');

    let pos = -180;
    const trackWidth = track.offsetWidth || 620;
    const stepPx = Math.max(8, Math.round(14000 / sessionState.currentSpeed));

    activePacerInterval = setInterval(() => {
        pos += stepPx;
        wordEl.style.left = pos + "px";

        if (pos > trackWidth + 40) {
            clearTimers();
            wordEl.style.display = "none";

            const choices = generateSmartDistractors(step.word);
            optsContainer.innerHTML = "";
            choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.textContent = choice;
                btn.onclick = () => handleFlashAnswer(btn, choice, step, false);
                optsContainer.appendChild(btn);
            });
            optsContainer.style.visibility = "visible";
        }
    }, 35);
}

function renderVisualNoiseStep(step) {
    const stage = document.getElementById('game-stage');
    const distractors = generateSmartDistractors(step.word).filter(w => w !== step.word);
    const cells = [];

    for (let i = 0; i < 3; i++) cells.push({ text: step.word, isTarget: true });
    for (let i = 0; i < 9; i++) cells.push({ text: distractors[i % distractors.length], isTarget: false });
    cells.sort(() => Math.random() - 0.5);

    let foundCount = 0;
    let mistakes = 0;

    stage.innerHTML = `
        <span class="game-tag" style="background:var(--accent-soft); color:#B45309;">🔍 Atenció selectiva · Soroll visual</span>
        <span class="speed-indicator" id="noise-counter">Trobades: 0 / 3</span>
        <p style="color:var(--text-muted); margin-top:16px;">Troba i clica les <strong>3 vegades</strong> que apareix la paraula:</p>
        <div style="font-size:1.7rem; font-weight:800; color:var(--primary); margin-top:4px;">« ${step.word} »</div>
        <div class="noise-grid" id="noise-grid"></div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const gridEl = document.getElementById('noise-grid');
    cells.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'noise-cell';
        btn.textContent = c.text;
        btn.onclick = () => {
            if (c.isTarget) {
                btn.classList.add('found');
                playTone('ok');
                foundCount++;
                document.getElementById('noise-counter').textContent = `Trobades: ${foundCount} / 3`;

                if (foundCount === 3) {
                    document.querySelectorAll('.noise-cell').forEach(b => b.disabled = true);
                    const fb = document.getElementById('step-feedback');
                    sessionState.totalQuestions++;
                    const success = mistakes <= 1;
                    if (success) {
                        sessionState.correctCount++;
                        sessionState.combo++;
                    } else {
                        sessionState.combo = 0;
                    }
                    recordPhonemeResult(step.tag, success);

                    fb.style.color = "var(--secondary)";
                    fb.textContent = "🎯 Ull d'àguila! Totes trobades.";
                    setTimeout(() => {
                        sessionState.currentIndex++;
                        renderCurrentStep();
                    }, 1150);
                }
            } else {
                btn.classList.add('miss');
                btn.disabled = true;
                playTone('err');
                mistakes++;
            }
        };
        gridEl.appendChild(btn);
    });
}


const WORD_VISUAL_CLUES = {
    "boca": "👄 Part de la cara per menjar i parlar",
    "dit": "☝️ En tenim cinc a cada mà",
    "pilota": "⚽ Joguina rodona per botar i xutar",
    "poma": "🍎 Fruita vermella o verda",
    "casa": "🏠 Lloc on vivim amb la família",
    "mapa": "🗺️ Dibuix dels països i carreteres",
    "nena": "👧 Infanta, noia jove",
    "sabata": "👟 Calçat per posar als peus",
    "cadira": "🪑 Moble per seure",
    "taula": "🪵 Moble pla on mengem o escrivim",
    "lluna": "🌙 Satèl·lit que brilla de nit",
    "sol": "☀️ Estrella que ens escalfa de dia",
    "gos": "🐶 Animal de companyia que lladra",
    "gat": "🐱 Animal pelut que miola",
    "moto": "🏍️ Vehicle de dues rodes amb motor",
    "foca": "🦭 Animal marí amb bigotis",
    "patata": "🥔 Tubercle per fer truita o fregides",
    "balena": "🐋 Mamífer marí gegant",
    "pirata": "🏴‍☠️ Navegant que busca tresors",
    "dau": "🎲 Cub amb punts per jugar",
    "arbre": "🌳 Planta gran amb tronc i fulles",
    "espelma": "🕯️ Dona llum amb una flama",
    "formiga": "🐜 Insecte petit i molt treballador",
    "pastís": "🎂 Dolç d'aniversari",
    "armari": "🚪 Moble per guardar la roba",
    "escola": "🏫 Lloc on anem a aprendre",
    "llapis": "✏️ Eina de fusta per escriure",
    "castell": "🏰 Edifici antic amb torres i muralles",
    "porta": "🚪 Obertura per entrar a una habitació",
    "finestra": "🪟 Obertura per mirar al carrer",
    "martell": "🔨 Eina per clavar claus",
    "elefant": "🐘 Animal gris molt gran amb trompa",
    "cargol": "🐌 Animal petit que porta la casa a sobre",
    "tardor": "🍂 Estació en què cauen les fulles",
    "brúixola": "🧭 Aparell que assenyala el nord",
    "plàtan": "🍌 Fruita groga i allargada",
    "drac": "🐉 Animal fantàstic que treu foc",
    "estrella": "⭐ Punt lluminós al cel nocturn",
    "bicicleta": "🚲 Vehicle de dues rodes amb pedals",
    "granota": "🐸 Animal verd que salta i rauca",
    "tren": "🚂 Transport llarg que va sobre vies",
    "biblioteca": "📚 Sala plena de llibres per llegir",
    "princesa": "👸 Filla del rei i la reina",
    "cocodril": "🐊 Rèptil verd de riu amb dents grans",
    "flauta": "🎶 Instrument musical de vent",
    "quadern": "📓 Llibreta per escriure i dibuixar",
    "pingüí": "🐧 Ocell blanc i negre que viu al gel",
    "trompeta": "🎺 Instrument musical daurat de vent",
    "cristall": "💎 Vidre molt transparent i brillant",
    "muntanya": "⛰️ Elevació molt alta del terreny",
    "papallona": "🦋 Insecte amb ales de colors",
    "calaix": "🗄️ Compartiment que s'obre dins un moble",
    "cotxe": "🚗 Vehicle de quatre rodes",
    "pel·lícula": "🎬 Història que mirem al cinema",
    "girafa": "🦒 Animal d'Àfrica amb el coll molt llarg",
    "formatge": "🧀 Aliment fet amb llet",
    "rellotge": "⌚ Aparell que marca les hores",
    "goril·la": "🦍 Simi molt gran i fort",
    "castanya": "🌰 Fruit sec típic de la tardor",
    "motxilla": "🎒 Bossa per portar els llibres a l'esquena",
    "vaixell": "🚢 Transport gran que navega pel mar",
    "carbassa": "🎃 Hortalissa gran i taronja",
    "aranya": "🕷️ Animal de vuit potes que fa teranyines",
    "platja": "🏖️ Vora del mar amb sorra",
    "abella": "🐝 Insecte que fabrica mel",
    "extraordinari": "✨ Que surt del que és habitual, magnífic",
    "espectacular": "🎆 Que crida molt l'atenció per la seva bellesa",
    "investigació": "🔬 Recerca per descobrir coses noves",
    "biodiversitat": "🌍 Varietat d'éssers vius d'un planeta",
    "constel·lació": "🌌 Grup d'estrelles que formen una figura",
    "temperatura": "🌡️ Grau de calor o fred d'un cos",
    "electricitat": "⚡ Energia que fa funcionar els llums",
    "arquitectura": "🏛️ Art de dissenyar i construir edificis",
    "astronauta": "🧑‍🚀 Persona que viatja a l'espai",
    "laboratori": "🧪 Espai equipat per fer experiments",
    "experiment": "⚗️ Prova científica per comprovar una idea",
    "fotosíntesi": "🌱 Procés pel qual les plantes fan aliment amb el sol",
    "mediterrani": "🌊 Mar que banya la costa catalana"
};

function getVisualClue(word, tag) {
    if (WORD_VISUAL_CLUES[word]) return WORD_VISUAL_CLUES[word];
    return `💡 Pista (${tag || 'paraula'}) · ${word.length} lletres`;
}

function renderSyllableStep(step) {
    const stage = document.getElementById('game-stage');
    const shuffled = [...step.syl].sort(() => Math.random() - 0.5);
    if (shuffled.join('') === step.syl.join('') && shuffled.length > 1) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }
    let selectedIndices = [];

    const clueText = getVisualClue(step.word, step.tag);
    stage.innerHTML = `
        <span class="game-tag">🧩 Caçador de síl·labes</span>
        <p style="color:var(--text-muted); margin-top:18px;">Ordena les síl·labes per construir la paraula:</p>
        <div class="clue-badge">${clueText}</div>
        <div id="syl-slots" class="syllable-slots"></div>
        <div id="syl-pool" class="syllable-pool"></div>
        <div style="display:flex; gap:10px; margin-top:8px;">
            <button class="btn btn-outline btn-sm" id="btn-syl-reset">Esborrar</button>
            <button class="btn btn-primary" id="btn-syl-check">Comprovar</button>
        </div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const slotsEl = document.getElementById('syl-slots');
    const poolEl = document.getElementById('syl-pool');

    function redraw() {
        slotsEl.innerHTML = "";
        selectedIndices.forEach(idx => {
            const chip = document.createElement('div');
            chip.className = 'syl-chip placed';
            chip.textContent = shuffled[idx];
            slotsEl.appendChild(chip);
        });
        poolEl.innerHTML = "";
        shuffled.forEach((s, idx) => {
            const btn = document.createElement('button');
            btn.className = 'syl-chip';
            btn.textContent = s;
            btn.disabled = selectedIndices.includes(idx);
            btn.style.opacity = btn.disabled ? "0.3" : "1";
            btn.onclick = () => { selectedIndices.push(idx); redraw(); };
            poolEl.appendChild(btn);
        });
    }

    document.getElementById('btn-syl-reset').onclick = () => { selectedIndices = []; redraw(); };
    document.getElementById('btn-syl-check').onclick = () => {
        if (selectedIndices.length !== shuffled.length) return;
        const built = selectedIndices.map(i => shuffled[i]).join('');
        const fb = document.getElementById('step-feedback');
        sessionState.totalQuestions++;

        if (built === step.word) {
            playTone('ok');
            fb.style.color = "var(--secondary)";
            fb.textContent = `✨ Perfecte: ${step.word}!`;
            sessionState.correctCount++;
            sessionState.combo++;
            recordPhonemeResult(step.tag, true);
        } else {
            playTone('err');
            fb.style.color = "var(--danger)";
            fb.textContent = `S'escriu: ${step.syl.join(' - ')}`;
            sessionState.combo = 0;
            recordPhonemeResult(step.tag, false);
        }
        setTimeout(() => { sessionState.currentIndex++; renderCurrentStep(); }, 1300);
    };
    redraw();
}

function renderWordChainStep(step) {
    const stage = document.getElementById('game-stage');
    const chain = step.chain;
    const cuts = new Set();

    stage.innerHTML = `
        <span class="game-tag" style="background:var(--purple-soft); color:var(--purple);">✂️ Paraules encadenades</span>
        <p style="color:var(--text-muted); margin-top:18px;">Aquestes paraules s'han enganxat! Clica entre les lletres per separar-les:</p>
        <div id="chain-container" class="chain-box"></div>
        <button class="btn btn-primary" id="btn-chain-check">Comprovar talls</button>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const container = document.getElementById('chain-container');

    function redrawChain() {
        container.innerHTML = "";
        for (let i = 0; i < chain.length; i++) {
            const span = document.createElement('span');
            span.className = 'chain-letter';
            span.textContent = chain[i];
            if (i < chain.length - 1) {
                span.onclick = () => {
                    if (cuts.has(i)) cuts.delete(i);
                    else cuts.add(i);
                    redrawChain();
                };
            }
            container.appendChild(span);

            if (cuts.has(i)) {
                const cutMarker = document.createElement('span');
                cutMarker.className = 'chain-cut';
                cutMarker.title = "Clica per treure el tall";
                cutMarker.onclick = () => {
                    cuts.delete(i);
                    redrawChain();
                };
                container.appendChild(cutMarker);
            }
        }
    }

    document.getElementById('btn-chain-check').onclick = () => {
        const fb = document.getElementById('step-feedback');
        sessionState.totalQuestions++;
        if (cuts.size >= 2 && cuts.size <= 4) {
            playTone('ok');
            fb.style.color = "var(--secondary)";
            fb.textContent = "✂️ Molt ben separades!";
            sessionState.correctCount++;
            sessionState.combo++;
            recordPhonemeResult(step.tag, true);
        } else {
            playTone('err');
            fb.style.color = "var(--danger)";
            fb.textContent = "Recorda separar totes les paraules de la cadena.";
            sessionState.combo = 0;
            recordPhonemeResult(step.tag, false);
        }
        setTimeout(() => { sessionState.currentIndex++; renderCurrentStep(); }, 1250);
    };

    redrawChain();
}

function renderSentenceScrambleStep(step) {
    const stage = document.getElementById('game-stage');
    const targetSentence = step.words.join(' ');
    const shuffled = [...step.words].sort(() => Math.random() - 0.5);
    if (shuffled.join(' ') === targetSentence) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }
    let selectedIndices = [];

    stage.innerHTML = `
        <span class="game-tag" style="background:var(--teal-soft); color:var(--teal);">🚂 Tren de frases</span>
        <p style="color:var(--text-muted); margin-top:18px;">Ordena les paraules perquè la frase tingui sentit:</p>
        <div id="sent-slots" class="syllable-slots"></div>
        <div id="sent-pool" class="syllable-pool"></div>
        <div style="display:flex; gap:10px; margin-top:8px;">
            <button class="btn btn-outline btn-sm" id="btn-sent-reset">Esborrar</button>
            <button class="btn btn-primary" id="btn-sent-check">Comprovar frase</button>
        </div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const slotsEl = document.getElementById('sent-slots');
    const poolEl = document.getElementById('sent-pool');

    function redraw() {
        slotsEl.innerHTML = "";
        selectedIndices.forEach(idx => {
            const chip = document.createElement('div');
            chip.className = 'syl-chip placed';
            chip.textContent = shuffled[idx];
            slotsEl.appendChild(chip);
        });
        poolEl.innerHTML = "";
        shuffled.forEach((w, idx) => {
            const btn = document.createElement('button');
            btn.className = 'syl-chip';
            btn.textContent = w;
            btn.disabled = selectedIndices.includes(idx);
            btn.style.opacity = btn.disabled ? "0.3" : "1";
            btn.onclick = () => { selectedIndices.push(idx); redraw(); };
            poolEl.appendChild(btn);
        });
    }

    document.getElementById('btn-sent-reset').onclick = () => { selectedIndices = []; redraw(); };
    document.getElementById('btn-sent-check').onclick = () => {
        if (selectedIndices.length !== shuffled.length) return;
        const built = selectedIndices.map(i => shuffled[i]).join(' ');
        const fb = document.getElementById('step-feedback');
        sessionState.totalQuestions++;

        if (built === targetSentence) {
            playTone('ok');
            fb.style.color = "var(--secondary)";
            fb.textContent = "✨ Frase perfecta!";
            sessionState.correctCount++;
            sessionState.combo++;
            recordPhonemeResult(step.tag, true);
        } else {
            playTone('err');
            fb.style.color = "var(--danger)";
            fb.textContent = `Frase correcta: ${targetSentence}`;
            sessionState.combo = 0;
            recordPhonemeResult(step.tag, false);
        }
        setTimeout(() => { sessionState.currentIndex++; renderCurrentStep(); }, 1400);
    };

    redraw();
}


function renderPacbalAlphabeticStep(step) {
    const stage = document.getElementById('game-stage');
    const item = step.item;
    stage.innerHTML = `
        <span class="game-tag" style="background:var(--purple-soft); color:var(--purple);">🔤 Principi alfabètic · PACBAL</span>
        <p style="color:var(--text-muted); margin-top:18px;">Observa aquesta lletra o dígraf i tria la paraula que comença pel seu mateix so:</p>
        <div style="width:120px; height:120px; border-radius:24px; background:var(--primary-soft); border:3px solid var(--primary); display:flex; align-items:center; justify-content:center; font-size:3.6rem; font-weight:800; color:var(--primary); margin:18px auto;">
            ${item.grapheme}
        </div>
        <div class="options-grid" id="alpha-opts">
            ${item.opts.map((opt, idx) => `<button class="option-btn" data-idx="${idx}">${opt}</button>`).join('')}
        </div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    document.querySelectorAll('#alpha-opts .option-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('#alpha-opts .option-btn').forEach(b => b.disabled = true);
            const chosen = parseInt(btn.dataset.idx, 10);
            const fb = document.getElementById('step-feedback');
            sessionState.totalQuestions++;

            if (chosen === item.ans) {
                btn.classList.add('correct');
                playTone('ok');
                fb.style.color = "var(--secondary)";
                fb.textContent = `✨ Molt bé! ${item.soundLabel}`;
                sessionState.correctCount++;
                sessionState.combo++;
                recordPhonemeResult(step.tag, true);
            } else {
                btn.classList.add('wrong');
                document.querySelectorAll('#alpha-opts .option-btn')[item.ans].classList.add('correct');
                playTone('err');
                fb.style.color = "var(--danger)";
                fb.textContent = `Era "${item.opts[item.ans]}" (${item.soundLabel}).`;
                sessionState.combo = 0;
                recordPhonemeResult(step.tag, false);
            }
            setTimeout(() => { sessionState.currentIndex++; renderCurrentStep(); }, 1300);
        };
    });
}

function renderPacbalPhonemicStep(step) {
    const stage = document.getElementById('game-stage');
    const item = step.item;
    const targetCount = item.phonemes.length;
    let selectedTokens = [];

    stage.innerHTML = `
        <span class="game-tag" style="background:var(--teal-soft); color:var(--teal);">🔊 Segmentació fonèmica · PACBAL</span>
        <p style="color:var(--text-muted); margin-top:18px;">Afegeix una fitxa de so per a cada fonema que forma aquesta paraula:</p>
        <div class="clue-badge">${item.clue}</div>
        <div style="font-size:2.4rem; font-weight:800; color:var(--text-dark); margin:12px 0;">« ${item.w} »</div>
        <div id="phon-slots" class="syllable-slots" style="min-height:64px; align-items:center;">
            <span style="color:var(--text-muted); font-size:0.9rem;">Prem "+ Afegir so" tantes vegades com sons té la paraula</span>
        </div>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:10px;">
            <button class="btn btn-purple" id="btn-add-phon">🔵 + Afegir so</button>
            <button class="btn btn-outline btn-sm" id="btn-reset-phon">Esborrar</button>
            <button class="btn btn-primary" id="btn-check-phon">Comprovar (0 sons)</button>
        </div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    const slotsEl = document.getElementById('phon-slots');
    const checkBtn = document.getElementById('btn-check-phon');

    function redrawPhonemes() {
        checkBtn.textContent = `Comprovar (${selectedTokens.length} ${selectedTokens.length === 1 ? 'so' : 'sons'})`;
        if (selectedTokens.length === 0) {
            slotsEl.innerHTML = `<span style="color:var(--text-muted); font-size:0.9rem;">Prem "+ Afegir so" tantes vegades com sons té la paraula</span>`;
            return;
        }
        slotsEl.innerHTML = selectedTokens.map((_, i) => `
            <div style="width:42px; height:42px; border-radius:50%; background:var(--primary); color:white; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:1.1rem; box-shadow:var(--shadow-sm);">
                ${i + 1}
            </div>
        `).join('');
    }

    document.getElementById('btn-add-phon').onclick = () => {
        if (selectedTokens.length < 8) {
            selectedTokens.push(1);
            redrawPhonemes();
        }
    };

    document.getElementById('btn-reset-phon').onclick = () => {
        selectedTokens = [];
        redrawPhonemes();
    };

    checkBtn.onclick = () => {
        if (selectedTokens.length === 0) return;
        document.getElementById('btn-add-phon').disabled = true;
        document.getElementById('btn-reset-phon').disabled = true;
        checkBtn.disabled = true;

        const fb = document.getElementById('step-feedback');
        sessionState.totalQuestions++;
        const breakdown = item.phonemes.map(p => `/${p}/`).join(' ');

        slotsEl.innerHTML = item.phonemes.map(p => `
            <div class="syl-chip placed" style="padding:8px 14px; font-size:1.25rem;">/${p}/</div>
        `).join('');

        if (selectedTokens.length === targetCount) {
            playTone('ok');
            fb.style.color = "var(--secondary)";
            fb.textContent = `✨ Exacte! Té ${targetCount} sons: ${breakdown}`;
            sessionState.correctCount++;
            sessionState.combo++;
            recordPhonemeResult(step.tag, true);
        } else {
            playTone('err');
            fb.style.color = "var(--danger)";
            fb.textContent = `Té ${targetCount} sons: ${breakdown}`;
            sessionState.combo = 0;
            recordPhonemeResult(step.tag, false);
        }
        setTimeout(() => { sessionState.currentIndex++; renderCurrentStep(); }, 1500);
    };
}

function renderPacbalVocabStep(step) {
    const stage = document.getElementById('game-stage');
    const item = step.item;
    stage.innerHTML = `
        <span class="game-tag" style="background:var(--accent-soft); color:#B45309;">🧠 Vocabulari en context · PACBAL</span>
        <p style="color:var(--text-muted); margin-top:18px;">Llegeix la frase amb atenció i tria la paraula que la completa millor:</p>
        <div class="reading-passage" style="font-size:1.35rem; text-align:center; font-weight:600; max-width:660px;">
            « ${item.s} »
        </div>
        <div class="options-grid" id="vocab-opts" style="max-width:600px;">
            ${item.opts.map((opt, idx) => `<button class="option-btn" style="font-size:1.2rem;" data-idx="${idx}">${opt}</button>`).join('')}
        </div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    document.querySelectorAll('#vocab-opts .option-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('#vocab-opts .option-btn').forEach(b => b.disabled = true);
            const chosen = parseInt(btn.dataset.idx, 10);
            const fb = document.getElementById('step-feedback');
            sessionState.totalQuestions++;

            if (chosen === item.ans) {
                btn.classList.add('correct');
                playTone('ok');
                fb.style.color = "var(--secondary)";
                fb.textContent = `✨ Perfecte: "${item.opts[item.ans]}"!`;
                sessionState.correctCount++;
                sessionState.combo++;
                recordPhonemeResult(step.tag, true);
            } else {
                btn.classList.add('wrong');
                document.querySelectorAll('#vocab-opts .option-btn')[item.ans].classList.add('correct');
                playTone('err');
                fb.style.color = "var(--danger)";
                fb.textContent = `La paraula adequada era: "${item.opts[item.ans]}".`;
                sessionState.combo = 0;
                recordPhonemeResult(step.tag, false);
            }
            setTimeout(() => { sessionState.currentIndex++; renderCurrentStep(); }, 1350);
        };
    });
}

function renderReadingStep(step) {
    const stage = document.getElementById('game-stage');
    const startTime = Date.now();
    const words = step.passage.text.trim().split(/\s+/);
    const wordCount = words.length;
    const useBicolor = !!appData.a11y.bicolor;

    const spansHtml = words.map((w, i) => {
        const content = useBicolor ? splitWordBicolor(w) : w;
        return `<span class="pacer-word" id="pw-${i}">${content}</span>`;
    }).join(' ');

    stage.innerHTML = `
        <span class="game-tag">📖 Lectura fluida i guia ocular</span>
        <button class="btn btn-outline btn-sm speed-indicator" id="btn-toggle-pacer">✨ Activar guia rítmica</button>
        <p style="color:var(--text-muted); margin-top:18px;">Llegeix el text seguint el ritme sense tornar enrere i clica quan acabis:</p>
        <div class="reading-passage">${spansHtml}</div>
        <button id="btn-finish-read" class="btn btn-secondary" style="font-size:1.05rem; padding:12px 26px;">✅ Ja he acabat de llegir</button>
    `;

    let pacerOn = false;
    const toggleBtn = document.getElementById('btn-toggle-pacer');
    toggleBtn.onclick = () => {
        if (pacerOn) {
            clearTimers();
            document.querySelectorAll('.pacer-word').forEach(el => el.classList.remove('active-pacer'));
            toggleBtn.textContent = "✨ Activar guia rítmica";
            pacerOn = false;
        } else {
            pacerOn = true;
            toggleBtn.textContent = "⏸️ Aturar guia";
            const targetPPM = PHASES_INFO[currentStudent.phase].expectedPPM;
            const msPerWord = Math.round(60000 / targetPPM);
            let wIdx = 0;

            activePacerInterval = setInterval(() => {
                document.querySelectorAll('.pacer-word').forEach(el => el.classList.remove('active-pacer'));
                const currEl = document.getElementById(`pw-${wIdx}`);
                if (currEl) currEl.classList.add('active-pacer');
                wIdx++;
                if (wIdx >= wordCount) clearTimers();
            }, msPerWord);
        }
    };

    document.getElementById('btn-finish-read').onclick = () => {
        clearTimers();
        const elapsedSec = Math.max(4, (Date.now() - startTime) / 1000);
        const ppm = Math.min(250, Math.round((wordCount / elapsedSec) * 60));
        sessionState.measuredPPM = ppm;
        renderComprehensionQuestions(step.passage, 0);
    };
}

function renderComprehensionQuestions(passage, qIdx) {
    const questions = passage.questions || [];
    if (qIdx >= questions.length) {
        sessionState.currentIndex++;
        renderCurrentStep();
        return;
    }

    const qObj = questions[qIdx];
    const stage = document.getElementById('game-stage');

    stage.innerHTML = `
        <span class="game-tag">💡 Comprensió lectora (${qIdx + 1}/${questions.length})</span>
        <div class="comp-question">
            <h3 style="font-size:1.25rem; margin-bottom:14px;">${qObj.q}</h3>
            <div class="comp-options">
                ${qObj.opts.map((opt, i) => `<button class="comp-btn" data-idx="${i}">${opt}</button>`).join('')}
            </div>
        </div>
        <div id="step-feedback" class="feedback-toast"></div>
    `;

    document.querySelectorAll('.comp-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.comp-btn').forEach(b => b.disabled = true);
            const chosen = parseInt(btn.dataset.idx, 10);
            const fb = document.getElementById('step-feedback');
            sessionState.totalQuestions++;

            if (chosen === qObj.ans) {
                btn.style.borderColor = "var(--secondary)";
                btn.style.background = "var(--secondary-soft)";
                playTone('ok');
                fb.style.color = "var(--secondary)";
                fb.textContent = "✨ Resposta correcta!";
                sessionState.correctCount++;
                sessionState.combo++;
                recordPhonemeResult("Comprensió lectora (PACBAL)", true);
            } else {
                btn.style.borderColor = "var(--danger)";
                btn.style.background = "var(--danger-soft)";
                playTone('err');
                fb.style.color = "var(--danger)";
                fb.textContent = `Resposta correcta: ${qObj.opts[qObj.ans]}`;
                sessionState.combo = 0;
                recordPhonemeResult("Comprensió lectora (PACBAL)", false);
            }

            setTimeout(() => {
                renderComprehensionQuestions(passage, qIdx + 1);
            }, 1200);
        };
    });
}

function finishSession() {
    const accuracy = Math.round((sessionState.correctCount / Math.max(1, sessionState.totalQuestions)) * 100);
    const ppm = sessionState.measuredPPM;
    const speed = sessionState.currentSpeed;
    const today = new Date().toLocaleDateString('ca-ES');

    let screeningDiag = "";
    if (sessionState.isScreening) {
        let detectedPhase = 1;
        if (sessionState.levelHits[5] >= 1 && ppm >= 110) detectedPhase = 5;
        else if (sessionState.levelHits[4] >= 1 && ppm >= 90) detectedPhase = 4;
        else if (sessionState.levelHits[3] >= 1 && ppm >= 70) detectedPhase = 3;
        else if (sessionState.levelHits[2] >= 1 && ppm >= 48) detectedPhase = 2;

        currentStudent.phase = detectedPhase;
        currentStudent.screened = true;
        currentStudent.tachSpeed = detectedPhase === 1 ? 1350 : detectedPhase === 2 ? 1200 : detectedPhase === 3 ? 1050 : detectedPhase === 4 ? 900 : 800;

        screeningDiag = `<p style="color:var(--purple); font-weight:700; margin-top:8px;">🩺 Diagnòstic del cribratge: l'alumne s'ha situat automàticament a la <strong>Fase ${detectedPhase}</strong> (${PHASES_INFO[detectedPhase].name}).</p>`;
    } else {
        currentStudent.tachSpeed = speed;
    }

    const oldPet = getPetForXP(currentStudent.xp || 0);
    currentStudent.xp = (currentStudent.xp || 0) + 60 + Math.round(accuracy / 2);
    const newPet = getPetForXP(currentStudent.xp);
    currentStudent.streakDays = (currentStudent.streakDays || 0) + 1;

    if (!currentStudent.stickers) currentStudent.stickers = [];
    const unowned = STICKERS_CATALOG.filter(s => !currentStudent.stickers.includes(s.id));
    let wonSticker = null;
    if (unowned.length > 0) {
        wonSticker = unowned[Math.floor(Math.random() * unowned.length)];
        currentStudent.stickers.push(wonSticker.id);
    } else {
        wonSticker = STICKERS_CATALOG[Math.floor(Math.random() * STICKERS_CATALOG.length)];
    }

    currentStudent.sessions.push({
        date: today,
        type: sessionState.isScreening ? "Cribratge" : "Sessió",
        phase: currentStudent.phase,
        accuracy,
        ppm,
        speed: currentStudent.tachSpeed,
        prosody: sessionState.prosodyRating
    });

    let promotedMsg = "";
    const len = currentStudent.sessions.length;
    if (!sessionState.isScreening && len >= 2 && currentStudent.phase < 5) {
        if (currentStudent.sessions[len - 1].accuracy >= 92 && currentStudent.sessions[len - 2].accuracy >= 92) {
            currentStudent.phase += 1;
            promotedMsg = `<p style="color:var(--secondary); font-weight:700; margin-top:8px;">🎉 Enhorabona! Has pujat automàticament a la Fase ${currentStudent.phase}!</p>`;
        }
    }

    saveStorage();
    fireConfetti();

    const petEvoHtml = oldPet.title !== newPet.title
        ? `<div style="margin-top:6px; color:var(--purple); font-weight:700;">✨ La teva mascota ha evolucionat a ${newPet.icon} ${newPet.title}!</div>`
        : `<div style="margin-top:4px; font-size:0.86rem; color:var(--text-muted);">Mascota actual: ${newPet.icon} ${newPet.title}</div>`;

    document.getElementById('sum-sticker-reward').innerHTML = `
        <div style="font-size:0.82rem; font-weight:700; text-transform:uppercase; color:#B45309;">🎁 Sobre sorpresa obert!</div>
        <div style="font-size:2.6rem; margin:4px 0;">${wonSticker.icon}</div>
        <div style="font-weight:800; font-size:1.1rem;">Has aconseguit l'adhesiu: ${wonSticker.name}</div>
        ${petEvoHtml}
    `;

    const albumEl = document.getElementById('sum-sticker-album');
    albumEl.innerHTML = STICKERS_CATALOG.map(stk => {
        const owned = currentStudent.stickers.includes(stk.id);
        return `
            <div class="sticker-slot ${owned ? 'owned' : ''}">
                <div style="font-size:1.6rem;">${owned ? stk.icon : '❓'}</div>
                <div>${owned ? stk.name : 'Bloquejat'}</div>
            </div>
        `;
    }).join('');

    const mapEl = document.getElementById('sum-adventure-map');
    const unlockedCount = Math.min(ADVENTURE_STAGES.length, Math.floor(currentStudent.xp / 120) + 1);
    mapEl.innerHTML = ADVENTURE_STAGES.map((st, idx) => `
        <div class="adv-node ${idx < unlockedCount ? 'unlocked' : ''}">
            <div class="adv-icon">${st.icon}</div>
            <span>${st.name}</span>
        </div>
    `).join('');

    document.getElementById('sum-title').textContent = `Molt bona feina, ${currentStudent.name}!`;
    document.getElementById('sum-accuracy').textContent = `${accuracy}%`;
    document.getElementById('sum-ppm').textContent = `${ppm} PPM`;
    document.getElementById('sum-speed').textContent = `${currentStudent.tachSpeed} ms`;
    document.getElementById('sum-recovered').textContent = `${sessionState.recoveredCount} / ${sessionState.initialErrorCount}`;

    const expected = PHASES_INFO[currentStudent.phase].expectedPPM;
    document.getElementById('sum-diagnostic').innerHTML = `
        <strong>Resum pedagògic de la sessió:</strong>
        <p style="margin-top:6px; font-size:0.94rem; color:var(--text-muted);">
            • Velocitat lectora registrada: <strong>${ppm} paraules/minut</strong> (referència del nivell: ~${expected} PPM).<br>
            • Experiència acumulada: <strong>${currentStudent.xp} XP</strong>.
        </p>
        ${screeningDiag}
        ${promotedMsg}
    `;

    switchView('view-summary');
}

function openStudentQRCard(studentId) {
    const st = appData.students.find(s => s.id === studentId);
    if (!st) return;

    const payload = {
        id: st.id,
        name: st.name,
        grade: st.grade,
        avatar: st.avatar,
        phase: st.phase,
        tachSpeed: st.tachSpeed,
        xp: st.xp || 0,
        stickers: st.stickers || [],
        screened: st.screened,
        a11yProfile: st.a11yProfile || "none",
        sessions: (st.sessions || []).slice(-5)
    };

    const encoded = "LMQR:" + btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=210x210&data=${encodeURIComponent(encoded)}`;

    const area = document.getElementById('qr-card-area');
    area.innerHTML = `
        <div style="font-size:0.78rem; font-weight:700; color:var(--primary); text-transform:uppercase;">LlegeixMés</div>
        <div style="font-size:2.4rem; margin:6px 0;">${st.avatar}</div>
        <h4 style="font-size:1.25rem; margin-bottom:2px;">${st.name}</h4>
        <div style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">${st.grade} · Fase ${st.phase}</div>
        <img src="${qrUrl}" alt="Codi QR de l'alumne" style="width:190px; height:190px; border-radius:10px; border:1px solid var(--border); margin:0 auto 10px auto; display:block;">
        <div style="font-size:0.72rem; color:var(--text-muted); word-break:break-all; background:#F8FAFC; padding:6px; border-radius:6px;">
            Codi manual: <strong>${encoded.slice(0, 26)}...</strong>
            <button class="btn btn-outline btn-sm" style="margin-top:6px; width:100%;" onclick="copyQRCodeToClipboard('${encoded}')">📋 Copiar codi complet</button>
        </div>
    `;

    document.getElementById('modal-qr-card').classList.add('open');
}

function copyQRCodeToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Codi del carnet copiat al porta-retalls!");
    });
}

let qrStream = null;
let qrScanTimer = null;

function openQRScannerModal() {
    document.getElementById('inp-qr-code').value = "";
    document.getElementById('qr-cam-status').textContent = "";
    document.getElementById('qr-video').style.display = "none";
    document.getElementById('btn-start-cam').style.display = "inline-flex";
    document.getElementById('modal-qr-scan').classList.add('open');
}

function closeQRScanner() {
    if (qrScanTimer) {
        clearInterval(qrScanTimer);
        qrScanTimer = null;
    }
    if (qrStream) {
        qrStream.getTracks().forEach(t => t.stop());
        qrStream = null;
    }
    closeModal('modal-qr-scan');
}

async function startQRCamera() {
    const video = document.getElementById('qr-video');
    const canvas = document.getElementById('qr-canvas');
    const status = document.getElementById('qr-cam-status');
    try {
        qrStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 480 } }
        });
        video.srcObject = qrStream;
        video.setAttribute("playsinline", true);
        video.style.display = "block";
        document.getElementById('btn-start-cam').style.display = "none";
        await video.play();

        status.textContent = "🔍 Enfoca el codi QR dins la càmera...";
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        let nativeDetector = null;
        if ('BarcodeDetector' in window) {
            try { nativeDetector = new BarcodeDetector({ formats: ['qr_code'] }); } catch (e) {}
        }

        qrScanTimer = setInterval(async () => {
            if (video.readyState !== video.HAVE_ENOUGH_DATA) return;
            try {
                if (nativeDetector) {
                    const barcodes = await nativeDetector.detect(video);
                    if (barcodes.length > 0 && barcodes[0].rawValue.startsWith("LMQR:")) {
                        document.getElementById('inp-qr-code').value = barcodes[0].rawValue;
                        importFromQRString();
                        return;
                    }
                }
                if (typeof jsQR === 'function') {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const code = jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: "attemptBoth" });
                    if (code && code.data && code.data.startsWith("LMQR:")) {
                        document.getElementById('inp-qr-code').value = code.data;
                        importFromQRString();
                    }
                }
            } catch (e) {}
        }, 300);
    } catch (err) {
        status.textContent = "⚠️ El navegador no permet vídeo directe aquí. Fes servir el botó '📸 Fer foto o imatge QR' o enganxa el codi.";
    }
}

function decodeQRFromImageFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const status = document.getElementById('qr-cam-status');
    status.textContent = "⏳ Llegint el codi QR de la imatge...";
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.getElementById('qr-canvas');
            const ctx = canvas.getContext('2d');
            const scale = Math.min(1, 900 / Math.max(img.width, img.height));
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            if (typeof jsQR === 'function') {
                const code = jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: "attemptBoth" });
                if (code && code.data && code.data.startsWith("LMQR:")) {
                    document.getElementById('inp-qr-code').value = code.data;
                    status.textContent = "✅ Codi QR detectat!";
                    importFromQRString();
                    return;
                }
            }
            status.textContent = "⚠️ No s'ha pogut detectar cap codi QR vàlid a la imatge. Prova d'apropar més la càmera i enfocar bé.";
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function importFromQRString() {
    const raw = document.getElementById('inp-qr-code').value.trim();
    if (!raw.startsWith("LMQR:")) {
        alert("El codi introduït no és un carnet vàlid de LlegeixMés.");
        return;
    }
    try {
        const b64 = raw.slice(5);
        const jsonStr = decodeURIComponent(escape(atob(b64)));
        const data = JSON.parse(jsonStr);
        if (!data || !data.name) throw new Error("Invalid");

        const existing = appData.students.find(s => s.id === data.id || s.name.toLowerCase() === data.name.toLowerCase());
        if (!existing) {
            appData.students.push({
                id: data.id || "st_" + Date.now(),
                name: data.name,
                grade: data.grade || "1r de primària",
                avatar: data.avatar || "🦊",
                phase: data.phase || 1,
                tachSpeed: data.tachSpeed || 1200,
                xp: data.xp || 0,
                streakDays: 1,
                stickers: data.stickers || [],
                screened: !!data.screened,
                a11yProfile: data.a11yProfile || "none",
                phonemeStats: {},
                sessions: data.sessions || []
            });
        } else {
            if ((data.xp || 0) > (existing.xp || 0)) {
                existing.xp = data.xp;
                existing.phase = data.phase;
                existing.tachSpeed = data.tachSpeed;
                existing.stickers = Array.from(new Set([...(existing.stickers || []), ...(data.stickers || [])]));
                existing.sessions = data.sessions || existing.sessions;
            }
        }
        saveStorage();
        closeQRScanner();
        renderHomeStudents();
        alert(`Perfil de ${data.name} carregat correctament!`);
    } catch (e) {
        alert("No s'ha pogut llegir el codi del carnet.");
    }
}

function openTeacherLogin() {
    const emailInp = document.getElementById('inp-admin-email');
    if (emailInp) {
        emailInp.value = (sbCurrentUser && sbCurrentUser.email) ? sbCurrentUser.email : "gestor@eugenidors.com";
    }
    document.getElementById('inp-pin').value = "";
    document.getElementById('pin-error').style.display = "none";
    document.getElementById('modal-pin').classList.add('open');
    setTimeout(() => document.getElementById('inp-pin').focus(), 100);
}

async function verifyPin() {
    const emailInp = document.getElementById('inp-admin-email');
    const email = (emailInp ? emailInp.value.trim() : "gestor@eugenidors.com") || "gestor@eugenidors.com";
    const password = document.getElementById('inp-pin').value;
    const errEl = document.getElementById('pin-error');
    const btn = document.getElementById('btn-admin-login-submit');

    if (!password) {
        errEl.textContent = "Introdueix la contrasenya.";
        errEl.style.display = "block";
        return;
    }

    if (!sbClient) {
        errEl.textContent = "⚠️ No s'ha pogut connectar amb el servidor d'autenticació. Revisa la connexió a internet.";
        errEl.style.display = "block";
        return;
    }

    if (btn) { btn.disabled = true; btn.textContent = "⏳ Verificant..."; }
    errEl.style.display = "none";

    try {
        const { data, error } = await sbClient.auth.signInWithPassword({ email, password });
        if (error || !data || !data.user) {
            errEl.textContent = "❌ Credencials incorrectes (" + (error ? error.message : "accés denegat") + ").";
            errEl.style.display = "block";
            return;
        }
        sbCurrentUser = data.user;
        updateCloudUI();
        closeModal('modal-pin');
        renderTeacherDashboard();
        renderCustomTextsList();
        switchView('view-teacher');
        await pullFromSupabase(false, true);
        startRealtimeSync();
    } catch (e) {
        errEl.textContent = "⚠️ Error de xarxa en verificar l'usuari.";
        errEl.style.display = "block";
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = "🔑 Entrar al panell"; }
    }
}

async function changeAdminCloudPassword() {
    if (!sbClient || !sbCurrentUser) {
        alert("Has d'iniciar sessió com a administrador primer.");
        return;
    }
    const newPass = document.getElementById('sb-new-password').value;
    if (!newPass || newPass.length < 6) {
        alert("La nova contrasenya ha de tenir com a mínim 6 caràcters.");
        return;
    }
    const { error } = await sbClient.auth.updateUser({ password: newPass });
    if (error) {
        alert("⚠️ No s'ha pogut actualitzar la contrasenya: " + error.message);
        return;
    }
    document.getElementById('sb-new-password').value = "";
    alert("✅ Contrasenya d'administració actualitzada correctament!");
}

function switchTeacherTab(tab) {
    ['class', 'pacbal', 'pins', 'focus', 'texts', 'bulk', 'cloud'].forEach(t => {
        const btn = document.getElementById('tab-btn-' + t);
        const panel = document.getElementById('teacher-tab-' + t);
        if (btn) btn.classList.toggle('active', t === tab);
        if (panel) panel.style.display = t === tab ? 'block' : 'none';
    });
    if (tab === 'pacbal') initPacbalTab();
    if (tab === 'pins') renderPinsManager();
    if (tab === 'focus') populateFocusStudentsSelect();
    if (tab === 'bulk') { updateKioskUI(); }
    if (tab === 'cloud') updateCloudUI();
}



function initPacbalTab() {
    const sel = document.getElementById('pacbal-launch-student');
    if (sel) {
        const prev = sel.value;
        sel.innerHTML = "";
        if (appData.students.length === 0) {
            sel.innerHTML = `<option value="">(Cap alumne registrat)</option>`;
        } else {
            appData.students.forEach(st => {
                sel.innerHTML += `<option value="${st.id}">${st.avatar} ${st.name} (${st.grade})</option>`;
            });
            if (prev && appData.students.some(s => s.id === prev)) sel.value = prev;
        }
    }
    renderPacbalResultsDashboard();
}

function launchFullPacbalPracticeFromPanel() {
    const stId = document.getElementById('pacbal-launch-student').value;
    const st = appData.students.find(s => s.id === stId);
    if (!st) {
        alert("Selecciona un alumne de la llista.");
        return;
    }
    startPacbalPracticeSession(st.id);
}

function startPacbalPracticeSession(studentId) {
    const st = appData.students.find(s => s.id === studentId);
    if (!st) return;
    currentStudent = st;
    const phase = st.phase || 1;
    const steps = [];

    // 1. Principi alfabètic (2 reptes)
    const alphaPool = [...PACBAL_ALPHABETIC_ITEMS].sort(() => Math.random() - 0.5).slice(0, 2);
    alphaPool.forEach(item => steps.push({ type: 'pacbal_alphabetic', item, tag: "Principi alfabètic (PACBAL)" }));

    // 2. Segmentació fonèmica (2 reptes)
    const phonPool = PACBAL_PHONEMIC_DB.filter(x => phase === 1 ? x.phase === 1 : true).sort(() => Math.random() - 0.5).slice(0, 2);
    phonPool.forEach(item => steps.push({ type: 'pacbal_phonemic', item, tag: "Segmentació fonèmica (PACBAL)" }));

    // 3. Lectura de paraules sense sentit (2 reptes)
    for (let i = 0; i < 2; i++) {
        steps.push({ type: 'flash', word: generatePseudoword(phase), tag: "Pseudoparaules (PACBAL)", isPseudo: true });
    }

    // 4. Vocabulari contextualitzat (2 reptes)
    const vocabPool = PACBAL_VOCAB_DB.filter(v => phase <= 1 ? v.level === 1 : (phase === 2 ? v.level <= 2 : true)).sort(() => Math.random() - 0.5).slice(0, 2);
    vocabPool.forEach(item => steps.push({ type: 'pacbal_vocab', item, tag: "Vocabulari contextual (PACBAL)" }));

    // 5. Lectura + Comprensió lectora PACBAL
    const readingsPool = DEFAULT_READINGS[Math.min(5, Math.max(1, phase))];
    const pacbalReadings = readingsPool.filter(r => r.title.includes("PACBAL"));
    const chosenPassage = (pacbalReadings.length > 0 ? pacbalReadings : readingsPool)[Math.floor(Math.random() * (pacbalReadings.length > 0 ? pacbalReadings.length : readingsPool.length))];
    steps.push({ type: 'reading', passage: chosenPassage, tag: "Comprensió lectora (PACBAL)" });

    sessionState = {
        isScreening: false,
        steps,
        currentIndex: 0,
        correctCount: 0,
        totalQuestions: 0,
        currentSpeed: st.tachSpeed,
        streak: 0,
        combo: 0,
        errorQueue: [],
        inRecoveryMode: false,
        recoveredCount: 0,
        initialErrorCount: 0,
        measuredPPM: PHASES_INFO[phase].expectedPPM,
        prosodyRating: "Completada"
    };

    document.getElementById('ses-avatar').textContent = st.avatar;
    document.getElementById('ses-student-name').textContent = st.name;
    document.getElementById('ses-phase-badge').textContent = "📊 Pràctica PACBAL";
    updateComboUI();

    switchView('view-session');
    renderCurrentStep();
}

function formatPacbalCell(statObj) {
    if (!statObj || !statObj.total) {
        return `<span style="color:var(--text-muted); font-size:0.82rem;">Sense dades</span>`;
    }
    const pct = Math.round((statObj.ok / statObj.total) * 100);
    let badgeCls = "badge-green";
    let icon = "🟢";
    if (pct < 60) { badgeCls = "badge-red"; icon = "🔴"; }
    else if (pct < 80) { badgeCls = "badge-amber"; icon = "🟠"; }
    return `<span class="badge ${badgeCls}">${icon} ${pct}% (${statObj.ok}/${statObj.total})</span>`;
}

function renderPacbalResultsDashboard() {
    const tbody = document.getElementById('pacbal-results-tbody');
    if (!tbody) return;
    tbody.innerHTML = "";

    const filterVal = document.getElementById('pacbal-res-group-filter') ? document.getElementById('pacbal-res-group-filter').value : 'ALL';
    const list = filterVal === 'ALL' ? appData.students : appData.students.filter(s => s.grade === filterVal);

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:24px; color:var(--text-muted);">No hi ha alumnes en aquest grup.</td></tr>`;
        return;
    }

    list.forEach(st => {
        const stats = st.phonemeStats || {};
        const sAlpha = stats["Principi alfabètic (PACBAL)"];
        const sPhon = stats["Segmentació fonèmica (PACBAL)"];
        const sPseudo = stats["Pseudoparaules (PACBAL)"] || stats["Pseudoparaules (ruta fonològica)"];
        const sVocab = stats["Vocabulari contextual (PACBAL)"];
        const sComp = stats["Comprensió lectora (PACBAL)"];

        const allAvailable = [sAlpha, sPhon, sPseudo, sVocab, sComp].filter(x => x && x.total > 0);
        let globalHtml = `<span class="badge badge-blue">Pendent pràctica</span>`;
        if (allAvailable.length > 0) {
            const totalOk = allAvailable.reduce((acc, x) => acc + x.ok, 0);
            const totalItems = allAvailable.reduce((acc, x) => acc + x.total, 0);
            const avgPct = Math.round((totalOk / totalItems) * 100);
            if (avgPct < 60) {
                globalHtml = `<span class="badge badge-red">🔴 Risc (${avgPct}%) · Suport intensiu</span>`;
            } else if (avgPct < 80) {
                globalHtml = `<span class="badge badge-amber">🟠 Algun risc (${avgPct}%) · Reforç</span>`;
            } else {
                globalHtml = `<span class="badge badge-green">🟢 Normatiu (${avgPct}%)</span>`;
            }
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${st.avatar} ${st.name}</strong></td>
            <td>${st.grade}</td>
            <td>${formatPacbalCell(sAlpha)}</td>
            <td>${formatPacbalCell(sPhon)}</td>
            <td>${formatPacbalCell(sPseudo)}</td>
            <td>${formatPacbalCell(sVocab)}</td>
            <td>${formatPacbalCell(sComp)}</td>
            <td>${globalHtml}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderPinsManager() {
    const tbody = document.getElementById('pins-table-body');
    if (!tbody) return;
    tbody.innerHTML = "";

    if (appData.students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:24px; color:var(--text-muted);">Encara no hi ha alumnes registrats.</td></tr>`;
        return;
    }

    const filterVal = document.getElementById('pins-group-filter') ? document.getElementById('pins-group-filter').value : 'ALL';
    const visibleStudents = filterVal === 'ALL' ? appData.students : appData.students.filter(s => s.grade === filterVal);

    visibleStudents.forEach(st => {
        if (!st.pin || st.pin.length !== 3) {
            st.pin = generateRandom3DigitPin();
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${st.avatar} ${st.name}</strong></td>
            <td>${st.grade}</td>
            <td>Fase ${st.phase}</td>
            <td>
                <div style="display:flex; align-items:center; gap:8px;">
                    <input type="text" class="form-control" style="width:90px; text-align:center; font-weight:800; letter-spacing:0.15em; padding:6px;" maxlength="3" value="${st.pin}" id="pin-input-${st.id}" onchange="updateStudentPinInline('${st.id}', this.value)">
                    <button class="btn btn-outline btn-sm" onclick="regenerateStudentPin('${st.id}')" title="Generar aleatori">🎲</button>
                </div>
            </td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="openStudentPI('${st.id}')">✏️ Editar PI</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    saveStorage();
}

function updateStudentPinInline(studentId, newPin) {
    const st = appData.students.find(s => s.id === studentId);
    if (!st) return;
    const clean = newPin.trim();
    if (clean.length === 3 && /^[0-9]+$/.test(clean)) {
        st.pin = clean;
        saveStorage();
        alert(`PIN de ${st.name} actualitzat correctament a: ${clean}`);
    } else {
        alert("El PIN ha de ser exactament de 3 xifres numèriques.");
        renderPinsManager();
    }
}

function regenerateStudentPin(id) {
    const st = appData.students.find(s => s.id === id);
    if (!st) return;
    st.pin = generateRandom3DigitPin();
    saveStorage();
    renderPinsManager();
}

function renderTeacherDashboard() {
    const students = appData.students;
    document.getElementById('tch-total-students').textContent = students.length;
    const tileBadge = document.getElementById('tile-badge-students');
    if (tileBadge) tileBadge.textContent = students.length;

    const dictCount = Object.values(LEXICON_DB).reduce((acc, arr) => acc + arr.length, 0);
    document.getElementById('tch-dict-size').textContent = dictCount;

    let sumPPM = 0, countPPM = 0, sumAcc = 0;
    const tbody = document.getElementById('teacher-table-body');
    tbody.innerHTML = "";

    if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:24px; color:var(--text-muted);">Encara no hi ha alumnes registrats a l'aula. Clica <strong>+ Nou alumne</strong> per començar.</td></tr>`;
    }

    const tchFilter = document.getElementById('tch-group-filter') ? document.getElementById('tch-group-filter').value : 'ALL';
    const visibleStudents = tchFilter === 'ALL' ? students : students.filter(s => s.grade === tchFilter);

    visibleStudents.forEach(st => {
        const last = st.sessions[st.sessions.length - 1];
        const expected = PHASES_INFO[st.phase].expectedPPM;

        if (last) {
            sumPPM += last.ppm;
            sumAcc += last.accuracy;
            countPPM++;
        }

        let statusBadge = `<span class="badge badge-blue">Pendent cribratge</span>`;
        if (last) {
            if (last.accuracy < 75 || last.ppm < expected * 0.72) {
                statusBadge = `<span class="badge badge-red">⚠️ Reforç AL/PT</span>`;
            } else if (last.accuracy < 86 || last.ppm < expected * 0.9) {
                statusBadge = `<span class="badge badge-amber">En procés</span>`;
            } else {
                statusBadge = `<span class="badge badge-green">Òptim</span>`;
            }
        }

        if (!st.pin || !/^[0-9]{3}$/.test(String(st.pin))) {
            st.pin = generateRandom3DigitPin();
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${st.avatar} ${st.name}</strong></td>
            <td>${st.grade}</td>
            <td><code style="background:var(--primary-soft); color:var(--primary); padding:4px 10px; border-radius:8px; font-size:1.05rem; font-weight:800; letter-spacing:0.15em;">${st.pin}</code></td>
            <td>Fase ${st.phase}</td>
            <td>${st.sessions.length}</td>
            <td><strong>${last ? last.ppm + ' PPM' : '-'}</strong></td>
            <td>${last ? last.accuracy + '%' : '-'}</td>
            <td>${statusBadge}</td>
            <td style="display:flex; gap:6px; flex-wrap:wrap;">
                <button class="btn btn-purple btn-sm" onclick="openEditPinModal('${st.id}')" title="Configurar PIN de 3 xifres">🔑 PIN</button>
                <button class="btn btn-outline btn-sm" onclick="openStudentPI('${st.id}')">✏️ Editar / PI</button>
                <button class="btn btn-outline btn-sm" onclick="openStudentQRCard('${st.id}')" title="Carnet QR">🪪</button>
                <button class="btn btn-danger-soft btn-sm" onclick="deleteStudentById('${st.id}')" title="Eliminar alumne">🗑️</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('tch-avg-ppm').textContent = countPPM ? Math.round(sumPPM / countPPM) : 0;
    document.getElementById('tch-avg-acc').textContent = countPPM ? Math.round(sumAcc / countPPM) + "%" : "0%";
}

function renderSVGLineChart(values, labels, color, maxVal, refLineVal) {
    if (!values || values.length === 0) {
        return `<p style="font-size:0.84rem; color:var(--text-muted); padding:20px 0;">Encara no hi ha sessions registrades.</p>`;
    }
    const w = 360, h = 155, padL = 34, padR = 16, padT = 18, padB = 28;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;
    const topMax = Math.max(maxVal, ...values, refLineVal || 0);

    const getX = idx => values.length === 1 ? padL + plotW / 2 : padL + (idx / (values.length - 1)) * plotW;
    const getY = val => padT + plotH - (val / topMax) * plotH;

    let refSvg = "";
    if (refLineVal) {
        const ry = getY(refLineVal);
        refSvg = `
            <line x1="${padL}" y1="${ry}" x2="${w - padR}" y2="${ry}" stroke="#94A3B8" stroke-dasharray="4,4" stroke-width="1.2"/>
            <text x="${w - padR}" y="${ry - 4}" font-size="9" fill="#64748B" text-anchor="end">Objectiu (${refLineVal})</text>
        `;
    }

    const points = values.map((v, i) => `${getX(i)},${getY(v)}`).join(' ');
    const areaPoints = `${getX(0)},${padT + plotH} ${points} ${getX(values.length - 1)},${padT + plotH}`;

    const dots = values.map((v, i) => `
        <circle cx="${getX(i)}" cy="${getY(v)}" r="4.5" fill="${color}" stroke="white" stroke-width="1.5"/>
        <text x="${getX(i)}" y="${getY(v) - 8}" font-size="10" font-weight="700" fill="#0F172A" text-anchor="middle">${v}</text>
        <text x="${getX(i)}" y="${h - 8}" font-size="9" fill="#64748B" text-anchor="middle">${labels[i]}</text>
    `).join('');

    return `
        <svg viewBox="0 0 ${w} ${h}" style="width:100%; height:auto; overflow:visible;">
            <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}" stroke="#CBD5E1" stroke-width="1"/>
            <line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="#CBD5E1" stroke-width="1"/>
            ${refSvg}
            ${values.length > 1 ? `<polygon points="${areaPoints}" fill="${color}" fill-opacity="0.12"/>` : ''}
            ${values.length > 1 ? `<polyline fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${points}"/>` : ''}
            ${dots}
        </svg>
    `;
}

function openStudentPI(studentId) {
    selectedPIStudentId = studentId;
    const st = appData.students.find(s => s.id === studentId);
    if (!st) return;

    const classTab = document.getElementById('teacher-tab-class');
    if (classTab && classTab.style.display === 'none') {
        switchTeacherTab('class');
    }

    const card = document.getElementById('pi-detail-card');
    card.style.display = "block";

    document.getElementById('pi-name').textContent = `${st.avatar} ${st.name}`;
    document.getElementById('pi-meta').textContent = `${st.grade} · ${PHASES_INFO[st.phase].name} · Taquistoscopi: ${st.tachSpeed} ms`;

    document.getElementById('pi-name-input').value = st.name;
    if (!st.pin || !/^[0-9]{3}$/.test(String(st.pin))) st.pin = generateRandom3DigitPin();
    const piPinInp = document.getElementById('pi-pin-input');
    if (piPinInp) piPinInp.value = st.pin;
    const gradeSel = document.getElementById('pi-grade-select');
    if (![...gradeSel.options].some(o => o.value === st.grade)) {
        const opt = document.createElement('option');
        opt.value = st.grade;
        opt.textContent = st.grade;
        gradeSel.appendChild(opt);
    }
    gradeSel.value = st.grade;
    document.getElementById('pi-phase-select').value = st.phase;
    document.getElementById('pi-speed-select').value = st.tachSpeed;
    document.getElementById('pi-a11y-select').value = st.a11yProfile || "none";

    const recentSessions = st.sessions.slice(-8);
    const ppmValues = recentSessions.map(s => s.ppm);
    const accValues = recentSessions.map(s => s.accuracy);
    const dateLabels = recentSessions.map(s => s.date.slice(0, 5));
    const expectedPPM = PHASES_INFO[st.phase].expectedPPM;

    document.getElementById('chart-ppm-box').innerHTML = renderSVGLineChart(ppmValues, dateLabels, "#2563EB", 160, expectedPPM);
    document.getElementById('chart-acc-box').innerHTML = renderSVGLineChart(accValues, dateLabels, "#10B981", 100, 85);

    const heatmapEl = document.getElementById('pi-heatmap');
    heatmapEl.innerHTML = "";
    const entries = Object.entries(st.phonemeStats);

    if (entries.length === 0) {
        heatmapEl.innerHTML = `<p style="color:var(--text-muted); font-size:0.88rem;">Encara no hi ha dades fonològiques registrades.</p>`;
    } else {
        entries.forEach(([tag, data]) => {
            const pct = Math.round((data.ok / data.total) * 100);
            let cls = "heat-ok";
            if (pct < 70) cls = "heat-bad";
            else if (pct < 88) cls = "heat-warn";

            const cell = document.createElement('div');
            cell.className = `heat-cell ${cls}`;
            cell.innerHTML = `
                <strong style="font-size:0.84rem;">${tag}</strong>
                <span style="font-size:1.15rem; font-weight:800;">${pct}%</span>
                <span style="font-size:0.75rem; opacity:0.85;">${data.ok}/${data.total} encerts</span>
            `;
            heatmapEl.appendChild(cell);
        });
    }

    const histBody = document.getElementById('pi-history-body');
    histBody.innerHTML = "";
    if (st.sessions.length === 0) {
        histBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Cap sessió realitzada encara.</td></tr>`;
    } else {
        [...st.sessions].reverse().forEach(s => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${s.date}</td>
                <td>${s.type || 'Sessió'} (Fase ${s.phase})</td>
                <td><strong>${s.accuracy}%</strong></td>
                <td>${s.ppm} PPM</td>
                <td>${s.accuracy >= 85 ? '🟢 Òptim' : '🟡 En procés'}</td>
            `;
            histBody.appendChild(tr);
        });
    }

    card.scrollIntoView({ behavior: 'smooth' });
}

function launchScreeningForSelected() {
    if (selectedPIStudentId) startScreeningTest(selectedPIStudentId);
}

function updateStudentPI() {
    const st = appData.students.find(s => s.id === selectedPIStudentId);
    if (!st) return;
    const newName = document.getElementById('pi-name-input').value.trim();
    if (newName) st.name = newName;
    const piPinInp = document.getElementById('pi-pin-input');
    if (piPinInp && /^[0-9]{3}$/.test(piPinInp.value.trim())) {
        st.pin = piPinInp.value.trim();
    }
    st.grade = document.getElementById('pi-grade-select').value;
    st.phase = parseInt(document.getElementById('pi-phase-select').value, 10);
    st.tachSpeed = parseInt(document.getElementById('pi-speed-select').value, 10);
    st.a11yProfile = document.getElementById('pi-a11y-select').value;
    saveStorage();
    renderTeacherDashboard();
    openStudentPI(st.id);
}

function deleteStudentById(id) {
    const st = appData.students.find(s => s.id === id);
    if (!st) return;
    if (confirm(`Segur que vols eliminar el perfil de ${st.name} (${st.grade})? S'esborrarà immediatament de tots els dispositius.`)) {
        if (!Array.isArray(appData.deletedIds)) appData.deletedIds = [];
        if (!appData.deletedIds.includes(id)) appData.deletedIds.push(id);
        appData.students = appData.students.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
        pushToSupabase();
        if (selectedPIStudentId === id) {
            selectedPIStudentId = null;
            document.getElementById('pi-detail-card').style.display = "none";
        }
        renderTeacherDashboard();
        renderHomeStudents();
    }
}

function deleteCurrentPIStudent() {
    if (selectedPIStudentId) deleteStudentById(selectedPIStudentId);
}

function saveCustomText() {
    const title = document.getElementById('cust-text-title').value.trim();
    const phase = parseInt(document.getElementById('cust-text-phase').value, 10);
    const text = document.getElementById('cust-text-body').value.trim();
    const qText = document.getElementById('cust-q-text').value.trim();
    const qOk = document.getElementById('cust-q-ok').value.trim();
    const qD1 = document.getElementById('cust-q-d1').value.trim();
    const qD2 = document.getElementById('cust-q-d2').value.trim();

    if (!title || !text) {
        alert("Introdueix un títol i el text de lectura.");
        return;
    }

    const questions = [];
    if (qText && qOk && qD1) {
        const opts = [qOk, qD1];
        if (qD2) opts.push(qD2);
        questions.push({ q: qText, opts, ans: 0 });
    }

    appData.customTexts.push({
        id: "ct_" + Date.now(),
        title,
        phase,
        text,
        questions
    });

    saveStorage();
    document.getElementById('cust-text-title').value = "";
    document.getElementById('cust-text-body').value = "";
    document.getElementById('cust-q-text').value = "";
    document.getElementById('cust-q-ok').value = "";
    document.getElementById('cust-q-d1').value = "";
    document.getElementById('cust-q-d2').value = "";
    renderCustomTextsList();
    alert("Text afegit correctament al banc de lectures de l'escola!");
}

function renderCustomTextsList() {
    const container = document.getElementById('custom-texts-list');
    if (appData.customTexts.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); font-size:0.88rem;">Encara no heu creat textos personalitzats.</p>`;
        return;
    }
    container.innerHTML = appData.customTexts.map(ct => `
        <div style="border:1px solid var(--border); border-radius:12px; padding:14px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
            <div>
                <span class="badge badge-blue">Fase ${ct.phase}</span>
                <strong style="margin-left:6px;">${ct.title}</strong>
                <p style="font-size:0.88rem; color:var(--text-muted); margin-top:6px;">${ct.text}</p>
            </div>
            <button class="btn btn-danger-soft btn-sm" onclick="deleteCustomText('${ct.id}')">🗑️</button>
        </div>
    `).join('');
}

function deleteCustomText(id) {
    appData.customTexts = appData.customTexts.filter(c => c.id !== id);
    saveStorage();
    renderCustomTextsList();
}

function exportClassData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `llegeix_mes_classe_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function importClassData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && Array.isArray(imported.students)) {
                imported.students.forEach(impSt => {
                    const existing = appData.students.find(s => s.id === impSt.id || s.name.toLowerCase() === impSt.name.toLowerCase());
                    if (!existing) {
                        appData.students.push(impSt);
                    } else {
                        if (impSt.sessions.length > existing.sessions.length) {
                            Object.assign(existing, impSt);
                        }
                    }
                });
                if (Array.isArray(imported.customTexts)) {
                    imported.customTexts.forEach(ct => {
                        if (!appData.customTexts.some(x => x.id === ct.id)) appData.customTexts.push(ct);
                    });
                }
                saveStorage();
                renderTeacherDashboard();
                renderCustomTextsList();
                alert("Dades fusionades i importades correctament!");
            } else {
                alert("Format de fitxer no vàlid.");
            }
        } catch (err) {
            alert("Error en llegir el fitxer JSON.");
        }
    };
    reader.readAsText(file);
}



function applyKioskState() {
    document.body.classList.toggle('kiosk-locked', !!appData.kioskMode);
}

function updateKioskUI() {
    const btn = document.getElementById('btn-toggle-kiosk');
    const lbl = document.getElementById('kiosk-state-label');
    if (!btn || !lbl) return;
    if (appData.kioskMode) {
        btn.textContent = "🔓 Desactivar mode bloqueig d'aula";
        lbl.textContent = "Estat actual: Activat (botons docents ocults a l'aula)";
    } else {
        btn.textContent = "🔒 Activar mode bloqueig d'aula";
        lbl.textContent = "Estat actual: Desactivat";
    }
}

function toggleKioskMode() {
    appData.kioskMode = !appData.kioskMode;
    saveStorage();
    applyKioskState();
    updateKioskUI();
}

function importBulkStudents() {
    const raw = document.getElementById('bulk-names-textarea').value;
    const grade = document.getElementById('bulk-grade-select').value;
    const startMode = document.getElementById('bulk-start-mode').value;
    const avatars = ["🦊", "🦉", "🐢", "🐬", "🦁", "🐼", "🚀", "🦄"];

    const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) {
        alert("Enganxa com a mínim un nom d'alumne.");
        return;
    }

    let phase = 1, speed = 1350;
    if (grade.startsWith("2n")) { phase = 2; speed = 1200; }
    else if (grade.startsWith("3r")) { phase = 3; speed = 1050; }
    else if (grade.startsWith("4t")) { phase = 4; speed = 950; }
    else if (grade.startsWith("5è") || grade.startsWith("6è")) { phase = 5; speed = 850; }

    let created = 0;
    lines.forEach((name, idx) => {
        const exists = appData.students.some(s => s.name.toLowerCase() === name.toLowerCase() && s.grade === grade);
        if (!exists) {
            appData.students.push({
                id: "st_" + Date.now() + "_" + idx,
                name,
                grade,
                pin: generateRandom3DigitPin(),
                avatar: avatars[(appData.students.length + idx) % avatars.length],
                phase,
                tachSpeed: speed,
                xp: 0,
                streakDays: 1,
                stickers: [],
                screened: startMode === "direct",
                a11yProfile: "none",
                phonemeStats: {},
                sessions: []
            });
            created++;
        }
    });

    saveStorage();
    document.getElementById('bulk-names-textarea').value = "";
    renderTeacherDashboard();
    alert(`S'han creat ${created} perfils d'alumnes correctament!`);
}

function populateFocusStudentsSelect() {
    const sel = document.getElementById('focus-student-select');
    if (!sel) return;
    sel.innerHTML = `<option value="demo">🎓 Sessió de demostració (Pissarra digital)</option>`;
    appData.students.forEach(st => {
        sel.innerHTML += `<option value="${st.id}">${st.avatar} ${st.name} (${st.grade} · Fase ${st.phase})</option>`;
    });
}

function startFocusedSession() {
    const stId = document.getElementById('focus-student-select').value;
    const topic = document.getElementById('focus-topic-select').value;

    let st = appData.students.find(s => s.id === stId);
    let isDemo = false;
    if (!st) {
        isDemo = true;
        st = {
            id: "demo_st",
            name: "Grup classe",
            grade: "Primària",
            avatar: "🎓",
            phase: 3,
            tachSpeed: 1050,
            xp: 0,
            stickers: [],
            phonemeStats: {},
            sessions: []
        };
    }
    currentStudent = st;
    const phase = st.phase || 3;
    const steps = [];

    if (topic === 'bdpq') {
        const pool = LEXICON_DB[1].filter(x => x.tag.includes('b/d') || x.tag.includes('p/q')).sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach(item => steps.push({ type: 'flash', word: item.w, tag: item.tag }));
    } else if (topic === 'travades') {
        const pool = LEXICON_DB[3].filter(x => x.tag.includes('Travades')).sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach((item, i) => steps.push({ type: i % 2 === 0 ? 'flash' : 'syllables', word: item.w, syl: item.syl, tag: item.tag }));
    } else if (topic === 'digrafs') {
        const pool = LEXICON_DB[4].sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach((item, i) => steps.push({ type: i % 2 === 0 ? 'flash' : 'syllables', word: item.w, syl: item.syl, tag: item.tag }));
    } else if (topic === 'pseudo') {
        for (let i = 0; i < 6; i++) {
            steps.push({ type: 'flash', word: generatePseudoword(phase), tag: "Pseudoparaules (PACBAL)", isPseudo: true });
        }
    } else if (topic === 'chains') {
        const chains = [...CHAIN_WORDS_DB[phase], ...CHAIN_WORDS_DB[Math.min(5, phase + 1)]];
        for (let i = 0; i < 5; i++) {
            steps.push({ type: 'word_chain', chain: chains[i % chains.length], tag: "Segmentació lèxica" });
        }
    } else if (topic === 'sentences') {
        const sents = [...SENTENCE_SCRAMBLE_DB[phase], ...SENTENCE_SCRAMBLE_DB[Math.min(5, phase + 1)]];
        for (let i = 0; i < 5; i++) {
            steps.push({ type: 'sentence_scramble', words: sents[i % sents.length], tag: "Construcció sintàctica" });
        }
    } else if (topic === 'ocular') {
        const pool = LEXICON_DB[phase].sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach((item, i) => steps.push({ type: i % 2 === 0 ? 'saccadic' : 'visual_noise', word: item.w, tag: "Gimnàstica ocular" }));
    } else if (topic === 'pacbal_full') {
        if (stId !== 'demo') {
            startPacbalPracticeSession(stId);
            return;
        }
        const aItem = PACBAL_ALPHABETIC_ITEMS[Math.floor(Math.random() * PACBAL_ALPHABETIC_ITEMS.length)];
        const pItem = PACBAL_PHONEMIC_DB[Math.floor(Math.random() * PACBAL_PHONEMIC_DB.length)];
        const vItem = PACBAL_VOCAB_DB[Math.floor(Math.random() * PACBAL_VOCAB_DB.length)];
        steps.push({ type: 'pacbal_alphabetic', item: aItem, tag: "Principi alfabètic (PACBAL)" });
        steps.push({ type: 'pacbal_phonemic', item: pItem, tag: "Segmentació fonèmica (PACBAL)" });
        steps.push({ type: 'flash', word: generatePseudoword(phase), tag: "Pseudoparaules (PACBAL)", isPseudo: true });
        steps.push({ type: 'pacbal_vocab', item: vItem, tag: "Vocabulari contextual (PACBAL)" });
        steps.push({ type: 'reading', passage: DEFAULT_READINGS[1][0], tag: "Comprensió lectora (PACBAL)" });
    } else if (topic === 'pacbal_alphabetic') {
        const pool = [...PACBAL_ALPHABETIC_ITEMS].sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach(item => steps.push({ type: 'pacbal_alphabetic', item, tag: "Principi alfabètic (PACBAL)" }));
    } else if (topic === 'pacbal_phonemic') {
        const pool = [...PACBAL_PHONEMIC_DB].sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach(item => steps.push({ type: 'pacbal_phonemic', item, tag: "Segmentació fonèmica (PACBAL)" }));
    } else if (topic === 'pacbal_vocab') {
        const pool = [...PACBAL_VOCAB_DB].sort(() => Math.random() - 0.5).slice(0, 6);
        pool.forEach(item => steps.push({ type: 'pacbal_vocab', item, tag: "Vocabulari contextual (PACBAL)" }));
    }

    sessionState = {
        isScreening: isDemo,
        steps,
        currentIndex: 0,
        correctCount: 0,
        totalQuestions: 0,
        levelHits: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        currentSpeed: st.tachSpeed,
        streak: 0,
        combo: 0,
        errorQueue: [],
        inRecoveryMode: false,
        recoveredCount: 0,
        initialErrorCount: 0,
        measuredPPM: PHASES_INFO[phase].expectedPPM,
        prosodyRating: "Completada"
    };

    document.getElementById('ses-avatar').textContent = st.avatar;
    document.getElementById('ses-student-name').textContent = st.name;
    document.getElementById('ses-phase-badge').textContent = "🎯 Sessió focalitzada";
    updateComboUI();

    switchView('view-session');
    renderCurrentStep();
}


function setFontStyle(style) {
    if (!['impremta', 'pal', 'lligada'].includes(style)) style = 'impremta';
    appData.fontStyle = style;
    saveStorage();
    applyFontStyle();
}

function applyFontStyle() {
    const style = appData.fontStyle || 'impremta';
    document.body.classList.remove('font-impremta', 'font-pal', 'font-lligada');
    document.body.classList.add('font-' + style);

    ['impremta', 'pal', 'lligada'].forEach(s => {
        const btn = document.getElementById('btn-font-' + s);
        if (btn) btn.classList.toggle('active', s === style);
    });
}


const SUPABASE_URL = "https://ozgqztrzjubrakzyhsvd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Ew4Rjt4V_cNnoJfW72Ncig_sHhJ-fFA";
let sbClient = null;
let sbCurrentUser = null;
let sbRealtimeChannel = null;
let sbPollingTimer = null;
let sbIsPushing = false;
let sbPendingPush = false;
let sbLastCloudUpdatedAt = null;

function initSupabase() {
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                realtime: { params: { eventsPerSecond: 10 } }
            });
            sbClient.auth.getSession().then(({ data }) => {
                if (data && data.session && data.session.user) {
                    sbCurrentUser = data.session.user;
                    updateCloudUI();
                    pullFromSupabase(false);
                    startRealtimeSync();
                }
            });
            sbClient.auth.onAuthStateChange((_event, session) => {
                const prevId = sbCurrentUser ? sbCurrentUser.id : null;
                sbCurrentUser = session ? session.user : null;
                updateCloudUI();
                if (sbCurrentUser && sbCurrentUser.id !== prevId) {
                    startRealtimeSync();
                } else if (!sbCurrentUser) {
                    stopRealtimeSync();
                }
            });

            // Sincronització immediata quan l'usuari torna a la pestanya o desbloqueja la tauleta
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible' && sbCurrentUser) {
                    pullFromSupabase(false);
                }
            });
            window.addEventListener('focus', () => {
                if (sbCurrentUser) pullFromSupabase(false);
            });
        }
    } catch (e) {
        console.warn("Supabase init warning:", e);
    }
}

function startRealtimeSync() {
    if (!sbClient || !sbCurrentUser) return;
    stopRealtimeSync();

    // 1. Subscripció en temps real via WebSocket (Supabase Realtime)
    try {
        sbRealtimeChannel = sbClient
            .channel('escola_grups_rt_' + sbCurrentUser.id)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'escola_grups',
                    filter: 'user_id=eq.' + sbCurrentUser.id
                },
                (payload) => {
                    if (sbIsPushing) return;
                    if (payload && payload.new) {
                        applyRemoteCloudRecord(payload.new);
                    } else {
                        pullFromSupabase(false);
                    }
                }
            )
            .subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    const pill = document.getElementById('cloud-status-pill');
                    if (pill && sbCurrentUser) {
                        pill.style.display = "inline-flex";
                        pill.textContent = "☁️";
                        pill.style.borderColor = "#10B981";
                        pill.title = "Temps real actiu (" + sbCurrentUser.email + ")";
                    }
                }
            });
    } catch (e) {
        console.warn("Realtime channel error:", e);
    }

    // 2. Polling ràpid de seguretat cada 4 segons (per si la xarxa escolar bloqueja WebSockets)
    sbPollingTimer = setInterval(() => {
        if (sbCurrentUser && !sbIsPushing && document.visibilityState === 'visible') {
            pullFromSupabase(false);
        }
    }, 4000);
}

function stopRealtimeSync() {
    if (sbRealtimeChannel && sbClient) {
        try { sbClient.removeChannel(sbRealtimeChannel); } catch (e) {}
        sbRealtimeChannel = null;
    }
    if (sbPollingTimer) {
        clearInterval(sbPollingTimer);
        sbPollingTimer = null;
    }
}

function updateCloudUI() {
    const pill = document.getElementById('cloud-status-pill');
    const outBox = document.getElementById('cloud-logged-out-box');
    const inBox = document.getElementById('cloud-logged-in-box');
    const emailDisp = document.getElementById('sb-user-email-display');

    if (sbCurrentUser) {
        if (pill) {
            pill.style.display = "inline-flex";
            pill.textContent = "☁️";
            pill.style.borderColor = "#10B981";
            pill.title = "Núvol sincronitzat (" + sbCurrentUser.email + ")";
        }
        if (outBox) outBox.style.display = "none";
        if (inBox) inBox.style.display = "block";
        if (emailDisp) emailDisp.textContent = sbCurrentUser.email;
    } else {
        if (pill) pill.style.display = "none";
        if (outBox) outBox.style.display = "block";
        if (inBox) inBox.style.display = "none";
    }
}

async function cloudSignIn() {
    if (!sbClient) return;
    const email = document.getElementById('sb-email').value.trim();
    const password = document.getElementById('sb-password').value;
    const msg = document.getElementById('sb-auth-msg');
    if (!email || !password) {
        msg.style.color = "var(--danger)";
        msg.textContent = "Introdueix el correu electrònic i la contrasenya.";
        return;
    }
    msg.style.color = "var(--text-muted)";
    msg.textContent = "⏳ Connectant amb el teu compte privat...";

    const { data, error } = await sbClient.auth.signInWithPassword({ email, password });
    if (error) {
        msg.style.color = "var(--danger)";
        msg.textContent = "⚠️ Error d'accés: " + error.message;
        return;
    }
    sbCurrentUser = data.user;
    msg.textContent = "";
    updateCloudUI();
    await pullFromSupabase(true, true);
    startRealtimeSync();
}

async function cloudSignUp() {
    if (!sbClient) return;
    const email = document.getElementById('sb-email').value.trim();
    const password = document.getElementById('sb-password').value;
    const msg = document.getElementById('sb-auth-msg');
    if (!email || password.length < 6) {
        msg.style.color = "var(--danger)";
        msg.textContent = "Escriu un correu vàlid i una contrasenya de 6 caràcters com a mínim.";
        return;
    }
    msg.style.color = "var(--text-muted)";
    msg.textContent = "⏳ Creant el teu usuari privat...";

    const { data, error } = await sbClient.auth.signUp({ email, password });
    if (error) {
        msg.style.color = "var(--danger)";
        msg.textContent = "⚠️ No s'ha pogut crear l'usuari: " + error.message;
        return;
    }
    if (data.session) {
        sbCurrentUser = data.user;
        msg.textContent = "";
        updateCloudUI();
        await pushToSupabase();
        startRealtimeSync();
        alert("Usuari creat i dades actuals pujades al núvol!");
    } else {
        msg.style.color = "var(--secondary)";
        msg.textContent = "✅ Usuari creat! Revisa el teu correu per confirmar-lo (o desactiva 'Confirm email' a Supabase) i inicia sessió.";
    }
}

async function cloudSignOut() {
    if (!sbClient) return;
    stopRealtimeSync();
    await sbClient.auth.signOut();
    sbCurrentUser = null;
    updateCloudUI();
}

// Pujada immediata amb cua perquè cap canvi es perdi ni s'encavalqui
function scheduleCloudPush() {
    if (!sbClient || !sbCurrentUser) return;
    pushToSupabase();
}

async function pushToSupabase() {
    if (!sbClient || !sbCurrentUser) return { ok: false, error: { message: "Sessió no iniciada" } };
    if (sbIsPushing) {
        sbPendingPush = true;
        return { ok: true };
    }
    sbIsPushing = true;
    const pill = document.getElementById('cloud-status-pill');
    if (pill) { pill.textContent = "☁️"; pill.title = "Desant al núvol..."; }

    try {
        const nowIso = new Date().toISOString();
        const payload = {
            user_id: sbCurrentUser.id,
            students: appData.students || [],
            custom_texts: appData.customTexts || [],
            updated_at: nowIso
        };
        const { error } = await sbClient
            .from('escola_grups')
            .upsert(payload, { onConflict: 'user_id' });

        if (error) throw error;

        sbLastCloudUpdatedAt = nowIso;
        const nowStr = new Date().toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const disp = document.getElementById('sb-last-sync-display');
        if (disp) {
            disp.style.color = "var(--text-muted)";
            disp.textContent = "Sincronitzat en temps real: " + nowStr;
        }
        if (pill) {
            pill.style.display = "inline-flex";
            pill.textContent = "☁️";
            pill.style.borderColor = "#10B981";
            pill.title = "Núvol sincronitzat (" + sbCurrentUser.email + ")";
        }
        return { ok: true };
    } catch (err) {
        console.error("Error pujant dades a Supabase:", err);
        const errDetail = (err && (err.message || err.details || err.hint)) ? `${err.message || ''} (${err.code || ''})` : JSON.stringify(err);
        const disp = document.getElementById('sb-last-sync-display');
        if (disp) {
            disp.style.color = "var(--danger)";
            disp.textContent = "⚠️ Error en desar: " + errDetail;
        }
        if (pill) {
            pill.style.display = "inline-flex";
            pill.textContent = "⚠️";
            pill.style.borderColor = "#EF4444";
            pill.title = "Error de connexió amb el núvol";
        }
        return { ok: false, error: err };
    } finally {
        sbIsPushing = false;
        if (sbPendingPush) {
            sbPendingPush = false;
            pushToSupabase();
        }
    }
}

function applyRemoteCloudRecord(data, isInitialLoginMerge = false) {
    if (!data) return false;
    // Evitem reprocessar la mateixa versió que acabem de pujar nosaltres
    if (!isInitialLoginMerge && data.updated_at && data.updated_at === sbLastCloudUpdatedAt) {
        return false;
    }

    const cloudStudents = Array.isArray(data.students) ? data.students : [];
    const deletedIds = Array.isArray(appData.deletedIds) ? appData.deletedIds : [];
    let changed = false;

    if (isInitialLoginMerge) {
        // En iniciar sessió per primer cop en un dispositiu, fusionem els alumnes locals nous que no estiguin esborrats
        const merged = [...cloudStudents];
        appData.students.forEach(lSt => {
            if (!merged.some(c => c.id === lSt.id)) {
                merged.push(lSt);
                changed = true;
            }
        });
        if (JSON.stringify(appData.students) !== JSON.stringify(merged)) {
            appData.students = merged;
            changed = true;
        }
    } else {
        // Sincronització en temps real: el núvol és la font autoritativa (reflecteix esborrats, canvis de nom, grup, XP, sessions...)
        const filteredCloud = cloudStudents.filter(cSt => !deletedIds.includes(cSt.id));

        // Si un alumne està fent una sessió activa en aquest precís instant, conservem el seu progrés local si és superior
        if (currentStudent && sessionState) {
            const activeLocal = appData.students.find(s => s.id === currentStudent.id);
            const inCloudIdx = filteredCloud.findIndex(s => s.id === currentStudent.id);
            if (activeLocal && inCloudIdx !== -1) {
                if ((activeLocal.xp || 0) > (filteredCloud[inCloudIdx].xp || 0)) {
                    filteredCloud[inCloudIdx] = activeLocal;
                }
            }
        }

        if (JSON.stringify(appData.students) !== JSON.stringify(filteredCloud)) {
            appData.students = filteredCloud;
            changed = true;
        }
    }

    const cloudTexts = Array.isArray(data.custom_texts) ? data.custom_texts : [];
    if (JSON.stringify(appData.customTexts) !== JSON.stringify(cloudTexts)) {
        appData.customTexts = cloudTexts;
        changed = true;
    }

    if (data.updated_at) sbLastCloudUpdatedAt = data.updated_at;

    if (changed) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
        refreshVisibleViewsAfterSync();
    }

    const nowStr = new Date().toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const disp = document.getElementById('sb-last-sync-display');
    if (disp) {
        disp.style.color = "var(--text-muted)";
        disp.textContent = "Sincronitzat en temps real: " + nowStr;
    }
    return changed;
}

function refreshVisibleViewsAfterSync() {
    if (document.getElementById('view-home').classList.contains('active')) {
        renderHomeStudents();
    }
    if (document.getElementById('view-teacher').classList.contains('active')) {
        renderTeacherDashboard();
        renderCustomTextsList();
        if (selectedPIStudentId) {
            const stillExists = appData.students.some(s => s.id === selectedPIStudentId);
            if (stillExists) {
                // Només refresquem la fitxa PI si l'usuari no està escrivint dins el camp de nom
                if (document.activeElement !== document.getElementById('pi-name-input')) {
                    openStudentPI(selectedPIStudentId);
                }
            } else {
                selectedPIStudentId = null;
                document.getElementById('pi-detail-card').style.display = "none";
            }
        }
    }
}

async function pullFromSupabase(showAlert, isInitialLoginMerge = false) {
    if (!sbClient || !sbCurrentUser) return;
    const pill = document.getElementById('cloud-status-pill');
    try {
        const { data, error } = await sbClient
            .from('escola_grups')
            .select('students, custom_texts, updated_at')
            .eq('user_id', sbCurrentUser.id)
            .maybeSingle();

        if (error) throw error;

        if (!data) {
            const res = await pushToSupabase();
            if (!res.ok) throw res.error;
            if (showAlert) alert("Connexió establerta! S'han desat els perfils locals al teu espai privat del núvol.");
            return;
        }

        const wasChanged = applyRemoteCloudRecord(data, isInitialLoginMerge);

        if (isInitialLoginMerge && wasChanged) {
            await pushToSupabase();
        }

        if (pill) {
            pill.style.display = "inline-flex";
            pill.textContent = "☁️";
            pill.style.borderColor = "#10B981";
            pill.title = "Núvol sincronitzat (" + sbCurrentUser.email + ")";
        }

        if (showAlert) alert("Sincronització completada correctament!");
    } catch (err) {
        console.error("Error baixant dades de Supabase:", err);
        const errDetail = (err && (err.message || err.details || err.hint))
            ? `${err.message || ''} ${err.details || ''} (Codi: ${err.code || 'desconegut'})`
            : JSON.stringify(err);
        const disp = document.getElementById('sb-last-sync-display');
        if (disp) {
            disp.style.color = "var(--danger)";
            disp.textContent = "⚠️ Detall de l'error: " + errDetail;
        }
        if (pill) {
            pill.style.display = "inline-flex";
            pill.textContent = "⚠️";
            pill.style.borderColor = "#EF4444";
            pill.title = "Error de connexió amb el núvol";
        }
        if (showAlert) alert("Error de connexió amb el núvol:\n" + errDetail);
    }
}

function syncNowFromCloud() {
    pullFromSupabase(true, false);
}

initStorage();
initSupabase();
applyFontStyle();
applyKioskState();
renderHomeStudents();

const changeAdminSupabasePassword = changeAdminCloudPassword;
