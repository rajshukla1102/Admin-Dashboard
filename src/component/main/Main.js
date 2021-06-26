import "./Main.css";
// import hello from "../../assets/hello.svg";
// import Chart from "../charts/Chart";
import * as Icons from "react-icons/fa";
import { DoughnutChart } from "../chart/DoughnutChart";
import { LineChart } from "../chart/LineChart";
import * as cg from "react-icons/cg";

import { PieChart } from "../chart/PieChart";
import hello from "../../assets/hello.svg";
// import ProgressBarChart from "../chart/ProgressBarChart";

const Main = () => {
  return (
    <>
      <main>
        <div className="main__title">
          <div className="main__greeting">
            <h1>Dashboard</h1>
            <p style={{ color: "white" }}>
              Monday <span style={{ color: "blue" }}> 02 July 2021 </span>
            </p>
          </div>
          {/* <div className="rightAdd">
              <div className="addButton">
                  <button className='smallBtn'>+ Add</button>
              </div>
              <div className="search">
                  <input type="search" name="Search" id="" />
              </div>
          </div> */}
        </div>
        <div className="mainClass" id="main">
          <div className="main__container">
            <div className="firstColumn">
              <div className="cardBox">
                <div className="card">
                  <div>
                    <div className="application ">Total Application</div>
                    <div className="number">130</div>
                    <div className="arrow-down">-40%</div>
                  </div>
                  <div className="charts">
                    <DoughnutChart />
                  </div>
                </div>
                <div className="card">
                  <div>
                    <div className="application ">Total Application</div>
                    <div className="number">130</div>
                    <div className="arrow-down">-40%</div>
                  </div>
                  <div className="chart-item">
                    <DoughnutChart />
                  </div>
                </div>
                <div className="card">
                  <div>
                    <div className="application">Total Application</div>
                    <div className="number">130</div>
                    <div className="arrow-down">-40%</div>
                  </div>
                  <div className="charts">
                    <DoughnutChart />
                  </div>
                </div>
              </div>
              <div
                className="cardBoxBottom"
                >
                <div className="bigCard">
                  <div className="graph-head">
                    <div className="application">Application Recieved</div>
                    <div className="graph-item">
                      <ul className="graph-link application">
                        <li>This year</li>
                        <li>This year</li>
                        <li>This year</li>
                      </ul>
                    </div>
                  </div>
                  <div className="charts">
                    <LineChart />
                  </div>
                </div>
                <div className="smallCard">
                  <div className="application">Total Applications</div>
                  <div className="progressCard">
                    <div className="progressText">
                      <ul>
                        <li>anb</li>
                        <li>anb</li>
                        <li>anb</li>
                        <li>anb</li>
                      </ul>
                    </div>
                    <div className="progressChart">
                      <ul>
                        {/* <li><ProgressBarChart/></li>
                        <li><ProgressBarChart/></li>
                        <li><ProgressBarChart/></li>
                        <li><ProgressBarChart/></li> */}
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>
                        <li>aaaaaaaaaa</li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cardBoxBottom"
                >
                <div className="bigCardBottom">
                  <div className="graph-head-bottom">
                    <div className="application">Application Recieved</div>
                    <div className="graph-item-bottom">
                      <ul className="graph-link-bottom application">
                        <li>This year</li>
                        <li>This year</li>
                      </ul>
                    </div>
                  </div>
                  <div className="fourBox">
                    <div className="box">
                      <div>
                        <div className="application ">Total Application</div>
                        <div className="arrow-down">-40%</div>
                        <div className="number">130</div>
                      </div>
                    </div>
                    <div className="box">
                      <div>
                        <div className="application ">Total Application</div>
                        <div className="arrow-down">-40%</div>
                        <div className="number">130</div>
                      </div>
                    </div>
                    <div className="box">
                      <div>
                        <div className="application ">Total Application</div>
                        <div className="arrow-down">-40%</div>
                        <div className="number">130</div>
                      </div>
                    </div>
                    <div className="box">
                      <div>
                        <div className="application ">Total Application</div>
                        <div className="arrow-down">-40%</div>
                        <div className="number">130</div>
                      </div>
                    </div>
                  </div>
                  <div className="buttonBottom">
                    <div>
                      <button className="btn blue">Start new campaign</button>
                    </div>
                    <div>
                      <button className="btn red">Start new campaign</button>
                    </div>
                  </div>
                </div>
                <div className="smallCard">
                  <div className="application">Total Applications</div>
                  <div className="progressCard">
                    <div className="progressText"></div>
                    <div className="progressChart">
                      <PieChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__container">
            <div className="secondColumn">
              <div className="cardBoxSide">
                <div className="card">
                  <div className="upper">
                    <div className="sideHeadContent application">
                      Subscribe my channel <p>Hello everyone me</p>
                    </div>
                    <div className="image">
                      <img src={hello} alt="hello" />
                    </div>
                  </div>
                  <div>
                    <div className="downSide">

                    <div className='application'>
                      Application
                    </div>
                    <div className="progressCardSide">

                      <div className="progressText">
                        <ul style={{listStyle:"none"}}>
                          <li ><cg.CgProfile/></li>
                          <li><cg.CgProfile/></li>
                          <li><cg.CgProfile/> </li>
                          <li><cg.CgProfile/></li>
                          <li><cg.CgProfile/></li>
                          <li><cg.CgProfile/></li>
                          
                    
                         
                        </ul>
                      </div>
                      <div className="progressChart">
                        <ul>
                          <li><Icons.FaPhoneAlt/></li>
                          <li><Icons.FaPhoneAlt/></li>
                          <li><Icons.FaPhoneAlt/></li>
                          <li><Icons.FaPhoneAlt/></li>
                          <li><Icons.FaPhoneAlt/></li>
                          <li><Icons.FaPhoneAlt/></li>
                       
                        </ul>
                      </div>
                      <div className="progressChart">
                        <ul>
                        <li><Icons.FaPhoneAlt/></li>
                        <li><Icons.FaPhoneAlt/></li>
                        <li><Icons.FaPhoneAlt/></li>
                        <li><Icons.FaPhoneAlt/></li>
                        <li><Icons.FaPhoneAlt/></li>
                        <li><Icons.FaPhoneAlt/></li>
                         
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

//           </div>
//           <div className="card card-unique">
//             <div className="card_inner">
//               <div >
//                 <h4 className="text-title" style={{paddingBottom:"25px"}}> Total Application</h4>
//                 <p className="font-bold text-title" style={{ fontSize: "20px",paddingBottom:"25px"}}>578</p>
//                                     <p className="text-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
//                         <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z"/>
//                       </svg><span>-3.2%</span> </p>
//               </div>

//             </div>
//             <div className="card_inner">
//             <DoughnutChart/>
//             </div>

//           </div>
