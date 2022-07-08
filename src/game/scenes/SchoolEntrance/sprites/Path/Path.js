
        import _Path from './images/Path.png'
let paths = [
        ['SchoolEntrance_Path', _Path, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Path_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Path"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 6;
export const Y = 685;
export const Height = 155;
export const Interactive= true
export const Width = 107;
export const Alpha = 1;
export let Scale = 1;

 
