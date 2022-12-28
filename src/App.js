import logo from "./logo.svg";
import "./App.css";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const APP_ID = "D36AC4AB-3D29-4C0A-B4AE-27A184B255D6";
const USER_ID = "User1";
const ACCESS_TOKEN = "660d53061d5b82bc0848cc0abab9c90566ff8f07";

// const USER_ID = "User2";
// const ACCESS_TOKEN = "deb53afce7ce2dd1719c2ec075f984c6cd45b2c7";

function App() {
  return (
    <div className="App">
      <SendbirdApp accessToken={ACCESS_TOKEN} appId={APP_ID} userId={USER_ID} />
    </div>
  );
}

export default App;
