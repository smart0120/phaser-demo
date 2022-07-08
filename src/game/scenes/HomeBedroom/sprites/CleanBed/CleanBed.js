
        import _CleanBed from './images/CleanBed.png'
let paths = [
        ['HomeBedroom_CleanBed', _CleanBed, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanBed_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanBed"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 315;
export const Y = 470;
export const Height = 332;
export const Interactive= true
export const Width = 532;
export const Alpha = 1;
export let Scale = 1;

 
