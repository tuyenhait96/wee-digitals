import React from 'react';
import styled from 'styled-components';
//Container
import MainScreenContainer from './MainScreen/MainScreenContainer';

const BounceStyled = styled.div``
function App() {
  return (
    <BounceStyled className = 'container'>
      <MainScreenContainer/>
    </BounceStyled>
  );
}

export default App;
