import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id : 1, name: 'Reading' , count: 0},
        {id : 2, name: 'Running' , count: 0},
        {id : 3, name: 'Coding' , count: 0},
    ]
};
handleIncrement = habit =>{
  // //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함.
  // this.setState({count: this.state.count + 1})
  const habits = this.state.habits.map(item =>{
    if(item.id === habit.id){
        return {...habit, count: habit.count +1};
    }
    return item;
  })
  this.setState({ habits : habits}); //key와 value의 이름이 똑같다면 하나만 적어도 실행가능함

}

handleDecrement = habit =>{
  // const count = this.state.count - 1;
  // this.setState({count: count < 0? 0: count});
  // const habits = [...this.state.habits];
  // const index = habits.indexOf(habit);
  // const count = habits[index].count -1;
  // habits[index].count = count < 0 ? 0 : count; //0보다 작으면 0을 쓰고 아니면 count값을 사용/ -값이 안나오게 하려고 함
  
  const habits = this.state.habits.map(item =>{
    if(item.id === habit.id){
      const count = habit.count - 1;
      return {...habit, count: count < 0? 0: count};

    }
    return item;
  })
  this.setState({ habits }); //key와 value의 이름이 똑같다면 하나만 적어도 실행가능함
}
handleDelete = habit => {
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({ habits });
}

handleAdd = name =>{
  const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
  this.setState({habits})
}

handleReset = () =>{
  const habits = this.state.habits.map(habit =>{
    // habit.count = 0;
    // return habit;
    if(habit.count !== 0){
      return{...habit, count: 0};
    }
    return habit;
  });
  this.setState({habits});
}

  render() {
    return (
      <>
        <Navbar totalCount = {this.state.habits.filter(item => item.count >0).length}/>
        <Habits 
          habits ={this.state.habits}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}                
          onDelete = {this.handleDelete}
          onAdd = {this.handleAdd}
          onReset = {this.handleReset}
        />
      </>
    );
  }
}

export default App



