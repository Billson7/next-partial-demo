import { Suspense } from "react";
import Loading from "./loading";
import { PlanetDetails } from "../ui/planet-details";
import { PlanetHero } from "../ui/planet-hero";
import styles from "../page.module.css";

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
