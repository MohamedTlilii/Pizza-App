import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from 'prop-types'; // ES6



function PizzaItem({img ,title,price}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text> Price :{price} $</Card.Text>
          <Button variant="primary">Order now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
PizzaItem.defaultProps = {
  img: "https://cdn-icons-png.flaticon.com/512/6978/6978255.png",
  title: "Pizza name",
  price: "N/A",
};


PizzaItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default PizzaItem;
