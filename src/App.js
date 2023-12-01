import './App.css';
import "semantic-ui-css/semantic.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import useFetch from './hooks/useFetch';


function App() {
  const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=2086162a3328bb10b463284e92ae7afc&hash=9e26d5b27b4420c1c17c6a27c8f17d6e')
  
  console.log(exampleApi);
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/inicio' element={<Home />}/>
          <Route path='/series' element={<Series />}/>
          <Route path='/comics' element={<Comics />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
