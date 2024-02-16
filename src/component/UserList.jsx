import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

function UserList() {
  const [users, setUsers] = useState([]);
// ---------------------fetch user----------------
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <List>
        {/*---------------- listing all user List ----------------- */}
        {users.map(user => (
        <Link key={user.id}  to={`/user/${user.login}`} >
          <ListItem >
            <ListItemAvatar>
              <Avatar src={user.avatar_url} />
            </ListItemAvatar>
            <ListItemText primary={`(${user.login})`} />
          </ListItem>
          </Link>
        ))}
      </List>
    
    </div>
  );
}

export default UserList;
