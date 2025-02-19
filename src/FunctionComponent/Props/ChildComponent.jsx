import React from 'react'

export default function ChildComponent(props) { // this line add (props)
    return (
        <>
            <h1>This is function Component</h1>
            <h2>This is Child Class</h2>
            <h2>{props.name}</h2>    {/* remove ( this.props.massages ) */}
            <h2>Massage {props.massages}</h2>
            <table cellPadding={10} cellSpacing={0} border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <td>Name</td>
                        <th>Dgs</th>
                    </tr>
                </thead>
                <tbody>{
                    props.data.map((items, index) => {  //here remove [this] 
                        return (
                            <tr key={index}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.dgs}</td>
                            </tr>
                        )
                    })
                }
                    <tr></tr>
                </tbody>
            </table>
        </>
    )
}
