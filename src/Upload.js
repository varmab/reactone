import React from 'react'

class Upload extends React.Component{
    constructor(){
        super();

        this.state={
            file:null
        }
    }

    onChange=(e)=>{
        let file = e.target.files[0];
        this.setState({
            file
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();

        if (!this.state.file) {
            return;
        }
          
        let data = new FormData();
        data.append('photo', this.state.file);

        fetch('/api/upload', {
            method: 'post',
            body: data
        })
        .then(resp => resp.json())
        .then(result=> {
            console.log('File uploaded :' + JSON.stringify(result));
        })
    }

    render(){
        return(
            <div>
                <h1>Upload File</h1>
                <label>
                    Select File:
                </label>
                <input type="file" onChange={this.onChange} ref='file' className="form-control"/>
                <button onClick={this.onSubmit}>Upload</button>            
            </div>
        )
    }
}

export default Upload;