import { createBrowserRouter, Navigate} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Home from "./features/auth/interview/Pages/Home"
import Protected from "./features/auth/components/Protected"
import Interview from "./features/auth/interview/Pages/Interview"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />   // redirect root to login
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/Register",
        element:<Register/>
    },
    {
        path:"/home",
        element:(
            <Protected>
                <Home/>
            </Protected>
        )   
    },
    {
        path:"/interview/:interviewID",
        element:<Protected><Interview/></Protected>
    }
]) 