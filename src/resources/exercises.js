import React, { useState } from 'react';
import { 
    Labeled,
    Create,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    NumberField,
    TextInput,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    EditButton,
    DeleteButton,
    NumberInput,
    Edit,
    
} from 'react-admin';
import { Field } from 'react-final-form';
import RichTextInput from 'ra-input-rich-text';
import Editor from '@monaco-editor/react';
import '../styles/styles.css';

const EditorAdapter = ({ input }) => (
  <Editor
     width="600px"
     height="300px"
     theme="vs-dark"
     defaultLanguage="javascript"
     value={input.value}
     onChange={(value) => input.onChange(value)}
   />
);

export const ExerciseCreate = (props) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    return (
      <Create title="Criando um exercício..." {...props}>
        <SimpleForm>
          <ReferenceInput label="Curso" source="courseId" reference="courses" onChange={e => setSelectedCourse(e.target.value)}>
            <SelectInput />
          </ReferenceInput>
          <ReferenceInput label="Capítulo" source="chapterId" reference="chapters" filter={selectedCourse && { courseId: selectedCourse }} onChange={e => setSelectedChapter(e.target.value)}>
            <SelectInput />
          </ReferenceInput>
          <ReferenceInput label="Tópico" source="topicId" reference="topics" filter={selectedChapter && { chapterId: selectedChapter }}>
            <SelectInput />
          </ReferenceInput>
          <RichTextInput label='Enunciado' source="statement" />
          <Labeled label="Código de Solução" />
          <Field name="solutionCode" component={EditorAdapter} /> 
          <Labeled label="Código de Teste" />
          <Field name="testCode" component={EditorAdapter} />
          <Labeled label="Código Base" />
          <Field name="baseCode" component={EditorAdapter} />
          <NumberInput label="Ordem" source="position" width="50%" />
        </SimpleForm>
      </Create>
    );
};

export const ExerciseList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="topicId" reference="topics">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField  label="Chapter" source="topic.chapter.id" reference="chapters">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField  label="Course" source="topic.chapter.course.id" reference="courses">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="position" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ExerciseEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <RichTextInput label='Enunciado' source="statement" />
      <Labeled label="Código de Solução" />
      <Field name="solutionCode" component={EditorAdapter} />
      <Labeled label="Código de Teste" />
      <Field name="testCode" component={EditorAdapter} />
      <Labeled label="Código Base" />
      <Field name="baseCode" component={EditorAdapter} />
      <NumberInput source="position" />
    </SimpleForm>
  </Edit>
);
