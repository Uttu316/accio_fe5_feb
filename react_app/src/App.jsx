import Assignments from "./pages/Assignments";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router";
import Topics from "./pages/Topics";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/Signin";
import { PrivateRoute, ProtectedRoute } from "./routes";
import Product from "./pages/Product";

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
