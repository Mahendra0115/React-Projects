import React from 'react'
import ChildComponent from './ChildComponent';
export default function ParentComponent() {

  let name = "Mahendra";
  let data = [
    { id: 101, name: 'amit', dgs: 'engineer' },
    { id: 102, name: 'smit', dgs: 'student' },
    { id: 103, name: 'chand', dgs: 'engineer' }
  ]


  return (
    <div>
      <h2>This is  Function Component </h2><hr></hr>
      <h1>this is parent Component </h1>

      <h1>Sending data from parent to child </h1>

      {/* here remove ( this.name) */}
      <ChildComponent name={name} data={data} massages={"hello Good morning"} />
    </div>
  )

}
