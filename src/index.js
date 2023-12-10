import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PageContainer from './containers/PageContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Navbar />
    <div className='app'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='container'>
        <PageContainer>
          <RouterProvider router={App} />
        </PageContainer>
      </div>
    </div>
  </Provider>
);
