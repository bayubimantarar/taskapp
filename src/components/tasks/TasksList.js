import React, { Component } from 'react';
import AddTask from './AddTask';
import {
Row,
Col,
Card,
CardImg,
CardText,
CardBody,
CardTitle,
CardSubtitle,
Button,
CardHeader,
CardFooter,
ListGroup,
ListGroupItem,
Badge,
} from 'reactstrap';

class TasksList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Row>
        <Col
          sm="12"
          md={{
            size: 6,
            offset: 3
          }}>
            <Card>
              <CardHeader>Tasks</CardHeader>
              <CardBody>
                <AddTask onAddTasks={this.props.onAddTasks} />
                <br />
                <ListGroup>
                  {this.props.tasks.map(task =>
                  <ListGroupItem
                    className="justify-content-between"
                    key={task.id}
                  >
                    {task.title}
                    &nbsp;
                    {/*<Button
                      size="sm"
                      color="primary"
                    >
                      Done
                    </Button>*/}
                  </ListGroupItem>
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
      </Row>
    );
  }
}

export default TasksList;
