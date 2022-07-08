
        import _BookvineMilk from './images/BookvineMilk.png'
let paths = [
        ['Vines_BookvineMilk', _BookvineMilk, 153],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BookvineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BookvineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 91;
export const Y = 118;
export const Height = 202;
export const Interactive= true
export const Width = 705;
export const Alpha = 1;
export let Scale = 1;

 
