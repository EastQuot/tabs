import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {}
    }

    this.handleChange = (item) => {
      const { pos, place } = this.props;
      // console.log(pos, place)
      const elem = event.target;
      const clientRect = elem.getBoundingClientRect();
      // console.log(clientRect)
      this.setState({
         style: {
           width: elem.clientWidth,
           left: clientRect.left
          } 
        })
      const { handleChange } = this.props;
        handleChange(item)
    }
  }

  renderTab(item) {
    const {  active } = this.props;
    let {  className } = this.props;
    className = [...className];
    active === item && className.push('active');
    return (
      <div
        key={item}
        className={className.join(' ')}
        onClick={this.handleChange.bind(this, item)}
      >
        {item}
      </div>
    )
  }
  
  render() {
    const { tabsArray } = this.props;
    return (
      <div
      className={'tabs'}
      >
        {tabsArray.map(item =>
           this.renderTab(item)
        )}
          <span style={this.state.style}></span>
      </div>
    )
  }
}


export default Tabs;