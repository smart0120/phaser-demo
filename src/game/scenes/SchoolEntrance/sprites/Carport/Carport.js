
        import _Carport from './images/Carport.png'
let paths = [
        ['SchoolEntrance_Carport', _Carport, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Carport_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Carport"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1510;
export const Y = 627;
export const Height = 212;
export const Interactive= true
export const Width = 265;
export const Alpha = 1;
export let Scale = 1;

 
