import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    Edit,
    Create,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    TextInput,
    ImageField,
    DateField,
    SimpleForm,
    EditButton,
    DeleteButton
} from 'react-admin';

export const CourseList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Nome" source="name" />
      <TextField label="Descrição" source="description" />
      <TextField label="Deletado" source="deleted" />
      <ImageField label="Banner" source="image" />
      <ReferenceArrayField label="Capítulos" source="chapters" reference="chapters">
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

export const CourseCreate = (props) => (
  <Create title="Criando um curso..." {...props}>
    <SimpleForm>
      <TextInput label="Nome" source="name" />
      <TextInput multiline label="Descrição" source="description" />
      <TextInput label="Url Banner" source="image" />
    </SimpleForm>
  </Create>
);

export const CourseEdit = (props) => (
  <Edit title="Editando um curso..." {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput label="Nome" source="name" />
      <TextInput multiline label="Descrição" source="description" />
      <TextInput label="Url Banner" source="image" />
    </SimpleForm>
  </Edit>
);

