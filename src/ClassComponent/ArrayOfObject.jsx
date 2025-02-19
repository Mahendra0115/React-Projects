import React, { Component } from 'react'

  class ArrayOfObject extends Component {
    constructor() {
        super();
        this.data = [

            { id: 101, name: "Mahendra", sal: "10000", dsg: "Student" },
            { id: 102, name: "Shubhi Moti", sal: "0000", dsg: "Berojgar" },
            { id: 103, name: "Subhi bhes", sal: "-10000", dsg: "DisHonesty" },
            { id: 104, name: "Nagin", sal: "20000", dsg: "Bhikari" },
            { id: 105, name: "Chand", sal: "5000", dsg: "Student" }

        ]
    }
    render() {
        return (
            <>
                <h1>This is Class Component </h1>
                <h2>Display Array Objects </h2>
                <table border={2} cellSpacing={0} cellPadding={10} >
                    <caption> <b style={{color:"blue"}}>Student Details</b></caption>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>dsg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dsg}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default ArrayOfObject