
        import _Desaturation from './images/Desaturation.png'
let paths = [
        ['TitleCArd_Desaturation', _Desaturation, 7],

    ]

      import {store} from "@/store";

   export const event_file = require('./Desaturation_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Desaturation"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= false
export const Width = 1920;
export const Alpha = 0.16470589;
export let Scale = 1;


