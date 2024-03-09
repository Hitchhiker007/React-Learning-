import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Bussy', 'Nussy', 'Gushy', 'The Bussy Prince', 'Sarlussy', 'Barlussy', 'Gnarlussy'];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max +1));
}

function Header() {
  const description = reactDescriptions[generateRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
        <img src= {reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          You are in {description} Domain!
        </p>
      </header>
    );
  }

export function MainGoal(){
  return (
    <p>
    My main goal: Learn react from the ground up"
    </p>
  );
}

function CoreConcept(props){
  return (
    <li>
      <img src = {props.image} alt= {props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
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
            <CoreConcept title = "Components" description = "The core ui building block"
            image={componentsImg} />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <MainGoal />
      </main>
    </div>
  );
}

export default App;
