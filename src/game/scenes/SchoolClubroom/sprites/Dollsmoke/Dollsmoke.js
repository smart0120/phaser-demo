
        import _Dollsmoke from './images/Dollsmoke.png'
let paths = [
        ['SchoolClubroom_Dollsmoke', _Dollsmoke, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollsmoke_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollsmoke"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1491;
export const Y = 58;
export const Height = 107;
export const Interactive= true
export const Width = 149;
export const Alpha = 1;
export let Scale = 1;

 
