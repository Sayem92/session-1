import React from "react";

const Modal = (props) => {
  console.log(props);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => props.setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{props?.data?.name}</h3>
          <p className="py-4">
            {props.data.name ? props.data.action : "Not Found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
