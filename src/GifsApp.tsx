import { mockGifs } from "./mock-data/gifs.mock.ts";
import { CustomHeader } from "./shared/components/CustomHeader.tsx";
import { SearchBar } from "./shared/components/SearchBar.tsx";
import { PreviousSearches } from "./shared/gifs/components/PreviousSearches.tsx";
import { GifList } from "./shared/gifs/components/GifList.tsx";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>

      {/* Search Bar */}
      <SearchBar placeholder="Buscar Gifs"/>

      {/* Busquedas previas */}
      <PreviousSearches searches={["Goku", "Dragon Ball Z"]}/>

      {/* Gifs */}
      <GifList gifs={mockGifs}/>
    </>
  );
}