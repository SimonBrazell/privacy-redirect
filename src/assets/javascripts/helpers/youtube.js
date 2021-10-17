const targets = [
  "m.youtube.com",
  "youtube.com",
  "img.youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
  "youtu.be",
  "s.ytimg.com",
  "music.youtube.com",
];
/*
    Please remember to also update the manifest.json file
    (content_scripts > matches, 'persist-invidious-prefs.js')
    when updating this list:
  */
const redirects = [
  "https://invidious.snopyta.org",
  "https://invidious.kavin.rocks",
  "https://tube.connect.cafe",
  "https://invidious.zapashcanon.fr",
  "https://vid.mint.lgbt",
  "https://invidious.exonip.de",
  "https://invidious-us.kavin.rocks",
  "https://invidio.xamh.de",
  "https://invidious-jp.kavin.rocks",
  "https://invidious.hub.ne.kr",
  "https://youtube.076.ne.jp",
  "https://y.com.cm",
  "https://yewtu.be",
  "https://ytb.trom.tf",
  "https://piped.silkky.cloud",
  "https://inv.riverside.rocks",
  "https://tube.incognet.io",
  "https://invidious.namazso.eu",
  "https://vid.puffyan.us",
  "https://dev.viewtube.io",
  "https://piped.kavin.rocks",
  "https://invidious.048596.xyz",
  "https://invidious.sethforprivacy.com",
  "http://fz253lmuao3strwbfbmx46yu7acac2jz27iwtorgmbqlkurlclmancad.onion",
  "http://qklhadlycap4cnod.onion",
  "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion",
  "http://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion",
  "http://euxxcnhsynwmfidvhjf6uzptsmh4dipkmgdmcmxxuo7tunp3ad2jrwyd.onion",
];

export default {
  targets,
  redirects,
};
