
        import _Socket from './images/Socket.png'
let paths = [
        ['HomeHall_Socket', _Socket, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Socket_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Socket"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1503;
export const Y = 665;
export const Height = 40;
export const Interactive= true
export const Width = 19;
export const Alpha = 1;
export let Scale = 1;

 
