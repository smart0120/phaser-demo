
        import _FlorasadDown from './images/FlorasadDown.png'
let paths = [
        ['Vines_FlorasadDown', _FlorasadDown, 165],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FlorasadDown_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FlorasadDown"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 854;
export const Y = 566;
export const Height = 334;
export const Interactive= true
export const Width = 407;
export const Alpha = 1;
export let Scale = 1;

 
