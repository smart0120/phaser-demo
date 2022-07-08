
        import _RightLampOn0 from './images/RightLampOn0.png'
let paths = [
        ['SchoolEntrance_RightLampOn0', _RightLampOn0, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RightLampOn0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RightLampOn0"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1006;
export const Y = 607;
export const Height = 235;
export const Interactive= true
export const Width = 86;
export const Alpha = 1;
export let Scale = 1;

 
