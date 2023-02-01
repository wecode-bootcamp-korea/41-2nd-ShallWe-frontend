import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';

const Subscription = ({ children }) => {
  return (
    <SubscriptionContainer>
      <Card width="384px" height="405px">
        ㅎㅇㅎㅇ?
      </Card>
    </SubscriptionContainer>
  );
};

export default Subscription;

const SubscriptionContainer = styled.div`
  width: 100%;
  height: 859px;
  background-color: #f7f7f7;

  display: flex;
  justify-content: center;
  align-items: center;
`;
