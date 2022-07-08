
        import _Statuettes from './images/Statuettes.png'
let paths = [
        ['HomeBedroom_Statuettes', _Statuettes, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Statuettes_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Statuettes"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1534;
export const Y = 469;
export const Height = 225;
export const Interactive= true
export const Width = 188;
export const Alpha = 1;
export let Scale = 1;

 
