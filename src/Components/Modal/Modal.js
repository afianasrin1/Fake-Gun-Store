import React from "react";

const Modal = ({ data, setModalData }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={data.img} alt="" />
          <h3 className="text-lg font-bold">
            name:{data.name ? data.name : "not available"}
          </h3>
          <p className="py-4">price:{data.price}</p>
          <p className="py-4">
            action:{data.action ? data.action : "not found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
