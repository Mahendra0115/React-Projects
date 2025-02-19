import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(){
        super();
        this.name="Mahendra";
        this.data = [
            { id: 101 ,name: 'amit', dgs: 'engineer'},
            {id: 102 ,name: 'smit', dgs: 'student' },
            {id: 103 ,name: 'chand', dgs: 'engineer'}
        ]
    }
  render() {
    return (
      <div>
       
         <h1>this is parent Component </h1> <hr></hr>
         <h2>This is  Class Component </h2>
         <h1>Sending data from parent to child </h1>
        
        <ChildComponent name={this.name} data={this.data} massages={"hello Good morning"}/>
      </div>
    )
  }
}
