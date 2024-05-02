import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';
import {Reg} from "./react/Reg";
import {Posts} from "./react/posts";
import {Layout} from "./components/layout";
import {UsersList} from "./react/users";
import { useEffect } from "react";
import { signin } from './store/authSlice';
import { UseAppDispatch } from './react/Hook';

function App() {
  const dispatch = UseAppDispatch()
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(signin({Password: foundUser.Password, Email: foundUser.Email}))
    }
  },[dispatch]);

  return (
      <BrowserRouter>
          <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Reg />} />
              <Route path='/users' element={<UsersList />} />
              <Route path="/posts" element={<Posts />} />
          </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);