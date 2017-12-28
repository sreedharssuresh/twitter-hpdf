import React from 'react';
import Paper from 'material-ui/Paper';
import AvatarExampleSimple from './AvatarExampleSimple';
import IconButton from 'material-ui/IconButton';
import {blue200,grey50,lightBlue100} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import PaperExampleSimple4 from './PaperExampleSimple4';

const style = {
  paperp:
  {
  height: 50,
  width: 650,
  marginLeft:325,
  marginTop:20,
  textAlign: 'center',
  backgroundColor:blue200
},
tweet:
{
  width: 550,
  marginLeft:-280,
  marginTop:-50,
     height: 30,
     borderRadius:150
},

};
const PaperExampleSimple2 = () => (
  <div>

    <Paper style={style.paperp} zDepth={4} >
    <div>
      <AvatarExampleSimple style={style.display}/>
    <IconButton>
                  <ListItem
          disabled={true}
          leftAvatar={<Avatar style={style.tweet} size={40}  backgroundColor={grey50}><TextField hintText="Whats Happening?"/></Avatar>}
        />

               </IconButton>

    </div>
    </Paper>

<PaperExampleSimple4/>
  </div>

);

export default PaperExampleSimple2;
