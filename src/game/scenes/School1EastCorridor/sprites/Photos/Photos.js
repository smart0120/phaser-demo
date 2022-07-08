
        import _Photos from './images/Photos.png'
let paths = [
        ['School1EastCorridor_Photos', _Photos, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Photos_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Photos"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1278;
export const Y = 222;
export const Height = 263;
export const Interactive= true
export const Width = 92;
export const Alpha = 1;
export let Scale = 1;

 
