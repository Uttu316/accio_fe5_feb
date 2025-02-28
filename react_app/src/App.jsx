import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router";
import ErrorBoundary from "./components/errorBoundary";

const Assignments = lazy(() => import("./pages/Assignments"));
const Home = lazy(() => import("./pages/home"));
const Topics = lazy(() => import("./pages/Topics"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SignIn = lazy(() => import("./pages/Signin"));
const PrivateRoute = lazy(() => import("./routes/privateRoute"));
const ProtectedRoute = lazy(() => import("./routes/protectedRoute"));
const Product = lazy(() => import("./pages/Product"));

const App = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};
export default App;
