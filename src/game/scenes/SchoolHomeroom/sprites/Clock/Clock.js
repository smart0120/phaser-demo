
        import _Clock from './images/Clock.png'
let paths = [
        ['SchoolHomeroom_Clock', _Clock, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Clock_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Clock"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 686;
export const Y = 405;
export const Height = 65;
export const Interactive= true
export const Width = 65;
export const Alpha = 1;
export let Scale = 1;

 
