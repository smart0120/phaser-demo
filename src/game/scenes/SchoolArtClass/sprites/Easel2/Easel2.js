
        import _Easel2 from './images/Easel2.png'
let paths = [
        ['SchoolArtClass_Easel2', _Easel2, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Easel2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Easel2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1318;
export const Y = 414;
export const Height = 420;
export const Interactive= true
export const Width = 148;
export const Alpha = 1;
export let Scale = 1;

 
