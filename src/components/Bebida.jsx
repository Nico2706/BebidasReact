import React from 'react'
import { Button, Card,Col } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'




const Bebida = ({bebida}) => {
    const {handleModalClick, handleBebidaId} = useBebidas()
  return (
    <Col md={6} lg={3}>
            <Card>
                <Card.Img
                    variant="top"
                    src={bebida.strDrinkThumb}
                    alt={`imagen de ${bebida.strDrink}`}
                />

            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button variant={"info"} className="w-100 text-uppercase mt-2" onClick={()=>{
                    handleModalClick()
                    handleBebidaId(bebida.idDrink)
                }}>Ver Receta</Button>
            </Card.Body>
            </Card>
    </Col>
  )
}

export default Bebida