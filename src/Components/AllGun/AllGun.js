import React, { useEffect, useState } from "react";
import SingleGun from "../SingleGun/SingleGun";

const AllGun = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);
  //   console.log(guns);
  //jodi async die kori use Effecte e call kore dite hobe datas()

  //   const datas = async () => {
  //     const res = await fetch(
  //       `https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`
  //     );
  //     const data = await res.json();
  //     setGuns(data);
  //   };
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
    // datas();
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-4">
        Welcome to my store
      </h1>
      <p className="text-2xl text-center font-medium mt-4">
        pistol pistol pistol pistol pistol pistol pistol pistol
      </p>
      <div className="w-[90%] mx-auto grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {guns.map((gun) => (
          <SingleGun
            gun={gun}
            key={SingleGun.id}
            countIncrease={countIncrease}
          />
        ))}
      </div>
    </div>
  );
};

export default AllGun;
