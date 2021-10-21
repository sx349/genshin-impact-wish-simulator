import React from 'react'
import { Row, Col } from 'reactstrap';

export default function Table(props) {
  const { items } = props
  const itemComponents = []
  for(let i = 0; i < items.length; i+=2) {
    const item1 = items[i]
    const item2 = items[i + 1]
    if(item2) {
	  if((item1.type=='weapon')&&(item2.type=='weapon')){
	    itemComponents.push((
          <tr key={item1.name}>
            <td>武器</td>
            <td>{item1.alias}</td>
            <td>武器</td>
            <td>{item2.alias}</td>
          </tr>
        ))
	  } else if((item1.type=='character')&&(item2.type=='character')){
	    itemComponents.push((
          <tr key={item1.name}>
            <td>角色</td>
            <td>{item1.alias}</td>
            <td>角色</td>
            <td>{item2.alias}</td>
          </tr>
        ))
	  } else {
	    itemComponents.push((
          <tr key={item1.name}>
            <td>角色</td>
            <td>{item1.alias}</td>
            <td>武器</td>
            <td>{item2.alias}</td>
          </tr>
        ))
      }
    } else if(item1.type=='weapon'){
      itemComponents.push((
        <tr key={item1.name}>
          <td>武器</td>
          <td>{item1.alias}</td>
        </tr>
      ))
    } else {
      itemComponents.push((
        <tr key={item1.name}>
          <td>角色</td>
          <td>{item1.alias}</td>
        </tr>
      ))		
    }
  }
  return (
    <Row className="mt-4">
      <Col xs="12">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>类型</th>
                <th>名称</th>
                <th>类型</th>
                <th>名称</th>
              </tr>
            </thead>
            <tbody>
              {itemComponents}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  )
}
