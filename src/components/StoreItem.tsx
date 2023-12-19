import { Card } from "react-bootstrap"

type StoreItemProps = {
    id: number,
    title: string,
    price: number,
    image: string
}

export const StoreItem = ({id, title, price, image}:StoreItemProps) => {
  return (
        <Card key={id}>
            <Card.Img variant="top" src={image}
            height="300px" 
            style={{objectFit: "contain"}}
            />
            <Card.Body className="d-flex flex-column">
<Card.Title className="d-flex justify-content-between align-items-baseline my-4">
    <span className="fs-5">{title}</span>
    <span className="ms-2 text-muted">${price}</span>
</Card.Title>

            </Card.Body>
        </Card>
  )
}
