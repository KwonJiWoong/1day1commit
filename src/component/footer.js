import '../css/footer.css';
import footerData from '../json/footer.json';

const newfooterData = footerData.content.person.map((item, name,  email,  tel) => {
  return (
    <ul>
      <li key={name}>
        {item.name} 
      </li>
      <li key={email}>
        {item.email} 
      </li>
      <li key={tel}>
        {item.tel} 
      </li>
    </ul>
  );
})

function Footer() {
  return (
    <footer>
        {newfooterData}
    </footer>
  );
}

export default Footer;
