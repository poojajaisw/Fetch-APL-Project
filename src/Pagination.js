// Pagination.js

import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className='page' style={{ backgroundColor:'#4bafda;', textAlign:'center' , fontSize:'20px' , gap:'20px', marginTop:'3%' }}>
      <button onClick={() => handlePageChange(currentPage - 1)} className='btn'style={{width:'11%',height:'35px', borderBlockColor:'blue', borderRadius:'1rem',}}>Previous</button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} className='btn' style={{width:'11%',height:'35px', borderBlockColor:'blue', borderRadius:'1rem'}}>Next</button>
    </div>
  );
}

export default Pagination;
