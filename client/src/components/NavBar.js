import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {

  const DropdownExamplePointingTwo = () => (
    <Menu vertical>
      <Menu.Item>Our Brews</Menu.Item>
      <Dropdown text='Brews' pointing='left' className='link item'>
        <Dropdown.Menu>
          <Dropdown.Item>Lanesplitter Amber Ale</Dropdown.Item>
          <Dropdown.Item>Tripple Tree Pale Ale</Dropdown.Item>
          <Dropdown.Item>Burnout Lager</Dropdown.Item>
          <Dropdown.Item>Whiskey Throttle IPA</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Spam (1009)</Dropdown.Item>
          <Dropdown.Item>Trash</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>Browse</Menu.Item>
      <Menu.Item>Help</Menu.Item>
    </Menu>
  )

  activeItem = (navPath) => {
    return navPath === this.props.location.pathname;
  }


  

//   render() {
//     return (
//       <div>
//         <Menu pointing>
//           <Link to='/'>
//             <Menu.Item name='home' active={this.activeItem('/')} />
//           </Link>
//           <Menu.Menu position='right'>
//             <Link to='/'>
//               <Menu.Item name='Our Brews' />
//             </Link>
//           </Menu.Menu>
//         </Menu>
//       </div>
//     )
//   }
// }

export default withRouter(NavBar, DropdownExamplePointingTwo);
