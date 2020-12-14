import React from "react";
import cars from "../cars.json";
 import { Container, Paper, Chip } from "@material-ui/core";
import "../App.css";


const Car = (props) => {
    const id = props.match.params.id;
    const car = cars.find(car => car.id ==id);
    // console.log(id)
    console.log(car)
    return (
        <div>
            <Container maxWidth="sm" className="car-container">
                <Paper className="car-paper">
                    <div>
                    { <h2 style={{ textTransform: 'uppercase'}} >{car.Name}</h2>}
                    </div>
                    <div>
                        <Chip size="medium" label={`id: ${car.id}`} />
                        <Chip size="medium" label={`Miles_per_Gallon: ${car.Miles_per_Gallon}`} />
                        <Chip size="medium" label={`Cylinders: ${car.Cylinders}`} />
                        <Chip size="medium" label={`Displacement: ${car.Displacement}`} />
                        <Chip size="medium" label={`Horsepower: ${car.Horsepower}`} />
                        <Chip size="medium" label={`Weight_in_lbs: ${car.Weight_in_lbs}`} />
                        <Chip size="medium" label={`Acceleration: ${car.Acceleration}`} />
                        <Chip size="medium" label={`Year: ${car.Year}`} />
                        <Chip size="medium" label={`Origin: ${car.Origin}`} />
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Car;