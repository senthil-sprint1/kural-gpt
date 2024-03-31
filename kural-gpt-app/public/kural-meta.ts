export interface KuralMetadata {
  pal: string;
  iyal: string;
  athigaram: Athigaram;
}
export function getMetaData(kuralNumber: number) {}

interface Pal {
  name: string;
  translation: string;
  index: number;
  iyal: Iyal[];
}

interface Iyal {
  name: string;
  translation: string;
  index: number;
  athigaram: Athigaram[];
}

interface Athigaram {
  name: string;
  translation: string;
  transliteration: string;
  index: number;
  start: number;
  end: number;
}

const meta: Pal[] = [
  {
    index: 1,
    name: "அறத்துப்பால்",
    translation: "Virtue",
    iyal: [
      {
        index: 1,
        name: "பாயிரவியல்",
        translation: "Prologue",
        athigaram: [
          {
            name: "கடவுள் வாழ்த்து",
            translation: "The Praise of God",
            transliteration: "Katavul Vaazhththu",
            index: 1,
            start: 1,
            end: 10,
          },
          {
            name: "வான்சிறப்பு",
            translation: "The Blessing of Rain",
            transliteration: "Vaansirappu",
            index: 2,
            start: 11,
            end: 20,
          },
          {
            name: "நீத்தார் பெருமை",
            translation: "The Greatness of Ascetics",
            transliteration: "Neeththaar Perumai",
            index: 3,
            start: 21,
            end: 30,
          },
          {
            name: "அறன் வலியுறுத்தல்",
            translation: "Assertion of the Strength of Virtue",
            transliteration: "Aran Valiyuruththal",
            index: 4,
            start: 31,
            end: 40,
          },
        ],
      },
    ],
  },
  {
    index: 2,
    name: "பொருட்பால்",
    translation: "Wealth",
    iyal: [
      {
        name: "அரசியல்",
        translation: "Royalty",
        index: 5,
        athigaram: [
          {
            name: "இறைமாட்சி",
            translation: "The Greatness of a King",
            transliteration: "Iraimaatchi",
            index: 39,
            start: 381,
            end: 390,
          },
          {
            name: "கல்வி",
            translation: "Learning",
            transliteration: "Kalvi",
            index: 40,
            start: 391,
            end: 400,
          },
          {
            name: "கல்லாமை",
            translation: "Ignorance",
            transliteration: "Kallaamai",
            index: 41,
            start: 401,
            end: 410,
          },
          {
            name: "கேள்வி",
            translation: "Hearing",
            transliteration: "Kelvi",
            index: 42,
            start: 411,
            end: 420,
          },
          {
            name: "அறிவுடைமை",
            translation: "The Possession of Knowledge",
            transliteration: "Arivutaimai",
            index: 43,
            start: 421,
            end: 430,
          },
          {
            name: "குற்றங்கடிதல்",
            translation: "The Correction of Faults",
            transliteration: "Kutrangatidhal",
            index: 44,
            start: 431,
            end: 440,
          },
          {
            name: "பெரியாரைத் துணைக்கோடல்",
            translation: "Seeking the Aid of Great Men",
            transliteration: "Periyaaraith Thunaikkotal",
            index: 45,
            start: 441,
            end: 450,
          },
          {
            name: "சிற்றினம் சேராமை",
            translation: "Avoiding mean Associations",
            transliteration: "Sitrinanjeraamai",
            index: 46,
            start: 451,
            end: 460,
          },
          {
            name: "தெரிந்து செயல்வகை",
            translation: "Acting after due Consideration",
            transliteration: "Therindhuseyalvakai",
            index: 47,
            start: 461,
            end: 470,
          },
          {
            name: "வலியறிதல்",
            translation: "The Knowledge of Power",
            transliteration: "Valiyaridhal",
            index: 48,
            start: 471,
            end: 480,
          },
          {
            name: "காலமறிதல்",
            translation: "Knowing the fitting Time",
            transliteration: "Kaalamaridhal",
            index: 49,
            start: 481,
            end: 490,
          },
          {
            name: "இடனறிதல்",
            translation: "Knowing the Place",
            transliteration: "Itanaridhal",
            index: 50,
            start: 491,
            end: 500,
          },
          {
            name: "தெரிந்து தெளிதல்",
            translation: "Selection and Confidence",
            transliteration: "Therindhudhelidhal",
            index: 51,
            start: 501,
            end: 510,
          },
          {
            name: "தெரிந்து வினையாடல்",
            translation: "Selection and Employment",
            transliteration: "Therindhuvinaiyaatal",
            index: 52,
            start: 511,
            end: 520,
          },
          {
            name: "சுற்றந் தழால்",
            translation: "Cherishing Kinsmen",
            transliteration: "Sutrandhazhaal",
            index: 53,
            start: 521,
            end: 530,
          },
          {
            name: "பொச்சாவாமை",
            translation: "Unforgetfulness",
            transliteration: "Pochchaavaamai",
            index: 54,
            start: 531,
            end: 540,
          },
          {
            name: "செங்கோன்மை",
            translation: "The Right Sceptre",
            transliteration: "Sengonmai",
            index: 55,
            start: 541,
            end: 550,
          },
          {
            name: "கொடுங்கோன்மை",
            translation: "The Cruel Sceptre",
            transliteration: "Kotungonmai",
            index: 56,
            start: 551,
            end: 560,
          },
          {
            name: "வெருவந்த செய்யாமை",
            translation: "Absence of Terrorism",
            transliteration: "Veruvandhaseyyaamai",
            index: 57,
            start: 561,
            end: 570,
          },
          {
            name: "கண்ணோட்டம்",
            translation: "Benignity",
            transliteration: "Kannottam",
            index: 58,
            start: 571,
            end: 580,
          },
          {
            name: "ஒற்றாடல்",
            translation: "Detectives",
            transliteration: "Otraatal",
            index: 59,
            start: 581,
            end: 590,
          },
          {
            name: "ஊக்கம் உடைமை",
            translation: "Energy",
            transliteration: "Ookkamutaimai",
            index: 60,
            start: 591,
            end: 600,
          },
          {
            name: "மடி இன்மை",
            translation: "Unsluggishness",
            transliteration: "Matiyinmai",
            index: 61,
            start: 601,
            end: 610,
          },
          {
            name: "ஆள்வினை உடைமை",
            translation: "Manly Effort",
            transliteration: "Aalvinaiyutaimai",
            index: 62,
            start: 611,
            end: 620,
          },
          {
            name: "இடுக்கண் அழியாமை",
            translation: "Hopefulness in Trouble",
            transliteration: "Itukkan Azhiyaamai",
            index: 63,
            start: 621,
            end: 630,
          },
        ],
      },
      {
        name: "அமைச்சியல்",
        translation: "Minister of State",
        index: 6,
        athigaram: [
          {
            name: "அமைச்சு",
            translation: "The Office of Minister of state",
            transliteration: "Amaichchu",
            index: 64,
            start: 631,
            end: 640,
          },
          {
            name: "சொல்வன்மை",
            translation: "Power of Speech",
            transliteration: "Solvanmai",
            index: 65,
            start: 641,
            end: 650,
          },
          {
            name: "வினைத் தூய்மை",
            translation: "Purity in Action",
            transliteration: "Vinaiththooimai",
            index: 66,
            start: 651,
            end: 660,
          },
          {
            name: "வினைத்திட்பம்",
            translation: "Power in Action",
            transliteration: "Vinaiththitpam",
            index: 67,
            start: 661,
            end: 670,
          },
          {
            name: "வினை செயல்வகை",
            translation: "Modes of Action",
            transliteration: "Vinaiseyalvakai",
            index: 68,
            start: 671,
            end: 680,
          },
          {
            name: "தூது",
            translation: "The Envoy",
            transliteration: "Thoodhu",
            index: 69,
            start: 681,
            end: 690,
          },
          {
            name: "மன்னரைச் சேர்ந்து ஒழுகல்",
            translation: "Conduct in the Presence of the King",
            transliteration: "Mannaraich Cherndhozhudhal",
            index: 70,
            start: 691,
            end: 700,
          },
          {
            name: "குறிப்பறிதல்",
            translation: "The Knowledge of Indications",
            transliteration: "Kuripparidhal",
            index: 71,
            start: 701,
            end: 710,
          },
          {
            name: "அவை அறிதல்",
            translation: "The Knowledge of the Council Chamber",
            transliteration: "Avaiyaridhal",
            index: 72,
            start: 711,
            end: 720,
          },
          {
            name: "அவை அஞ்சாமை",
            translation: "Not to dread the Council",
            transliteration: "Avaiyanjaamai",
            index: 73,
            start: 721,
            end: 730,
          },
        ],
      },
      {
        name: "அரணியல்",
        translation: "The Essentials of a State",
        index: 7,
        athigaram: [
          {
            name: "நாடு",
            translation: "The Land",
            transliteration: "Naatu",
            index: 74,
            start: 731,
            end: 740,
          },
          {
            name: "அரண்",
            translation: "The Fortification",
            transliteration: "Aran",
            index: 75,
            start: 741,
            end: 750,
          },
        ],
      },
      {
        name: "கூழியல்",
        translation: "Way of Making Wealth",
        index: 8,
        athigaram: [
          {
            name: "பொருள் செயல்வகை",
            translation: "Way of Accumulating Wealth",
            transliteration: "Porulseyalvakai",
            index: 76,
            start: 751,
            end: 760,
          },
        ],
      },
      {
        name: "படையில்",
        translation: "The Excellence of an Army",
        index: 9,
        athigaram: [
          {
            name: "படை மாட்சி",
            translation: "The Excellence of an Army",
            transliteration: "Pataimaatchi",
            index: 77,
            start: 761,
            end: 770,
          },
          {
            name: "படைச் செருக்கு",
            translation: "Military Spirit",
            transliteration: "Pataichcherukku",
            index: 78,
            start: 771,
            end: 780,
          },
        ],
      },
      {
        name: "நட்பியல்",
        translation: "Friendship",
        index: 10,
        athigaram: [
          {
            name: "நட்பு",
            translation: "Friendship",
            transliteration: "Natpu",
            index: 79,
            start: 781,
            end: 790,
          },
          {
            name: "நட்பாராய்தல்",
            translation: "Investigation in forming Friendships",
            transliteration: "Natpaaraaidhal",
            index: 80,
            start: 791,
            end: 800,
          },
          {
            name: "பழைமை",
            translation: "Familiarity",
            transliteration: "Pazhaimai",
            index: 81,
            start: 801,
            end: 810,
          },
          {
            name: "தீ நட்பு",
            translation: "Evil Friendship",
            transliteration: "Thee Natpu",
            index: 82,
            start: 811,
            end: 820,
          },
          {
            name: "கூடா நட்பு",
            translation: "Unreal Friendship",
            transliteration: "Kootaanatpu",
            index: 83,
            start: 821,
            end: 830,
          },
          {
            name: "பேதைமை",
            translation: "Folly",
            transliteration: "Pedhaimai",
            index: 84,
            start: 831,
            end: 840,
          },
          {
            name: "புல்லறிவாண்மை",
            translation: "Ignorance",
            transliteration: "Pullarivaanmai",
            index: 85,
            start: 841,
            end: 850,
          },
          {
            name: "இகல்",
            translation: "Hostility",
            transliteration: "Ikal",
            index: 86,
            start: 851,
            end: 860,
          },
          {
            name: "பகை மாட்சி",
            translation: "The Might of Hatred",
            transliteration: "Pakaimaatchi",
            index: 87,
            start: 861,
            end: 870,
          },
          {
            name: "பகைத்திறம் தெரிதல்",
            translation: "Knowing the Quality of Hate",
            transliteration: "Pakaiththirandheridhal",
            index: 88,
            start: 871,
            end: 880,
          },
          {
            name: "உட்பகை",
            translation: "Enmity within",
            transliteration: "Utpakai",
            index: 89,
            start: 881,
            end: 890,
          },
          {
            name: "பெரியாரைப் பிழையாமை",
            translation: "Not Offending the Great",
            transliteration: "Periyaaraip Pizhaiyaamai",
            index: 90,
            start: 891,
            end: 900,
          },
          {
            name: "பெண்வழிச் சேறல்",
            translation: "Being led by Women",
            transliteration: "Penvazhichcheral",
            index: 91,
            start: 901,
            end: 910,
          },
          {
            name: "வரைவின் மகளிர்",
            translation: "Wanton Women",
            transliteration: "Varaivinmakalir",
            index: 92,
            start: 911,
            end: 920,
          },
          {
            name: "கள்ளுண்ணாமை",
            translation: "Not Drinking Palm-Wine",
            transliteration: "Kallunnaamai",
            index: 93,
            start: 921,
            end: 930,
          },
          {
            name: "சூது",
            translation: "Gambling",
            transliteration: "Soodhu",
            index: 94,
            start: 931,
            end: 940,
          },
          {
            name: "மருந்து",
            translation: "Medicine",
            transliteration: "Marundhu",
            index: 95,
            start: 941,
            end: 950,
          },
        ],
      },
      {
        name: "குடியியல்",
        translation: "Miscellaneous",
        index: 11,
        athigaram: [
          {
            name: "குடிமை",
            translation: "Nobility",
            transliteration: "Kutimai",
            index: 96,
            start: 951,
            end: 960,
          },
          {
            name: "மானம்",
            translation: "Honour",
            transliteration: "Maanam",
            index: 97,
            start: 961,
            end: 970,
          },
          {
            name: "பெருமை",
            translation: "Greatness",
            transliteration: "Perumai",
            index: 98,
            start: 971,
            end: 980,
          },
          {
            name: "சான்றாண்மை",
            translation: "Perfectness",
            transliteration: "Saandraanmai",
            index: 99,
            start: 981,
            end: 990,
          },
          {
            name: "பண்புடைமை",
            translation: "Courtesy",
            transliteration: "Panputaimai",
            index: 100,
            start: 991,
            end: 1000,
          },
          {
            name: "நன்றியில் செல்வம்",
            translation: "Wealth without Benefaction",
            transliteration: "Nandriyilselvam",
            index: 101,
            start: 1001,
            end: 1010,
          },
          {
            name: "நாணுடைமை",
            translation: "Shame",
            transliteration: "Naanutaimai",
            index: 102,
            start: 1011,
            end: 1020,
          },
          {
            name: "குடிசெயல் வகை",
            translation: "The Way of Maintaining the Family",
            transliteration: "Kutiseyalvakai",
            index: 103,
            start: 1021,
            end: 1030,
          },
          {
            name: "உழவு",
            translation: "Farming",
            transliteration: "Uzhavu",
            index: 104,
            start: 1031,
            end: 1040,
          },
          {
            name: "நல்குரவு",
            translation: "Poverty",
            transliteration: "Nalkuravu",
            index: 105,
            start: 1041,
            end: 1050,
          },
          {
            name: "இரவு",
            translation: "Mendicancy",
            transliteration: "Iravu",
            index: 106,
            start: 1051,
            end: 1060,
          },
          {
            name: "இரவச்சம்",
            translation: "The Dread of Mendicancy",
            transliteration: "Iravachcham",
            index: 107,
            start: 1061,
            end: 1070,
          },
          {
            name: "கயமை",
            translation: "Baseness",
            transliteration: "Kayamai",
            index: 108,
            start: 1071,
            end: 1080,
          },
        ],
      },
    ],
  },
  {
    index: 3,
    name: "காமத்துப்பால்",
    translation: "Love",
    iyal: [
      {
        name: "களவியல்",
        translation: "The Pre-marital love",
        index: 12,
        athigaram: [
          {
            name: "தகை அணங்குறுத்தல்",
            translation: "The Pre-marital love",
            transliteration: "Thakaiyananguruththal",
            index: 109,
            start: 1081,
            end: 1090,
          },
          {
            name: "குறிப்பறிதல்",
            translation: "Recognition of the Signs ",
            transliteration: "Kuripparidhal",
            index: 110,
            start: 1091,
            end: 1100,
          },
          {
            name: "புணர்ச்சி மகிழ்தல்",
            translation: "Rejoicing in the Embrace",
            transliteration: "Punarchchimakizhdhal",
            index: 111,
            start: 1101,
            end: 1110,
          },
          {
            name: "நலம் புனைந்து உரைத்தல்",
            translation: "The Praise of her Beauty",
            transliteration: "Nalampunaindhuraiththal",
            index: 112,
            start: 1111,
            end: 1120,
          },
          {
            name: "காதற் சிறப்புரைத்தல்",
            translation: 'Declaration of Love"s special Excellence',
            transliteration: "Kaadharsirappuraiththal",
            index: 113,
            start: 1121,
            end: 1130,
          },
          {
            name: "நாணுத் துறவுரைத்தல்",
            translation: "The Abandonment of Reserve",
            transliteration: "Naanuththuravuraiththal",
            index: 114,
            start: 1131,
            end: 1140,
          },
          {
            name: "அலர் அறிவுறுத்தல்",
            translation: "The Announcement of the Rumour",
            transliteration: "Alararivuruththal",
            index: 115,
            start: 1141,
            end: 1150,
          },
          {
            name: "பிரிவு ஆற்றாமை",
            translation: "Separation unendurable",
            transliteration: "Pirivaatraamai",
            index: 116,
            start: 1151,
            end: 1160,
          },
        ],
      },
      {
        name: "கற்பியல்",
        translation: "The Post-marital love",
        index: 13,
        athigaram: [
          {
            name: "படர்மெலிந் திரங்கல்",
            translation: "Complainings",
            transliteration: "Patarmelindhirangal",
            index: 117,
            start: 1161,
            end: 1170,
          },
          {
            name: "கண் விதுப்பழிதல்",
            translation: "Eyes consumed with Grief",
            transliteration: "Kanvidhuppazhidhal",
            index: 118,
            start: 1171,
            end: 1180,
          },
          {
            name: "பசப்புறு பருவரல்",
            translation: "The Pallid Hue",
            transliteration: "Pasapparuparuvaral",
            index: 119,
            start: 1181,
            end: 1190,
          },
          {
            name: "தனிப்படர் மிகுதி",
            translation: "The Solitary Anguish",
            transliteration: "Thanippatarmikudhi",
            index: 120,
            start: 1191,
            end: 1200,
          },
          {
            name: "நினைந்தவர் புலம்பல்",
            translation: "Sad Memories",
            transliteration: "Ninaindhavarpulampal",
            index: 121,
            start: 1201,
            end: 1210,
          },
          {
            name: "கனவுநிலை உரைத்தல்",
            translation: "The Visions of the Night",
            transliteration: "Kanavunilaiyuraiththal",
            index: 122,
            start: 1211,
            end: 1220,
          },
          {
            name: "பொழுதுகண்டு இரங்கல்",
            translation: "Lamentations at Eventide",
            transliteration: "Pozhudhukantirangal",
            index: 123,
            start: 1221,
            end: 1230,
          },
          {
            name: "உறுப்புநலன் அழிதல்",
            translation: "Wasting Away",
            transliteration: "Uruppunalanazhidhal",
            index: 124,
            start: 1231,
            end: 1240,
          },
          {
            name: "நெஞ்சொடு கிளத்தல்",
            translation: "Soliloquy",
            transliteration: "Nenjotukilaththal",
            index: 125,
            start: 1241,
            end: 1250,
          },
          {
            name: "நிறையழிதல்",
            translation: "Reserve Overcome",
            transliteration: "Niraiyazhidhal",
            index: 126,
            start: 1251,
            end: 1260,
          },
          {
            name: "அவர்வயின் விதும்பல்",
            translation: "Mutual Desire",
            transliteration: "Avarvayinvidhumpal",
            index: 127,
            start: 1261,
            end: 1270,
          },
          {
            name: "குறிப்பறிவுறுத்தல்",
            translation: "The Reading of the Signs",
            transliteration: "Kuripparivuruththal",
            index: 128,
            start: 1271,
            end: 1280,
          },
          {
            name: "புணர்ச்சி விதும்பல்",
            translation: "Desire for Reunion",
            transliteration: "Punarchchividhumpal",
            index: 129,
            start: 1281,
            end: 1290,
          },
          {
            name: "நெஞ்சொடு புலத்தல்",
            translation: "Expostulation with Oneself",
            transliteration: "Nenjotupulaththal",
            index: 130,
            start: 1291,
            end: 1300,
          },
          {
            name: "புலவி",
            translation: "Pouting",
            transliteration: "Pulavi",
            index: 131,
            start: 1301,
            end: 1310,
          },
          {
            name: "புலவி நுணுக்கம்",
            translation: "Feigned Anger",
            transliteration: "Pulavi Nunukkam",
            index: 132,
            start: 1311,
            end: 1320,
          },
          {
            name: "ஊடலுவகை",
            translation: "The Pleasures of Temporary Variance",
            transliteration: "Ootaluvakai",
            index: 133,
            start: 1321,
            end: 1330,
          },
        ],
      },
    ],
  },
];