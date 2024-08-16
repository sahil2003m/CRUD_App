import axios from "axios";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = new FormData(e.target);
    const student = Object.fromEntries(response.entries());
    try {
      await axios.put(`http://localhost:5000/student/${id}`, student);
    navigate("/");
     toast.success("Student Updated Successfully");
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <>
      <Card className="w-75 mx-auto mt-5 mb-5">
        <Card.Header>
          <h3 className="text-center">Update student</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} xs={12} sm={3}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} sm={3}>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} sm={3}>
                <Form.Label>Gender</Form.Label>
                <Form.Select name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs={12} sm={3}>
                <Button
                  variant="success"
                  type="submit"
                  style={{ marginTop: "31px", marginLeft: "30px" }}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  type="reset"
                  style={{ marginTop: "31px", marginLeft: "20px" }}
                >
                  Reset
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default UpdateStudent;