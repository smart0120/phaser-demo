
        import _Headmistress from './images/Headmistress.png'
let paths = [
        ['School1WestCorridor_Headmistress', _Headmistress, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Headmistress_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Headmistress"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1084;
export const Y = 270;
export const Height = 119;
export const Interactive= true
export const Width = 86;
export const Alpha = 1;
export let Scale = 1;

 
