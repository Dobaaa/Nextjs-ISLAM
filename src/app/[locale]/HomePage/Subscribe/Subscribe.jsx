import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe-parent bg-[var(--white)] relative  flex justify-center p-8">
      <div className="subscribe-container bg-[var(--movLight)]  relative text-center p-20  ">
        <h1 className="font-bold text-2xl mb-3 ">
          <span className="relative">
            It’s time
            <hr className=" bg-[var(--main)] w-[100%] h-1 absolute left-0" />{" "}
          </span>
          to invest your time for the hereafter
        </h1>
        <p className="font-bold mb-4">
          Lorem Ipsum is simply dummy text of the printin and typesetting
          industry. Lorem Ipsum <br /> has been the industry's standard dummy
          text ever since the 1500s, the industry's <br /> standard dummy text
          ever since the 1500s, typesetting industry. the industry's standard
          <br />
          dummy text ever since the 1500s, typesetting industry.
        </p>
        <button className="btn primary bg-[var(--blue)] text-[var(--white)] p-2 ps-3 pe-3 rounded">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
