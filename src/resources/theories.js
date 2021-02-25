import React from 'react';
import { 
    List, 
    Edit,
    Datagrid, 
    TextField, 
    DateField,
    SimpleForm,
    TextInput,
    EditButton,
    DeleteButton,
    ReferenceField,
} from 'react-admin';

export const TheoryList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="youtubeLink" />
      <ReferenceField source="topicId" reference="topics">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField  label="Chapter" source="topic.chapter.id" reference="chapters">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField  label="Course" source="topic.chapter.course.id" reference="courses">
        <TextField source="name" />
      </ReferenceField>
      <DateField label="Criado em" source="createdAt" />
      <DateField label="Atualizado em" source="updatedAt" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TheoryEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="youtubeLink" />
    </SimpleForm>
  </Edit>
);
