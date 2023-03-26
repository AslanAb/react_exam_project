import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainHeaderWithAllPages, About, ItemAddPage, ItemDeletePage, ItemSalePage, HistoryPage } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainHeaderWithAllPages />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "/add",
                element: <ItemAddPage />
            },
            {
                path: "/delete",
                element: <ItemDeletePage />
            },
            {
                path: "/sale",
                element: <ItemSalePage />
            },
            {
                path: "/history",
                element: <HistoryPage />
            }
        ]
    }
]);
export default router;