import React from 'react';
import Button from '../../UI/Button/Button'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ButtonUI from '@material-ui/core/Button';

const theme = createMuiTheme({
    spacing: [0, 4, 8, 16, 32, 64],
  });

const useStyles = makeStyles({
    font: {
        fontFamily: 'Fredoka One'
    },
    spacing: {
        margin: theme.spacing(4),
    },
    buttonCancel: {
        backgroundColor: "#f50057", 
        width: "110px",
        height: "50px",
        color: "white",
       
     },
     buttonContinue:{
  
      backgroundColor: "rgb(161, 201, 241)", 
      width: "110px",
      height: "50px",
      color: "white",
 
  
     }
  });

const orderSummary =(props)=> {

    const classes = useStyles();

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key= {igKey}>
            {igKey}:<span style ={{textTransform: 'capitalize'}}>{props.ingredients[igKey]}</span>
            </li>
        )
    })

    return(


        <div style ={{backgroundColor: "white", color: 'black', padding: '20px'}}>
            <Typography className ={[classes.font, classes.spacing].join(" ")} variant="h4" align="center">Your Order</Typography>
            <Typography className ={classes.font} variant="h6">Ingredients:</Typography>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price</h3>
            <p>${props.price}</p>
            <p>Continue to Checkout?</p>
            <ButtonUI  className = {classes.buttonCancel} onClick ={props.purchaseCanceled}> Cancel</ButtonUI>
            <ButtonUI  className = {classes.buttonContinue} onClick ={props.purchaseContinued}>Continue</ButtonUI>
        </div>

    )
}

export default orderSummary