
        import _Lindsey from './images/Lindsey.png'
let paths = [
        ['HomeBedroom_Lindsey', _Lindsey, 63],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lindsey_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lindsey"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 465;
export const Y = 548;
export const Height = 140;
export const Interactive= true
export const Width = 116;
export const Alpha = 1;
export let Scale = 1;

 
