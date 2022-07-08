
        import _BeaverRiverLvl3 from './images/BeaverRiverLvl3.png'
let paths = [
        ['SchoolForestGlade_BeaverRiverLvl3', _BeaverRiverLvl3, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BeaverRiverLvl3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BeaverRiverLvl3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 760;
export const Y = 792;
export const Height = 39;
export const Interactive= true
export const Width = 142;
export const Alpha = 1;
export let Scale = 1;

 
