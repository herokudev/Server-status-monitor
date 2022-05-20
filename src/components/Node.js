import React from 'react';
import axios from "axios";
import './Node.css';
import useCollapse from 'react-collapsed';
import Block from './Block';
import online from './Online.png';
import offline from './Offline.png';
import collapse from './chevron-up.png';
import expand from './chevron-down.png';
let blocks = [];
let status;

export default function Node(props) {
    const { url, node_name } = props;
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
    React.useEffect(() => {
      // invalid url will trigger an 404 error
      axios.get(`${url}/api/v1/blocks`).then((response) => {
        setPost(response.data);
      }).catch(error => {
        setError(error);
      });
    }, []);
    
    if (error) {
        //node_response = false;
        status = offline;
    }
    else {
        //node_response = true;
        status = online;
    };

    if (!post) {
      return (
        <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <div className = "server--info">
                <div>
                    <p className = "node--title">{node_name}</p>
                </div>                
                <div>
                <img className="server--status" src={status} alt="" />
                    {isExpanded ? <img className="node--status" src={collapse} /> : <img className="node--status" src={expand} /> }
                </div>
            </div>
            <p className = "node--url">{url}</p>
        </div>
        <div className = "blocks--container" {...getCollapseProps()}>
            <Block 
                id = "000"
                info = "No data to display!!"
            />                       
        </div>
        </div>
      );    
    }
    else {
      return (
        <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            <div className = "server--info">
                <div>
                    <p className = "node--title">{node_name}</p>
                </div>                
                <div>
                <img className="server--status" src={status} alt="" />
                    {isExpanded ? <img className="node--status" src={collapse} /> : <img className="node--status" src={expand} /> }
                </div>
            </div>
            <p className = "node--url">{url}</p>
        </div>
        <div className = "blocks--container" {...getCollapseProps()}>
            {
                post.data.map(item => (
                    <Block 
                    id = {'00'+item['id']}
                    info = {item['attributes'].data}
                />    
                ))
            }                    
        </div>
        </div>
      );
    }
}
