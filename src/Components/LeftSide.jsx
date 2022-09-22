import styled from "styled-components";
import React from 'react';
import { connect } from "react-redux";


function LeftSide(props) {
    return (
        <Container>
            <ArtCard>
                <UsersInfo>
                    <CardBackground />
                    <a href="/">
                        <Photo>
                            {props.user && props.user.photoURL ? (
                                <img src={props.user.photoURL} alt="" />
                            ) : (
                                <img src="/images/user.svg" alt="" />
                            )}
                        </Photo>
                    </a>
                    <UserName>{props.user ? props.user.displayName : " "}</UserName>
                    <a>
                        <Text>--</Text>
                    </a>
                </UsersInfo>

                <Widget>
                    <Entity>
                        <a href="/">
                            <div>
                                <span> Who's viewed your profile </span>
                            </div>
                            <p>41</p>
                        </a>
                    </Entity>

                    <Entities>
                        <a href="/">
                            <div>
                                <span> Impressions of your post </span>
                            </div>
                            <p>35</p>
                        </a>
                    </Entities>
                </Widget>

                <PrimeItem>
                    <a href="/">
                        <div>
                            <span> Access exclusive tools & insights </span>
                            <img src="/images/prime-icon.svg" alt="" />
                            <p>Try Premium for free</p>
                        </div>
                    </a>
                </PrimeItem>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Items
                    </span>
                </Item>
            </ArtCard>

            <CommunityCard>
                <RecentCard>
                    <a href="/">
                        <div>
                            <span>Recent
                                <img src="/images/down_icon.svg" alt="" />
                            </span>
                        </div>
                        <p> # vtfoundation</p>
                    </a>
                </RecentCard>
                <a>
                    <span>Groups</span>
                </a>
                <Event>
                    <a>
                        <span>
                            Events
                            <img src="/images/plus-icon.svg" alt="" />
                        </span>
                    </a>
                </Event>

                <EventFollowed>
                    <a>
                        <span>
                            Followed Hashtags
                            <img src="/images/down_icon.svg" alt="" />
                        </span>
                    </a>
                </EventFollowed>

                <Discover>
                    {/* <a> */}
                    <p>Discover more</p>
                    {/* </a> */}
                </Discover>
            </CommunityCard>
        </Container>
    );
};

const Container = styled.div`
grid-area: LeftSide;
width: 100%!important;
`;

const ArtCard = styled.div`
overflow: hidden;
width: 100%!important;
text-align: center;
margin-bottom: 15px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;


const UsersInfo = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
text-decoration: none;
`;

const CardBackground = styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height: 74px;
margin: -12px -12px 0;
`;

const Photo = styled.div`
box-shadow:  none;
width: 72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 3px solid white;
margin: -38px auto 9px;
border-radius: 50%;
display: flex;
align-items: center;
/* padding: 0 0 0; */
svg,
img {
    width: 4rem;
    height: 4rem;
    background-clip: content-box;
    border: 1px solid transparent;
    border-radius: 50%;
}
`;



const UserName = styled.div`
    line-height: 1.33px;
    margin: 16px 0px 20px;
    text-decoration: none;
`;

const Text = styled.div`
    font-size: 16px;
    line-height: 1.33px;
    color: rgba(0,0,0,0.9);
    margin-top: 13px;
`;

const Widget = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding-top: 10px;
padding-bottom: 5px;
background: #00000000;
`;


const Entity = styled.div`
padding-top: 5px;
padding-bottom: 5px;
p {
    color: #0a66c2;
} 
& > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    padding: 2px 12px;
    font-size: 12px;
    font-weight: bold;
    color: rgba(0,0,0,0.6);
}
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
        font-size: 12px;
    }
}
`;


const Entities = styled.div`
padding-top: 5px;
padding-bottom: 2px;
p {
    color: #0a66c2;
}; 
& > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    padding: 2px 12px;
    font-size: 12px;
    font-weight: bold;
    color: rgba(0,0,0,0.6);
}
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
div {
    display: flex;
    flex-direction: column;
}
`;

const PrimeItem = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
background: #00000000;


& > a {
    /* margin-top: -10px; */
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    font-size: 12px;
};
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    img {
        flex-direction: column;
        display: flex;
        margin: 0px 15px 0px;
        padding-top: 0px;
        width: 19px;
    };
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
        font-size: 12px;
        margin: 0px 1px 0px;
        padding: 0px 4px 0px;
        color: rgba(0,0,0,0.6);
    }
    p {
        font-size: 12px;
        padding: 0px 0px 0px;
        margin: -15px 34px 0px;
        text-decoration: underline;
        font-weight: 550;
        color: rgba(0,0,0,0.9);
        &:hover {
            color: #0a66c2;
        }
    }
`;

const Item = styled.div`
border-color: rgba(0, 0, 0, 0.8);
text-align: left;
padding: 12px;
font-size: 12px;
display: block;
font-weight: bold;

img {
    padding-right: 5px;

}

span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    
    svg {
        color: rgba(0, 0, 0, 0.6);

    }
}
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
}
`;

const CommunityCard = styled(ArtCard)`
/* padding: 8px 0 0; */
text-align: left;
display: flex;
flex-direction: column;
width: 100%!important;
a {
    padding: 4px 12px 4px 2px;
    color: #0a66c2;
    font-weight: bold;
    font-size: 12px;
    margin: 0px 10px 0px;
    /* &: hover {
        text-decoration: underline;
    } */
    span {
        display: flex;
        align-items: center;
        font-weight: bold;
        justify-content: space-between;
        &: hover {
        text-decoration: underline;
    }
    }
}
`;

const RecentCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 15px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
text-align: left;
display: flex;
flex-direction: column;
width: 100%!important;

&:hover {
    background-color: rgba(0, 0, 0, 0.08);
    text-decoration: none;
};
a{
    text-decoration: none;
    padding: 8px 0 0;
    /* padding-bottom: 14px; */
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6)
    }
`;

const Event = styled.div`
text-align: center;
overflow: hidden;
/* margin-bottom: 15px; */
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
text-align: left;
display: flex;
flex-direction: column;
width: 100%!important;
a{
    text-decoration: none;
    padding: 8px 0 0;
    padding-bottom: 2px;
    font-size: 12px;
    color: #0a66c2;
    }
`;

const EventFollowed = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 15px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
text-align: left;
display: flex;
flex-direction: column;
width: 100%!important;
a{
    text-decoration: none;
    padding: 8px 0 0;
    font-size: 12px;
    color: #0a66c2;
    }
`;

const Discover = styled.div`
background-color: #fff;
box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
text-align: center;
width: 100%!important;
p{
    text-decoration: none;
    color: #000;
    font-size: 12px;
    padding: 12px !important;
    color: rgba(0,0,0,0.6);
    font-weight: 550;
    &:hover {
        background-color: rgba(0,0,0,0.08);
    }
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};


export default connect(mapStateToProps)(LeftSide);