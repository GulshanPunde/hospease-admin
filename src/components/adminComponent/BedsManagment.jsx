import React, { useState } from 'react';

function BedsManagement() {
  const [beds, setBeds] = useState([
    { id: 1, type: 'ICU', status: 'Occupied', patient: 'John Doe', department: 'Cardiology' },
    { id: 2, type: 'General', status: 'Available', patient: '', department: 'Orthopedics' },
    { id: 3, type: 'ICU', status: 'Available', patient: '', department: 'Cardiology' },
    { id: 4, type: 'General', status: 'Occupied', patient: 'Jane Smith', department: 'Neurology' },
    { id: 5, type: 'ICU', status: 'Available', patient: '', department: 'Neurology' },
    { id: 6, type: 'General', status: 'Available', patient: '', department: 'Pediatrics' },
  ]);

  const assignBed = (id, patientName) => {
    if (patientName) {
      setBeds(
        beds.map((bed) =>
          bed.id === id ? { ...bed, status: 'Occupied', patient: patientName } : bed
        )
      );
    }
  };

  const dischargePatient = (id) => {
    setBeds(
      beds.map((bed) =>
        bed.id === id ? { ...bed, status: 'Available', patient: '' } : bed
      )
    );
  };

  const getDepartmentStats = () => {
    const stats = {};
    beds.forEach((bed) => {
      if (!stats[bed.department]) {
        stats[bed.department] = { total: 0, available: 0 };
      }
      stats[bed.department].total += 1;
      if (bed.status === 'Available') {
        stats[bed.department].available += 1;
      }
    });
    return stats;
  };

  const departmentStats = getDepartmentStats();

  return (
    <div className="container  mt-2">
      <h2 className="text-primary mb-4 text-center shadow p-3 fw-bold">Beds Management</h2>

      <div className="card p-3 mb-4">
        <h4 className="text-success">Bed Availability Summary</h4>
        <ul className="list-group">
          {Object.keys(departmentStats).map((dept) => (
            <li key={dept} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fw-bold">{dept}</span>
              <span>
                Total Beds: {departmentStats[dept].total} | Available: {departmentStats[dept].available}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Department</th>
            <th>Status</th>
            <th>Patient</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beds.map((bed) => (
            <tr key={bed.id}>
              <td>{bed.id}</td>
              <td>{bed.type}</td>
              <td>{bed.department}</td>
              <td>{bed.status}</td>
              <td>{bed.patient || 'N/A'}</td>
              <td>
                {bed.status === 'Available' ? (
                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      const patientName = prompt('Enter Patient Name:');
                      assignBed(bed.id, patientName);
                    }}
                  >
                    Assign Bed
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => dischargePatient(bed.id)}
                  >
                    Discharge
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BedsManagement;
