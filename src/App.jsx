import "./App.css";
import Banner from "./components/banner/Banner";
import Copys_Menu from "./components/copys/Copys";
import Footer from "./components/footer/Footer";
import Marks from "./components/marks/Marks";
import Menu from "./components/menu/Menu";
import Plans from "./components/plans/Plan";
import Questions from "./components/questions/Questions";

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Copys_Menu />
      <Marks />
      <Plans />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
