
        import _Flora from './images/Flora.png'
let paths = [
        ['Vines_Flora', _Flora, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Flora_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flora"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 844;
export const Y = 331;
export const Height = 333;
export const Interactive= true
export const Width = 410;
export const Alpha = 1;
export let Scale = 1;

 
