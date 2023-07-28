
import axios from 'axios'
export async function getListProps() {
    const res = await axios.get("http://localhost:8080/covids")
    return (res.data)
  }