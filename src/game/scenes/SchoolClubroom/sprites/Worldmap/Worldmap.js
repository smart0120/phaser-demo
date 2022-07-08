
        import _Worldmap from './images/Worldmap.png'
let paths = [
        ['SchoolClubroom_Worldmap', _Worldmap, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Worldmap_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Worldmap"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1390;
export const Y = 522;
export const Height = 262;
export const Interactive= true
export const Width = 108;
export const Alpha = 1;
export let Scale = 1;

 
