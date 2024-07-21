import { createBrowserRouter } from 'react-router-dom';
import { Details, Root } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/:name',
        element: <Details />,
      },
    ],
  },
]);
