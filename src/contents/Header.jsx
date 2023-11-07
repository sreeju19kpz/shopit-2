import React, { useState } from "react";
import { profileItemsList } from "./Lists/profileItemsbtn";
import UserButtons from "./Components/UserButtons";
import Searchbar from "./Components/Searchbar";
import useShowPanels from "./customHooks/useShowPanels";
import MobileNavbar from "../MobileSpecific/ToggleMobileNavbar";
import BottomPanel from "../MobileSpecific/BottomPanel";
import Navbar from "./Components/Navbar";
import SideButton from "./Components/SideButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Header = () => {
  const { currentState } = useShowPanels();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const ele2 = document.getElementById("mobile-nav-panel");
  const ele = document.getElementById("layer");
  const pathName = location.pathname;
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const direct = () => {
    navigate("/search");
  };

  return (
    <>
      <div id="layer" className="default width-100-p z-ind-3">
        {ele && <MobileNavbar state={toggle} close={() => setToggle(false)} />}
      </div>
      <header
        id="header"
        className="default flex flex-dir-col ali-ite-cnt z-ind-1 mak-ele-uns  "
      >
        <div className="default flex flex-gro-1 width-100-p  pos-fix-ite ">
          <div
            className={`default flex ${
              currentState === "fullWidth" || currentState === "highWidth"
                ? "flex-dir-row"
                : ""
            } flex-gro-1 justify-con-cnt ali-ite-cnt  min-hei-60-px   bg-col-whi z-ind-1 `}
          >
            <div className="default  flex-shr-1 flex-dir-row width-100-p max-wid-1900-px ali-ite-cnt">
              <div
                className={`default flex-shr-1 ${
                  currentState === "mediumWidth" ? "" : "flex-gro-1"
                } ${
                  currentState === "fullWidth" || currentState === "highWidth"
                    ? "flex-ali-end"
                    : "flex-ali-str"
                }`}
              >
                <div className="default flex-dir-row ">
                  <div className="default  flex-ali-str ">
                    <SideButton close={() => setToggle((toggle) => !toggle)} />
                  </div>
                  {currentState === "verylowWidth" &&
                    pathName !== "/" &&
                    pathName !== "/home" && (
                      <div className="default wid-60-px ali-ite-cnt justify-con-cnt ">
                        <button
                          onClick={back}
                          className="default wid-33-px hei-33-px ali-ite-cnt justify-con-cnt background-col-none "
                        >
                          <span className="default wid-22-px hei-22-px">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    )}
                  <Link
                    to={"/"}
                    className={`default wid-80-px text-dec-non ${
                      currentState === "lowWidth" ||
                      currentState === "verylowWidth"
                        ? "ali-ite-cnt"
                        : "flex-ali-end"
                    }`}
                  >
                    <div
                      className={`default flex  ali-ite-cnt hei-60-px justify-con-cnt padd-lef-10-px `}
                    >
                      <span className="default font-col-black font-siz-20-px font-wei-500 ">
                        EShop
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <>
                {!(
                  currentState === "verylowWidth" || currentState === "lowWidth"
                ) && (
                  <div
                    id="large-screen-searchBar"
                    className="default flex-shr-1 flex-gro-1 ali-ite-cnt max-wid-800-px"
                  >
                    <Searchbar />
                  </div>
                )}
              </>
              <div
                className={`default flex-dir-row flex-shr-1 flex-ali-end ${
                  !(
                    currentState === "lowWidth" ||
                    currentState === "mediumWidth" ||
                    currentState === "verylowWidth"
                  ) && "flex-gro-1"
                }`}
              >
                <>
                  {(currentState === "verylowWidth" ||
                    currentState === "lowWidth") && (
                    <div
                      className={`default ${
                        currentState === "verylowWidth"
                          ? "wid-60-px"
                          : "wid-33-px"
                      }  ali-ite-cnt justify-con-cnt`}
                    >
                      <div className="default wid-33-px hei-33-px ali-ite-cnt justify-con-cnt">
                        <button
                          onClick={direct}
                          className="default wid-22-px hei-22-px background-col-none "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </>
                {currentState !== "verylowWidth" && (
                  <div
                    className={`default  flex-shr-1 ${
                      currentState === "fullWidth" ||
                      currentState === "highWidth"
                        ? "flex-ali-str flex-gro-1"
                        : "flex-ali-end"
                    }`}
                  >
                    <div className="default wid-200-px flex flex-dir-row ">
                      {profileItemsList.map((item) => {
                        const { name, url, svg } = item;
                        return (
                          <UserButtons
                            key={uuidv4()}
                            name={name}
                            url={url}
                            svg={svg}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Navbar />
        </div>
        {ele2 && <BottomPanel />}
      </header>

      <div
        className={`default ${
          currentState === "fullWidth" ||
          currentState === "highWidth" ||
          currentState === "mediumWidth"
            ? "hei-120-px "
            : "hei-60-px "
        } `}
      ></div>
    </>
  );
};

export default Header;
