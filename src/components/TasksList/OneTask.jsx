import React from 'react';
class TasksList extends React.Component{
     state={
       isVisible:true
    }

    onFalseIsVisible=()=>{
        this.setState({
            isVisible:false
        })
    }
    onTrueIsVisible=()=>{
        this.setState({
            isVisible:true
        })
    }
    updateTitle=(e)=>{
         this.props.updateTaskTitle(this.props.task,e.currentTarget.value);
    }
    isChecked=(e)=>{
        this.props.updateIsChecked(this.props.task,e.currentTarget.checked);
    }
    deleteTask=()=>{
         this.props.deleteTaskFromState(this.props.task);
    }
    render(){
         let oneClassColor;
        if(this.props.filterValue=='All'){
            oneClassColor='allColor';
        }else if(this.props.filterValue=='Complited'){
            oneClassColor='complitedColor';
        }else{
            oneClassColor='activeColor';
        }
        return(
            <div>
                <div>
                    {this.state.isVisible?
                        <span className={oneClassColor} onDoubleClick={this.onFalseIsVisible}><button onClick={this.deleteTask}>X</button><input onChange={this.isChecked} checked={this.props.task.isDone?true:false} type="checkbox"/> {this.props.task.title===''?'------':this.props.task.title}</span>:
                        <span className={oneClassColor} onBlur={this.onTrueIsVisible}><button onClick={this.deleteTask}>X</button><input checked={this.props.task.isDone?true:false} type="checkbox"/><input onChange={this.updateTitle} autoFocus={true} value={this.props.task.title} /></span>}


                </div>
            </div>
        )
    }
}

export default TasksList;