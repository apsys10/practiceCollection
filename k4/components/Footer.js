import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


export default () =>{
    return <Menu style ={{marginTop : '200px ' , position: 'absolute' , bottom: 0 , "width" : "90%"}}>
        <Link route="/"> 
        <a className="item">CrowdCoin</a>
        </Link>
        <Menu.Menu position="right">
        <Link route="/"> 
        <a className="item">Campaigns</a>
        </Link>
        

        
        </Menu.Menu>
    </Menu>
}