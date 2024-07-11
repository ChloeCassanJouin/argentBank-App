import { configureStore, createSlice } from "@reduxjs/toolkit";


//gestion d'états

//SLICE TOKEN
const tokenSlice = createSlice({
  name: "token", 
  initialState: {
    value: null,
    status: 'not_retrieved',
},
  reducers: {
    retrieveToken: (state, action) => {
        state.value = action.payload;
        state.status = 'retrieved';
        console.log("retrieved token :", state.value);
      },
      deleteToken: (state) => {
        state.value = null;
        state.status = 'deleted';
        console.log("deleted token :", state.value);
      },
    },
  });


  //SLICE USER NAME
  const userNameSlice = createSlice({
    name: "id",
    initialState: {
      value: null,
      status: 'not_retrieved',
    },
    reducers: {
      retrieveUserName: (state, action) => {
        state.value = action.payload;
        state.status = 'present';
        console.log("retrieveUserName :", state.value);
      },
      /*updateUserName: (state, action) => {
        state.value = action.payload;
        state.status = 'modified';
      },*/
      deleteUserName: (state) => {
        state.value = '';
        state.status = 'not_present';
      },
    },
  });



//EXPORTATION
export const { retrieveToken, deleteToken } = tokenSlice.actions;
export const { retrieveUserName, deleteUserName } = userNameSlice.actions;



//ENTREPOT GLOBAL
export const store = configureStore({
    reducer: {
      token: tokenSlice.reducer,
      userName: userNameSlice.reducer,
    },
  });