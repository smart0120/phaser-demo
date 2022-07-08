
        import _ShipSmashed from './images/ShipSmashed.png'
let paths = [
        ['SchoolArtClass_ShipSmashed', _ShipSmashed, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ShipSmashed_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ShipSmashed"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 897;
export const Y = 232;
export const Height = 176;
export const Interactive= true
export const Width = 242;
export const Alpha = 1;
export let Scale = 1;

 
