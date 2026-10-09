import type { ReactNode } from "react";
import { Tools } from "./tools";
import { StudyBanner, StudyDisclosure } from "./study";
import { CREDITS, DATELINE, DIVISION, NETWORK, TEAMS, VIDEOS, type Game, type Series } from "../content";

/**
 * The shell, after the reference: a black global bar with the wordmark and
 * the sports, a scoreboard strip of today's and last night's games, the
 * page, and a footer. GIFcommit is a fictional network; the games are real.
 */
const NAV = ["MLB", "Scores", "Bracket", "Schedule", "Video", "Watch", "Fantasy", "More"];

export function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <StudyBanner />
      <Tools />
      <header className="global">
        <div className="global__bar">
          <a className="wordmark" href="#top" aria-label="GIFcommit home">
            <span className="wordmark__mark" aria-hidden="true">GIFcommit</span>
          </a>
          <nav className="global__nav" aria-label="Sports">
            <ul>
              {NAV.map((n, i) => <li key={n}><a href={i === 0 ? "#content" : `#${n.toLowerCase()}`} aria-current={i === 0 ? "page" : undefined}>{n}</a></li>)}
            </ul>
          </nav>
          <p className="global__account"><span aria-hidden="true">●</span> Log in</p>
        </div>
        <Scoreboard />
      </header>

      <main id="content">
        <h1 className="dateline"><span className="dateline__net">{NETWORK.name}</span> <span className="dateline__date">{DATELINE}</span> <span className="dateline__sub">MLB postseason: three series decided, one to a fifth game</span></h1>
        {children}
      </main>

      <StudyDisclosure>
        <details className="credits" id="credits">
          <summary>Photograph and video credits</summary>
          <p>All photographs and video are from Wikimedia Commons under the licences stated; none is from ESPN or Major League Baseball.</p>
          <ul>
            {CREDITS.map((p) => <li key={p.src}><a href={p.page}>{p.alt}</a> — {p.credit}, {p.licence}.</li>)}
            {VIDEOS.map((v) => <li key={v.key}><a href={v.page}>{v.alt}</a> — {v.who}, {v.licence}.</li>)}
          </ul>
        </details>
      </StudyDisclosure>
    </>
  );
}

/** The reference's scoreboard strip: a flat row of game cards, scrollable. */
function Scoreboard() {
  const cards: { s: Series; g: Game }[] = [];
  for (const s of DIVISION) {
    const live = s.games.find((g) => g.status === "live");
    const next = s.games.find((g) => g.status === "next");
    const last = [...s.games].reverse().find((g) => g.status === "final");
    const g = live ?? next ?? last;
    if (g) cards.push({ s, g });
    if (live && last) cards.push({ s, g: last });
  }
  return (
    <nav className="scores" aria-label="Scoreboard">
      <ul>
        {cards.map(({ s, g }) => <li key={`${s.id}-${g.n}`}><GameCard s={s} g={g} /></li>)}
      </ul>
    </nav>
  );
}

function GameCard({ s, g }: { s: Series; g: Game }) {
  const away = TEAMS[g.away], home = TEAMS[g.home];
  const done = g.status === "final";
  const awayWon = done && (g.awayScore ?? 0) > (g.homeScore ?? 0);
  const state = g.status === "live" ? "Live" : done ? `Final${g.note ? ` · ${g.note}` : ""}` : g.time ?? g.date;
  return (
    <a className={`game game--${g.status}`} href={`#${s.id}`} aria-label={`${s.round} Game ${g.n}, ${away.city} ${away.name} at ${home.city} ${home.name}, ${done ? `final ${g.awayScore} to ${g.homeScore}` : state}`}>
      <span className="game__meta">{s.round} · G{g.n} <span className={`game__state${g.status === "live" ? " game__state--live" : ""}`}>{state}</span></span>
      <span className={`game__team${done && !awayWon ? " game__team--lost" : ""}`}><span className="game__seed">{away.seed}</span>{away.name}<span className="game__score">{done ? g.awayScore : ""}</span></span>
      <span className={`game__team${done && awayWon ? " game__team--lost" : ""}`}><span className="game__seed">{home.seed}</span>{home.name}<span className="game__score">{done ? g.homeScore : ""}</span></span>
      <span className="game__series">{s.summary}{g.tv && !done ? ` · ${g.tv}` : ""}</span>
    </a>
  );
}
