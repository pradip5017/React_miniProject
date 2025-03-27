import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function UncontrolledExample1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="src\assets\image\slider4.webp" alt="" />
        <Carousel.Caption>
        {/* <img src={slider1} alt="" /> */}
        
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img src="src\assets\image\slider5.webp" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img src="src\assets\image\slider4.webp" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="src\assets\image\slider6.webp" alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
     <img src="src\assets\image\slider7.webp" alt="" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample1;