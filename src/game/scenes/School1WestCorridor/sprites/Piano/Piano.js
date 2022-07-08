
        import _Piano from './images/Piano.png'
let paths = [
        ['School1WestCorridor_Piano', _Piano, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Piano_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Piano"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1531;
export const Y = 183;
export const Height = 897;
export const Interactive= true
export const Width = 389;
export const Alpha = 1;
export let Scale = 1;

 
