import axios from "axios";

export async function getListCustomer() {
        const res = await axios.get("http://localhost:8080/customers")
        return res.data;
}

export async function createCustomer(customer) {
        await axios.post("http://localhost:8080/customers", customer)
}
export async function getCustomer(id) {
        const res = await axios.get("http://localhost:8080/customers/" + id)
        return res.data;
}
export async function editCustomer(customer) {
       await axios.put("http://localhost:8080/customers/" + customer.id, customer)
       
}
