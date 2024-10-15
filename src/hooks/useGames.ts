import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {
        platform: Platforms;
    }[];
    metacritic: number;
  }
  
  interface FetchGameResponse {
    count: number;
    result: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
            .get<FetchGameResponse>("/games", { signal: controller.signal })
            .then((res) => {
            setGames(res.data.result);
            setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => {
            controller.abort();
        }
    }, []);

    return { games, error, isLoading };
}

export default useGames