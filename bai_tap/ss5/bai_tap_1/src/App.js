
  export const Contract=[{
    nameContract:"Bao hiem",
    email:"sieuem2002@gmail.com",
    phone:"0981849289",
    message:"abc"
  }]
  
  export function ListContract(){
    return(
        <div>
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
                    (contractMini,index)=>
                        <tr key={`ct_${index}`}>
                            <td>{contractMini.nameContract}</td>
                            <td>{contractMini.email}</td>
                            <td>{contractMini.phone}</td>
                            <td>{contractMini.message}</td>
                        </tr>
                    
                )}
            </tbody>
            </table>
        </div>
    )
  }

