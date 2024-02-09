import React from "react";

export const Search = (props) => {
  const { isSearch, onSearch, onHandleSearch, isLoading, isColor } = props;
  return (
    <>
      <input
        type="text"
        name="search"
        value={isSearch}
        onChange={(e) => onSearch(e.target.value)}
        className="rectangle"
        placeholder="Artis / Album / Title"
      />
      <div className="rectangle-search" style={{ background: `${isColor}`, color: '#fff' }} onClick={onHandleSearch} disabled={isLoading ? 'disabled' : ''}>
        <span className="search-title">Search</span>
      </div>
    </>
  );
}
