import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List/List';
const style = {
  prop:
  {
  height: 400,
  width: 330,
  marginLeft: 990,
  marginTop:-50,


},
textp:
{
  fontWeight:'bold',
  fontSize:20,
  paddingTop:20,
  marginLeft:50
},
csep:
{
  textTransform:'initial',

},
};

const PaperExampleSimple4 = () => (
  <div >
  <Paper style={style.prop} zDepth={4}>
  <div style={style.textp}>Who to follow<FlatButton labelStyle={style.csep} label="Refresh" primary={true} /></div>

  <List style={style.textp}>
  <ListItem style={{marginTop:20}}
        disabled={true}
        leftAvatar={
          <Avatar src="https://images-na.ssl-images-amazon.com/images/M/MV5BNDZhNTc1Y2MtZjA2NC00MDM5LThiODMtNTVhZTMxNmNmYWIwXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY317_CR10,0,214,317_AL_.jpg" />
        }
      >
      <div style={{marginRight:130}} > Cristiano </div>
  </ListItem>
  <ListItem style={{marginTop:20}}
        disabled={true}
        leftAvatar={
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72sFFkZjorXIdprQxSKFzh7Fzd_Y8GuqMR-Ahvvyg1nSjQOro" />
        }
      >
      <div style={{marginRight:120}} > Messi</div>
  </ListItem>  <ListItem style={{marginTop:20}}
          disabled={true}
          leftAvatar={
            <Avatar src="https://sharing.wcpo.com/sharewews/photo/2017/12/22/LeBron%20James_1513938967302.jpg_74706443_ver1.0_640_480.jpg" />
          }
        >
        <div  > Lebron James</div>
    </ListItem>  <ListItem style={{marginTop:20}}
            disabled={true}
            leftAvatar={
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EqwryJEuMa-qH3oG7OCAlux-sH-pYL9B3l1xkmagVhOkroupTg" />
            }
          >
          <div > Narendra Modi</div>
      </ListItem>

  </List>

  </Paper>

  </div>
);

export default PaperExampleSimple4;
