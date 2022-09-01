import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
export default function BasicTextFields({
  title,
  setPassword,
  setEmail,
  handleAction,
}) {
  const styles = {
    header: {
      background: "rgba(0, 0, 0, 0.5)",
      backgroundImage:
        "url(https://images.shiksha.com/mediadata/images/1492404908phpX18V72.jpeg)",
      content: " ",
      display: "block",
      opacity: 1,
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  return (
    <div style={styles.header}>
      <div
        className="heading-container"
        style={{
          paddingBottom: "150px",
          marginLeft: "65px",
        }}
      >
        <div>
          <h3 style={{ border: "black" }}>MAMCET LOGIN</h3>
        </div>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            label="Enter the Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Enter the Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </Box>

        <Button title={title} handleAction={handleAction} />
      </div>
    </div>
  );
}

//  url("https://pbs.twimg.com/media/E3lRuASUYAAWu5k.jpg")
