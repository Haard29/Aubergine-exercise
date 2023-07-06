import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
