
        import _JacklynXray from './images/JacklynXray.png'
let paths = [
        ['SchoolCafeteria_JacklynXray', _JacklynXray, 66],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./JacklynXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JacklynXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 196;
export const Y = 543;
export const Height = 537;
export const Interactive= true
export const Width = 453;
export const Alpha = 1;
export let Scale = 1;

 
