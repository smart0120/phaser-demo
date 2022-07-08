
        import _Hoops from './images/Hoops.png'
let paths = [
        ['SchoolGym_Hoops', _Hoops, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Hoops_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Hoops"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 17;
export const Y = 875;
export const Height = 184;
export const Interactive= true
export const Width = 442;
export const Alpha = 1;
export let Scale = 1;

 
