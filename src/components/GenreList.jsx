import { HStack, List, Image, Button, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList({onSelectGenre, selectedGenre}) {
    const { data: genres, isLoading, error } = useGenres();

    if(isLoading) return <Spinner size="xl" margin="auto" display="block" />
    if(error) return null;

    return (
        <List.Root listStyleType="none">
            {genres.map((genre) => (
                <List.Item key={genre.id} paddingY="5px">
                    <HStack>
                        <Image boxSize="32px" borderRadius="8px" src={getCroppedImageUrl(genre.image_background)} alt={genre.name}  />
                        <Button variant="link" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </List.Item>
            ))}
        </List.Root>
    )
}

export default GenreList