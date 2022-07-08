
        import _Shoes1 from './images/Shoes1.png'
let paths = [
        ['School1EastCorridor_Shoes1', _Shoes1, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1245;
export const Y = 522;
export const Height = 18;
export const Interactive= true
export const Width = 12;
export const Alpha = 1;
export let Scale = 1;

 
