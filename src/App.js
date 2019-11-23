import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';
import state from './state/state';

class App extends React.Component {
    constructor() {
        super()
        this.state = state;
    }

    addNewTask = (title) => {
        let newTask = {id: 6, title: title, isDone: false}
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }
    updateTaskTitle=(task,newValueTitle)=>{
        let newTask = this.state.tasks.map(t=>{
            if(task!==t){
                return t
            }else return {...t,title:newValueTitle}
        })
        this.setState({
            tasks: newTask
        })
    }
    updateIsChecked=(task,isChecked)=>{
        let newTask = this.state.tasks.map(t=>{
            if(task!==t){
                return t
            }else return {...t,isDone:isChecked}
        })
        this.setState({
            tasks: newTask
        })
    }
    deleteTaskFromState=(task)=>{
        let newTaskArr = this.state.tasks.filter(t=>{
            return t!== task;
        })
        this.setState({
            tasks: newTaskArr
        })
    }
    changeFilterValue=(newValueFilter)=>{
        this.setState({
            filterValue: newValueFilter
        })
    }
    filterTasksByIsDone=()=>{
      return this.state.tasks.filter(t=>{
            if(this.state.filterValue=='All'){
                return true;
            }else if(this.state.filterValue=='Complited'){
                return t.isDone
            }else{
                return !t.isDone
            }
        })
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header addNewTask={this.addNewTask}/>
                    <TasksList filterValue={this.state.filterValue} deleteTaskFromState={this.deleteTaskFromState} updateIsChecked={this.updateIsChecked} updateTaskTitle={this.updateTaskTitle} tasks={this.filterTasksByIsDone()}/>
                    <Footer changeFilterValue={this.changeFilterValue} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }

}

export default App;
