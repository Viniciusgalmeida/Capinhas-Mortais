import "./Marks.css";
import image1 from "../../../public/kit1.png";
import image2 from "../../../public/kit2.png";
import image3 from "../../../public/kit3.png";

const marksContent = [
  {
    image: image1,
    title: "Dark Mark",
    subtitle: "Liberte seu senhor das trevas interior!",
  },
  {
    image: image2,
    title: "Lightning Bolt",
    subtitle: "A marca do escolhido!",
  },
  {
    image: image3,
    title: "Encantamento de Varinha",
    subtitle: "Um toque de mágica!",
  },
];

function Marks() {
  return (
    <div className="marks_container">
      <ul className="marks_list">
        {marksContent.map((marks, index) => (
          <li className="marks_list_card" key={index}>
            <img className="marks_list_img" src={marks.image} alt={marks.title} />
            <h3 className="marks_list_title">{marks.title}</h3>
            <p className="marks_list_text">{marks.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marks;
