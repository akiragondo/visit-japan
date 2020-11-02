import "./App.css";
import ExploreSection from "./components/ExploreSection";
import Header from "./components/Header";
import MustSee from "./components/MustSee";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <MustSee />
        <ExploreSection />
      </div>
    </div>
  );
}

export default App;
