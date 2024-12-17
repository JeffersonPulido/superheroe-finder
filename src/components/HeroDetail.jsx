import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchHeroById } from "../api/superheroesApi";

export default function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHero = async () => {
      setLoading(true);
      const data = await fetchHeroById(id);
      setHero(data);
      setLoading(false);
    };

    getHero();
  }, [id]);

  if (loading)
    return <p className="mt-10 text-center">Cargando detalle de heroe...</p>;

  return (
    <div className="max-w-4xl p-4 mx-auto">
      <Link to="/" className="inline-block mb-4 font-bold text-blue-500">
        Volver al inicio
      </Link>
      <div className="flex flex-col items-center overflow-hidden border rounded-lg shadow-lg md:flex-row">
        {/* IMAGEN */}
        <img
          src={hero.image.url}
          alt={hero.name}
          className="object-cover w-full h-64 pl-6 md:w-1/3 "
        />
        {/* INFORMACION */}
        <div className="w-full p-6 md-w-2/3">
          {/* NOMBRE GENERAL */}
          <h1 className="mb-4 text-3xl font-bold">{hero.name}</h1>
          {/* POWERSTATS */}
          <section className="p-4 m-4 border rounded">
            <h2 className="mb-2 text-xl font-semibold">Powerstats</h2>
            <ul className="grid grid-cols-2 gap-2 mb-4">
              {Object.entries(hero.powerstats).map(([key, value]) => (
                <li key={key} className="text-gray-700 capitalize">
                  <strong>{key}: &nbsp;</strong> {value}
                </li>
              ))}
            </ul>
          </section>
          {/* BIOGRAPHY */}
          <section className="p-4 m-4 border rounded">
            <h2 className="mb-2 text-xl font-semibold">Biography</h2>
            <p>
              <strong>Nombre completo:&nbsp;</strong>{" "}
              {hero.biography["full-name"]}
            </p>
            <p>
              <strong>Alias:&nbsp;</strong> {hero.biography.aliases.join(", ")}
            </p>
            <p>
              <strong>Editorial:&nbsp;</strong> {hero.biography.publisher}
            </p>
            <p>
              <strong>Primera aparicion:&nbsp;</strong>{" "}
              {hero.biography["first-appearance"]}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
