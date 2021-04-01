import styled from 'styled-components';

export const Title = styled.h1 `
    text-align: left;
`;


export const TableContainer = styled.section`
  margin-top: 12px;
  table {
    width: 60%;
    border-spacing: 0 8px;
    border-collapse: collapse;

    th {
        padding-top: 12px;
        border: 1px solid #FFFFFF;
        padding-bottom: 12px;
        text-align: left;
        background-color: #1E90FF;
        color: white;
        text-align: center;
    }
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
  }

`;

export const InputText = styled.input`
  width: 30%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 40px
`;

