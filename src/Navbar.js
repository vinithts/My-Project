import React from 'react'
// import IndividualIntervalsExample from './carousel'
// import Blogs from './blogs'
// import Cards from './cards'
// import Country from './country'
import "./Navbar.css"
// import Global from './global'
// import End from './end'
import { Link } from 'react-router-dom'
import { BsCheckCircleFill, BsFillGiftFill } from "react-icons/bs";
// import Footer from './footer'
function Navbar() {
  //     var ua = navigator.userAgent,
  //     isWindowsPhone = /(?:Windows Phone)/.test(ua),
  //     isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
  //     isAndroid = /(?:Android)/.test(ua),
  //     isFireFox = /(?:Firefox)/.test(ua),
  //     isChrome = /(?:Chrome|CriOS)/.test(ua),
  //     isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
  //     isPhone = /(?:iPhone)/.test(ua) && !isTablet,
  //     isPc = !isPhone && !isAndroid && !isSymbian;
  //     return {
  //         isTablet: isTablet,
  //         isPhone: isPhone,
  //         isAndroid: isAndroid,
  //         isPc: isPc
  //     };

  // if (os.isAndroid || os.isPhone) {
  //     document.location.href = "http://4g.visayi.com/";
  // }
  // $(function() {
  //     $(window).bind("scroll", function() {
  //         var sTop = $(window).scrollTop();
  //         var sTop = parseInt(sTop);
  //         if (sTop >= 500) {
  //             if ($(".bottomBanner").is(":visible")) {
  //                 try {
  //                     $(".bottomBanner").slideUp();
  //                 } catch (e) {
  //                     $(".bottomBanner").hide();
  //                 }
  //             }
  //         }
  //         else {
  //             if (!$(".bottomBanner").is(":visible")) {
  //                 try {
  //                     $(".bottomBanner").slideDown();
  //                 } catch (e) {
  //                     $(".bottomBanner").show();
  //                 }
  //             }
  //         }
  //     });
  // }) 
  return (
    <>

      <div >
        <body>
          <div id="fixPara">
            <div className="g-fid">
              <div className="g-her-top">
                <div className="g-cer-blk">
                  <ul className="g-left">
                    <li>Are you still worried about immigration, study abroad and visa? 【DUBAI】Help you!</li>
                  </ul>
                  <ul className="g-right">
                    <li className="g-mobile J_hdt_mobile">
                      <Link to="/" className="mob" >Mobile Terminal</Link>
                      {/* <div className="QrCode">
                  <div>
                    <img src="/BImg/WeChat.jpg"/>
                    <p>Official Mini Program for Chinese Going Abroad</p>
                        </div>
                        <div>
                            <img src="/BImg/Wap.png"/>
                            <p>The official mobile phone network of Chinese going abroad</p>
                        </div>
                        <div>
                            <img src="/BImg/topCode.jpg"/>
                            <p>Official service number for Chinese going abroad</p>
                        </div>
                    </div> */}
                    </li>
                    {/* <li className="uwelcome"><a href="">Hello </a></li>
                <li className="uperson" ><a href="">personal center</a></li>
                <li className="uout" ><a href="">quit</a></li> */}
                    {/* <li className="HotLine" ><a href="">Free service hotline for Chinese going abroad：<span>400-166-2286</span></a></li> */}
                    <li className="ulogin" >
                      <Link  to="/login" className="mob" rel="nofollow">Login</Link> </li>
                    <li className="ureg" >
                      <a className="mob" rel="nofollow" href="">Register</a></li>
                  </ul>
                </div>
              </div>
              <div className="g-header J_header" >
                <div className="g-cer-blk">
                  <h1 className="g-logo">
                    <a href="/" target="_blank" className="g-my-logo"></a></h1>

                  <div>
                    <div className="g-lgright">
                      <div className="g-top">
                        <img src="http://www.visayi.com/BImg/hotline.png" alt="Chinese company 400 phone" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="menuBar">
              <div className="mcent">
                <div className="menuBarLeft">
                  <ul>
                    <li className="active">
                      <Link to="/carousel" className="home">Express Home</Link>
                      </li>
                    <li className="dropdown">
                      <Link to="/Profile" className="home">Services</Link>
                      <ul className="submenu">
                        <div className="submenuBox">
                          <div className="boxLeft">
                            <img src="/BImg/lxbanner.png" />
                            </div>
                          <div className="boxRight">
                            <div className="rightBoxL">
                              <div className="menuListBox">
                                <div className="title">Americas</div>
                                <hr />
                                <ul>
                                  <li><a href="/StudyAbroad/USA/">U.S.</a></li>
                                  <li><a href="/StudyAbroad/Canada/">Canada</a></li>
                                  <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="menuListBox">
                                <div className="title">Asia Region</div>
                                <hr />
                                <ul>
                                  <li><a href="/StudyAbroad/Korea/Program/">South Korea</a></li>
                                  <li><a href="/StudyAbroad/Japan/Program/">Japan</a></li>
                                  <li><a href="/StudyAbroad/HongKong/School/">Hong Kong</a></li>
                                  <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="menuListBox">
                                <div className="title">European region</div>
                                <hr />
                                <ul>
                                  <li><a href="/StudyAbroad/England/">U.S.</a></li>
                                  <li><a href="/StudyAbroad/Italy/Program/">Italy</a></li>
                                  <li><a href="/StudyAbroad/Germany/Program/">Germany</a></li>

                                  <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="menuListBox">
                                <div className="title">Oceania Region</div>
                                <hr />
                                <ul>
                                  <li><a href="/StudyAbroad/Australia/">Australia</a></li>
                                  <li><a href="">new Zealand</a></li>
                                  <li className="clearfix"></li>
                              </ul>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div className="rightBoxR rightBoxRabroad">
                              <a href="http://study-facetoface.vip.visayi.com/" target="_blank"><div className="projectBoxLink" ></div></a>
                              <a href=""><div className="projectBoxLink" ></div></a>
                              <a href=""><div className="projectBoxLink" ></div></a>
                              <div className="clearfix"></div> 
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="/cards" className="home">Tracking</Link>
                      <ul className="submenu">
                        <div className="submenuBox">
                          <div className="boxLeft"><img src="/BImg/yiminbanner.png" /></div>
                          <div className="boxRight">
                            <div className="rightBoxL">
                              <div className="menuListBox">
                                <div className="title">Americas</div>
                                <hr />
                                <ul>
                                  <li><a href="/Immigration/USA/">U.S.</a></li>
                                  <li><a href="/Immigration/Canada/">Canada</a></li>
                                 <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="menuListBox">
                                <div className="title">Asia Region</div>
                                <hr />
                                <ul>
                                  <li><a href="/Immigration/Korea/">
                                    South Korea</a></li>
                                  <li><a href="/Immigration/Japan/">Japan</a></li>
                                  <li><a href="/Immigration/Singapore/">Singapore</a></li>

                                  <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="menuListBox">
                                <div className="title">European region</div>
                                <hr />
                                <ul>
                                  <li><a href="/Immigration/Cyprus/">Cyprus</a></li>
                                  <li><a href="/Immigration/Greece/">Greece</a></li>

                                  <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="menuListBox">
                                <div className="title">Oceania Region</div>
                                <hr />
                                <ul>
                                  <li><a href="/Immigration/Australia/">Australia</a></li>
                                  <li><a href="/Immigration/NewZealand/">NewZealand</a></li>
                                  <li><a href="/Immigration/Vanuatu/">Vanuatu</a></li>
                                  <li className="clearfix"></li>
                                </ul>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div className="rightBoxR usaBanner">
                              <a href="http://family-immigration.vip.visayi.com/" target="_blank"><div className="projectBoxLinkUsa" ></div></a>
                              <a href="http://canada-immigration.vip.visayi.com/" target="_blank"><div className="projectBoxLinkUsa" ></div></a>
                              <a href="http://cyprus-immigrants.vip.visayi.com/" target="_blank"><div className="projectBoxLink" ></div></a>
                              <a href="http://greece-immigration.vip.visayi.com/" target="_blank"><div className="projectBoxLink" ></div></a>
                              <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="/country" className="home">Aboutus</Link>
                      <ul className="submenu">
                        <div className="submenuBox">
                          <div className="boxLeft"><img src="/BImg/qzbanner.png" /></div>
                          <div className="boxRight visaBox">
                            <div className="rightBoxL">
                              <div className="visaList">
                                <div className="title">America Visa <i className="fa fa-caret-right" aria-hidden="true"></i></div>
                                <div className="infoBox">
                                  <a href="/Visa/USA/">U.S.</a>
                                  <a href="/Visa/Canada/">Canada</a>
                                  <a href="/Visa/Mexico/">Mexico</a>

                                </div>
                                <div className="clearfix"></div>
                              </div>

                              <div className="visaList">
                                <div className="title">Asian Visa <i className="fa fa-caret-right" aria-hidden="true" ></i></div>
                                <div className="infoBox">
                                  <a href="/Visa/Japan/">Japan</a>
                                  <a href="/Visa/Korea/">Korea</a>
                                  <a href="/Visa/Thailand/">Thailand</a>
                                  <a href="/Visa/Vietnam/">Vietnam</a>

                                </div>
                                <div className="clearfix"></div>
                              </div>

                              <div className="visaList">
                                <div className="title">European visa<i className="fa fa-caret-right" aria-hidden="true" ></i></div>
                                <div className="infoBox">
                                  <a href="/Visa/England/">U.K.</a>
                                  <a href="/Visa/Russia/">Russia</a>
                                  <a href="/Visa/Germany/">Germany</a>

                                </div>
                                <div className="clearfix"></div>
                              </div>

                              <div className="visaList">
                                <div className="title">African visa <i className="fa fa-caret-right" aria-hidden="true" ></i></div>
                                <div className="infoBox">
                                  <a href="/Visa/Algeria/">Algeria</a>
                                  <a href="/Visa/Egypt/">Egypt</a>
                                  <a href="/Visa/Ethiopia/">Ethiopia</a>
                                  <a href="/Visa/Botswana/">Botswana</a>


                                </div>
                                <div className="clearfix"></div>
                              </div>

                              <div className="visaList">
                                <div className="title">Oceania Visa <i className="fa fa-caret-right" aria-hidden="true"></i></div>
                                <div className="infoBox">
                                  <a href="/Visa/Australia/">Australia</a>
                                  <a href="/Visa/NewZealand/">NewZealand</a>
                                  <a href="/Visa/PapuaNewGuinea/">PapuaNewGuinea</a>
                                </div>
                                <div className="clearfix"></div>
                              </div>

                            </div>
                            <div className="rightBoxR">
                              <a href="http://visa-juqianzaiqian.vip.visayi.com/" target="_blank"><div className="projectBoxLink"></div></a>
                              <div className="clearfix"></div>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    {/* <!-- <li className="dropdown-4"><a href="">Featured</a></li> --> */}
                    <li><Link to="/global"className="home">Contactus</Link></li>
                    <li><Link to="/" className="home" target="_blank">Courier</Link></li>
                    <div className="clearfix"></div>
                  </ul>
                </div>
                <div className="menuBarRight">
                  <ul>
                    <li className="active jqMenu"><a className="home" href="http://visa-juqianzaiqian.vip.visayi.com/" target="_blank"><BsCheckCircleFill /><span>refusal to re-apply</span></a></li>
                    <li className="active dropdown"><Link to="/Profile" className="home" ><BsFillGiftFill /><span>Our Company Profile</span></Link>
                      
                    </li>
                    <div className="clearfix"></div>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </body>
      </div>


      {/* <IndividualIntervalsExample />
      <Blogs />
      <Cards />
      <Country />
      <Global />
      <End /> */}
      {/* <Footer/> */}
    </>


  )

}
export default Navbar

