import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../context/AppContext';

const Auth = ({ el }) => {
  const navigate = useNavigate();
  const { isLogin } = useAppContext();
  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);
  return el;
};

const Guest = ({ el }) => {
  const navigate = useNavigate();
  const { isLogin } = useAppContext();
  useEffect(() => {
    if (isLogin) {
      navigate('/dashboard');
    }
  }, []);
  return el;
};

export { Auth, Guest };
