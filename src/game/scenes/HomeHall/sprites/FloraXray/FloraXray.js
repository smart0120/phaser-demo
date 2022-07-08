
        import _FloraXray from './images/FloraXray.png'
let paths = [
        ['HomeHall_FloraXray', _FloraXray, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 167;
export const Y = 360;
export const Height = 585;
export const Interactive= true
export const Width = 302;
export const Alpha = 1;
export let Scale = 1;

 
