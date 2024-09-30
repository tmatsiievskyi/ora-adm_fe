import { RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import ErrorPage from '@pages/error.page';
import { WithLayout } from 'components/containers/layout';
import { WithCollectionList } from 'components/containers/CollectionList';
import { WithAddEditItem } from 'components/containers/AddEditItem';
import { WithAuthContainer } from 'components/containers/Auth/Auth.hoc';

// const Loadable = (Component: React.ComponentType<any>) => (props: any) => (
//   <Suspense fallback={<p>Loading</p>}>
//     <Component {...props} />
//   </Suspense>
// );

const notFoundRoute: RouteObject = {
  path: '*',
  element: <p>Page Not Found</p>,
};

const normalRoutes: RouteObject = {
  path: '/',
  errorElement: <ErrorPage />,
  element: <WithLayout layout='main' />,
  children: [
    {
      path: '/employees',
      children: [
        {
          index: true,
          element: <WithCollectionList />,
        },
        {
          path: '/employees/add',
          element: <WithAddEditItem />,
        },
        {
          path: '/employees/:id',
          element: <WithAddEditItem />,
        },
      ],
    },
  ],
};

const authRoutes: RouteObject = {
  path: '*',
  errorElement: <ErrorPage />,
  children: [
    {
      path: 'signIn',
      element: (
        <WithLayout layout='auth'>
          <WithAuthContainer type='signIn' />
        </WithLayout>
      ),
    },
    {
      path: 'signUp',
      element: (
        <WithLayout layout='auth'>
          <WithAuthContainer type='signUp' />
        </WithLayout>
      ),
    },
    {
      path: 'signOut',
      element: <WithAuthContainer type='signOut' />,
    },
  ],
};

export const routes: RouteObject[] = [notFoundRoute, authRoutes, normalRoutes];
