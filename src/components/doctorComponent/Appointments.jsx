import React, { useState } from "react";
import Swal from "sweetalert2";

const Appointments = () => {
  const initialAppointments = [
    { id: 1, patient: "John Doe", date: "2025-03-07", time: "10:00 AM", reason: "Routine Checkup" },
    { id: 2, patient: "Jane Smith", date: "2025-03-08", time: "2:00 PM", reason: "Follow-up" },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);
  const [newAppointment, setNewAppointment] = useState({
    patient: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleAddAppointment = () => {
    if (newAppointment.patient && newAppointment.date && newAppointment.time && newAppointment.reason) {
      setAppointments([
        ...appointments,
        { id: appointments.length + 1, ...newAppointment },
      ]);
      setNewAppointment({ patient: "", date: "", time: "", reason: "" });
      Swal.fire("Added!", "Appointment has been added successfully.", "success");
    } else {
      Swal.fire("Error!", "Please fill in all fields to add an appointment.", "error");
    }
  };

  const handleDeleteAppointment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
        Swal.fire("Deleted!", "Appointment has been removed.", "success");
      }
    });
  };

  return (
    <div className="container mb-3">
      {/* <h2 className="text-center text-success">Manage Your Appointments</h2>
      <p className="text-center">Easily schedule, view, and manage appointments with a streamlined interface.</p> */}

      <div className="card p-3 mb-4 shadow-sm">
        <h4 className="text-success">Add a New Appointment</h4>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              name="patient"
              className="form-control"
              placeholder="Patient's Full Name"
              value={newAppointment.patient}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              name="date"
              className="form-control"
              value={newAppointment.date}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="time"
              name="time"
              className="form-control"
              value={newAppointment.time}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="reason"
              className="form-control"
              placeholder="Reason for Visit"
              value={newAppointment.reason}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-success w-100" onClick={handleAddAppointment}>
              Add
            </button>
          </div>
        </div>
      </div>

      <h4 className="mb-3">Upcoming Appointments</h4>
      <div className="table-responsive  ">
        <table className="table table-bordered table-striped shadow">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.patient}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.reason}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteAppointment(appointment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No appointments scheduled
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
