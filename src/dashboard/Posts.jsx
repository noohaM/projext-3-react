import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
      
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
    );
  }
}

export default Posts;
