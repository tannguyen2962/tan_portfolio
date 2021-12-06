import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';
import axios from 'axios';
import { mockApiUrl } from 'common/constants';
import { Button, Card, Popover, Row, Col, message } from 'antd';

import styles from './services.less';

const Services = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${mockApiUrl}/services`).then((response) => {
      setItems(response.data);
    });
  }, []);

  // @TODO: get services data from mockAPI and set to state

  const updateCard = (updatedItem) => {
    const updatedItems = items.map((item) => {
      if (item.id !== updatedItem.id) {
        return item;
      }

      axios
        .put(`${mockApiUrl}/services/${updatedItem.id}`, updatedItem)
        .then(() => {
          message.success('success');
        })
        .catch((error) => {
          message.error(error);
        });

      return updatedItem;
    });

    setItems(updatedItems);
  };

  const selectedCardIndex = 1;
  const isLoginSuccess = localStorage.getItem('targetUser');

  /**
   * Render
   */

  const renderEditableServicePopover = (item) => {
    if (!isLoginSuccess) {
      return null;
    }

    const handlePriceBlur = (e) => {
      updateCard({
        ...item,
        price: e.target.value,
      });
    };

    const handleDescriptionOneBlur = (e) => {
      updateCard({
        ...item,
        descriptionOne: e.target.value,
      });
    };

    const handleDescriptionTwoBlur = (e) => {
      updateCard({
        ...item,
        descriptionTwo: e.target.value,
      });
    };

    const handleDescriptionThreeBlur = (e) => {
      updateCard({
        ...item,
        descriptionThree: e.target.value,
      });
    };

    return (
      <Popover
        content={
          <div>
            <input onBlur={handlePriceBlur} type="number" placeholder="/1 hours" />
            <input onBlur={handleDescriptionOneBlur} type="text" placeholder="/DescriptionOne" />
            <input onBlur={handleDescriptionTwoBlur} type="text" placeholder="/DescriptionTwo" />
            <input
              onBlur={handleDescriptionThreeBlur}
              type="text"
              placeholder="/DescriptionThree"
            />
          </div>
        }
        trigger="click"
      >
        <Button>Edit </Button>
      </Popover>
    );
  };

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
            <Col key={item.id} xs={24} md={24} lg={24} xl={8}>
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
                  extra={renderEditableServicePopover(item)}
                  style={{ width: 500 }}
                >
                  <div className={styles.contentPricing}>
                    <h2>{item.price} / 1 hour </h2>

                    <span> I am available for full time</span>
                    <span> {item.descriptionOne} </span>
                    <span>{item.descriptionTwo}</span>
                    <span>{item.descriptionThree}</span>
                    <Button type="@color-primary" shape="round">
                      <p> Buy</p>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Services;
