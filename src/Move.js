import React, { Component } from 'react';
import "./Move.css";

export default class Move extends Component {
    constructor(props) {
        super(props)

        this.state = {
            xofSet: 0,
            yofSet: 0,
            addOn: 10,
        }
    }

    //function to move content
    move = (e) => {

        if (e.target.value === 'up') {
            this.setState({ yofSet: this.state.yofSet - this.state.addOn });
        }
        else if (e.target.value === 'down') {
            this.setState({ yofSet: this.state.yofSet + this.state.addOn });

        }
        else if (e.target.value === 'left') {
            this.setState({ xofSet: this.state.xofSet - this.state.addOn });
        }
        else if (e.target.value === 'right') {
            this.setState({ xofSet: this.state.xofSet + this.state.addOn });
        }
        this.dis(e);
        // console.log('x '+this.state.xofSet,'y '+ this.state.yofSet);
    }
    //function to disable and enable buttons
    dis = (e) => {
        if (e.target.value === 'down') {
            let ele = document.getElementById('1');
            ele.removeAttribute("disabled", 'false');
            if (this.state.yofSet >= this.props.height) {
                let ele = document.getElementById('2');
                ele.setAttribute("disabled", 'true');
            }
        }
        if (e.target.value === 'up') {
            let ele = document.getElementById('2');
            ele.removeAttribute("disabled", 'false');
            if (this.state.yofSet <= 0) {
                let ele = document.getElementById('1');
                ele.setAttribute("disabled", 'true');
            }
        }
        if (e.target.value === 'left') {
            let ele = document.getElementById('4');
            ele.removeAttribute("disabled", 'false');
            if (this.state.xofSet <= 0) {
                let ele = document.getElementById('3');
                ele.setAttribute("disabled", 'true');
            }
        }
        if (e.target.value === 'right') {
            let ele = document.getElementById('3');
            ele.removeAttribute("disabled", 'false');
            if (this.state.xofSet >= this.props.width){
                let ele = document.getElementById('4');
                ele.setAttribute("disabled", 'true');
            }
        }
    }

    render() {
        let { buttons,fly} = this.props;
        // console.log(this.props.width,this.props.height,devicePixelRatio);
        return (
            <div>
                <h2 className="h2" style={{ position: 'absolute', left: `${this.state.xofSet}px`, top: `${this.state.yofSet}px` }}>{fly}</h2>
                <div className='buttons'>
                    {buttons.map((button, i) => (
                        <button key={i} id={button.id} onClick={this.move} value={button.value} disabled={false}>{button.innerText}</button>
                    ))}
                </div>
            </div>
        )
    }

}
