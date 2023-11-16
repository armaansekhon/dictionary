import React, { useContext, useState } from "react";
import Header from "./components/Header";
import { Box } from "@mui/material";
import { modeContext } from "./context/modeContext";
import { BiSearch } from "react-icons/bi";
import Topbar from "./components/Topbar";
import axios from "axios";

const App = () => {
  const { isDark } = useContext(modeContext);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    if (e.type === "click" && search) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then((res) => {
          setSearchResult(res.data[0]);
        })
        .catch((err) => alert(err.response.data.message));
    } else if (e.type === "keyup") {
      if (e.key === "Enter" && search) {
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
          .then((res) => {
            setSearchResult(res.data[0]);
          })
          .catch((err) => alert(err.response.data.message));
      }
    }
  };

  return (
    <Box
      className={isDark ? "dark" : ""}
      minHeight={"100vh"}
      maxWidth={"800px"}
      mx={"auto"}
      bgcolor={isDark ? "black" : "whitesmoke"}
    >
      <Header />
      <Topbar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <Box>{searchResult && JSON.stringify(searchResult)}</Box>
    </Box>
  );
};

export default App;
