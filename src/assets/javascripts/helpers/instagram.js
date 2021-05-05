const targets = [
  "instagram.com",
  "www.instagram.com",
  "help.instagram.com",
  "about.instagram.com",
];
const redirects = [
  "https://bibliogram.art",
  "https://bibliogram.snopyta.org",
  "https://bibliogram.pussthecat.org",
  "https://bibliogram.nixnet.services",
  "https://bibliogram.ethibox.fr",
  "https://bibliogram.hamster.dance",
  "https://bibliogram.kavin.rocks",
  "https://insta.trom.tf",
  "https://bibliogram.hamster.dance",
  "https://biblio.alefvanoon.xyz",
];
const reservedPaths = [
  "about",
  "explore",
  "support",
  "press",
  "api",
  "privacy",
  "safety",
  "admin",
  "graphql",
  "accounts",
  "help",
  "terms",
  "contact",
  "blog",
  "igtv",
  "u",
  "p",
  "fragment",
  "imageproxy",
  "videoproxy",
  ".well-known",
  "tv",
  "reel",
];
const bypassPaths = /\/(accounts\/|embeds?.js)/;

export default {
  targets,
  redirects,
  reservedPaths,
  bypassPaths,
};
