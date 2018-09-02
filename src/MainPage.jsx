import React, { Component } from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader, Col, Row, Button} from 'reactstrap';
import axios from 'axios';

class MainPage extends Component {

  state = {
    modalOpen: false
  }

  toggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }


  constructor(props) {
    super(props)

    this.state = {
      ReturnedData: {id: '', userId: '', title: '', body: '', categoryId: ''},
      Id : 1
    }
  }

  
  componentDidMount() {
    axios.get('http://localhost:3000/posts/'+(this.state.Id+'')+'')
      .then(res => {
        console.log('http://localhost:3000/posts/'+(this.state.Id+'')+'')
        if(res.status === 404){}
        else
        this.setState({
          Id:this.state.Id+1,
          ReturnedData:res.data
        })        
      })
  }


  render() {
    this.componentDidMount()
    let num = this.state.Id;
   let id = this.state.ReturnedData.id
   let body = this.state.ReturnedData.body
   let title = this.state.ReturnedData.title
   let userId = this.state.ReturnedData.userId
   let categoryId = this.state.ReturnedData.categoryId
    const Posts = []
    let Post = <tr><td>{id}</td><td>{title}</td><td>{body}</td><td>{userId}</td><td>{categoryId}</td><td><button>edit</button><button>delete</button></td></tr>
     let AddElements = function(){for(let i=0;i<num;i++){Posts.push(Post);Post = <tr><td>{id}</td><td>{title}</td><td>{body}</td><td>{userId}</td><td>{categoryId}</td><td><button>edit</button><button>delete</button></td></tr>}}
     AddElements()
    return (
      <Row>
        {/* <Col md={12}> is same as <div className="col-md-12">  */}
        <div className="col-md-12"  >
        
        <table className="col-sm-12" id="table" border="5">
                   <thead >
                           <th>Id</th>
                           <th>Title</th>
                           <th>Body</th>
                           <th>UserId</th>
                           <th>categoryId</th>
                           <th>Actions</th>

                   </thead>
                   <tbody>
                    {
                      Posts.map(item =>{return(item)})
                    }
                   </tbody>
       </table>
        </div>

        <Col md={12}>
          <Button color="success" onClick={this.toggle}>Toggle Modal</Button>
        </Col>

        <Col md={12}>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <form>
  <div>
    <label for="title" >Title</label>
    <input type="text"  id="title" />
  </div>
  <div>
    <label for="body">Body</label>
    <textarea id="body"></textarea>
  </div>
</form>
          </ModalBody>
          <ModalFooter>
            <div>
              Footer
            </div>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Col>
      </Row>
    );
  }
}

export default MainPage;
