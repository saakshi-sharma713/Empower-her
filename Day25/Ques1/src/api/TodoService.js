import api from "./AxiosInstance"

export const getTodos = async()=>{
    const res = await api.get("/todos");
   return  res.data.slice(0,10)
}
export const getTodoById = async(id)=>{
    const res = await api.get(`/todos/${id}`);
     return res;
}