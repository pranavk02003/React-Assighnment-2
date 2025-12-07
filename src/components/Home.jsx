import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full">
      <div className="text-center py-20 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg">
        
        <h1 className="text-5xl font-extrabold drop-shadow-md">
          Welcome to <span className="text-yellow-300">ExploreX</span>
        </h1>

       
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            About ExploreX
          </Link>

          <Link
            to="/users"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
          >
            View Users
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Hello there 👋</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
         Welcome to ExploreX—your premier platform for effortlessly finding and connecting with people..
        </p>
      </div>
    </section>
  );
}

