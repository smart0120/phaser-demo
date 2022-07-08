
        import _Bathtub from './images/Bathtub.png'
let paths = [
        ['HomeBathroom_Bathtub', _Bathtub, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bathtub_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bathtub"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 934;
export const Y = 402;
export const Height = 350;
export const Interactive= true
export const Width = 486;
export const Alpha = 1;
export let Scale = 1;

 
