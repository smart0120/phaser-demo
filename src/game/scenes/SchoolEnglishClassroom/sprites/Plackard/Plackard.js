
        import _Plackard from './images/Plackard.png'
let paths = [
        ['SchoolEnglishClassroom_Plackard', _Plackard, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Plackard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Plackard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 653;
export const Y = 70;
export const Height = 73;
export const Interactive= true
export const Width = 157;
export const Alpha = 1;
export let Scale = 1;

 
