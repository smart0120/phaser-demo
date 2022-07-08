
        import _GymSign from './images/GymSign.png'
let paths = [
        ['School1EastCorridor_GymSign', _GymSign, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./GymSign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "GymSign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 929;
export const Y = 280;
export const Height = 15;
export const Interactive= true
export const Width = 55;
export const Alpha = 1;
export let Scale = 1;

 
