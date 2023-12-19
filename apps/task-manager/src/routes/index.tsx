import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const PathStudio = lazy(() => import('src/pages/Home'));
const Tasks = lazy(() => import('src/pages/Tasks'));
const List = lazy(() => import('src/pages/List'));

export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Suspense fallback={<div></div>}>
            <PathStudio />
          </Suspense>
        }
      />

      <Route
        path="/tasks"
        element={
          <Suspense fallback={<div></div>}>
            <Tasks />
          </Suspense>
        }
      />

      <Route
        path="/List"
        element={
          <Suspense fallback={<div></div>}>
            <List />
          </Suspense>
        }
      />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
