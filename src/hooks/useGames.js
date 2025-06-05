import useData from "./useData"

const useGames = (selectedGenre, selectedPlatform, sortOrder) => {
    return useData('/games', { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id , ordering: sortOrder} }, [selectedGenre?.id, selectedPlatform?.id, sortOrder]); 
}; 

export default useGames