
        import _Water from './images/Water.png'
let paths = [
        ['HomeBathroom_Water', _Water, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Water_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Water"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1456;
export const Y = 566;
export const Height = 136;
export const Interactive= true
export const Width = 270;
export const Alpha = 1;
export let Scale = 1;

 
