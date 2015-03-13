  var App = React.createClass({
    // getDefaultProps: function(){ Props: Meant to be passed in as static values...
    //   return {
    //     txt: 'this is a default prop',
    //     cat: 0
    //   }
    // },
    // propTypes:{
    //   txt: React.PropTypes.string,
    //   cat: React.PropTypes.number.isRequired //not specifying cat in getDefaultProps would create a warning in App component
    // },
    // 
    // 
    getInitialState: function(){
      return {
        red:0,
        green:0,
        blue:0
      };
    },
    update: function(){
      this.setState({
        red:this.refs.red.getDOMNode().value,
        green:this.refs.green.getDOMNode().value,
        blue:this.refs.blue.getDOMNode().value
      });
    },
    render:function(){
      return (
        <div>
        <Slider ref="red" update={this.update}/> 
        <label>{this.state.red}</label>
        <Slider ref="green" update={this.update}/> 
        <label>{this.state.green}</label>
        <Slider ref="blue" update={this.update}/> 
        <label>{this.state.blue}</label>

        </div>
        );
    }
  });
  //Render needs to return only one element. "Must be wrapped in an enclosing tag."

  var Slider = React.createClass({
    render:function(){
      return(
        <input type="range" min="0" max="255" onChange={this.props.update} />
        )
    }
  });

  React.render(<App />, document.body); //can assign properties, but need interpolation: {this.props.txt}
