import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://693323a2e5a9e342d272088f.mockapi.io/customers";

const CustomerList = () => {
  const [customers, setCustomers] = useState<any[]>([]);

  const loadCustomers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCustomers(data);
  };

  const deleteCustomer = async (id: string) => {
    // 🔥 Ask for confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) {
      return; // ❌ User clicked Cancel → Do nothing
    }

    // ✅ User confirmed → proceed with delete
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    loadCustomers(); // refresh after delete
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary">Customer List</h2>

      <Link className="btn btn-success my-3" to="/customers/add">
        Add Customer
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.age}</td>
              <td>
                <Link
                  to={`/customers/edit/${c.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCustomer(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
