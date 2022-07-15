import React,{memo} from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    const onSubmit = event => {
        event.preventDefault(); //submit되도 refresh 안되게 함
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = ''; //input에 입력후 submit버튼 누르면 초기화
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className='add-input' placeholder='please enter user habit'/>
            <button className='add-button'>Add</button>
        </form>
    );   
});


export default HabitAddForm;