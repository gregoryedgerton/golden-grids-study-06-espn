import { GoldenGrid, GoldenBox } from "@gifcommit/golden-grids";
import type { PlacementValue } from "@gifcommit/golden-grids";
import { useViewport, pick } from "../lib/viewport";
import { Player } from "../lib/clip";
import { Fact } from "../lib/boxes";
import { Band } from "./Band";
import { VIDEOS } from "../content";

/**
 * Video: the reference's ICYMI module, a hero clip and a column of
 * thumbnails. The three clips here are the only baseball video Wikimedia
 * Commons holds under a free licence that shows a current organisation's
 * player or park, so the module is labelled an archive and says what each
 * clip is. Clips are ten silent seconds; the whole file plays on request.
 */
export function VideoBand() {
  const viewport = useViewport();
  const base = import.meta.env.BASE_URL;
  const [placement, cw] = pick<readonly [PlacementValue, boolean]>(viewport, { mobile: ["bottom", true], tablet: ["right", true], desktop: ["right", true] });
  return (
    <Band id="video" kicker="Video" title="From the archive" lesson="Travis Bazzana, Cleveland's first overall pick in the 2024 draft, hitting a grand slam for Lake County in his first professional summer; and the bullpen at Dodger Stadium, where a fifth game against Atlanta would be played on Friday, as it was on a July evening in 2023." note={`from=1 to=4 · placement="${placement}" · clockwise=${cw}`}>
      <GoldenGrid from={1} to={4} placement={placement} clockwise={cw}>
        {VIDEOS.map((v) => (
          <GoldenBox key={v.key}>
            <Player clip={`${base}clips/${v.key}.mp4`} poster={`${base}clips/${v.key}.jpg`} alt={v.alt} title={v.title} video={v.full} label="Play the whole clip" />
            <p className="media__caption media__caption--over"><span className="media__kicker">{v.who}</span>{v.title}</p>
          </GoldenBox>
        ))}
        <GoldenBox>
          <Fact label="GSPN+" fitClass="fit--word" max={120} tone="ink" body={<p className="box__body--short">Every out-of-market Division Series game, live and on demand. Wednesday's four are on TBS and FS1.</p>}>Watch</Fact>
        </GoldenBox>
      </GoldenGrid>
    </Band>
  );
}
