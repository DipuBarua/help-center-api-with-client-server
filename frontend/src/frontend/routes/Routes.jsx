import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HelpCenter from "../pages/HelpCenter/HelpCenter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <HelpCenter></HelpCenter>
            }
        ]
    },
]);

export default router;