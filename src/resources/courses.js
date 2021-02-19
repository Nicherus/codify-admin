import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EditButton,
    Edit,
    Create,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    TextInput,
    ImageField,
    DateField,
    SimpleForm,
    ArrayInput,
    SimpleFormIterator,
    ReferenceArrayInput,
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
        </Datagrid>
    </List>
);

// const CourseTitle = ({ record }) => {
//     return <span>Course {record ? `"${record.name}"` : ''}</span>;
// };

// export const CourseCreate = (props) => (
//     <Create {...props}>
//         <SimpleForm>
//             <TextInput label="Nome" source="name" />
//             <TextInput label="Link Banner" source="image" />
//             <TextInput label="Descrição curso" source="description" />
//         </SimpleForm>
//     </Create>
// );



