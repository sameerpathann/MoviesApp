import { createSlice } from "@reduxjs/toolkit";
import Peopledata from "../../data/Peoples.json";
export const PeopleSlice = createSlice({
  name: "People",
  initialState: {
    Peopledata,
  },
  reducers: {},
});
export default PeopleSlice.reducer;
