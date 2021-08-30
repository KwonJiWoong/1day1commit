import '../css/header.css';

function Header() {
    const data = [
    {"gnb" : ["목록1","목록2","목록3","목록4"]}
    ];
    function GnbSet({props}){
        let GnbList = data[0].gnb.map((gnbList, i) => <li>{gnbList}</li>);
        return(
            <ul>
                {GnbList}
            </ul>
        );
    }
  return (
    <header>
        <h1 className="title">권지웅의 포트폴리오</h1>
        <nav>
            <GnbSet data={data.gnb}></GnbSet>
        </nav>
    </header>
  );
}

export default Header;
