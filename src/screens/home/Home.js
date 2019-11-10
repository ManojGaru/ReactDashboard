import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider,    Typography } from '@material-ui/core';
import { Container,Row,Col,Dropdown, ButtonGroup,Button } from 'react-bootstrap';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BalanceCard from '../../component/BalanceCard';
import MiddleDividers from '../../component/MatBalanceCard';
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
    marginBottom:5
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
    marginTop:'1%',
    marginBottom:10,
    //marginLeft:50
    paddingLeft:'5%'
  },
  mainbtn:{
    marginTop:10,
    marginBottom:10,
    //marginLeft:50
  //  paddingLeft:'5%'
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
   // borderWidth:2,
    borderTopColor:'#007bff',
    marginLeft:theme.spacing(4),
    marginTop:theme.spacing(3)
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
  },
  btnTextFont:{
    fontFamily:'Futara'
  },
  btnTextFontLastOne:{
    fontFamily:'Futara',
    color:'#007bff'
  },
 
  btnTextFontLast:{
    fontFamily:'Futara',
    color:'#155724'
  },
  boldText:{
    fontWeight:'bold'
  },
  linkText:{
   // fontWeight:'bold',
    color:'#007bff',
    cursor:'pointer'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fluid>
        <Row>
        <Col xs={4}>
        <Col xs={1}></Col>
      <Col xs={4}>
        <Row className={classes.aboveAvatar}><ChatBubbleOutlineIcon/><Typography>RE: reward</Typography></Row>
      </Col>
      </Col>
        </Row>
        <Divider />
     <Row >
     <Col xs={4}> 
   <Row >
   
     <Col xs={1.5}>
     <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0aaitnN8uBJHkBj_XiuKJVc45xsi7Aok4BZCrlwYFKqVKZ4sx" className={classes.bigAvatar} />
    </Col>

    <Col xs={8}>
      <Row className={classes.userDetailsMargin}>
        <Col xs={1}><PanoramaFishEyeIcon className={classes.userDetailsIconFont}/></Col>
        <Col xs={10}><Typography className={classes.userDetailsFont ,classes.boldText}>   Prakash ,Himanshu</Typography></Col>
      </Row>
      <Row>
        <Col xs={1}><PanoramaFishEyeIcon className={classes.userDetailsIconFont}/></Col>
        <Col xs={10}><Typography className={classes.userDetailsFont}>   Burugupalli ,Satya</Typography></Col>
      </Row>
      <Row>
        <Col xs={12}><Typography className={classes.userDetailsFont}>Wednesday,November 6,2019 at 11:37 AM</Typography></Col>
      </Row>
      <Row>
        <Col xs={10}><Typography className={classes.userDetailsFont,classes.linkText}>Show Details</Typography></Col>
      </Row>
    </Col>
   </Row>
      </Col>
      <Col xs={8}></Col>
      
      </Row>
      <Divider />
      
      <Row style={{height:20,backgroundColor: 'rgb(237, 241, 253)',marginLeft:1,marginRight:1}}>

      </Row>
      </Container>
      
      <Container fluid className={classes.main}>
        <Row>
        <Col xs={3.5}>
        <Row>
        {/* <BalanceCard fullborder={true} allprice={false}></BalanceCard> */}
        <MiddleDividers></MiddleDividers>
        </Row>
        <Row>
          <Col xs={12}>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:15}}>To learn about more Better you Rewards </Typography>
          <Typography style={{fontFamily:'Lucida Sans', marginLeft:5,fontSize:15}}  className={classes.linkText}>click Here .</Typography>
          </Col>
        </Row>
        <Row>
        <Col xs={12}>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:15}}>Haven't Signed Up for Btter You Rewards? </Typography>
          <Typography style={{fontFamily:'Lucida Sans', marginLeft:5,fontSize:15}}  className={classes.linkText}>click Here and join now</Typography>
          </Col>
        </Row>
        <Row>
        
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,marginLeft:10,fontSize:23,fontWeight:'bold',color:'#007bff'}}>BetterY</Typography>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:23,fontWeight:'bold',color:'#155724'}}>'</Typography>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:23,fontWeight:'bold',color:'#FA7703'}}>o</Typography>
          <Typography style={{fontFamily:'Lucida Sans',marginTop:30,fontSize:23,fontWeight:'bold',color:'#007bff'}}>u</Typography>
          <Typography style={{fontFamily:'Lucida Sans', marginTop:30,marginLeft:5,fontSize:23,fontWeight:'bold',color:'#155724'}}  className={classes.linkText}>Rewards</Typography>
         
        </Row>
        </Col>
        
        <Col xs={8}>
          <Row>
            <Col xs={1}></Col>
            <Col xs={2}>
            <Typography>Months</Typography>
            <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className={classes.dropDoenWidth}>Month </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Col>
            <Col xs={2}>
            <Typography>Years</Typography>
            <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className={classes.dropDoenWidth}>Year</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Col>
          </Row>
         <Row>
         <Col xs={1}></Col>
           <Col xs={3.5}>
           <BalanceCard fullborder={false} allprice={false}></BalanceCard>
           </Col>
           <Col xs={1}></Col>
           <Col xs={3.5}>
           <BalanceCard fullborder={false} allprice={true}></BalanceCard>
           </Col>
        </Row>
        <Row>
        <Col xs={1}></Col>
           <Col xs={3.5}>
           <BalanceCard fullborder={false} allprice={false}></BalanceCard>
           </Col>
           <Col xs={1}></Col>
           <Col xs={3.5}>
           <BalanceCard fullborder={false} allprice={true}></BalanceCard>
           </Col>
        </Row>
        </Col>
        </Row> 
      </Container>
      <Divider />
      <Container fluid className={classes.main}>
        <Row>
          <Col xs={4}>
          <ButtonGroup className={classes.mainbtn} aria-label="Basic example">
      <Button className={classes.btnTextFont} variant="info">Eligible Rewrard</Button>
      
      <Button className={classes.btnTextFont} variant="outline-info">Complement Rewards</Button>
      </ButtonGroup>
          </Col>
          <Col xs={4}></Col>
          <Col xs={4}>
          <Row>
      <CheckCircleIcon className={classes.btnTextFontLastOne}></CheckCircleIcon><Typography className={classes.btnTextFont}>Eligible</Typography>
      <CheckCircleIcon className={classes.btnTextFontLast}></CheckCircleIcon><Typography className={classes.btnTextFont}>Complement</Typography>
      </Row>
          </Col>
        </Row>
      
      
      
      </Container>
      </div>
  );
}
