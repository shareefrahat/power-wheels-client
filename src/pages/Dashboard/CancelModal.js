import React from "react";
import { toast } from "react-toastify";

const CancelModal = ({ cancelingProduct, refetch, setCancelingProduct }) => {
  const { productName, productId, email } = cancelingProduct;

  const handleCancel = () => {
    const order = { email, productId };
    setCancelingProduct(null);
    fetch(`http://localhost:5000/orders`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order of ${productName} is canceled`);
        } else {
          toast.error("Something went wrong!");
        }
        setCancelingProduct(null);
        refetch();
      });
  };
  return (
    <>
      <input type="checkbox" id="cancel-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure to cancel the order of {productName}?
          </h3>
          <p class="py-4">
            You can add {productName} further from product page.
          </p>
          <div class="modal-action">
            <button onClick={handleCancel} className="btn btn-sm btn-error">
              Confirm
            </button>
            <label for="cancel-modal" class="btn btn-sm">
              Back
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelModal;
