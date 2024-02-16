import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography,Card} from '@mui/material';
function UserDetails() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [username]);
     // ----------------- loader --------------

  if (!user) return <Typography>Loading...</Typography>;

  return (
    // -----------------------User Detail --------------------------
    <div className='flex'>
    <Card>
      <Typography variant="h4">{user.name || user.login}</Typography>
      <Typography >Username: {user.login}</Typography>
      <Typography>Company: {user.company || 'Not available'}</Typography>
      <Typography>Followers: {user.followers}</Typography>
      <Typography>Following: {user.following}</Typography>
      <Typography>Public Repositories: {user.public_repos}</Typography>
    </Card>
    </div>
  );
}

export default UserDetails;
