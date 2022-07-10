
        import _Nightoverlay from './images/Nightoverlay.png'
let paths = [
        ['SchoolEntrance_Nightoverlay', _Nightoverlay, 43],

    ]

      import {store} from "@/store";

   export const event_file = require('./Nightoverlay_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Nightoverlay"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = -10;
export const Y = 70;
export const Height = 1149;
export const Interactive=  false
export const Width = 1941;
export const Alpha = 1;
export let Scale = 1;


