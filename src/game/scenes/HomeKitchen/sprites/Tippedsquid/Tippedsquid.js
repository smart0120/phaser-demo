
        import _Tippedsquid from './images/Tippedsquid.png'
let paths = [
        ['HomeKitchen_Tippedsquid', _Tippedsquid, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tippedsquid_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tippedsquid"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 437;
export const Y = 789;
export const Height = 67;
export const Interactive= true
export const Width = 154;
export const Alpha = 1;
export let Scale = 1;

 
