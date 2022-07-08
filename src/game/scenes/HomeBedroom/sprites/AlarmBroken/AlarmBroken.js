
        import _AlarmBroken from './images/AlarmBroken.png'
let paths = [
        ['HomeBedroom_AlarmBroken', _AlarmBroken, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./AlarmBroken_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "AlarmBroken"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 306;
export const Y = 698;
export const Height = 45;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
