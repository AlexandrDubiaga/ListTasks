import React from 'react';
import OneTask from "./OneTask";
class TasksList extends React.Component{
    render(){
        return(
            <div>
                {this.props.tasks.map(t=><OneTask task={t} {...this.props} />)}
            </div>
        )
    }
}

export default TasksList;