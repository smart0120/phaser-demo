
        import _Beach from './images/Beach.png'
let paths = [
        ['SchoolNurseRoom_Beach', _Beach, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Beach_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Beach"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1068;
export const Y = 272;
export const Height = 91;
export const Interactive= true
export const Width = 150;
export const Alpha = 1;
export let Scale = 1;

 
