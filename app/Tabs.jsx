import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {}
    }

    this.handleChange = (elem, item) =>  {
      const { place, handleChange } = this.props;
      const clientRect = elem.getBoundingClientRect();
      Object.defineProperty(clientRect, "bottom", {
        value: clientRect.top + elem.clientHeight,
        writable: true
      });

      this.setState({
         style: {
           width: elem.clientWidth,
           left: clientRect.left,
           top: clientRect[place]
          } 
        })
        item && handleChange(item)
    }

    this.handleClick = (item) => {
      const elem = event.target;
     this.handleChange(elem , item);
    }
  }

  renderTab(item) {
    const {  active } = this.props;
    let {  className } = this.props;
    className = [...className];
    active === item && className.push('active');
    let ref;
    if (active === item) ref = active;
    return (
      <div
        ref={ref}
        key={item}
        className={className.join(' ')}
        onClick={this.handleClick.bind(this, item)}
      >
        {item}
      </div>
    )
  }

  componentDidMount(){
    const { active } = this.props;
    let elem = this.refs[active];
    this.handleChange(elem)

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