import React from 'react';

// Creact Action Type
const FETCH_API = 'FETCH_API';
const GET_DETAILS = 'GET_DETAILS';

// Create action creator function;
const fetchApi = () => {
	return {
		type: FETCH_API,
		payload: [],
	}
}

const getDetails = () => {
	return {
		type: GET_DETAILS,
		payload: [],
	}
}

// Create Reducer object
const reducer = (state= [], action) => {
    switch(action) {
		case FETCH_API:
			return {state, payload};
		case GET_DETAILS:
			return { state, payload};
		default:
			return state;
	}
}
