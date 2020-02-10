import axios from "axios";
const API ="http://ec2-35-174-153-145.compute-1.amazonaws.com";
export const http = axios.create({
    baseURL: API
})