const MarqueeFeature = () => {

  return (
    <section className="marquee">
      <p className="word word1">kreativ</p>
      <p className="word word2">organiseret</p>
      <p className="word word3">ansvarsfuld</p>
      <p className="word word4">entusiastisk</p>
      <p className="word word5">detaljeorienteret</p>
      <p className="word word6">ambitiøs</p>
      <p className="word word7">hjælpsom</p>
      <p className="word word8">pålidelig</p>
      <p className="word word9">imødekommende</p>
      <p className="word word10">energisk</p>
      <p className="word word11">praktisk</p>
      <p className="word word12">systematisk</p>
      <p className="word word13">løsningsorienteret</p>
      <p className="word word14">perfektionistisk</p>
      <p className="word word15">vedholdende</p>
      <p className="word word16">omsorgsfuld</p>
      <p className="word word17">reflekterende</p>
    </section>
  );
};

export default MarqueeFeature;

/* import Marquee from "react-fast-marquee";
//The marquee is from: https://www.react-fast-marquee.com/

const MarqueeFeature = () => {
  const marqueeWords = [
    "kreativ",
    "organiseret",
    "ansvarsfuld",
    "entusiastisk",
    "detaljeorienteret",
    "ambitiøs",
    "hjælpsom",
    "pålidelig",
    "imødekommende",
    "energisk",
    "praktisk",
    "systematisk",
    "løsningsorienteret",
    "perfektionistisk",
    "vedholdende",
    "omsorgsfuld",
    "reflekterende",
  ];

  return (
    <Marquee className="marquee" speed={30}>
      <div className="container">
        {marqueeWords.map((word, index) => (
          <p key={index} className="word">
            {word}
          </p>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeFeature; */
