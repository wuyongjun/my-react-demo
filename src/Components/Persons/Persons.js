import React from 'react';
import Person from './Person/Person';

// const Persons = (props) => {
//     return props.persons.map((person, index) => {
//         return <Person
//                 key={index} 
//                 name={person.name}
//                 job={person.job}
//                 changed={(ev) => props.changed(ev, person.id)}
//                 delPerson={() => props.delPerson(index)}
//             />
//     });
// }

class Persons extends React.Component {
    constructor (props) {
        super(props);
        console.log('[Persons.js] constructor is running...', props);
    }

    componentWillMount () {
        console.log('[Persons.js] componentWillMount is running...');
    }

    componentDidMount () {
        console.log('[Persons.js] componentDidMount is running...');
    }

    render () {
        console.log('[Persons.js] render is running...');
        return this.props.persons.map((person, index) => {
            return <Person
                    key={index} 
                    name={person.name}
                    job={person.job}
                    changed={(ev) => this.props.changed(ev, person.id)}
                    delPerson={() => this.props.delPerson(index)}
                />
        });
    }
}

export default Persons;