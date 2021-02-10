import React,{useState} from 'react';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {Navbar,Nav,Button,Container,Carousel,handleSelect,index,Row,Col} from 'react-bootstrap';
import './App.css';
function App() {
  AOS.init({
    duration: 1200,
  })
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Container >
    <Navbar className="navbar" bg="light" variant="light">
    <Navbar.Brand href="#home"><img className="nav-img" src="https://t3.ftcdn.net/jpg/02/08/65/18/360_F_208651817_0WfyDpxXfIPhGyrWxQiJIIe1N4RHzHOq.jpg"/></Navbar.Brand>

    <Nav className="mr-auto side-nav">
      <Nav.Link className="nav-link" href="#"><a href="#">Home</a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">About </a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">Services</a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">Timings</a></Nav.Link>
      <Nav.Link className="nav-link" href="#"><a href="#">Contact</a></Nav.Link>
      <Button className="button-start"  >View Location </Button>
    </Nav>
    </Navbar>
    </Container>
    <Container fluid>
      <div className="slide1">
        <br/>
      <h5 className="animate__animated animate__backInUp header1" style={{animationDuration:"4s"}}>Lets Build Yourself Up!</h5>
    <h2 className="animate__animated animate__backInUp header2" style={{animationDuration:"4s"}}> A wide variety of training and studio services that have been researched and qualified from all over the world with proven results.
    <br/>
    <Typical
        steps={['Action is the foundational key to all success.', 3000,
        'Well done is better than well said!', 2000,
        'What hurts today makes you stronger tomorrow.',2000,
        'Champion is someone who gets up when they can’t..',2000,
        'You have to think it before you can do it. The mind is what makes it all possible.',2000]}
        loop={Infinity}
        wrapper="b"
      />
      </h2>
     
      </div>
      </Container>
      <div className="slider_div">
      <img src="https://p4.wallpaperbetter.com/wallpaper/692/659/618/man-workout-gym-working-wallpaper-preview.jpg" className="img_first"></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiOd5aUFRzCy3jYxckiMrqCZEe2t_c7AUmA&usqp=CAU" className="img_first"></img>
      <img src="https://pixelz.cc/wp-content/uploads/2018/10/bodybuilding-training-uhd-4k-wallpaper.jpg" className="img_first"></img>
      </div>
      <Container>
      <div className="item" data-aos="slide-up">
       
        <h2>Please Let Us Know About Our Services</h2>
        <div className="inner-item">
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>
          <img className="animate__animated animate__bounce" src="https://junto.digital/wp-content/themes/junto/assets/img/star.svg"/>

        <div>
          <p>The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion</p>
          <p> Arnold Schwarzenegger</p>
        </div>
        </div>
      </div>
      </Container >
      <Carousel  data-aos="slide-up" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="slider-item">
        <img height="1000px" width="20px"
          className="d-block w-100"
          src="https://www.pixel4k.com/wp-content/uploads/2019/01/kai-greene-4k_1547938909.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="animate__animated animate__backInUp">The clock is ticking. Are you becoming the person you want to be</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="1000px" width="20px"
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3 className="animate__animated animate__backInUp">The clock is ticking. Are you becoming the person you want to be</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="1000px" width="20px"
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/460852.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className=" anianimate__animatedmate__backInUp">The clock is ticking. Are you becoming the person you want to be</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
<div class="services-footer">
  <div class="container">
    <div class="row">
      <div class="col-md">
        <div class="footer-logo">
          <img width="200" src="https://t3.ftcdn.net/jpg/02/08/65/18/360_F_208651817_0WfyDpxXfIPhGyrWxQiJIIe1N4RHzHOq.jpg"alt=""/>
        </div>
        <p class="first-para" style={{marginTop:"10%"}}>Waiting to provide you the best <br/>  trainers of the town with best diet  <br/>and exercise on daily basis</p>
      </div>
      <div class="col-md">
        <h5>Locations</h5>
        <p class="first-para"><strong>Karachi</strong></p>
        <p>Shahra e Faisal Road </p>
        <p class="second-para"><strong>Lahore</strong></p>
        <p>Phase 8 Bahria town </p>
      </div>
      <div class="col-md">
       
      </div>
    </div>
    <br/> <br/> <br/>
    <div class="row">
    <div class="col-md-8">
      <div class="copyright">
        <p >Made by Athar Rasool
        </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="footer-fa-right">
      
    </div>
    </div>
    </div>
  </div>
  </div>
  </>

  );
}

export default App;
