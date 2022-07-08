
        import _Doorcenter from './images/Doorcenter.png'
let paths = [
        ['HomeHall_Doorcenter', _Doorcenter, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Doorcenter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Doorcenter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 898;
export const Y = 287;
export const Height = 369;
export const Interactive= true
export const Width = 160;
export const Alpha = 1;
export let Scale = 1;

 
