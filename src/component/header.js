import '../css/header.css';

function Header() {
    const data = [
    {id:1, name: "홈", link: "/"},
    {id:2, name: "테스트", link: "/com"}

    ];
    const GnbList = data.map((gnbList, i) => 
        <li key={gnbList.id}>
            <a href={gnbList.link}>{gnbList.name}</a>
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
