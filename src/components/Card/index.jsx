import "./style.scss";
import like from "../../assets/img/like.svg";
import watch from "../../assets/img/view.svg";
const Card = ({ data }) => {
  const { previewURL, tags, type, largeImageURL, likes, user, views } = data;
  return (
    <article className="Card">
      <div className="wrapperImg">
        <img src={previewURL} className="img" alt="api-data" />
      </div>
      <div className="wrapperData">
        <section className="wrapperGeneralInfo">
          <p className="text">Autor: {user}</p>
          <p className="text">Tipo: {type}</p>
          <p className="text">Tags: {tags}</p>
        </section>
        <section className="wrapperInfo">
          <div className="wrappericons">
            <img src={like} alt="like" className="icon" />
            <span className="data">{likes}</span>
          </div>
          <div className="wrappericons">
            <img src={watch} alt="vistas" className="icon" />
            <span className="data">{views}</span>
          </div>
        </section>
        <section className="wrapperButton">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="buttonImg"
          >
            Ver Imagen
          </a>
        </section>
      </div>
    </article>
  );
};

export default Card;
