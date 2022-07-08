
        import _Sugarcube3 from './images/Sugarcube3.png'
let paths = [
        ['HomeBedroom_Sugarcube3', _Sugarcube3, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sugarcube3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sugarcube3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 138;
export const Y = 856;
export const Height = 17;
export const Interactive= true
export const Width = 17;
export const Alpha = 1;
export let Scale = 1;

 
