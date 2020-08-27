import { createContext } from "react";
// imports the context module

// const context = createContext();
// console.log(context); // Logging the createContext object. 

export const Context = createContext({
	StartContext: () => {
		// console.log('updateTrip')
	},
});
// This creates the data object.
