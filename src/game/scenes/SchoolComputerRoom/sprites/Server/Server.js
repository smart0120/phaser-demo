
        import _Server from './images/Server.png'
let paths = [
        ['SchoolComputerRoom_Server', _Server, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Server_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Server"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1228;
export const Y = 319;
export const Height = 430;
export const Interactive= true
export const Width = 273;
export const Alpha = 1;
export let Scale = 1;

 
