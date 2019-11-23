import React from 'react';

class Footer extends React.Component {
    changeFilter=(e)=>{
        this.props.changeFilterValue(e.currentTarget.outerText)
    }
    render() {
        let filter = this.props.filterValue;
        return (
            <div>
                <button onClick={this.changeFilter} className={filter == 'All' ? 'all' : ''}>All</button>
                <button onClick={this.changeFilter} className={filter == 'Complited' ? 'complited' : ''}>Complited</button>
                <button onClick={this.changeFilter} className={filter == 'Active' ? 'active' : ''}>Active</button>
            </div>
        )
    }
}

export default Footer;