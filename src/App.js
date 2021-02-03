import React from 'react';
import { Delete } from 'admin-on-rest';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';

import Dashboard from './Dashboard';
import { CourseList, CourseCreate, CourseEdit } from './resources/courses';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:3000/admin', httpClient);

const App = () => (
    <Admin 
        dashboard={Dashboard} 
        authProvider={authProvider}
        dataProvider={dataProvider}
    >
        <Resource name="courses" list={CourseList} edit={CourseEdit} create={CourseCreate} remove={Delete} />
    </Admin>
);

export default App;