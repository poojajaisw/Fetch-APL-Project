import React from 'react';

function ResidentList({ residents }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', }}>
      {residents.map((resident, index) => (
        <div key={index} style={{ width: '18rem', margin: '10px', border: '1px solid black', borderRadius: '8px', padding: '10px' , backgroundColor:'rgb(53, 49, 49 , 0.2)', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)' }}>
          <div className='card' style={{ backgroundColor:'black;', textTransform:'uppercase' }}>
            <h5 style={{ marginBottom: '10px', fontWeight:'bold' }}>{resident.name}</h5>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
            <button style={{ display: 'block', marginTop: '10px', textDecoration: 'none', color: '#007bff', cursor: 'pointer', padding: '5px' }}>Go somewhere</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResidentList;


