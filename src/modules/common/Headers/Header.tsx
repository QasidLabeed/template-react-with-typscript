import React from "react";

import $ from "jquery";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
//Actions

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      YNTBalance: 0,
      orgName: 0,
      charityWalletAmount: 2
    };

  }




  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">

              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Orders
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">10</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">

                        </span>{" "}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-danger mr-2">

                          </span>{" "}
                        </p>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Quotes
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            2
                          </span>

                        </div>

                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>

                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Pending Quotes
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">2</span>


                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-qrcode" />
                          </div>

                        </Col>

                      </Row>

                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          {/* <i className="fas fa-arrow-down" /> */}
                          {/* 1.10% */}
                        </span>{" "}
                        {/* <span className="text-nowrap">Since yesterday</span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Pending Orders
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            1
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">

                        </span>{" "}


                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>

          </Container>
          {/* <NotificationContainer /> */}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {

})(Header);
