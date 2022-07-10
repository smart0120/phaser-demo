
        import _Capa15 from './images/Capa15.png'
let paths = [
        ['TitleCArd_Capa15', _Capa15, 4],

    ]

      import {store} from "@/store";

   export const event_file = require('./Capa15_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Capa15"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 384;
export const Y = 0;
export const Height = 1080;
export const Interactive= false
export const Width = 1536;
export const Alpha = 1;
export let Scale = 1;


