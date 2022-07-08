
        import _Bedroom from './images/Bedroom.png'
let paths = [
        ['HomeBedroom_Bedroom', _Bedroom, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bedroom_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bedroom"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = -50;
export const Height = 1198;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
