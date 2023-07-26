
import { getListCovid } from './service/listCovid'
import { useState,useEffect} from 'react'
export default function Home(props) {
const [listCovid,setListCovid]=useState([])

useEffect(()=>{
  (async()=>{
     setListCovid(await getListCovid())
  })(),[]
})

  return (
  <div>
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
         {listCovid.map(
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
   
  </div>
  )
}
