import React from 'react'
import { Col } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
const characterImages = require.context('../assets/images/characters');
const weaponImages = require.context('../assets/images/weapons');
export default function WishItem(props) {
  const { isNewItem, itemPercentX } = props
  const {src, name, alias, rating, type} = props.item
  return (
    <Col
    xs="2"
    md="1"
    style={{
      backgroundImage: `url('${type === 'character' ? characterImages('./' + src).default : weaponImages('./' + src).default}')`,
      backgroundPositionX: itemPercentX+'%'
    }}
    className={`wish-item ${type} mx-1 px-0`}>
      {
        isNewItem && <span className="new-badge">新</span>
      }
      <div
      className="h-100 react-stars-container d-flex flex-column align-content-center justify-content-end pb-2">
        <div className="text-center text-wrap pb-1">{alias}</div>
        <ReactStars
          count={rating}
          size={12}
          edit={false}
          color="#ffd700"
          classNames={"justify-content-center"}
        />
      </div>
    </Col>
  )
}
