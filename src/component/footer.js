import '../css/footer.css';
import footerData from '../json/footer.json';

const newfooterData = footerData.content.person.map((item, index) => {
  return (
    <ul>
      <li key={index}>
        {item.name} 
      </li>
      <li key={index}>
        {item.email}
      </li>
      <li key={index}>
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
