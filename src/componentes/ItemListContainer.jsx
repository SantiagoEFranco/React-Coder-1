import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 export default function ItemListContainer({ItemListTitle , greeting}) {
  return (
    <Card bg='dark' style={{ color:"white" }}>
      <Card.Body>
        <Card.Title>{ItemListTitle}</Card.Title>
        <Card.Text>
          {greeting}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
