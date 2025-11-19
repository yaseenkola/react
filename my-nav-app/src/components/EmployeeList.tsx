import { useState } from "react";

type Employee = {
  id: number | string;
  employee_name: string;
  employee_age: string;
  employee_salary: string;
};

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    setEmployees(data.data);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Employee List</h1>

      <button className="btn btn-success mb-4" onClick={fetchEmployees}>
        Fetch Employees
      </button>

      <ul className="list-group">
        {employees.map((employee) => (
          <li key={employee.id} className="list-group-item">
            <h5 className="mb-1">{employee.employee_name}</h5>
            <small className="d-block text-muted">
              Salary: {employee.employee_salary}
            </small>
            <small className="d-block text-muted">
              Age: {employee.employee_age}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
