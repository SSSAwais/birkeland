import "./App.css";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
