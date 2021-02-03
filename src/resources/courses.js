import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EditButton,
    Edit,
    Create,
    DisabledInput,
    SimpleForm,
    TextInput,
    DateField,
} from 'admin-on-rest';

export const CourseList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField label="Nome" source="name" />
            <DateField label="Criado em" source="createdAt" />
            <DateField label="Atualizado em" source="updatedAt" />
            <EditButton />
        </Datagrid>
    </List>
);

const CourseTitle = ({ record }) => {
    return <span>Course {record ? `"${record.name}"` : ''}</span>;
};

export const CourseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Nome" source="name" />
        </SimpleForm>
    </Create>
);

export const CourseEdit = (props) => (
    <Edit title={<CourseTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput label="Nome" source="name" />
        </SimpleForm>
    </Edit>
);
