import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Createpost() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mb: 2, display: "block" }, // Set margin bottom and display block for all children
        "& > :first-of-type": { mb: 2 }, // Set margin bottom for first child
        "& > :last-child": { mt: 2 }, // Set margin top for last child
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title" variant="outlined" />
      <TextField id="filled-basic" label="Description" variant="filled" />
      <Button variant="contained" color="primary">
        Post
      </Button>
    </Box>
  );
}
