
        import _Lindsey from './images/Lindsey.png'
let paths = [
        ['School1EastCorridor_Lindsey', _Lindsey, 58],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lindsey_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lindsey"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 659;
export const Y = 264;
export const Height = 667;
export const Interactive= true
export const Width = 201;
export const Alpha = 1;
export let Scale = 1;

 
