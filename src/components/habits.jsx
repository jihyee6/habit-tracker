import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement = habit =>{
        // //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함.
        // this.setState({count: this.state.count + 1})
        this.props.onIncrement(habit);
    }

    handleDecrement = habit =>{
        // const count = this.state.count - 1;
        // this.setState({count: count < 0? 0: count});
        this.props.onDecrement(habit);
    }
    handleDelete = habit => {
        this.props.onDelete(habit);
    }
    handleAdd = name =>{
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit key={habit.id}
                        habit={habit} 
                        onIncrement = {this.handleIncrement}
                        onDecrement = {this.handleDecrement}                
                        onDelete = {this.handleDelete}
                        />
                    ))}  
                </ul>
            <button className="habits-reset" onClick ={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;