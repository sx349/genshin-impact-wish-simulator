import React, { Component } from 'react';
import BannerButton from './banner-button';
import { Carousel } from 'react-responsive-carousel';
import Modal from './modal';
import Settings from './settings'

const banners = require.context('../assets/images/banners', true);
export default class Banners extends Component {
  constructor(props) {
    super(props)
    const selectedCharacterEventWish = this.props.getFormattedCharacterEventWish('kebabCase')
    this.state = {
      selectedBanner: 'beginners-wish',
      selectedCharacterEventWish,
      banners: {
        'beginners-wish': '新手祈愿',
        [selectedCharacterEventWish]: '角色活动祈愿',
        'epitome-invocation': '武器活动祈愿',
        'wanderlust-invocation': '常驻祈愿'
      },
      wishes: {
        'beginners-wish': 'beginnersWish',
        [selectedCharacterEventWish]: this.props.getFormattedCharacterEventWish('camelCase', selectedCharacterEventWish),
        'epitome-invocation': 'epitomeInvocation',
        'wanderlust-invocation': 'wanderlustInvocation'
      },
      wasBeginnersWishDisabled: false,
      isSettingsPageVisible: false
    }

  }
  componentDidMount() {
    this.toggleBeginnersWish(this.props.isBeginnersWishLimited)
    this.setState({ selectedBanner: this.props.selectedBanner })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isBeginnersWishLimited !== this.props.isBeginnersWishLimited) {
      this.toggleBeginnersWish(this.props.isBeginnersWishLimited)
    }
    const newSelectedCharacterEventWish = this.props.getFormattedCharacterEventWish('kebabCase')
    // If the user selected a new banner
    const { selectedCharacterEventWish, selectedBanner } = this.state
    const { isBeginnersWishLimited } = this.props
    if(newSelectedCharacterEventWish !== selectedCharacterEventWish) {
      const { banners: oldBanners, wishes: oldWishes } = this.state
      const banners = {}
      const wishes = {}
      for(const b in oldBanners) {
        if(selectedCharacterEventWish === b) {
          banners[newSelectedCharacterEventWish] = '角色活动祈愿'
        } else {
          banners[b] = oldBanners[b]
        }
      }
      for(const w in oldWishes) {
        if(selectedCharacterEventWish === w) {
          wishes[newSelectedCharacterEventWish] = this.props.getFormattedCharacterEventWish('camelCase', newSelectedCharacterEventWish)
        } else {
          wishes[w] = oldWishes[w]
        }
      }
      let newSelectedBanner = null
      if(selectedBanner === selectedCharacterEventWish) {
        newSelectedBanner = newSelectedCharacterEventWish
      } else {
        newSelectedBanner = selectedBanner
      }
      if (isBeginnersWishLimited) {
        delete banners['beginners-wish']
        delete wishes['beginners-wish']
      }
      this.setState({
        selectedCharacterEventWish: newSelectedCharacterEventWish,
        banners,
        wishes,
        selectedBanner: newSelectedBanner
      })
    }
  }
  onCarouselChange(index) {
    this.switchBanner(Object.keys(this.state.banners)[index])
  }
  switchBanner(selectedBanner) {
    this.setState({ selectedBanner }, () => this.props.setCurrentDetails(selectedBanner))
  }
  get bannerText() {
    return this.state.banners[this.state.selectedBanner]
  }
  toggleSettingsModal(isSettingsPageVisible) {
    this.setState({
      isSettingsPageVisible
    })
  }
  toggleBeginnersWish(isLimited) {
    if (isLimited) {
      this.setState({
        selectedBanner: this.props.getFormattedCharacterEventWish('kebabCase'),
        banners: {
          [this.props.getFormattedCharacterEventWish('kebabCase')]: '角色活动祈愿',
          'epitome-invocation': '武器活动祈愿',
          'wanderlust-invocation': '常驻祈愿'
        },
        wishes: {
          [this.props.getFormattedCharacterEventWish('kebabCase')]: this.props.getFormattedCharacterEventWish('camelCase'),
          'epitome-invocation': 'epitomeInvocation',
          'wanderlust-invocation': 'wanderlustInvocation'
        },
        wasBeginnersWishDisabled: isLimited
      })
    } else {
      this.setState({
        banners: {
          'beginners-wish': '新手祈愿',
          [this.props.getFormattedCharacterEventWish('kebabCase')]: '角色活动祈愿',
          'epitome-invocation': '武器活动祈愿',
          'wanderlust-invocation': '常驻祈愿'
        },
        wishes: {
          'beginners-wish': 'beginnersWish',
          [this.props.getFormattedCharacterEventWish('kebabCase')]: this.props.getFormattedCharacterEventWish('camelCase'),
          'epitome-invocation': 'epitomeInvocation',
          'wanderlust-invocation': 'wanderlustInvocation'
        },
        wasBeginnersWishDisabled: isLimited
      })
    }
  }
  render() {
    const {
      selectedBanner,
      isSettingsPageVisible
     } = this.state
    const {
      wasDisclaimerSeen,
      setView,
      setSelectedWish,
      hideModal,
      reset,
      wish,
      isBeginnersWishOver10,
      getFormattedCharacterEventWish,
      updateCharacterEventWish,
      saveData,
      userWishes
    } = this.props
    const bannerKeys = Object.keys(this.state.banners);
    const selectedBannerIndex = bannerKeys.findIndex(b => b === selectedBanner)
    return (
      <>
        {
          wasDisclaimerSeen
            ? null
            : <Modal hideModal={hideModal} />
        }
        {
          isSettingsPageVisible &&
          <Settings
            closeSettings={() => this.toggleSettingsModal(false)}
            reset={() => reset(selectedBanner)}
            updateCharacterEventWish={updateCharacterEventWish}
            getFormattedCharacterEventWish={getFormattedCharacterEventWish}
          />
        }
        <div className="wrapper banners">
          <div className="giws-banners-container">
            <div className="heading">
              <div className="current-banner">
                <div>{this.bannerText}</div>
              </div>
              <div className="select-banner">
                {
                  bannerKeys.map(banner => (
                    <BannerButton
                      key={banner}
                      isSelected={banner === selectedBanner}
                      className={banner}
                      onClick={() => this.switchBanner(banner)}
                    />
                  ))
                }
              </div>
              <div className="close-window"></div>
            </div>
            <div className="carousel-container">
              <Carousel
                className={"carousel"}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                emulateTouch={false}
                showArrows={false}
                infiniteLoop={true}
                selectedItem={selectedBannerIndex}
                onChange={this.onCarouselChange.bind(this)}
              >
                {
                  bannerKeys.map(banner => {
                    return (
                      <div key={banner} className={`banner-slide ${banner}`}>
                        <div
                        title={`你已在该祈愿池祈愿${userWishes[banner]}次`}
                        className="wish-counter">{userWishes[banner]}</div>
                        <img src={banners(`./${banner}.png`).default} />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
            <div className="action-container">
              <div className="button-container">
                <button
                  onClick={() => this.toggleSettingsModal(true)}
                >设置</button>
                <button
                  onClick={() => setView('details')}
                >详情</button>
                <button
                  onClick={() => setView('inventory')}
                >祈愿记录</button>
              </div>
              <div className="wish-container d-flex justify-content-center">
                <div
                  onClick={() => {
                    wish(this.state.wishes[selectedBanner], true)
                  }}
                  className="wish-button"
                >祈愿1次</div>
                <div
                  className={`wish-button ${selectedBanner === 'beginners-wish' && isBeginnersWishOver10 && 'disabled'}`}
                  onClick={() => {
                    if(isBeginnersWishOver10 && selectedBanner === 'beginners-wish') return;
                    wish(this.state.wishes[selectedBanner])
                  }}
                >
                  祈愿10次
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
