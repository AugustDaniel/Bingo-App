import axios from 'axios'
import axiosRetry from "axios-retry";

const api = axios.create(
    {
        baseURL: import.meta.env.REACT_APP_API_URL
    }
)

axiosRetry(
    api,
    {
        retries: 3,
        retryDelay: axiosRetry.linearDelay
    }
)

export default api