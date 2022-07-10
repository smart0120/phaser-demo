
        import _Handle from './images/Handle.png'
let paths = [
        ['HomeHall_Handle', _Handle, 36],

    ]

      import {store} from "@/store";

   export const event_file = require('./Handle_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Handle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 526;
export const Height = 545;
export const Interactive= false
export const Width = 778;
export const Alpha = 1;
export let Scale = 1;


