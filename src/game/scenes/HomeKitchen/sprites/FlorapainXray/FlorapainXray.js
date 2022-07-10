
        import _FlorapainXray from './images/FlorapainXray.png'
let paths = [
        ['HomeKitchen_FlorapainXray', _FlorapainXray, 42],

    ]

      import {store} from "@/store";

   export const event_file = require('./FlorapainXray_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FlorapainXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 757;
export const Y = 386;
export const Height = 213;
export const Interactive= true
export const Width = 162;
export const Alpha = 1;
export let Scale = 1;


