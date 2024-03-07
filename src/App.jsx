const reactDescriptions = ['Bussy', 'Nussy', 'Gushy', 'The Bussy Prince', 'Sarlussy', 'Barlussy', 'Gnarlussy'];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max +1));
}

function Header() {
  const description = reactDescriptions[generateRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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

function App() {
  return (
    <div>
      <Header />
      <h1>BUSSY!</h1>
      <main>
        <h2>Bussy!</h2>
        <MainGoal />
      </main>
    </div>
  );
}

export default App;
