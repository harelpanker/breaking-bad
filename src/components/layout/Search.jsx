import React, { useState } from "react";

const Search = ({ newQuery }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    newQuery(val);
  };

  return (
    <section className='search'>
      <form autoComplete='off'>
        <input
          autoFocus
          type='text'
          placeholder='Search...'
          className='form-control'
          value={search}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default Search;
