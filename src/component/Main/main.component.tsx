import React, { useEffect } from 'react';
import { Form } from '../Form/form.component';
import { List } from '../List/list.component';
import { Api } from '../../api';
import { useDispatch } from 'react-redux';
import { apiActions } from '../../bus/actions';
import '../../theme/styles.scss';

export const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const list = await Api.getData();
            const complete = list ? list.filter((i)=>i.isComplete) : [];
            const progress = list ? list.filter((i)=>!i.isComplete) : [];
            dispatch(apiActions.fillComplete(complete));
            dispatch(apiActions.fillProgress(progress));
        }
        getData();
        
    }, [ ]);

    return (
        <div className="wrapper">
            <div className="title">ToDo List</div>
            <Form />
            <List type='progress' />
            <List type='complete' />
        </div>
    );
};
