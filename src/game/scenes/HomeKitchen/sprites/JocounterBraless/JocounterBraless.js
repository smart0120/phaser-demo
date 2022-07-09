
        import _JocounterBraless from './images/JocounterBraless.png'
let paths = [
        ['HomeKitchen_JocounterBraless', _JocounterBraless, 65],

    ]

      import {store} from "@/store";

   export const event_file = require('./JocounterBraless_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JocounterBraless"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 779;
export const Y = 356;
export const Height = 625;
export const Interactive= false
export const Width = 174;
export const Alpha = 1;
export let Scale = 1;


