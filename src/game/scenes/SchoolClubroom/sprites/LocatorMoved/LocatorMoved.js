
        import _LocatorMoved from './images/LocatorMoved.png'
let paths = [
        ['SchoolClubroom_LocatorMoved', _LocatorMoved, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LocatorMoved_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LocatorMoved"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 11;
export const Y = 707;
export const Height = 94;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
