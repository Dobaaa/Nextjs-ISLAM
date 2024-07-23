"use client";
import React, { useEffect, useState } from "react";
import { Data } from "../../Data";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";
import CardIcon from "../../assets/CardIcon.png";
import ReactPaginate from "react-paginate";
import Image from "next/image";
const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, SetItemsPerPagge] = useState(4);
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.matchMedia("(max-width: 600px)").matches) {
        SetItemsPerPagge(1);
      } else if (
        window.matchMedia("(min-width: 600px) and (max-width: 1023px)").matches
      ) {
        SetItemsPerPagge(2);
      } else {
        SetItemsPerPagge(4);
      }
    }

    // Run initially
    updateItemsPerPage();

    // Add event listener
    window.addEventListener("resize", updateItemsPerPage);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = Data.slice(offset, offset + itemsPerPage);

  const CardDetails = currentData.map((i) => {
    return (
      <div className="card-container" key={i.id}>
        <div className="card-box bg-white">
          <Image src={i.img} alt="" className="p-2" />
          <div className="card-info flex justify-between ps-3 pe-3">
            <span className="text-[var(--GrayCard)]">
              <FontAwesomeIcon icon={faBookOpen} className="pe-1" />
              {i.info}
            </span>
            <span className="text-[var(--GrayCard)]">
              <FontAwesomeIcon icon={faClock} className="pe-1" />
              {i.time}
            </span>
          </div>
          <h4 className="font-bold ps-3">{i.name}</h4>
          <p className="text-[var(--GrayCard)] ps-3">{i.desc}</p>
          <div className="card-foot flex justify-between items-center p-3">
            <span className="font-bold flex items-center gap-1">
              <Image src={CardIcon} alt="" />
              {i.teacher}
            </span>
            <span className="text-[var(--main)]">{i.price}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 ps-4 pe-4 ">
        {CardDetails}
      </div>
      <div className=" pagination-container flex justify-center text-center relative ">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(Data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination pt-5  "}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Cards;
