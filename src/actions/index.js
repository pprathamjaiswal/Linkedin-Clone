import db, { auth, provider, storage } from '../firebase';
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";


export function setUser(payload) {
    return ({
        type: SET_USER,
        user: payload,
    });
}

export function setLoading(status) {
    return {
        type: SET_LOADING_STATUS,
        status: status,
    };
}

export function getArticles(payload, id) {
    return {
        type: GET_ARTICLES,
        payload: payload,
        id: id,
    };
}


export function signInAPI() {
    return (dispatch) => {
        auth
            .signInWithPopup(provider)
            .then((payload) => {
                console.log(payload.user);
                dispatch(setUser(payload.user));
            })
            .catch((error) => alert(error.message));
    };
}


export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        });
    };
}


export function signOutAPI() {
    return (dispatch) => {
        auth
            .signOut()
            .then(() => {
                dispatch(setUser(null));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}


export function postArticleAPI(payload) {
    return (dispatch) => {
        dispatch(setLoading(true));

        if (payload.image !== "") {
            const upload = storage
                .ref(`images/${payload.image.name}`)
                .put(payload.image);
            upload.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Progress: ${progress}%`);
                    // if (snapshot.state === "RUNNING") {
                    //     console.log(`Progress: ${progress}%`);
                    // }
                },
                (error) => console.log(error.message),
                async () => {
                    const downloadURL = await upload.snapshot.ref.getDownloadURL();
                    db.collection("articles").add({
                        actor: {
                            description: payload.user.email,
                            title: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL,
                        },
                        video: payload.video,
                        sharedImg: downloadURL,
                        likes: {
                            count: 0,
                            whoLiked: [],
                        },
                        comment: 0,
                        description: payload.description,
                    });
                    dispatch(setLoading(false));
                }
            );
        } else if (payload.video) {
            dispatch(setLoading(true));
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: "",
                likes: {
                    count: 0,
                    whoLiked: [],
                },
                comments: 0,
                description: payload.description,
            });
            dispatch(setLoading(false));
        }
        else if (payload.image === "" && payload.video === "") {
            dispatch(setLoading(true));
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: "",
                sharedImg: "",
                likes: {
                    count: 0,
                    whoLiked: [],
                },
                comments: 0,
                description: payload.description,
            });
            dispatch(setLoading(false));
        }
    };
}

export function getArticlesAPI() {
    return (dispatch) => {
        dispatch(setLoading(true));
        let payload;
        let id;
        db.collection("articles")
            .orderBy("actor.date", "desc")
            .onSnapshot((snapshot) => {
                payload = snapshot.docs.map((doc) => doc.data());
                id = snapshot.docs.map((doc) => doc.id);
                dispatch(getArticles(payload, id));
            });
        dispatch(setLoading(false));
    };
}

export function updateArticleAPI(payload) {
    return (dispatch) => {
        db.collection("articles").doc(payload.id).update(payload.update);
    };
}
