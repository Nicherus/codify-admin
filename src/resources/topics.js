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
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Nome" source="name" />
            <ReferenceInput label="Nome do capítulo" source="chapterId" reference="chapters">
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const TopicEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="Nome" source="name" />
            <ReferenceInput label="Nome do capítulo" source="chapterId" reference="chapters">
                <SelectInput />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

/* <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="deleted" />
            <TextInput label="Nome" source="name" />
            <TextInput label="Link Banner" source="image" />
            <TextInput label="Descrição curso" source="description" />
            {/* <ReferenceArrayInput label="Capitulos" source="chapters" references="chapters">
                <SimpleFormIterator>
                    <TextInput label="nome do capítulo" source="name" />
                </SimpleFormIterator>
            </ReferenceArrayInput>  */
        // </SimpleForm> */}