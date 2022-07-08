
        import _Puddle from './images/Puddle.png'
let paths = [
        ['Vines_Puddle', _Puddle, 156],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Puddle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Puddle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 622;
export const Y = 714;
export const Height = 28;
export const Interactive= true
export const Width = 168;
export const Alpha = 1;
export let Scale = 1;

 
