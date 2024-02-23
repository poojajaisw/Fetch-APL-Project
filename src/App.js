
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';
import './Style.css'

function App() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/?format=json&page=${currentPage}`);
        setPlanets(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10)); // Assuming 10 planets per page
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlanets();
  }, [currentPage]);

  return (
    <div>
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
