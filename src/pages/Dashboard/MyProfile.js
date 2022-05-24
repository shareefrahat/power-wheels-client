import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import avatar from "../../images/user.png";

const MyProfile = () => {
  const [currentUser] = useAuthState(auth);

  console.log(currentUser.email);
  const {
    data: user,
    refetch,
    isLoading,
  } = useQuery(["user", currentUser], () =>
    fetch(`https://power-wheels-ltd.herokuapp.com/user/${currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  console.log(user);

  let [updateUser, setUpdateUser] = useState({
    name: currentUser.displayName,
    email: currentUser.email,
    phone: user?.phone,
    address: user?.address,
    img: currentUser.photoURL || user?.img,
  });

  const handleImage = (e) => {
    const { img, ...rest } = updateUser;
    const newImg = e.target.value || avatar;
    const newImgLink = { img: newImg, ...rest };
    setUpdateUser(newImgLink);
  };

  const handlePhone = (e) => {
    const { phone, ...rest } = updateUser;
    const newPhone = e.target.value;
    const newPhoneNumber = { phone: newPhone, ...rest };
    setUpdateUser(newPhoneNumber);
  };

  const handleAddress = (e) => {
    const { address, ...rest } = updateUser;
    const newAddress = e.target.value;
    const newUserAddress = { address: newAddress, ...rest };
    setUpdateUser(newUserAddress);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `https://power-wheels-ltd.herokuapp.com/users/${currentUser?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success(`User Information Successfull Updated`);
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="my-10">
        <div className="border border-accent rounded p-5 w-fit h-fit mx-auto">
          <div>
            <h2 className="text-lg lg:text-xl font-bold font-secondary text-accent border border-accent py-2 rounded mb-10">
              Update Profile
            </h2>
          </div>
          <form
            onSubmit={handleUpdate}
            className="w-full mx-auto font-secondary"
          >
            <div className="mb-4">
              <div className="flex flex-col justify-center items-center gap-2 font-secondary">
                <div>
                  <img
                    className="w-32 rounded-full mx-auto border-2 border-primary aspect-square"
                    src={updateUser?.img}
                    alt=""
                  />
                </div>
                <div className="font-semibold">
                  <p className="text-2xl font-primary font-normal mb-2">
                    {updateUser?.name}
                  </p>
                  <p className="text-xl font-normal mb-2">
                    {updateUser?.email}
                  </p>
                </div>
              </div>
              <div className="divider my-5 font-semibold">Contact Info</div>
              <div className="flex flex-col gap-3 text-left">
                <p>
                  Image:{" "}
                  <input
                    onChange={handleImage}
                    type="text"
                    id="image"
                    name="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
                    value={updateUser.img}
                    required
                  />
                </p>
                <p>
                  Phone:{" "}
                  <input
                    onChange={handlePhone}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
                    value={updateUser.phone}
                    required
                  />
                </p>
                <p>
                  Address:{" "}
                  <textarea
                    onChange={handleAddress}
                    id="address"
                    name="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
                    value={updateUser.address}
                    required
                  />
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full font-secondary font-bold"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
