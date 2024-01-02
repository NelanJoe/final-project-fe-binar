import BaseLayout from "@/layouts/base.layout";

import Hero from "../components/hero";
import Category from "../components/category";
import CoursesPopular from "../components/courses-popular";

const Home = () => {
  return (
    <BaseLayout title="Home">
      <main className="min-h-screen">
        <Hero />
        <Category />
        <CoursesPopular />
      </main>
    </BaseLayout>
  );
};

export default Home;
