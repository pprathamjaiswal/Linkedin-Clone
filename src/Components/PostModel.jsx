import styled from "styled-components";
import React, { useState } from 'react';
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../actions";





function PostModal(props) {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    function handleChange(e) {
        const image = e.target.files[0];
        if (image === "" || image === undefined) {
            alert(`Not an image, the file is ${typeof image}`);
            return;
        }
        setShareImage(image);
    }

    function switchAssetArea(area) {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    }


    function postArticle(e) {

        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        props.postArticle(payload);
        reset(e);
    }


    function reset(e) {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }



    return (
        <>
            {props.showModal === 'open' && (
                <Container>
                    <Content>
                        <Header>
                            Create a Post
                            <button onClick={(event) => reset(event)}>
                                <img src="/images/close-icon.svg" alt="" />
                            </button>
                        </Header>

                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? (
                                    <img src={props.user.photoURL} alt="" />
                                ) : (
                                    <img src="/images/user.svg" alt="" />)}
                                <span>{props.user.displayName}</span>
                            </UserInfo>

                            <Editor>
                                <textarea value={editorText}
                                    onChange={(e) => setEditorText(e.target.value)}
                                    placeholder="What do you want to talk about?"
                                    autoFocus={true} />


                                { assetArea === "image" ? (
                                    <UploadImage>
                                        <input
                                            type={'file'} accept='image/gif, image/jpeg, image/jpg, image/png'
                                            name="image"
                                            id="file"
                                            style={{ display: "none" }}
                                            onChange={handleChange}
                                        />
                                        <p>
                                            <label htmlFor="file" >
                                                Select an Image to share
                                            </label>
                                        </p>
                                        {shareImage && (
                                            <img src={URL.createObjectURL(shareImage)} alt=""/>
                                        )}

                                    </UploadImage>
                                ) : (
                                    assetArea === 'media' && (


                                        <>
                                            <input
                                                type={"text"}
                                                name="video"
                                                id="videoFile"
                                                placeholder="Please input a video or Link"
                                                value={videoLink}
                                                onChange={(e) => setVideoLink(e.target.value)}
                                            />
                                            {videoLink && (
                                                <ReactPlayer width={"100%"} url={videoLink} />
                                            )}
                                        </>
                                    )

                                    
                                )}
                            </Editor>

                        </SharedContent>

                        <ShareCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea('image')} >
                                    <img src="/images/Photo-icn.svg" alt="" />
                                </AssetButton>
                                <AssetButton onClick={() => switchAssetArea('media')}>
                                    <img src="/images/video-icn.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/Add-doc-icon.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/job-icn.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/star-burst-icon.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/analytic-icon.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/ellipsis.svg" alt="" />
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src="/images/any-message-icon.svg" alt="" />
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText && !shareImage && !videoLink ? true : false} onClick={(event) => postArticle(event)}
                            >
                                Post
                            </PostButton>
                        </ShareCreation>
                    </Content>
                </Container>
            )}
        </>

    );
};

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 9999;
color: black;
background-color: rgba(0, 0, 0, 0.8);
animation: fadeIn 0.3s;
`;

const Content = styled.div`
width: 100%;
height: 100%;
max-width: 552px;
background-color: white;
/* max-height: 100%; */
overflow: initial;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
top: 0;
margin: 0 auto;
`;

const Header = styled.div`
display: block;
padding: 1px 2px;
border-bottom: 1px solid rgba(0, 0 , 0, 0.15);
font-size: 16px;
line-height: 1.5;
/* color: rgba(0,0,0,0.6); */
/* font-weight: 400; */
/* font-family: var(-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif); */
display: flex;
justify-content: space-between;
align-items: center;
button {
    height: 40px;
    width:40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;
    :hover{
        border-radius: 21px;
        background-color:rgba(0,0,0,0.1);
    }
    border: 1px solid white;
    svg, 
    img {
        pointer-events: none;
    }
}
`;

const SharedContent = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow-y: auto;
background: transparent;
padding: 8px 12px;
`;

const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 0 0 10px;
svg,
img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
}
`;

const ShareCreation = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
display: flex;
align-items: center;
height: 40px;
min-width: auto;
color: rgba(0, 0, 0, 0.5);
border-radius: 50%;
background-color: transparent;
border: transparent;
:hover{
    /* border: 1px solid transparent; */
    border-radius: 21px;
    background-color:rgba(0,0,0,0.1);

}
`;

const AttachAssets = styled.div`
display: flex;
align-items: center;
padding-right: 8px;
${AssetButton} {
    width: 40px;
}
`;

const ShareComment = styled.div`
padding-left: 8px;
margin-right: auto;
border-left: 1px solid rgba(0, 0, 0, 0.15);
${AssetButton} {
    svg {
        margin-right: 5px;
    }
}
`;

const PostButton = styled.button`
min-width: 60px;
border-radius: 20px;
padding-left: 16px;
padding-right: 16px;
background: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.1)' : "#0a66c2")};
border: transparent;
color: ${(props) => (props.disabled ? "rgb(0, 0, 0, 0.08)" : "white")};
&:hover {
    background: ${(props) => (props.disabled ? "" : "#004182")};
}
`;

const Editor = styled.div`
padding: 12px 24px;
outline: none;
margin-left: -20px;
/* border: transparent; */
textarea {
    outline: none;
    border: transparent;
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 17px;
}
input {
    outline: none;
    /* border: transparent; */
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
}
`;

const UploadImage = styled.div`
text-align: center;
img{
    width: 100%;
}
`;




const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        postArticle: (payload) => dispatch(postArticleAPI(payload)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);