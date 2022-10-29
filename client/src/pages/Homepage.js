import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Picture from "../components/Picture";
import Pucture2 from "../pictures/logo_s.png";
import { useProducts } from '../react-query';

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001890cccaeb03e4bc193f72070dbc9abf6";
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=24";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=24&page=1`;

  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  useEffect(() => {
    search(intialURL);
  }, []);

  useEffect(() => {
    if (currentSearch == "") {
      search(intialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch]);

  const morepicture = async () => {
    let newURL;
    if (currentSearch == "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=24`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=24&page=${page}`;
    }
    setPage(page + 1);

    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  };

  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      setCurrentSearch(input);
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <nav>
        <img src={Pucture2} />
        <div className="search">
          <input
            onInput={(e) => {
              setInput(e.target.value);
            }}
            onKeyPress={handleEnterKey}
            type="text"
            placeholder="搜尋"
          />
        </div>
        <ul>
          <li>
            <Link to="/" id="current">
              首頁
            </Link>
          </li>
          <li>
            <Link to="/Login">登入/註冊</Link>
          </li>
        </ul>
      </nav>
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morepicture}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
