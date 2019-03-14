const group = ''

export const changeGroup = (group) => {
    return{
        type:'CHANGE',
        data:{
            group
        }
    }
}
const groupReducer = (state = group, action )=> {
    switch(action.type){
        case 'CHANGE':
            return action.data.group
        default:
            return state
    }
}

export default groupReducer