import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500,grey50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
const AvatarExampleSimple = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-twitter-512.png" size={30} />
      }
    >
    </ListItem>
    </List>
  ) ;
  const AvatarExampleSimples = () => (
    <List>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar src="https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125" size={30} />
        }
      >
      </ListItem>
      </List>
    ) ;
const styles = {
  mediumIcon: {
    width: 35,
    height: 28,
    color:blue500,
   },

  leftwidth:
  {
    marginLeft:50,
    height:70,
    marginTop:5
  },
  leftalignment:
  {
    marginLeft:350,
    height:70,
    marginTop:5
  },
  textcolor:
  {
    backgroundColor:blue500
  },
tweet:
{

  width: 100,
     height: 40,
     borderRadius:100
},
};
const style={
  backgroundColor:
    grey50,
    marginTop:-35,
    height:80
}
const IconButtonExampleComplex = () => (
  <div >
  <IconButton  iconStyle={styles.mediumIcon} style={{marginTop:20}}>
      <ActionHome  />
      </IconButton>

  <IconButton   iconStyle={styles.mediumIcon} style={styles.leftwidth} >
          <NotificationsIcon />
          </IconButton>
  <IconButton   iconStyle={styles.mediumIcon} style={styles.leftwidth} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                  </IconButton>
  <IconButton   iconStyle={styles.mediumIcon}style={styles.leftalignment} >
                            <AvatarExampleSimple />
                            </IconButton>
  <IconButton   iconStyle={styles.mediumIcon}style={styles.leftalignment} >
              <TextField
      hintText="aadhar" style={{backgroundColor:blue500,width:100,height:20}}
    />
             </IconButton>
   <IconButton   iconStyle={styles.mediumIcon}style={styles.leftwidth} >
              <AvatarExampleSimples/>

             </IconButton>
  <IconButton   iconStyle={styles.mediumIcon}style={styles.leftwidth} >
                <ListItem
        disabled={true}
        leftAvatar={<Avatar size={50} style={styles.tweet} backgroundColor={blue500}>Tweet</Avatar>}
      />

             </IconButton>


  </div>
);





const AppBarExampleIconButton = () => (
  <AppBar
  style={style}
  iconElementLeft={<IconButtonExampleComplex/>}
  />
);

export default AppBarExampleIconButton;
