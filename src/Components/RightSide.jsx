import styled from "styled-components";
import React from 'react';

function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <span>
                India's Q1 GDP grows 13.5%
                <h6>Top news</h6>
              </span>
            </a>
          </li>
        </FeedList>

        <Entity>
          <li>
            <a>
              <span>
                Mikhali Gorbachev dies at 91
              </span>
              <h6>1h ago • 11, 291 readers</h6>
            </a>
          </li>
        </Entity>
      </FollowCard>
    </Container>
  )
}


const Container = styled.div`
grid-area: RightSide;
`

const FollowCard = styled.div`
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 6px;
position: relative;
border: none;
padding: 12px;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
width: 100%;
color: rgba(0, 0, 0, 0.9);
font-family: var(--artdeco-reset-typography-font-family-sans)`;

const FeedList = styled.div`
margin-top: 16px;
margin-bottom: 5px;
align-items: center;
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 4px;
}
h6 {
  font-size: 11px;
  display: flex;
  padding: 0px 22px 0px;
  margin: 0 0 10px;
  color: rgba(0,0,0,0.6);
}
`;

const Entity = styled(FeedList)`
margin-top: 0 0 10px;
`;

export default RightSide;
