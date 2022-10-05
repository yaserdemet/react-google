const initialState = {
    loading : false,
}

const reducer = (state = initialState , action) => {

    switch(action.type){

        case "LOAD" :
            return { loading : state.loading = true }

        case "NOTLOAD" :

            return {loading : state.loading = false}

            default:
                return state
    }


}
export default reducer