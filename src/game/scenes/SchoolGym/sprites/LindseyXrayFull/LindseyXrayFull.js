
        import _LindseyXrayFull from './images/LindseyXrayFull.png'
let paths = [
        ['SchoolGym_LindseyXrayFull', _LindseyXrayFull, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 733;
export const Y = 488;
export const Height = 339;
export const Interactive= true
export const Width = 219;
export const Alpha = 1;
export let Scale = 1;

 
