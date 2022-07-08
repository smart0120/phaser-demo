
        import _ButterfliesOutside from './images/ButterfliesOutside.png'
let paths = [
        ['School1FloorHall_ButterfliesOutside', _ButterfliesOutside, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ButterfliesOutside_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ButterfliesOutside"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 531;
export const Y = 440;
export const Height = 157;
export const Interactive= true
export const Width = 121;
export const Alpha = 1;
export let Scale = 1;

 
