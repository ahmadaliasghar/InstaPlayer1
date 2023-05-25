import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import CustomDrawer from "../components/drawer/Drawer";
import Clubs from "../pages/clubs/Clubs";
import Sponsors from "../pages/sponsors/Sponsors";
import Agenda from "../pages/agenda/Agenda";
import Parameters from "../pages/parameters/Parameters";
import Utilities from "../pages/utilities/Utilities";
import { useState } from "react";
import Detail from "../pages/detail/Detail";
import { Locales } from "../i18n";
import Provider from "../i18n/Provider";
import SignIn from "../pages/signin/SignIn";
const Routing = () => {
  //----------------Function called in case when searched page does not exists
  function NoMatch() {
    let location = useLocation();
    return (
      <center style={{ marginTop: "30vh" }}>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </center>
    );
  }

  const [isUpdate, setIsUpdate] = useState(false);
  const [lang, setlang] = useState(Locales.ENGLISH);

  return (
    <>
      <Provider locale={lang}>
        <BrowserRouter>
          <CustomDrawer
            isUpdate={isUpdate && "Clubs - Details"}
            setIsUpdate={setIsUpdate}
            setlang={setlang}
          />
          <main>
            <Box
              sx={{
                width: `calc(100% - ${250}px)`,
                ml: `${250}px`,
                mt: "20px",
              }}
            >
              <Routes>
                <Route path="/" element={<Clubs />} />
                <Route
                  path="/clubs"
                  element={<Clubs setIsUpdate={setIsUpdate} />}
                />
                <Route
                  path="/agenda"
                  element={<Agenda headerValue="Detail Agenda" />}
                />
                <Route
                  path="/sponsors"
                  element={<Sponsors headerValue="Detail Sponsors" />}
                />
                <Route
                  path="/parameters"
                  element={<Parameters headerValue="Parameters" />}
                />
                <Route path="/utilities" element={<Utilities />} />
                <Route path="/clubs/details" element={<Detail />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Box>
          </main>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Routing;
