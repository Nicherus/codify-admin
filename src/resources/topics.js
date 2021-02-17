import React from 'react';
import { 
    List, 
    Create,
    Datagrid, 
    TextField, 
    DateField,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
} from 'react-admin';

export const TopicList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <TextField label="ID do capitulo" source="chapterId" />
            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />
        </Datagrid>
    </List>
);

export const TopicCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Nome" source="name" />
            <ReferenceInput label="Nome do capítulo" source="chapterId" reference="chapters">
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);