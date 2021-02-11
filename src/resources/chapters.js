import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    ImageField,
    ReferenceArrayField,
    SingleFieldList,
    ChipField,
    DateField,
} from 'admin-on-rest';

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
        </Datagrid>
    </List>
);