const initState= {
    project:[
        {id:'1',title:'Testing Project 1',content:'Lore ipsum Testing project 1'},
        {id:'2',title:'Testing Project 2',content:'Lore ipsum Testing project 2'},
        {id:'3',title:'Testing Project 3',content:'Lore ipsum Testing project 3'}]
}
const projectReducer = (state = initState,action) =>{
    switch(action.type){
        case 'CREATE_PROJECT': 
            console.log('created project',action.project);
            return state
        case 'CREATE_PROJECT_ERR':
            console.log('created project error', action.err);
            return state
        default: return state
    }
}

export default projectReducer
