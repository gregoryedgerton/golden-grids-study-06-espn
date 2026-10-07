/**
 * GSPN — a fictional sports network's front page on the morning of
 * Wednesday, October 7, 2026, the fifth day of the Division Series.
 *
 * Everything stated about the games is from the public record: box scores
 * and series summaries as reported by MLB, ESPN's scoreboard data and the
 * Wikipedia articles on the 2026 postseason (see README). The network, its
 * products and its prices are invented. Photographs are Creative Commons or
 * public-domain files from Wikimedia Commons; `CREDITS` is the attribution
 * the licences require, and `captures/commons.tsv` the full record.
 */

export const DATELINE = "Wednesday, October 7, 2026";

export interface Team { abbr: string; name: string; city: string; seed: number; record: string }
export const TEAMS: Record<string, Team> = {
  MIL: { abbr: "MIL", name: "Brewers", city: "Milwaukee", seed: 1, record: "103–59" },
  LAD: { abbr: "LAD", name: "Dodgers", city: "Los Angeles", seed: 2, record: "100–62" },
  ATL: { abbr: "ATL", name: "Braves", city: "Atlanta", seed: 3, record: "94–68" },
  SD: { abbr: "SD", name: "Padres", city: "San Diego", seed: 4, record: "91–71" },
  CHC: { abbr: "CHC", name: "Cubs", city: "Chicago", seed: 5, record: "89–73" },
  PHI: { abbr: "PHI", name: "Phillies", city: "Philadelphia", seed: 6, record: "88–74" },
  TB: { abbr: "TB", name: "Rays", city: "Tampa Bay", seed: 1, record: "98–64" },
  CLE: { abbr: "CLE", name: "Guardians", city: "Cleveland", seed: 2, record: "85–77" },
  HOU: { abbr: "HOU", name: "Astros", city: "Houston", seed: 3, record: "81–81" },
  NYY: { abbr: "NYY", name: "Yankees", city: "New York", seed: 4, record: "93–68" },
  BOS: { abbr: "BOS", name: "Red Sox", city: "Boston", seed: 5, record: "87–75" },
  CWS: { abbr: "CWS", name: "White Sox", city: "Chicago", seed: 6, record: "84–78" },
};

export interface Game {
  n: number; date: string; away: string; home: string;
  awayScore?: number; homeScore?: number; note?: string; venue: string; time?: string; tv?: string; status: "final" | "live" | "next" | "if";
}
export interface Series {
  id: string; round: "ALDS" | "NLDS" | "ALWC" | "NLWC"; high: string; low: string; leader?: string; summary: string; games: Game[];
}

