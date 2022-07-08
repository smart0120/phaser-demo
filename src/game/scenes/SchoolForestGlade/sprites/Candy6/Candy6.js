
        import _Candy6 from './images/Candy6.png'
let paths = [
        ['SchoolForestGlade_Candy6', _Candy6, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1512;
export const Y = 873;
export const Height = 15;
export const Interactive= true
export const Width = 26;
export const Alpha = 1;
export let Scale = 1;

 
