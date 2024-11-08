import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router-dom';
import 'tm-ui/dist/globals.css';
import { router } from '@global/router';
import { WithReactQueryProvider } from '@global/libs/tanstack';
import { WithAppContextProvider } from '@global/context';
import '@global/libs/i18n';

export function App() {
  return (
    <WithAppContextProvider>
      <WithReactQueryProvider>
        <SnackbarProvider maxSnack={2} />
        <RouterProvider router={router} />
      </WithReactQueryProvider>
    </WithAppContextProvider>
  );
}
