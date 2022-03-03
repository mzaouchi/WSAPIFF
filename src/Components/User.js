import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const User=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            {
                loading ? 
                <h2>Mazel</h2>
                :
                <div>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <h4>{user.address.city}</h4>
                </div>
            }
        </div>
    )
}

export default User