// import { productsList } from "../components/ProductList";
import { classification } from "../pages/classification";
import { member } from "../pages/member";
import { favorite } from "../pages/favorite";
import { time_limit } from "../pages/time_limit";
import { new_product } from "../pages/new_product";
import { authorize_T } from "../pages/authorize_T";
import { pants } from "../pages/pants";
import { sports } from "../pages/sports";
import { productDetail } from "../pages/productDetail";
import { checkOut } from "../pages/checkOut";
import { Home } from "../pages/home";

const routes = [
    {
        path: '/',
        component: Home,

    },

    {
        path: '/classification',
        component: classification,

    },

    {
        path: '/member',
        component: member,

    },

    {
        path: '/favorite',
        component: favorite,

    },

    {
        path: '/checkout',
        component: checkOut,

    },



    {
        path: '/time_limit',
        component: time_limit,

    },
    {
        path: '/new_product',
        component: new_product,

    },
    {
        path: '/authorize_T',
        component: authorize_T,

    },
    {
        path: '/pants',
        component: pants,

    },
    {
        path: '/sports',
        component: sports,

    },
    // {
    //     path: '/productsList',
    //     component: productsList,
    // },

    {
        path: '/productDetail',
        component: productDetail,
    }
]
export default routes;
