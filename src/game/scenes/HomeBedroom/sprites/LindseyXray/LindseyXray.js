
        import _LindseyXray from './images/LindseyXray.png'
let paths = [
        ['HomeBedroom_LindseyXray', _LindseyXray, 62],
      
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
export const X = 468;
export const Y = 548;
export const Height = 140;
export const Interactive= true
export const Width = 113;
export const Alpha = 1;
export let Scale = 1;

 
