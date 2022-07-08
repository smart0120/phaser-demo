
        import _Doorwhite from './images/Doorwhite.png'
let paths = [
        ['HomeHall_Doorwhite', _Doorwhite, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Doorwhite_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Doorwhite"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1328;
export const Y = 235;
export const Height = 461;
export const Interactive= true
export const Width = 131;
export const Alpha = 1;
export let Scale = 1;

 
