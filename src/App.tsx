import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import 'tm-ui/dist/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@global/libs/tanstack';
import { router } from '@global/router';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <SnackbarProvider maxSnack={2} />
        <RouterProvider router={router} />
      </>
    </QueryClientProvider>
  );
}
