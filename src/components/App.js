import bg from "../assets/background.jpg";
import Navbar from "./Navbar";
import Form from "./Form";
import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 50rem;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;
const Image = styled.img`
  width: 50%;
  height: 100vh;
`;
function App() {
  return (
    <AppContainer className="App">
      <Image src={bg} alt="background" />
      <FormContainer>
        <Navbar />
        <Form />
      </FormContainer>
    </AppContainer>
  );
}

export default App;
