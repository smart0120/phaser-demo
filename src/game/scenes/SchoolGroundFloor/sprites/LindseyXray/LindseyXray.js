
        import _LindseyXray from './images/LindseyXray.png'
let paths = [
        ['SchoolGroundFloor_LindseyXray', _LindseyXray, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 568;
export const Y = 573;
export const Height = 213;
export const Interactive= true
export const Width = 56;
export const Alpha = 1;
export let Scale = 1;

 
