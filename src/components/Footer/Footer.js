import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'antd'

const FooterListItem = props => (
  <div className="footer-li">
    {props.to ? (
      <Row>
        <Link to={props.to}>{props.children}</Link>
      </Row>
    ) : (
      props.children
    )}
  </div>
)

class Footer extends Component {
  render() {
    return (
      <div className="footer-universal">
        <Row gutter={[24, 8]} justify="space-around" style={{margin: 0}}>
          <Col xs={0} sm={0} md={0} lg={6} xl={6} className="gutter-row">
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16} className="gutter-row">
            <Col xs={24} sm={24} md={4} lg={4} xl={4} className="gutter-row">
              <span className="footer-links-header" justify="space-around">Why PostHog</span>
              <FooterListItem to="/faq">Features</FooterListItem>
            </Col>
            <Col xs={24} sm={24} md={4} lg={4} xl={4} className="gutter-row">
              <span className="footer-links-header">Resources</span>
              <FooterListItem to="/docs">Docs</FooterListItem>
              <FooterListItem to="/blog">Blog</FooterListItem>
            </Col>
            <Col xs={24} sm={24} md={4} lg={4} xl={4} className="gutter-row">
              <span className="footer-links-header">Community</span>
              <FooterListItem>
                <a href="https://github.com/darcys22/godbledger/graphs/contributors">
                  Contributors
                </a>
              </FooterListItem>
              <FooterListItem>
                <a href="https://github.com/darcys22/godbledger">Source code</a>
              </FooterListItem>
              <FooterListItem>
                <a href="https://github.com/PostHog/posthog/blob/master/CONTRIBUTING.md">
                  Contribute
                </a>
              </FooterListItem>
              <FooterListItem>
                <a href="https://github.com/darcys22/godbledger/issues">Issues</a>
              </FooterListItem>
            </Col>
            <Col xs={24} sm={24} md={4} lg={4} xl={4} className="gutter-row">
              <span className="footer-links-header">Support</span>
              <FooterListItem to="/support">Support</FooterListItem>
            </Col>
            <Col xs={24} sm={24} md={4} lg={4} xl={4} className="gutter-row">
              <span className="footer-links-header">Company</span>
              <FooterListItem to="/faq">About</FooterListItem>
            </Col>
          </Col>
          <Col xs={0} sm={0} md={0} lg={4} xl={4} className="gutter-row">
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer
