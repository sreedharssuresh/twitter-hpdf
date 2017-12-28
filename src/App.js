import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconButton from './AppBarExampleIconButton';
import CardExampleWithAvatar from './CardExampleWithAvatar';
//import AvatarExampleSimple from './AvatarExampleSimple';
import PaperExampleSimple from './PaperExampleSimple';
import PaperExampleSimple2 from './PaperExampleSimple2';
import PaperExampleSimple3 from './PaperExampleSimple3';




const App = () => (
  <MuiThemeProvider >
    <AppBarExampleIconButton/>
<span >


    <PaperExampleSimple2  />
    <PaperExampleSimple3 />

    <CardExampleWithAvatar />

    <PaperExampleSimple />


</span>






  </MuiThemeProvider>
);

export default App;
