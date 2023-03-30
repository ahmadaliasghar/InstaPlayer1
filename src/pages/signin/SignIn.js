import { Button, Typography } from "@mui/material";
import Routing from "./../../routing/Routing";
import { useState } from "react";
import React from "react";
import "./signin.css";
import Provider from "../../i18n/Provider";
import { Locales } from "../../i18n/Locales";
import { FormattedMessage } from "react-intl";

function SignIn(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const [lang, setlang] = useState(Locales.ENGLISH);

  const handleSubmit = () => {
    if (username === "user" && password === "user") {
      setloggedIn(true);
    } else {
      alert("Incorrect username or password!!!");
    }
  };

  const handleLanguageChange = (e) => {
    setlang(e.target.value);
  }

  return (
    <>
      {loggedIn ? (
        <Routing />
      ) : (
        <Provider locale={lang}>
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
              <select name="" id="" style={{marginLeft: "5px"}} onChange={handleLanguageChange}>
            <option value="en-US">ENGLISH</option>
            <option value="fr-ca">FRENCH</option>
          </select>
            </Typography>
            <div className="container">
              <div className="signin-box">
                <Typography sx={{ mb: 3 }} variant="h6">
                <FormattedMessage id='Login' />
                </Typography>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    required
                    onChange={(e) => setusername(e.target.value)}
                  />
                  <FormattedMessage id='Password'>
                    {placeholder => <input
                    type="password"
                    placeholder={placeholder}
                    id="password"
                    value={password}
                    required
                    suggested="current-password"
                    onChange={(e) => setpassword(e.target.value)}
                  />}
                  </FormattedMessage>
                  
                  <Button
                    type={"submit"}
                    variant="text"
                    style={{
                      textTransform: "capitalize",
                      marginTop: "10px",
                      fontsize: "14px",
                      color: "black",
                      textAlign: "center",
                      margin: "auto",
                      display: "block",
                    }}
                    onClick={handleSubmit}
                  >
                    <FormattedMessage id='Connect' />
                  </Button>
                </form>
              </div>
            </div>
        </div>
                </Provider>
      )}
    </>
  );
}

export default SignIn;
