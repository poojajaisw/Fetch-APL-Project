import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentList from './ResidentList';

function PlanetCard({ planet }) {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const residentRequests = planet.residents.map((residentUrl) => axios.get(residentUrl));
        const residentResponses = await Promise.all(residentRequests);
        const residentData = residentResponses.map((response) => response.data);
        setResidents(residentData);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card"  style={{ backgroundColor:'#4bafda;' }}>
      <h1 className='name' style={{padding:'8px', height:'50px' ,width:'100%' , backgroundColor:"rgba(0, 140, 255, 0.445)", textAlign:'center', textTransform:'uppercase'}}>{planet.name}</h1>
      <h2 className='planet' style={{padding:'8px', height:'40px' ,width:'17%' , backgroundColor:"rgb(231, 229, 71)", textAlign:'center', textTransform:'uppercase'}}>Climate: {planet.climate}</h2>
      <h3 className='popukation' style={{padding:'8px', height:'30px' ,width:'17%' , backgroundColor:"rgb(240, 163, 70)",color:'black', textAlign:'center',textTransform:'uppercase'}}>Population: {planet.population}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <ResidentList residents={residents} />
      </div>
    </div>
  );
}

export default PlanetCard;


