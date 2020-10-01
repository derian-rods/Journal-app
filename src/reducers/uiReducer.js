import {types} from '../types/types'

const initialState = {
    loading: false,
    msgError: null,
    screenWidth: window.screen.width,
    drawer: null,
    dropMenu: true
}

export const uiReducer = (state= initialState, action) => {
       switch (action.type) {
        case types.uiSetError:
          return{
            ...state,
            msgError: action.payload
           
          }
    
        case types.uiRemoveError:
          return{
            ...state,
            msgError: null
           
          }
    
          case types.uiStartLoading:
            return{
              ...state,
              loading: true
             
            }

    
          case types.uifinishLoading:
            return{
              ...state,
              loading: false
            }
          case types.uiControlDrawer:
            return{
              ...state,
              drawer: action.payload
            }
          case types.uiSetWidthScreen:
            return{
              ...state,
              screenWidth: action.payload
            }
          case types.uiControlDropMenu:
          return{
            ...state,
            dropMenu: action.payload
          }
        default:
            return {
              ...state,
              dropMenu: true
            }
    }
}