import React, { Component } from 'react';
import {
Button,
Form,
FormGroup,
Label,
Input,
FormText,
Row,
Col
} from 'reactstrap';

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: ""
    }
  }

  onChangeTask = (event) => {
    this.setState({
      tasks: event.target.value
    });
  }

  onCreate = () => {
    if(this.state.tasks === ''){
      alert("Tasks is required");
    }else{
      this.props.onAddTasks(this.state.tasks);
    }
  }

  render() {
    return (
      <Row>
        <Col lg="12" md="12" sm="12">
          <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label
              for="task"
              className="mr-sm-2"
            >
              New Task
            </Label>
            <Input
              type="text"
              id="task"
              placeholder="Fill the task ..."
              bsSize="sm"
              onChange={this.onChangeTask}
            />
          </FormGroup>
          <Button
            size="sm"
            color="info"
            onClick={this.onCreate}
          >
            Create
          </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddTask;
