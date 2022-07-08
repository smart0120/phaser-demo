
        import _Ribbon from './images/Ribbon.png'
let paths = [
        ['SchoolForestGlade_Ribbon', _Ribbon, 79],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ribbon_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ribbon"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 257;
export const Y = 944;
export const Height = 74;
export const Interactive= true
export const Width = 86;
export const Alpha = 1;
export let Scale = 1;

 
