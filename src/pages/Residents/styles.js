import styled from 'styled-components';

export const Title = styled.h1 `
    text-align: center;
`;


export const TableContainer = styled.section`
  margin-top: 12px;
  table {
    width: 90%;
    border-spacing: 0 8px;
    border-collapse: collapse;

    th {
        padding-top: 12px;
        border: 1px solid #FFFFFF;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
        text-align: center;
    }
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
  }

`;

export const ButtonExcluir = styled.button`
    background-color:#FF0000;
    border-radius:10px;
    border:1px solid #FF0000;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:14px;
    font-weight:bold;
    padding:5px 6px;
    text-decoration:none;
    text-shadow:0px 2px 6px #2f6627;
`;

export const InputText = styled.input`
  width: 30%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 40px 20px 0 0
`;

