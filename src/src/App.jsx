import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

export function MainGoal(){
  return (
    <p>
    My main goal: Learn react from the ground up"
    </p>
  );
}

function App() {
  return (
    <div>
      <Header />
      <h1>BUSSY!</h1>
      <main>
        <section id= "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title = {CORE_CONCEPTS[0].title} description = {CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id = "examples">
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        <MainGoal />
      </main>
    </div>
  );
}

export default App;
