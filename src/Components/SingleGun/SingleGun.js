import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
  const [modalData, setModalData] = useState([{}]);
  // console.log(modalData)

  // console.log(props);
  const { gun, countIncrease } = props;
  // console.log(gun);
  // console.log(props.gun);
  const { action, bullet, category, img, name, price } = gun;
  // const { action, bullet, category, img, name, price, countIncrease } =
  //   props.gun;

  return (
    <div>
      <div className="card w-full h-full  bg-base-200 shadow-xl">
        <figure>
          <img className="w-96 h-44" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-action">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
            <div className="mt-4 ">
              <button
                onClick={() => countIncrease()}
                className="btn btn-sm mr-2 "
              >
                ADD to cart
              </button>
              <label
                onClick={() => setModalData(gun)}
                htmlFor="my-modal-3"
                className="btn modal-button btn-sm btn-success"
              >
                Details Modal Open
              </label>
              {modalData && (
                <Modal data={modalData} setModalData={setModalData} />
              )}
              {/* <button className="btn btn-sm">Details</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
