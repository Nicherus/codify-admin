import React from 'react';
import { 
    List,
    Create,
    Edit,
    Datagrid,
    SimpleForm,
    TextField, 
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    DateField,
    EditButton,
    DeleteButton,
    TextInput,
    ReferenceInput,
    SelectInput
} from 'react-admin';

export const ChapterList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Nome" source="name" />
      <TextField label="ID do curso" source="courseId" />
      <ReferenceArrayField label="Tópicos" source="topics" reference="topics">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <DateField label="Criado em" source="createdAt" />
      <DateField label="Atualizado em" source="updatedAt" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ChapterCreate = (props) => (
  <Create title="Criando um capítulo..." {...props}>
    <SimpleForm>
      <TextInput label="Nome" source="name" />
      <ReferenceInput label="Nome do curso" source="courseId" reference="courses">
        <SelectInput />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ChapterEdit = (props) => (
  <Edit title="Editando um capítulo..." {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput label="Nome" source="name" />
      <ReferenceInput label="Nome do curso" source="courseId" reference="courses">
        <SelectInput />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
