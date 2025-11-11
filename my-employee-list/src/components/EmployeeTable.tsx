import { useMemo } from "react";

type Employee = {
  id: number;
  name: string;
  department: string;
  designation: string;
  salary: number;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Alice",
    department: "HR",
    designation: "Manager",
    salary: 60000,
  },
  {
    id: 2,
    name: "Bob",
    department: "IT",
    designation: "Developer",
    salary: 70000,
  },
  {
    id: 3,
    name: "Charlie",
    department: "Finance",
    designation: "Analyst",
    salary: 65000,
  },
  {
    id: 4,
    name: "Diana",
    department: "Marketing",
    designation: "Lead Strategist",
    salary: 72000,
  },
  {
    id: 5,
    name: "Ethan",
    department: "Operations",
    designation: "Coordinator",
    salary: 58000,
  },
  {
    id: 6,
    name: "Farah",
    department: "IT",
    designation: "UX Designer",
    salary: 64000,
  },
  {
    id: 7,
    name: "Gabe",
    department: "Finance",
    designation: "Controller",
    salary: 78000,
  },
  {
    id: 8,
    name: "Harper",
    department: "Marketing",
    designation: "Content Strategist",
    salary: 61000,
  },
];

const salaryFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const departmentTheme: Record<string, string> = {
  HR: "hr",
  IT: "it",
  Finance: "finance",
  Marketing: "marketing",
  Operations: "operations",
};

const EmployeeTable = () => {
  const summary = useMemo(() => {
    const totalSalary = employees.reduce(
      (total, employee) => total + employee.salary,
      0
    );
    const averageSalary = Math.round(totalSalary / employees.length);
    const departments = new Set(
      employees.map((employee) => employee.department)
    );
    return {
      totalEmployees: employees.length,
      averageSalary,
      totalSalary,
      departmentCount: departments.size,
    };
  }, []);

  const metrics = useMemo(
    () => [
      {
        label: "Total Team",
        value: `${summary.totalEmployees} people`,
        accent: "purple",
      },
      {
        label: "Avg. Salary",
        value: salaryFormatter.format(summary.averageSalary),
        accent: "teal",
      },
      {
        label: "Annual Payroll",
        value: salaryFormatter.format(summary.totalSalary),
        accent: "indigo",
      },
      {
        label: "Departments",
        value: `${summary.departmentCount}`,
        accent: "orange",
      },
    ],
    [
      summary.averageSalary,
      summary.departmentCount,
      summary.totalEmployees,
      summary.totalSalary,
    ]
  );

  return (
    <section className="employee-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11 col-xxl-9">
            <header className="section-headline">
              <span className="headline-eyebrow">People &amp; Culture</span>
              <h1 className="headline-title">Employee Overview</h1>
              <p className="headline-subtitle">
                Explore the current roster across departments, their roles, and
                salary benchmarks.
              </p>
            </header>

            <div className="metrics-grid mb-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`metric-card metric-card-${metric.accent}`}
                >
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="card employee-table-card shadow-lg border-0">
              <div className="card-header d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 border-0 bg-transparent px-4 pt-4 pb-0">
                <div>
                  <h2 className="card-title mb-1">Team Directory</h2>
                  <p className="card-subtitle text-body-secondary mb-0">
                    A consolidated view of job families, seniority, and
                    compensation.
                  </p>
                </div>
                <div className="table-legend d-flex gap-3">
                  <span className="legend-pill">
                    <span className="legend-dot legend-dot-it" />
                    Technology
                  </span>
                  <span className="legend-pill">
                    <span className="legend-dot legend-dot-hr" />
                    HR
                  </span>
                  <span className="legend-pill">
                    <span className="legend-dot legend-dot-marketing" />
                    Marketing
                  </span>
                  <span className="legend-pill">
                    <span className="legend-dot legend-dot-finance" />
                    Finance
                  </span>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-modern mb-0 align-middle">
                    <thead>
                      <tr>
                        <th scope="col" className="ps-4">
                          ID
                        </th>
                        <th scope="col">Name &amp; Role</th>
                        <th scope="col">Department</th>
                        <th scope="col" className="text-center">
                          Designation
                        </th>
                        <th scope="col" className="text-end pe-4">
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => {
                        const pillClass =
                          departmentTheme[employee.department] ?? "neutral";
                        return (
                          <tr key={employee.id}>
                            <th scope="row" className="ps-4 text-muted">
                              {employee.id.toString().padStart(2, "0")}
                            </th>
                            <td>
                              <div className="employee-meta">
                                <span className="employee-avatar">
                                  <span>{employee.name.charAt(0)}</span>
                                </span>
                                <div>
                                  <div className="employee-name">
                                    {employee.name}
                                  </div>
                                  <div className="employee-role text-body-secondary">
                                    {employee.designation}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span
                                className={`department-pill pill-${pillClass}`}
                              >
                                {employee.department}
                              </span>
                            </td>
                            <td className="text-center">
                              <span className="designation-chip">
                                {employee.designation}
                              </span>
                            </td>
                            <td className="text-end pe-4">
                              <span className="salary-amount">
                                {salaryFormatter.format(employee.salary)}
                              </span>
                              <span className="salary-caption"> / yr</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTable;
