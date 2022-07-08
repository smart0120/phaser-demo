
        import _Midtree from './images/Midtree.png'
let paths = [
        ['Vines_Midtree', _Midtree, 125],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Midtree_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Midtree"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 378;
export const Y = 3;
export const Height = 1080;
export const Interactive= true
export const Width = 1542;
export const Alpha = 1;
export let Scale = 1;

 
