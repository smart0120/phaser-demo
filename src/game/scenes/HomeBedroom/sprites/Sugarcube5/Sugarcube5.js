
        import _Sugarcube5 from './images/Sugarcube5.png'
let paths = [
        ['HomeBedroom_Sugarcube5', _Sugarcube5, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1118;
export const Y = 679;
export const Height = 19;
export const Interactive= true
export const Width = 14;
export const Alpha = 1;
export let Scale = 1;

 
