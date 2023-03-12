import { Button, Typography } from "@mui/material";

import Routing from "./../../routing/Routing";
import { useState } from "react";
import React from "react";
import "./signin.css";

function SignIn() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  const handleSubmit = () => {
    if (username === "user" && password === "user") {
      setloggedIn(true);
    } else {
      alert("Incorrect username or password!!!");
    }
  };

  return (
    <>
      {loggedIn ? (
        <Routing />
      ) : (
        <div>
          <Typography
            sx={{ p: 1 }}
            variant="h4"
            style={{
              paddingLeft: "50px",
              paddingTop: "30px",
              fontSize: "20px",
            }}
          >
            InstaPlayer
          </Typography>
          <div className="container">
            <div className="signin-box">
              <Typography sx={{ mb: 3 }} variant="h6">Connexion</Typography>
              <input
                type="text"
                placeholder="E-mail"
                value={username}
                required
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                id="password"
                value={password}
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              <Button
                variant="text"
                style={{ textTransform: "capitalize", marginTop: "10px", fontsize: "14px", color: "black"}}
                onClick={handleSubmit}
              >
                Se connector
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;
