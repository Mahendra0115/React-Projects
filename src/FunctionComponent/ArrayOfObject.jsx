import React  from "react";

function ArrayOfObject() {
    let data = [
        { id: 101 ,name: 'amit', dgs: 'engineer'},
        { id: 102 ,name: 'smit', dgs: 'student' },
        {id: 103 ,name: 'chand', dgs: 'engineer' }
    ]


    return (
        <>
            <h1>This Array Object Using Functional Component </h1>
            <table border={2} cellPadding={10} cellSpacing={0}>

                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>dgs</th>
                    </tr>
                </thead>

                <tbody>{
                    data.map((item,index) => {
                        return(
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.dgs}</td>
                        </tr>
                        )
                      
                    })

                }

                </tbody>
            </table>
        </>
    );
}
export default ArrayOfObject