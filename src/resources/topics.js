import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    ImageField,
    DateField,
} from 'admin-on-rest';

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