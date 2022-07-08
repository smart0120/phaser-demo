
        import _Clock from './images/Clock.png'
let paths = [
        ['HomeKitchen_Clock', _Clock, 30],
      
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
export const X = 689;
export const Y = 272;
export const Height = 106;
export const Interactive= true
export const Width = 96;
export const Alpha = 1;
export let Scale = 1;

 
