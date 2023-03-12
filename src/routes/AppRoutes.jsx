import { Route, Routes } from 'react-router-dom';
import BookDetail from '../pages/BookDetail';
import BookList from '../pages/BookList';
import Dashboard from '../pages/dashboard/Dashboard';
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
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
