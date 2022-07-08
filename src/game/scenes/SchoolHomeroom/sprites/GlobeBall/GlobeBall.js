
        import _GlobeBall from './images/GlobeBall.png'
let paths = [
        ['SchoolHomeroom_GlobeBall', _GlobeBall, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./GlobeBall_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "GlobeBall"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1469;
export const Y = 851;
export const Height = 123;
export const Interactive= true
export const Width = 104;
export const Alpha = 1;
export let Scale = 1;

 
