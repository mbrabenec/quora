import "./App.css";

import {Question} from "./Question"

function App() {

  return (
    <div className="App">
      <div>
        <Question
          title="What’s the big deal with React.js?"
          text="What are some facts about why React is technically superior"
        />
        <br />

        <Question title="Is React.js worth it?" text="Let us know" />
        <br />

        <Question
          title="Should I learn React.js or Vue.js?"
          text="Basically is it worth it if I learn Vue.js first and then React.js"
        />
      </div>
    </div>
  );
}

export default App;
