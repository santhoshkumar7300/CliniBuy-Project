import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/Authentication/SignIn";
import NotFound from "./Components/NotFound/NotFound";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/HomePage/Home";
import Blog from "./Components/Blog";
import ProductView from "./Components/ProductView";
import View from "./Components/View";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="productview" element={<ProductView />} />
        <Route path="view" element={<View />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
