
        import _LeftbackLampOn from './images/LeftbackLampOn.png'
let paths = [
        ['SchoolEntrance_LeftbackLampOn', _LeftbackLampOn, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LeftbackLampOn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LeftbackLampOn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 758;
export const Y = 607;
export const Height = 236;
export const Interactive= true
export const Width = 85;
export const Alpha = 1;
export let Scale = 1;

 
