import Login from "./pages/login/Login.jsx"
import './App.css';
import Register from "./pages/register/Register.jsx";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx"
import LeftBar from "./components/leftBar/LeftBar.jsx"
import RightBar from "./components/rightBar/RightBar.jsx"
import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"

const Layout = ()=> {
  return(
    <>
      <Navbar/>
      <div style={{ display:"flex" }}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/profile/:id",
        element: <Profile/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    
  },
  {
    path: "/register",
    element: <Register/>,
    
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
