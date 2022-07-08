
        import _Alarm from './images/Alarm.png'
let paths = [
        ['HomeBedroom_Alarm', _Alarm, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Alarm_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Alarm"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 305;
export const Y = 704;
export const Height = 37;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
