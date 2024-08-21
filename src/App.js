import React from "react";
import "./styles.css";
import { EXAMPLES } from "./data";
import TabButton from "./TabButton";

export default function App() {
  const [selectedTopic, setSelectedTopic] = React.useState();

  function handleSelect(topic) {
    setSelectedTopic(topic);
    console.log(topic); // Logging the topic, not the state (which would still reflect the previous state during this log)
  }

  let tabContent = <p>please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello Manisha!</h1>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>

      {tabContent}
    </div>
  );
}
