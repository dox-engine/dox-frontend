import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        children: [
            {
                index: true,
                element: <div>ok</div>
            }
        ],
    }
]);

export { router };