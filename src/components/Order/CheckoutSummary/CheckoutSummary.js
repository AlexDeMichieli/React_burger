import React from 'react';
import Burger from '../../Burger/Burger'
import styles from './CheckoutSummary.css'
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ButtonUI from '@material-ui/core/Button';
import { withTheme } from '@material-ui/styles';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    bar: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "350px",
    },
    buttonCancel: {
      backgroundColor: "#f50057", 
      width: "120px",
      height: "50px",
      color: "white",
      marginLeft: '50px',
      marginBottom: '50px',
   },
   buttonContinue:{

    backgroundColor: "rgb(161, 201, 241)", 
    width: "120px",
    height: "50px",
    color: "white",
    marginLeft: '50px',
    marginBottom: '50px',

   }
    
  });

  

const checkoutSummary =(props)=>{


  

    const classes = useStyles();

    console.log('from summary', props.location.state )
    
    return (
        <div className={styles.CheckoutSummary}>

            <h1 className ={styles.Text} >Ready to Pay?</h1>

            <Burger ingredients={props.ingredients}/>
                <div className ={classes.bar}>
                    <ButtonUI  className = {classes.buttonCancel} variant="contained" color="secondary"
                        onClick ={props.checkoutCancelled}>Cancel
                    </ButtonUI>
                    <ButtonUI className = {classes.buttonContinue} variant="contained" color="primary"
                        onClick={props.checkoutContinued}>Continue
                    </ButtonUI>
                </div> 
        </div>
    )

}
export default withRouter(checkoutSummary)