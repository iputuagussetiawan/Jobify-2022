import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { 
	DISPLAY_ALERT,
	CLEAR_ALERT, 
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR ,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR 
} from "./actions";

import axios from "axios";

const token=localStorage.getItem('token');
const user=localStorage.getItem('user');
const userLocation=localStorage.getItem('location');


export const initialState = {
	isLoading: false,
	showAlert: false,
	alertText: "",
	alertType: "",
	user:user?JSON.parse(user):null,
	token:token,
	userLocation:userLocation || '',
	jobLocation:userLocation || '',
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT });
		clearAlert();
	}

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({
				type: CLEAR_ALERT,
			});
		}, 3000);
	};

	const addUserToLocalStorage = ({ user, token, location }) => {
		localStorage.setItem('user', JSON.stringify(user))
		localStorage.setItem('token', token)
		localStorage.setItem('location', location)
	}
	const removeUserFromLocalStorage = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		localStorage.removeItem('location')
	  }

	const registerUser = async(currentUser)=>{
		dispatch({type:REGISTER_USER_BEGIN})
		try {
			const response= await axios.post('/api/v1/auth/register',
			currentUser)
			//console.log(response)
			const {user,token,location}=response.data
			dispatch({
				type:REGISTER_USER_SUCCESS,
				payload:{user,token,location}
			})
			//local strorage

			addUserToLocalStorage({user,token,location})
			
		} catch (error) {
			//console.log(error.response)
			dispatch({
				type:REGISTER_USER_ERROR,
				payload:{msg:error.response.data.msg}
			})
		}
		clearAlert();
	}

	const loginUser = async(currentUser)=>{
		console.log(currentUser)
	}

	return (
		<AppContext.Provider
			value={{
				...state,displayAlert,registerUser,loginUser
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider };