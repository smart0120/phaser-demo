
        import _BigTree from './images/BigTree.png'
let paths = [
        ['SchoolForestGlade_BigTree', _BigTree, 90],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BigTree_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BigTree"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1011;
export const Y = 251;
export const Height = 463;
export const Interactive= true
export const Width = 690;
export const Alpha = 1;
export let Scale = 1;

 
