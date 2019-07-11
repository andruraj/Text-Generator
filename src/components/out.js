import React, { Component } from 'react'

export default class Out extends Component {

    state = {
        para: 1,
        html: false
    }

    paraNo = (e) => {
        this.setState({ para :e.target.value});
        this.props.getText(e.target.value, this.state.html);
    }

    html = (e) => {
        this.setState({html: e.target.checked});
        this.props.getText(this.state.para, e.target.checked);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Sample Text Generator</h1>
                    <div className="form-group">
                        <label htmlFor="para">Paragraph : </label>
                        <input type="number" name="para" min="1" max="10" onChange={this.paraNo} required/>
                        <input type="checkbox" name="format" onChange={this.html} />
                        <label htmlFor="html"> HTML </label>
                        
                        <textarea name="text" cols="150" rows="25" value={this.props.setText}></textarea>
                        <br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}
