
        import _SupplyCloset from './images/SupplyCloset.png'
let paths = [
        ['SchoolArtClass_SupplyCloset', _SupplyCloset, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SupplyCloset_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SupplyCloset"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1515;
export const Y = 220;
export const Height = 501;
export const Interactive= true
export const Width = 280;
export const Alpha = 1;
export let Scale = 1;

 
