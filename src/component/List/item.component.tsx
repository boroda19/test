import React from 'react';
import { Api } from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import { apiActions } from '../../bus/actions';

const selectState = (state) => ({
    complete: state.swapi.complete,
    progress: state.swapi.progress,
});

export const Item = (props) => {
    const { item, type } = props;
    const state = useSelector(selectState);
    const dispatch = useDispatch();
    const changeStatus = async () =>{
        item.isComplete = !item.isComplete;
            const newItem = await Api.changeStatus(item);
            if(newItem){
                let progress = state.progress;
                let complete = state.complete;                
                if(type === 'progress'){
                    progress = progress.filter((i)=>i.id !== newItem.id);
                    complete.push(newItem);
                } else {
                    complete = complete.filter((i)=>i.id !== newItem.id);
                    progress.push(newItem);
                } 
                dispatch(apiActions.fillProgress(progress));
                dispatch(apiActions.fillComplete(complete));
            }            
    }
    const deleteItem = async () =>{
            const result = await Api.deleteItem(item.id);
            if(result){
                    const list = state[type].filter((i)=>i.id !== result.id);
                    if(type === 'progress'){
                        dispatch(apiActions.fillProgress(list));
                    } else {
                        dispatch(apiActions.fillComplete(list));
                    }
            } 
    }
    
    return (
        <div className={`item ${type}`}>
            <div
                className="radio"
                onClick={changeStatus}/>
            <div className="body">
                { item.body }
            </div>
            <div
                className="del"
                onClick={deleteItem}/>
        </div>
    );
};
