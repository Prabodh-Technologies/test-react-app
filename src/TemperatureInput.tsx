import React, { Component } from 'react';
import './App.css';


const scaleNames: Record<string, string> = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
interface MyProps {
    scale: string,
    scale2: string
    temperature: number,
    temperature2: number,
    onTemperatureChange: Function,
    onTemperatureChange2: Function
}


class TemperatureInput extends Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange(e: any) {
        this.props.onTemperatureChange(e.target.value);
    }
    handleChange2(e: any) {
        this.props.onTemperatureChange2(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const temperature2 = this.props.temperature2;
        const scale = this.props.scale;
        const scale2 = this.props.scale2;
        return (
            <div className="cont">
                <div className="cont1">
                    <h4>Enter the Temperature in {scaleNames[scale]}</h4>
                    <input value={temperature} onChange={this.handleChange} />
                </div>
                <div className="cont1">
                    <h4>Enter the Temperature in {scaleNames[scale2]}</h4>
                    <input value={temperature2} onChange={this.handleChange2} />
                </div>
            </div>


        );
    }
}


export default TemperatureInput;