import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PizzaItem(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title} </Card.Title>
          <Card.Text> Price :{props.price} $</Card.Text>
          <Button variant="primary">Order now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PizzaItem;
