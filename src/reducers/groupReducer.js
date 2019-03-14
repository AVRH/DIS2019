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
            console.log('in reducer')
            return action.data.group
        default:
            console.log('wrong place')
            return state
    }
}

export default groupReducer