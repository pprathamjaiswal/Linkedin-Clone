import styled from "styled-components";
import React from 'react';
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";



function Feed(props) {
  return (
    <Container>
      { !props.user && <Redirect to="/" />}
      <Content>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
      </Content>
    </Container>
  );
};


const Container = styled.div`
padding-top: 72px;
max-width: 100%;
`;


const Content = styled.div`
max-width: 1128px;
margin-left: auto;
margin-right: auto;
`;

const Layout = styled.div`
display: grid;
grid-template-areas: "LeftSide Feed  RightSide";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
column-gap: 25px;
row-gap: 25px;
margin: 25px 0;
margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
  }
`;

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

export default connect(mapStateToProps)(Feed);
