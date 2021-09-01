import React, { Component } from 'react';
import { Button } from 'antd';

class Task extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deleted: false,
        editing: false,
        title: this.props.title,
      };
    }

    hanldeChange(event) {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({ [`${name}`]: value });
    }

    handleCancel() {
      this.setState({
        editing: false,
        title: this.props.title,
      })
    }

    handleSave() {
      this.props.update(this.props.id,       
      {
        title: this.state.title,
      })
      this.setState({ editing: false })
    }

    handleEdit() {
      this.setState({ editing: true });
    }

    handleDelete() {
      console.log(this.props);
      console.log(this.props.id);
      this.props.delete(1);
    }

    componentWillReceiveProps(newProps) {
      this.setState({ title: newProps.title || "" });
    }

    render() {
      return (
        this.state.editing ?
          <div>
            <input name="title" value={this.state.title} onChange={this.hanldeChange.bind(this)} />
            <div>
              <Button onClick={this.handleCancel.bind(this)}>Cancelar</Button>
              <Button type="primary" onClick={this.handleSave.bind(this)}>Guardar</Button>
            </div>
          </div>
          :
          <div className="w-100 d-flex justify-content-evenly align-items-center">
            <div title="click para editar" onClick={this.handleEdit.bind(this)}>
              <h4 className="mb-0">{this.state.title}</h4>
            </div>
            <div>
              <Button type="primary" danger onClick={this.handleDelete.bind(this)}>Eliminar</Button>
            </div>
          </div>
      )
    }
}

export default Task;