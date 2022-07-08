
        import _BigBoxChalk from './images/BigBoxChalk.png'
let paths = [
        ['SchoolEnglishClassroom_BigBoxChalk', _BigBoxChalk, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BigBoxChalk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BigBoxChalk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 873;
export const Y = 287;
export const Height = 60;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
