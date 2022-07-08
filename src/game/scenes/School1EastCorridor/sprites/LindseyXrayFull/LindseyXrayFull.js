
        import _LindseyXrayFull from './images/LindseyXrayFull.png'
let paths = [
        ['School1EastCorridor_LindseyXrayFull', _LindseyXrayFull, 56],
      
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
export const X = 659;
export const Y = 264;
export const Height = 667;
export const Interactive= true
export const Width = 201;
export const Alpha = 1;
export let Scale = 1;

 
