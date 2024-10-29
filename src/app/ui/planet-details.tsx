import React, { type FC } from "react";
import { getPlanetDetails } from "../utils/get-planet-details";
import { Card, CardBody, Divider, Spacer } from "@nextui-org/react";

type Planets = {
  name: string;
  population: string;
};

export const PlanetDetails: FC = async () => {
  const data = await getPlanetDetails();

  return (
    <div>
      {data.results.map((planet: Planets) => (
        <div key={planet.name}>
          <Card>
            <CardBody>
              <h2>{planet.name}</h2>
              <h2>Population: {planet.population}</h2>
            </CardBody>
          </Card>
          <Divider className="my-4" />
          <Spacer x={4} />
        </div>
      ))}
    </div>
  );
};
