import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import PostModel from "./PostModel";
import { connect } from "react-redux";
import { getArticlesAPI, updateArticleAPI } from "../actions";
import ReactPlayer from 'react-player';

function Main(props) {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();

  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };


  function likeHandler(e, postIndex, id) {
    e.preventDefault();
    let currentLikes = props.articles[postIndex].likes.count;
    let whoLiked = props.articles[postIndex].likes.whoLiked;
    let user = props.user.email;
    let userIndex = whoLiked.indexOf(user);

    if (userIndex >= 0) {
      currentLikes--;
      whoLiked.splice(userIndex, 1);
    } else if (userIndex === -1) {
      currentLikes++;
      whoLiked.push(user);
    }

    const payload = {
      update: {
        likes: {
          count: currentLikes,
          whoLiked: whoLiked,
        },
      },
      id: id,
    };

    props.likeHandler(payload);
  }


  return (
    <>
      {(
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button onClick={handleClick}
                disabled={props.loading ? true : false}> Start a Post </button>
            </div>

            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>

              <button>
                <img src="/images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>

              <button>
                <img src="/images/job-icon.svg" alt="" />
                <span>Job</span>
              </button>

              <button>
                <img src="/images/article-icon.svg" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="/images/spin-loader.gif" alt=" " />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <ShareActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>{article.actor.date.toDate().toLocaleTimeString()}</span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" className="ellipsis" alt="" />
                    </button>
                  </ShareActor>
                  <Description>{article.description} </Description>
                  <SharedImg>
                    <a>{!article.sharedImg && article.editorText && article.video ? <ReactPlayer width={"100%"} url={article.video} /> : article.sharedImg && <img src={article.sharedImg} alt="" />}</a>
                  </SharedImg>
                  <SocialCount>
                    {props.articles[key].likes.count > 0 && (
                      <>
                        <li>
                          <button>
                            <img src="/images/Like-icon.svg" alt="" />
                            <img src="/images/hands-like-icons.svg" alt="" />
                            <img src="/images/love-icon.svg" alt="" />
                            <span>{props.articles[key].likes.count}</span>
                          </button>
                        </li>
                        <li><a>{article.comment} </a>
                        </li>
                      </>
                    )}


                  </SocialCount>
                  <SocialAction>
                    <button onClick={(e) => likeHandler(e, key, props.ids[key])}
                      className={props.articles[key].likes.whoLiked.indexOf(props.user.email) >= 0 ? "active" : null}>
                      <img src="/images/likes-icon.svg" alt="" />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comments-icon.svg" alt="" />
                      <span>Comments</span>
                    </button>
                    <button>
                      <img src="/images/share-icon.svg" alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src="/images/send-icon.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialAction>
                </Article>
              ))}
          </Content>
          <PostModel showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
grid-area: Feed;
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
position: relative;
background-color: #fff;
border-radius: 5px;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;


div {
  button {
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 2.8 rem;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;

  }
  &:first-child {
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16px;
    color: #378fe9;
    img {
      width: 48px;
      border-radius: 50%;
      color: #378fe9;
      margin-right: 8px;
    }
    button {
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 35px;
      background-color: white;
      text-align: left;
      :hover{
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
  &:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 4px;

    button {
    img {
      margin: 0 15px 0 -4px;
    }
      :hover{
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 4px;
    }
  }
  }
  
}
`;

const Article = styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;
`;

const ShareActor = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a {
  margin-right: 12px;
  flex-grow: 1px;
  overflow: hidden;
  display: flex;
  text-decoration: none;


  img {
    width: 48px;
    height: 48px;
    border-radius: 30px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span {
      text-align: left;
      &:first-child {
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }

      &:nth-child(n+1) {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}
button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    :hover{
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 5px;
    }
  }
`;

const Description = styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0, 0, 0, 0.9);
font: 14px;
text-align: left;
`;

const SharedImg = styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img {
  object-fit: contain;
  width: 95%;
  height: 100%;
}
`;

const SocialCount = styled.ul`
line-height: 1.3;
display: flex;
align-items: flex-start;
overflow: auto;
margin: 0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style: none;
border: none;
background-color: #e9e5df;
background: transparent; 
li {
  margin-right: 5px;
  /* justify-content: space-evenly; */
  font-size: 12px;
  button {
    border: none;
    display: flex;
    outline: none;
    background: transparent; 
  }
  img {
    margin: 0 -3px 0px
  }
  border: 1px solid white;
}
`;

const SocialAction = styled.div`
align-items: center;
display: flex;
justify-content: flex-start;
margin: 0;
min-height: 40px;
overflow: hidden;
justify-content: space-evenly;
border-radius: 0 4px 0;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

button {
    right: 12px;
    outline: none;
    border: none;
    display: inline-flex;
    align-items: center;
    padding: 8px;
    box-shadow: none;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.6);
    background: transparent; 
  :hover{
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 4px;
    }
    @media(min-width: 768px) {
    span {
      margin-left: 8px;
    }
  }
}
`;

const Content = styled.div`
text-align: center;
background: transparent;
& > img {
  width: 40px;
}
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
    ids: state.articleState.ids,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
  likeHandler: (payload) => dispatch(updateArticleAPI(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
