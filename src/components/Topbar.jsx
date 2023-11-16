import { Box } from "@mui/material";
import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { modeContext } from "../context/modeContext";

const Topbar = ({search, setSearch, handleSearch}) => {
  const { isDark } = useContext(modeContext);

  const inputStyle = {
    width: "100%",
    backgroundColor: "transparent",
    padding: "11px 0",
    border: "none",
    outline: "none",
    color: isDark ? "white" : "black",
  };

  return (
    <Box
      my={"15px"}
      bgcolor={isDark ? "#1c1919" : "lightgray"}
      py={"3px"}
      px={"20px"}
      borderRadius={"18px"}
      position={"relative"}
      mx={"30px"}
    >
      <input
        style={inputStyle}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleSearch}
        placeholder="Search Your Word..."
      />
      <BiSearch
      onClick={handleSearch}
        style={{
          fontSize: "18px",
          position: "absolute",
          top: "13px",
          right: "20px",
          stroke: isDark ? "white" : "black",
          cursor : "pointer"
        }}
      />
    </Box>
  );
};

export default Topbar;
