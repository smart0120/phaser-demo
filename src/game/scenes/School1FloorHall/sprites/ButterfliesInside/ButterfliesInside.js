
        import _ButterfliesInside from './images/ButterfliesInside.png'
let paths = [
        ['School1FloorHall_ButterfliesInside', _ButterfliesInside, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ButterfliesInside_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ButterfliesInside"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 551;
export const Y = 721;
export const Height = 89;
export const Interactive= true
export const Width = 95;
export const Alpha = 1;
export let Scale = 1;

 
