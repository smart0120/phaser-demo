
        import _Newspapers from './images/Newspapers.png'
let paths = [
        ['SchoolClubroom_Newspapers', _Newspapers, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Newspapers_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Newspapers"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1582;
export const Y = 897;
export const Height = 183;
export const Interactive= true
export const Width = 296;
export const Alpha = 1;
export let Scale = 1;

 
