import React, { useState } from "react";
import { profileItemsList } from "./Lists/profileItemsbtn";
import UserButtons from "./Components/UserButtons";
import Searchbar from "./Components/Searchbar";
import useShowPanels from "./customHooks/useShowPanels";
import MobileNavbar from "../MobileSpecific/ToggleMobileNavbar";
import useFetchYScroll from "./customHooks/FetchYScroll";

const FixedHeader = () => {
  const { currentState } = useShowPanels();
  const [toggle, setToggle] = useState(false);
  const ele2 = document.getElementById("mobile-nav-panel");
  const ele = document.getElementById("layer");
  const { isScrollingUp, scrollData } = useFetchYScroll();

  return (
    <>
      {!isScrollingUp && (
        <header
          id="header"
          className="default flex flex-dir-col ali-ite-cnt z-ind-1 "
        >
          <div className="default flex flex-gro-1 width-100-p  ">
            <div
              className={`default flex ${
                currentState === "fullWidth" || currentState === "highWidth"
                  ? "flex-dir-row"
                  : "flex-dir-col"
              } flex-gro-1 justify-con-cnt ali-ite-cnt min-hei-60-px `}
            >
              <div
                className={`default  flex-shr-1 flex-dir-row ${
                  currentState === "fullWidth" || currentState === "highWidth"
                    ? "wid-1900-px"
                    : "width-100-p"
                } ali-ite-cnt`}
              >
                <div
                  className={`default flex-gro-1 flex-shr-1 ${
                    currentState === "fullWidth" || currentState === "highWidth"
                      ? "flex-ali-end"
                      : "flex-ali-str"
                  }`}
                >
                  {" "}
                  <div
                    className={`default flex-dir-row flex-gro-1 flex-shr-1 ${
                      currentState === "fullWidth" ||
                      currentState === "highWidth"
                        ? "flex-ali-end"
                        : "flex-ali-str"
                    }`}
                  ></div>
                  <div className="default flex-dir-row ">
                    {currentState !== "verylowWidth" && (
                      <div className="default wid-60-px flex-ali-str ">
                        <div
                          className={`default flex  ali-ite-cnt hei-60-px   justify-con-cnt ali-ite-cnt`}
                        >
                          <div
                            onClick={() => setToggle((toggle) => !toggle)}
                            className="default flex hei-33-px wid-33-px  justify-con-cnt ali-ite-cnt"
                          >
                            <div className="default flex hei-22-px wid-22-px  justify-con-cnt ali-ite-cnt">
                              <svg
                                viewBox="-1.68 -1.68 27.36 27.36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <path
                                    d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                                    fill="#0F0F0F"
                                  ></path>{" "}
                                  <path
                                    d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
                                    fill="#0F0F0F"
                                  ></path>{" "}
                                  <path
                                    d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                                    fill="#0F0F0F"
                                  ></path>{" "}
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div
                      className={`default wid-60-px  ${
                        currentState === "lowWidth" ||
                        currentState === "verylowWidth"
                          ? "flex-ali-str"
                          : "flex-ali-end"
                      }`}
                    >
                      <div
                        className={`default flex  ali-ite-cnt hei-60-px justify-con-cnt `}
                      >
                        logo
                      </div>
                    </div>
                  </div>
                </div>

                <>
                  {(currentState === "fullWidth" ||
                    currentState === "highWidth") && (
                    <div
                      id="large-screen-searchBar"
                      className="default flex-shr-1 flex-gro-1 ali-ite-cnt max-wid-800-px"
                    >
                      <Searchbar />
                    </div>
                  )}
                </>
                {!(currentState === "verylowWidth") && (
                  <div
                    className={`default flex-gro-1 flex-shr-1 ${
                      currentState === "fullWidth" ||
                      currentState === "highWidth"
                        ? "flex-ali-str"
                        : "flex-ali-end"
                    }`}
                  >
                    <div className="default wid-200-px flex flex-dir-row ">
                      {profileItemsList.map((item) => {
                        const { name, url, svg } = item;
                        return <UserButtons name={name} url={url} svg={svg} />;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default FixedHeader;
