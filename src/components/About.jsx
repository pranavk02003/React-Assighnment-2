import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="text-center py-20 px-6 bg-gradient-to-br from-yellow-600 via-red-600 to-purple-600 text-white rounded-2xl shadow-lg">

      <h1 className="text-3xl font-bold">About This App</h1>
      <p className="mt-2 text-black-600">
       Welcome to ExploreX—your premier platform for effortlessly finding and connecting with people.

Whether you're networking for business, searching for a collaborator on a passion project, or simply looking to discover interesting professionals, ExploreX makes browsing profiles fast, intuitive, and simple.
Stop scrolling aimlessly. Start exploring intentionally. Your next great connection is waiting on ExploreX.
      </p>

      <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
}
