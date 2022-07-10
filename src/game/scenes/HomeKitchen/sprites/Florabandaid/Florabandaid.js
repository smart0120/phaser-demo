import _FlorabandaidXrayFull
    from "@/game/scenes/HomeKitchen/sprites/FlorabandaidXrayFull/images/FlorabandaidXrayFull.png";
import _FlorabandaidXray from "@/game/scenes/HomeKitchen/sprites/FlorabandaidXray/images/FlorabandaidXray.png";
import _Florabandaid from './images/Florabandaid.png'

let paths = [
    ['HomeKitchen_Florabandaid', _Florabandaid, 57],
    ['HomeKitchen_FlorabandaidXray', _FlorabandaidXray, 56],
    ['HomeKitchen_FlorabandaidXrayFull', _FlorabandaidXrayFull, 55],
]


export const event_file = require('./Florabandaid_events.js');


export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Florabandaid"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1022;
export const Y = 439;
export const Height = 542;
export const Interactive = true
export const Width = 242;
export const Alpha = 1;
export let Scale = 1;


