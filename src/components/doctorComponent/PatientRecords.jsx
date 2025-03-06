import React, { useState } from "react";

const PatientRecords = () => {
  const initialRecords = [
    { id: 1, name: "John Doe", diagnosis: "Diabetes", medication: "Metformin", notes: "Monitor blood sugar" },
    { id: 2, name: "Jane Smith", diagnosis: "Asthma", medication: "Inhaler", notes: "Avoid allergens" },
    { id: 3, name: "Michael Johnson", diagnosis: "Hypertension", medication: "Amlodipine", notes: "Regular BP checks" },
    { id: 4, name: "Emily Brown", diagnosis: "Fracture", medication: "Painkillers", notes: "Physical therapy" },
  ];

  const [records, setRecords] = useState(initialRecords);
  const [editIndex, setEditIndex] = useState(null);
  const [editedRecord, setEditedRecord] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedRecord(records[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecord({ ...editedRecord, [name]: value });
  };

  const handleSave = (index) => {
    const updatedRecords = [...records];
    updatedRecords[index] = editedRecord;
    setRecords(updatedRecords);
    setEditIndex(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Patient Records</h2>
      <p className="text-center">Access and update patient medical records here.</p>

      <div className="table-responsive mt-4">
        <table className="table table-bordered table-striped">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Diagnosis</th>
              <th>Medication</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editedRecord.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    record.name
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="diagnosis"
                      value={editedRecord.diagnosis}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    record.diagnosis
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="medication"
                      value={editedRecord.medication}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    record.medication
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="notes"
                      value={editedRecord.notes}
                      onChange={handleChange}
                      className="form-control"
                    />
                  ) : (
                    record.notes
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientRecords;
