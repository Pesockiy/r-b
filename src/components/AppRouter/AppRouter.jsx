import { Routes, Route } from "react-router-dom";

import Layout from "../Containers/Layout/Layout";

import { pageRoutes } from "../../routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {pageRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
