import React from 'react';
import ReactDom from 'react-dom';

import Tabs from './Tabs.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: 'home',
      active: 'home'
    }

    this.handleChange = (item) => {
      this.setState({ value: item, active:item })
    }
  }

  render() {
    
    return (
      <div>
        <Tabs 
        handleChange={this.handleChange}
        active = {this.state.active}
        place={pos.bottom}
         {...this.props} />
        {this.state.value ==  tabsArray[0] && <div>HOME</div>}
        {this.state.value == tabsArray[1] && <div>GO</div>}
        {this.state.value ==  tabsArray[2] && <div>HELP</div>}
      </div>
    )
  }
}


const tabsArray = ['home', 'go', 'help', 'памаагииииите']
const pos = {top: 'top', bottom: 'bottom'};

ReactDom.render(
  <App 
  tabsArray={tabsArray}
  className={['tab']}
  pos={pos}
   />,
  document.getElementById('container')
)