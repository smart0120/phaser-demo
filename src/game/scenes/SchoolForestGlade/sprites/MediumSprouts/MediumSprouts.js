
        import _MediumSprouts from './images/MediumSprouts.png'
let paths = [
        ['SchoolForestGlade_MediumSprouts', _MediumSprouts, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MediumSprouts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MediumSprouts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 820;
export const Y = 642;
export const Height = 56;
export const Interactive= true
export const Width = 337;
export const Alpha = 1;
export let Scale = 1;

 
