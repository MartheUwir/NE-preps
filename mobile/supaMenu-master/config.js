import axios from "axios";
import * as SecureStorage from "expo-secure-store"

export const axiosInstance = axios.create({
    baseURL: "http://192.168.1.109:2500",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc5ODY5ZDE2NmI0YmEyNGM5MmVmZWEiLCJmdWxsTmFtZSI6IlNodW1idXNobyBEYXZpZCIsInBob25lTnVtYmVyIjoiMDc4ODc4MTA5NiIsImVtYWlsIjoiZGF2aWRzaHVtYnVzaG8xMEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY4NTk5NzU1NiwiZXhwIjoxNjg4NTg5NTU2fQ.1A0UPDoMFKVZPTFv1pYcI_yT_2awR5J_vS_qzDSPSSg"
    }
})
export default axiosInstance

