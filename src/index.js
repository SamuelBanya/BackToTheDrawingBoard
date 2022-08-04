// Related Docs page:
// https://reactrouter.com/docs/en/v6/getting-started/overview
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Used 'create-react-app' as a basis:
// https://reactjs.org/docs/create-a-new-react-app.html

// Changed as per being forced to by React themselves:
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

// Also used this as a reference for V6 style routing:
// https://reactrouter.com/docs/en/v6/getting-started/overview

// Changed as per this StackOverflow post:
// https://stackoverflow.com/questions/70604020/please-change-the-parent-route-path-to-route-path

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
