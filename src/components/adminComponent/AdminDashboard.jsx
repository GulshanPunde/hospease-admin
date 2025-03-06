import React from 'react';
import { FaUserMd, FaBed, FaClipboardList, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AdminDashboardCard from './AdminDashboardCard';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (section) => {
    switch (section) {
      case 'Doctors':
        navigate('/doctors');
        break;
      case 'Beds':
        navigate('/beds');
        break;
      case 'Appointments':
        navigate('/appointments');
        break;
      case 'Patients':
        navigate('/patients');
        break;
      default:
        break;
    }
  };

  const dashboardSections = [
    { icon: <FaUserMd size={50} className="mb-3 text-primary" />, title: 'Doctors', text: 'Manage doctor profiles and schedules' },
    { icon: <FaBed size={50} className="mb-3 text-success" />, title: 'Beds', text: 'Track bed availability and patient occupancy' },
    { icon: <FaClipboardList size={50} className="mb-3 text-warning" />, title: 'Appointments', text: 'View and schedule patient appointments' },
    { icon: <FaUsers size={50} className="mb-3 text-danger" />, title: 'Patients', text: 'Manage patient records and history' },
  ];

  return (
    <div className="row m-2">
      {dashboardSections.map((card, index) => (
        <AdminDashboardCard
          key={index}
          icon={card.icon}
          title={card.title}
          text={card.text}
          onClick={() => handleCardClick(card.title)}
        />
      ))}
    </div>
  );
};

export default AdminDashboard;
