import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Clickzzz from "../components/Clickzzz";
import GPUResale from "../components/GPUResale";
import SimpleTest from "../components/SimpleTest";
import WOWLearning from "../components/WOWLearning";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement : <Navigate to='/' />,
    },
    {
        path: '/clickzzz',
        errorElement : <Navigate to='/' />,
        element: <Clickzzz />
    },
    {
        path: '/gpu-resale',
        errorElement : <Navigate to='/' />,
        element: <GPUResale />
    },
    {
        path: '/simple-test',
        errorElement : <Navigate to='/' />,
        element: <SimpleTest />
    },
    {
        path: '/wow-learning',
        errorElement : <Navigate to='/' />,
        element: <WOWLearning />
    },
])