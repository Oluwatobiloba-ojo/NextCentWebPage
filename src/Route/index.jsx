import Layout from "../component/Layout"
import Home from "../features/Home";


export const Route = [
    {
        path:"",
        element: <Layout />,
        children : [
            {
                path: "",
                element: <Home/>
            },
        ]
    },
]

