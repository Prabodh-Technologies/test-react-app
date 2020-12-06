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
}
interface MyProps {

}
class App extends Component<MyProps, MyState>{
  constructor(props: MyProps) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: 0, scale: 'c' }
  }
  handleCelsiusChange(temperature: number) {
    this.setState({ scale: 'c', temperature });
  }
  handleFahrenheitChange(temperature: number) {
    this.setState({ scale: 'f', temperature });
  }
  render() {
    const scale: any = this.state.scale;
    const temperature: any = this.state.temperature;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;



    return (

      <div >
        <TemperatureInput
          scale='c'
          scale2='f'
          temperature={celsius}
          temperature2={fahrenheit}
          onTemperatureChange={this.handleCelsiusChange}
          onTemperatureChange2={this.handleFahrenheitChange} />
      </div>


    );

  }
}

export default App;

