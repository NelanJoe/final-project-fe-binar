import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="min-h-screen grid place-content-center">
      <section className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-center font-semibold text-8xl text-dark-blue">
          Oops!
        </h1>
        <p className="text-lg font-semibold">Something when wrong...</p>
        <Link
          to="/"
          className="px-4 py-2 rounded-full text-white font-semibold bg-dark-blue hover:bg-dark-blue/80"
        >
          Back To Home
        </Link>
      </section>
    </main>
  );
};

export default Error;
