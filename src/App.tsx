import { Page } from "./lib/Page";
import { useFontsReady } from "./lib/fonts";
import { LeadBand } from "./bands/LeadBand";
import { HeadlinesBand } from "./bands/HeadlinesBand";
import { SeriesBand } from "./bands/SeriesBand";
import { GalleryBand, SAN_DIEGO, ATLANTA } from "./bands/GalleryBand";
import { VideoBand } from "./bands/VideoBand";
import { FactsBand } from "./bands/FactsBand";
import { PlusBanner, Promos, ScheduleList, BracketList, TrendingList } from "./lib/modules";
import { NUMBERS, WILDCARD_FACTS } from "./content";
import "./styles.css";

/**
 * GIFcommit's front page, after the structure of espn.com's: the lead story,
 * the headlines, a subscription banner, a story card for each series with
 * a strip of people under the two that are closest to ending, video, the
 * round that was, promotions, the numbers, the schedule, the bracket and
 * what is trending. Bands stack; the flat modules stay flat.
 */
export function App() {
  useFontsReady(["800 1em 'Barlow Condensed'", "600 1em 'Barlow Condensed'"]);
  return (
    <Page>
      <LeadBand />
      <HeadlinesBand />
      <PlusBanner />
      <GalleryBand id="san-diego" kicker="NLDS" title="Brewers–Padres: who decided the first two games" lesson="Two one-run games at American Family Field. Milwaukee's winning runs came on a seventh-inning home run on Saturday and a two-out, bases-loaded single on Sunday; San Diego led in both games." items={SAN_DIEGO} desktop={["right", true]} mobile={["top", true]} />
      <SeriesBand id="lad-atl" />
      <GalleryBand id="atlanta" kicker="NLDS Game 4" title="Dodgers–Braves: Wednesday at Truist Park" lesson="Atlanta won two of the five previous postseason series between the clubs, in 1996 and 2021, and took the season series 5–1. The Dodgers have won the three meetings in between, in 2013, 2018 and 2020." items={ATLANTA} desktop={["left", false]} mobile={["bottom", false]} />
      <SeriesBand id="tb-nyy" />
      <SeriesBand id="cle-cws" />
      <VideoBand />
      <FactsBand id="wild-card" kicker="The round that was" title="Wild Card Series, September 29 – October 1" lesson="Three of the four series were sweeps. The Yankees outscored Boston 18–2; the White Sox won a postseason series for the first time since 2005; the Padres shut out the Cubs 8–0 behind Michael King; the Braves beat the Phillies, who had eliminated them three times, in three games." facts={WILDCARD_FACTS} placement="left" clockwise aside={{ href: "#bracket", label: "Every score" }} />
      <Promos />
      <FactsBand id="numbers" kicker="By the numbers" title="The 2026 postseason" facts={NUMBERS.slice(0, 6)} placement="right" clockwise={false} />
      <ScheduleList />
      <BracketList />
      <TrendingList />
    </Page>
  );
}
