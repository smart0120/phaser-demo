
        import _Cum from './images/Cum.png'
let paths = [
        ['Vines_Cum', _Cum, 166],

    ]

      import {store} from "@/store";

   export const event_file = require('./Cum_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cum"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 1087;
export const Y = 575;
export const Height = 286;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;


