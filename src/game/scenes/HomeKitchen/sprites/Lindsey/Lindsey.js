
        import _Lindsey from './images/Lindsey.png'
let paths = [
        ['HomeKitchen_Lindsey', _Lindsey, 35],

    ]

      import {store} from "@/store";

   export const event_file = require('./Lindsey_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lindsey"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 1509;
export const Y = 375;
export const Height = 505;
export const Interactive= true
export const Width = 176;
export const Alpha = 1;
export let Scale = 1;


