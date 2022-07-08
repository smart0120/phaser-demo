
        import _Detergent from './images/Detergent.png'
let paths = [
        ['HomeBathroom_Detergent', _Detergent, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Detergent_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Detergent"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1460;
export const Y = 548;
export const Height = 61;
export const Interactive= true
export const Width = 137;
export const Alpha = 1;
export let Scale = 1;

 
