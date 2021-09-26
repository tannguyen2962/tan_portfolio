import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';
import axios from 'axios';
import { Button, Card, Popover, Row, Col, message } from 'antd';

import styles from './services.less';

const Services = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://614337aec8700e00178d01bb.mockapi.io/services').then((response) => {
      setItems(response.data);
    });
  }, []);

  // @TODO: get services data from mockAPI and set to state

  const updatePrice = (selectedItem, price) => {
    const updatedItems = items.map((item) => {
      const cloneItem = item;

      if (item.id === selectedItem.id) {
        cloneItem.price = price;

        axios
          .put(`https://614337aec8700e00178d01bb.mockapi.io/services/${selectedItem.id}`, cloneItem)
          .then(() => {
            message.success('success');
          })
          .catch((error) => {
            message.error(error);
          });

        // @TODO: call axios.put to update service in mockAPI
      }

      return cloneItem;
    });

    setItems(updatedItems);
  };

  const selectedCardIndex = 1;
  const isLoginSuccess = localStorage.getItem('targetUser');

  return (
    <div className={styles.services} id="service">
      <div className={styles.title}>
        <div className={styles.textTitle}>
          <h2> My</h2> <h1> Service</h1>
        </div>
        <h3> What i offer</h3>
      </div>
      <Row>
        {items.map((item, index) => {
          return (
            <Col key={item.title} xs={24} md={24} lg={24} xl={8}>
              <div className={styles.padding}>
                <Card
                  className={cx(styles.card, {
                    [styles.active]: index === selectedCardIndex,
                  })}
                  title={
                    <>
                      <SVG src={`/src/assets/svgs/${item.icon}`} />
                      {item.title}
                    </>
                  }
                  extra={
                    isLoginSuccess && (
                      <Popover
                        content={
                          <div>
                            <input
                              onBlur={(e) => {
                                updatePrice(item, e.target.value);
                              }}
                              type="number"
                              placeholder="/1 hours"
                            />
                            <p>Content</p>
                          </div>
                        }
                        title="Front-End Developer"
                        trigger="click"
                      >
                        <Button>Edit </Button>
                      </Popover>
                    )
                  }
                  style={{ width: 500 }}
                >
                  <div className={styles.contentPricing}>
                    <h2>{item.price} / 1 hour </h2>

                    <span> I am available for full time</span>
                    <span> {item.description1} </span>
                    <span>{item.description2}</span>
                    <span>{item.description3}</span>
                    <Button type="@color-primary" shape="round">
                      <p> Buy</p>
                    </Button>
                  </div>
                </Card>{' '}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Services;
