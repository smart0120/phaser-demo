
        import _Vapor from './images/Vapor.png'
let paths = [
        ['HomeBathroom_Vapor', _Vapor, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vapor_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vapor"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1467;
export const Y = 362;
export const Height = 289;
export const Interactive= true
export const Width = 252;
export const Alpha = 1;
export let Scale = 1;

 
