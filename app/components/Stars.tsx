"use client";

interface Star {
  top: string;
  left: string;
  delay: string;
}

export default function Stars() {
  const stars: Star[] = Array.from({ length: 80 }, (_, index) => ({
    top: `${(index * 47) % 100}%`,
    left: `${(index * 83) % 100}%`,
    delay: `${(index * 17) % 5}s`,
  }));

  return (
    <div className="stars">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
