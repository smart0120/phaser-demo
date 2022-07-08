
        import _Position2 from './images/Position2.png'
let paths = [
        ['SchoolGym_Position2', _Position2, 59],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Position2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Position2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 28;
export const Y = 647;
export const Height = 108;
export const Interactive= true
export const Width = 233;
export const Alpha = 1;
export let Scale = 1;

 
