import { Card } from "react-bootstrap"

type StoreItemProps = {
    id: number,
    title: string,
    price: number,
    image: string
}

export const StoreItem = ({id, title, price, image}:StoreItemProps) => {
  return (
        <Card>
            <Card.Img variant="top" src={image}
            height="200px" 
            style={{objectFit: "cover"}}
            />
        </Card>
  )
}
