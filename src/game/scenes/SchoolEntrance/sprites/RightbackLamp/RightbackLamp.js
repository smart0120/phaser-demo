
        import _RightbackLamp from './images/RightbackLamp.png'
let paths = [
        ['SchoolEntrance_RightbackLamp', _RightbackLamp, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RightbackLamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RightbackLamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1038;
export const Y = 615;
export const Height = 207;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
