import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dashboard from './components/Dashboard';

const DashboardWithDndContext = DragDropContext(HTML5Backend)(Dashboard);
export { Dashboard as DashboardWithoutDndContext };
export { DashboardWithDndContext as default };
export { addWidget } from './util';
