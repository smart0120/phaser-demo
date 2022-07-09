import _Smokekettle from './images/Smokekettle.png'

let paths = [
    ['HomeKitchen_Smokekettle', _Smokekettle, 68],

]

import {store} from "@/store";

export const event_file = require('./Smokekettle_events.js');


export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Smokekettle"
export const Id = 22;
export const GroupId = ["Fire","Kettle"]
export const Visible = false
export const X = 595;
export const Y = 163;
export const Height = 355;
export const Interactive = true
export const Width = 281;
export const Alpha = 1;
export let Scale = 1;


