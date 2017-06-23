import createMainRoutes from '../imports/routes/mainRoutes'
import createHome from './components/home/home'
import createHeader from './components/header/header'

createMainRoutes(FlowRouter)
createHome(Template)
createHeader(Template)
