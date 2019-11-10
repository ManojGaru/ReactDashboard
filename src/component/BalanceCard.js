import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {  Divider, Typography, Chip } from '@material-ui/core';
import { Row,Col,Card } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    marginLeft:5,marginRight:5
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar:{
    marginLeft:10,
    width:70,
    height:70,
    marginTop:10,
    marginBottom:10
  },
  aboveAvatar:{
    marginTop:10,
    marginBottom:10
  },
  divider:{
     // marginLeft:10,
     // marginRight:10
  },
  main:{
    marginTop:'2%',
    marginBottom:20,
    //marginLeft:50
    paddingLeft:'5%'
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  HeadType:{
    fontFamily:'Avanta Garde',
  },
  cardBorder:{
    borderWidth:2,
    borderColor:'#155724'
  },
  cardBorderTop:{
    borderTopWidth:3,
    borderTopColor:'#007bff',
   // marginLeft:theme.spacing(4),
    marginTop:theme.spacing(4)
  },
  cardBorderTopNext:{
    borderTopWidth:3,
   // borderWidth:2,
    borderTopColor:'#007bff',
   // marginLeft:theme.spacing(4),
    marginTop:theme.spacing(4)
  }
  ,priceText:{
    fontWeight:'bold',
    color:'#155724'
  },
  priceTextNormal:{
    fontWeight:'bold',
    //color:'#155724'
  },
  price:{
    marginLeft:theme.spacing(2)
  },
  size:{
    fontSize:20
  }
  ,
  userDetailsMargin:{
    marginTop:10
  },
  userDetailsFont:{
   fontSize:14
  }
  ,userDetailsIconFont:{
    fontSize:17,
    fontWeight:'bold'
  },
  dropDoenWidth:{
    width:'120%'
  }
}));

export default function BalanceCard(props) {
    console.log(props);
    
  const classes = useStyles();
 if(props.fullborder === true && props.allprice === false){
    return (
        <div className={classes.root}>
    
          
            <Row>
            <Col xs={3.5}>
           <Card className={classes.cardBorder}>
            <Card.Body >
            <Typography variant="h5" component="h2" className={classes.HeadType}>
            Available Rewards Balance
            </Typography>
            <Divider  />
            <Row>
              <Col xs={4}>
              <Typography variant="h5" component="h2" className={classes.priceText}>
             $0.00
            </Typography>
              </Col>
              <Col xs={2}>
              <Chip className={classes.priceText} label="YTD" />
              </Col>
              <Col xs={6}></Col>
            </Row>
           
           
            </Card.Body>
            </Card>
            </Col>
          </Row>
         
          </div>
      );
 }else if(props.fullborder === false && props.allprice === false) {
     return(
    <Card className={classes.cardBorderTop}>
    <Card.Body >
    <Typography variant="h5" component="h2" className={classes.HeadType}>
    Available Rewards Balance
    </Typography>
    <Divider  />
    <Row>
       
    <Col xs={6} className={classes.price}>
      <Row>
          <Typography variant="h5" component="h2" className={classes.priceTextNormal}> $0.00 </Typography><Chip className={classes.priceTextNormal} label="YTD" />
      </Row>
      </Col>
       <Col xs={6}>
      {/* <Row>
      <Typography variant="h5" component="h2" className={classes.priceTextNormal}> $0.00 </Typography><Chip className={classes.priceTextNormal} label="YTD" />
      </Row> */}
      </Col>
    </Row>
   
   
    </Card.Body>
    </Card>
     )
 }else{
    return(
        <Card className={classes.cardBorderTop}>
        <Card.Body >
        <Typography variant="h5" component="h2" className={classes.HeadType}>
        Available Rewards Balance
        </Typography>
        <Divider  />
        <Row>
            
        <Col xs={5} className={classes.price}>
          <Row>
          <Typography variant="h5" component="h2" className={classes.priceTextNormal}> $0.00 </Typography><Chip className={classes.priceTextNormal} label="YTD" />
          </Row>
          </Col>
           <Col xs={6} >
          <Row>
          <Typography variant="h5" component="h2" className={classes.priceTextNormal}> $0.00 </Typography><Chip className={classes.priceTextNormal} label="YTD" />
          </Row>
          </Col>
        </Row>
        </Card.Body>
        </Card>
    )
 }

}
