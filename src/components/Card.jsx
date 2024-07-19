import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function Card({ issue }) {
  return (
    <Paper style={{ padding: '10px', margin: '10px 0' }}>
      <Typography variant="body1">{issue.title}</Typography>
      <Typography variant="body2">{issue.user.login}</Typography>
    </Paper>
  );
}

export default Card;
