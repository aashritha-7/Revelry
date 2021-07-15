import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>

      <MDBCarousel
        interval={9900}
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
        onHoverStop={true}	
      >
        <MDBCarouselInner>
        
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 home__image"
                src="https://cdn.shopify.com/s/files/1/0250/5696/8738/files/DESKTOP_SLIDESHOW_LOWRES_1440x.jpg?v=1620316825"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 home__image"
                src="https://i.ebayimg.com/images/g/ZNwAAOSwcuJfIpcl/s-l1600.webp"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 home__image"
                src="https://promotions.newegg.com/acc/21-0310/1920x360.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100 home__image"
                src="https://cdn.shopify.com/s/files/1/0297/6313/files/050321_Homepage_Header_DESKTOP.jpg?v=1620152110"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

 export default CarouselPage;