import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import Dashboard from './Dashboard';
import authClient from './authClient';

import CourseIcon from 'material-ui/svg-icons/action/card-membership';

import { CoursesList, CourseCreate, CourseEdit } from './resources/categories';

const App = () => (
    <Admin 
        dashboard={Dashboard} 
        authClient={authClient}
        restClient={jsonServerRestClient('url da api')}
    >
        <Resource name="cursos" list={CoursesList} edit={CourseEdit} create={CourseCreate} remove={Delete} icon={CourseIcon}/>
    </Admin>
);

export default App;