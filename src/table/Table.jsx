//rac
// import {useState} from 'react'

export const Table = ({setUser,setUsers,users}) => {
    const handleDelete = (id) => {
        setUsers(users.filter(x => x.id !== id))
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
                            users.map( x => (
                                <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.fName}</td>
                                <td>{x.lName}</td>
                                <td>{x.job}</td>
                                <td><button  onClick={ () => handleDelete(x.id)} className="btn btn-danger">Delete</button></td>
                                <td><button onClick={ () => {setUser(x)} } className="btn btn-primary">update</button></td>
                                </tr>
                                
                            ))
                            }
                </tbody>
            </table>
        </div>
    )
}

