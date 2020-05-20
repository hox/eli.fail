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
