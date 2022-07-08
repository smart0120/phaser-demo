
        import _Farcat from './images/Farcat.png'
let paths = [
        ['School1WestCorridor_Farcat', _Farcat, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Farcat_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Farcat"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1082;
export const Y = 626;
export const Height = 152;
export const Interactive= true
export const Width = 79;
export const Alpha = 1;
export let Scale = 1;

 
