import { Contract } from "../App"
import { Link } from "react-router-dom";
console.log(Contract);
export function ListContract(){
    return(
        
        <div>
           <Link to={`/create`}>Create</Link> 
            <table>
                <thead>
                <tr>
                    <th>Name Contract</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {Contract.map(
                    (item,index)=>
                        <tr key={`ct_${index}`}>
                            <td>{item.nameContract}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.message}</td>
                        </tr> 
                )}
            </tbody>
            </table>
        </div>
    )
  }

