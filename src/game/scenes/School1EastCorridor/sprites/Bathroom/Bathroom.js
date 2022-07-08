
        import _Bathroom from './images/Bathroom.png'
let paths = [
        ['School1EastCorridor_Bathroom', _Bathroom, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bathroom_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bathroom"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1390;
export const Y = 225;
export const Height = 498;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
