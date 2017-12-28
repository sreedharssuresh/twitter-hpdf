import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {blue500,grey50,grey600} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
const style = {
  paddingp:{
  height: 380,
  width: 300,
  marginLeft:10,
  marginTop:-470,
},
paperp:
{
  height: 400,
  width: 300,
  marginLeft: 1000,
  top:0,

  textAlign: 'center',
},
tweet:
{
  width: 300,
     height:0,
     margin:10,
     fontWeight:'bold',

},
boldp:
{
  paddingTop:30,
  fontWeight:'bold'
},
colorp:
{
  color:blue500,
  fontWeight:'bold',
  paddingTop:10
},
iconp:
{
  display: 'inline-block',
},
marginp:
{
  marginLeft:80,
},
};

const CardExampleWithAvatar = () => (
  <Card style={style.paddingp}>

    <CardMedia
    >
      <img src="https://images.jansatta.com/2017/07/apj-movie-poster.jpg" alt="" />

    </CardMedia>
    <div   >
    <Avatar
    src='https://vignette.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125'
  size={100}
  backgroundColor='rgba(0,0,0,0)'
  style={style.iconp}/><div style={style.iconp}><div style={{fontWeight:'bold',fontSize:25,paddingLeft:20}}>SreedharS</div><div style={{color:grey600}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@ilkedlkjas6561</div></div>
</div>
<div style={style.boldp}>Tweets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Followers</div>
<div style={style.colorp}>&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.7k &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5M</div>
</Card>
);

export default CardExampleWithAvatar;
