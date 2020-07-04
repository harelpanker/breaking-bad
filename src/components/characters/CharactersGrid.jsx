import React from "react";
import CharactorsItem from "./CharactersItem";
import Spinner from "../../components/layout/Spinner";

const CharactersGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <main className='cards'>
      {items.map((item) => (
        <CharactorsItem key={item.char_id} item={item} />
      ))}
    </main>
  );
};

export default CharactersGrid;
