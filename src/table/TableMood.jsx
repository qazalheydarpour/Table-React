//rac
import {useState} from 'react'

const usersList = [
    {id : 1 , fName : 'harry' , lName : 'potter' , job : 'Wizard'},
    {id : 2 , fName : 'michael' , lName : 'scott' , job : 'manager'},
    {id : 3 , fName : 'jesse' , lName : 'pinkMan' , job : 'cooker'},
    {id : 4 , fName : 'jim' , lName : 'halpert' , job : 'salesMan'}
]
export const Table = () => {
    const [users,setUsers] = useState(usersList)
    const [user,setUser] = useState({fName:'',lName : '',job:''})
    const [mood,setMood] = useState('creat')
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }
    const makeUniqID = ()=>{
        return parseInt(10000*Math.random())
    }
    const handelAdd = (e) => {
        e.preventDefault() // vase inke bade zadan e submit page refresh nashe
        console.log(e);
        // const data = new FormData(e.target)
        // const fName = data.get('firstName')
        // const lName = data.get('lastName')
        // const job = data.get('job')
        // .................. or : .........................
        // const {fName ,lName , job } = user
        // setUsers([...users,{id:makeUniqID() ,fName,lName,job}])
        // ...........................................
        if (mood == 'update'){
            setUsers(users.map(oldUser => user.id === oldUser.id ? user : oldUser))
        }else {
            setUsers([...users,{id:makeUniqID() , ...user }])
        } 
        e.target.reset()
        setUser( {fName:'',lName : '',job:''} )
        setMood('creat')
    } 
    const handelChange = (e) => {
        setUser({ ...user , [e.target.name] : e.target.value}) // => it will make a key name by [e.target.name]
        
    }
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>first name</td>
                        <td>last name</td>
                        <td>job</td>
                        <td>action</td>
                    </tr> 
                </thead>
                <tbody>
                        {
                            users.map ( user => (
                                <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fName}</td>
                                <td>{user.lName}</td>
                                <td>{user.job}</td>
                                <td><button  onClick={ () => handleDelete(user.id)} className="btn btn-danger">Delete</button></td>
                                <td><button onClick={ () => {setUser(user) ; setMood('update')} } className="btn btn-primary">update</button></td>
                                </tr>
                                
                            ))
                        }
                   
                </tbody>
            </table>
            <form className="form-inline" onSubmit={handelAdd} >
                <div>
                    <label htmlFor='input1'>First Name</label>
                    <input  onChange={handelChange} id={'input1'} type='text' name={'fName'} value={user.fName}></input>
                </div>
                <div>
                    <label htmlFor='input2'>Last Name</label>
                    <input onChange={handelChange} id={'input2'} type='text' name={'lName'} value={user.lName}></input>
                </div>
                <div>
                    <label htmlFor='input3'>job</label>
                    <input onChange={handelChange} id={'input3'} type='text' name={'job'} value={user.job}></input>
                </div>
               <button className="btn btn-secondary" style={ {margin:'25px 0 0 5px'} }>submit</button>
            </form>
        </div>
    )
}

