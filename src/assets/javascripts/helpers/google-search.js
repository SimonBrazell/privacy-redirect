const targets = /https?:\/\/(((www|maps)\.)?(google\.).*(\/search)|search\.(google\.).*)/;
const redirects = [
  { link: "https://duckduckgo.com", q: "/" },
  { link: "https://startpage.com", q: "/search/" },
  { link: "https://www.ecosia.org", q: "/search" },
  { link: "https://www.qwant.com", q: "/" },
  { link: "https://www.mojeek.com", q: "/search" },
  { link: "https://search.snopyta.org", q: "/" },
  { link: "https://searx.info", q: "/" },
  { link: "https://searx.be", q: "/" },
  { link: "https://search.disroot.org", q: "/" },
  { link: "https://searx.tuxcloud.net", q: "/" },
  { link: "https://searx.ninja", q: "/" },
  { link: "https://tromland.org/searx", q: "/search" },
  { link: "https://engine.presearch.org", q: "/search" },
  { link: "https://searx.silkky.cloud", q: "/" },
  { link: "https://search.trom.tf", q: "/" },
  { link: "https://whooglesearch.net", q: "/search" },
  { link: "https://whoogle.sdf.org", q: "/search" },
  { link: "https://whoogle.himiko.cloud", q: "/search" },
  { link: "https://whoogle-search.zeet.app", q: "/search" },
  { link: "http://s.alefvanoon.xyz", q: "/search" },
  { link: "http://ss.alefvanoon.xyz", q: "/search" },

];

export default {
  targets,
  redirects,
};
