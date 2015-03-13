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

//NSEW-B
//North, South, East, West, B
//11000 can't exist.
//01011 would be a |_ corner square, with a robot.

//Create board function:
//
var createBoard = function(){
  var boardSquares = [];
  for (var i = 0 ; i < 16; i++){
    var cols = [];
    for (var j = 0 ; j < 16; j++){
      var newSquare = "00000";
      cols.push()
    }
  }
};
//and console.log that shit....

















var gameBoard = React.createClass({
  getInitialState: function(){

    return{
      boardSquares : [],
      robots : []
    };
  },
  update: function(){
    console.log('update was called');
  },
  render: function(){
    return (
      <div></div>
    );
  }
});

React.render(<gameBoard/>, document.body);