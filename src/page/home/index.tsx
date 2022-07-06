import { Alert, Box, Container, Snackbar, Typography } from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/searchBar";
import { TopBar } from "../../components/topBar";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const valueChange = (value: string) => {
    if (verifyValue(value)) {
      //   const newValue = urlBlankToplus(value); 统一用useKeyword hook来替换url,url会有一点闪烁。
      navigate(`/search/${value}`);
    } else {
      setOpen(true);
    }
  };
  /**
   * 各种情况验证value有效性
   * @param value
   */
  const verifyValue = (value: string) => {
    return value ? true : false;
  };
  return (
    <Box bgcolor={" #fcf7ee;"} width="100%" height="100%">
      <TopBar></TopBar>
      <Container maxWidth="md">
        <Typography component="div" fontSize={38} margin={"60px 0px"} textAlign="center">
          <Box fontWeight="fontWeightRegular" m={1}>
            Search Trends
          </Box>
        </Typography>
        <SearchBar valueChange={valueChange}></SearchBar>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        message="请输入有效关键词"
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          请输入有效关键词!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
