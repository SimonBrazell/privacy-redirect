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
  "https://yewtu.be",
  "https://invidious.namazso.eu",
  "https://vid.puffyan.us",
  "https://dev.viewtube.io",
  "https://inv.riverside.rocks",
  "https://invidious.osi.kr",
  "https://yt.artemislena.eu",
  "https://invidio.xamh.de",
  "https://invidious-us.kavin.rocks",
  "https://invidious.flokinet.to",
  "https://invidious.privacy.gd",
  "https://invidious.esmailelbob.xyz",
  "https://invidious.mutahar.rocks",
  "https://inv.bp.mutahar.rocks",
  "https://invidious.weblibre.org",
  "http://fz253lmuao3strwbfbmx46yu7acac2jz27iwtorgmbqlkurlclmancad.onion",
  "http://c7hqkpkpemu6e7emz5b4vyz7idjgdvgaaa3dyimmeojqbgpea3xqjoid.onion",
  "http://w6ijuptxiku4xpnnaetxvnkc5vqcdu7mgns2u77qefoixi63vbvnpnqd.onion",
];

export default {
  targets,
  redirects,
};
