import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Loader from "./loader";

const quotes = [
  {
    author: "Boss Dog, Bob Ross",
    content: "There are no mistakes, only happy accidents."
  },
  {
    author: 'Bob "Bob Ross" Ross',
    content:
      "Talent is a pursued interest. Anything that you're willing to practice, you can do."
  },
  { author: "Bob N. Ross", content: "Alright, let's get crazy." },
  { author: "Bob Ross", content: "Lets build a happy little cloud." },
  {
    author: "Robert Norman Ross",
    content: "Lets build some happy little trees."
  },
  { author: "Bob Ross", content: "And right there you got an almighty cloud." },
  {
    author: "Bob Ross the Devil Defeater",
    content: "Just beat the devil out of it."
  },
  { author: "Bob Ross", content: "Let's make a happy little mountain now." },
  {
    author: "Bob Ross",
    content: "There’s nothing wrong with having a tree as a friend."
  },
  { author: "Bob Ross", content: "Alizarin Crimson" },
  { author: "Bob Ross", content: "Cadmium Yellow" },
  { author: "Bob Ross", content: "Phthalo Blue" },
  { author: "Bob Ross", content: "Van Dyke Brown" },
  { author: "Bob Ross", content: "Yellow Ochre" }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      content: "",
      author: "",
      hasQuote: false
    };
  }

  fetchQuotes = () => {
    const QuoteNumber = Math.floor(Math.random() * 14);
    // console.log(quotes[QuoteNumber].content);
    this.setState({ hasQuote: false });
    this.setState({
      content: quotes[QuoteNumber].content,
      author: quotes[QuoteNumber].author
    });
    setTimeout(() => {
      this.setState({ hasQuote: true });
    }, 2000);
  };

  componentDidMount() {
    console.log("Component Did Mount");
    this.fetchQuotes();
  }

  render() {
    console.log(this.state);
    const { hasQuote } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {hasQuote ? (
            <div>
              <p>Random Quote Machine</p>
              <p>{this.state.content}</p>
              <span>{this.state.author}</span>
              <button onClick={this.fetchQuotes}>Fetch Quote</button>
            </div>
          ) : (
            <Loader />
          )}
        </header>
      </div>
    );
  }
}

export default App;
