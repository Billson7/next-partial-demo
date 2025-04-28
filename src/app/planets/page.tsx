import { Suspense } from "react";
import styles from "../page.module.css";
import { PlanetDetails } from "../ui/planet-details";
import { PlanetHero } from "../ui/planet-hero";
import Loading from "./loading";

export default async function Page() {
  return (
    <main className={styles.page}>
      <PlanetHero />
      <Suspense fallback={<Loading />}>
        <PlanetDetails />
      </Suspense>
    </main>
  );
}
