
        import _Dollar2 from './images/Dollar2.png'
let paths = [
        ['HomeKitchen_Dollar2', _Dollar2, 74],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 129;
export const Y = 326;
export const Height = 25;
export const Interactive= true
export const Width = 34;
export const Alpha = 1;
export let Scale = 1;

 
