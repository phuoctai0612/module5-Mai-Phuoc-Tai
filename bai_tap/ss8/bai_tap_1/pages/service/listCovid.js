// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8080"
export async function getListCovid() {
  const res = await axios.get("/covids")
  return {
    props: {
      covids: res.data
    }
  }

}