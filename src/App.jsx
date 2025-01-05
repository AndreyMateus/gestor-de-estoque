// Styles
import './styles/globals.css';

// Components
import { RouterProvider } from "react-router-dom";

// Router
import router from "./router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
