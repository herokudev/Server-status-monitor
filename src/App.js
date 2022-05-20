import React from 'react';
import Node from './components/Node'
import './App.css';

export default function App() {
    return (
      <div className = "main--content">
         <strong className = "main--title">Nodes</strong>  
         <Node 
          url ="https://thawing-springs-53971.herokuapp.com"
          node_name = "Thawing Springs" 
        />
         <Node 
          url ="https://secret-lowlands-62331.herokuapp.com"
          node_name = "Secret Lowlands" 
        />
         <Node 
          url ="https://calm-anchorage-82141.herokuapp.com"
          node_name = "Calm Anchorage" 
        />                
        <Node 
          url ="http://localhost:8080"
          node_name = "Node4" 
        />             
      </div>
    );
}
