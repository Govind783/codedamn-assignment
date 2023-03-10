import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// Profile tab data
const userDataSlice = createSlice({
  name: "userData",
  initialState: { dataStoreARR: [] },
  reducers: {
    setDataStoreARR: (state, action) => {
      state.dataStoreARR = action.payload;
    },
  },
});



//SOCIALS TAB DATA
const socialsTabSlice = createSlice({
  name: "socialsTabData",
  initialState: { socialsDataStoreARR: [] },
  reducers: {
    setSocialsDataStoreARR: (state, action) => {
      state.socialsDataStoreARR = action.payload;
    }
  }
})


//RESUME TAB BAIC DATA => THE FIRST 3 inpits and dropdown data
const resumeTabBasicSlice = createSlice({
  name: "resumeTabData",
  initialState: { resumeBasicDetailsDataStoreARR: [] },
  reducers: {
    setResumeBasicDetailsARR: (state, action) => {
      state.resumeBasicDetailsDataStoreARR = action.payload;
    }
  }
})

// RESUMSE TAB EDUCATION DATA
const resumeTabEducationSlice = createSlice({
  name: "resumeTabEducationData",
  initialState: { resumeEducationDataStoreARR: [] },
  reducers: {
    setResumeEducationDataARR: (state, action) => {
      state.resumeEducationDataStoreARR = action.payload;
    }
  }
})

//RESUME TAB WORK EXP DATA
const resumeTabWorkExpSlice = createSlice({
  name: "resumeWorkExp",
  initialState: { resumeWorkExpDataStoreArr: [] },
  reducers: {
    setResumeWorkExpDataArr: (state, action) => {
      state.resumeWorkExpDataStoreArr = action.payload;
    }
  }
})



// RESUME TAB SKILLS
const resumeTabSkillsSlice = createSlice({
  name: "resumeSkills",
  initialState: { userAddedSkills: [] },
  reducers: {
    setResumeSkillsARR: (state, action) => {
      return {
        ...state,
        userAddedSkills: action.payload,
      };
    }
  }
})

// resume tab intrests 
const resumeTabIntrestsSlice = createSlice({
  name: "resumeTabIntrests",
  initialState: { userAddedIntrests: [] },
  reducers: {
    setResumeIntrestsARR: (state, action) => {
      return {
        ...state,
        userAddedIntrests: action.payload
      }
    }
  }
})

// prifile image

export const profileImageSlice = createSlice({
  name: 'profileImageSlice',
  initialState: {
    profileImage: '',
  },
  reducers: {
    setUserProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});



const ReduxStore = configureStore({
  reducer: {
    userData: userDataSlice.reducer,
    socialsDataStore: socialsTabSlice.reducer,
    resumeBasicDataStore: resumeTabBasicSlice.reducer,
    resumeEducationDataStore: resumeTabEducationSlice.reducer,
    resumeWorkExpDataStore: resumeTabWorkExpSlice.reducer,
    resumeSkillsStore: resumeTabSkillsSlice.reducer,
    resumeIntrestsStore: resumeTabIntrestsSlice.reducer,
    userProfileImage: profileImageSlice.reducer
  },
})

export default ReduxStore;

export const userDataActions = userDataSlice.actions;
export const socialsDataActions = socialsTabSlice.actions;
export const resumebasicDetailsACtions = resumeTabBasicSlice.actions;
export const resumeEducationDetailsActions = resumeTabEducationSlice.actions;
export const resumeWorkExpActions = resumeTabWorkExpSlice.actions;
export const resumeAddSkillActions = resumeTabSkillsSlice.actions;
export const resumeAddIntrestsActions = resumeTabIntrestsSlice.actions;
export const useProfileImageActions = profileImageSlice.actions;


