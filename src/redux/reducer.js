import * as types from './actionType';

const initialstate = {
    posts : [],
    loading : false,
    error : null,
};

const postReducer = (state = initialstate , action) => {

        switch(action.type)
        {
           case types.Fetch_Post_Start:
            return{
                ...state,
                loading:true,
            };

            case types.Fetch_Post_Success:
                return{
                    ...state,
                    loading:false,
                    posts:action.payload,
                };

            case types.Fetch_Post_Fail:
                return{
                    ...state,
                    loading:false,
                    error:action.payload,
                };

            default:
                return state;
        };
};

export default postReducer;
