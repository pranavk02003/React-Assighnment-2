import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="text-xl">Loading user...</h2>;
  if (!user) return <h2>User not found!</h2>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{user.name}</h1>

      <p className="mt-2 text-gray-600">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="mt-1 text-gray-600">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="mt-1 text-gray-600">
        <span className="font-semibold">City:</span> {user.address.city}
      </p>

      <Link to="/users" className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded">
        Go Back
      </Link>
    </div>
  );
}
