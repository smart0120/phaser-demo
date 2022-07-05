import Jacklyn_naked1_body from './body.png'
import Jacklyn_naked1_arm from './arm.png'
import Jacklyn_naked1_bottom1 from './bottom1_panty.png'
import Jacklyn_naked1_bottom2 from './bottom2_skirt.png'
import Jacklyn_naked1_face from './face_smile.png'

let paths = [
        ['Jacklyn_naked1_body', Jacklyn_naked1_body, 3],
        ['Jacklyn_naked1_arm', Jacklyn_naked1_arm, 4],
        ['Jacklyn_naked1_face', Jacklyn_naked1_face, 5],
        ['Jacklyn_naked1_bottom1', Jacklyn_naked1_bottom1, 6],
        ['Jacklyn_naked1_bottom2', Jacklyn_naked1_bottom2, 7],
    ]
;
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const GroupName = "Jacklyn_naked1"
export const GroupId = 22;
export const X = 500;
export const Y = 500;
export const Alpha = 1;
export const Scale = .5;



