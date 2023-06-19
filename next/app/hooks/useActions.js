import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {appActions} from "@/app/store/app/appSlice";
import {projectActions} from "@/app/store/project/projectSlice";
import {tokkenActions} from "@/app/store/tokken/tokkenSlice";
import {bugsActions} from "@/app/store/bugs/bugsSlice";

const allActions = {
  ...appActions,
  ...projectActions,
  ...tokkenActions,
  ...bugsActions
}

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
