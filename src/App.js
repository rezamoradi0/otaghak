import Home from "./pages/home/Home";
import store from "./redux/store";
import "./css/all.css";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  return (
   
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
  
  );
}

export default App;
