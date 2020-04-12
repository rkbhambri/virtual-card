import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../../store/actions';
import { Col } from 'reactstrap';
import UserImg from '../../../assets/img/user.svg';
import { Icon } from 'semantic-ui-react';
import UserInfo from './UserInfo/UserInfo';
import UserDetailsForm from './UserDetailsForm/UserDetailsForm';
import './UserDetails.css';

const UserDetails = (props) => {

    const [isUserDetailsEditable, toggleUserDetailsEditable] = useState(false);

    useEffect(() => {
        props.onGetUserProfile();
    }, []);

    const editUserDetails = () => {
        toggleUserDetailsEditable(prevState => !prevState);
    };

    return (
        <Col
            className="user-details mt-3"
            md={12}
            xs={12}>
            <div className="text-right">
                <Icon
                    name="edit outline"
                    onClick={editUserDetails}></Icon>
            </div>
            <div className="pb-4 d-flex">
                <img
                    src={UserImg}
                    alt="Profile Pic"
                    style={{
                        width: '70px', height: '70px'
                    }} />
                <Col className="details" md={10} xs={10}>
                    {
                        isUserDetailsEditable ?
                            <UserDetailsForm
                                userDetails={props.userDetails}
                                updateUserProfile={(profileDetails) => props.onUpdateUserProfile(profileDetails)} />
                            :
                            <UserInfo userDetails={props.userDetails} />
                    }
                </Col>
            </div>
        </Col>
    );
};

const mapStateToProps = state => {
    return {
        userDetails: state.home.userDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUserProfile: () => dispatch(actionCreaters.getUserProfile()),
        onUpdateUserProfile: (profileDetails) => dispatch(actionCreaters.updateUserProfile(profileDetails))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
