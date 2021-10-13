import './App.css';
import './css/reset.css';
import Header from './component/header';
import Section from './component/section';
import Footer from './component/footer';
const { default: fetch } = require("node-fetch");

fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
    console.log(res.json())
);
function App() {
  
  return (
    
      <div className="App">
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
      </div>
  );
}

export default App;
