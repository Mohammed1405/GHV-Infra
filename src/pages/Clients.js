// src/pages/Clients.js
import React from 'react';
import './Clients.css'; // Add CSS file for the Clients section styling

function Clients() {
  const clients = [
    { name: 'National Highway Authority of India - NHAI', logo: 'NHAI.png' },
    { name: 'Madhya Pradesh Road Development Corporation Limited - MPRDC', logo: 'MPRDC.png' },
    { name: 'Airports Authority of India - AAI', logo: 'AAI.png' },
    { name: 'Military Engineering Services - MES', logo: 'MES.jpg' },
    { name: 'Maharashtra Industrial Development Corporation - MIDC', logo: 'MIDC.jfif' },
    { name: 'Indian Railway Construction International Limited - IRCON', logo: 'IRCON.png' },
    { name: 'Pimpri Chinchwad Municipal Corporation', logo: 'PCMC.jpeg' },
    { name: 'Cochin International Airport Ltd - CIAL', logo: 'CIAL.jpg' },
    { name: 'Government of Gujarat', logo: 'GoG.svg' },
    { name: 'Kerala State urban development - KSUDP', logo: 'KSUDP.jfif' },
    { name: 'Madhya Pradesh Public Works Department', logo: 'MPPWD.jfif' },
    { name: 'Gujarat Urban Development Company Ltd', logo: 'GUDC.png' },
    { name: 'Mumbai Metropolitan region Development Authority - MMRDA', logo: 'MMRDA.jpg' },
    { name: 'Ahmedabad Municipal Corporation', logo: 'AMC.jpg' },
    { name: 'Gujarat Municipal fianace Board', logo: 'GMFB.png' },
    { name: 'Municipal Corporation of Greater Mumbai', logo: 'MCGM.png' },
    { name: 'Uttar Pradesh Public Works Department', logo: 'UPPWD.jfif' },
    { name: 'kerala State transport Project - KSTP', logo: 'KSTP.jpg' },
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

      {/* Footer Section
      <footer className="footer-section">
        <p>©2024 GHV Infra Projects Limited. All Rights Reserved | Designed & Developed By GHV group Pvt Ltd.</p>
      </footer> */}

    </div>
  );
}

export default Clients;
