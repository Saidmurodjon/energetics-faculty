import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineX, HiOutlineChevronUp } from "react-icons/hi";
import Data from "../data/Data";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  // const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= 500) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // const WSW = window.screen.width;
  const Navigate = (elem) => {
    navigate(`/${elem.slug}`);
  };
  
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {Data ? (
        <div className="shadow-md sticky top-0 bg-white z-50">
          {/* scroll to top start*/}
          <div
            onClick={() => scrollToTop()}
            className={`${
              visible ? "hidden" : "flex"
            } animate-bounce cursor-pointer w-[44px] h-[44px] bg-white shadow-md hover:shadow-lg fixed bottom-4 right-4 rounded-full mx-auto items-center hover:border`}
          >
            <HiOutlineChevronUp className="mx-auto w-4/6 h-4/6 font-thin text-[#1F3D9D]" />
          </div>
          {/* scroll to top end*/}

          {/* yuqorida chiquchi ma'lumotlar uchun start */}
          {/* {visible ? <Info /> : false} */}
          {/* yuqorida chiquchi ma'lumotlar uchun end */}
          <div className="container mx-auto px-2 max-w-[75rem]">
            {/* navbar brend va category */}
            <div className="w-full inline-block border-blue-500">
              <div className="float-left inline">
                <Link to={`/`}>
                  <img
                    className="cursor-pointer md:w-[108px] w-[88px]"
                    src={"./assets/energy.jpg"}
                    alt=""
                  />
{/* 
          <h1 className="text-3xl text-green-700 font-semibold">Farg'ona Politexnika Instituti</h1>
          <h2 className="text-2xl text-green-700 font-semibold">Energetika fakulteti</h2> */}
                </Link>
              </div>
              <div className="hidden md:float-right md:contents">
                {Data
                  ? Data.category.map((elem) => (
                      <span
                        key={elem.slug}
                        onClick={() => Navigate(elem)}
                        className="md:float-right mt-6 align-middle text-[#333333] text-[#16px] lg:ml-14 md:ml-8 font-semibold cursor-pointer hover:text-[#00A59C]"
                      >
                        {elem.name}
                      </span>
                    ))
                  : false}
              </div>
              <div
                onClick={() => setModal(!modal)}
                className={`md:hidden float-right w-[43px] h-[43px] mt-[21px] shadow-md hover:shadow-lg cursor-pointer right-2`}
              >
                <RiMenu3Fill className="mx-auto mt-[25%]" />
              </div>
            </div>
            {/* navbar brend va category */}

            {/* modal start */}
            {modal ? (
              <div className="w-full h-full backdrop-blur-sm bg-white/30  overflow-y-auto overflow-x-hidden fixed top-[85px] right-0 left-0 z-50 inset-0 h-modal md:h-full">
                <div className="w-5/6 bg-white mx-auto mt-4 rounded-sm shadow-md">
                  <HiOutlineX
                    onClick={() => setModal(false)}
                    className="float-right mr-4 mt-4 cursor-pointer"
                  />
                  {Data.category.map((elem) => (
                    // <Link key={elem.slug} to={`/${elem.slug}`}>
                    <h1
                      key={elem.slug}
                      onClick={() => Navigate(elem)}
                      className="mx-3 py-3 align-middle text-[#333333] text-[#16px] lg:ml-14 md:ml-8 font-semibold cursor-pointer hover:text-[#00A59C]"
                    >
                      {elem.name}
                    </h1>
                    // </Link>
                  ))}
                </div>
              </div>
            ) : (
              false
            )}
            {/* modal end */}
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default Navbar;
