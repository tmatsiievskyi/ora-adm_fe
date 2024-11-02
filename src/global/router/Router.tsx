import {
  WithAuthCheck,
  WithErrorBoundary,
  WithAuthInitCheck,
} from '@global/hocs';
import ErrorPage from '@pages/error.page';
import { WithAuthContainer } from 'components/containers/Auth';
import { SignOut } from 'components/containers/Auth/SignOut.container';
import {
  ListItem,
  ViewItem,
  WithDashboardItem,
} from 'components/containers/Dashboard';
import { WithLayout } from 'components/containers/layout';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <WithErrorBoundary fallback={<ErrorPage />}>
        <WithAuthInitCheck>
          <Navigate to='/dashboard/complexes' />
        </WithAuthInitCheck>
      </WithErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: (
      <WithAuthCheck>
        <WithLayout layout='dashboard' />
      </WithAuthCheck>
    ),
    children: [
      {
        path: '/dashboard/:entity',
        element: (
          <WithDashboardItem>
            <ListItem />
          </WithDashboardItem>
        ),
      },
      {
        path: '/dashboard/:entity/view/:id',
        element: (
          <WithDashboardItem>
            <ViewItem />
          </WithDashboardItem>
        ),
      },
    ],
  },

  {
    path: '/signIn',
    element: (
      <WithLayout layout='auth'>
        <WithAuthContainer type='signIn' />
      </WithLayout>
    ),
  },
  {
    path: '/signUp',
    element: (
      <WithLayout layout='auth'>
        <WithAuthContainer type='signUp' />
      </WithLayout>
    ),
  },
  {
    path: '/signOut',
    element: <SignOut />,
  },
]);
