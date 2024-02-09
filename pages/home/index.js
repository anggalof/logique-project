import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusics } from "../../common";
import { Navigation } from "../../components/Navigation";
import { Search } from "../../components/Search";
import Modal from "../../components/Modal";

const App = () => {
  const [search, setSearch] = useState("");
  const loading = useSelector((state) => state.musics.loading);
  const musics = useSelector((state) => state.musics.data);
  const modal = useRef(null);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchMusics(search));
  };

  const openSearch = () => {
    return modal.current.open();
  };

  return (
    <React.Fragment>
      {!musics && (
        <HomePage
          isSearch={search}
          isLoading={loading}
          onSearch={setSearch}
          onHandleSearch={handleSearch} />
      )}
      {musics && (
        <>
          <Navigation openSearch={openSearch} />
          <MusicList isSearch={search} isMusics={musics} />
          <Modal ref={modal}>
            <div className="container modal-transparant">
              <Search
                isSearch={search}
                onSearch={setSearch}
                isColor="#a45deb"
                onHandleSearch={handleSearch} />
            </div>
          </Modal>
        </>
      )}
    </React.Fragment>
  );
};

const HomePage = (props) => {
  const { isSearch, isLoading, onSearch, onHandleSearch } = props;
  return (
    <div className="container bg">
      <img
        src="/images/logo.svg"
        alt="Ngmusic Logo"
        className="logo"
        width={100}
        height={24}
        priority
      />
      <Search
        isSearch={isSearch}
        onSearch={onSearch}
        onHandleSearch={onHandleSearch}
        isLoading={isLoading}
      />
    </div>
  );
}

const MusicList = (props) => {
  const { isMusics, isSearch } = props;
  return (
    <div className="wrapper">
      <div className="container">
        <div className="result-wrap">
          <span className="search-title">Search result for:</span>
          <span className="search-artist-name">{isSearch}</span>
        </div>
        {isMusics && isMusics.results.map((item, index) => {
          return (
            <div key={index+1}>
              <CardMusics
                artistName={item.artistName}
                artworkUrl100={item.artworkUrl100}
                trackName={item.trackName}
                primaryGenreName={item.primaryGenreName}
                trackPrice={item.trackPrice}
              />
            </div>
          );
        })}
        <div className="load-more">
          Load More
        </div>
      </div>
    </div>
  );
};

const CardMusics = (props) => {
  const { artistName, artworkUrl100, trackName, primaryGenreName, trackPrice } = props;
  return (
    <div className="card-section">
      <div className="card-detail">
        <div className="cover">
          <img src={artworkUrl100} alt="preview" />
        </div>
        <div className="info">
          <div className="artist-name">{artistName}</div>
          <div className="song-title">{trackName}</div>
          <div className="genre-price">
            <div className="genre">{primaryGenreName}</div>
            <div className="price-detail">
              <img src="/images/currency-dollar.svg" alt="currency" />
              <div className="price">{trackPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
