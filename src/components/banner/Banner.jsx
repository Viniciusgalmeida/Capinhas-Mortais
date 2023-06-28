import "./Banner.css";
import smartphone from "/case+magic+wand2.svg";

function Banner() {
  return (
    <div>
      <div className="banner">
        <img className="banner-image" src={smartphone} alt="smartphone"></img>

        <p className="banner-Title">Conquiste a Magia do Estilo</p>
        <div className="banner-buttons">
          <button className="button-shop">Compre Já!</button>
          <button className="button-explore">Explore!</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
