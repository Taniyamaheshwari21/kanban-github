import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Card from './Card';

function Column({ title, issues }) {
  return (
    <Paper style={{ width: '30%', padding: '10px' }}>
      <Typography variant="h6">{title}</Typography>
      {issues.map(issue => (
        <Card key={issue.id} issue={issue} />
      ))}
    </Paper>
  );
}

export default Column;
