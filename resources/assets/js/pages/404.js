import React, { Component } from 'react';
import AuthNav from '../components/AuthNav'
import GuestNav from '../components/GuestNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
    auth: PropTypes.object.isRequired
};

class NotFound extends Component {
    render() {
        const nav = this.props.authenticated ? <AuthNav /> : <GuestNav />

        return (
            <div className="flex flex-col min-h-screen">
                {nav}

                <div className="flex flex-col flex-1 items-center">
                    <h1 className="py-8">Sorry, that page isn’t here.</h1>
                    <p class="text-grey-dark">
                        You didn’t do anything wrong. We may have moved the page you’re looking for somewhere else.
                    </p>
                </div>
            </div>
        )
    }
}

NotFound.propTypes = propTypes;

const mapStateToProps = ({ auth: { authenticated } }) => ({ authenticated });

export default connect(mapStateToProps)(NotFound);


