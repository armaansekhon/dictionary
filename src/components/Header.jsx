import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BiBookAlt,BiSun } from "react-icons/bi";
import { IconButton, Switch } from "@mui/material";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { modeContext } from "../context/modeContext";

const Header = () => {
    const {isDark, toggleMode} = useContext(modeContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "transparent", color: "black" }}
      >
        <Toolbar sx={{}}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
            <BiBookAlt
              style={{
                fontSize: "45px",
                color: "#bcb7a3",
                fontWeight: "400",
              }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"4px"}>
            <Switch  color="secondary" checked={isDark} onChange={toggleMode} />
            {isDark ? (
              <BiSun
                style={{
                  fontSize: "25px",
                  color: "#bcb7a3",
                  fontWeight: "400",
                }}
              />
            ) : (
              <FaRegMoon
                style={{
                  fontSize: "16px",
                  color: "#bcb7a3",
                  fontWeight: "400",
                }}
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
