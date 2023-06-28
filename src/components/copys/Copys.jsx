import "./Copys.css";

const copys = [
  {
    title: "Luxo da Magia Negra",
    subtitle:
      "Potencialize seu senhor das trevas interior com nossa coleção premium de capinhas!",
  },
  {
    title: "Padrões encantadores",
    subtitle: "Fique hipnotizado por nossos designs geométricos fascinantes!",
  },
  {
    title: "O Glamour das Relíquias da Morte",
    subtitle:
      "Capas de telefone exclusivas inspiradas nas lendárias Relíquias da Morte!",
  },
  {
    title: "Seja um Trouxa Esperto",
    subtitle: "Mostre aos bruxos que trouxas também tem estilo!",
  },
  {
    title: "Contagie seus amigos com nosso estilo",
    subtitle:
      "Seja um dementador do tédio e leve alegria aos seus amigos com nossas capinhas vibrantes",
  },
  {
    title: "Infunsão de Encantamentos",
    subtitle: "Infunda encantamentos cativantes em seu estilo diário!",
  },
];

function Copys() {
  return (
    <div className="copys-container">
      <p className="copys-title">Designs Místicos & Cativantes</p>
      <ul className="copys-list">
        {copys.map((copy, index) => (
          <li key={index}>
            <h3 className="copys-list-title">{copy.title}</h3>
            <p className="copys-list-subtitle">{copy.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Copys;
