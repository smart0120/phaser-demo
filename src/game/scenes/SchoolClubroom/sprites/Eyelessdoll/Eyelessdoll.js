
        import _Eyelessdoll from './images/Eyelessdoll.png'
let paths = [
        ['SchoolClubroom_Eyelessdoll', _Eyelessdoll, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Eyelessdoll_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Eyelessdoll"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1576;
export const Y = 101;
export const Height = 136;
export const Interactive= true
export const Width = 105;
export const Alpha = 1;
export let Scale = 1;

 
