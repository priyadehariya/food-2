import React, { Component,Fragment } from 'react'
import { Grid,Typography } from '@material-ui/core';
import Header from './Components/Header/Header'
import Card from './Components/Cards/Card'
import Save from './Components/Save/Save'
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cards : [],

      newPost:false,
      onUpdate:false,
      id:'',
      name:'',
      description:''

    } ;   
  }

  staticgetDeriverstateFromprops(props,state){
    if(state.filterCard)
    localStorage.setItem('cards',JSON.stringify(state.filterCard));
    return{...state,filterCard : ''};
  }

  shouldComponentUpdate(nextProps , nextState){
    return nextState !== this.state;
  }

  componentDidUpdate(PrevProps,PrevState){
    if (PrevState.filterCard)
    this.setState((PrevState) => 
    ({filterCard : ''})
    );
  }
  
  componentDidMount () {
    this.setState({cards : JSON.parse(localStorage.getItem('cards')) || [] });
  }


       

  newPostHandler=()=>{
    this.setState({newPost:true,onUpdate:false,id:'',name:'',description:''});
  }

  homePageHandler=()=>{
    this.setState({newPost:false,onUpdate:false,id:'',name:'',description:''});

  }
  onDeleteCard=(card)=>{
    const filterCards = this.state.cards.filter(c=> c.id !== card.id);
    this.setState({cards:filterCards,filterCard : filterCards});
    localStorage.setItem('cards',JSON.stringify(filterCards));

  }
  onAddEdit=(card)=>{
      this.setState({onUpdate:true,id:card.id,name:card.name,description:card.description})
  }
  onChangeEdit=(event)=>{
    this.setState({[ event.target.name ]: event.target.value });
  }

  onSaveHandler=()=>{
    const {id,name,description}=this.state;
    if(id === '' || name === '' || description === '') return alert('no input field must empty.')
    const Card ={id,name,description }
    const cardIndex= this.state.cards.findIndex(c=>c.id===id);
    const Cards=[...this.state.cards]

    if( cardIndex === -1) Cards.push(Card);
    else Cards[cardIndex] = Card;

    this.setState({cards:Cards});
    localStorage.setItem('cards',JSON.stringify(Cards));
    
    this.homePageHandler();

  }

  render() {
          let cards =this.state.cards.map((card,index)=>{
          return (<Card
          key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            delet={this.onDeleteCard.bind(this,card)}
            edit={this.onAddEdit.bind(this,card)}
            />)
          })

          let save=(
            <Save
            home={this.homePageHandler}
            id={this.state.id}
            name={this.state.name}
            description={this.state.description}
            change={this.onChangeEdit}
            isUpdate={this.state.onUpdate}
            save={this.onSaveHandler}
            />
          )
    return (
      <Fragment>
            <Header newPost={this.newPostHandler}/>
            <Grid  container>
              <Grid sm={2} item></Grid>
              <Grid sm={8} item>
                {(this.state.newPost || this.state.onUpdate) ?save:cards}
              
              
              </Grid>
              <Grid sm={2} item></Grid>
            </Grid>
           <Typography align="center" style={{marginTop:'2rem'}}>
             Made With <span style={{color:'red'}}>❤</span>Sheryians Coding School
           </Typography>
           

      </Fragment>
    )
  }
}
