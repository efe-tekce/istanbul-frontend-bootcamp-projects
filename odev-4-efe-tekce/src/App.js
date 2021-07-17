import React, { useState } from "react";
import "./App.css";
import AddComment from "./components/addComment";
import Comment from "./components/comment";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
    };
  }

  handleSetCommentList = (newCommentList) => {
    this.setState({ commentList: newCommentList });
  };

  render() {
    return (
      <div className='App'>
        <AddComment
          commentList={this.state.commentList}
          setCommentList={this.handleSetCommentList}
        />
        {!this.state.commentList.length ? (
          <span>Hiç yorum yok.</span>
        ) : (
          <Comment commentList={this.state.commentList} />
        )}
      </div>
    );
  }
}

/*
function App() {
  const [commentList, setCommentList] = useState([]);

  return (
    <div className='App'>
      <AddComment commentList={commentList} setCommentList={setCommentList}/>
      {!commentList.length ? <span>Hiç yorum yok.</span> : <Comment commentList={commentList}/>}
    </div>
  );
}
*/

export default App;
