
        import _FloraAssVineUrine from './images/FloraAssVineUrine.png'
let paths = [
        ['Vines_FloraAssVineUrine', _FloraAssVineUrine, 157],

    ]

      import {store} from "@/store";

   export const event_file = require('./FloraAssVineUrine_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraAssVineUrine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 0;
export const Y = 565;
export const Height = 332;
export const Interactive= true
export const Width = 1095;
export const Alpha = 1;
export let Scale = 1;


