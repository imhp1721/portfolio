const words = [
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

const MarqueeFeature = () => {
  const marqueeDuration = "45s";
  const wordAmount = words.length;

  return (
    <section className="marquee">
      {words.map((word, index) => (
        <p
          key={`word${index}`}
          className={`word word${index + 1}`}
          style={{
            animationDelay: `calc(${marqueeDuration} / ${wordAmount} * (${
              wordAmount - index - 1
            }) * -1)`,
          }}
        >
          {word}
        </p>
      ))}
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
