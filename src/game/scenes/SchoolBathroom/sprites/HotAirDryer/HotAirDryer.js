
        import _HotAirDryer from './images/HotAirDryer.png'
let paths = [
        ['SchoolBathroom_HotAirDryer', _HotAirDryer, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./HotAirDryer_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "HotAirDryer"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 621;
export const Y = 210;
export const Height = 61;
export const Interactive= true
export const Width = 58;
export const Alpha = 1;
export let Scale = 1;

 
