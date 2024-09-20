import { useRoutes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { routes } from '@global/router';

export function App() {
  const content = useRoutes(routes);

  return (
    <>
      <SnackbarProvider maxSnack={2} />
      {content}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}
