import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div className="p-8"><h2 className="text-2xl">Accueil Nour Tech</h2></div>;
const Services = () => <div className="p-8"><h2 className="text-2xl">Services</h2></div>;
const About = () => <div className="p-8"><h2 className="text-2xl">À propos</h2></div>;
const Contact = () => <div className="p-8"><h2 className="text-2xl">Contact</h2></div>;

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-600 p-4">
          <Link to="/" className="text-white mr-4">Accueil</Link>
          <Link to="/services" className="text-white mr-4">Services</Link>
          <Link to="/about" className="text-white mr-4">À propos</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
