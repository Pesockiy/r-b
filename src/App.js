import { React, useEffect, useState, useCallback, useMemo } from 'react';
import AppRouter from './components/AppRouter/AppRouter';

import Todos from './pages/Todos';

import P from "./pages/P";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/1`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      <AppRouter />
      {/* <P /> */}
      {/* <Todos /> */}
    {/* <h1>{data.title}</h1> */}
    </>
  );
}

export default App;
