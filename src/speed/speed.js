import React, { Component } from 'react';
import './speed.css'
var speedvalue
function randomIntFromInterval(min, max) { 
  speedvalue=  Math.floor(Math.random() * (max - min + 1) + min);
  return speedvalue
}

  class SpeedValues extends Component{
    
    state = { time: 0 }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: randomIntFromInterval(0, 220) }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){
    return (
        <div>
           {this.state.time} 
        </div>
    )
    }
  };

  class OuterArc extends Component{

    componentDidMount() {
        var el = document.getElementsByClassName("progress")
        for(var i=0;i<el.length;i++){
            var bar = el[0].children[0].firstElementChild
            var val = el[0].children[1]
            var perc = parseInt( val.textContent, 10);
            var newdiv = document.createElement("div");
            newdiv.style.animation= ({newdiv:perc}, {
                duration: 1000,
                easing: "swing",
                step: function(newdiv) {
                }
            });
            setInterval(function(){bar.style.transform= "rotate("+ (speedvalue-40) +"deg)";}, 500)
        }
    }
    
    render(){
    return (
        <div></div>
    )
    }
  };

class ReactPieSegment extends React.Component {
    constructor (props) {
      super (props)
    }

    generatePathDef(centre, rIn, rOut, start, delta) {
      console.log('hi')
      const endRad = start + delta
      const startOut = {
        x: centre.x + rOut * Math.cos(start),
        y: centre.y + rOut * Math.sin(start)
      }

      const endOut = {
        x: centre.x + rOut * Math.cos(endRad),
        y: centre.y + rOut * Math.sin(endRad)
      }

      const startIn = {
        x: centre.x + rIn * Math.cos(endRad),
        y: centre.y + rIn * Math.sin(endRad)
      };

      var endIn = {
        x: centre.x + rIn * Math.cos(start),
        y: centre.y + rIn * Math.sin(start)
      }

      const largeArc = delta > Math.PI ? 1 : 0
      
      return (
        `M${startOut.x},${startOut.y}` +
        ` A${rOut},${rOut} 0 ` +
        `${largeArc},1 ${endOut.x},${endOut.y}` +
        ` L${startIn.x},${startIn.y}` +
        ` A${rIn},${rIn} 0 ` +
        `${largeArc},0 ${endIn.x},${endIn.y}` +
        ` L${startOut.x},${startOut.y} Z`
      )
    }

    render () {

      const {
        fillColor, strokeColor,
        start, delta,
        rIn, rOut,
        centre
      } = this.props

      const pathDef = this.generatePathDef(
        centre, rIn, rOut, start, delta)
      const labelDist = rIn + 1.2 * (rOut-rIn)
      const labelRad = start + 0.5 * delta
      const labelPos = {
        x: centre.x + labelDist * Math.cos (labelRad) - 10,
        y: centre.y + labelDist * Math.sin (labelRad)
      }

      const labelStyle = {
        transform: `translate(${labelPos.x}px, ${labelPos.y}px)`
      }

      return (
        <g className='react-pie-segment'>
          <path
            stroke={strokeColor}
            fill={fillColor}
            d={pathDef}
          />
          <text style={labelStyle}>
            {this.props.label}
          </text>
        </g>
      )
    }
  }

  
  class Demo extends React.Component {
    constructor (props) {
      super (props)
    }

    render() {
      return (
        <div className="demo">
          <OuterArc/>
          <div className="progress">
            <div className="barOverflow">
                <div className="bar"></div>
            </div>
            <span></span>
          </div>
          <svg>
          <ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={Math.PI}
            label={"0"}
            rOut={90}
            rIn={50}
          />
          <ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={12*Math.PI/11}
            label={"20"}
            rOut={90}
            rIn={50}
          /> 
          <ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={13*Math.PI/11}
            label={"40"}
            rOut={90}
            rIn={50}
          /> 
          <ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={14*Math.PI/11}
            label={"60"}
            rOut={90}
            rIn={50}
          />
            <ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={15*Math.PI/11}
            label={"80"}
            rOut={90}
            rIn={50}
          />
            <ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={16*Math.PI/11}
            label={"100"}
            rOut={90}
            rIn={50}
          /><ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={17*Math.PI/11}
            label={"120"}
            rOut={90}
            rIn={50}
          /><ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={18*Math.PI/11}
            label={"140"}
            rOut={90}
            rIn={50}
          /><ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={19*Math.PI/11}
            label={"160"}
            rOut={90}
            rIn={50}
          /><ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={20*Math.PI/11}
            label={"180"}
            rOut={90}
            rIn={50}
          /><ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={21*Math.PI/11}
            label={"200"}
            rOut={90}
            rIn={50}
          /><ReactPieSegment
            centre={{x:150, y:150}}
            strokeColor={"black"}
            fillColor={"black"}
            delta={Math.PI/11}
            start={22*Math.PI/11}
            label={"220"}
            rOut={90}
            rIn={50}
          />
          </svg>  
          <span><SpeedValues/></span>
        </div>
      )
    }
  }

export default Demo;