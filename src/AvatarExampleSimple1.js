import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


const style = {
  width:50,
  height:50
  };

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarExampleSimple1 = () => (
  <List style={style}>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar style={style} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" size={150}/>
      }
    >
    </ListItem>
  </List>
);

export default AvatarExampleSimple1;
