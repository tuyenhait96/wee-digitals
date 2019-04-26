import React from 'react';
import styled from 'styled-components';
//Data
import { mainscreenImage } from './data/dataGeneral';
//Container
import MainScreenContainer from './MainScreen/MainScreenContainer';


const BounceStyled = styled.div``
function App() {
  return (
    <BounceStyled className = 'container'>
      <MainScreenContainer data = {mainscreenImage}/>
    </BounceStyled>
  );
}

export default App;
