
        import _Board from './images/Board.png'
let paths = [
        ['School1FloorHall_Board', _Board, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Board_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Board"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 66;
export const Y = 443;
export const Height = 112;
export const Interactive= true
export const Width = 125;
export const Alpha = 1;
export let Scale = 1;

 
