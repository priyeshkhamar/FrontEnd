import React from 'react';
import styles from '../Components/style1.module.css';
import { Col } from 'react-bootstrap';

const ListView = (props) => {
  const datalist = props.myArray.map((i, index) => {
    return <li className={styles.listItems} key={index}>{i}</li>
  })

  return (
    <>

      <ul className={styles.list}>
        <h2 className={styles.listHead}>The "React Way" to Render a List</h2>
        {datalist}
      </ul>
    </>
  )
}

export default ListView