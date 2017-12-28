import React from 'react';
import Paper from 'material-ui/Paper';
import {blue200,grey600,blue100} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import AvatarExampleSimple1 from './AvatarExampleSimple1';
const style = {
  paperp:
  {
  height:400,
  width: 650,
  marginLeft:325,
  marginTop:-330,
  textAlign: 'center',

},
textp:
{
  marginTop:-40,
  marginRight:450,
  fontWeight:'bold',
  fontSize:20
},
textp1:
{
  marginTop:-20,
  marginRight:300,
  color:grey600,
},
};
const PaperExampleSimple3 = () => (
  <div>

    <Paper style={style.paperp} zDepth={4} >
    <div>
    <AvatarExampleSimple1 /><div style={style.textp}>India </div><div style={style.textp1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@india123 &nbsp;&nbsp;1d</div>
    <div style={{marginTop:30,
    marginRight:490}}>
    Our Tigers Our Pride:
    </div>
    <div>
    <img style={{width:645,height:300}} src="https://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg"alt="map"/>
    </div>

    </div>
    </Paper>


  </div>
);

export default PaperExampleSimple3;
