import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import { useViewport } from "../lib/viewport";
import { useExpandGroup } from "../lib/expand";
import { Fact } from "../lib/boxes";
import { Band } from "./Band";
import { HEADLINES, type Story } from "../content";

/**
 * Top Headlines: the reference's right-rail list of six. Here each headline
 * is a square and the type is set to the room the square leaves it, so the
 * list reads as a page of headlines rather than six lines of twelve-pixel
 * text. More opens the story beneath the headline.
 *
 * At 390 the six are two grids of three stacked, each portrait; at 820 and
 * 1440 one grid of six, landscape, hero on the left and the spiral run
 * anticlockwise so the second headline sits top right. The two smallest
 * squares carry each story's short form, the headline as its spoken text.
 */
export function HeadlinesBand() {
  const viewport = useViewport();
  const x = useExpandGroup();
  const split = viewport === "mobile";
  const note = split ? 'two grids: from=1 to=3 · placement="top" / "bottom"' : 'from=1 to=6 · placement="left" · clockwise=false';
  return (
    <Band id="headlines" kicker="Top headlines" title="Division Series, day five" note={note} aside={{ href: "#schedule", label: "Today's schedule" }}>
      {split ? (
        <div className="stack">
          <GoldenGrid from={1} to={3} placement="top">{HEADLINES.slice(0, 3).map((h, i) => <GoldenBox key={h.id} {...x.boxProps(h.id)}><Headline h={h} x={x} short={i > 0} /></GoldenBox>)}</GoldenGrid>
          <GoldenGrid from={1} to={3} placement="bottom" clockwise={false}>{HEADLINES.slice(3).map((h, i) => <GoldenBox key={h.id} {...x.boxProps(h.id)}><Headline h={h} x={x} short={i > 0} /></GoldenBox>)}</GoldenGrid>
        </div>
      ) : (
        <GoldenGrid from={1} to={6} placement="left" clockwise={false}>
          {HEADLINES.map((h, i) => <GoldenBox key={h.id} {...x.boxProps(h.id)}><Headline h={h} x={x} short={i > 3} /></GoldenBox>)}
        </GoldenGrid>
      )}
    </Band>
  );
}

function Headline({ h, x, short }: { h: Story; x: ReturnType<typeof useExpandGroup>; short?: boolean }) {
  return (
      <Fact
        label={h.kicker}
        fitClass={short ? "fit--num" : "fit--head"}
        max={120}
        spoken={short ? h.head : undefined}
        body={<><p className="box__body--short">{h.dek}</p><p className="box__body--long">{h.dek} {h.body[0]}</p></>}
        expand={{ group: x, slotKey: h.id, title: h.head, full: <div className="cell__body"><p className="cell__dek">{h.dek}</p>{h.body.map((p, i) => <p key={i}>{p}</p>)}</div> }}
      >
        {short ? h.short : h.head}
      </Fact>
  );
}
