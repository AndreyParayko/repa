import client from "./client";

export const getBooks = () => client.get('/Books')
export const getBookById = (id) => client.get(`/Books/${id}`)

