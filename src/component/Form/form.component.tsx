import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Api } from '../../api';
import { apiActions } from '../../bus/actions';
const selectState = (state) => ({
    progress: state.swapi.progress,
});

export const Form = () => {
    const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const state = useSelector(selectState);
    const dispatch = useDispatch();
    const addTodo = async () =>{
        const text = ref.current.value;
        if(text){
            const data = {body: text};
            const newItem = await Api.setData(data);
            if(newItem){
                const progress = state.progress;
                progress.push(newItem);
                dispatch(apiActions.fillProgress(progress));
                ref.current.value = '';
            }
        }
    }

    return (
        <div className="form">
            <input
                className="formItem"
                defaultValue=""
                ref={ref}
                placeholder="Add new todo..."/>
                <button
                    className="formItem"
                    onClick={addTodo}>
                    Add
                </button>
        </div>
    );
};
