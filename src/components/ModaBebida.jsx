import React from 'react'
import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModaBebida = () => {

  

    const {modal, handleModalClick, receta} = useBebidas()

    const mostrarIngredientes = () =>{

        let ingredientes = []

        for(let i =1; i < 16; i++){
            if(receta[`strIngredient${i}`]){ 
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]}{receta[`strMeasure${i}`]}</li>
                )       
            }
        }

        return ingredientes
    }


  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Image src={receta.strDrinkThumb} alt={`Imagen Receta ${receta.strDrink}`}/>
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <h1>Instrucciones</h1>
                {receta.strInstructions}
                <h2>Ingredientes</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>

    </Modal>
  )
}

export default ModaBebida