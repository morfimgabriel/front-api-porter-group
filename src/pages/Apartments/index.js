import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Title, TableContainer } from './styles';


const Apartments = () => {
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    api.get('api/Apartment').then(response => {
      setApartment(response.data)
    })
  },[])

  return (
    <>
    <Title>Apartments</Title>
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Apartment number</th>
            <th>Apartment block</th>
          </tr>
        </thead>

        <tbody>
          {apartment.map(apartment => (
            <tr key={apartment.id}>
              <td>{apartment.number}</td>
              <td>{apartment.apartmentBlock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
    </>
  );
};

export default Apartments;