
        import _FloraRightarmVineMilk from './images/FloraRightarmVineMilk.png'
let paths = [
        ['Vines_FloraRightarmVineMilk', _FloraRightarmVineMilk, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraRightarmVineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraRightarmVineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 414;
export const Height = 339;
export const Interactive= true
export const Width = 299;
export const Alpha = 1;
export let Scale = 1;

 
