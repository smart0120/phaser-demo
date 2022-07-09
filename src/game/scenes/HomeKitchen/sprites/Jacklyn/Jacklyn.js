
        import _Jacklyn from './images/Jacklyn.png'
let paths = [
        ['HomeKitchen_Jacklyn', _Jacklyn, 78],

    ]

      import {store} from "@/store";

   export const event_file = require('./Jacklyn_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Jacklyn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 383;
export const Y = 370;
export const Height = 512;
export const Interactive= true
export const Width = 160;
export const Alpha = 1;
export let Scale = 1;


