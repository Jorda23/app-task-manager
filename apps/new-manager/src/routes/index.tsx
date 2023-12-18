import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const PathStudio = lazy(() => import('src/pages/ControllerTasksLists'));

export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/task-list"
        element={
          <Suspense
            fallback={<div></div>}
          >
            <PathStudio />
          </Suspense>
        }
      />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
