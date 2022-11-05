import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import TermsAndConditions from "../../pages/Others/TermsAndConditions/TermsAndConditions";
import Blog from "../../pages/Shared/Header/Blog/Blog";
import Questions from "../../pages/Shared/Header/Questions/Questions";
import ToggleButton from "../../pages/Shared/Header/ToggleButton/ToggleButton";
import LeftSideNav from "../../pages/Shared/LeftSideNav/LeftSideNav";
import Pdf from "../../pages/Shared/NewsSummaryCard/Pdf/Pdf";
import RightSideNav from "../../pages/Shared/RightSideNav/RightSideNav";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://online-learning-platform-server-xi.vercel.app/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params}) => fetch(`https://online-learning-platform-server-xi.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://online-learning-platform-server-xi.vercel.app/news/${params.id}`)
            },
            {
                path:'/courses',
                element: <LeftSideNav></LeftSideNav>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/questions',
                element:<Questions></Questions>
            },
            {
                path:'/loginWithGoogle',
                element:<RightSideNav></RightSideNav>
            },
            {
                path:'/toggle',
                element:<ToggleButton></ToggleButton>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/pdf',
                element: <Pdf></Pdf>
            }

        ]
    }
])