
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Order from './components/Order';
import Home from './components/Home';
import About from './components/About';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: 'home',
          element: <Home></Home>
        },


        {
          path: 'order',
          element: <Order></Order>
        },

        {
          path: 'about',
          element: <About></About>
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
