
        import _Smoke from './images/Smoke.png'
let paths = [
        ['HomeKitchen_Smoke', _Smoke, 32],

    ]

      import {store} from "@/store";

   export const event_file = require('./Smoke_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Smoke"
export const Id = 22;
export const GroupId = "Fire"
export const Visible = false
export const X = 0;
export const Y = 0;
export const Height = 535;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;


