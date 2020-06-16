import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import './index.css'
import { Link } from 'gatsby'
import trends from '../images/product-screenshots/product-trends.png'
import dashboards from '../images/product-screenshots/dashboards.png'
import communityGithub from '../images/community-github.png'
import communitySlack from '../images/community-slack.png'
import { Row, Col } from 'antd'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout className="index-page">
      <SEO
        title="GoDBLedger - open source financial system"
        description="Accounting System With Features That Programmers Expect"
      />
      <Row gutter={[24, 8]}>
        <Col span={24} className="gutter-row">
          <h2 className="large-header">
            The Open Source Accounting System With Features That Programmers Expect
          </h2>
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col span={16} className="gutter-row">
          <p>Join the open financial movement</p>
        </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col xs={7} sm={6} md={5} lg={4} xl={4} className="gutter-row">
          <a href="https://github.com/darcys22/godbledger/releases/tag/v0.2.1">
            <Button
              type="primary"
              size="large"
              icon="right-circle"
              style={{ marginRight: 10 }}
            >
              Try it yourself
            </Button>
          </a>
        </Col>
        <Col xs={7} sm={6} md={5} lg={4} xl={4} className="gutter-row">
          <a href="https://github.com/darcys22/godbledger/wiki/Quickstart">
            <Button type="secondary" size="large">
              Install Guide
            </Button>
          </a>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>Open source Financial System</h2>
        </Col>
      </Row>
      <Row gutter={[48, 24]}>
        <Col span={12} className="gutter-row">
          <h3>About</h3>
          <p>GoDBLedger is a central server for all your financial transactions. It acts as an endpoint for apps to transmit their financial transactions which it records in a database of your choice that you control. Out of the box it supports SQLite and MySQL.</p>
        </Col>
        <Col span={12} className="gutter-row">
          <p>
            <img alt="trends" src={trends} className="shadow" />
          </p>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>Self-hosted available, with full underlying data access.</h2>
        </Col>
      </Row>
      <Row gutter={[48, 24]}>
        <Col span={12} className="gutter-row">
          <p>
            <img alt="trends" src={dashboards} className="shadow" />
          </p>
        </Col>
        <Col span={12} className="gutter-row">
          <h3>GRPC Endpoints</h3>
          <p>GoDBLedger includes blah blahqq blah blah blah blablah blablah blablah blablah blablah blahhhhhh</p>
        </Col>
      </Row>
      <Row gutter={[48, 24]}>
        <Col span={12} className="gutter-row">
          <h3>Database Backends - SQL</h3>
          <p>GoDBLedger includes blah blahqq blah blah blah blablah blablah blablah blablah blablah blahhhhhh</p>
        </Col>
        <Col span={12} className="gutter-row">
          <p>
            <img alt="trends" src={dashboards} className="shadow" />
          </p>
        </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col span={24} className="header-row" align="middle">
          <h2>GoDBLedger for Enterprise</h2>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <h3>Self-managed</h3>
          <p>
            GoDBLedger can be deployed in your cloud, for painless adoption and
            onboarding.
          </p>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <h3>Unlimited volume</h3>
          <p>
            GoDBLedger is built to scale. That includes our open core pricing
            model.
          </p>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <h3>Support</h3>
          <p>
            We can manage your deployment on your infrastructure. All the
            benefits of self-hosting with the reliability and scalability of the
            cloud.
          </p>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="header-row" align="middle">
          <h2>Join the community</h2>
        </Col>
      </Row>
      <Row span={21} gutter={[24, 24]}>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
        <a href="https://github.com/darcys22/godbledger">
          <Col xs={8} sm={8} md={6} lg={6} xl={6} align="middle">
            <img alt="GitHub" src={communityGithub} className="hover-shadow" />
          </Col>
        </a>
        <a href="https://discord.gg/xHFufYC">
          <Col xs={8} sm={8} md={6} lg={6} xl={6} align="middle">
            <img alt="Discord" src={communitySlack} className="hover-shadow" />
          </Col>
        </a>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}></Col>
      </Row>
      <Row gutter={[24, 96]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>Releases</h2>
          <p>Version 0.2.1</p>
          <Link to="https://github.com/darcys22/godbledger/releases/tag/v0.2.1">
            <Button type="information" size="large">
              Release notes
            </Button>
          </Link>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
