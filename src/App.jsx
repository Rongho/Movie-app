import { useState,useEffect } from 'react';
import { fetchDataFromApi } from './utils/api'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration, getGenres } from './Store/homeslice';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Details from './pages/details/details';
import SearchResult from './pages/searchResult/searchResult';
import Explore from './pages/explore/explore';
import ErorrResult from '../src/pages/404/ErorrResult';

function App() {
  const dispatch = useDispatch();
  const  url  = useSelector((state) => state.url);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
}, []);

const fetchApiConfig = () => {
  fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
  });
};
const genresCall = async () => {
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};

  endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
  console.log(data);
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });

  dispatch(getGenres(allGenres));
};
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<ErorrResult />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App