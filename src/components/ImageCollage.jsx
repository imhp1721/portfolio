//img imports

import column1img1 from "../assets/krea/1-1.jpg";
import column1img2 from "../assets/krea/1-2.jpg";
import column1img3 from "../assets/krea/1-3.jpg";
import column1img4 from "../assets/krea/1-4.jpg";
import column1img5 from "../assets/krea/1-5.jpg";
import column1img6 from "../assets/krea/1-6.jpg";

import column2img1 from "../assets/krea/2-1.jpg";
import column2img2 from "../assets/krea/2-2.jpeg";
import column2img3 from "../assets/krea/2-3.jpg";
import column2img4 from "../assets/krea/2-4.jpg";
import column2img5 from "../assets/krea/2-5.jpg";
import column2img6 from "../assets/krea/2-6.jpg";

import column3img1 from "../assets/krea/3-1.jpg";
import column3img2 from "../assets/krea/3-2.jpg";
import column3img3 from "../assets/krea/3-3.jpg";
import column3img4 from "../assets/krea/3-4.png";
import column3img5 from "../assets/krea/3-5.jpg";
import column3img6 from "../assets/krea/3-6.jpg";

import column4img1 from "../assets/krea/4-1.jpg";
import column4img2 from "../assets/krea/4-2.jpg";
import column4img3 from "../assets/krea/4-3.jpg";
import column4img4 from "../assets/krea/4-4.jpg";
import column4img5 from "../assets/krea/4-5.jpg";
import column4img6 from "../assets/krea/4-6.jpg";

//HOBBY COLLAGE

export default function ImageCollage() {
  return (
    <section className="img_collage">
      <div className="column1">
        <img src={column1img1} alt="Hjemmesyet dynejakke" />
        <img src={column1img2} alt="Kjole-design skitse" />
        <img src={column1img3} alt="Computersleeve med computer" />
        <img src={column1img4} alt="Patchwork stofnet" />
        <img src={column1img5} alt="Strikket babykjole" />
        <img src={column1img6} alt="Sleeve til Switch" />
      </div>
      <div className="column2">
        <img src={column2img1} alt="Hjemmesyet rygsæk" />
        <img src={column2img2} alt="Mig med mit strikketøj" />
        <img src={column2img3} alt="Hjemmelavede smykker" />
        <img src={column2img4} alt="Hæklet taske med for" />
        <img src={column2img5} alt="Akvarel af hav-motiv" />
        <img src={column2img6} alt="Akvarel af vej med palmer mod solnedgang" />
      </div>
      <div className="column3">
        <img src={column3img1} alt="Habitbukser" />
        <img
          src={column3img2}
          alt="Akvarel af havet med landskab i horisonten"
        />
        <img src={column3img3} alt="Hjemmesyet sommerkjole" />
        <img src={column3img4} alt="Skitse fra café Glad" />
        <img src={column3img5} alt="Patchwork" />
        <img src={column3img6} alt="Reol med låger males" />
      </div>
      <div className="column4">
        <img src={column4img1} alt="Computersleeve" />
        <img src={column4img2} alt="Syprojekt; bæltetaske" />
        <img src={column4img3} alt="Akvarel af snelandskab" />
        <img src={column4img4} alt="Syprojekt; matchende sæt" />
        <img src={column4img5} alt="Hjemmelavede træhylder får olie" />
        <img src={column4img6} alt="Keramik garnskål males" />
      </div>
    </section>
  );
}
