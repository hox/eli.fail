import Vue from "vue";
import Router from "vue-router";

import Landing from "@/App.vue";

Vue.use(Router);

const redirects = [
  {
    from: "/discord",
    to: "https://discord.gg/K2tzRPM",
  },
  { from: "/d", to: "https://discord.gg/K2tzRPM" },
  {
    from: "/notify",
    to: "https://notify.me/eli",
  },
  {
    from: "/insta",
    to: "https://instagram.com/eli.hernando",
  },
  {
    from: "/youtube",
    to: "https://www.youtube.com/channel/UCefyOC6nvnyjMqBlnVibFLA",
  },
  {
    from: "/twitter",
    to: "https://twitter.com/ShutUpElii",
  },
  {
    from: "/twitch",
    to: "https://twitch.tv/NerdEli",
  },
  {
    from: "/github",
    to: "https://github.com/NerdEli",
  },
  {
    from: "/snap",
    to: "https://www.snapchat.com/add/nerdeli05",
  },
];

const routes = {
  routes: [
    {
      path: "/",
      name: "home",
      component: Landing,
    },
  ],
  mode: "history",
};

redirects.forEach((redir) => {
  routes.routes.push({
    path: redir.from,
    redirect: () => {
      location.href = redir.to;
    },
  });
});

export default new Router(routes);
