import React, { Component } from "react";
export default class ChildComponent extends Component{
    render(){
        return(
            <>
          <hr></hr>
            <h1>This is  Child Component</h1> 
              <h2>Name ={this.props.name}</h2>
              <h2>Massage = {this.props.massages}</h2>
              <table cellPadding={10} cellSpacing={0} border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <td>Name</td>
                        <th>Dgs</th>
                    </tr>
                </thead>
                <tbody>{
                    this.props.data.map((items, index)=>{
                        return(
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
        );
    }
}