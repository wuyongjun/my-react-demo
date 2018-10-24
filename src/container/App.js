import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Styled from 'styled-components';

const Title = Styled.h2`
  font-size: 80px;
  color: #396;
  text-align: center
`;

class App extends Component {
  constructor (props) {
    super(props);
    console.log('[app.js] constructor is running...', props);

    this.state = {
      persons: [{ id: 1, name: 'wuyongjun', job: 'worker'},
                { id: 2, name: 'zhanglingchun', job: 'doctor'},
                { id: 3, name: 'dingpeng', job: 'teacher'}],
      isShowPerson: true
    }
  }

  componentWillMount () {
    console.log('[app.js] componentWillMount is running...');
  }

  componentDidMount () {
    console.log('[app.js] componentDidMount is running...');
  }

  componentWillReceiveProps (nextProps) {
    console.log('[app.js] componentWillReceiveProps is running...', nextProps);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[app.js] shouldComponentUpdate is running...', nextProps, nextState);
    console.log(nextState.persons !== this.state.persons || !nextState.isShowPerson);
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('[app.js] componentWillUpdate is running...', nextProps, nextState);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('[app.js] componentDidUpdate is running...', prevProps, prevState);
  }
  
  changeName = (ev, id) => {
    console.log(ev.target.value);
    // console.log('this.input.value', this.input.value);
    // 找到修改的对象的索引值
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // 拷贝一个新数组
    let persons = [...this.state.persons];
    persons[personIndex].name = ev.target.value;
    this.setState({
      persons
    });
  }
  showOrHidePerson = () => {
    console.log(this.state.isShowPerson)
    let flag = this.state.isShowPerson;
    this.setState({
      isShowPerson: !flag
    });
    console.log(flag);
  }
  delPerson = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  }
  changeTest (ev) {
    console.log(this.test);
  }
  
  render() {
    console.log('[app.js] render is running...');
    let persons = null;
    if (this.state.isShowPerson) {
      persons = <Persons 
        persons={this.state.persons}
        changed={this.changeName}
        delPerson={this.delPerson}/>
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <br/>
          <div>
            <button 
              onClick={this.showOrHidePerson}
              style={{color: 'white'}}>{this.state.isShowPerson ? '隐藏' : '显示'}</button>
            {persons}
            {/* <input type="text" name="test" ref={(input) => this.test = input} onChange={this.changeTest.bind(this)} /> */}
          </div>
          <Title>this is a Styled title</Title>
        </header>
        
      </div>
    );
  }
}

export default App;
