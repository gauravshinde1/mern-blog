import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider.jsx";
import ErrorHandlerComponent from "./utils/errorHandling/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ErrorHandlerComponent>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorHandlerComponent>
    </Provider>
  </PersistGate>
);
