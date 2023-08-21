import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {store} from './store/store';
import { Provider } from 'react-redux';
import Reg from "./react/Reg.js";
import Home from "./react/posts.js";
import Layout from "./components/layout.js";
import UsersList from "./react/users";

function App() {

  return (
      <BrowserRouter>
          <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path='/users' element={<UsersList />} />
              <Route path="/Reg" element={<Reg />} />
          </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

