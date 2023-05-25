import "./App.css";
import { store } from "./app/store";
import SignIn from "./pages/signin/SignIn";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <SignIn />
    </>
  );
}

export default App;
