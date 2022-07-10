import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import store from "./store/store";
import { lightTheme } from "./styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
