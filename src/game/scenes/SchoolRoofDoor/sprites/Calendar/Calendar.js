
        import _Calendar from './images/Calendar.png'
let paths = [
        ['SchoolRoofDoor_Calendar', _Calendar, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Calendar_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Calendar"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 809;
export const Y = 316;
export const Height = 434;
export const Interactive= true
export const Width = 291;
export const Alpha = 1;
export let Scale = 1;

 
