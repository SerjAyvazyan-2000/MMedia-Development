import Home from "../../pages/home";
import Services from "../../pages/services";
import Costumers from "../../pages/costumers";
import About from "../../pages/about";
import Blog from "../../pages/blog";
import Contact from "../../pages/cotact";

export const navLinks = [
    { name: "Home", to: "/home", id: 1, icon: "icon-home2" },
    { name: "Services", to: "/services", id: 2, icon: "icon-home_repair_service" },
    { name: "Customers", to: "/customers", id: 3, icon: "icon-electrical_services" },
    { name: "About", to: "/about", id: 4, icon: "icon-info" },
    { name: "Blog", to: "/blog", id: 5, icon: "icon-blog" },
    { name: "Contact Us", to: "/contactUs", id: 6, icon: "icon-shrink2" },
];

export const routes = [
    { path: "/home", component: <Home />, id: 1 },
    { path: "/services", component: <Services />, id: 2 },
    { path: "/customers", component: <Costumers />, id: 3 },
    { path: "/about", component: <About />, id: 4 },
    { path: "/blog", component: <Blog />, id: 5 },
    { path: "/contactUs", component: <Contact />, id: 6 },
];
