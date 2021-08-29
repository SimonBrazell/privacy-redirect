const targets = [
  "www.reddit.com",
  "np.reddit.com",
  "new.reddit.com",
  "amp.reddit.com",
  "i.redd.it",
  "redd.it",
];
const redirects = [
  // libreddit: privacy w/ modern UI
  "https://libredd.it",
  "https://libreddit.spike.codes",
  "https://libreddit.kavin.rocks",
  "https://libreddit.exonip.de"
  "https://libreddit.silkky.cloud",
  "https://lr.riverside.rocks",
  "https://reddit.artemislena.eu",
  // teddit: privacy w/ old UI
  "https://teddit.net",
  "https://teddit.namazso.eu",
  "https://teddit.ggc-project.de",
  "https://teddit.kavin.rocks",
  "https://old.reddit.com", // desktop
  "https://i.reddit.com", // mobile
  "https://snew.notabug.io", // anti-censorship
];
const bypassPaths = /\/(gallery\/poll\/rpan\/settings\/topics)/;

export default {
  targets,
  redirects,
  bypassPaths,
};
