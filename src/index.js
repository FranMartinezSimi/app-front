import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './js/layout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faBars,
	faEdit,
	faTruckMoving,
	faMapMarkerAlt,
	faCalendarAlt,
	faPaw,
	faCouch,
	faUtensils,
	faBook,
	faStar,
	faTimesCircle,
	faUser,
	faSignOutAlt,
	faHome,
	faTasks,
	faCut,
	faGlassCheers,
	faPaperclip,
	faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

library.add(
	fab,
	faBars,
	faEdit,
	faTruckMoving,
	faMapMarkerAlt,
	faCalendarAlt,
	faPaw,
	faCouch,
	faUtensils,
	faBook,
	faStar,
	faTimesCircle,
	faUser,
	faSignOutAlt,
	faHome,
	faTasks,
	faCut,
	faGlassCheers,
	faPaperclip,
	faCalendarCheck
);

ReactDOM.render(<Layout />, document.getElementById('root'));
