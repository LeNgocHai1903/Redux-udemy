import { Routes, Route } from "react-router-dom";

import { Navigation } from "./container/navigation/Navigation";
import { HomePage } from "./pages/home-page/HomePage";
import { Shop } from "./pages/shop/Shop";
import { Authentication } from "./pages/authenticate/Authenticate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
