import React, { Component } from 'react';
import { Container} from 'reactstrap';
import axios from 'axios';
import NavigationBar from './components/partials/NavigationBar';
import TasksList from './components/tasks/TasksList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentWillMount(){
    axios.get("http://localhost:8000/tasks")
      .then(response => {
        this.setState({
          tasks: response.data.data.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  onAddTasks = (tasks) => {
    axios.post('http://localhost:8000/tasks/create', {
      title: tasks,
    })
    .then(response => {
      axios.get("http://localhost:8000/tasks")
      .then(response => {
        this.setState({
          tasks: response.data.data.data
        });
      })
      .catch(error => {
        alert(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <br />
          <TasksList tasks={this.state.tasks} onAddTasks={this.onAddTasks} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
