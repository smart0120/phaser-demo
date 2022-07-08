
        import _Tombstone from './images/Tombstone.png'
let paths = [
        ['SchoolForestGlade_Tombstone', _Tombstone, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tombstone_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tombstone"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 689;
export const Y = 854;
export const Height = 145;
export const Interactive= true
export const Width = 161;
export const Alpha = 1;
export let Scale = 1;

 