/** The four Division Series as they stand on the morning of October 7. */
export const DIVISION: Series[] = [
  {
    id: "mil-sd", round: "NLDS", high: "MIL", low: "SD", leader: "MIL", summary: "Brewers lead 2–0",
    games: [
      { n: 1, date: "Oct 3", away: "SD", home: "MIL", awayScore: 2, homeScore: 3, venue: "American Family Field", status: "final" },
      { n: 2, date: "Oct 4", away: "SD", home: "MIL", awayScore: 3, homeScore: 4, venue: "American Family Field", status: "final" },
      { n: 3, date: "Oct 6", away: "MIL", home: "SD", venue: "Petco Park", time: "9:30 p.m. ET", tv: "FS1", status: "live" },
      { n: 4, date: "Oct 7", away: "MIL", home: "SD", venue: "Petco Park", time: "10 p.m. ET", tv: "FS1", status: "if" },
      { n: 5, date: "Oct 9", away: "SD", home: "MIL", venue: "American Family Field", status: "if" },
    ],
  },
  {
    id: "lad-atl", round: "NLDS", high: "LAD", low: "ATL", leader: "LAD", summary: "Dodgers lead 2–1",
    games: [
      { n: 1, date: "Oct 3", away: "ATL", home: "LAD", awayScore: 3, homeScore: 5, venue: "Dodger Stadium", status: "final" },
      { n: 2, date: "Oct 4", away: "ATL", home: "LAD", awayScore: 3, homeScore: 2, venue: "Dodger Stadium", status: "final" },
      { n: 3, date: "Oct 6", away: "LAD", home: "ATL", awayScore: 3, homeScore: 1, venue: "Truist Park", status: "final" },
      { n: 4, date: "Oct 7", away: "LAD", home: "ATL", venue: "Truist Park", time: "6 p.m. ET", tv: "FS1", status: "next" },
      { n: 5, date: "Oct 9", away: "ATL", home: "LAD", venue: "Dodger Stadium", status: "if" },
    ],
  },
  {
    id: "tb-nyy", round: "ALDS", high: "TB", low: "NYY", leader: "TB", summary: "Rays lead 2–0",
    games: [
      { n: 1, date: "Oct 3", away: "NYY", home: "TB", awayScore: 0, homeScore: 1, venue: "Tropicana Field", status: "final" },
      { n: 2, date: "Oct 5", away: "NYY", home: "TB", awayScore: 2, homeScore: 5, venue: "Tropicana Field", status: "final" },
      { n: 3, date: "Oct 7", away: "TB", home: "NYY", venue: "Yankee Stadium", time: "8 p.m. ET", tv: "TBS", status: "next" },
      { n: 4, date: "Oct 8", away: "TB", home: "NYY", venue: "Yankee Stadium", status: "if" },
      { n: 5, date: "Oct 10", away: "NYY", home: "TB", venue: "Tropicana Field", status: "if" },
    ],
  },
  {
    id: "cle-cws", round: "ALDS", high: "CLE", low: "CWS", leader: "CWS", summary: "White Sox lead 2–0",
    games: [
      { n: 1, date: "Oct 3", away: "CWS", home: "CLE", awayScore: 3, homeScore: 0, venue: "Progressive Field", status: "final" },
      { n: 2, date: "Oct 5", away: "CWS", home: "CLE", awayScore: 4, homeScore: 3, venue: "Progressive Field", status: "final" },
      { n: 3, date: "Oct 7", away: "CLE", home: "CWS", venue: "Rate Field", time: "4 p.m. ET", tv: "TBS", status: "next" },
      { n: 4, date: "Oct 8", away: "CLE", home: "CWS", venue: "Rate Field", status: "if" },
      { n: 5, date: "Oct 10", away: "CWS", home: "CLE", venue: "Progressive Field", status: "if" },
    ],
  },
];

/** The Wild Card round, September 29 – October 1. */
export const WILDCARD: Series[] = [
  { id: "nyy-bos", round: "ALWC", high: "NYY", low: "BOS", leader: "NYY", summary: "Yankees win 2–0", games: [
    { n: 1, date: "Sep 29", away: "BOS", home: "NYY", awayScore: 0, homeScore: 9, venue: "Yankee Stadium", status: "final" },
    { n: 2, date: "Sep 30", away: "BOS", home: "NYY", awayScore: 2, homeScore: 9, venue: "Yankee Stadium", status: "final" },
  ] },
  { id: "hou-cws", round: "ALWC", high: "HOU", low: "CWS", leader: "CWS", summary: "White Sox win 2–0", games: [
    { n: 1, date: "Sep 29", away: "CWS", home: "HOU", awayScore: 6, homeScore: 3, venue: "Daikin Park", status: "final" },
    { n: 2, date: "Sep 30", away: "CWS", home: "HOU", awayScore: 7, homeScore: 3, venue: "Daikin Park", status: "final" },
  ] },
  { id: "atl-phi", round: "NLWC", high: "ATL", low: "PHI", leader: "ATL", summary: "Braves win 2–1", games: [
    { n: 1, date: "Sep 29", away: "PHI", home: "ATL", awayScore: 3, homeScore: 5, venue: "Truist Park", status: "final" },
    { n: 2, date: "Sep 30", away: "PHI", home: "ATL", awayScore: 4, homeScore: 3, note: "10 innings", venue: "Truist Park", status: "final" },
    { n: 3, date: "Oct 1", away: "PHI", home: "ATL", awayScore: 2, homeScore: 6, venue: "Truist Park", status: "final" },
  ] },
  { id: "sd-chc", round: "NLWC", high: "SD", low: "CHC", leader: "SD", summary: "Padres win 2–0", games: [
    { n: 1, date: "Sep 29", away: "CHC", home: "SD", awayScore: 0, homeScore: 8, venue: "Petco Park", status: "final" },
    { n: 2, date: "Sep 30", away: "CHC", home: "SD", awayScore: 1, homeScore: 4, venue: "Petco Park", status: "final" },
  ] },
];

