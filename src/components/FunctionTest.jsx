import { useState } from 'react'
const FunctionTest = ({name}) => {
    const [state,setState] = useState ({
        name : name,
        lastName : ''
    })
    const handleChangeName = ()=>{
        setState({...state ,name : 'zahra' }) //...state :  vase inke lastName pak nashe
        setAge(15)
    }
    const [age,setAge ] = useState(0)
    return (
        <div>
            <h1>
                hi my name is {state.name}
            </h1>
            <h2>
                i am {age} years old
            </h2>
            <button onClick= {handleChangeName}>change</button>
        </div>
    )
}

export default FunctionTest