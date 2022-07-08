
        import _Chest from './images/Chest.png'
let paths = [
        ['SchoolClubroom_Chest', _Chest, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chest_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chest"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1339;
export const Y = 718;
export const Height = 320;
export const Interactive= true
export const Width = 309;
export const Alpha = 1;
export let Scale = 1;

 
