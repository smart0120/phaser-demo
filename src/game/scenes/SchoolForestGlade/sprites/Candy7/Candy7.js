
        import _Candy7 from './images/Candy7.png'
let paths = [
        ['SchoolForestGlade_Candy7', _Candy7, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1591;
export const Y = 892;
export const Height = 24;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
