import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Column from './Column';

function Board() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await axios.get('https://api.github.com/repos/taniyamah21/kanban-github/issues');
      setIssues(response.data);
    };
    fetchIssues();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Column title="To Do" issues={issues.filter(issue => issue.state === 'open')} />
      <Column title="In Progress" issues={issues.filter(issue => issue.state === 'open')} />
      <Column title="Done" issues={issues.filter(issue => issue.state === 'closed')} />
    </div>
  );
}

export default Board;
