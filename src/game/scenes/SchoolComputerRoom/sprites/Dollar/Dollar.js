
        import _Dollar from './images/Dollar.png'
let paths = [
        ['SchoolComputerRoom_Dollar', _Dollar, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 99;
export const Y = 577;
export const Height = 34;
export const Interactive= true
export const Width = 26;
export const Alpha = 1;
export let Scale = 1;

 
