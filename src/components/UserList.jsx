import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-xl">Loading users...</h2>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Users</h1>

      <ul className="mt-4 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-700">{user.email}</p>

            <Link to={`/users/${user.id}`} className="text-blue-600 underline mt-2 inline-block">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
