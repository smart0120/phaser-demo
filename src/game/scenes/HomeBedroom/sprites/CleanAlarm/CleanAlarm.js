
        import _CleanAlarm from './images/CleanAlarm.png'
let paths = [
        ['HomeBedroom_CleanAlarm', _CleanAlarm, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanAlarm_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanAlarm"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 310;
export const Y = 721;
export const Height = 19;
export const Interactive= true
export const Width = 48;
export const Alpha = 1;
export let Scale = 1;

 
