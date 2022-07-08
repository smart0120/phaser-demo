
        import _SleepvineUrinePng from './images/SleepvineUrinePng.png'
let paths = [
        ['Vines_SleepvineUrinePng', _SleepvineUrinePng, 60],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SleepvineUrinePng_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SleepvineUrinePng"
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

 
