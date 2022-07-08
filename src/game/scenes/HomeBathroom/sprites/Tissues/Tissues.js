
        import _Tissues from './images/Tissues.png'
let paths = [
        ['HomeBathroom_Tissues', _Tissues, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tissues_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tissues"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1577;
export const Y = 602;
export const Height = 71;
export const Interactive= true
export const Width = 167;
export const Alpha = 1;
export let Scale = 1;

 
