import { createBrowserRouter } from "react-router-dom";

// Components
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateItem from "./pages/CreateItem";
import AboutItem from "./pages/AboutItem";
import UpdateItem from "./pages/UpdateItem";

// Loaders
import loadProducts from "./loaders/products";
import loadProduct from "./loaders/product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        loader: loadProducts,
        children: []
    },
    {
        path: "/create",
        element: <CreateItem />
    },
    {
        path: "/about/:productId",
        element: <AboutItem />,
        loader: loadProduct,
    },
    {
        path: "/update/:productId",
        element: <UpdateItem />,
        loader: loadProduct,
    },
]);

export default router;