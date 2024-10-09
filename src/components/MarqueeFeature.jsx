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
  const marqueeDuration = "60s";
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