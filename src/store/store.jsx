import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./BasketSlice";
import CredentialSlice from "./CredentialSlice";

export const store = configureStore({
	reducer: {
		basket: BasketSlice,
		userCredentials: CredentialSlice,
	},
});

export default store;