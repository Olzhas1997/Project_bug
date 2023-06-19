import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "@/app/store/app/appSlice";
import {projectReducer} from "@/app/store/project/projectSlice";
import {tokkenReducer} from "@/app/store/tokken/tokkenSlice";
import {bugsReducer} from "@/app/store/bugs/bugsSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    project: projectReducer,
    tokken: tokkenReducer,
    bugs: bugsReducer
  }
});


