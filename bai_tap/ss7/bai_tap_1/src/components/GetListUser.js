import { getList } from "../service/userService"
import { deleteUser } from "../service/userService";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router"
export function GetListUser() {
    const [user, setUser] = useState([]);
    const [flag, setFlag] = useState(false);
     const navigate=useNavigate();
    useEffect(() => {
        (async () =>{setUser( await getList())})();
    }, [])


    return (
        <div>
            <button onClick={()=>{setFlag(!flag)}}>Get List</button>     
          {flag ?
                (<table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item,index)=>
                        <tr key={`u_${user.id}`}>
                            <td>{+index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={async()=>{
                               await deleteUser(item.id).then(setUser(await getList())).then(navigate('/'))
                            
                            }}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table> ) : ""
            } 
        </div>
    )
}