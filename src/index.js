import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './Cards';
import Sdata from './Sdata';

ReactDOM.render(
<>
<h1 className= "heading_style"> List of top 5 Learning Platforms</h1>
{Sdata.map((val) => {
    return(
        <Cards
           imgsrc={val.imgsrc}
           title={val.title}
           sname={val.sname}
           link={val.links}
           />
        
      );
})}

</>,
document.getElementById("root")
);


