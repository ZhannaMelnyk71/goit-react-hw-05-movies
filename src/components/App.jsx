import { Routes, Route} from "react-router-dom";
// import Home from '../pages/Home/Home'
// import Movies from '../pages/Movies/Movies';
// import NotFound from "/pages/NotFound";
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Layout from './Layout/Layout'
// import Cast from './Cast'
// import Reviews from "./Reviews";

import { lazy} from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route> 
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
  );
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
