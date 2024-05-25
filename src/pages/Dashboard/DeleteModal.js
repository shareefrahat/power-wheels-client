import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deleteProduct, setDeleteProduct }) => {
  const { name, _id } = deleteProduct;

  const handleDelete = () => {
    setDeleteProduct(null);
    fetch(`https://power-wheels-server.onrender.com/products?id=${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`${name} is Deleted`);
        } else {
          toast.error("Something went wrong!");
        }
        setDeleteProduct(null);
      });
  };
  return (
    <>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure to delete {name}?</h3>
          <p class="py-4">You can add {name} further from add product page.</p>
          <div class="modal-action">
            <button onClick={handleDelete} className="btn btn-sm btn-error">
              Confirm
            </button>
            <label htmlFor="delete-modal" class="btn btn-sm">
              Back
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
