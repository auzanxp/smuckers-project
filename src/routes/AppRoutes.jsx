import { Route, Routes } from 'react-router-dom';
import Layout from '../components/dashboard/Layout';
import BookDetail from '../pages/BookDetail';
import BookList from '../pages/BookList';
import AddBook from '../pages/dashboard/AddBook';
import Dashboard from '../pages/dashboard/Dashboard';
import ListData from '../pages/dashboard/ListData';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/booklist' element={<BookList />} />
      <Route path='/booklist/:id' element={<BookDetail />} />
      <Route
        path='/dashboard'
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path='/list-data'
        element={
          <Layout>
            <ListData />
          </Layout>
        }
      />
      <Route
        path='/form-buku'
        element={
          <Layout>
            <AddBook />
          </Layout>
        }
      />
      <Route
        path='/form-buku/:id'
        element={
          <Layout>
            <AddBook />
          </Layout>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
