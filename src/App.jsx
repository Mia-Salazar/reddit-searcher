import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header/Header";
import useWeatherThreeHour from './hooks/useWeather';
import Home from "./page/Home/Home";

function App() {
  const list = useWeatherThreeHour();
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
