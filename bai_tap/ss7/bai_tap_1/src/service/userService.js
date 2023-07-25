import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080"
export async function getList() {
    const res = await axios.get("/users");
    return res.data;
}
export async function deleteUser(id) {
    await axios.delete("/users/"+ id);
}