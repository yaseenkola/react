import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
};

function UserList() {
    
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">User List</h2>

      <button className="btn btn-primary mb-4" onClick={fetchUsers}>
        Fetch Users
      </button>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  @{user.username}
                </h6>

                <p className="card-text">
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Address:</strong> {user.address.street},{" "}
                  {user.address.city} <br />
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
