import Card from "../Card";
import "./style.scss";
const ListCard = ({ arrayImages }) => {
  return (
    <div className="wrapperList">
      {arrayImages.map((image) => {
        return <Card key={image.id} data={image} />;
      })}
    </div>
  );
};

export default ListCard;
