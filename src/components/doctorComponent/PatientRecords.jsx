import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const PatientRecords = () => {
  const [patientData, setPatientData] = useState([
    { id: 1, name: "John Doe", age: 45, condition: "Diabetes", status: "Stable", medication: "Metformin", notes: "Monitor blood sugar", appointment: "2025-03-10 10:00 AM" },
    { id: 2, name: "Jane Smith", age: 30, condition: "Asthma", status: "Under Observation", medication: "Inhaler", notes: "Avoid allergens", appointment: "2025-03-11 2:30 PM" },
    { id: 3, name: "Michael Johnson", age: 60, condition: "Heart Disease", status: "Critical", medication: "Amlodipine", notes: "Regular BP checks", appointment: "2025-03-12 9:00 AM" },
    { id: 4, name: "Emily Brown", age: 25, condition: "Fracture", status: "Recovering", medication: "Painkillers", notes: "Physical therapy", appointment: "2025-03-13 3:00 PM" },
  ]);

  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPatientData(patientData.filter((patient) => patient.id !== id));
        Swal.fire("Deleted!", "Patient record has been deleted.", "success");
      }
    });
  };

  const handleEdit = (patient) => {
    setEditData(patient);
    setShowModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = () => {
    setPatientData(patientData.map((p) => (p.id === editData.id ? editData : p)));
    setShowModal(false);
    Swal.fire("Updated!", "Patient details have been updated.", "success");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-info mb-3 fw-bolder">🩺 Patient Management & Records</h2>
      <p className="text-center">Manage patient details, status, and medical history — all in one place.</p>

      <div className="card shadow p-3 mb-5">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary text-center">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Diagnosis</th>
                <th>Appointment Date & Time</th>
                <th>Status</th>
                <th>Medication</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient) => (
                <tr key={patient.id} className="align-middle">
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.condition}</td>
                  <td>{patient.appointment}</td>
                  <td>
                    <span
                      // className={`badge fs-6 p-2 ${
                      //   patient.status === "Critical"
                      //     ? "bg-danger"
                      //     : patient.status === "Under Observation"
                      //     ? "bg-warning text-dark"
                      //     : "bg-success"
                      // }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td>{patient.medication}</td>
                  <td>{patient.notes}</td>
                  <td className="text-center d-flex">
                    <button className="btn btn-warning btn-sm me-2 mb-1" onClick={() => handleEdit(patient)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(patient.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Patient Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {editData && (
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" name="name" value={editData.name} onChange={handleEditChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Age</label>
                      <input type="number" name="age" value={editData.age} onChange={handleEditChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Condition</label>
                      <input type="text" name="condition" value={editData.condition} onChange={handleEditChange} className="form-control" />
                    </div>
                    {/* <div className="mb-3">
                      <label className="form-label">Appointment Date & Time</label>
                      <input type="datetime-local" name="appointment" value={editData.appointment} onChange={handleEditChange} className="form-control" />
                    </div> */}
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select name="status" value={editData.status} onChange={handleEditChange} className="form-select">
                        <option value="Stable">Stable</option>
                        <option value="Recovering">Recovering</option>
                        <option value="Under Observation">Under Observation</option>
                        <option value="Critical">Critical</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Medication</label>
                      <input type="text" name="medication" value={editData.medication} onChange={handleEditChange} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Notes</label>
                      <textarea name="notes" value={editData.notes} onChange={handleEditChange} className="form-control"></textarea>
                    </div>
                  </form>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={handleEditSubmit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRecords;
