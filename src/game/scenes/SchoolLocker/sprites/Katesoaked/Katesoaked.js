
        import _Katesoaked from './images/Katesoaked.png'
let paths = [
        ['SchoolLocker_Katesoaked', _Katesoaked, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Katesoaked_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Katesoaked"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1526;
export const Y = 434;
export const Height = 170;
export const Interactive= true
export const Width = 158;
export const Alpha = 1;
export let Scale = 1;

 
