//img imports

import img1 from "../assets/busbjerg/1.jpg";
// import img2 from "../assets/busbjerg/2.jpg";
// import img3 from "../assets/busbjerg/3.jpg";
// import img4 from "../assets/busbjerg/4.jpg";
// import img5 from "../assets/busbjerg/5.jpg";
// import img6 from "../assets/busbjerg/6.jpg";
// import img7 from "../assets/busbjerg/7.jpg";
// import img8 from "../assets/busbjerg/8.jpg";
// import img9 from "../assets/busbjerg/9.jpg";
// import img10 from "../assets/busbjerg/10.jpeg";
// import img11 from "../assets/busbjerg/11.jpg";
// import img12 from "../assets/busbjerg/12.jpg";
// import img13 from "../assets/busbjerg/13.jpg";
// import img14 from "../assets/busbjerg/14.jpg";
// import img15 from "../assets/busbjerg/15.jpg";
// import img16 from "../assets/busbjerg/16.jpg";

export default function ImageCarousel() {
  return (
    <section className="img_carousel">
      <div className="carousel">
        <img src={img1} alt="" />
      </div>
      <div className="txt">
        <h4>Busbjerg Spillene</h4>
        <p>Amatørteater - Musical</p>
      </div>
    </section>
  );
}
