import React from 'react';
import { useEffect, useState } from 'react';
import { getUsers} from "../api"

function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
      setIsLoading(true);
      getUsers()
      .then(setUsers)
      .catch(() => setError('Не удалось загрузить пользователя'))
      .finally(() => setIsLoading(false))
    },[]);


  return (
    <div>
        <h2>Список пользователей</h2>

        {isLoading && <p>Загрузка ...</p>}

        {error && <p style={{color:'red'}}>{error}</p>}

        {!isLoading && !error && users.length === 0 && (<p>Пользователей пока нет</p>)}
        
        {users.map(user =>(
                <p key={user.id}>{user.name} (ID: {user.id})</p>
            ))}
    </div>
  )
}

export default UserList