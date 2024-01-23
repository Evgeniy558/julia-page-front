import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Home from "./pages/Home/Home";
import Prices from "./pages/Prices";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
