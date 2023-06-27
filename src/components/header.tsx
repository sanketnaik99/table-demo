import "./style.css";

const Header = () => {
  return (
    <thead>
      <tr>
        <th className="header">Region</th>
        <th className="header"></th>
        <th className="header">ICE</th>
        <th className="header">MHEV</th>
        <th className="header">PHEV</th>
        <th className="header">BEV</th>
      </tr>
    </thead>
  );
};

export default Header;
