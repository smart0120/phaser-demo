
        import _Duck from './images/Duck.png'
let paths = [
        ['SchoolForestGlade_Duck', _Duck, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Duck_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Duck"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 665;
export const Y = 786;
export const Height = 97;
export const Interactive= true
export const Width = 156;
export const Alpha = 1;
export let Scale = 1;

 
