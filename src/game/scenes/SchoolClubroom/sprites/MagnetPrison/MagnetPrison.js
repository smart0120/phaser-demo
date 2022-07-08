
        import _MagnetPrison from './images/MagnetPrison.png'
let paths = [
        ['SchoolClubroom_MagnetPrison', _MagnetPrison, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MagnetPrison_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MagnetPrison"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1550;
export const Y = 83;
export const Height = 136;
export const Interactive= true
export const Width = 174;
export const Alpha = 1;
export let Scale = 1;

 
