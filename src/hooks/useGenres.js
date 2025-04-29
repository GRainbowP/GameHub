import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

function useGenres() {
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        apiClient.get('/genres', {signal: controller.signal})
            .then((res) => setGenres(res.data.results))
            .catch((err) => {
                if(axios.isCancel(err)) return;
                setError(err.message);
            })
            .finally(() => setLoading(false))
        
            return () => controller.abort();
    }, [])

    return {genres, error, loading};
}

export default useGenres