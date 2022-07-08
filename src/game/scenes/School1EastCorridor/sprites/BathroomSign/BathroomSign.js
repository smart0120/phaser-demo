
        import _BathroomSign from './images/BathroomSign.png'
let paths = [
        ['School1EastCorridor_BathroomSign', _BathroomSign, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BathroomSign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BathroomSign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1390;
export const Y = 160;
export const Height = 56;
export const Interactive= true
export const Width = 78;
export const Alpha = 1;
export let Scale = 1;

 
