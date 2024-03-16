import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Bussy', 'Nussy', 'Gushy', 'The Bussy Prince', 'Sarlussy', 'Barlussy', 'Gnarlussy'];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max +1));
}

export default function Header() {
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
  