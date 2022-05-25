import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import DeleteModal from "./DeleteModal";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [products] = useProducts(deleteProduct);

  return (
    <>
      {!products ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <section className="my-10">
            <h4 className="text-xl lg:text-2xl mb-2 font-primary">
              Manage Product
            </h4>
            <p className="text-md lg:text-xl my-2">
              Admin: {user?.displayName}
            </p>
            <h4 className="text-xl">Total Product: {products.length}</h4>
          </section>
          <section className="my-10 mx-4 border-2 border-primary rounded">
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>S/L</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price/unit</th>
                    <th>Available</th>
                    <th>Min Order Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product, index) => (
                    <tr key={product._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div class="avatar">
                          <div class="w-8 rounded-full">
                            <img src={product.img} alt="" />
                          </div>
                        </div>
                      </td>
                      <td>{product?.name}</td>
                      <td>${product?.price}</td>
                      <td>{product?.available}</td>
                      <td>{product?.minOrder}</td>
                      <th>
                        <>
                          <label
                            onClick={() => setDeleteProduct(product)}
                            for="delete-modal"
                            class="btn btn-error btn-xs text-white"
                          >
                            Delete
                          </label>
                        </>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            {deleteProduct && (
              <DeleteModal
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
              ></DeleteModal>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default ManageProducts;
