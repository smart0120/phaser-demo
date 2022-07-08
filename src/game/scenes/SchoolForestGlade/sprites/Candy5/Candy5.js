
        import _Candy5 from './images/Candy5.png'
let paths = [
        ['SchoolForestGlade_Candy5', _Candy5, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1108;
export const Y = 851;
export const Height = 20;
export const Interactive= true
export const Width = 32;
export const Alpha = 1;
export let Scale = 1;

 
