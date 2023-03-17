import { Route, Routes } from 'react-router-dom';
import Layout from '../components/dashboard/Layout';
import { Auth, Guest } from '../middleware';
import BookDetail from '../pages/BookDetail';
import BookList from '../pages/BookList';
import AddBook from '../pages/dashboard/AddBook';
import Dashboard from '../pages/dashboard/Dashboard';
import ListData from '../pages/dashboard/ListData';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Guest el={<Login />} />} />
      <Route path='/books' element={<BookList />} />
      <Route path='/books/:id' element={<BookDetail />} />
      <Route
        path='/dashboard'
        element={
          <Auth
            el={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        }
      />
      <Route
        path='/dashboard/books-list'
        element={
          <Auth
            el={
              <Layout>
                <ListData />
              </Layout>
            }
          />
        }
      />
      <Route
        path='/dashboard/books-form/add'
        element={
          <Auth
            el={
              <Layout>
                <AddBook />
              </Layout>
            }
          />
        }
      />
      <Route
        path='/dashboard/books-form/edit/:id'
        element={
          <Auth
            el={
              <Layout>
                <AddBook title='Edit Book'/>
              </Layout>
            }
          />
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
