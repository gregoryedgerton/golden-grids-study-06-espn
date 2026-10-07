import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { useExpandGroup } from "../lib/expand";
import { PhotoCard, FactCard } from "../lib/cards";
import { Band } from "./Band";
import { LEAD, PHOTOS } from "../content";

/**
 * The lead story: the reference's top card is a hero image with a headline
 * over it and a column of related items beside it. Here the hero is the
 * largest square, the ballpark the next, and the four facts of the series
 * take the rest, smallest number in the smallest square.
 */
export function LeadBand() {
  const viewport = useViewport();
  const x = useExpandGroup();
  const [placement, cw] = pick<readonly [PlacementValue, boolean]>(viewport, { mobile: ["top", true], tablet: ["left", true], desktop: ["left", true] });
  const facts = LEAD.facts;
  return (
    <Band id="lead" kicker={LEAD.kicker} title={LEAD.head} lesson={LEAD.dek} note={`from=1 to=6 · placement="${placement}" · clockwise=${cw}`}>
      <GoldenGrid from={1} to={6} placement={placement} clockwise={cw}>
        <GoldenBox {...x.boxProps("hero")}>
          <PhotoCard photo={PHOTOS.chourioWide} x={x} slotKey="hero" kicker="Game 2" caption="Jackson Chourio, whose two-run single in the ninth beat the Padres 4–3 on Sunday" />
        </GoldenBox>
        <GoldenBox {...x.boxProps("park")}>
          <PhotoCard photo={PHOTOS.petco} x={x} slotKey="park" kicker="Game 3" caption="Petco Park, San Diego" />
        </GoldenBox>
        <GoldenBox {...x.boxProps("f3")}><FactCard fact={facts[3]} /></GoldenBox>
        <GoldenBox {...x.boxProps("f1")}><FactCard fact={facts[1]} /></GoldenBox>
        <GoldenBox {...x.boxProps("f2")}><FactCard fact={facts[2]} /></GoldenBox>
        <GoldenBox {...x.boxProps("f0")}><FactCard fact={facts[0]} /></GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
