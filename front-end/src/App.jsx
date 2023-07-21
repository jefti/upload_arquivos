import { useState } from 'react'
import styled from "styled-components";
import axios from 'axios'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Selecione um arquivo para enviar.');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(selectedFile);
    axios.post('/upload', formData)
      .then((response) => {
        // Lógica para lidar com a resposta do servidor após o upload.
        console.log(response.data);
      })
      .catch((error) => {
        // Lógica para lidar com erros de upload, se houver.
        console.error('Erro no upload:', error);
      });
  };

  return (
    <>
      <FormContainer>
        <label>Upload de arquivos</label>
        <input type="file" onChange={handleFileChange}/>
        <button onClick={handleUpload}>Enviar</button>
      </FormContainer>
    </>
  )
}

export default App

const FormContainer = styled.div`
  color:white;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.1));
  border: dashed 3px white;
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 20vh;

  label{
    font-size: 62px;
    margin: 20px;
  }
  input{
    font-size: 36px;
    margin: 10px;
  }
  button{
    width: 10vw;
    height: 5vh;
    margin: 20px;
    font-size: 18px;
  }
`