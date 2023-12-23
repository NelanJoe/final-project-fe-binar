import BaseLayout from "@/layouts/base.layout";

import Category from "../components/category";
import Hero from "../components/hero";
import CoursesPopular from "../components/courses-popular";

const Home = () => {
  return (
    <BaseLayout>
      <main className="min-h-scree">
        <Hero />
        <Category />
        <CoursesPopular />
      </main>
    </BaseLayout>
  );
};

export default Home;
