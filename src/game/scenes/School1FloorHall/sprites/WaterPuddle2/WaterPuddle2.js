
        import _WaterPuddle2 from './images/WaterPuddle2.png'
let paths = [
        ['School1FloorHall_WaterPuddle2', _WaterPuddle2, 54],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WaterPuddle2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WaterPuddle2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 117;
export const Y = 699;
export const Height = 22;
export const Interactive= true
export const Width = 50;
export const Alpha = 1;
export let Scale = 1;

 
