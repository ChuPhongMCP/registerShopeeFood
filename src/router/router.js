import Layout from 'components/layout';
import { LOCATIONS } from 'constants/index';
import HomePage from 'pages/homePage';
import NoMatch from 'pages/noMatch';
import RegisterPage from 'pages/registerPage';

const routers = [
    {
        path: LOCATIONS.LAYOUT,
        element: <Layout />,
        children: [
            { isRoot: true, element: <HomePage /> },
            { path: LOCATIONS.HOME, element: <HomePage /> },
            { path: LOCATIONS.REGISTER, element: <RegisterPage /> },
        ]
    },
    { path: "*", element: <NoMatch /> }
]

export default routers;
