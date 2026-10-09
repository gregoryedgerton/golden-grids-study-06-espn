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
  { photo: PHOTOS.contreras, kicker: "Games 1 and 3", caption: "William Contreras: the home run that won Game 1, and three hits with another home run in Game 3" },
  { photo: PHOTOS.chourioWide, kicker: "Games 2 and 4", caption: "Jackson Chourio, the walk-off single on Sunday and the go-ahead single on Wednesday" },
  { photo: PHOTOS.tatis, kicker: "Game 4", caption: "Fernando Tatis Jr., whose 429-foot home run was San Diego's only run" },
  { photo: PHOTOS.miller, kicker: "Game 4", caption: "Mason Miller, back after missing Game 3, put three men on in the seventh and stranded them" },
  { photo: PHOTOS.yelich, kicker: "Game 3", caption: "Christian Yelich, whose seventh-inning single made it 4–3" },
  { photo: PHOTOS.megill, kicker: "Game 4", caption: "Trevor Megill, who struck out two in the ninth for his second save of the series" },
];

export const ATLANTA: GalleryItem[] = [
  { photo: PHOTOS.truist, kicker: "Game 4", caption: "Truist Park, where 41,173 saw the Braves' season end" },
  { photo: PHOTOS.acuna, kicker: "Braves", caption: "Ronald Acuña Jr., who walked, stole second and third and scored in Game 2 of the Wild Card round" },
  { photo: PHOTOS.olson, kicker: "Braves", caption: "Matt Olson, a home run in the Wild Card clincher and the run Harris doubled home in Game 2" },
  { photo: PHOTOS.freeman, kicker: "Dodgers", caption: "Freddie Freeman, once of Atlanta, whose fourth-inning home run tied Game 2" },
  { photo: PHOTOS.teoscar, kicker: "Dodgers", caption: "Teoscar Hernández, who singled in the seventh and scored the go-ahead run on Pages's hit" },
  { photo: PHOTOS.albies, kicker: "Braves", caption: "Ozzie Albies, whose leadoff double in the sixth of Game 4 was stranded at second" },
];
