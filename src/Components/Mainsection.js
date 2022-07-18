// import React from 'react'
import "../Assets/allindex.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";

// import Button from "./Button
import Login from "./Login";
const Mainsection = () => {
  return (
    <>
      <section className="Main-section">
        {/* side bar wher e button  */}
        <section className="sidebar">
          <ul className="sideone">
            <button
              className="login"
              onClick={() => {
                Login.push("/Login");
              }}
            >
              LOGIN
            </button>
            <div className="Sidenavbar">
              <li>
                <FaHome size={20} /> Home
              </li>
              <li>
                <MdVideoLibrary size={20} /> library
              </li>
              <li>
                <FaPuzzlePiece size={20} /> Challenges
              </li>
              <li>
                <MdOutlineOndemandVideo size={20} /> Demos & tutorials
              </li>
              <li>
                <FcCustomerSupport size={20} /> Support
              </li>
            </div>
          </ul>
        </section>
        <section className="mainbar">
          <div className="container">
            <h1 className="publiclibrary">Public Library</h1>
            <div className="container1">
              <div className="row">
                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                {/*................................... 2/............................................ */}

                {/*                     row five with 2 colums              */}
                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                {/*................................... 2/............................................ */}

                {/*                     row five with 3 colums              */}

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                {/*................................... 2/............................................ */}

                {/*                     row five with 4 colums              */}
                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                {/*................................... 2/............................................ */}

                {/*                     row five with 5 colums              */}
                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row1">
                    <img
                      src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                      width="100%"
                      className="pp3"
                      alt="BigCo Inc. logo"
                    />
                  </div>
                  <div className="row2">
                    <div className="row row-cols-4">
                      <div className="col-md-3 ">
                        <img
                          src={process.env.PUBLIC_URL + "Images/p3.jpg"}
                          width="100%"
                          className="img_small"
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="col-md-7">
                        <span className="span">
                          Lorem Ipsum is simply dummy text of thes and
                          typesetting.
                        </span>
                      </div>
                      <div className="col-md-1 "></div>
                      <div className="col-md-1 ">
                        <span>&#x22EE;</span>
                      </div>
                      <div className="col-md-3 "></div>
                      <div className="col-md-9 ">27k views 1 day ago</div>
                      {/* <div className="col-md-1 "></div> */}
                      <div className="col-md-3 "></div>
                      <div className="co-md-7 ">
                        <span>&#x27A6; </span>
                        <span>&#10084;</span>
                        <span>&#128393;</span>
                      </div>
                      <div className="co-md-1 "></div>
                      <div className="co-md-1 "></div>
                    </div>
                  </div>
                </div>

                {/*................................... 2/............................................ */}

                {/*                     row five with 2 colums              */}

                {/* {,.......................} */}
              </div>
            </div>
          </div>

          {/* </div> */}
          {/* </div> */}

          {/* <div className="row mt-3">
            <div className="col-md-33">
                <div className="row">
                    <div className="col-md-312"></div>
                </div>
                <div className="row mt-3"></div>
                <div className="row"></div>
            </div>
          </div> */}
        </section>
      </section>
    </>
  );
};

export default Mainsection;
