import vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import Coindetail from "@/views/Cdetail";
import Chat from "@/views/Chat";


vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "*",
      name: "Error",
      component: Error
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: Coindetail
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
});
