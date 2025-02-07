import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import avatar from "../../images/user.png";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://power-wheels-server.onrender.com/allUsers`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const makeAdmin = (email) => {
    fetch(`https://power-wheels-server.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("You have no permission to make admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <>
      <section>
        <h3 className="text-2xl my-10">All users: {users.length}</h3>
      </section>
      <section className="my-10 mx-4 border-2 border-primary rounded">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Image</th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div class="avatar">
                        <div class="w-8 rounded-full">
                          <img src={user.img || avatar} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>{user.name || user?.email.split("@")[0]}</td>
                    <td>{user.email}</td>
                    <td className="uppercase">{user.role || "Customer"}</td>
                    <td>
                      {user?.role === "admin" ? (
                        <button className="btn btn-xs btn-disabled">
                          Make Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => makeAdmin(user.email)}
                          className="btn btn-xs btn-primary"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AllUsers;
