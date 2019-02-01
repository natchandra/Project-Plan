export const createProject = (project) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async to db 
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorID,
            createdAt: new Date()
        }).then(() =>{
            dispatch({ type:'CREATE_PROJECT',project})
        }).catch((err) =>{
            dispatch({type:'CREATE_PROJECT_ERR',err})
        })
    }
}