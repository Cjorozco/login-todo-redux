import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './task';
import { fetchAddTask, fetchDeleteTask, fetchGetTask, fetchUpdateTask } from '../reducers/tasksReducer';
import { Button, Input, List, Typography } from 'antd';

const { Title } = Typography;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state= {title:''}
  }
  
  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [`${name}`]:value });
  }

  handleAdd(event){
    event.preventDefault();
    this.props.fetchAddTask({
      title: this.state.title,
      taskId: 1
    });
    this.setState({ title:'' });
  };

  componentDidMount(){
    this.props.fetchGetTask();
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <div className="App">
        <div className="App-intro">
          <Title level={2}>Agregar Task</Title>
          <div className="d-flex justify-content-center mb-5">
            <form onSubmit={this.handleAdd.bind(this)}>
              <Input 
                name="title" 
                placeholder="Título"
                value={this.state.title} 
                onChange={this.handleChange.bind(this)}
              />
              <div className="mt-3">
                <Button type="primary" htmlType="submit">Agregar</Button>
              </div>
            </form>
          </div>
          <h2>Tasks</h2>
          <List
            size="small"
            bordered
            dataSource={tasks}
            renderItem={item => (
              <List.Item>
                <Task 
                  {...item}
                  update={this.props.fetchUpdateTask} 
                  delete={this.props.fetchDeleteTask} 
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default connect((state) => (
  { tasks:state.tasks.tasks }),
  { fetchAddTask, fetchDeleteTask, fetchGetTask, fetchUpdateTask })
  (Todo);
