import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    return (
        <Container>
            {props.user && <Redirect to="/feed" />}
            <Nav>
                <a href="/">
                    <img src="/images/Login-Logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/dxf91zhqd2z6b0bwg85ktm5s4.svg' alt='' />
                </Hero>
                <Form>
                    <Google onClick={() => props.signIn()}>
                        <img src='/images/google.svg' alt='' />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}



const Container = styled.div`
padding: 0px;
`;

const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display:flex;
align-items: center;
position: relative;
justify-content: space-between;  // extra space is distributed around
flex-wrap: nowrap;  // Text will never wrap to the next line.
& > a {
    width: 135px;
    height: 34px;
    @media (min-width:320px) and (max-width: 468px)  {
        padding: 0 5px;
    };
    @media(max-width: 768px){
        padding: 0 5px;
    };
    @media(max-width: 1024px){
        padding: 0 5px;
    };
    @media (max-width: 12450px){
        padding: 0 5px;
    };
} 
`;

const Join = styled.a`
font-size: 16px;
padding: 16px 35px;
text-decoration: none;
color: rgba(0, 0, 0, 0.6);
margin-right: 12px;
border-radius: 24px;
&:hover {
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
}
`;

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0,0,0,0);
&:hover {
    background-color: rgba(103, 177, 196, 0.2);
    color: #0a66c2;
    text-decoration: none;
}
`;

const Section = styled.section`
align-content: flex-start;
display: flex;
min-height: 700px;
padding-bottom: 138px;
padding-top: 40px;
padding: 60px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
align-items: center;
margin: auto;
@media (min-width:320px) and (max-width: 468px) {
    margin: auto;
    min-height: 0px;
};

@media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
};
@media(max-width: 1024px){
    margin: auto;
    min-height: 0px;
};
@media(max-width: 12450px) {
    margin: auto;
    min-height: 0px;
}
`;

const Hero = styled.div`
width: 100%;
h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #8f5849;
    font-weight: 200;
    line-height: 70px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif;
    @media (min-width:320px) and (max-width: 468px) {
        text-align: -webkit-center;
    font-size: 19px;
    width: 100%;
    line-height: 5;
    };
    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    };
    @media (max-width: 1024px){
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    };
    /* @media(max-width: 12450px){
        text-align: center;
        font-size: 20px;
        width: 100%;
        line-height: 2;
    } */
}

img {
    /* z-index: -1; */
    width: 47rem;
    height: 35rem;
    position: absolute;
    bottom: -2px;
    right: -215px;
    top: 40px;


    @media (min-width:320px) and (max-width: 468px)  {
        top: 144px;
        height: 16rem;
        position: absolute;
        bottom: -2px;
        right: -274px;
    };    
     @media (max-width: 768px) {
        top: 40px;
        width: initial;
        position: initial;
        height: initial;
    }; 
     @media(max-width: 1024px){
        top: 40px;
        width: initial;
        position: initial;
        /* height: initial; */
    };
     /* @media(max-width: 12450px){
        /* top: 40px; */
        /* width: initial; */
        /* position: initial; */
        /* height: initial; */
 /*} ;  */
 }
`;

const Form = styled.div`
margin-top: 100px;
width: 408px;
@media (min-width:320px) and (max-width: 468px)  {
    margin-top: 20px;
};
@media (max-width: 768px) {
    margin-top: 20px;
};
@media (max-width: 1024px) {
    margin-top: 20px;
};
@media(max-width: 12450px){
    margin-top: 17rem;
};
`;

const Google = styled.button`
display: flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
border-radius: 28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), 
inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0%);

vertical-align: middle;
z-index: 0;
transition-duration: 167ms;
font-size: 20px;
color: rgba(0, 0, 0, 0.6);
&:hover {
    background-color: rgba(207,207,207, 0.25);
    color: rgba(0,0,0,0.75);
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInAPI()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
