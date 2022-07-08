
        import _Dollar1 from './images/Dollar1.png'
let paths = [
        ['SchoolForestGlade_Dollar1', _Dollar1, 86],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 626;
export const Y = 1046;
export const Height = 26;
export const Interactive= true
export const Width = 51;
export const Alpha = 1;
export let Scale = 1;

 
