import axios from "axios";

export const calendarApi = axios.create({
    baseURL: "http://localhost:3000/",
});
