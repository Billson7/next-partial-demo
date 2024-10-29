import React, { type FC } from "react";
import { getPlanetDetails } from "../utils/get-planet-details";

type Planets = {
  name: string;
};

export const PlanetDetails: FC = async () => {
  const data = await getPlanetDetails();

  return (
    <div>
      {data.results.map((planet: Planets) => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
        </div>
      ))}
    </div>
  );
};
