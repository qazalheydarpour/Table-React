import './App.css';
import {useState} from 'react'
// import {Table} from './table/Table'
import {Table} from './table/Table'
import Form from './table/Form'
const usersList = [
  {id : 1 , fName : 'harry' , lName : 'potter' , job : 'Wizard'},
  {id : 2 , fName : 'michael' , lName : 'scott' , job : 'manager'},
  {id : 3 , fName : 'jesse' , lName : 'pinkMan' , job : 'cooker'},
  {id : 4 , fName : 'jim' , lName : 'halpert' , job : 'salesMan'}
]
function App() {
  const [users,setUsers] = useState(usersList)
  const [user,setUser] = useState({fName:'',lName : '',job:''}) 
  return (
    <div className="App">
      <Table user={user} users={users} setUser={setUser} setUsers={setUsers} />
      <Form user={user} users={users} setUser={setUser} setUsers={setUsers} />
      
    </div>
  );
}

export default App;
