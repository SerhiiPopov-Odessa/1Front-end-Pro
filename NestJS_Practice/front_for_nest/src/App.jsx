import './App.css'
import UserList from './componets/UserList'
import UserForm from './componets/UserForm'

function App() {
 

  return (
    <div style={{padding: '20px'}}>
      <h1>Панель пользователей</h1>
      <UserForm />
      <UserList />
    </div>
  )
}

export default App
