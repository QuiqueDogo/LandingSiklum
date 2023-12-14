import React, { Component } from 'react'
import QrReader from 'modern-react-qr-reader'


class Test extends Component {
  constructor(props) {
        super(props);

        this.state = {
            result: 'No result', 
            link:''
        }
        this.handleError = this.handleError.bind(this);
        this.handleScan = this.handleScan.bind(this);
      }
      
    handleScan = data => {
      if (data && this.state.result == 'No result') {
        this.state.result = data;
        console.log(this.state.result);
        window.open(data, '_blank');
        this.setState({result: data});
    }
  }
  
  handleError = err => {
    console.error(err)
  }
  
  render() {
    return (
      <div style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center', backgroundColor:'black'}}>
        <QrReader
          delay={300}
          facingMode={"environment"}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%',   }}
        />
        <p style={{color:'white'}}>{this.state.result}</p>
      </div>
    )
  }
}
export default Test