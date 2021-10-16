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
  "https://libreddit.exonip.de",
  "https://libreddit.silkky.cloud",
  "https://lr.riverside.rocks",
  "https://reddit.artemislena.eu",
  // teddit: privacy w/ old UI
  "https://teddit.net",
  "https://teddit.namazso.eu",
  "https://teddit.ggc-project.de",
  "https://teddit.kavin.rocks",
  "https://teddit.sethforprivacy.com",
  "http://qtpvyiaqhmwccxwzsqubd23xhmmrt75tdyw35kp43w4hvamsgl3x27ad.onion",
];
const bypassPaths = /\/(gallery\/poll\/rpan\/settings\/topics)/;

export default {
  targets,
  redirects,
  bypassPaths,
};
