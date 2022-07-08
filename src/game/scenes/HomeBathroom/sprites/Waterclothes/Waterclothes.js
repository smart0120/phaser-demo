
        import _Waterclothes from './images/Waterclothes.png'
let paths = [
        ['HomeBathroom_Waterclothes', _Waterclothes, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Waterclothes_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Waterclothes"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1501;
export const Y = 572;
export const Height = 65;
export const Interactive= true
export const Width = 199;
export const Alpha = 1;
export let Scale = 1;

 
