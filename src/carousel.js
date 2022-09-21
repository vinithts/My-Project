import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import Footer from './footer';
function IndividualIntervalsExample() {
return (
 <>
     <Carousel>
     <Carousel.Item interval={1000}>
       <img
           className="d-block w-100"
           src="https://www.expressdeliveryservices.in/wp-content/uploads/2022/06/BEST-COURIER-SERVICE-PROVIDER-IN-INDIA-1-1.png"
           alt="First slide"
       />
     <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://ps.visayi.com/UsImgs/bfd07f53baf9438e90f9207fbff29e8c.jpg" alt="The Chinese company will help you re-evaluate the economic guarantee and issue a plan in two weeks"
         
        />
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
         <img 
         className="d-block w-100" 
         src="https://ps.visayi.com/UsImgs/828a65ee10c24b6baae9ee1802674dfe.jpg" alt="Canadian Employer Sponsored Immigration"
       
        />
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img 
         className="d-block w-100" 
         src="https://ps.visayi.com/UsImgs/7346379caf7a4a8b80b3c777efc0fc2a.jpg" alt="Canadian Employer Sponsored Immigration"
       
        />
      <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img 
         className="d-block w-100" 
         src="https://ps.visayi.com/UsImgs/0db35a961daf4f5d9246630ad36e3664.jpg" alt="Canadian Employer Sponsored Immigration"
       
        />
      <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img 
         className="d-block w-100" 
         src="https://ps.visayi.com/UsImgs/f0fbb3ecc2b14ee4a2f26935c881f0f7.jpg" alt="Canadian Employer Sponsored Immigration"
       
        />
      <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <Footer/>
   </>
  );
}

export default IndividualIntervalsExample;









/* <div className="main">
<div id="slideshow">
<div className="swiper-container swiperSlideshow">
      <div className="swiper-wrapper">
           <div className="swiper-slide">
           <a href="http://www.visayi.com/StudyAbroad/Japan/Program/10042.htm" target="_blank">
           <img width="100%" src="https://www.expressdeliveryservices.in/wp-content/uploads/2022/06/BEST-COURIER-SERVICE-PROVIDER-IN-INDIA-1-1.png" alt="Paid Study Abroad Program for Nursing Professionals in Japan"/>
           </a>
           </div>
           <div className="swiper-slide">
            <a href="/Immigration/News/ymgl/101109.htm" target="_blank">
     <img  src="https://ps.visayi.com/UsImgs/bfd07f53baf9438e90f9207fbff29e8c.jpg" alt="The Chinese company will help you re-evaluate the economic guarantee and issue a plan in two weeks"/>
                    </a>
                    </div>
                    <div className="swiper-slide"><a href="" target="_blank">
    <img width="100%" src="https://ps.visayi.com/UsImgs/3284ab7d34e44db8a3458bbe830aa057.jpg" alt="US F1 student visa has been restored"/>
                            </a>
                            </div>
    <div className="swiper-slide">
        <a href="" target="_blank">
            <img  src="https://ps.visayi.com/UsImgs/880f64e2dc2a4ad9ad9e7b8dac79d8c9.jpg" alt="Taishan, Jiangmen, Kaiping overseas Chinese hometown visa medical examination car service"/>
                </a>
                </div>
                <div className="swiper-slide">
                    <a href="http://family-immigration.vip.visayi.com/" target="_blank">
<img  src="https://ps.visayi.com/UsImgs/198bd67c1614469989f0bbbc9db79873.jpg" alt="Chinese company family immigration to the United States"/>
    </a>
    </div>
    <div className="swiper-slide">
        <a href="http://visa-juqianzaiqian.vip.visayi.com/" target="_blank">
            <img  src="https://ps.visayi.com/UsImgs/70f229ebf0d849ca9ffe3defee63dfbb.jpg" alt="US visa refusal and re-approval service"/>
      </a>
                </div>
                <div className="swiper-slide">
                    <a href="http://canada-peqschool.vip.visayi.com/" target="_blank">
     <img  src="https://ps.visayi.com/UsImgs/22bd7d0594ce4a56a376f39baf00e0aa.jpg" alt="Canada PEQ study abroad immigration program"/>
                            </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="http://canada-agriculture.vip.visayi.com/" target="_blank">
    <img  src="https://ps.visayi.com/UsImgs/f0fbb3ecc2b14ee4a2f26935c881f0f7.jpg" alt="Canadian Agriculture Project"/>
     </a>
                                        </div>
    <div className="swiper-slide">
        <a href="http://canada-immigration.vip.visayi.com/" target="_blank">
            <img  src="https://ps.visayi.com/UsImgs/7346379caf7a4a8b80b3c777efc0fc2a.jpg" alt="Canadian Employer Sponsored Immigration"/>
                </a>
                </div>
                <div className="swiper-slide">
                    <a href="http://cyprus-immigrants.vip.visayi.com/" target="_blank">
    <img  src="https://ps.visayi.com/UsImgs/0db35a961daf4f5d9246630ad36e3664.jpg" alt="Cyprus Investment Immigration"/>
        </a>
        </div>
        <div className="swiper-slide">
    <a href="" target="_blank">
 <img src="https://ps.visayi.com/UsImgs/828a65ee10c24b6baae9ee1802674dfe.jpg" alt="U.S. study abroad program"/>
                    </a>
                    </div>
           
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
</div>
</div> */


