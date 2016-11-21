import React from 'react';
import Card from './component/card';
import {data} from './component/data';
class Cards extends React.Component{
  render(){
    let cards = data.map( function (item,index) {
      return <Card key={index} title={item.title} index={item.index} date={item.date}/>
    } )
    console.log(cards);
    return(
      <div>
        {cards}
      </div>
    )
  }
}

export default Cards;
