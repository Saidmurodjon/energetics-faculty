import React from "react";

import Data from "../data/Data";

const Footer = () => {


  return (
    <>
      {Data ? (
        <footer className="bg-white sm:p-6 dark:bg-[#34495E]">
     
          {/* <hr className="border-[#ffffffb4] sm:mx-auto dark:border-[#797979] w-full lg:my-4" /> */}
          <div className="flex items-center sm:justify-between">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400 mx-auto">
              {Data.footer.createdBy}
              <a
                className="text-white font-semibold hover:shadow-sm "
                rel="noopener noreferrer"
                href="https://saidmurod.uz/"
                target="_blank"
              >
                {" "}
                “OPTIMUM DEVELOPMENT”
              </a>
            </span>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
