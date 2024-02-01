import React from "react";
import { FormComponent } from "./components/Form";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width:100%
  height:100v;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <FormComponent />
    </Container>
  );
}

export default App;
