import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

function useGames() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController()

        apiClient.get('/games', {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if(axios.isCancel(err)) return;
                setError(err.message)
            })

        return () => controller.abort();
    }, [])

    return {games, error}
}

export default useGames