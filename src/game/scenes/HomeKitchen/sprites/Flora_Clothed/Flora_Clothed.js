import _worried from './images/worried.png'
import _thinking from './images/thinking.png'
import _thinking_1_ from './images/thinking_1_.png'
import _smile from './images/smile.png'
import _smile_1_ from './images/smile_1_.png'
import _skeptical from './images/skeptical.png'
import _skeptical_1_ from './images/skeptical_1_.png'
import _sarcastic from './images/sarcastic.png'
import _sarcastic_1_ from './images/sarcastic_1_.png'
import _sad from './images/sad.png'
import _sad_1_ from './images/sad_1_.png'
import _neutral from './images/neutral.png'
import _neutral_1_ from './images/neutral_1_.png'
import _laughing from './images/laughing.png'
import _laughing_1_ from './images/laughing_1_.png'
import _flirty from './images/flirty.png'
import _flirty_1_ from './images/flirty_1_.png'
import _eyeroll from './images/eyeroll.png'
import _excited from './images/excited.png'
import _embarrassed from './images/embarrassed.png'
import _crying from './images/crying.png'
import _cringe from './images/cringe.png'
import _confused from './images/confused.png'
import _confident from './images/confident.png'
import _concerned from './images/concerned.png'
import _blush from './images/blush.png'
import _annoyed_texting from './images/annoyed_texting.png'
import _annoyed from './images/annoyed.png'
import _annoyed_1_ from './images/annoyed_1_.png'
import _angry from './images/angry.png'
import _angry_1_ from './images/angry_1_.png'
import _afraid from './images/afraid.png'
import _afraid_1_ from './images/afraid_1_.png'


let paths = [['HomeKitchen_Flora_Clothed_afraid_1_', _afraid_1_, 0], ['HomeKitchen_Flora_Clothed_afraid', _afraid, 0], ['HomeKitchen_Flora_Clothed_angry_1_', _angry_1_, 0], ['HomeKitchen_Flora_Clothed_angry', _angry, 0], ['HomeKitchen_Flora_Clothed_annoyed_1_', _annoyed_1_, 0], ['HomeKitchen_Flora_Clothed_annoyed', _annoyed, 0], ['HomeKitchen_Flora_Clothed_annoyed_texting', _annoyed_texting, 0], ['HomeKitchen_Flora_Clothed_blush', _blush, 0], ['HomeKitchen_Flora_Clothed_concerned', _concerned, 0], ['HomeKitchen_Flora_Clothed_confident', _confident, 0], ['HomeKitchen_Flora_Clothed_confused', _confused, 0], ['HomeKitchen_Flora_Clothed_cringe', _cringe, 0], ['HomeKitchen_Flora_Clothed_crying', _crying, 0], ['HomeKitchen_Flora_Clothed_embarrassed', _embarrassed, 0], ['HomeKitchen_Flora_Clothed_excited', _excited, 0], ['HomeKitchen_Flora_Clothed_eyeroll', _eyeroll, 0], ['HomeKitchen_Flora_Clothed_flirty_1_', _flirty_1_, 0], ['HomeKitchen_Flora_Clothed_flirty', _flirty, 0], ['HomeKitchen_Flora_Clothed_laughing_1_', _laughing_1_, 0], ['HomeKitchen_Flora_Clothed_laughing', _laughing, 0], ['HomeKitchen_Flora_Clothed_neutral_1_', _neutral_1_, 0], ['HomeKitchen_Flora_Clothed_neutral', _neutral, 0], ['HomeKitchen_Flora_Clothed_sad_1_', _sad_1_, 0], ['HomeKitchen_Flora_Clothed_sad', _sad, 0], ['HomeKitchen_Flora_Clothed_sarcastic_1_', _sarcastic_1_, 0], ['HomeKitchen_Flora_Clothed_sarcastic', _sarcastic, 0], ['HomeKitchen_Flora_Clothed_skeptical_1_', _skeptical_1_, 0], ['HomeKitchen_Flora_Clothed_skeptical', _skeptical, 0], ['HomeKitchen_Flora_Clothed_smile_1_', _smile_1_, 0], ['HomeKitchen_Flora_Clothed_smile', _smile, 0], ['HomeKitchen_Flora_Clothed_thinking_1_', _thinking_1_, 0], ['HomeKitchen_Flora_Clothed_thinking', _thinking, 0], ['HomeKitchen_Flora_Clothed_worried', _worried, 0]]
export const event_file = require('./Flora_Clothed_events.js');

export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flora_Clothed"
export const Id = 22;
export const GroupId = ""
export const Visible = true
export const X = 305;
export const Y = 704;
export const Interactive = true
export const Alpha = 1;
export let Scale = 1;



