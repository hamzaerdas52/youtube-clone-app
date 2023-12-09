import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "videos/:id",
    element: <Detail/>,
  },
  {
    path: "search/:keyword",
    element: <Search/>,
  }
]);

export default App;
