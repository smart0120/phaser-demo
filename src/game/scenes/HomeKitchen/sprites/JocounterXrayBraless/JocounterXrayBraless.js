
        import _JocounterXrayBraless from './images/JocounterXrayBraless.png'
let paths = [
        ['HomeKitchen_JocounterXrayBraless', _JocounterXrayBraless, 64],

    ]

      import {store} from "@/store";

   export const event_file = require('./JocounterXrayBraless_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JocounterXrayBraless"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 779;
export const Y = 356;
export const Height = 625;
export const Interactive= true
export const Width = 161;
export const Alpha = 1;
export let Scale = 1;


