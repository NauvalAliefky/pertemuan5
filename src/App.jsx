import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <div className="container">
      <Header />
      <Movies />
      <Footer nama="Ahyar Pattani" />
    </div>
  );
}

export default App;
