import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListUsers=()=>{

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>setUsers(res.data))
            .then(()=>setLoading(false))
            .catch((err)=> console.log(err))
    },[])
    return(
        <div>
            {
                loading ? <h2>Mazel</h2> : users.map(user => <h2><Link to={`/users/${user.id}`}>{user.name}</Link></h2>) 
            }
            
        </div>
    )
}

export default ListUsers