import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponent = () => (
<Menu>
  <Menu.Item name='signip'>
     Books shop
   </Menu.Item>
 <Menu.Menu position='right'>
   <Menu.Item name='signip'>
     total: &nbsp; <b>0</b>
   </Menu.Item>
   <Menu.Item name='help'>
     Cart
   </Menu.Item>
 </Menu.Menu>
</Menu>
)
export default MenuComponent;