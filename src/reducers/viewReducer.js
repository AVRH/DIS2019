const view = 'list'

export const changeGroup = (group) => {
    return{
        type:'FORM'
    }
}
const groupReducer = (state = view, action )=> {
    switch(action.type){
        case 'FORM':
            return 'form'
        default:
            return state
    }
}

export default groupReducer