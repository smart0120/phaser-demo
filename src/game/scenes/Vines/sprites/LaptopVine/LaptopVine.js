
        import _LaptopVine from './images/LaptopVine.png'
let paths = [
        ['Vines_LaptopVine', _LaptopVine, 73],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LaptopVine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LaptopVine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 729;
export const Height = 207;
export const Interactive= true
export const Width = 83;
export const Alpha = 1;
export let Scale = 1;

 
