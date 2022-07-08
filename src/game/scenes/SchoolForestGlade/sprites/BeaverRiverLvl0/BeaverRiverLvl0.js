
        import _BeaverRiverLvl0 from './images/BeaverRiverLvl0.png'
let paths = [
        ['SchoolForestGlade_BeaverRiverLvl0', _BeaverRiverLvl0, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BeaverRiverLvl0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BeaverRiverLvl0"
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

 
