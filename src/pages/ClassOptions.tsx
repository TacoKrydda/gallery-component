import Gallery from "../components/Gallery";
import { SeedData } from "../data/SeedData";

function ClassOptions() {
  return (
    <section>
      <h1>ClassOptions</h1>
      <Gallery items={SeedData} />
    </section>
  );
}

export default ClassOptions;
