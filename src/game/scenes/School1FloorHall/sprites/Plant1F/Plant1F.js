
        import _Plant1F from './images/Plant1F.png'
let paths = [
        ['School1FloorHall_Plant1F', _Plant1F, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Plant1F_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Plant1F"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 561;
export const Y = 770;
export const Height = 105;
export const Interactive= true
export const Width = 77;
export const Alpha = 1;
export let Scale = 1;

 
