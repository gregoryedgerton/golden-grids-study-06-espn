import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { useExpandGroup } from "../lib/expand";
import { FactCard } from "../lib/cards";
import { Band } from "./Band";
import type { Fact } from "../content";

/**
 * Six facts as six squares: the reference's "Around the league" strip of
 * small cards, here with the number set as large as the square allows and
 * the sentence under it where there is room. Two bands use it, the Wild
 * Card round and the postseason in numbers, with opposite orientations.
 *
 * At 390 the six become two stacked grids of three so the smallest square
 * stays about 130px wide; one six-grid at that width leaves 48px squares.
 */
export function FactsBand({ id, kicker, title, lesson, facts, placement, clockwise = true, aside }: {
  id: string; kicker: string; title: string; lesson?: string; facts: Fact[]; placement: PlacementValue; clockwise?: boolean; aside?: { href: string; label: string };
}) {
  const viewport = useViewport();
  const x = useExpandGroup();
  const split = viewport === "mobile";
  const box = (f: Fact, i: number) => {
    const key = `${id}-${i}`;
    return <GoldenBox key={key} {...x.boxProps(key)}><FactCard fact={f} x={x} slotKey={key} /></GoldenBox>;
  };
  return (
    <Band id={id} kicker={kicker} title={title} lesson={lesson} aside={aside} note={split ? 'two grids: from=1 to=3 · placement="top" / "bottom"' : `from=1 to=${facts.length} · placement="${placement}" · clockwise=${clockwise}`}>
      {split ? (
        <div className="stack">
          <GoldenGrid from={1} to={3} placement="top" clockwise={clockwise}>{facts.slice(0, 3).map(box)}</GoldenGrid>
          <GoldenGrid from={1} to={3} placement="bottom" clockwise={!clockwise}>{facts.slice(3, 6).map((f, i) => box(f, i + 3))}</GoldenGrid>
        </div>
      ) : (
        <GoldenGrid from={1} to={facts.length} placement={placement} clockwise={clockwise}>{facts.map(box)}</GoldenGrid>
      )}
    </Band>
  );
}
