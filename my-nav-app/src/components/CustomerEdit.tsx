import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://693323a2e5a9e342d272088f.mockapi.io/customers";

const CustomerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const loadCustomer = async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    setName(data.name);
    setEmail(data.email);
    setAge(String(data.age));
  };

  useEffect(() => {
    loadCustomer();
  }, []);

  const handleUpdate = async () => {
    const customer = { name, email, age: Number(age) };

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    navigate("/customers/list");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2>Edit Customer</h2>

      <div className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            className="form-control"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handleUpdate}>
          Update Customer
        </button>
      </div>
    </div>
  );
};

export default CustomerEdit;
