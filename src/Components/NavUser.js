import { Link } from "react-router-dom"

const NavUser=({auth,setAuth})=>{
    return(
        <div>
            <ul>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li>LogOut</li> */}

                {
                    auth ? 
                    <div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                        <li onClick={()=>setAuth(false)}>LogOut</li>
                    </div>
                    :
                    <div>
                        <li><Link to='/'>Home</Link></li>
                        <li onClick={()=>setAuth(true)}>LogIn</li>
                    </div>
                  
                }
            </ul>
        </div>
    )
}

export default NavUser