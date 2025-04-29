import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

function useGames() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()

        apiClient.get('/games', {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if(axios.isCancel(err)) return;
                setError(err.message)
            })
            .finally(() => setLoading(false))

        return () => controller.abort();
    }, [])

    return {games, error, loading}
}

export default useGames