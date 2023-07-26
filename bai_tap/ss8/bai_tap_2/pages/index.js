

import axios from 'axios'
export async function getStaticProps() {
  const res = await axios.get("http://localhost:8080/covids")
  return {
    props: {
      covids: res.data
    }
  }
}
export default function Home({covids}) {
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
   
  </div>
  )
}
