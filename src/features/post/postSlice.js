import {createSlice} from '@reduxjs/toolkit'

const initialState =[
    {id:'1',title:'How to use redux toolkit?',content:"It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. Its a good way to test your programming and that the tool being created is working well."},
    {id:'2',title:'Write good essay.',content:'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges.'},
    {id:'3',title:'what is love?',content:'It wasnot quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasnot time to salvage the situation, but he continued to delude himself into believing there was.'}

]



const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{
     postAdded:(state,action)=>{
     state.push(action.payload)
     }
    }
})
export const selectAllPosts = state=>state.posts;
export const {postAdded} = postSlice.actions
export default postSlice.reducer;