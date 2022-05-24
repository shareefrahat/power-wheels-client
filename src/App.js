import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./pages/Blogs/Blogs";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Portfolio from "./pages/Portfolio/Portfolio";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Reviews from "./pages/Reviews/Reviews";
import Signup from "./pages/Signup/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PasswordReset from "./pages/Login/PasswordReset";
import Purchase from "./pages/Purchase/Purchase";
import MyOrders from "./pages/Dashboard/MyOrders";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequireAdmin from "./components/RequireAdmin";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import AddProduct from "./pages/Dashboard/AddProduct";
import AddReview from "./pages/Dashboard/AddReview";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <Purchase></Purchase>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="/dashboard/addReview"
            element={<AddReview></AddReview>}
          ></Route>
          <Route
            path="/dashboard/myOrders"
            element={<MyOrders></MyOrders>}
          ></Route>
          <Route
            path="/dashboard/payment/:id"
            element={<Payment></Payment>}
          ></Route>
          <Route
            path="/dashboard/allUsers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/passwordReset"
          element={<PasswordReset></PasswordReset>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
