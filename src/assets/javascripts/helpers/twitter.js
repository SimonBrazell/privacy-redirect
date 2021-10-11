/*
    Please remember to also update the src/manifest.json file 
    (content_scripts > matches, 'remove-twitter-sw.js') 
    when updating this list:
  */
const targets = [
  "twitter.com",
  "www.twitter.com",
  "mobile.twitter.com",
  "pbs.twimg.com",
  "video.twimg.com",
];
/*
    Please remember to also update the 
    src/assets/javascripts/remove-twitter-sw.js file 
    (const nitterInstances) when updating this list:
  */
const redirects = [
  "https://nitter.net",
  "https://nitter.snopyta.org",
  "https://nitter.42l.fr",
  "https://nitter.nixnet.services",
  "https://nitter.pussthecat.org",
  "https://nitter.cattube.org",
  "https://nitter.fdn.fr",
  "https://nitter.1d4.us",
  "https://nitter.kavin.rocks",
  "https://nitter.vxempire.xyz",
  "https://nitter.unixfox.eu",
  "https://bird.trom.tf",
  "https://nitter.ggc-project.de",
  "https://nitter.actionsack.com",
  "https://nitter.namazso.eu",
  "https://nitter.moomoo.me",
  "https://nitter.exonip.de",
  "http://3nzoldnxplag42gqjs23xvghtzf6t6yzssrtytnntc6ppc7xxuoneoad.onion",
  "http://nitter.l4qlywnpwqsluw65ts7md3khrivpirse744un3x7mlskqauz5pyuzgqd.onion",
  "http://nitterlgj3n5fgwesu3vxc5h67ruku33nqaoeoocae2mvlzhsu6k7fqd.onion",
  "http://npf37k3mtzwxreiw52ccs5ay4e6qt2fkcs2ndieurdyn2cuzzsfyfvid.onion",
  "http://nitterrrs6bbcba2bxjviwxzzapkhuuelljtig2ku2rxasweckxxxhid.onion",
];

export default {
  targets,
  redirects,
};
