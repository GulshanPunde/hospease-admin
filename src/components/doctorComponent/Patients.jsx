import React from "react";

const Patients = () => {
  const patientData = [
    { id: 1, name: "John Doe", age: 45, condition: "Diabetes", status: "Stable" },
    { id: 2, name: "Jane Smith", age: 30, condition: "Asthma", status: "Under Observation" },
    { id: 3, name: "Michael Johnson", age: 60, condition: "Heart Disease", status: "Critical" },
    { id: 4, name: "Emily Brown", age: 25, condition: "Fracture", status: "Recovering" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center text-warning">Patients</h2>
      <p className="text-center">View patient history and details here.</p>

      <div className="table-responsive mt-4">
        <table className="table table-bordered table-striped">
          <thead className="table-warning">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Condition</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.condition}</td>
                <td>
                  <span
                    className={`badge ${
                      patient.status === "Critical"
                        ? "bg-danger"
                        : patient.status === "Under Observation"
                        ? "bg-warning"
                        : "bg-success"
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
