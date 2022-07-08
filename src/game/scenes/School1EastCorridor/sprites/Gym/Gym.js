
        import _Gym from './images/Gym.png'
let paths = [
        ['School1EastCorridor_Gym', _Gym, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Gym_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Gym"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 873;
export const Y = 307;
export const Height = 178;
export const Interactive= true
export const Width = 168;
export const Alpha = 1;
export let Scale = 1;

 