/** A photograph from Wikimedia Commons, with the attribution its licence asks for. */
export interface Photo { src: string; alt: string; credit: string; licence: string; page: string; position?: string }
const P = (file: string, alt: string, credit: string, licence: string, page: string, position?: string): Photo =>
  ({ src: `${import.meta.env.BASE_URL}assets/s06-${file}.jpg`, alt, credit, licence, page, position });

export const PHOTOS = {
  chourioWide: P("chourio-wide", "Jackson Chourio of the Brewers in the outfield, in a road grey Milwaukee uniform", "Sewageboy", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Chourio_3_61824.jpg", "50% 30%"),
  chourio: P("chourio", "Jackson Chourio looking in from the outfield", "Sewageboy", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Chourio_2_61824_(cropped).jpg", "50% 20%"),
  yelich: P("yelich", "Christian Yelich of the Brewers", "Sewageboy", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Yelich_4_61824_(cropped).jpg", "50% 15%"),
  contreras: P("contreras", "William Contreras of the Brewers at bat", "Sewageboy", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:William_Contreras_1_61824.jpg"),
  megill: P("megill", "Trevor Megill, the Brewers' closer, on the mound", "IanStone20165", "CC0", "https://commons.wikimedia.org/wiki/File:Trevor_Megill.jpg", "50% 30%"),
  petco: P("petco", "Petco Park at night during a Padres game", "Mds08011", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Padres_at_Petco_Park.jpg"),
  tatis: P("tatis", "Fernando Tatis Jr. of the Padres", "Ryan Casey Aguinaldo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Fernando_Tatis_Jr._6.19.21_Cropped.jpg", "50% 20%"),
  machado: P("machado", "Manny Machado of the Padres in the on-deck circle", "Ryan Casey Aguinaldo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Manny_Machado_8.27.21_(cropped).jpg", "50% 20%"),
  merrill: P("merrill", "Jackson Merrill of the Padres", "False casey", "CC0", "https://commons.wikimedia.org/wiki/File:Jackson_Merrill_6.24.2024.jpg", "50% 15%"),
  miller: P("miller", "Mason Miller pitching for the Padres, August 2026", "False casey", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Mason_Miller_Pitching_8.22.26.jpg", "50% 20%"),
  yamamoto: P("yamamoto", "Yoshinobu Yamamoto of the Dodgers", "All-Pro Reels", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Yoshinobu_Yamamoto_in_2024_(53676737736)_(cropped).jpg", "50% 15%"),
  muncy: P("muncy", "Max Muncy of the Dodgers at bat", "David, Washington, DC", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Max_Muncy_(53678559115)_(cropped).jpg", "50% 20%"),
  freeman: P("freeman", "Freddie Freeman of the Dodgers at bat", "All-Pro Reels", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Freddie_Freeman_-_Dodgers_vs_Nationals_4-23-2024.jpg", "50% 15%"),
  teoscar: P("teoscar", "Teoscar Hernández of the Dodgers", "David, Washington, DC", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Teoscar_Hernández_(53680486178)_(cropped).jpg", "50% 15%"),
  dodgerStadium: P("dodger-stadium", "Dodger Stadium under the lights, September 2024", "Sammythecat7", "CC0", "https://commons.wikimedia.org/wiki/File:Dodger_Stadium_-_September_11,_2024.jpg"),
  dodgerRing: P("dodger-ring", "The Dodgers' 2024 World Series ring shown on the Dodger Stadium scoreboard", "Spatms", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:2024_Dodgers_World_Series_Championship_Ring_on_the_Dodger_Stadium_Scoreboard,_Chicago_Cubs_at_Los_Angeles_Dodgers,_(April_12,_2025).jpg"),
  harris: P("harris", "Michael Harris II of the Braves taking batting practice", "D. Benjamin Miller", "CC0", "https://commons.wikimedia.org/wiki/File:Michael_Harris_II_takes_batting_practice,_Aug_05_2022_4_(cropped).jpg", "50% 20%"),
  riley: P("riley", "Austin Riley of the Braves watching a pitch", "D. Benjamin Miller", "CC0", "https://commons.wikimedia.org/wiki/File:Austin_Riley_watches_a_pitch,_Aug_06_2022.jpg"),
  acuna: P("acuna", "Ronald Acuña Jr. of the Braves", "Ian D'Andrea", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Ronald_Acuna_Jr._(48396603396)_(cropped).jpg", "50% 15%"),
  olson: P("olson", "Matt Olson of the Braves at first base", "D. Benjamin Miller", "CC0", "https://commons.wikimedia.org/wiki/File:Matt_Olson_at_first_base,_Aug_05_2022_(cropped).jpg", "50% 20%"),
  albies: P("albies", "Ozzie Albies of the Braves after batting practice", "Kamen Guentchev", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Ozzie_Albies_after_batting_practice_at_Coors_Field.jpg", "50% 20%"),
  truist: P("truist", "Truist Park from behind home plate", "Thomson200", "CC0", "https://commons.wikimedia.org/wiki/File:SunTrust_Park_view_behind_home_plate,_May_2017.jpg"),
  rasmussen: P("rasmussen", "Drew Rasmussen pitching for the Rays, 2026", "Raysfanjake1984", "CC0", "https://commons.wikimedia.org/wiki/File:DrewRasmussen2026.jpg", "50% 25%"),
  aranda: P("aranda", "Jonathan Aranda of the Rays", "Erik Drost", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Jonathan_Aranda_(55242598870)_(cropped).jpg", "50% 20%"),
  tropicana: P("tropicana", "Tropicana Field during a postseason game", "Yamasztuka", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tropicana_Field_ALWC_Game_2_2023.jpg"),
  rice: P("rice", "Ben Rice of the Yankees at bat, September 2026", "J. Passepartout", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Ben_Rice_yankee_game.jpg"),
  cole: P("cole", "Gerrit Cole of the Yankees", "Jeffrey Hyde", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Gerrit_Cole_(53947688783)_(cropped).jpg", "50% 20%"),
  judge: P("judge", "Aaron Judge of the Yankees", "Jeffrey Hyde", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Aaron_Judge_(53947419176)_(cropped).jpg", "50% 15%"),
  kwan: P("kwan", "Steven Kwan of the Guardians", "Erik Drost", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Steven_Kwan_(52103124981)_(cropped).jpg", "50% 15%"),
  ramirez: P("ramirez", "José Ramírez of the Guardians", "Erik Drost", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Jose_Ramirez_(52968360805)_(cropped).jpg", "50% 15%"),
  progressive: P("progressive", "Progressive Field, Cleveland, during a game in August 2026", "Deans Charbal", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:New_York_Mets_at_Cleveland_Guardians_(August_6,_2026),_Progressive_Field,_Cleveland,_Ohio_09.jpg"),
} satisfies Record<string, Photo>;

export const CREDITS: Photo[] = Object.values(PHOTOS);

/** Video from Wikimedia Commons. The clips are ten silent seconds cut from each file. */
export interface Video { key: string; title: string; who: string; licence: string; page: string; alt: string; full: string }
export const VIDEOS: Video[] = [
  { key: "bazzana-swing", title: "Bazzana's grand slam", who: "Erik Drost, 2024", licence: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Travis_Bazzana_Grand_Slam_Home_Run_(53896845773).webm", alt: "Travis Bazzana, the Guardians' first overall pick of 2024, hits a grand slam for Lake County", full: "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/Travis_Bazzana_Grand_Slam_Home_Run_%2853896845773%29.webm/Travis_Bazzana_Grand_Slam_Home_Run_%2853896845773%29.webm.360p.mpeg4.mov" },
  { key: "bazzana-plate", title: "Met at the plate", who: "Erik Drost, 2024", licence: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Travis_Bazzana_Grand_Slam_Home_Run_(53896845773).webm", alt: "Bazzana's teammates meet him at home plate after the grand slam", full: "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/Travis_Bazzana_Grand_Slam_Home_Run_%2853896845773%29.webm/Travis_Bazzana_Grand_Slam_Home_Run_%2853896845773%29.webm.360p.mpeg4.mov" },
  { key: "grove-bullpen", title: "Warming up at Dodger Stadium", who: "Benoît Prieur, 2023", licence: "CC0", page: "https://commons.wikimedia.org/wiki/File:VIDEO_Toronto_Blue_Jays_at_Los_Angeles_Dodgers_(July_24,_2023)_-_warming-up_Michael_Grove.webm", alt: "A Dodgers pitcher warming up in the bullpen at Dodger Stadium before a game", full: "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cf/VIDEO_Toronto_Blue_Jays_at_Los_Angeles_Dodgers_%28July_24%2C_2023%29_-_warming-up_Michael_Grove.webm/VIDEO_Toronto_Blue_Jays_at_Los_Angeles_Dodgers_%28July_24%2C_2023%29_-_warming-up_Michael_Grove.webm.360p.mpeg4.mov" },
];

/** Headlines, each with the paragraph behind it. */
export interface Story { id: string; kicker: string; head: string; short: string; dek: string; body: string[] }
export const HEADLINES: Story[] = [
  {
    id: "yamamoto", kicker: "NLDS Game 3", short: "Yamamoto:\n10 K", head: "Yamamoto strikes out ten as Dodgers take 2–1 lead in Atlanta",
    dek: "Seven innings, four hits, one run; Edwin Díaz closed the 3–1 win at Truist Park.",
    body: [
      "Yoshinobu Yamamoto pitched seven innings for the Dodgers in Game 3 on Tuesday, allowing four hits and one run while striking out ten, and Los Angeles beat Atlanta 3–1 to lead the series two games to one. All three Dodgers runs came in the fourth inning against Chris Sale, who went five innings and allowed seven hits. Edwin Díaz pitched the ninth for the save.",
      "Game 4 is Wednesday at 6 p.m. ET at Truist Park. A Dodgers win sends the two-time defending champions to the NLCS for the fourth time in six years; a Braves win sends the series back to Dodger Stadium for Game 5 on Friday.",
    ],
  },
  {
    id: "rays-one-hit", kicker: "ALDS Game 1", short: "One-hitter", head: "Rays one-hit the Yankees; Rasmussen carries no-hitter into the eighth",
    dek: "Jonathan Aranda's third-inning home run off Gerrit Cole was the only run of the game.",
    body: [
      "Drew Rasmussen held the Yankees without a hit for seven and two-thirds innings in Game 1 at Tropicana Field on Saturday, until Austin Wells doubled with two outs in the eighth and was thrown out trying to stretch it to a triple. Rasmussen finished eight scoreless innings with ten strikeouts on 101 pitches, and Bryan Baker pitched the ninth for the save in a 1–0 Rays win.",
      "Jonathan Aranda's solo home run off Gerrit Cole in the third was the game's only run. Cole went five innings and allowed five hits. It was the first time in the franchise's history that the Yankees had one hit or fewer in a postseason game.",
    ],
  },
  {
    id: "white-sox", kicker: "ALDS", short: "Sox up 2–0", head: "White Sox take 2–0 series lead to Chicago, where they have not hosted a playoff game since 2021",
    dek: "Grant Taylor struck out the final four batters of Game 1 and saved Game 2.",
    body: [
      "The White Sox won Games 1 and 2 at Progressive Field, 3–0 on Saturday and 4–3 on Monday. In the opener Munetaka Murakami hit a two-run home run in the fourth and Colson Montgomery added an RBI double in the seventh; Grant Taylor struck out the final four batters. It was Chicago's first postseason shutout since Game 4 of the 2005 World Series.",
      "In Game 2 Cleveland scored twice in the first on a throwing error, and Gavin Williams struck out eleven in five innings, but Braden Montgomery's two-run double and Chase Meidroth's RBI single in the sixth put Chicago ahead 4–2. Jo Adell's RBI triple in the eighth brought the Guardians within a run; Sean Burke pitched five and a third innings of one-hit relief for the win, and Taylor earned the save.",
      "Game 3 is Wednesday at 4 p.m. ET at Rate Field. The White Sox, who swept Houston in the Wild Card round for their first series win since 2005, have never before met Cleveland in the postseason.",
    ],
  },
  {
    id: "yankees-errors", kicker: "ALDS Game 2", short: "Four errors", head: "Four Yankees errors in a 5–2 loss; Ben Rice homers twice",
    dek: "New York goes home down 0–2 for Game 3 at Yankee Stadium on Wednesday night.",
    body: [
      "The Yankees committed three errors in the first inning of Game 2 on Monday, and a fourth later, in a 5–2 loss at Tropicana Field. A Ryan McMahon error and a Jazz Chisholm Jr. throw let Yandy Díaz score the game's first run; Ben Rice tied it with a solo home run in the fourth, and hit a second in the eighth.",
      "Tampa Bay scored four in the fifth, chasing Cam Schlittler after four and a third innings in which he allowed seven hits and four runs, two of them earned. Richie Palacios's two-run single made it 5–1. Cam Booser was credited with the win on eight pitches and Bryan Baker saved his second game of the series.",
      "Game 3 is Wednesday at 8 p.m. ET at Yankee Stadium. The Rays won the only previous postseason meeting between the clubs, the 2020 ALDS, in five games.",
    ],
  },
  {
    id: "braves-elimination", kicker: "NLDS Game 4", short: "Braves\nmust win", head: "Braves face elimination at home after Sale is outpitched",
    dek: "Atlanta is 1–3 at home against Los Angeles in the postseason since 2018.",
    body: [
      "Atlanta's lone run in Game 3 came in the fifth inning; the Braves managed five hits and committed two errors. Chris Sale, who had pitched six and a third innings with nine strikeouts against the Phillies in the Wild Card round and closed out that series in relief, allowed three runs in the fourth and was lifted after five.",
      "The Braves won Game 2 in Los Angeles 3–2 on Sunday, when Michael Harris II tripled and scored on a wild pitch in the fifth and doubled home Matt Olson in the seventh, and Raisel Iglesias recorded the last out with the tying run at the plate after Max Muncy's ninth-inning home run. This is the sixth postseason meeting between the clubs; the Braves won the most recent, the 2021 NLCS.",
    ],
  },
  {
    id: "dodgers-streak", kicker: "Division Series", short: "14", head: "Dodgers, in a 14th straight postseason, chase a third consecutive title",
    dek: "The streak ties the Braves' record run of 1991–2005.",
    body: [
      "Los Angeles clinched its fourteenth consecutive postseason berth on September 14, tying the record set by Atlanta from 1991 to 2005 (no postseason was played in 1994). The Dodgers won a fifth straight NL West title and their thirteenth in fourteen years, finished 100–62, and took the second seed and a first-round bye.",
      "Their Game 1 win over the Braves on Saturday was played in 100°F heat at Dodger Stadium, the second-hottest postseason game on record after Game 1 of the 2017 World Series. Teoscar Hernández and Kyle Tucker hit two-run home runs and Max Muncy a solo shot, his seventeenth postseason home run, extending his franchise record.",
    ],
  },
];

/** A fact that fits a square: a label, a fitted line, body copy, and a longer passage behind More. */
export interface Fact { label: string; line: string; fitClass?: string; body?: string; source?: string; long?: string }

/** The lead: Brewers at Padres, Game 3, as it stands. */
export const LEAD: { kicker: string; head: string; dek: string; facts: Fact[] } = {
  kicker: "NLDS Game 3 · Petco Park",
  head: "Brewers at Padres, Game 3",
  dek: "Milwaukee, 2–0 up after two one-run wins at home, sent Dustin May to the mound against Nick Pivetta in San Diego on Tuesday night.",
  facts: [
    { label: "Miller, Game 2 ninth", line: "40", fitClass: "fit--num", body: "Mason Miller struck out two in the eighth and retired the first batter of the ninth, then walked Yelich, Frelick and Sánchez — his first career postseason walks — before Jackson Chourio's two-run single ended it, 4–3. Forty pitches was his most since 2023." },
    { label: "Game 1, ninth inning", line: "105 mph\n49°", fitClass: "fit--num", body: "Ty France's fly ball with the Padres down a run struck the roof of American Family Field and came down to Jackson Chourio for an out. Batted balls at that exit velocity and launch angle have never been home runs; the Brewers won 3–2 on William Contreras's seventh-inning home run." },
    { label: "First meeting", line: "1969", fitClass: "fit--num", body: "The Brewers and Padres both entered the National League in the 1969 expansion, and neither has won a World Series. This is their first postseason series. San Diego won the season series 4–2." },
    { label: "Game 3 starters", line: "May\nvs. Pivetta", fitClass: "fit--num", body: "Dustin May for Milwaukee, Nick Pivetta for San Diego. Pivetta pitched three and a third innings of one-run ball in the Wild Card clincher against the Cubs." },
  ],
};

/** Division Series story bands: one per series, with the facts that fit a square. */

export const SERIES_STORIES: Record<string, { title: string; standfirst: string; facts: Fact[] }> = {
  "tb-nyy": {
    title: "Rays 2, Yankees 0",
    standfirst: "Tampa Bay, back at Tropicana Field after the roof damage of 2024, won the opener 1–0 on a one-hitter and the second 5–2 on New York's errors. The series moves to the Bronx for Game 3 on Wednesday at 8 p.m. ET.",
    facts: [
      { label: "Game 1", line: "1–0", fitClass: "fit--num", body: "Aranda's third-inning home run off Cole. Rasmussen 8 IP, 1 H, 10 K; Baker the save.", long: "Rasmussen carried a no-hitter into the eighth, lost it to an Austin Wells double, and finished eight scoreless innings on 101 pitches. The Yankees had never before had one hit or fewer in a postseason game." },
      { label: "Game 2", line: "5–2", fitClass: "fit--num", body: "Four Yankees errors. Rice two solo home runs; Palacios a two-run single in the fifth.", long: "Three of the errors came in the first inning, along with a catcher's interference. Schlittler was charged with four runs, two earned, in four and a third innings." },
      { label: "Rays, 2026", line: "98–64", fitClass: "fit--num", body: "AL East champions, the league's best record, and home field through the ALCS." },
      { label: "Season series", line: "7–6\nRays", fitClass: "fit--num", body: "Thirteen games between the division rivals; three runs separated them in total." },
    ],
  },
  "cle-cws": {
    title: "White Sox 2, Guardians 0",
    standfirst: "Chicago, the sixth seed, won twice in Cleveland and goes home needing one more. Cleveland overtook the White Sox for the Central title in the last ten days of the season; Chicago won the season series 7–6.",
    facts: [
      { label: "Game 1", line: "3–0", fitClass: "fit--num", body: "Murakami's two-run home run in the fourth; Montgomery's RBI double in the seventh. Taylor struck out the last four.", long: "Chicago's first postseason shutout since Game 4 of the 2005 World Series, which was also the last time the franchise won a postseason series before this month." },
      { label: "Game 2", line: "4–3", fitClass: "fit--num", body: "Down 2–0 after a first-inning throwing error, Chicago scored three in the sixth. Burke 5⅓ IP in relief for the win.", long: "Gavin Williams struck out eleven in five innings for Cleveland. Jo Adell's eighth-inning triple brought the Guardians within a run before Grant Taylor closed it." },
      { label: "Williams, Game 2", line: "11 K", fitClass: "fit--num", body: "In five innings, on a night Cleveland lost by one." },
      { label: "Since", line: "2005", fitClass: "fit--num", body: "The White Sox had not won a postseason series since the 2005 World Series until they swept Houston last week." },
    ],
  },
  "lad-atl": {
    title: "Dodgers 2, Braves 1",
    standfirst: "Los Angeles won Game 1 in 100°F heat and Game 3 behind Yamamoto; Atlanta took Game 2 on Harris's triple and double. Game 4 is Wednesday at 6 p.m. ET at Truist Park.",
    facts: [
      { label: "Game 1", line: "5–3", fitClass: "fit--num", body: "Home runs by Teoscar Hernández, Kyle Tucker and Max Muncy; Sean Murphy and Ozzie Albies for Atlanta.", long: "At 100°F it was the second-hottest postseason game on record. Muncy's home run was his seventeenth in the postseason, a franchise record." },
      { label: "Game 2", line: "3–2", fitClass: "fit--num", body: "Harris tripled and scored on a wild pitch, then doubled home Olson. Freeman and Muncy homered for Los Angeles.", long: "Blake Snell walked five in three and two-thirds innings. Raisel Iglesias got the last out after Muncy's ninth-inning home run." },
      { label: "Game 3", line: "3–1", fitClass: "fit--num", body: "Yamamoto 7 IP, 4 H, 1 R, 10 K. Three Dodgers runs in the fourth off Sale; Díaz the save." },
      { label: "Muncy", line: "17", fitClass: "fit--num", body: "Postseason home runs, the most in Dodgers history, after two in this series." },
      { label: "Game 1", line: "100°F", fitClass: "fit--num", body: "Second-hottest postseason game on record, after Game 1 of the 2017 World Series at the same park." },
    ],
  },
};

/** The Wild Card round in six squares. */
export const WILDCARD_FACTS: Fact[] = [
  { label: "Yankees over Red Sox", line: "18–2", fitClass: "fit--num", body: "Two games, 9–0 and 9–2: the largest run differential over a two-game postseason span. Schlittler 6⅓ scoreless innings; Rice six RBIs and a grand slam in Game 1.", long: "The first sweep in the rivalry's seven postseason meetings. Max Fried allowed one run in six innings in Game 2, and a six-run sixth against Garrett Crochet, in his first appearance since April, decided it." },
  { label: "White Sox over Astros", line: "2005", fitClass: "fit--num", body: "Chicago's first postseason series win since the 2005 World Series, which was also a sweep of Houston. The Astros have lost nine straight home postseason games.", long: "Houston, at 81–81, was the first team to win a division without a winning record. Jose Altuve hit his twenty-eighth postseason home run in Game 2." },
  { label: "Phillies", line: "Sept. 27", body: "Clinched the last NL wild card on the final day after holding a far larger lead in August." },
  { label: "Padres over Cubs", line: "8–0", fitClass: "fit--num", body: "Michael King carried a no-hitter into the seventh in Game 1, the largest shutout win in Padres postseason history. Sheets's two-run home run settled Game 2, 4–1.", long: "Tatis and Machado homered in the first inning of Game 1. Joe Musgrove pitched the ninth in his first appearance since elbow surgery in 2024." },
  { label: "Braves over Phillies", line: "2–1", fitClass: "fit--num", body: "Riley's three-run eighth-inning home run won Game 1; Bohm's tenth-inning shot won Game 2; Harris, Albies and Olson homered in a 6–2 Game 3.", long: "Atlanta's first series win over Philadelphia in four postseason meetings and its first series win since the 2021 World Series. Game 2 ended on the first automated-strike-zone challenge to end a postseason game." },
  { label: "Astros, 2026", line: ".500", fitClass: "fit--num", body: "81–81 and AL West champions: the first division winner without a winning record." },
];

/** The postseason in numbers. */
export const NUMBERS: Fact[] = [
  { label: "Brewers", line: "103", fitClass: "fit--num", body: "Wins, the most in baseball; home field through the World Series. Milwaukee shut out Cincinnati 20–0 on the night it clinched a berth." },
  { label: "Dodgers", line: "14", fitClass: "fit--num", body: "Consecutive postseasons, tying Atlanta's 1991–2005 record." },
  { label: "World Series", line: "Oct. 23", body: "Game 1. A seventh game, if needed, is October 31." },
  { label: "Sweeps", line: "3 of 4", fitClass: "fit--num", body: "Wild Card series decided in two games. Only Braves–Phillies went three." },
  { label: "100-win teams", line: "2", fitClass: "fit--num", body: "Milwaukee and Los Angeles, the first since 2023." },
  { label: "AL over .500", line: "5", fitClass: "fit--num", body: "Teams in the American League with a winning record. Two won 90." },
  { label: "LCS", line: "Oct. 11", body: "The NLCS opens Sunday; the ALCS on Monday the 12th." },
];

export const TRENDING = [
  "Brewers–Padres Game 3 at Petco Park",
  "Yamamoto's ten strikeouts in Atlanta",
  "Rasmussen's near no-hitter",
  "Rays–Yankees Game 3, Wednesday 8 p.m. ET",
  "White Sox go home up 2–0",
  "Mason Miller's 40-pitch ninth",
];

export const NETWORK = {
  name: "GSPN",
  tagline: "The worldwide leader in nothing in particular: a fictional network built for a layout study.",
  plus: { name: "GSPN+", price: "$11.99", period: "a month", pitch: "Every out-of-market Division Series game, the whiparound show between them, and the full archive of this postseason's condensed games.", bullets: ["Live and on demand", "Four screens at once", "Cancel any time"] },
  fantasy: { name: "GSPN Fantasy", pitch: "Postseason pick'em: choose a winner for every series and a player for every game. Standings reset each round.", cta: "Make your picks" },
  app: { pitch: "Scores in the notification shade, the scoreboard in a widget, and alerts when a game is in its final inning.", cta: "Get the app" },
  newsletter: { pitch: "One email a morning through the end of the World Series: last night's scores, today's starters, the one fact worth repeating.", cta: "Sign up" },
};
