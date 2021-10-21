import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import DetailsBox from './details-components/details-box';
import StarsBar from './details-components/stars-bar';
import SubheadingSeparator from './details-components/subheading-separator';
import EventDurationHeading from './details-components/event-duration-heading'
import AdriftInTheHarbor from '../models/adrift-in-the-harbor'
import Table from './details-components/table'
import Title from './details-components/title'


export default function AdriftInTheHarborDetails() {
  const adrift = new AdriftInTheHarbor()
  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>| 活动祈愿「<span className="blue">浮生</span>孰来」</h1>
        </Title>
        <SubheadingSeparator
          content="祈愿获取概率大幅提升！"
        />
        <StarsBar
          starCount={5}
          content="当祈愿获取到5星角色时，有50.000%的概率为"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={'ganyu'}
			alias={'甘雨'}
            isWeapon={false}
            element={'cryo'}
          />
        </Row>
        <StarsBar
          starCount={4}
          content="当祈愿获取到4星物品时，有50.000%的概率为"
          bgColor="#b6abbf"
        />
        <Row>
          <DetailsBox
            title={'noelle'}
			alias={'诺艾尔'}
            isWeapon={false}
            element={'geo'}
          />
          <DetailsBox
            title={'xingqiu'}
			alias={'行秋'}
            isWeapon={false}
            element={'water'}
          />
          <DetailsBox
            title={'xiangling'}
			alias={'香菱'}
            isWeapon={false}
            element={'pyro'}
          />
        </Row>
        <SubheadingSeparator
          content="祈愿详情"
        />
        <EventDurationHeading
          content="限时活动"
        />
        <Row>
          <Col xs="12">
            <p className="my-3">
              「<span className="blue">浮生</span>孰来」活动祈愿已开启。活动期间内，<span className="orange">限定</span>5星角色<span className="aqua">「循循守月· 甘雨(冰)」</span>以及4星角色<span className="brass">「未授勋之花·诺艾尔(岩)」</span>、<span className="aqua">「少年春衫薄·行秋(水)」</span>、<span className="orange">「万民百味·香菱(火)」</span>的祈愿获取概率将<span className="orange">大幅提升</span>！
              <br/>
              <span className="orange">※以上角色中，限定角色不会进入「奔行世间」常驻祈愿。</span>  
            </p>
            <p className="my-3">
              〓祈愿规则〓
            </p>
            <p className="my-3">
              【5星物品】
            </p>
            <p className="my-3">
              在本期「<span className="blue">浮生</span>孰来」活动祈愿中，5星角色祈愿的基础概率为<span className="orange">0.600%</span>，综合概率（含保底）为<span className="orange">1.600%</span>，最多<span className="orange">90</span>次祈愿内必定能通过保底获取5星角色。
              当祈愿获取到5星角色时，有<span className="orange">50.000%</span>的概率为本期UP角色<span className="aqua">「循循守月· 甘雨(冰)」</span>。如果本次祈愿获取的5星角色非本期UP角色，下次祈愿获取的5星角色<span className="orange">必定</span>为本期5星UP角色。
            </p>
            <p className="my-3">
              【4星物品】
            </p>
            <p className="my-3">
              在本期「<span className="blue">浮生</span>孰来」活动祈愿中，4星物品祈愿的基础概率为<span className="orange">5.100%</span>，4星角色祈愿的基础概率为<span className="orange">2.550%</span>，4星武器祈愿的基础概率为<span className="orange">2.550%</span>，4星物品祈愿的综合概率（含保底）为<span className="orange">13.000%</span>。最多<span className="orange">10</span>次祈愿必定能通过保底获取4星或以上物品，通过保底获取4星物品的概率为<span className="orange">99.400%</span>，获取5星物品的概率为<span className="orange">0.600%</span>。<br />
              当祈愿获取到4星物品时，有<span className="orange">50.000%</span>的概率为本期4星UP角色<span className="brass">「未授勋之花·诺艾尔(岩)」</span>、<span className="aqua">「少年春衫薄·行秋(水)」</span>、<span className="orange">「万民百味·香菱(火)」</span>中的一个。如果本次祈愿获取的4星物品非本期4星UP角色，下次祈愿获取的4星物品<span className="orange">必定</span>为本期4星UP角色。
            </p>
            <p className="my-3">
              获得4星武器时，会同时获得2个<span className="orange">无主的星辉</span>作为副产物；获得3星武器时，会同时获得15个<span className="purple">无主的星尘</span>作为副产物。
            </p>
            <p className="my-3">
              〓若获得重复角色〓
            </p>
            <p className="my-3">
             无论通过何种方式（包含但不限于祈愿、商城兑换、系统赠送等）第2~7次获得相同5星角色时，每次将转化为1个<span className="purple">对应角色的命星</span>和10个<span className="orange">无主的星辉</span>；第8次及之后获得，将仅转化为25个<span className="orange">无主的星辉</span>。
            </p>
            <p className="my-3">
              无论通过何种方式（包含但不限于祈愿、商城兑换、系统赠送等）第2~7次获得相同4星角色时，每次将转化为1个<span className="purple">对应角色的命星</span>和2个<span className="orange">无主的星辉</span>；第8次及之后获得，将仅转化为5个<span className="orange">无主的星辉</span>。
            </p>
            <p className="my-3">         ※本祈愿属于角色活动祈愿，其祈愿次数保底会一直累计在角色活动祈愿中，与其他祈愿的祈愿次数保底相互独立计算，互不影响。
            </p>
            <h4 className="my-3 brass">
              〓祈愿物品清单〓
            </h4>
          </Col>
        </Row>
        <StarsBar
          starCount={5}
          content="5星物品基础概率：0.600%(含保底综合出率：1.600%)"
          bgColor="#dcbba5"
        />
        <Table
          items={adrift.getDrops(5)}
        />
        <StarsBar
          starCount={4}
          content="4星物品基础概率：5.100%(含保底综合出率：13.000%)"
          bgColor="#b6abbf"
        />
        <Table
          items={adrift.getDrops(4)}
        />
        <StarsBar
          starCount={3}
          content="3星物品基础概率：94.300%(含保底综合出率：85.400%)"
          bgColor="#a5bacc"
        />
        <Table
          items={adrift.getDrops(3)}
        />
      </Container>
    </div>
  )
}
