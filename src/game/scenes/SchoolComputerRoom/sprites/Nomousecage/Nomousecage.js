
        import _Nomousecage from './images/Nomousecage.png'
let paths = [
        ['SchoolComputerRoom_Nomousecage', _Nomousecage, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Nomousecage_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Nomousecage"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 722;
export const Height = 158;
export const Interactive= true
export const Width = 129;
export const Alpha = 1;
export let Scale = 1;

 
