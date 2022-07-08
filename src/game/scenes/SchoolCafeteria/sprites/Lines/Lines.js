
        import _Lines from './images/Lines.png'
let paths = [
        ['SchoolCafeteria_Lines', _Lines, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lines_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lines"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 6;
export const Y = 45;
export const Height = 270;
export const Interactive= true
export const Width = 1914;
export const Alpha = 1;
export let Scale = 1;

 
