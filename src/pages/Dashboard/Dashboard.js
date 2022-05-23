import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const admin = false;
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
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
            <li>
              <Link to="/dashboard/history">History</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allUsers">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctor">Manage Doctor</Link>
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
