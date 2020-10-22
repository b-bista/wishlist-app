import React from 'react';
import { Link } from 'react-router-dom';

function List(props) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <p>{props.name}</p>
      <p>{props.description}</p>
      {/*<p>{props.user}</p>*/}
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">URL</th>
              <th scope="col">Last</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            
              {
                props.items.map((item) => {
                  return (<tr>
                          <td>{item.name}</td>
                          <td>{item.url}</td>
                          <td>{item.last}</td>
                          <td>{item.note}</td>
                        </tr>);
                })
              }
              
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default List;