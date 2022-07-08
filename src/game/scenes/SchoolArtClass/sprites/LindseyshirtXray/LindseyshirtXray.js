
        import _LindseyshirtXray from './images/LindseyshirtXray.png'
let paths = [
        ['SchoolArtClass_LindseyshirtXray', _LindseyshirtXray, 58],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseyshirtXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseyshirtXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1229;
export const Y = 400;
export const Height = 643;
export const Interactive= true
export const Width = 224;
export const Alpha = 1;
export let Scale = 1;

 
