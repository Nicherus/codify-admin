import React from 'react';
import { 
    List, 
    Create,
    Edit,
    Datagrid, 
    TextField, 
    DateField,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    EditButton,
    DeleteButton,
    ReferenceField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const ExerciseList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Nome" source="name" />
      <ReferenceField label="Tópico" source="topicId" reference="topics">
        <TextField source="name" />
      </ReferenceField>
      <DateField label="Criado em" source="createdAt" />
      <DateField label="Atualizado em" source="updatedAt" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ExerciseCreate = (props) => (
  <Create title="Criando um exercício..." {...props}>
    <SimpleForm>
      <TextInput label="Nome" source="name" />
      <ReferenceInput label="Nome do tópico" source="topicId" reference="topics">
        <SelectInput />
      </ReferenceInput>
      <RichTextInput source="body" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
    </SimpleForm>
  </Create>
);

export const ExerciseEdit = (props) => (
  <Edit title="Editando um exercício..." {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput label="Nome" source="name" />
      <ReferenceInput label="Nome do tópico" source="topicId" reference="topics">
        <SelectInput />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
