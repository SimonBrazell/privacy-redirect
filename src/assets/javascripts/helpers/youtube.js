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
  "https://dev.viewtube.io",
  "https://inv.bp.projectsegfau.lt",
  "https://inv.riverside.rocks",
  "https://inv.riverside.rocks",
  "https://inv.vern.cc",
  "https://invidio.xamh.de",
  "https://invidious-us.kavin.rocks",
  "https://invidious.esmailelbob.xyz",
  "https://invidious.flokinet.to",
  "https://invidious.kavin.rocks",
  "https://invidious.namazso.eu",
  "https://invidious.nerdvpn.de",
  "https://invidious.osi.kr",
  "https://invidious.projectsegfau.lt",
  "https://invidious.sethforprivacy.com",
  "https://invidious.site",
  "https://invidious.slipfox.xyz",
  "https://invidious.snopyta.org",
  "https://invidious.tiekoetter.com",
  "https://invidious.weblibre.org",
  "https://invidious.zapashcanon.fr",
  "https://tube.incognet.io",
  "https://vid.puffyan.us",
  "https://y.com.sb",
  "https://yewtu.be",
  "https://youtube.076.ne.jp",
  "https://yt.artemislena.eu",
  "http://fz253lmuao3strwbfbmx46yu7acac2jz27iwtorgmbqlkurlclmancad.onion",
  "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion",
  "http://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion",
];

export default {
  targets,
  redirects,
};
