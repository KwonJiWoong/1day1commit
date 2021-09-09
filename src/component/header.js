import '../css/header.css';
import { Link } from "react-router-dom";

function Header() {
    const data = [
    {id:1, name: "홈", link: "./"},
    {id:2, name: "서브", link: "./sub"},
    {id:3, name: "버튼 모음", link: "./btn"}
    ];
    const GnbList = data.map((gnbList) => 
        <li key={gnbList.id}>
            <Link to={gnbList.link}>{gnbList.name}</Link>
        </li>
    );
  return (
    <header>
        <h1 className="title">권지웅의 포트폴리오</h1>
        <nav>
            <ul>{GnbList}</ul>
        </nav>
    </header>
  );
}

export default Header;
