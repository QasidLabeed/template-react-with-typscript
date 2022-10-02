import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../common/Headers/Header';

class dashboard extends Component {
    constructor(props) {
        super(props)

    }

    onChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,

        });
    }


    render() {
        return (
            <>
                <Header />
                <div className="main-content" id="panel">
                </div>

            </>

        )
    }
}
const mapStateToProps = state => ({
    commonStore: state.commonStore,
    errorStore: state.errorStore,
})
export default connect(mapStateToProps, {})(dashboard);
