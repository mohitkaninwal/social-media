import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const RootContainer = styled("div")({
  textAlign: "center",
  marginTop: "2rem",
});

const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <RootContainer>
      <Typography variant="h6">No posts to display at the moment.</Typography>

      <Box mt={2}>
        {" "}
        {/* Apply margin top */}
        <ButtonGroup variant="outlined" aria-label="Loading button group">
          <Button onClick={onGetPostsClick}>Fetch Posts</Button>
        </ButtonGroup>
      </Box>
    </RootContainer>
  );
};

export default WelcomeMessage;
