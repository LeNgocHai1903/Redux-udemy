import { Routes, Route } from "react-router-dom";

import { Navigation } from "./container/Navigation/Navigation";
import { HomePage } from "./pages/HomePage/HomePage";
import { SignIn } from "./pages/Authenticate/Sign-in/Sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
