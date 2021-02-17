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
} from 'react-admin';

export const TopicList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <TextField label="ID do capitulo" source="chapterId" />
            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const TopicCreate = (props) => (
    <Create title = "Criando um tópico..." {...props}>
        <SimpleForm>
            <TextInput label="Nome" source="name" />
            <ReferenceInput label="Nome do capítulo" source="chapterId" reference="chapters">
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const TopicEdit = (props) => (
    <Edit title = "Editando um tópico..." {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput label="Nome" source="name" />
            <ReferenceInput label="Nome do capítulo" source="chapterId" reference="chapters">
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);