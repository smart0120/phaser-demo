
        import _BeaverRiverLvl2 from './images/BeaverRiverLvl2.png'
let paths = [
        ['SchoolForestGlade_BeaverRiverLvl2', _BeaverRiverLvl2, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BeaverRiverLvl2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BeaverRiverLvl2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 754;
export const Y = 792;
export const Height = 71;
export const Interactive= true
export const Width = 148;
export const Alpha = 1;
export let Scale = 1;

 
