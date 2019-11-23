import React from 'react';

class Header extends React.Component {
    state={
        inputValue:''
    }
    updateTask=(e)=>{
        this.setState({
            inputValue:e.currentTarget.value.trim()
        })
    }

    addTask=()=>{
        if(this.state.inputValue==''){
            alert('Enter task text')
        }else{
            let newTask = this.state.inputValue;
            this.props.addNewTask(newTask);
            this.state.inputValue=''
        }


    }
    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <input placeholder="Text..." value={this.state.inputValue} onChange={this.updateTask}/>
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

export default Header;