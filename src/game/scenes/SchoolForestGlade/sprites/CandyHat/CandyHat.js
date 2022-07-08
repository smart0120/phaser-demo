
        import _CandyHat from './images/CandyHat.png'
let paths = [
        ['SchoolForestGlade_CandyHat', _CandyHat, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CandyHat_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CandyHat"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 755;
export const Y = 829;
export const Height = 13;
export const Interactive= true
export const Width = 19;
export const Alpha = 1;
export let Scale = 1;

 
