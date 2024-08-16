import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const StudentTable = ({ data, deleteStudent }) => {
  return (
    <>
      <table className="table table-bordered w-75 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            return (
              <tr key={entry._id || index}>  
                <td>{entry.name}</td>
                <td>{entry.age}</td>
                <td>{entry.gender}</td>
                <td>
                  <Link to={`/update/${entry._id}`}>
                    <Button variant="primary" size="sm">
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteStudent(entry._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentTable;