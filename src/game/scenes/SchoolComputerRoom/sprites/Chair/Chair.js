
        import _Chair from './images/Chair.png'
let paths = [
        ['SchoolComputerRoom_Chair', _Chair, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chair_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chair"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 278;
export const Y = 628;
export const Height = 452;
export const Interactive= true
export const Width = 1050;
export const Alpha = 1;
export let Scale = 1;

 
