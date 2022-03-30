const targets = [
  "www.reddit.com",
  "np.reddit.com",
  "new.reddit.com",
  "amp.reddit.com",
  "i.redd.it",
  "redd.it",
  "old.reddit.com",
];
const redirects = [
  // libreddit: privacy w/ modern UI
  "https://libredd.it",
  "https://libreddit.spike.codes",
  "https://libreddit.kavin.rocks",
  "https://libreddit.insanity.wtf",
  "https://libreddit.dothq.co",
  "https://libreddit.silkky.cloud",
  "https://libreddit.himiko.cloud",
  "https://reddit.artemislena.eu",
  // teddit: privacy w/ old UI
  "https://teddit.net",
  "https://teddit.ggc-project.de",
  "https://teddit.kavin.rocks",
  "https://snew.notabug.io",
  "https://rdt.trom.tf"
];
const bypassPaths = /\/(gallery\/poll\/rpan\/settings\/topics)/;

export default {
  targets,
  redirects,
  bypassPaths,
};
