import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./route";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";
import store from "./store";

let app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach(async (to, from, next) => {
    let token = localStorage.getItem("token");

    // Check if the route requires authentication
    if (to.matched.some((record) => record.meta.isAuth)) {
        if (!token) {
            console.log("Need to Connect");
            // Redirect to /login if not authenticated
            next("/login");
        } else {
            console.log("Connected");
            next(); // Allow access if authenticated
        }
    } else {
        // Handle routes that do not require authentication
        if (to.path === '/login' && token) {
            // Redirect authenticated users away from /login
            console.log("Already connected, redirecting from /login");
            next('/dashboard'); // Redirect to home or another route as needed
        } else {
            console.log("Don't need to connect");
            next(); // Allow access if the route does not require authentication
        }
    }
});



app.use(router);
app.use(router).use(PrimeVue);
app.use(store);
app.mount("#app");
