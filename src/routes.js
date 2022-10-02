import pagesLogin from "./modules/auth/pages.login";
import pagesDashboard from "./modules/dashboard/pages.dashboard";



var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-purple",
    component: pagesDashboard,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-circle-08 text-pink",
    component: pagesLogin,
    layout: "/auth"
  }
];
export default routes;
