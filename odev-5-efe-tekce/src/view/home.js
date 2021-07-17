import React, { Component } from "react";
import { Header } from "../container";
import { TweetForm } from "../component/tweetForm";
import { TweetList } from "../component/tweetList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      tweetText: "",
      tweets: [],
    };
    this.onChangeTweetForm = this.onChangeTweetForm.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  // Component render edilince çalışan useEffect'in class component karşılığıdır.
  componentDidMount() {
    fetch("tweetData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ tweets: data });
      })
      .catch((err) => console.log(err));
  }
  // Tweet textinin değişimini algılayıp state'e atar.
  onChangeTweetForm(event) {
    this.setState({ tweetText: event.target.value });
  }
  // Tweet at butonu için fonksiyon.
  handleTweetSubmit() {
    const user = JSON.parse(localStorage.getItem("user"));
    const newTweets = [...this.state.tweets];

    newTweets.unshift({
      id: "",
      name: user.name,
      username: user.username,
      profilePicture: user.profilePicture,
      replyCount: 50,
      retweetCount: 200,
      likeCount: 1000,
      tweetContent: this.state.tweetText,
      dateTime: new Date().toISOString(),
    });

    this.setState({
      tweets: newTweets,
    });
  }

  render() {
    const { tweetText, tweets } = this.state;

    return (
      <div className='latestTweets'>
        <Header title='Home' />
        <TweetForm
          tweetText={tweetText}
          onChangeTweetForm={this.onChangeTweetForm}
          handleTweetSubmit={this.handleTweetSubmit}
        />
        <div className='latestTweets__divisor' />
        {tweets.length > 0 ? (
          <TweetList tweets={tweets} />
        ) : (
          <span>Loading...</span>
        )}
      </div>
    );
  }
}

export default Home;
