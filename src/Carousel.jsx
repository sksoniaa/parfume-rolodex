import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "pink" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "pink" }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
    <div className="slider-container">
        <Slider {...settings}>
      <div className="card">
        <img src="src/assets/74618w.jpg" alt=""/>
        <div className="card-body">
          <h3>Dolce&Gabbana - light blue</h3>
        </div>
      </div>
      <div className="card">
        <img src="src/assets/3145891166606-2.jpg" alt=""  className="w-100"/>
        <div className="card-body">
          <h3>Chanel - Mademoiselle</h3>
        </div>
      </div>
      <div className="card">
        <img src="src/assets/import_files_61_61be73e7ef3e11e8812300505601354b_4c1aea642cce11eb814a00505601354b.jpg" alt=""  className="w-100"/>
        <div className="card-body">
          <h3>Tom Ford - Santal Blush</h3>
        </div>
      </div>
      <div className="card">
        <img src="src/assets/x3386460100335_3.jpg.pagespeed.ic.Fsa0CUIMoV.jpg" alt=""  className="w-100"/>
        <div className="card-body">
          <h3>Van Cleef & Arpels - Neroli Amara</h3>
        </div>
      </div>
      <div className="card">
        <img src="src/assets/yves-saint-laurent-eau-de-parfum-for-women.jpg" alt="" className="w-100" />
        <div className="card-body">
          <h3>YSL - Libre</h3>
        </div>
      </div>
    </Slider>
    </div>
    </>
  )
}
export default CustomArrows;