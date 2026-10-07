import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { useExpandGroup } from "../lib/expand";
import { PhotoCard } from "../lib/cards";
import { Band } from "./Band";
import { PHOTOS, type Photo } from "../content";

/**
 * A row of people: the reference runs strips of player cards under a
 * story. Six photographs, the one the band is about in the largest square,
 * every picture expandable to its full frame and its credit.
 */
export interface GalleryItem { photo: Photo; caption: string; kicker?: string }

export function GalleryBand({ id, kicker, title, lesson, items, desktop, mobile }: {
  id: string; kicker: string; title: string; lesson: string; items: GalleryItem[];
  desktop: [PlacementValue, boolean]; mobile: [PlacementValue, boolean];
}) {
  const viewport = useViewport();
  const x = useExpandGroup();
  const [placement, cw] = pick<[PlacementValue, boolean]>(viewport, { mobile, tablet: desktop, desktop });
  return (
    <Band id={id} kicker={kicker} title={title} lesson={lesson} note={`from=1 to=${items.length} · placement="${placement}" · clockwise=${cw}`}>
      <GoldenGrid from={1} to={items.length} placement={placement} clockwise={cw}>
        {items.map((it, i) => {
          const key = `${id}-${i}`;
          return <GoldenBox key={key} {...x.boxProps(key)}><PhotoCard photo={it.photo} caption={it.caption} kicker={it.kicker} x={x} slotKey={key} /></GoldenBox>;
        })}
      </GoldenGrid>
    </Band>
  );
}

export const SAN_DIEGO: GalleryItem[] = [
  { photo: PHOTOS.contreras, kicker: "Game 1", caption: "William Contreras, whose seventh-inning home run off Adrian Morejon won it 3–2" },
  { photo: PHOTOS.machado, kicker: "Wild Card", caption: "Manny Machado, a first-inning home run and an RBI double in the 8–0 opener against the Cubs" },
  { photo: PHOTOS.tatis, kicker: "Wild Card", caption: "Fernando Tatis Jr., who homered in the first inning of Game 1 against Chicago" },
  { photo: PHOTOS.miller, kicker: "Game 2", caption: "Mason Miller: forty pitches, three walks and the walk-off single in the ninth" },
  { photo: PHOTOS.yelich, kicker: "Game 2", caption: "Christian Yelich, whose walk began the ninth-inning rally" },
  { photo: PHOTOS.megill, kicker: "Game 1", caption: "Trevor Megill, who retired Jackson Merrill to end it" },
];

export const ATLANTA: GalleryItem[] = [
  { photo: PHOTOS.truist, kicker: "Game 4", caption: "Truist Park, Wednesday, 6 p.m. ET: Atlanta's season or a fifth game in Los Angeles" },
  { photo: PHOTOS.acuna, kicker: "Braves", caption: "Ronald Acuña Jr., who walked, stole second and third and scored in Game 2 of the Wild Card round" },
  { photo: PHOTOS.olson, kicker: "Braves", caption: "Matt Olson, a home run in the Wild Card clincher and the run Harris doubled home in Game 2" },
  { photo: PHOTOS.freeman, kicker: "Dodgers", caption: "Freddie Freeman, once of Atlanta, whose fourth-inning home run tied Game 2" },
  { photo: PHOTOS.teoscar, kicker: "Dodgers", caption: "Teoscar Hernández, a two-run home run in the fourth inning of Game 1" },
  { photo: PHOTOS.albies, kicker: "Braves", caption: "Ozzie Albies, a two-run home run in the ninth inning of Game 1" },
];
