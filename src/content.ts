/**
 * GIFspn — a fictional sports network's front page on the morning of
 * Friday, October 9, 2026: three Division Series decided, one going to a
 * fifth game.
 *
 * Everything stated about the games is from the public record: box scores
 * and series summaries as reported by MLB, ESPN's scoreboard data and the
 * Wikipedia articles on the 2026 postseason (see README). The network, its
 * products and its prices are invented. Photographs are Creative Commons or
 * public-domain files from Wikimedia Commons; `CREDITS` is the attribution
 * the licences require, and `captures/commons.tsv` the full record.
 */

export const DATELINE = "Friday, October 9, 2026";

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

/** The four Division Series as they stand on the morning of October 9. */
export const DIVISION: Series[] = [
  {
    id: "mil-sd", round: "NLDS", high: "MIL", low: "SD", leader: "MIL", summary: "Brewers win 3–1",
    games: [
      { n: 1, date: "Oct 3", away: "SD", home: "MIL", awayScore: 2, homeScore: 3, venue: "American Family Field", status: "final" },
      { n: 2, date: "Oct 4", away: "SD", home: "MIL", awayScore: 3, homeScore: 4, venue: "American Family Field", status: "final" },
      { n: 3, date: "Oct 6", away: "MIL", home: "SD", awayScore: 3, homeScore: 4, venue: "Petco Park", status: "final" },
      { n: 4, date: "Oct 7", away: "MIL", home: "SD", awayScore: 3, homeScore: 1, venue: "Petco Park", status: "final" },
    ],
  },
  {
    id: "lad-atl", round: "NLDS", high: "LAD", low: "ATL", leader: "LAD", summary: "Dodgers win 3–1",
    games: [
      { n: 1, date: "Oct 3", away: "ATL", home: "LAD", awayScore: 3, homeScore: 5, venue: "Dodger Stadium", status: "final" },
      { n: 2, date: "Oct 4", away: "ATL", home: "LAD", awayScore: 3, homeScore: 2, venue: "Dodger Stadium", status: "final" },
      { n: 3, date: "Oct 6", away: "LAD", home: "ATL", awayScore: 3, homeScore: 1, venue: "Truist Park", status: "final" },
      { n: 4, date: "Oct 7", away: "LAD", home: "ATL", awayScore: 4, homeScore: 1, venue: "Truist Park", status: "final" },
    ],
  },
  {
    id: "tb-nyy", round: "ALDS", high: "TB", low: "NYY", leader: "TB", summary: "Rays win 3–0",
    games: [
      { n: 1, date: "Oct 3", away: "NYY", home: "TB", awayScore: 0, homeScore: 1, venue: "Tropicana Field", status: "final" },
      { n: 2, date: "Oct 5", away: "NYY", home: "TB", awayScore: 2, homeScore: 5, venue: "Tropicana Field", status: "final" },
      { n: 3, date: "Oct 7", away: "TB", home: "NYY", awayScore: 4, homeScore: 3, venue: "Yankee Stadium", status: "final" },
    ],
  },
  {
    id: "cle-cws", round: "ALDS", high: "CLE", low: "CWS", summary: "Series tied 2–2",
    games: [
      { n: 1, date: "Oct 3", away: "CWS", home: "CLE", awayScore: 3, homeScore: 0, venue: "Progressive Field", status: "final" },
      { n: 2, date: "Oct 5", away: "CWS", home: "CLE", awayScore: 4, homeScore: 3, venue: "Progressive Field", status: "final" },
      { n: 3, date: "Oct 7", away: "CLE", home: "CWS", awayScore: 9, homeScore: 3, venue: "Rate Field", status: "final" },
      { n: 4, date: "Oct 8", away: "CLE", home: "CWS", awayScore: 9, homeScore: 5, venue: "Rate Field", status: "final" },
      { n: 5, date: "Oct 10", away: "CWS", home: "CLE", venue: "Progressive Field", time: "8 p.m. ET", tv: "TBS", status: "next" },
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
    id: "brewers-advance", kicker: "NLDS Game 4", short: "Brewers\n3–1", head: "Brewers eliminate Padres 3–1 and will meet the Dodgers in the NLCS",
    dek: "Garrett Mitchell tripled, scored the go-ahead run and caught Machado's 406-foot drive at the wall in the eighth.",
    body: [
      "Milwaukee won Game 4 at Petco Park on Wednesday night, 3–1, to take the Division Series in four games. Garrett Mitchell singled home Sal Frelick in the third, tripled leading off the fifth and scored on Jackson Chourio's single, and Frelick's sacrifice fly in the sixth made it 3–1. Fernando Tatis Jr.'s 429-foot home run in the third was San Diego's only run.",
      "In the eighth, Manny Machado drove a ball 406 feet to right-centre off Abner Uribe and Mitchell caught it just above the wall. Robert Gasser allowed three hits in four innings, Aaron Ashby pitched three hitless innings for the win and Trevor Megill saved it. It was the Brewers' first postseason road win since the 2018 NLCS, ending a run of twelve losses, and puts them in a League Championship Series for the fifth time.",
    ],
  },
  {
    id: "dodgers-clinch", kicker: "NLDS Game 4", short: "Dodgers\n4–1", head: "Pages's two-run single in the seventh sends the Dodgers past Atlanta",
    dek: "Los Angeles won both games at Truist Park. Max Muncy's ninth-inning home run was his nineteenth in the postseason.",
    body: [
      "Andy Pages lined a full-count pitch from Robert Suarez up the middle with the bases loaded in the seventh, scoring Teoscar Hernández and pinch-runner Tommy Edman, and the Dodgers beat the Braves 4–1 on Wednesday to win the series three games to one. Max Muncy homered off Raisel Iglesias in the ninth, extending his franchise record to nineteen postseason home runs.",
      "Tyler Glasnow allowed one hit and walked five in four and two-thirds innings; four relievers followed, and Edgardo Henriquez was credited with the win and Edwin Díaz with the save. Atlanta's run scored on a wild pitch in the first, and the Dodgers tied it in the second on two Braves errors. The Braves drew eighteen walks in the series and none of those runners scored.",
    ],
  },
  {
    id: "rays-sweep", kicker: "ALDS Game 3", short: "Rays\nsweep", head: "Rays sweep the Yankees, 4–3, on Mesa's home run and a fan-interference ruling",
    dek: "Tampa Bay reaches the ALCS for the first time since 2020. New York never led in the series.",
    body: [
      "Victor Mesa Jr. hit a two-run home run off Max Fried in the sixth inning at Yankee Stadium on Wednesday to put the Rays ahead 4–2. In the bottom half Anthony Volpe's drive to left was caught by a fan reaching over the wall; after a review it was ruled a run-scoring double rather than a two-run home run, and Griffin Jax struck out Spencer Jones to keep the lead.",
      "Ryan Vilade also homered for Tampa Bay. Ian Seymour was the winning pitcher and Bryan Baker earned his third save of the series. The Yankees, without Aaron Judge since a calf strain on September 16, were swept in a best-of-five series for the first time since the 1980 ALCS. The Rays will host Cleveland or Chicago in Game 1 of the ALCS on Monday.",
    ],
  },
  {
    id: "guardians-level", kicker: "ALDS Game 4", short: "Tied\n2–2", head: "Guardians score six in the sixth, win 9–5 and force a fifth game",
    dek: "Chicago led 2–0 and 4–3. Grant Taylor, who closed Games 1 and 2, faced six batters and retired none.",
    body: [
      "The White Sox led 2–0 after three innings at Rate Field on Thursday, on a bases-loaded walk to Munetaka Murakami and a sacrifice fly, and 4–3 after five. Patrick Bailey and José Ramírez homered in the fifth for Cleveland, Ramírez's a two-run shot. In the sixth the Guardians scored six: Travis Bazzana doubled home the tying run, Bailey singled him in, and Ramírez, Chase DeLauter and Jo Adell followed with run-scoring singles.",
      "Grant Taylor was charged with four runs on four hits and two walks without recording an out. Erik Sabrowski was the winning pitcher and Anthony Kay took the loss; Miguel Vargas homered for Chicago in the ninth. Game 5 is Saturday at 8 p.m. ET at Progressive Field.",
    ],
  },
  {
    id: "guardians-triples", kicker: "ALDS Game 3", short: "Two\ntriples", head: "Adell and Ramírez triple as Cleveland avoids a sweep, 9–3",
    dek: "Two triples in a postseason game is a first for the franchise. Foster Griffin struck out seven in relief.",
    body: [
      "Facing elimination on Wednesday, Cleveland took a 4–1 lead in the third inning on Jo Adell's three-run triple with two out, and José Ramírez's two-run triple in the eighth made it 7–3. The Guardians had eleven hits after managing seven in the first two games together.",
      "Foster Griffin struck out seven in two and two-thirds innings, a franchise postseason record for a reliever, and Chicago's hitters struck out nineteen times in all. A crowd of 40,590 saw the White Sox's first home playoff game since 2021.",
    ],
  },
  {
    id: "nlcs-rematch", kicker: "NLCS", short: "Sunday", head: "Brewers and Dodgers meet again; Game 1 is Sunday in Milwaukee",
    dek: "Los Angeles swept Milwaukee in last year's NLCS. The Brewers won 103 games and have home field.",
    body: [
      "The National League Championship Series opens Sunday at 8 p.m. ET at American Family Field, with Game 2 on Monday afternoon. It is a rematch of last October's series, which the Dodgers swept on the way to a second straight title; they are trying to become the first National League club to win three in a row.",
      "The American League series begins Monday at Tropicana Field, where the Rays will host the winner of Saturday's fifth game between Cleveland and Chicago.",
    ],
  },
];

/** A fact that fits a square: a label, a fitted line, body copy, and a longer passage behind More. */
export interface Fact { label: string; line: string; fitClass?: string; body?: string; source?: string; long?: string }

/** The lead: Brewers at Padres, Game 3, as it stands. */
export const LEAD: { kicker: string; head: string; dek: string; facts: Fact[] } = {
  kicker: "NLDS Game 4 · Petco Park",
  head: "Brewers finish the Padres, 3–1; Mitchell's catch at the wall saves the eighth",
  dek: "Milwaukee won its first postseason road game since 2018 in front of 47,712 and took the series three games to one. Four games were decided by five runs in total. The Brewers host the Dodgers in Game 1 of the NLCS on Sunday.",
  facts: [
    { label: "Chourio, RBI", line: "17", fitClass: "fit--num", body: "Jackson Chourio's fifth-inning single scored Garrett Mitchell with the go-ahead run and passed Ryan Braun for the most postseason runs batted in by a Brewer. He is 22 and has played sixteen playoff games; six of the seventeen came in this series." },
    { label: "Machado, eighth inning", line: "406 ft", fitClass: "fit--num", body: "Manny Machado's drive off Abner Uribe would have tied the game. Mitchell tracked it to the short wall in right-centre and reached just above it for the out; Brice Turang ended the inning by catching Ty France's pop-up in foul ground." },
    { label: "Road skid ended", line: "12", fitClass: "fit--num", body: "Milwaukee had lost twelve straight postseason road games since the 2018 NLCS. This is the club's fifth League Championship Series and its second in a row." },
    { label: "Tatis, third inning", line: "429 ft", fitClass: "fit--num", body: "Fernando Tatis Jr.'s home run to centre was San Diego's only run.", long: "It ended a 1-for-19 stretch since the Padres' playoff opener. San Diego had three hits in the game; four Brewers pitchers combined on the three-hitter." },
  ],
};

/** Division Series story bands: one per series, with the facts that fit a square. */

export const SERIES_STORIES: Record<string, { title: string; standfirst: string; facts: Fact[] }> = {
  "tb-nyy": {
    title: "Rays 3, Yankees 0",
    standfirst: "Tampa Bay swept: a one-hitter, a game decided by New York's errors, and a 4–3 win in the Bronx on Wednesday. The Yankees never led. The Rays are in the ALCS for the first time since 2020 and open it at home on Monday.",
    facts: [
      { label: "Game 3", line: "4–3", fitClass: "fit--num", body: "Mesa's two-run home run off Fried in the sixth. Vilade also homered; Baker saved his third game of the series.", long: "Anthony Volpe's drive in the bottom of the sixth was caught by a fan reaching over the left-field wall and ruled a run-scoring double on review. Ian Seymour was the winning pitcher." },
      { label: "Game 1", line: "1–0", fitClass: "fit--num", body: "Aranda's third-inning home run off Cole. Rasmussen 8 IP, 1 H, 10 K.", long: "Rasmussen carried a no-hitter into the eighth, lost it to an Austin Wells double, and finished eight scoreless innings on 101 pitches. The Yankees had never before had one hit or fewer in a postseason game." },
      { label: "Rays, 2026", line: "98–64", fitClass: "fit--num", body: "AL East champions, the league's best record, and home field through the ALCS." },
      { label: "Swept in five", line: "1980", fitClass: "fit--num", body: "The last time the Yankees were swept in a best-of-five series, by Kansas City in the ALCS." },
    ],
  },
  "cle-cws": {
    title: "Guardians 2, White Sox 2",
    standfirst: "Chicago won twice in Cleveland; Cleveland won twice in Chicago, 9–3 and 9–5. The fifth game is Saturday at 8 p.m. ET at Progressive Field, and the winner goes to Tampa Bay for the ALCS.",
    facts: [
      { label: "Game 4", line: "9–5", fitClass: "fit--num", body: "Six runs in the sixth. Bailey and Ramírez homered in the fifth; Adell's two-run single finished the rally.", long: "Chicago led 2–0 and 4–3. Grant Taylor, who had closed Games 1 and 2, faced six batters and was charged with four runs without recording an out. Erik Sabrowski was the winning pitcher." },
      { label: "Game 3", line: "9–3", fitClass: "fit--num", body: "Adell's three-run triple in the third and Ramírez's two-run triple in the eighth.", long: "Two triples in a postseason game was a first for the franchise. Foster Griffin struck out seven in two and two-thirds innings of relief, and Chicago struck out nineteen times." },
      { label: "Cleveland runs, Games 3 and 4", line: "18", fitClass: "fit--num", body: "After three in the first two games together." },
      { label: "Game 5", line: "Sat.", body: "8 p.m. ET at Progressive Field, on TBS." },
    ],
  },
  "lad-atl": {
    title: "Dodgers 3, Braves 1",
    standfirst: "Los Angeles won Game 1 in 100°F heat, lost Game 2, and won twice in Atlanta, 3–1 behind Yamamoto and 4–1 on Andy Pages's seventh-inning single. The two-time defending champions go to Milwaukee for the NLCS.",
    facts: [
      { label: "Game 4", line: "4–1", fitClass: "fit--num", body: "Pages's two-run single in the seventh; Muncy's home run in the ninth. Glasnow one hit in 4⅔ innings.", long: "Atlanta scored on a wild pitch in the first; the Dodgers tied it in the second on two Braves errors. Edgardo Henriquez was the winning pitcher and Edwin Díaz saved his second game of the series." },
      { label: "Braves walks", line: "18", fitClass: "fit--num", body: "In four games; none of the runners scored.", long: "Glasnow walked five on Wednesday; Blake Snell walked five in Game 2." },
      { label: "Game 3", line: "3–1", fitClass: "fit--num", body: "Yamamoto 7 IP, 4 H, 1 R, 10 K. Three Dodgers runs in the fourth off Sale; Díaz the save." },
      { label: "Muncy", line: "19", fitClass: "fit--num", body: "Postseason home runs, the most in Dodgers history, after three in this series." },
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
  { label: "LCS", line: "Oct. 11", body: "The NLCS opens Sunday in Milwaukee; the ALCS on Monday the 12th at Tropicana Field." },
];

export const TRENDING = [
  "Brewers–Dodgers, an NLCS rematch",
  "Mitchell's catch on Machado at the wall",
  "Rays sweep the Yankees",
  "The fan-interference ruling in the Bronx",
  "Guardians force Game 5 with a six-run sixth",
  "Muncy's nineteenth postseason home run",
];

export const NETWORK = {
  name: "GIFspn",
  tagline: "A fictional network built for a layout study.",
  plus: { name: "GIFspn+", price: "$11.99", period: "a month", pitch: "Every out-of-market postseason game, the whiparound show between them, and the full archive of this postseason's condensed games.", bullets: ["Live and on demand", "Four screens at once", "Cancel any time"] },
  fantasy: { name: "GIFspn Fantasy", pitch: "Postseason pick'em: choose a winner for every series and a player for every game. Standings reset each round.", cta: "Make your picks" },
  app: { pitch: "Scores in the notification shade, the scoreboard in a widget, and alerts when a game is in its final inning.", cta: "Get the app" },
  newsletter: { pitch: "One email a morning through the end of the World Series: last night's scores, today's starters, the one fact worth repeating.", cta: "Sign up" },
};
