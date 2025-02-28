import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

const Assignments = lazy(() => import("./pages/Assignments"));
const Home = lazy(() => import("./pages/home"));
const Topics = lazy(() => import("./pages/Topics"));
const Projects = lazy(() => "./pages/Projects");
const NotFound = lazy(() => "./pages/NotFound");
const SignIn = lazy(() => "./pages/Signin");
const { PrivateRoute, ProtectedRoute } = lazy(() => "./routes");
const Product = lazy(() => "./pages/Product");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:productId" element={<Product />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
