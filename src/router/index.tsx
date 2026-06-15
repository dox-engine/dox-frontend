import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        element: <div>ok</div>,
        children: [
            {
                index: true,
                element: <div>ok</div>
            }
        ],
    }
]);

export { router };