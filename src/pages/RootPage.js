import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const mapStateToProps = (state) => ({
    message: state.hello.message
})

class RootPage extends Component {

    constructor(props){
        super(props);
        
    }

    componentWillMount(){
        this.props.sayHi();
    }

    render() {
        return (
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div id="hello-message" style={{display:'flex', marginTop:'20px', marginBottom:'20px', width: '100%', justifyContent:'center', backgroundColor:'red'}}>
                <span style={{fontSize:40}}>{this.props.message}</span>
                
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps, actions)(RootPage)