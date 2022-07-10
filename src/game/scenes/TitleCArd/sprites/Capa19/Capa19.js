
        import _Capa19 from './images/Capa19.png'
let paths = [
        ['TitleCArd_Capa19', _Capa19, 8],

    ]

      import {store} from "@/store";

   export const event_file = require('./Capa19_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Capa19"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 455;
export const Interactive= false
export const Width = 1920;
export const Alpha = 0.22745098;
export let Scale = 1;


