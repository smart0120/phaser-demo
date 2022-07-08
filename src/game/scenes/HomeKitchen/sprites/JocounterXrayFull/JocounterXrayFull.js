
        import _JocounterXrayFull from './images/JocounterXrayFull.png'
let paths = [
        ['HomeKitchen_JocounterXrayFull', _JocounterXrayFull, 61],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./JocounterXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JocounterXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 779;
export const Y = 356;
export const Height = 625;
export const Interactive= true
export const Width = 161;
export const Alpha = 1;
export let Scale = 1;

 
