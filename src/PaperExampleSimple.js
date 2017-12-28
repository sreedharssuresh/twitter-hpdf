import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500,grey500} from 'material-ui/styles/colors';

const style = {
  allign:
  {
height:400,
paddingTop:20,
marginTop:30,
marginLeft:10,
width:300 ,
  },
colorp:
{
  color:blue500,
  fontWeight:'bold',
  margin:20,
  fontSize:25
},
boldp:
{
  //color:grey500,
  fontWeight:'bold',
  fontSize:30
},
lightp:
{
  fontWeight:100,
}

};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style.allign} zDepth={4} >
    <div style={style.boldp}>
    Trends For you</div>
    <div  style={style.colorp}>
    #ElClasico
    </div>
    <div  style={style.colorp}>
    #Namo
    </div>
    <div  style={style.colorp}>
    #Election
    </div>
    <div  style={style.colorp}>
    #Iot
    </div>
    <div  style={style.colorp}>
    #MohammedRafi
    </div>
    <div  style={style.colorp}>
    #KeralaOkhi
    </div>
    </Paper>
  </div>
);

export default PaperExampleSimple;
