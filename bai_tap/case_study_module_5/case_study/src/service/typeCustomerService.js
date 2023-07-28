import axios from "axios";

export async function getListTypeCustomer(){
    const res = await axios.get("http://localhost:8080/typeCustomers")
    return res.data;
}
export async function getTypeCustomer(id) {
    const res = await axios.get("http://localhost:8080/typeCustomers/"+id)
    return res.data;
}