
        import _CabinetRight from './images/CabinetRight.png'
let paths = [
        ['SchoolComputerRoom_CabinetRight', _CabinetRight, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CabinetRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CabinetRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1113;
export const Y = 356;
export const Height = 314;
export const Interactive= true
export const Width = 181;
export const Alpha = 1;
export let Scale = 1;

 
