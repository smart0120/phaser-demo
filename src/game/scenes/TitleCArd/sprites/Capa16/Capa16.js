
        import _Capa16 from './images/Capa16.png'
let paths = [
        ['TitleCArd_Capa16', _Capa16, 5],

    ]

      import {store} from "@/store";

   export const event_file = require('./Capa16_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Capa16"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 0;
export const Y = 766;
export const Height = 314;
export const Interactive= false
export const Width = 1920;
export const Alpha = 0.6039216;
export let Scale = 1;


