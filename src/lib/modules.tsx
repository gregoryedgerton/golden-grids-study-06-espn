import { useState, type FormEvent } from "react";
import { DIVISION, NETWORK, TEAMS, TRENDING, WILDCARD, type Series } from "../content";

/**
 * The flat modules the reference interleaves with its stories: a
 * subscription banner, the fantasy and app promotions, a newsletter form,
 * the schedule, the bracket and the trending list. Lists stay lists. The
 * network is fictional and the forms send nothing.
 */
export function PlusBanner() {
  const p = NETWORK.plus;
  return (
    <section className="promo promo--plus" aria-labelledby="plus-title">
      <div className="promo__copy">
        <p className="promo__kicker">Stream the postseason</p>
        <h2 id="plus-title" className="promo__title">{p.name}</h2>
        <p className="promo__pitch">{p.pitch}</p>
        <ul className="promo__bullets">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </div>
      <div className="promo__offer">
        <p className="promo__price"><span className="promo__amount">{p.price}</span> {p.period}</p>
        <button type="button" className="btn btn--plus" aria-describedby="plus-note">Subscribe</button>
        <p id="plus-note" className="promo__note">A fictional service for a layout study; the button does nothing.</p>
      </div>
    </section>
  );
}

export function Promos() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <section className="promos" aria-label="Fantasy, the app, and the newsletter">
      <article className="promo promo--card">
        <p className="promo__kicker">Fantasy</p>
        <h2 className="promo__title promo__title--small">{NETWORK.fantasy.name}</h2>
        <p className="promo__pitch">{NETWORK.fantasy.pitch}</p>
        <button type="button" className="btn">{NETWORK.fantasy.cta}</button>
      </article>
      <article className="promo promo--card">
        <p className="promo__kicker">The app</p>
        <h2 className="promo__title promo__title--small">{NETWORK.name} on your phone</h2>
        <p className="promo__pitch">{NETWORK.app.pitch}</p>
        <button type="button" className="btn">{NETWORK.app.cta}</button>
      </article>
      <article className="promo promo--card">
        <p className="promo__kicker">Newsletter</p>
        <h2 className="promo__title promo__title--small">The morning after</h2>
        <p className="promo__pitch">{NETWORK.newsletter.pitch}</p>
        <form className="form" onSubmit={onSubmit} aria-describedby="news-note">
          <label htmlFor="news-email">Email</label>
          <div className="form__row">
            <input id="news-email" type="email" inputMode="email" autoComplete="off" placeholder="you@example.com" required />
            <button type="submit" className="btn">{NETWORK.newsletter.cta}</button>
          </div>
          <p id="news-note" className="promo__note" aria-live="polite">{sent ? "Nothing was sent; this form is part of a layout study." : "This form sends nothing."}</p>
        </form>
      </article>
    </section>
  );
}

/** The games still to come: the one Division Series left, then the two League Championship Series. */
export function ScheduleList() {
  const next = DIVISION.flatMap((s) => s.games.filter((g) => g.status === "next").map((g) => ({ s, g })));
  return (
    <section className="list-band" id="schedule" aria-labelledby="schedule-title">
      <h2 id="schedule-title" className="band__title"><span className="band__kicker">Schedule </span>What is left</h2>
      <ul className="list">
        {next.map(({ s, g }) => (
          <li key={s.id}>
            <p className="list__head"><time>Sat., {g.time}</time> <strong>{TEAMS[g.away].name} at {TEAMS[g.home].name}</strong> <span className="list__k">{s.round} Game {g.n}</span></p>
            <p className="list__sub">{g.venue} · {g.tv} · {s.summary}; the winner goes to Tampa Bay.</p>
          </li>
        ))}
        <li>
          <p className="list__head"><time>Sun., 8 p.m. ET</time> <strong>Dodgers at Brewers</strong> <span className="list__k">NLCS Game 1</span></p>
          <p className="list__sub">American Family Field · Fox, FS1 · Game 2 is Monday at 5 p.m. ET.</p>
        </li>
        <li>
          <p className="list__head"><time>Mon., 8 p.m. ET</time> <strong>Guardians or White Sox at Rays</strong> <span className="list__k">ALCS Game 1</span></p>
          <p className="list__sub">Tropicana Field · TBS · Game 2 is Tuesday at 8 p.m. ET.</p>
        </li>
        <li>
          <p className="list__head"><time>Oct. 23</time> <strong>World Series, Game 1</strong></p>
          <p className="list__sub">A seventh game, if needed, is Saturday, October 31.</p>
        </li>
      </ul>
    </section>
  );
}

/** The bracket as a list: every series, every game. */
export function BracketList() {
  const row = (s: Series) => (
    <li key={s.id}>
      <p className="list__head"><span className="list__k">{s.round}</span> <strong>({TEAMS[s.high].seed}) {TEAMS[s.high].name} vs. ({TEAMS[s.low].seed}) {TEAMS[s.low].name}</strong> <span className="list__sum">{s.summary}</span></p>
      <ol className="games">
        {s.games.filter((g) => g.status !== "if").map((g) => (
          <li key={g.n}>
            <span className="games__n">G{g.n}</span> <span className="games__date">{g.date}</span>{" "}
            {g.status === "final"
              ? <span className="games__score">{TEAMS[g.away].abbr} {g.awayScore}, {TEAMS[g.home].abbr} {g.homeScore}{g.note ? ` (${g.note})` : ""}</span>
              : <span className="games__score">{TEAMS[g.away].abbr} at {TEAMS[g.home].abbr}, {g.time}{g.tv ? `, ${g.tv}` : ""}{g.status === "live" ? " — in progress at press time" : ""}</span>}
          </li>
        ))}
      </ol>
    </li>
  );
  return (
    <section className="list-band" id="bracket" aria-labelledby="bracket-title">
      <h2 id="bracket-title" className="band__title"><span className="band__kicker">Bracket </span>2026 postseason</h2>
      <p className="band__lesson">Twelve teams: the top two division winners in each league received byes; the third division winner and three wild cards played best-of-three series, the winners advancing to best-of-five Division Series. Seeds in parentheses; the higher seed hosted Games 1, 2 and 5.</p>
      <ul className="list">{DIVISION.map(row)}{WILDCARD.map(row)}</ul>
    </section>
  );
}

export function TrendingList() {
  return (
    <section className="list-band list-band--trend" aria-labelledby="trend-title">
      <h2 id="trend-title" className="band__title"><span className="band__kicker">Trending </span>Now</h2>
      <ol className="trend">{TRENDING.map((t, i) => <li key={t}><span className="trend__n">{i + 1}</span>{t}</li>)}</ol>
    </section>
  );
}
