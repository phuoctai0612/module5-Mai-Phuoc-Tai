
import { getListProps } from './service/covidService'
import { useEffect,useState } from 'react'

export default function Home() {
  const [covids,setCovids]=useState([])
  const getProps=()=>{
    (async()=>{
   setCovids(await getListProps()) 
    })()
  };
useEffect(()=>{
  getProps();
},[])
console.log(covids);
  return (

  <div>
    {
    <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Confirmed</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Deaths</th>
      </tr>
      </thead>
      <tbody>
         {covids.map(
      (item,index)=>
      <tr key={index}>
        <td> {item.Date}</td>
       <td>{item.Confirmed}</td>
       <td>{item.Active}</td>
       <td>{item.Recovered}</td>
       <td>{item.Deaths}</td>
        </tr>
    )}
      </tbody>
    </table>
   }
  </div>
  )
}
