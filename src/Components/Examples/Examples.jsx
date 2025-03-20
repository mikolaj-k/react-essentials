import { useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import "./Examples.css";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={CORE_CONCEPTS.map((conceptItem) => (
          <TabButton
            key={conceptItem.title}
            isSelected={selectedTopic === conceptItem.title.toLowerCase()}
            onClick={() => setSelectedTopic(conceptItem.title.toLowerCase())}
          >
            {conceptItem.title}
          </TabButton>
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
