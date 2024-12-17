import React from "react";
import { Link } from "react-router-dom";

const HeroCard = React.memo(({ hero }) => (
  <Link to={`/hero/${hero.id}`}>
    <div className="p-4 border rounded shadow-lg">
      <img
        src={hero.image.url}
        alt={hero.name}
        className="object-cover w-full h-56"
      />
      <h2 className="mt-2 text-xl">{hero.name}</h2>
    </div>
  </Link>
));

export default HeroCard;
