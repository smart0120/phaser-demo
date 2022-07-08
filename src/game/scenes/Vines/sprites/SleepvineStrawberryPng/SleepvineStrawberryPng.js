
        import _SleepvineStrawberryPng from './images/SleepvineStrawberryPng.png'
let paths = [
        ['Vines_SleepvineStrawberryPng', _SleepvineStrawberryPng, 61],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SleepvineStrawberryPng_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SleepvineStrawberryPng"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1353;
export const Y = 455;
export const Height = 625;
export const Interactive= true
export const Width = 267;
export const Alpha = 1;
export let Scale = 1;

 
