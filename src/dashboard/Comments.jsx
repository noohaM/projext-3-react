import React, { Component } from 'react';

class Comments extends Component {
  render() {
    return (
      <div className="row">
        <form>
          <div>
           <label>
             title
           </label>
           <inpuut type="text"/>
           </div>

           <div>
             <label >body</label>
             <input type="text"/>
           </div>

          <button>post</button>
          <button>cancle</button>
      </form>
      </div>
    );
  }
}

export default Comments;
