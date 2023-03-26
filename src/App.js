import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import "./app.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userLIst/UserList";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <TopBar />
        <div className="container">
          <SideBar />
          <div className="others">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/users",
          element: <UserList />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
