import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';

import Dashboard from './Dashboard';
import { CourseList } from './resources/courses';
import { ChapterList } from './resources/chapters';
import { TopicCreate, TopicList, TopicEdit } from './resources/topics';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('x-access-token', `${token}`);
    return fetchUtils.fetchJson(url, options);
}

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3005/admin';

const dataProvider = simpleRestProvider(apiUrl, httpClient);
const App = () => (
    <Admin 
        dashboard={Dashboard} 
        authProvider={authProvider}
        dataProvider={dataProvider}
    >
        <Resource name="courses" list={CourseList} />
        <Resource name="chapters" list={ChapterList} />
        <Resource name="topics" list={TopicList} create={TopicCreate} edit={TopicEdit}/>
    </Admin>
);

export default App;