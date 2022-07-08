
        import _Sugarcube7 from './images/Sugarcube7.png'
let paths = [
        ['HomeBathroom_Sugarcube7', _Sugarcube7, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 618;
export const Y = 398;
export const Height = 19;
export const Interactive= true
export const Width = 18;
export const Alpha = 1;
export let Scale = 1;

 
