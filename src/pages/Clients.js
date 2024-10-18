// src/pages/Clients.js
import React from 'react';
import './Clients.css'; // Add CSS file for the Clients section styling
import Footer from './Footer'; // Import the Footer component

function Clients() {
  const clients = [
    { name: 'National Highway Authority of India - NHAI', logo: 'NHAI.png' },
    { name: 'Madhya Pradesh Road Development Corporation Limited - MPRDC', logo: 'MPRDC.jpg' },
    { name: 'Airports Authority of India - AAI', logo: 'AAI.png' },
    { name: 'Military Engineering Services - MES', logo: 'MES.jfif' },
    { name: 'Maharashtra Industrial Development Corporation - MIDC', logo: 'MIDC.jfif' },
    { name: 'Indian Railway Construction International Limited - IRCON', logo: 'IRCON.webp' },
    { name: 'Pimpri Chinchwad Municipal Corporation', logo: 'PCMC.jpeg' },
    { name: 'Cochin International Airport Ltd - CIAL', logo: 'CIAL.jpg' },
    { name: 'Government of Gujarat', logo: 'GG.png' },
    { name: 'Kerala State urban development - KSUDP', logo: 'KSUDP.jfif' },
    { name: 'Madhya Pradesh Public Works Department', logo: 'MPPWD.png' },
    { name: 'Gujarat Urban Development Company Ltd', logo: 'GUDC.png' },
    { name: 'Mumbai Metropolitan region Development Authority - MMRDA', logo: 'MMRDA.png' },
    { name: 'Ahmedabad Municipal Corporation', logo: 'AMC.gif' },
    { name: 'Gujarat Municipal Finance Board', logo: 'GMFB.png' },
    { name: 'Municipal Corporation of Greater Mumbai', logo: 'MCGM.png' },
    { name: 'Uttar Pradesh Public Works Department', logo: 'UPPWD.jfif' },
    { name: 'Kerala State Transport Project - KSTP', logo: 'KSTP.jpg' },
  ];

  return (
    <div className="clients-container">
      <h2>Our Clients</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <img src={client.logo} alt={`${client.name} Logo`} className="client-logo" />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
      {/* Add Footer here */}
      <Footer />
    </div>
  );
}

export default Clients;
