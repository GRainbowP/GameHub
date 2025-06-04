import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

function useData(endpoint, requestConfig = {}, deps = []) {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController();

        apiClient.get(endpoint, { ...requestConfig, signal: controller.signal})
            .then((res) => setData(res.data.results))
            .catch((err) => {
                if(axios.isCancel(err)) return;
                setError(err.message);
            })
            .finally(() => setLoading(false))
        
        return () => controller.abort();
    }, [endpoint, ...deps])

    return {data, error, loading}
}

export default useData