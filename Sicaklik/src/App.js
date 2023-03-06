import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Button,Row,Col} from "reactstrap";
import Kel from "./Kel";
import Cel from "./Cel";
import Fah from "./Fah";

class App extends Component {
  

    state = {
      derece: 0,
      fahrenheit: 32,
      kelvin: 273.15
      
    };
  

  arttir = () => {
    this.setState({
      derece: this.state.derece + 1 ,
      fahrenheit: ((this.state.derece+1) * 1.8) + 32 ,
      kelvin:(this.state.derece+1) + 273.15
    });
  }

  render() {
      let cel1=this.state.derece;
      let fah1=this.state.fahrenheit;
      let kel1=this.state.kelvin;
    return (
      
      <div>
        <Container>
        <h1>Hava Nasil</h1>
        <h2>Su an sicaklik: {this.state.derece} derece</h2>
        <Button color="success" onClick={this.arttir}>Sicaklik Arttir</Button>
        <br></br>
        <h4>3 Birimde Sicaklik Olcumu</h4>
        <Row>
          <Col><Cel cel1={cel1}/></Col>
          <Col><Fah fah1={fah1}/></Col>
          <Col><Kel kel1={kel1} /></Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
