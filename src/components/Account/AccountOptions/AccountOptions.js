
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Col, Row } from 'reactstrap';
import { Icon } from 'semantic-ui-react';
import { accountOptions } from '../../../helpers/AccountOptions';
import AddSchool from '../AddSchool/AddSchool';
import './AccountOptions.css';

const AccountOptions = (props) => {
    const [isAddSchoolModalOpen, setAddSchoolModalOpen] = useState(false);

    const toggleAddSchoolModal = () => {
        setAddSchoolModalOpen(prevState => !prevState);
    };

    return (
        <div className="account-options-list mb-5 pb-5 mt-2">
            <AddSchool
                isAddSchoolModalOpen={isAddSchoolModalOpen}
                toggleAddSchoolModal={() => toggleAddSchoolModal()} />
            <Col
                className="account-options mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                onClick={() => toggleAddSchoolModal()}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}>
                <h3 className="text-center">Travel Card</h3>
                <Row>
                    <Col>Received on :</Col>
                    <Col className="text-center">Sender</Col>
                </Row>
                <Row className="mt-2">
                    <Col>12th april 2020</Col>
                    <Col className="text-right">12th april 2020</Col>
                </Row>
            </Col>
            <Col
                className="account-options mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}
                onClick={() => toggleAddSchoolModal()}>
                <h3 className="text-center">Travel Card</h3>
                <Row>
                    <Col>Received on :</Col>
                    <Col className="text-center">Sender</Col>
                </Row>
                <Row className="mt-2">
                    <Col>12th april 2020</Col>
                    <Col className="text-right">12th april 2020</Col>
                </Row>
            </Col>
            <Col
                className="account-options mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}
                onClick={() => toggleAddSchoolModal()}>
                <h3 className="text-center">Travel Card</h3>
                <Row>
                    <Col>Received on :</Col>
                    <Col className="text-center">Sender</Col>
                </Row>
                <Row className="mt-2">
                    <Col>12th april 2020</Col>
                    <Col className="text-right">12th april 2020</Col>
                </Row>
            </Col>
            <Col
                className="account-options mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}
                onClick={() => toggleAddSchoolModal()}>
                <h3 className="text-center">Travel Card</h3>
                <Row>
                    <Col>Received on :</Col>
                    <Col className="text-center">Sender</Col>
                </Row>
                <Row className="mt-2">
                    <Col>12th april 2020</Col>
                    <Col className="text-right">12th april 2020</Col>
                </Row>
            </Col>
            <Col
                className="account-options mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}
                onClick={() => toggleAddSchoolModal()}>
                <h3 className="text-center">Travel Card</h3>
                <Row>
                    <Col>Received on :</Col>
                    <Col className="text-center">Sender</Col>
                </Row>
                <Row className="mt-2">
                    <Col>12th april 2020</Col>
                    <Col className="text-right">12th april 2020</Col>
                </Row>
            </Col>
            <Col
                className="account-options mt-2 pb-4 pl-2 pr-2 pt-2 border"
                md={12}
                sm={12}
                style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}
                onClick={() => toggleAddSchoolModal()}>
                <h3 className="text-center">Travel Card</h3>
                <Row>
                    <Col>Received on :</Col>
                    <Col className="text-center">Sender</Col>
                </Row>
                <Row className="mt-2">
                    <Col>12th april 2020</Col>
                    <Col className="text-right">12th april 2020</Col>
                </Row>
            </Col>
        </div>

    );
};

export default AccountOptions;
