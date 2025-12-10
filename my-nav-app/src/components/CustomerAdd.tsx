import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://693323a2e5a9e342d272088f.mockapi.io/customers";

const CustomerAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleAdd = async () => {
    setError(null);

    if (name.trim().length === 0) return setError("Name cannot be empty");
    if (email.trim().length === 0) return setError("Email cannot be empty");
    if (age.trim().length === 0) return setError("Age cannot be empty");
    if (Number(age) <= 0) return setError("Age must be a positive number");

    setSuccess("Customer data is valid!");

    const customer = { name, email, age: Number(age) };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    navigate("/customers/list");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Add Customer</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            className="form-control"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleAdd}>
          Add Customer
        </button>
      </div>
    </div>
  );
};

export default CustomerAdd;
