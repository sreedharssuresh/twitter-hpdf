import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 50,
  width: 50,
  margin: 20,

};

const PaperExampleCircle = () => (
  <div>

    <Paper style={style} zDepth={4} circle={true} />

  </div>
);

export default PaperExampleCircle;
