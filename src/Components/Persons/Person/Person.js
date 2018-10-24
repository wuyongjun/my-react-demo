import React from 'react';
import './Person.css';

// const Person = (props) => {
//     return (
//         <div>
//             <h4>我是{props.name}，我的工作是{props.job}</h4>
//             <p>{props.children}</p>
//             <input type="text" name="text" value={props.name} onChange={props.changed}/><br/>
//             <button className="button" onClick={props.delPerson}>删 除</button>
//         </div>
//     );
// }

class Person extends React.Component {
    constructor (props) {
        super(props);

        console.log('[Person.js] constructor is running...', props);
    }

    componentWillMount () {
        console.log('[Person.js] componentWillMount is running...');
    }

    componentDidMount () {
        console.log('[Person.js] componentDidMount is running...');
    }

    render () {
        console.log('[Person.js] render is running...');
        return (
            <div>
                <h4>我是{this.props.name}，我的工作是{this.props.job}</h4>
                <p>{this.props.children}</p>
                <input type="text" name="text" value={this.props.name} onChange={this.props.changed}/><br/>
                <button className="button" onClick={this.props.delPerson}>删 除</button>
            </div>
        );
    }
}

export default Person;