import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function CreateTable(props){
    return(
        
             <table className='table table-hover'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'> Title </th>
                        <th scope='col'>Album </th>
                        <th scope='col'>Artist </th>
                        <th scope='col'>Genre </th>
                    </tr>
                </thead>
                <tbody>
                  {
                    props.music.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.album}</td>
                            <td>{item.artist}</td>
                            <td>{item.genre}</td>
                         </tr>
                    ))
                  }
                </tbody>
            </table>
       
    );
}

export default CreateTable;