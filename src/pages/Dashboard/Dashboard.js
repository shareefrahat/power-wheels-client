import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h1 className="text-2xl font-bold my-5">Dashboard</h1>
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden mb-5"
          >
            Menu
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {user && !admin && (
              <>
                <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add Review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageOrders">Manage Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
