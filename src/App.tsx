import { useRoutes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { routes } from '@global/router';
import 'tm-ui/dist/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@global/libs/tanstack';

export function App() {
  const content = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <SnackbarProvider maxSnack={2} />
        {content}
      </>
    </QueryClientProvider>
  );
}
