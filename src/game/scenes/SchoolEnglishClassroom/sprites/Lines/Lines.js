
        import _Lines from './images/Lines.png'
let paths = [
        ['SchoolEnglishClassroom_Lines', _Lines, 2],
      
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
export const X = 940;
export const Y = 60;
export const Height = 453;
export const Interactive= true
export const Width = 313;
export const Alpha = 1;
export let Scale = 1;

 
