import React, { Component } from 'react';
import './App.css';
import TemperatureInput from './TemperatureInput';


function toCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

function convert(temp: number, conv: any) {
  //const input = parseFloat(temp);
  const input = temp;
  if (Number.isNaN(input)) {
    return '';
  }
  const output = conv(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

interface MyState {
  temperature: number,
  scale: string
  //2nd comp
  temp2 : number,
  scale2 : string
}
interface MyProps {

}
class App extends Component<MyProps, MyState>{
  constructor(props: MyProps) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelsiusChange2 = this.handleCelsiusChange2.bind(this);
    this.handleFahrenheitChange2 = this.handleFahrenheitChange2.bind(this)
    this.state = {temperature : 0, scale : 'c',temp2 :0,scale2 : 'c' }
  }
  handleCelsiusChange(temperature: number) {
    this.setState({ scale: 'c', temperature });
  }
  handleFahrenheitChange(temperature: number) {
    this.setState({ scale: 'f', temperature });
  }
  //2nd comp
  handleCelsiusChange2 (temp2:number) {
    this.setState({scale2 : 'c', temp2});
  }
  handleFahrenheitChange2 (temp2:number) {
    this.setState({scale2 : 'f', temp2});
  }
  render() {
    const scale: any = this.state.scale;
    const temperature: any = this.state.temperature;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    //2nd comp
    const scale2:any = this.state.scale2;
    const temp2:any = this.state.temp2;
    const celsius2 = scale2 === 'f' ? convert(temp2,toCelsius) : temp2;
    const fahrenheit2 = scale2 === 'c' ? convert(temp2,toFahrenheit) : temp2;


    return (

      <div >
       <TemperatureInput
       scale='c'
       scale2='f'
       temperature={celsius}
       temperature2={fahrenheit}
       onTemperatureChange={this.handleCelsiusChange}
       onTemperatureChange2={this.handleFahrenheitChange} />
 
      
      <TemperatureInput 
      scale='c'
      scale2='f'
      temperature={celsius2}
      temperature2={fahrenheit2}
      onTemperatureChange={this.handleCelsiusChange2} 
      onTemperatureChange2={this.handleFahrenheitChange2} />
      </div>

    );

  }
}

export default App;

