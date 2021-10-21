import React, { Component } from 'react'
import { Container, Row, Col, Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterBanner: this.props.getFormattedCharacterEventWish('kebabCase'),
      language: 'English'
    }
    this.banners = {
      'ballad-in-goblets': 'v1.0 杯装之诗',
      'sparkling-steps': 'v1.0 闪焰的驻足',
      'gentry-of-hermitage': 'v1.1 陵薮市朝',
      'farewell-of-snezhnaya': 'v1.1 暂别冬都',
      'secretum-secretorum': 'v1.2 深秘之息',
      'adrift-in-the-harbor': 'v1.2 浮生孰来',
      'invitation-to-mundane-life': 'v1.3 烟火之邀',
      'dance-of-lanterns': 'v1.3 鱼龙灯昼',
      'moment-of-bloom': 'v1.3 赤团开时',
      'ballad-in-goblets-2': 'v1.4 杯装之诗',
      'farewell-of-snezhnaya-2': 'v1.4 暂别冬都',
      'gentry-of-hermitage-2': 'v1.5 陵薮市朝',
      'born-of-ocean-swell': 'v1.5 浪涌之瞬',
      'sparkling-steps-2': 'v1.6 闪焰的驻足',
      'leaves-in-the-wind': 'v1.6 叶落风随',
      'the-herons-court': 'v2.0 白鹭之庭',
      'tapestry-of-golden-flames': 'v2.0 焰色天河',
      'reign-of-serenity': 'v2.1 影寂天下人',
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }
  submitChanges(e) {
    e.preventDefault()
    const {
      closeSettings,
      updateCharacterEventWish,
    } = this.props
    const { characterBanner } = this.state
    updateCharacterEventWish(characterBanner)
    closeSettings()
  }
  renderBannerOptions() {
    const bannerArray = []
    for(const banner in this.banners) {
      bannerArray.push((
        <option
          key={banner}
          value={banner}
        >
          {this.banners[banner]}
        </option>
      ))
    }
    return bannerArray
  }

  render() {
    const {
      reset,
      updateCharacterEventWish,
      closeSettings
    } = this.props
    return (
      <div
        onClick={closeSettings}
        className="modal-container">
        <div
          onClick={e => e.stopPropagation()}
          className="settings-modal">
          <div className="settings-modal-content p-2">
            <div
              onClick={closeSettings}
              className="close-button"></div>
            <h2>设置</h2>
            <Form
            onSubmit={this.submitChanges.bind(this)}
            >
              <Container>
                <Row>
                  <Col xs="12">
                    <FormGroup className="text-left">
                      <Label for="characterBanner" className="pb-1 pl-1 h5">角色活动祈愿池选择：</Label>
                      <Input
                        type="select"
                        name="characterBanner"
                        id="characterBanner"
                        defaultValue={this.state.characterBanner}
                        onChange={this.onChange}
                      >
                        {
                          this.renderBannerOptions()
                        }
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12">
                    <div className="button-container justify-content-around my-2">
                      <button
                      onClick={() => {
                          reset()
                          closeSettings()
                      }}
                      type="button">重置祈愿记录（慎选！）</button>
                      <button>确认选择</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
