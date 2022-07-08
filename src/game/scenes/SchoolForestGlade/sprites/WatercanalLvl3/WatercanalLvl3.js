
        import _WatercanalLvl3 from './images/WatercanalLvl3.png'
let paths = [
        ['SchoolForestGlade_WatercanalLvl3', _WatercanalLvl3, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WatercanalLvl3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WatercanalLvl3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 842;
export const Y = 642;
export const Height = 65;
export const Interactive= true
export const Width = 340;
export const Alpha = 1;
export let Scale = 1;

 
