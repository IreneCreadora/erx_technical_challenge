import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const FirstPage = lazy(() => import('../pages/First'));
const SecondPage = lazy(() => import('../pages/Second'));
const ThirdPage = lazy(() => import('../pages/Third'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const App = () => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList = 'bg-white dark:bg-slate-700 dark:text-white';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<FirstPage />} />
        <Route path="second" element={<SecondPage />} />
        <Route path="third" element={<ThirdPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
