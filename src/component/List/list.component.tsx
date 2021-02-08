import React, { useEffect } from 'react';
import { Item } from './item.component';
import { useSelector } from 'react-redux';

const selectState = (state) => ({
    complete: state.swapi.complete,
    progress: state.swapi.progress,
});

export const List = (props) => {
    const { type } = props;
    const state = useSelector(selectState);    

    const listJSX = state[type] ? state[type].map((item)=>{
        return (
            <Item
                { ...props }
                key={item.id}
                item={item}
             />
        )
    }) : null;

    const subTitle = type === 'progress' ? 'In progress' : 'Complete';

    return (
        <div className="list">
            <div className="subTitle">
                { `${subTitle} ( ${listJSX.length} )` }
            </div>
            { listJSX }  
        </div>
    );
};
