import { Card, CardBody, Divider, Spacer } from '@nextui-org/react';
import type { FC } from 'react';
import { getPlanetDetails } from '../utils/get-planet-details';

type Planets = {
  name: string;
  population: string;
  terrain: string;
};

export const PlanetDetails: FC = async () => {
  const data = await getPlanetDetails();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
        gap: '1rem',
      }}
    >
      {data?.results?.map((planet: Planets) => (
        <div key={planet.name}>
          <Card className="h-[150px] w-[250px]">
            <CardBody className="text-center">
              <h2 className="text-2xl">{planet.name}</h2>
              <Divider className="mx-auto mb-4 w-9/12" />
              <p className="truncate">Population: {planet.population}</p>
              <p className="">Terrain: {planet.terrain}</p>
            </CardBody>
          </Card>
          <Spacer x={4} />
        </div>
      ))}
    </div>
  );
};
