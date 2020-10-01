import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../screen/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { LoadingScreen } from '../screen/LoadingScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';
import { setWidthScreen } from '../actions/ui';

export const AppRouter = () => {
    
    const  dispatch = useDispatch();
  
    const [cheacking, setcheacking] = useState(true);
    const [isLoggedin, setisLoggedin] = useState(false);
    useEffect (() => {
        firebase.auth().onAuthStateChanged(async user => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName, user.photoURL));
                setisLoggedin(true);
              const notes = await loadNotes(user.uid)
              dispatch(setNotes(notes))
              dispatch(setWidthScreen());
            }else{
                setisLoggedin(false);
            }
            setcheacking(false)
                
        })
   }, [dispatch, setcheacking, setisLoggedin,])
   if(cheacking){
       return(
           <LoadingScreen />
       )
   }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/auth' isAuthenticated={isLoggedin} component={AuthRouter}/>
                    <PrivateRoute exact path='/' isAuthenticated={isLoggedin} component={JournalScreen} />
                    <Redirect to='/auth/login'  />
                </Switch>
            </div>
        </Router>
    )
}
