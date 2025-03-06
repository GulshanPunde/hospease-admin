import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppointmentsManagement() {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', doctorName: 'Dr. Smith', department: 'Cardiology', date: '2025-03-10', time: '10:00', status: 'Pending' },
    { id: 2, patientName: 'Jane Doe', doctorName: 'Dr. Brown', department: 'Neurology', date: '2025-03-11', time: '11:00', status: 'Accepted' },
    { id: 3, patientName: 'Alice Johnson', doctorName: 'Dr. Wilson', department: 'Orthopedics', date: '2025-03-12', time: '09:30', status: 'Pending' },
    { id: 4, patientName: 'Bob Miller', doctorName: 'Dr. Green', department: 'Dermatology', date: '2025-03-13', time: '14:00', status: 'Pending' },
    { id: 5, patientName: 'Sara Connor', doctorName: 'Dr. Lee', department: 'Pediatrics', date: '2025-03-14', time: '08:30', status: 'Accepted' }
  ]);

  const [canceledAppointments, setCanceledAppointments] = useState([]);
  const [filter, setFilter] = useState('');

  const handleUpdateAppointment = (id, updatedData) => {
    setAppointments((prev) => prev.map((appt) => (appt.id === id ? { ...appt, ...updatedData } : appt)));
  };

  const handleCancelAppointment = (id) => {
    setAppointments((prev) => {
      const canceledAppt = prev.find((appt) => appt.id === id);
      if (canceledAppt) {
        setCanceledAppointments((canceled) => [...canceled, canceledAppt]);
      }
      return prev.filter((appt) => appt.id !== id);
    });
  };

  const handleUndoCancel = (id) => {
    setCanceledAppointments((prevCanceled) => {
      const restoredAppt = prevCanceled.find((appt) => appt.id === id);
      if (restoredAppt) {
        setAppointments((prevAppointments) => 
          [...prevAppointments, restoredAppt].sort((a, b) => a.id - b.id)
        );
      }
      return prevCanceled.filter((appt) => appt.id !== id);
    });
  };

  const clearCancelHistory = () => {
    setCanceledAppointments([]);
  };

  return (
    <div className="p-4" style={{ background: '#e3f2fd', color: '#000' }}>
      <h2 className="mb-4 text-center shadow p-3 text-primary">Hospital Appointment Requests</h2>

      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search by Patient or Doctor..." 
          value={filter} 
          onChange={(e) => setFilter(e.target.value.toLowerCase())} 
        />
      </div>

      <h3 className="text-primary">Appointment Requests by Department</h3>
      {[...new Set(appointments.map((appt) => appt.department))].map((dept) => (
        <div key={dept} className="mb-5">
          <h4 className="text-info">{dept}</h4>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Change Date/Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments
                  .filter((appt) => appt.department === dept && (appt.patientName.toLowerCase().includes(filter) || appt.doctorName.toLowerCase().includes(filter)))
                  .map((appt) => (
                    <tr key={appt.id}>
                      <td>{appt.id}</td>
                      <td>{appt.patientName}</td>
                      <td>{appt.doctorName}</td>
                      <td>{appt.date}</td>
                      <td>{appt.time}</td>
                      <td>{appt.status}</td>
                      <td>
                        <input 
                          type="datetime-local"
                          className="form-control"
                          style={{ padding: '10px' }}
                          onChange={(e) => handleUpdateAppointment(appt.id, { date: e.target.value.split('T')[0], time: e.target.value.split('T')[1] })}
                        />
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm me-2 mb-2" onClick={() => handleUpdateAppointment(appt.id, { status: 'Accepted' })}>Accept</button>
                        <button className="btn btn-warning btn-sm me-2 mb-2" onClick={() => handleUpdateAppointment(appt.id, { status: 'Reschedule Requested' })}>Request Reschedule</button>
                        <button className="btn btn-danger btn-sm mb-2" onClick={() => handleCancelAppointment(appt.id)}>Cancel</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <h3 className="text-danger">Canceled Appointments History</h3>
      {canceledAppointments.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Date</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {canceledAppointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.id}</td>
                  <td>{appt.patientName}</td>
                  <td>{appt.doctorName}</td>
                  <td>{appt.department}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleUndoCancel(appt.id)}>Undo Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-outline-danger" onClick={clearCancelHistory}>Clear History</button>
        </div>
      ) : (
        <p>No canceled appointments.</p>
      )}
    </div>
  );
}

export default AppointmentsManagement;

// Let me know if you want me to enhance this further! 🚀
