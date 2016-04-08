import config from '../universal/config';
import createMainRoutes from '../universal/routes/mainRoutes';
import createHome from './components/home/home';
import createHeader from './components/header/header';

createMainRoutes();
createHome(Template);
createHeader(Template);
