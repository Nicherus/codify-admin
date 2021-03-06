import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import authProvider from './authProvider';

import Dashboard from './Dashboard';
import { CourseList, CourseCreate, CourseEdit } from './resources/courses';
import { ChapterList, ChapterCreate, ChapterEdit } from './resources/chapters';
import { TopicCreate, TopicList, TopicEdit } from './resources/topics';
import { TheoryList, TheoryEdit } from './resources/theories';
import { ExerciseCreate, ExerciseList, ExerciseEdit } from './resources/exercises';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('x-access-token', `${token}`);
    return fetchUtils.fetchJson(url, options);
};

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3005/admin';

const dataProvider = simpleRestProvider(apiUrl, httpClient);
const App = () => (
  <Admin 
        dashboard={Dashboard} 
        authProvider={authProvider}
        dataProvider={dataProvider}
    >
    <Resource name="courses" list={CourseList} create={CourseCreate} edit={CourseEdit} />
    <Resource name="chapters" list={ChapterList} create={ChapterCreate} edit={ChapterEdit} />
    <Resource name="topics" list={TopicList} create={TopicCreate} edit={TopicEdit}/>
    <Resource name="theories" list={TheoryList} edit={TheoryEdit} />
    <Resource name="exercises" list={ExerciseList} create={ExerciseCreate} edit={ExerciseEdit} />
  </Admin>
);

export default App;
