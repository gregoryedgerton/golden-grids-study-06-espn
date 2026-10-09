import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { useExpandGroup } from "../lib/expand";
import { PhotoCard, FactCard } from "../lib/cards";
import { Band } from "./Band";
import { PHOTOS, SERIES_STORIES, type Fact, type Photo } from "../content";

/**
 * One Division Series as one band: the reference's story card (a picture,
 * a headline, a line of related items) rebuilt as a run of squares, the
 * people who decided the games in the larger squares and the scores in the
 * smaller ones. Each series has its own orientation so the three read as
 * three different cards rather than one repeated.
 */
type Slot = { photo: Photo; caption: string; kicker?: string } | { fact: number };

const COMPOSITION: Record<string, { slots: Slot[]; desktop: [PlacementValue, boolean]; mobile: [PlacementValue, boolean] }> = {
  "tb-nyy": {
    desktop: ["top", true], mobile: ["right", true],
    slots: [
      { photo: PHOTOS.rasmussen, kicker: "Game 1", caption: "Drew Rasmussen: eight scoreless innings, one hit, ten strikeouts" },
      { photo: PHOTOS.aranda, kicker: "Game 1", caption: "Jonathan Aranda, whose third-inning home run was the only run" },
      { fact: 0 },
      { photo: PHOTOS.rice, kicker: "Game 3", caption: "Ben Rice, whose third-inning single was his eighth run batted in of the postseason" },
      { fact: 1 },
    ],
  },
  "cle-cws": {
    desktop: ["bottom", false], mobile: ["left", false],
    slots: [
      { photo: PHOTOS.progressive, kicker: "Game 5", caption: "Progressive Field, where the series returns on Saturday night" },
      { photo: PHOTOS.kwan, kicker: "Game 3", caption: "Steven Kwan, whose third-inning single tied Game 3 before Adell's triple" },
      { fact: 0 },
      { photo: PHOTOS.ramirez, kicker: "Games 3 and 4", caption: "José Ramírez: a two-run triple on Wednesday, a two-run home run on Thursday" },
      { fact: 1 },
    ],
  },
  "lad-atl": {
    desktop: ["right", true], mobile: ["bottom", true],
    slots: [
      { photo: PHOTOS.yamamoto, kicker: "Game 3", caption: "Yoshinobu Yamamoto: seven innings, four hits, one run, ten strikeouts" },
      { photo: PHOTOS.harris, kicker: "Game 2", caption: "Michael Harris II, a triple and the go-ahead double in Atlanta's win" },
      { photo: PHOTOS.muncy, kicker: "Game 4", caption: "Max Muncy, whose ninth-inning home run was his nineteenth in the postseason" },
      { fact: 2 },
      { fact: 1 },
      { fact: 0 },
    ],
  },
};

export function SeriesBand({ id }: { id: keyof typeof SERIES_STORIES }) {
  const viewport = useViewport();
  const x = useExpandGroup();
  const story = SERIES_STORIES[id];
  const c = COMPOSITION[id];
  const [placement, cw] = pick<[PlacementValue, boolean]>(viewport, { mobile: c.mobile, tablet: c.desktop, desktop: c.desktop });
  const round = id.startsWith("tb") || id.startsWith("cle") ? "ALDS" : "NLDS";
  return (
    <Band id={id} kicker={round} title={story.title} lesson={story.standfirst} note={`from=1 to=${c.slots.length} · placement="${placement}" · clockwise=${cw}`} aside={{ href: "#bracket", label: "Bracket" }}>
      <GoldenGrid from={1} to={c.slots.length} placement={placement} clockwise={cw}>
        {c.slots.map((s, i) => {
          const key = `${id}-${i}`;
          return (
            <GoldenBox key={key} {...x.boxProps(key)}>
              {"photo" in s
                ? <PhotoCard photo={s.photo} caption={s.caption} kicker={s.kicker} x={x} slotKey={key} />
                : <FactCard fact={story.facts[s.fact] as Fact} x={x} slotKey={key} />}
            </GoldenBox>
          );
        })}
      </GoldenGrid>
    </Band>
  );
}
