import React from "react";
import { Container, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./style.scss";

function Registrate() {
  const [show, setShow] = React.useState(false);
  const [phone, setPhone] = React.useState("");

  // const [name, setName] = React.useState("");
  // const [number, setNumber] = React.useState("");
  // const [email, setEmail] = React.useState("");

  // const handleSend = (e) => {
  //   e.preventDefault();

  //   if (name.length >= 5) {
  //     console.log("hi");
  //   }
  //   // if (name === "") {
  //   //   console.log("hi");
  //   // }
  // };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: "0",
        right: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#343434d1",
      }}
    >
      <Grid container>
        <Grid item xs={0} sm={4} md={4}></Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Container
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 3px 2px blue",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form
            // noValidate autoComplete="off" onSubmit={handleSend}
            >
              <TextField
                // onClick={(e) => setName(e.target.value)}
                variant="outlined"
                type="text"
                label="Your name"
                size="small"
                fullWidth
                // value={name}
              />{" "}
              <br />
              <br />
              <PhoneInput
                country={"uzb"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <br />
              <br />
              <TextField
                // onClick={(e) => setEmail(e.target.value)}
                variant="outlined"
                type="email"
                label="Your Email"
                size="small"
                fullWidth
                // value={email}
              />{" "}
              <br />
              <br />
              {show ? null : null}
              <Button
                style={{ width: "20%" }}
                variant="contained"
                type="submit"
                size="small"
              >
                Submit
              </Button>
            </form>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
export default Registrate;
