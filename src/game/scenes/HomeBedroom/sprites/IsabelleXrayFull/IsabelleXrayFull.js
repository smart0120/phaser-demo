
        import _IsabelleXrayFull from './images/IsabelleXrayFull.png'
let paths = [
        ['HomeBedroom_IsabelleXrayFull', _IsabelleXrayFull, 57],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./IsabelleXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "IsabelleXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 893;
export const Y = 406;
export const Height = 391;
export const Interactive= true
export const Width = 113;
export const Alpha = 1;
export let Scale = 1;

 
