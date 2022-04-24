const reducer = (state, action) => {
	if (action.type === "CLEAR_CART") {
		return {
			...state,
			cart: [],
			total: 1110,
		};
	}
	return state;
};

export default reducer;
