import HomeLayout from "@/layouts/home.layout";

import Category from "../components/category";
import Hero from "../components/hero";
import CoursesPopular from "../components/courses-popular";

const Home = () => {
  return (
    <HomeLayout>
      <main className="min-h-screen">
        <Hero />
        <Category />
        <CoursesPopular />
      </main>
    </HomeLayout>
  );
};

export default Home;
