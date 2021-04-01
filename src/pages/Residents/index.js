import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Title, ButtonExcluir, TableContainer, InputText } from './styles';


const Residents = () => {
  const [initialResident, setInitialResident] = useState([]);
  const [resident, setResident] = useState([]);

  useEffect(() => {
    api.get('api/Resident').then(response => {
      setResident(response.data)
      setInitialResident(response.data)
    })
  },[])

  async function handleRemoveResident(id) {
    await api.delete(`api/Resident/${id}`)
    await api.get('api/Resident').then(response => {
      setResident(response.data)
      setInitialResident(response.data)
    })
  };

  
  const handleChange = (e, field) => {
      if (!e.target.value) {
        setResident(initialResident)
          return 
      }
      const filterResidents = resident.filter(({apartment}) => apartment[field].toString().toUpperCase().includes(e.target.value.toUpperCase()))
      setResident(filterResidents)
  }

  return (
    <>
    <Title>Residents</Title>
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Birth Date</th>
            <th>Apartment Number</th>
            <th>Block Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {resident.map(resident => (
            <tr key={resident.id}>
              <td>{resident.fullName}</td>
              <td>{resident.cpf}</td>
              <td>{resident.email}</td>
              <td>{resident.birthDate.split('T')[0]}</td>
              <td>{resident.apartment.number}</td>
              <td>{resident.apartment.apartmentBlock}</td>
              <td><ButtonExcluir onClick={() => handleRemoveResident(resident.id)}>Remover</ButtonExcluir></td>
            </tr>
          ))}
        </tbody>
      </table>
      <InputText
            className="form-input"
            onChange={(event) => handleChange(event, 'number') }
            id="input-table"
            placeholder="Find Residents By Apartment Number"
        />

        <InputText
            className="form-input"
            onChange={(event) => handleChange(event, 'apartmentBlock') }
            id="input-table"
            placeholder="Find Residents By Apartment Block"
        />

    </TableContainer>
    </>
  );
};

export default Residents;