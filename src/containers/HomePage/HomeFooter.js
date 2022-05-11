import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2021 Hỏi dân IT với Eric. More information. Please visit my youtube chanel.
                    <a target="blank" href="https://www.youtube.com/watch?v=GlehwgU0Ivo">
                        &#8594;Click here&#8592;
                    </a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
